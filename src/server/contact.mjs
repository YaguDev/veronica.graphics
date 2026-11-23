import 'dotenv/config';
import nodemailer from 'nodemailer';

const reply = (status, error) => new Response(JSON.stringify(error ? { error } : { ok: true }), { status, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' } });
export async function handleContact(request, env = process.env, dependencies = {}) {
  const fetcher = dependencies.fetch || fetch;
  const transport = dependencies.createTransport || nodemailer.createTransport;
  if (!env.SITE_ORIGIN || request.headers.get('origin') !== env.SITE_ORIGIN.replace(/\/$/, '')) return reply(403, 'origin');
  if (!request.headers.get('content-type')?.startsWith('application/json')) return reply(415, 'invalid');
  let data;
  try {
    // Bound streamed requests as well as requests with a Content-Length header.
    const reader = request.body?.getReader();
    if (!reader) return reply(400, 'invalid');
    const chunks = []; let size = 0;
    while (true) { const { done, value } = await reader.read(); if (done) break; size += value.length; if (size > 20000) { await reader.cancel(); return reply(413, 'invalid'); } chunks.push(value); }
    data = JSON.parse(Buffer.concat(chunks).toString('utf8'));
  } catch { return reply(400, 'invalid'); }
  if (!data || typeof data !== 'object') return reply(400, 'invalid');
  const limits = { firstName: 80, lastName: 80, email: 254, phone: 40, message: 5000, token: 2048 };
  for (const [key, limit] of Object.entries(limits)) {
    if (typeof data[key] !== 'string' || !data[key].trim() || data[key].length > limit) return reply(400, 'invalid');
    data[key] = data[key].trim();
  }
  if (!/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(data.email) || /[\r\n]/.test(data.firstName + data.lastName + data.email + data.phone)) return reply(400, 'invalid');
  if (!['TURNSTILE_SECRET_KEY', 'SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS', 'CONTACT_FROM', 'CONTACT_TO'].every(key => env[key])) return reply(503, 'unavailable');
  try {
    const response = await fetcher('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, signal: AbortSignal.timeout(10000),
      body: JSON.stringify({ secret: env.TURNSTILE_SECRET_KEY, response: data.token }),
    });
    if (!response.ok) return reply(503, 'unavailable');
    const result = await response.json();
    if (!result.success || result.action !== 'contact' || result.hostname !== new URL(env.SITE_ORIGIN).hostname) return reply(400, 'captcha');
    const mailer = transport({ host: env.SMTP_HOST, port: Number(env.SMTP_PORT), secure: env.SMTP_SECURE === 'true', requireTLS: env.SMTP_SECURE !== 'true', auth: { user: env.SMTP_USER, pass: env.SMTP_PASS }, connectionTimeout: 10000, socketTimeout: 15000 });
    await mailer.sendMail({ from: env.CONTACT_FROM, to: env.CONTACT_TO, replyTo: data.email, subject: 'Nuevo contacto — Portafolio Verónica', text: `Nombre: ${data.firstName} ${data.lastName}\nCorreo: ${data.email}\nTeléfono: ${data.phone}\n\n${data.message}` });
    return reply(200);
  } catch { return reply(503, 'unavailable'); }
}
