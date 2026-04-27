import React from 'react';

export default function FinalCTA({ ctaText }) {
  return (
    <section id="cta" className="final">
      <div className="wrap">
        <div className="island tinted reveal" style={{ textAlign: 'center', padding: '100px 56px' }}>
          <div className="narrow">
            <h2>Stop letting subscriptions steal from you.</h2>
            <p>Add GreedySub to Chrome and take back control of your recurring spend — in about 12 seconds.</p>
            <div className="cta-row">
              <a href="#" className="btn btn-primary">{ctaText} <span className="chev">→</span></a>
              <a href="#pricing" className="btn btn-ghost">See plans</a>
            </div>
            <div className="hero-meta" style={{ marginTop: 18 }}>
              <span className="mono">v1.0</span> · Privacy first · Built for Chrome
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
