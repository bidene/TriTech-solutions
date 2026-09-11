import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { companyInfo } from '@/data/site';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  noindex?: boolean;
}

const defaultDescription = `${companyInfo.name} - Solutions technologiques de nouvelle génération. Développement web, mobile, cloud, cybersécurité et plus encore.`;
const defaultKeywords = 'développement web, mobile, cloud, cybersécurité, UI/UX design, data analytics, bénin, cotonou, agence digitale';

export default function SEO({
  title,
  description = defaultDescription,
  keywords = defaultKeywords,
  image,
  noindex = false,
}: SEOProps) {
  const location = useLocation();
  const fullTitle = title ? `${title} | ${companyInfo.name}` : companyInfo.name;
  const url = `${window.location.origin}${location.pathname}`;
  const ogImage = image || `${window.location.origin}/og-image.jpg`;

  return (
    <Helmet>
      {/* Meta tags de base */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={companyInfo.name} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:site_name" content={companyInfo.name} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional SEO */}
      <meta name="theme-color" content="#1f5af0" />
      <meta name="msapplication-TileColor" content="#1f5af0" />
      <meta name="format-detection" content="telephone=no" />

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: companyInfo.name,
          url: window.location.origin,
          logo: ogImage,
          description: description,
          address: {
            '@type': 'PostalAddress',
            streetAddress: companyInfo.fullAddress,
            addressLocality: 'Cotonou',
            addressCountry: 'BJ',
          },
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: companyInfo.phone,
            email: companyInfo.email,
            contactType: 'customer service',
          },
          sameAs: [
            'https://linkedin.com/company/tritech-solution',
            'https://twitter.com/tritech-solution',
            'https://facebook.com/tritech-solution',
          ],
        })}
      </script>
    </Helmet>
  );
}