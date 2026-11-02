import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';

const page = readFileSync(new URL('../src/pages/index.astro', import.meta.url), 'utf8');
const bootstrap = page.match(/<script is:inline>([\s\S]*?)<\/script>/)?.[1];
assert.ok(bootstrap, 'The loader needs its early, fail-open bootstrap.');

function run({ seen = false, reduced = false, hash = '', storageBlocked = false } = {}) {
  const attributes = new Set();
  const timers = [];
  const events = [];
  let inert = true;
  const document = {
    documentElement: {
      setAttribute: key => attributes.add(key),
      hasAttribute: key => attributes.has(key),
      removeAttribute: key => attributes.delete(key),
    },
    querySelectorAll: () => [{ removeAttribute: () => { inert = false; } }],
    dispatchEvent: event => events.push(event.type),
  };
  runInNewContext(bootstrap, {
    document, Event, location: { hash },
    matchMedia: () => ({ matches: reduced }),
    sessionStorage: { getItem: () => { if (storageBlocked) throw new Error('Storage blocked'); return seen ? 'seen' : null; } },
    window: { setTimeout: (callback, delay) => timers.push({ callback, delay }) },
  });
  return { attributes, timers, events, isInert: () => inert };
}

test('first visit shows the intro with a bounded fail-open timeout', () => {
  const state = run();
  assert.ok(state.attributes.has('data-intro-pending'));
  assert.equal(state.timers.length, 1);
  assert.equal(state.timers[0].delay, 6000);
});

test('a missing animation bundle cannot trap the visitor behind the loader', () => {
  const state = run();
  state.timers[0].callback();
  assert.equal(state.attributes.has('data-intro-pending'), false);
  assert.equal(state.isInert(), false);
  assert.deepEqual(state.events, ['portfolio:intro-timeout']);
});

test('return visits and reduced-motion visitors bypass the intro', () => {
  for (const preferences of [{ seen: true }, { reduced: true }]) {
    const state = run(preferences);
    assert.equal(state.attributes.size, 0);
    assert.equal(state.timers.length, 0);
  }
});

test('deep links open the requested section without the intro', () => {
  for (const hash of ['#sobre-mi', '#proyectos', '#contacto']) {
    assert.equal(run({ hash }).attributes.size, 0);
  }
  assert.ok(run({ hash: '#inicio' }).attributes.has('data-intro-pending'));
});

test('blocked session storage does not prevent loading the page', () => {
  assert.ok(run({ storageBlocked: true }).attributes.has('data-intro-pending'));
});

test('the fallback does nothing after a successful intro exit', () => {
  const state = run();
  state.attributes.delete('data-intro-pending');
  state.timers[0].callback();
  assert.deepEqual(state.events, []);
});
