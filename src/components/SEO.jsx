import { useEffect } from 'react';

const defaultMeta = {
  title: 'GreedySub — Free & Open-Source Subscription Tracker',
  description: 'Track subscriptions and free trials, get renewal reminders, and open direct cancellation pages. Free, open source, and local-first for Chrome.',
  canonical: 'https://greedysub.com/',
  ogImage: '',
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
    setMeta('meta[name="twitter:title"]', fullTitle);
    setMeta('meta[name="twitter:description"]', description);
    if (ogImage) {
      setMeta('meta[property="og:image"]', ogImage);
      setMeta('meta[name="twitter:image"]', ogImage);
    } else {
      document.querySelector('meta[property="og:image"]')?.remove();
      document.querySelector('meta[name="twitter:image"]')?.remove();
    }

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
      setMeta('meta[name="twitter:title"]', defaultMeta.title);
      setMeta('meta[name="twitter:description"]', defaultMeta.description);
      document.querySelector('meta[property="og:image"]')?.remove();
      document.querySelector('meta[name="twitter:image"]')?.remove();
      setMeta('meta[name="robots"]', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
      if (canonicalEl) canonicalEl.setAttribute('href', defaultMeta.canonical);
    };
  }, [title, description, canonical, ogImage, ogType, noindex, keywords]);

  return null;
}
