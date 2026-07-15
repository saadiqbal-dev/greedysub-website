import React from 'react';
import StructuredData from './StructuredData';

const faqs = [
  {
    q: 'Is my data really private?',
    a: 'Yes. Your subscription data lives in your browser\'s local storage. We do not run a cloud database for subscriptions, trials, or browsing history. The extension only fetches anonymous exchange-rate data when currency conversion is needed.',
  },
  {
    q: 'How does auto-detection work?',
    a: 'A tiny content script runs on each page you visit. It checks the URL against 130+ known receipt and checkout patterns, scores the page content for subscription keywords, and extracts pricing if confident. Page content never leaves your browser.',
  },
  {
    q: 'What if a service isn\'t in your database?',
    a: 'You can add subscriptions manually at any time. If auto-detection misses something, use Scan this page to run detection on demand. Both options are free.',
  },
  {
    q: 'Does it work with any currency?',
    a: 'GreedySub detects 25+ currencies and converts to your home currency using live exchange rates. USD, EUR, GBP, JPY, INR, PKR, TRY, CAD, AUD, CHF, BRL, KRW, PLN, SEK, AED, SAR, and more.',
  },
  {
    q: 'Is every feature really free?',
    a: 'Yes. There is no paid plan, subscription limit, account requirement, or feature paywall. Unlimited tracking, alerts, budgets, multi-currency totals, and supported on-device AI are available for free.',
  },
  {
    q: 'Is GreedySub open source?',
    a: 'Yes. The source is public on GitHub under the MIT License. You can inspect the code, report issues, and contribute improvements.',
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
