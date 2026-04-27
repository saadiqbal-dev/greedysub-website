import React from 'react';
import StructuredData from './StructuredData';

export default function ProblemSection() {
  const statSchema = {
    '@context': 'https://schema.org',
    '@type': 'StatisticalPopulation',
    name: 'Average annual subscription loss',
    description: '48% of people forget to cancel free trials, losing an average of $240 per person per year to forgotten subscriptions.',
    numConstraints: {
      '@type': 'PropertyValue',
      propertyID: 'averageAnnualLoss',
      value: '240',
      unitText: 'USD',
    },
  };

  return (
    <section aria-labelledby="problem-heading">
      <StructuredData data={statSchema} />
      <div className="wrap">
        <div className="island reveal">
          <div className="problem-wrap">
            <div>
              <div className="section-tag">The problem</div>
              <h2 id="problem-heading">48% of people forget to cancel free trials.</h2>
              <p className="section-lead">You sign up for a "7-day free trial," swear you'll cancel before it charges, then life happens. Three months later, you've paid $60 for something you never used.</p>
              <p className="section-lead" style={{ marginTop: 18 }}>GreedySub is your safety net. It catches the exact moment you sign up, tracks every renewal, and nudges you before money leaves your account.</p>
            </div>
            <div className="stat-card">
              <div className="stat-big" data-counter data-target="240" data-prefix="$">$240</div>
              <div className="stat-cap">Average loss per person, per year, to forgotten subscriptions.</div>
              <div className="receipt">
                <div><strong>RECEIPT</strong></div>
                <div className="strike">Adobe CC × 4mo</div>
                <div className="strike">Hulu × 6mo</div>
                <div className="strike">Audible × 9mo</div>
                <div>Caught early ✓</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
