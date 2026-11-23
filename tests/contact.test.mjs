import test from 'node:test';
import assert from 'node:assert/strict';
import { handleContact } from '../src/server/contact.mjs';
const env = { SITE_ORIGIN: 'https://portfolio.test', TURNSTILE_SECRET_KEY: 'private', SMTP_HOST: 'smtp.test', SMTP_PORT: '587', SMTP_USER: 'user', SMTP_PASS: 'private', CONTACT_FROM: 'sender@test.com', CONTACT_TO: 'owner@test.com' };
const data = { firstName: 'Ana', lastName: 'Test', email: 'ana@test.com', phone: '+57 123456789', message: 'Un proyecto editorial', token: 'test-token' };
const request = (body = data, origin = env.SITE_ORIGIN) => new Request('https://portfolio.test/api/contact', { method: 'POST', headers: { origin, 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
test('rejects other origins and invalid input before sending', async () => {
  assert.equal((await handleContact(request(data, 'https://other.test'), env)).status, 403);
  assert.equal((await handleContact(request({ ...data, email: 'bad' }), env)).status, 400);
  assert.equal((await handleContact(request({ ...data, message: 'x'.repeat(21000) }), env)).status, 413);
});
test('rejects invalid CAPTCHA, hostname and action without invoking SMTP', async () => {
  for (const result of [{ success: false }, { success: true, hostname: 'other.test', action: 'contact' }, { success: true, hostname: 'portfolio.test', action: 'login' }]) {
    const response = await handleContact(request(), env, { fetch: async () => Response.json(result), createTransport: () => { assert.fail('SMTP must not run'); } });
    assert.equal(response.status, 400);
  }
});
test('sends only to configured recipient, with visitor as reply-to', async () => {
  let mail;
  const response = await handleContact(request({ ...data, to: 'attacker@test.com' }), env, {
    fetch: async () => Response.json({ success: true, hostname: 'portfolio.test', action: 'contact' }),
    createTransport: () => ({ sendMail: async value => { mail = value; } }),
  });
  assert.equal(response.status, 200); assert.equal(mail.to, env.CONTACT_TO); assert.equal(mail.replyTo, data.email); assert.equal(mail.from, env.CONTACT_FROM);
});
test('SMTP failure does not report success or expose credentials', async () => {
  const response = await handleContact(request(), env, { fetch: async () => Response.json({ success: true, hostname: 'portfolio.test', action: 'contact' }), createTransport: () => ({ sendMail: async () => { throw new Error('private'); } }) });
  assert.equal(response.status, 503); assert.equal((await response.json()).error, 'unavailable');
});
