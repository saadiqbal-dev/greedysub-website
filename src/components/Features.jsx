import React from 'react';
import StructuredData from './StructuredData';

const services = [
  'Netflix','Spotify','ChatGPT','Adobe CC','Disney+','Notion','Figma','Canva','GitHub','Slack','Zoom','NordVPN','1Password','HBO Max','Hulu','+ 100 more'
];

export default function Features() {
  const featureSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'GreedySub Core Features',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Auto-detect subscriptions and trials',
        description: 'A lightweight content script reads receipts, checkouts, and trial signups across 130+ known patterns. SPA-aware detection.',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Smart alerts',
        description: 'Daily background checks alert you exactly when it matters — trial ends, renewals, price hikes, and quiet inactivity.',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'One-click cancel',
        description: 'Curated cancellation URLs for 50+ popular services. Click the X on any subscription card to land directly on the cancel page.',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Multi-currency support',
        description: 'Subscriptions in any currency, converted live to your home currency. Supports 25+ currencies.',
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'Budget guardrails',
        description: 'Set a monthly limit. Get warned on the page before you enter your card.',
      },
      {
        '@type': 'ListItem',
        position: 6,
        name: 'Regional defaults',
        description: 'Auto-detects timezone and sets sensible currency, formats, and date conventions. Zero configuration.',
      },
    ],
  };

  return (
    <section id="features" aria-labelledby="features-heading">
      <StructuredData data={featureSchema} />
      <div className="wrap">
        <div className="island tinted reveal">
          <div className="section-tag">Core features</div>
          <h2 id="features-heading">Small surface. Surprisingly thorough.</h2>
          <p className="section-lead">Everything you need to run your recurring spend like a budget, not a leak.</p>

          <div className="feat-grid">
            <div className="feat wide reveal">
              <div className="feat-tag">01 · Auto-detect</div>
              <h3>Catches subscriptions and trials the moment you sign up.</h3>
              <p>A lightweight content script reads receipts, checkouts, and trial signups across 130+ known patterns. Multi-factor confidence scoring prevents false positives. SPA-aware — it catches in-app navigation on React, Vue, and Angular sites, and retries dynamically-loaded content for up to 7.5 seconds.</p>
              <div className="services" aria-label="Supported subscription services">
                {services.map((s) => (
                  <span className="chip" key={s}>{s}</span>
                ))}
              </div>
            </div>

            <div className="feat reveal delay-1">
              <div className="feat-tag">02 · Smart alerts</div>
              <h3>Nudges, not noise.</h3>
              <p>Daily background checks alert you exactly when it matters — trial ends, renewals, price hikes, and quiet inactivity.</p>
              <div className="preview" aria-label="Alert preview">
                <div className="alert-list">
                  <div className="alert-item urgent"><span className="dot a" aria-hidden="true"></span> ChatGPT trial ends <span className="countdown">3d</span></div>
                  <div className="alert-item"><span className="dot r" aria-hidden="true"></span> Adobe CC renews — unused 15d <span className="countdown">2d</span></div>
                  <div className="alert-item"><span className="dot g" aria-hidden="true"></span> Spotify · price up $1 <span className="countdown">today</span></div>
                </div>
              </div>
            </div>

            <div className="feat reveal delay-2">
              <div className="feat-tag">03 · One-click cancel</div>
              <h3>Skip the maze of settings menus.</h3>
              <p>Curated cancellation URLs for 50+ popular services. Click the X on any subscription card → land directly on the cancel page → mark cancelled when done.</p>
              <div className="preview" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, flexDirection: 'column', minHeight: 140 }} aria-label="One-click cancel flow">
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontFamily: "'Geist', ui-sans-serif, system-ui, sans-serif", fontVariantNumeric: 'tabular-nums', letterSpacing: '0.02em', fontSize: 13, color: 'var(--ink-2)' }}>
                  <span>card</span>
                  <span style={{ color: 'var(--sky-deep)' }}>→</span>
                  <span>cancel page</span>
                  <span style={{ color: 'var(--sky-deep)' }}>→</span>
                  <span style={{ color: 'var(--green)' }}>saved $54.99</span>
                </div>
                <div style={{ fontSize: 12, color: 'var(--ink-3)', fontFamily: "'Geist', ui-sans-serif, system-ui, sans-serif", fontVariantNumeric: 'tabular-nums', letterSpacing: '0.02em' }}>avg time: 6 seconds</div>
              </div>
            </div>

            <div className="feat third reveal delay-3">
              <div className="feat-tag">04 · Multi-currency</div>
              <h3>25+ currencies, one number.</h3>
              <p>Subscriptions in any currency, converted live to your home currency.</p>
              <div className="preview" aria-label="Currency conversion preview">
                <div className="currency-list">
                  <div className="currency-row"><span className="from">€9.99</span><span className="to">$10.78</span></div>
                  <div className="currency-row"><span className="from">£12.00</span><span className="to">$15.20</span></div>
                  <div className="currency-row"><span className="from">¥1,490</span><span className="to">$9.84</span></div>
                  <div className="currency-row"><span className="from">₹499</span><span className="to">$5.96</span></div>
                </div>
              </div>
            </div>

            <div className="feat third reveal delay-3">
              <div className="feat-tag">05 · Budget guardrails</div>
              <h3>Catches you at checkout.</h3>
              <p>Set a monthly limit. Get warned on the page before you enter your card.</p>
              <div className="preview" aria-label="Budget tracker preview">
                <div className="budget-bar"><div className="budget-fill"></div></div>
                <div className="budget-row"><span style={{ color: 'var(--ink-3)' }}>$92</span><span style={{ color: 'var(--amber)' }}>92% of $100</span></div>
                <div style={{ marginTop: 10, fontSize: 12.5, color: 'var(--ink-2)', background: 'var(--amber-soft)', border: '1px solid oklch(0.85 0.1 75)', borderRadius: 8, padding: '8px 10px' }} role="alert">⚠︎ Adding this will push you to $127/mo.</div>
              </div>
            </div>

            <div className="feat third reveal delay-4">
              <div className="feat-tag">06 · Regional defaults</div>
              <h3>Works wherever you install.</h3>
              <p>Auto-detects timezone and sets sensible currency, formats, and date conventions. Zero configuration.</p>
              <div className="preview" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, fontFamily: "'Geist', ui-sans-serif, system-ui, sans-serif", fontVariantNumeric: 'tabular-nums', letterSpacing: '0.02em', fontSize: 12 }} aria-label="Regional currency presets">
                <div style={{ background: 'white', border: '1px solid var(--line)', borderRadius: 8, padding: 10 }}><div style={{ color: 'var(--ink-3)' }}>Mumbai</div><div style={{ color: 'var(--sky-deep)', marginTop: 2 }}>INR · ₹</div></div>
                <div style={{ background: 'white', border: '1px solid var(--line)', borderRadius: 8, padding: 10 }}><div style={{ color: 'var(--ink-3)' }}>Berlin</div><div style={{ color: 'var(--sky-deep)', marginTop: 2 }}>EUR · €</div></div>
                <div style={{ background: 'white', border: '1px solid var(--line)', borderRadius: 8, padding: 10 }}><div style={{ color: 'var(--ink-3)' }}>Tokyo</div><div style={{ color: 'var(--sky-deep)', marginTop: 2 }}>JPY · ¥</div></div>
                <div style={{ background: 'white', border: '1px solid var(--line)', borderRadius: 8, padding: 10 }}><div style={{ color: 'var(--ink-3)' }}>São Paulo</div><div style={{ color: 'var(--sky-deep)', marginTop: 2 }}>BRL · R$</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
