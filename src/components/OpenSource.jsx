import React from 'react';
import StructuredData from './StructuredData';
import { GITHUB_URL } from '../config';

const points = [
  'Unlimited subscriptions and trials',
  'Automatic and manual detection',
  'Renewal, trial, inactivity, and budget alerts',
  'Multi-currency totals and price-change detection',
  'Local-first storage with no account required',
  'Community contributions welcome',
];

export default function OpenSource() {
  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'GreedySub',
    applicationCategory: 'BrowserApplication',
    operatingSystem: 'Chrome',
    isAccessibleForFree: true,
    codeRepository: GITHUB_URL,
    license: `${GITHUB_URL}/blob/main/LICENSE`,
    offers: {
      '@type': 'Offer',
      name: 'Free',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <section id="open-source" aria-labelledby="open-source-heading">
      <StructuredData data={softwareSchema} />
      <div className="wrap">
        <div className="island reveal open-source-island">
          <div className="open-source-grid">
            <div>
              <div className="section-tag">Free &amp; open source</div>
              <h2 id="open-source-heading">Every feature. Everyone. Forever.</h2>
              <p className="section-lead">
                GreedySub has no paid tier, subscription cap, account requirement, or feature gate. The source is public so anyone can inspect it, improve it, or build on it.
              </p>
              <div className="cta-row">
                <a className="btn btn-primary" href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                  View source on GitHub <span className="chev" aria-hidden="true">→</span>
                </a>
                <a className="btn btn-ghost" href={`${GITHUB_URL}/issues`} target="_blank" rel="noopener noreferrer">
                  Contribute
                </a>
              </div>
            </div>
            <ul className="source-points" aria-label="Features included for free">
              {points.map((point) => <li key={point}>{point}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
