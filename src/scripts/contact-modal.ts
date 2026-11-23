type Turnstile = { render: (node: HTMLElement, options: Record<string, unknown>) => string; reset: (id: string) => void; remove: (id: string) => void };
declare global { interface Window { turnstile?: Turnstile } }
let apiPromise: Promise<Turnstile> | undefined;
function loadTurnstile() {
  if (window.turnstile) return Promise.resolve(window.turnstile);
  return apiPromise ??= new Promise<Turnstile>((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
    script.async = true;
    const timer = setTimeout(() => { script.remove(); apiPromise = undefined; reject(new Error('timeout')); }, 15000);
    script.onload = () => { clearTimeout(timer); if (window.turnstile) resolve(window.turnstile); else { apiPromise = undefined; reject(new Error('unavailable')); } };
    script.onerror = () => { clearTimeout(timer); script.remove(); apiPromise = undefined; reject(new Error('unavailable')); };
    document.head.append(script);
  });
}
class ContactModal extends HTMLElement {
  abort?: AbortController;
  widget?: string;
  token = '';
  loading = false;
  busy = false;
  overflow = '';
  connectedCallback() {
    this.abort = new AbortController();
    const { signal } = this.abort;
    const dialog = this.querySelector('dialog')!;
    const form = this.querySelector('form')!;
    const submit = this.querySelector<HTMLButtonElement>('.send')!;
    const status = this.querySelector<HTMLElement>('.status')!;
    const en = this.dataset.lang === 'en';
    const unavailable = en ? 'Unable to connect. Please try again shortly.' : 'No se pudo conectar. Inténtalo de nuevo en unos momentos.';
    const reset = () => { this.token = ''; submit.disabled = true; if (this.widget) window.turnstile?.reset(this.widget); };
    document.addEventListener('click', async event => {
      const trigger = (event.target as Element).closest('[data-contact-open]');
      if (!trigger) return;
      event.preventDefault();
      if (dialog.open) return;
      this.overflow = document.documentElement.style.overflow;
      dialog.showModal(); document.documentElement.style.overflow = 'hidden';
      if (this.widget) { reset(); return; }
      if (this.loading) return;
      this.loading = true;
      status.textContent = en ? 'Loading verification…' : 'Cargando verificación…';
      try {
        const response = await fetch('/api/contact', { signal });
        if (!response.ok) throw new Error();
        const { siteKey } = await response.json();
        if (!siteKey) throw new Error();
        const api = await loadTurnstile();
        if (!this.isConnected) return;
        status.textContent = '';
        this.widget = api.render(this.querySelector<HTMLElement>('[data-turnstile]')!, { sitekey: siteKey, action: 'contact', language: en ? 'en' : 'es', theme: 'light', size: 'flexible',
          callback: (token: string) => { this.token = token; submit.disabled = this.busy; status.textContent = ''; },
          'expired-callback': () => { this.token = ''; submit.disabled = true; },
          'error-callback': () => { this.token = ''; submit.disabled = true; status.textContent = unavailable; },
        });
      } catch { if (!signal.aborted) status.textContent = unavailable; }
      finally { this.loading = false; }
    }, { signal });
    this.querySelector('.close')!.addEventListener('click', () => dialog.close(), { signal });
    dialog.addEventListener('click', event => { if (event.target !== dialog) return; const r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close(); }, { signal });
    dialog.addEventListener('close', () => { document.documentElement.style.overflow = this.overflow; }, { signal });
    document.addEventListener('astro:before-swap', () => { if (dialog.open) { dialog.close(); document.documentElement.style.overflow = this.overflow; } }, { signal });
    form.addEventListener('submit', async event => {
      event.preventDefault(); if (this.busy || !this.token || !form.reportValidity()) return;
      this.busy = true; submit.disabled = true; form.setAttribute('aria-busy', 'true');
      status.textContent = en ? 'Sending…' : 'Enviando…';
      try {
        const response = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...Object.fromEntries(new FormData(form)), token: this.token }), signal });
        const result = await response.json();
        if (!response.ok) { status.textContent = result.error === 'captcha' ? (en ? 'Please complete verification again.' : 'Completa la verificación de nuevo.') : unavailable; }
        else { form.reset(); status.textContent = en ? 'Thank you! Your message has been sent.' : '¡Gracias! Tu mensaje se ha enviado.'; }
      } catch { if (!signal.aborted) status.textContent = unavailable; }
      finally { this.busy = false; form.removeAttribute('aria-busy'); reset(); }
    }, { signal });
  }
  disconnectedCallback() { this.abort?.abort(); if (this.widget) window.turnstile?.remove(this.widget); }
}
if (!customElements.get('contact-modal')) customElements.define('contact-modal', ContactModal);
