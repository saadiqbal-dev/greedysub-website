import React from 'react';
import StructuredData from './StructuredData';

const checkIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12l5 5L20 7"/>
  </svg>
);

export default function Pricing() {
  const offerSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'GreedySub Pro',
    description: 'Unlimited subscriptions, auto-detection, one-click cancel, multi-currency dashboard, budget alerts, price change detection, and CSV export.',
    brand: {
      '@type': 'Brand',
      name: 'GreedySub',
    },
    offers: [
      {
        '@type': 'Offer',
        name: 'Free',
        price: '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: 'https://greedysub.com/#cta',
      },
      {
        '@type': 'Offer',
        name: 'Pro Monthly',
        price: '5',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: 'https://greedysub.com/#cta',
        priceValidUntil: '2026-12-31',
      },
      {
        '@type': 'Offer',
        name: 'Pro Yearly',
        price: '40',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        url: 'https://greedysub.com/#cta',
        priceValidUntil: '2026-12-31',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1200',
      bestRating: '5',
      worstRating: '1',
    },
  };

  return (
    <section id="pricing" aria-labelledby="pricing-heading">
      <StructuredData data={offerSchema} />
      <div className="wrap">
        <div className="island reveal">
          <div className="section-tag">Pricing</div>
          <h2 id="pricing-heading">Free to try. Pro pays for itself.</h2>
          <p className="section-lead">Less than the cost of one forgotten Netflix subscription. 30-day free trial included on Pro.</p>

          <div className="pricing-grid" role="list" aria-label="Pricing plans">
            <div className="plan" role="listitem">
              <div className="plan-name">Free</div>
              <div className="plan-price">$0<span className="per"> / forever</span></div>
              <div className="plan-tag">Get started without a card.</div>
              <ul>
                <li>{checkIcon} Track up to 5 subscriptions</li>
                <li>{checkIcon} Manual add & cancel</li>
                <li>{checkIcon} Basic renewal alerts</li>
                <li>{checkIcon} Home currency selector</li>
                <li>{checkIcon} 100% local data storage</li>
              </ul>
              <a href="#cta" className="btn btn-ghost" aria-label="Add GreedySub Free version to Chrome">Add free version</a>
            </div>

            <div className="plan pro" role="listitem">
              <div className="ribbon">Popular</div>
              <div className="plan-name">Pro</div>
              <div className="plan-price">$5<span className="per"> / mo · or $40 / yr</span></div>
              <div className="plan-tag">Save $20 with yearly. 30-day free trial.</div>
              <ul>
                <li>{checkIcon} Unlimited subscriptions & trials</li>
                <li>{checkIcon} Auto-detect from receipts & checkout</li>
                <li>{checkIcon} One-click cancel (50+ services)</li>
                <li>{checkIcon} Multi-currency dashboard, live rates</li>
                <li>{checkIcon} Budget alerts at checkout</li>
                <li>{checkIcon} Price change detection</li>
                <li>{checkIcon} CSV export</li>
              </ul>
              <a href="#cta" className="btn btn-primary" aria-label="Start 30-day free trial of GreedySub Pro">Start 30-day free trial <span className="chev" aria-hidden="true">→</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
