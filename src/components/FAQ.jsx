import React from 'react';
import StructuredData from './StructuredData';

const faqs = [
  {
    q: 'Is my data really private?',
    a: 'Yes. 100% of your subscription data lives in your browser\'s local storage. We don\'t have a server that stores your subscriptions, trials, or browsing history. The only cloud communication is checking if your Pro license is valid.',
  },
  {
    q: 'How does auto-detection work?',
    a: 'A tiny content script runs on each page you visit. It checks the URL against 130+ known receipt and checkout patterns, scores the page content for subscription keywords, and extracts pricing if confident. Page content never leaves your browser.',
  },
  {
    q: 'What if a service isn\'t in your database?',
    a: 'You can add subscriptions manually with the "Add Subscription" button anytime. If auto-detection misses something, the "Detect Subscription" button (Pro) lets you manually scan the current page.',
  },
  {
    q: 'Does it work with any currency?',
    a: 'GreedySub detects 25+ currencies and converts to your home currency using live exchange rates. USD, EUR, GBP, JPY, INR, PKR, TRY, CAD, AUD, CHF, BRL, KRW, PLN, SEK, AED, SAR, and more.',
  },
  {
    q: 'Can I export my data?',
    a: 'Pro users can export all subscriptions as a CSV file. Free users can clear all data anytime.',
  },
  {
    q: 'What\'s the refund policy?',
    a: 'Pro subscriptions are handled via Polar.sh. Contact support within 14 days for a full refund — no questions asked.',
  },
];

export default function FAQ() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  return (
    <section id="faq" aria-labelledby="faq-heading">
      <StructuredData data={faqSchema} />
      <div className="wrap">
        <div className="island reveal">
          <div className="section-tag">FAQ</div>
          <h2 id="faq-heading">Quiet answers to fair questions.</h2>

          <div className="faq" itemScope itemType="https://schema.org/FAQPage">
            {faqs.map((item, i) => (
              <details
                name="faq"
                key={i}
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <summary itemProp="name">{item.q}</summary>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p itemProp="text">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
