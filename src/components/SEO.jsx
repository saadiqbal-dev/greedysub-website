import { useEffect } from 'react';

const defaultMeta = {
  title: 'GreedySub — Subscription Tracker & Trial Reminder for Chrome',
  description: 'Spot subscriptions and free trials the moment you sign up, get warned before they charge, and cancel in one click. All your data stays private — right in your browser.',
  canonical: 'https://greedysub.com/',
  ogImage: 'https://greedysub.com/og-image.png',
  ogType: 'website',
};

export default function SEO({
  title = defaultMeta.title,
  description = defaultMeta.description,
  canonical = defaultMeta.canonical,
  ogImage = defaultMeta.ogImage,
  ogType = defaultMeta.ogType,
  noindex = false,
  keywords = '',
}) {
  useEffect(() => {
    const fullTitle = title === defaultMeta.title ? title : `${title} | GreedySub`;

    document.title = fullTitle;

    const setMeta = (selector, content) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        const attr = selector.includes('property=') ? 'property' : 'name';
        const key = selector.match(/"([^"]+)"/)?.[1];
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', fullTitle);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:url"]', canonical);
    setMeta('meta[property="og:type"]', ogType);
    setMeta('meta[property="og:image"]', ogImage);
    setMeta('meta[name="twitter:title"]', fullTitle);
    setMeta('meta[name="twitter:description"]', description);
    setMeta('meta[name="twitter:image"]', ogImage);

    if (keywords) {
      setMeta('meta[name="keywords"]', keywords);
    }

    const robots = noindex
      ? 'noindex, nofollow'
      : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
    setMeta('meta[name="robots"]', robots);

    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute('href', canonical);

    return () => {
      // Reset to defaults on unmount
      document.title = defaultMeta.title;
      setMeta('meta[name="description"]', defaultMeta.description);
      setMeta('meta[property="og:title"]', defaultMeta.title);
      setMeta('meta[property="og:description"]', defaultMeta.description);
      setMeta('meta[property="og:url"]', defaultMeta.canonical);
      setMeta('meta[property="og:type"]', defaultMeta.ogType);
      setMeta('meta[property="og:image"]', defaultMeta.ogImage);
      setMeta('meta[name="twitter:title"]', defaultMeta.title);
      setMeta('meta[name="twitter:description"]', defaultMeta.description);
      setMeta('meta[name="twitter:image"]', defaultMeta.ogImage);
      setMeta('meta[name="robots"]', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
      if (canonicalEl) canonicalEl.setAttribute('href', defaultMeta.canonical);
    };
  }, [title, description, canonical, ogImage, ogType, noindex, keywords]);

  return null;
}
