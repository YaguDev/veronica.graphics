import type { APIRoute } from 'astro';
import { handleContact } from '../../server/contact.mjs';
export const prerender = false;
export const GET: APIRoute = () => new Response(JSON.stringify({ siteKey: process.env.PUBLIC_TURNSTILE_SITE_KEY || import.meta.env.PUBLIC_TURNSTILE_SITE_KEY || '' }), { headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' } });
export const POST: APIRoute = ({ request }) => handleContact(request);
