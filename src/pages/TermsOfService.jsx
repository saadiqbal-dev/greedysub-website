import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import { GITHUB_URL } from '../config';

function SectionNum({ n }) {
  return <span className="legal-section-number">{n}</span>;
}

function LegalSection({ num, title, children }) {
  return (
    <article className="legal-card">
      <h2 className="legal-card-title"><SectionNum n={num} />{title}</h2>
      {children}
    </article>
  );
}

const p = { fontSize: 15, lineHeight: 1.7, color: 'var(--ink-2)', margin: '0 0 12px' };
const li = { fontSize: 15, lineHeight: 1.65, color: 'var(--ink-2)', padding: '5px 0' };

function Ul({ items }) {
  return <ul style={{ margin: '8px 0 12px', paddingLeft: 22 }}>{items.map((item) => <li key={item} style={li}>{item}</li>)}</ul>;
}

export default function TermsOfService() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://greedysub.com/' },
      { '@type': 'ListItem', position: 2, name: 'Terms of Service', item: 'https://greedysub.com/terms' },
    ],
  };

  return (
    <>
      <SEO
        title="Terms of Service"
        description="Terms for GreedySub, the free and open-source, local-first subscription tracker for Chrome."
        canonical="https://greedysub.com/terms"
        keywords="GreedySub terms, open source subscription tracker, Chrome extension terms"
      />
      <StructuredData data={breadcrumbSchema} />
      <Navbar legalPage />

      <header className="legal-header">
        <nav aria-label="Breadcrumb" className="legal-breadcrumb">
          <ol><li><Link to="/">Home</Link></li><li aria-hidden="true">/</li><li aria-current="page">Terms of Service</li></ol>
        </nav>
        <div className="wrap">
          <span className="legal-label">Legal</span>
          <h1>Terms of Service</h1>
          <p>Effective date: July 15, 2026 &nbsp;·&nbsp; Last updated: July 15, 2026</p>
        </div>
      </header>

      <main className="legal-main">
        <div className="narrow">
          <div className="legal-summary">
            <p><strong>Plain-English summary:</strong> GreedySub is free, open-source software that helps organize subscriptions. It stores your subscription data in your browser, does not provide financial advice, and cannot guarantee that every detection, reminder, exchange rate, or cancellation link will be accurate or available.</p>
          </div>

          <LegalSection num="1" title="Acceptance of Terms">
            <p style={p}>By installing or using the GreedySub extension or website (together, the “Service”), you agree to these Terms. If you do not agree, do not use the Service. You must be legally able to enter into this agreement in your jurisdiction.</p>
          </LegalSection>

          <LegalSection num="2" title="Free Service">
            <p style={p}>GreedySub is provided without a paid tier, subscription cap, account requirement, or feature paywall. It can track recurring subscriptions and trials, show reminders, detect supported subscription pages, convert dashboard totals, and provide cancellation deep links.</p>
            <p style={p}>We may improve, modify, suspend, or discontinue the hosted website, extension distribution, or supporting services. Because the software is open source, you may continue using or adapting available source code under its license.</p>
          </LegalSection>

          <LegalSection num="3" title="Open-Source License">
            <p style={p}>GreedySub source code is available on <a href={GITHUB_URL} target="_blank" rel="noreferrer">GitHub</a> under the MIT License. The MIT License governs your rights to use, copy, modify, merge, publish, distribute, sublicense, and sell copies of the licensed software.</p>
            <p style={p}>The GreedySub name, logos, and other brand identifiers are not granted for misleading endorsement or impersonation. Third-party libraries and assets may be subject to their own licenses.</p>
          </LegalSection>

          <LegalSection num="4" title="Acceptable Use">
            <p style={p}>You agree not to use the Service to violate applicable law, gain unauthorized access, harm others, distribute malicious code, impersonate another person, or deliberately overload supporting infrastructure.</p>
          </LegalSection>

          <LegalSection num="5" title="Privacy and Local Data">
            <p style={p}>Your use of the Service is also governed by our <Link to="/privacy">Privacy Policy</Link>. Subscription records and preferences are stored locally through Chrome extension storage. GreedySub does not require an account and does not operate a payment or license-validation system.</p>
          </LegalSection>

          <LegalSection num="6" title="Third-Party Services">
            <p style={p}>The Service may interact with third parties, including Chrome and the Chrome Web Store, a public exchange-rate API, GitHub, and service-provider cancellation pages. Their availability, content, and privacy practices are outside our control.</p>
          </LegalSection>

          <LegalSection num="7" title="Accuracy and Financial Disclaimer">
            <p style={p}>GreedySub is an organizational tool, not a bank, accountant, financial institution, or financial adviser. Totals, savings estimates, exchange rates, renewal dates, detections, and alerts are informational only.</p>
            <Ul items={[
              'Detection can miss or misclassify subscriptions and trials.',
              'Chrome or operating-system settings can delay or suppress reminders.',
              'Cancellation links open third-party pages; GreedySub does not complete cancellation for you.',
              'Exchange rates may be delayed or unsuitable for financial decisions.',
            ]} />
            <p style={p}>Verify important dates, charges, and cancellations directly with the relevant provider.</p>
          </LegalSection>

          <LegalSection num="8" title="No Warranty">
            <p style={p}>TO THE FULLEST EXTENT PERMITTED BY LAW, THE SERVICE IS PROVIDED “AS IS” AND “AS AVAILABLE,” WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, ACCURACY, OR AVAILABILITY.</p>
          </LegalSection>

          <LegalSection num="9" title="Limitation of Liability">
            <p style={p}>TO THE FULLEST EXTENT PERMITTED BY LAW, GREEDYSUB’S CONTRIBUTORS SHALL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR LOST DATA, REVENUE, SAVINGS, PROFITS, OR SUBSCRIPTION CHARGES ARISING FROM USE OF OR INABILITY TO USE THE SERVICE.</p>
            <p style={p}>Some jurisdictions do not allow certain limitations, so these limitations apply only to the extent permitted there.</p>
          </LegalSection>

          <LegalSection num="10" title="Changes, Law, and Contact">
            <p style={p}>We may update these Terms by posting a revised version and changing the date above. These Terms are governed by applicable law, without overriding mandatory consumer protections in your jurisdiction.</p>
            <p style={p}>Questions can be sent to <a href="mailto:saad@sloppydev.com">saad@sloppydev.com</a> or raised in the project’s <a href={`${GITHUB_URL}/issues`} target="_blank" rel="noreferrer">GitHub issues</a>.</p>
          </LegalSection>
        </div>
      </main>

      <Footer />
    </>
  );
}
