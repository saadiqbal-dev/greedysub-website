import React from 'react';

export default function Privacy() {
  return (
    <section id="privacy">
      <div className="wrap">
        <div className="island dark reveal">
          <div className="privacy-grid">
            <div>
              <div className="section-tag">Privacy by design</div>
              <h2>Your data never leaves your browser.</h2>
              <p className="section-lead">No cloud database. No analytics pixels. No tracking. The only outbound network call is license validation — and even that works offline for 7 days.</p>
              <ul>
                <li>Subscriptions, trials, and savings stored in <span className="mono">chrome.storage.local</span></li>
                <li>Receipt parser only extracts price, currency, and cycle</li>
                <li>Never reads card numbers, emails, or addresses</li>
                <li>Open about what's processed — and what isn't</li>
              </ul>
            </div>
            <div className="privacy-mock">
              <div><span className="c">// what greedysub reads</span></div>
              <div><span className="k">price</span>: <span className="s">"$10.99"</span></div>
              <div><span className="k">currency</span>: <span className="s">"USD"</span></div>
              <div><span className="k">cycle</span>: <span className="s">"monthly"</span></div>
              <div><span className="k">next_charge</span>: <span className="s">"2026-05-12"</span></div>
              <div style={{ marginTop: 14 }}><span className="c">// what greedysub never touches</span></div>
              <div><span className="x">card_number</span>: <span className="c">— ignored</span></div>
              <div><span className="x">email</span>: <span className="c">— ignored</span></div>
              <div><span className="x">address</span>: <span className="c">— ignored</span></div>
              <div><span className="x">browsing_history</span>: <span className="c">— ignored</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
