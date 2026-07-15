import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const files = [
  'index.html',
  'src/App.jsx',
  'src/components/FAQ.jsx',
  'src/components/FinalCTA.jsx',
  'src/components/Navbar.jsx',
  'src/components/OpenSource.jsx',
  'src/pages/PrivacyPolicy.jsx',
  'src/pages/TermsOfService.jsx',
];

const content = Object.fromEntries(await Promise.all(files.map(async (file) => [file, await readFile(file, 'utf8')])));
const combined = Object.values(content).join('\n');

test('pricing and license-gate copy is absent from public pages', () => {
  for (const forbidden of ['Polar.sh', '$5/month', '$40/year', 'license key', '30-day free trial']) {
    assert.doesNotMatch(combined, new RegExp(forbidden.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i'));
  }
});

test('free and open-source messaging links to GitHub', () => {
  assert.match(combined, /free/i);
  assert.match(combined, /open.source/i);
  assert.match(combined, /https:\/\/github\.com\/saadiqbal-dev\/greedysub-website/);
});

test('home page no longer renders a pricing section', () => {
  assert.doesNotMatch(content['src/App.jsx'], /<Pricing|id=["']pricing["']/);
});

test('manifest and embedded structured data are valid JSON', async () => {
  JSON.parse(await readFile('public/manifest.json', 'utf8'));
  const html = content['index.html'];
  const jsonLd = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1];
  assert.ok(jsonLd);
  JSON.parse(jsonLd);
});
