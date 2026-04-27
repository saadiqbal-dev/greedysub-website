import React from 'react';
import StructuredData from './StructuredData';

export default function FinalCTA({ ctaText }) {
  const ctaSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPageElement',
    name: 'Call to Action',
    description: 'Add GreedySub to Chrome and take back control of your recurring spend — in about 12 seconds.',
  };

  return (
    <section id="cta" className="final" aria-labelledby="cta-heading">
      <StructuredData data={ctaSchema} />
      <div className="wrap">
        <div className="island tinted reveal" style={{ textAlign: 'center', padding: '100px 56px' }}>
          <div className="narrow">
            <h2 id="cta-heading">Stop letting subscriptions steal from you.</h2>
            <p>Add GreedySub to Chrome and take back control of your recurring spend — in about 12 seconds.</p>
            <div className="cta-row">
              <a href="#" className="btn btn-primary" aria-label="Add GreedySub to Chrome for free">
                {ctaText} <span className="chev" aria-hidden="true">→</span>
              </a>
              <a href="#pricing" className="btn btn-ghost" aria-label="View GreedySub pricing plans">See plans</a>
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
