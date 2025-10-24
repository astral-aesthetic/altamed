import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export default function SEO({
  title = 'AtlaMed - Find Trusted Alternative Medicine Doctors & Practitioners',
  description = 'Connect with certified naturopathic, functional, and integrative medicine practitioners who share traditional values and empower patients to make informed healthcare decisions.',
  keywords = 'trusted doctors, alternative medicine, naturopathic doctors, functional medicine, integrative healthcare, holistic practitioners, patient empowerment, informed healthcare decisions, alternative voices in healthcare',
  image = '/images/og-image.jpg',
  url = window.location.href,
  type = 'website',
}: SEOProps) {
  const siteTitle = title.includes('AtlaMed') ? title : `${title} | AtlaMed`;

  useEffect(() => {
    // Update title
    document.title = siteTitle;

    // Update or create meta tags
    const updateMetaTag = (property: string, content: string, isProperty = false) => {
      const selector = isProperty ? `meta[property="${property}"]` : `meta[name="${property}"]`;
      let element = document.querySelector(selector);
      
      if (!element) {
        element = document.createElement('meta');
        if (isProperty) {
          element.setAttribute('property', property);
        } else {
          element.setAttribute('name', property);
        }
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Primary meta tags
    updateMetaTag('title', siteTitle);
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    // Open Graph
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:title', siteTitle, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);

    // Twitter
    updateMetaTag('twitter:card', 'summary_large_image', true);
    updateMetaTag('twitter:url', url, true);
    updateMetaTag('twitter:title', siteTitle, true);
    updateMetaTag('twitter:description', description, true);
    updateMetaTag('twitter:image', image, true);

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
  }, [siteTitle, description, keywords, image, url, type]);

  return null;
}
