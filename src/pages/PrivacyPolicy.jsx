import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function SectionNum({ n }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      width: 26, height: 26, borderRadius: 8,
      background: 'var(--sky-soft)', color: 'var(--sky-deep)',
      fontSize: 12, fontWeight: 600, flexShrink: 0,
    }}>{n}</span>
  );
}

function LegalSection({ num, title, children }) {
  return (
    <div style={{
      background: 'white', border: '1px solid var(--line)',
      borderRadius: 'var(--r-lg)', padding: '40px 44px',
      marginBottom: 16, boxShadow: 'var(--shadow-sm)',
    }}>
      <h2 style={{
        fontSize: 19, fontWeight: 600, letterSpacing: '-0.02em',
        margin: '0 0 16px', color: 'var(--ink)',
        display: 'flex', alignItems: 'center', gap: 10,
      }}>
        <SectionNum n={num} />
        {title}
      </h2>
      {children}
    </div>
  );
}

const p = { fontSize: 15, lineHeight: 1.7, color: 'var(--ink-2)', margin: '0 0 12px' };
const h3 = { fontSize: 15, fontWeight: 600, letterSpacing: '-0.01em', margin: '24px 0 8px', color: 'var(--ink)' };
const li = {
  fontSize: 15, lineHeight: 1.65, color: 'var(--ink-2)',
  padding: '5px 0 5px 20px', position: 'relative',
  borderTop: '1px solid var(--line)',
};

function Ul({ items }) {
  return (
    <ul style={{ margin: '8px 0 12px', paddingLeft: 0, listStyle: 'none' }}>
      {items.map((item, i) => (
        <li key={i} style={{ ...li, ...(i === 0 ? { borderTop: 'none' } : {}) }}>
          <span style={{ position: 'absolute', left: 0, color: 'var(--sky-deep)', fontWeight: 500 }}>–</span>
          <span dangerouslySetInnerHTML={{ __html: item }} />
        </li>
      ))}
    </ul>
  );
}

