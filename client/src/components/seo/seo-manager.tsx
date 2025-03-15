import { Helmet } from "react-helmet";

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  noindex?: boolean;
  structuredData?: object;
  ogType?: string;
  ogImage?: string;
}

export default function SEOManager({
  title,
  description,
  canonicalUrl = "https://joinbiggainsclub.com",
  noindex = false,
  structuredData,
  ogType = "website",
  ogImage = "https://landing-page-images-seo.s3.eu-north-1.amazonaws.com/BigGainsLogo.webp",
}: SEOProps) {
  const fullTitle = `${title} | Big Gains Club Premium`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}