function DataTable({ headers, rows }) {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', margin: '12px 0', fontSize: 14 }}>
      <thead>
        <tr>
          {headers.map((h, i) => (
            <th key={i} style={{
              textAlign: 'left', fontWeight: 600, color: 'var(--ink-3)',
              fontSize: 12, letterSpacing: '0.05em', textTransform: 'uppercase',
              padding: '8px 12px', borderBottom: '2px solid var(--line)',
            }}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <td key={j} style={{
                padding: '10px 12px', color: j === 0 ? 'var(--ink)' : 'var(--ink-2)',
                fontWeight: j === 0 ? 500 : 400,
                borderBottom: i < rows.length - 1 ? '1px solid var(--line)' : 'none',
                verticalAlign: 'top', lineHeight: 1.55,
              }}>
                <span dangerouslySetInnerHTML={{ __html: cell }} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function PrivacyPolicy() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <Navbar legalPage />

      <header style={{ padding: '120px 0 48px', textAlign: 'center' }}>
        <div className="wrap">
          <span style={{
            display: 'inline-block', fontSize: 12, fontWeight: 500,
            letterSpacing: '0.08em', textTransform: 'uppercase',
            color: 'var(--sky-deep)', background: 'var(--sky-soft)',
            padding: '4px 12px', borderRadius: 999, marginBottom: 20,
          }}>Legal</span>
          <h1 style={{
            fontSize: 'clamp(32px, 5vw, 52px)', lineHeight: 1.08,
            letterSpacing: '-0.03em', fontWeight: 500,
            margin: '0 auto 16px', maxWidth: '22ch',
          }}>Privacy Policy</h1>
          <p style={{ color: 'var(--ink-3)', fontSize: 14, margin: 0 }}>
            Effective date: April 27, 2026 &nbsp;·&nbsp; Last updated: April 27, 2026
          </p>
        </div>
      </header>

      <main style={{ paddingBottom: 100 }}>
        <div className="narrow">

          <div style={{
            background: 'var(--sky-tint)', border: '1px solid var(--sky-soft)',
            borderRadius: 'var(--r)', padding: '16px 20px', marginBottom: 16,
          }}>
            <p style={{ fontSize: 14, color: 'var(--ink-2)', margin: 0 }}>
              <strong style={{ color: 'var(--ink)' }}>The short version:</strong> GreedySub stores all your subscription data locally in your browser using <code>chrome.storage.local</code>. We never send your personal data, browsing history, or financial details to our servers. The only outbound network calls are (1) license validation via Polar.sh and (2) live currency exchange rates from a public API. Your data is yours.
            </p>
          </div>

          <LegalSection num="1" title="Who We Are">
            <p style={p}>GreedySub ("we," "our," or "us") is a subscription tracking browser extension available on the Google Chrome Web Store. This Privacy Policy explains how we collect, use, and protect information when you use the GreedySub extension and website (collectively, the "Service").</p>
            <p style={{ ...p, marginBottom: 0 }}>For privacy-related questions, contact us at: <a href="mailto:privacy@greedysub.com" style={{ color: 'var(--sky-deep)' }}>privacy@greedysub.com</a></p>
          </LegalSection>

          <LegalSection num="2" title="Information We Collect">
            <h3 style={h3}>2.1 Data Stored Locally (Never Sent to Our Servers)</h3>
            <p style={p}>The following data is stored exclusively in your browser's local storage (<code>chrome.storage.local</code>) and never transmitted to GreedySub's servers:</p>
            <DataTable
              headers={['Data Type', 'What We Store', 'Sent to Us?']}
              rows={[
                ['Subscription records', 'Service name, price, currency, billing cycle, next charge date, status', '<span style="color:var(--ink-3);font-style:italic;font-size:13px">Never</span>'],
                ['Trial records', 'Service name, trial end date, converted price', '<span style="color:var(--ink-3);font-style:italic;font-size:13px">Never</span>'],
                ['User preferences', 'Home currency selection, alert settings, display preferences', '<span style="color:var(--ink-3);font-style:italic;font-size:13px">Never</span>'],
                ['Savings history', 'Record of canceled subscriptions and amounts saved', '<span style="color:var(--ink-3);font-style:italic;font-size:13px">Never</span>'],
              ]}
            />

            <h3 style={h3}>2.2 Data We Never Collect</h3>
            <p style={p}>GreedySub's auto-detection content script extracts only minimal billing metadata. The following is explicitly excluded and never read, stored, or transmitted:</p>
            <Ul items={[
              'Credit card numbers, expiration dates, or CVV codes',
              'Email addresses or usernames',
              'Physical or billing addresses',
              'Full browsing history',
              'Passwords or authentication tokens',
              'Bank account information',
              'Personal identifiable information (PII) beyond what you manually enter',
            ]} />

            <h3 style={h3}>2.3 License Validation Data (Sent to Polar.sh)</h3>
            <p style={p}>When you purchase a Pro license, a license key and a non-identifying device fingerprint are transmitted to Polar.sh to validate your subscription. The following minimal data is involved:</p>
            <Ul items={[
              'Your Pro license key (a randomly generated string, not linked to your identity by us)',
              'A hashed, non-reversible device identifier used solely to prevent license sharing',
              'Timestamp of the validation request',
            ]} />
            <p style={{ ...p, marginBottom: 0 }}>This is the only outbound network call made by the extension (besides exchange rate fetching). License validation works offline for up to 7 days.</p>

            <h3 style={h3}>2.4 Currency Exchange Rate Data</h3>
            <p style={{ ...p, marginBottom: 0 }}>If you use the multi-currency dashboard (Pro), the extension fetches live exchange rates from a public API. This request contains no personal data — it is a standard, anonymous API call for rate data only.</p>

            <h3 style={h3}>2.5 Website Analytics</h3>
            <p style={{ ...p, marginBottom: 0 }}>Our marketing website may use privacy-respecting, cookie-free analytics to understand aggregate traffic (e.g., page views, referrers). No personal data or cross-site tracking is used. No advertising cookies are set.</p>
          </LegalSection>

          <LegalSection num="3" title="How We Use Your Information">
            <p style={p}>We use the limited data we receive solely for the following purposes:</p>
            <Ul items={[
              '<strong>License validation:</strong> To confirm your Pro subscription is active and prevent unauthorized use',
              '<strong>Customer support:</strong> If you contact us, we use the information you provide to respond to your inquiry',
              '<strong>Product improvement:</strong> Aggregate, anonymized crash reports (if enabled) to identify and fix bugs',
              '<strong>Legal compliance:</strong> To meet applicable legal obligations',
            ]} />
            <p style={{ ...p, marginBottom: 0 }}>We do not use your data for advertising, behavioral profiling, or sale to third parties.</p>
          </LegalSection>

          <LegalSection num="4" title="Data Sharing and Third Parties">
            <h3 style={h3}>4.1 Polar.sh — Payment Processor</h3>
            <p style={p}>Pro subscriptions are processed by <a href="https://polar.sh" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--sky-deep)' }}>Polar.sh</a>. When you purchase a Pro license, Polar.sh collects and processes your payment information in accordance with their own <a href="https://polar.sh/legal/privacy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--sky-deep)' }}>Privacy Policy</a>. GreedySub does not receive or store your full payment card details.</p>

            <h3 style={h3}>4.2 Exchange Rate API</h3>
            <p style={p}>Anonymous currency rate requests are sent to a public exchange rate service. No personal data is included in these requests.</p>

            <h3 style={h3}>4.3 No Sale of Data</h3>
            <p style={p}>We do not sell, rent, trade, or otherwise transfer your personal information to third parties for commercial purposes. Ever.</p>

            <h3 style={h3}>4.4 Legal Disclosures</h3>
            <p style={{ ...p, marginBottom: 0 }}>We may disclose information if required by law, court order, or governmental authority, or to protect the rights, property, or safety of GreedySub, our users, or others.</p>
          </LegalSection>

          <LegalSection num="5" title="Chrome Extension Permissions">
            <p style={p}>GreedySub requests the following Chrome permissions, each used for a specific, disclosed purpose:</p>
            <DataTable
              headers={['Permission', 'Why We Need It']}
              rows={[
                ['<code>storage</code>', 'Store subscription data locally in <code>chrome.storage.local</code>'],
                ['<code>alarms</code>', 'Schedule renewal and trial-end reminder notifications'],
                ['<code>notifications</code>', 'Display renewal and trial-end alerts'],
                ['<code>activeTab</code>', 'Read the current page when you click "Detect Subscription" (Pro) — only on demand, never automatic'],
                ['Content script on known sites', 'Auto-detect subscription signals on checkout and receipt pages of 130+ supported services'],
              ]}
            />
            <p style={{ ...p, marginBottom: 0 }}>We do not request broad host permissions or "Read and change all your data on all websites."</p>
          </LegalSection>

          <LegalSection num="6" title="Data Retention and Deletion">
            <p style={p}>All subscription data is stored locally in your browser indefinitely until you choose to delete it. You can delete all data at any time within the extension settings ("Clear All Data").</p>
            <p style={p}>When you uninstall GreedySub, Chrome automatically deletes all <code>chrome.storage.local</code> data associated with the extension.</p>
            <p style={{ ...p, marginBottom: 0 }}>License validation records retained by Polar.sh are subject to their data retention policy. You may request deletion of your Polar.sh account data directly through Polar.sh.</p>
          </LegalSection>

          <LegalSection num="7" title="Your Rights">
            <h3 style={h3}>7.1 General Rights</h3>
            <p style={p}>Regardless of your location, you have the right to:</p>
            <Ul items={[
              'Access all data stored by the extension (visible in the extension dashboard)',
              'Delete all locally stored data at any time (via extension settings)',
              'Export your data as a CSV (Pro users)',
              'Opt out of any optional data collection',
            ]} />

            <h3 style={h3}>7.2 GDPR (EEA, UK, and Switzerland)</h3>
            <p style={p}>If you are located in the EEA, UK, or Switzerland, you have additional rights under GDPR: access, rectification, erasure ("right to be forgotten"), restriction of processing, data portability, and the right to object. Contact <a href="mailto:privacy@greedysub.com" style={{ color: 'var(--sky-deep)' }}>privacy@greedysub.com</a> to exercise these rights. Our legal basis for processing license validation data is performance of contract (Article 6(1)(b) GDPR).</p>

            <h3 style={h3}>7.3 CCPA (California Residents)</h3>
            <p style={{ ...p, marginBottom: 0 }}>California residents have the right to know what personal information we collect, the right to deletion, the right to opt out of sale (we do not sell personal information), and the right to non-discrimination. Contact <a href="mailto:privacy@greedysub.com" style={{ color: 'var(--sky-deep)' }}>privacy@greedysub.com</a> to submit a request.</p>
          </LegalSection>

          <LegalSection num="8" title="Data Security">
            <p style={p}>Because your subscription data never leaves your browser, it is protected by Chrome's built-in security model. <code>chrome.storage.local</code> data is sandboxed to the GreedySub extension and cannot be accessed by other extensions or websites.</p>
            <p style={p}>We apply industry-standard security practices to any data that passes through our systems (license validation), including TLS encryption in transit and encryption at rest.</p>
            <p style={{ ...p, marginBottom: 0 }}>In the unlikely event of a data breach affecting our systems, we will notify affected users in accordance with applicable law.</p>
          </LegalSection>

          <LegalSection num="9" title="Children's Privacy">
            <p style={{ ...p, marginBottom: 0 }}>GreedySub is not directed to children under 13 (or 16 in the EEA). We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, contact <a href="mailto:privacy@greedysub.com" style={{ color: 'var(--sky-deep)' }}>privacy@greedysub.com</a> and we will delete it.</p>
          </LegalSection>

          <LegalSection num="10" title="Cookies">
            <p style={{ ...p, marginBottom: 0 }}>The GreedySub browser extension does not use cookies. Our marketing website may use a limited number of strictly necessary cookies for functionality. We do not use advertising, tracking, or third-party analytics cookies.</p>
          </LegalSection>

          <LegalSection num="11" title="App Store Compliance">
            <h3 style={h3}>Google Chrome Web Store</h3>
            <p style={p}>GreedySub complies with the <a href="https://developer.chrome.com/docs/extensions/develop/concepts/user-data-faq" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--sky-deep)' }}>Chrome Web Store User Data Policy</a>. The extension has a single purpose, requests only necessary permissions, and handles user data as described in this policy.</p>

            <h3 style={h3}>Google Play Store</h3>
            <p style={p}>If GreedySub becomes available on Android, it will comply with <a href="https://support.google.com/googleplay/android-developer/answer/10144311" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--sky-deep)' }}>Google Play Data Safety</a> requirements, with data collection and sharing practices disclosed consistent with this Privacy Policy.</p>

            <h3 style={h3}>Apple App Store</h3>
            <p style={{ ...p, marginBottom: 0 }}>If GreedySub becomes available on iOS, it will comply with Apple's <a href="https://developer.apple.com/app-store/app-privacy-details/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--sky-deep)' }}>App Privacy Details</a> requirements, including Privacy Nutrition Labels, consistent with this Privacy Policy.</p>
          </LegalSection>

          <LegalSection num="12" title="Changes to This Policy">
            <p style={p}>We may update this Privacy Policy from time to time. When we make material changes, we will update the "Last updated" date at the top of this page and, where appropriate, notify you through the extension or by email.</p>
            <p style={{ ...p, marginBottom: 0 }}>Your continued use of GreedySub after changes become effective constitutes acceptance of the updated policy.</p>
          </LegalSection>

          <LegalSection num="13" title="Contact Us">
            <p style={p}>For any questions or requests regarding this Privacy Policy:</p>
            <Ul items={[
              '<strong>Email:</strong> <a href="mailto:privacy@greedysub.com" style="color:var(--sky-deep)">privacy@greedysub.com</a>',
              '<strong>Support:</strong> <a href="mailto:support@greedysub.com" style="color:var(--sky-deep)">support@greedysub.com</a>',
            ]} />
            <p style={{ ...p, marginBottom: 0 }}>We will respond to all privacy-related requests within 30 days.</p>
          </LegalSection>

        </div>
      </main>

      <Footer />
    </>
  );
}
