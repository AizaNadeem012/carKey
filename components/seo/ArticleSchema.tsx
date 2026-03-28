// components/seo/ArticleSchema.tsx
import Script from "next/script"

interface ArticleSchemaProps {
  brandName: string
  slug: string
  metaDescription: string
  dateModified: string
}

export default function ArticleSchema({
  brandName,
  slug,
  metaDescription,
  dateModified,
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${brandName} Car Key Replacement in Stockport`,
    description: metaDescription,
    url: `https://carkeysinstockport.co.uk/cars/${slug}`,
    datePublished: "2026-01-01T00:00:00+00:00",
    dateModified: `${dateModified}T00:00:00+00:00`,
    author: {
      "@type": "Person",
      "@id": "https://carkeysinstockport.co.uk/about#vikki-heaton",
      name: "Vikki Heaton",
    },
    publisher: {
      "@type": "Organization",
      "@id": "https://carkeysinstockport.co.uk/#business",
      name: "Car Keys in Stockport",
      logo: {
        "@type": "ImageObject",
        url: "https://carkeysinstockport.co.uk/logo.png",
        width: 200,
        height: 60,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://carkeysinstockport.co.uk/cars/${slug}`,
    },
    image: {
      "@type": "ImageObject",
      url: `https://carkeysinstockport.co.uk/og/cars/${slug}.jpg`,
      width: 1200,
      height: 630,
    },
    about: {
      "@type": "Service",
      name: `${brandName} Car Key Replacement`,
      serviceType: "Auto Locksmith",
    },
    inLanguage: "en-GB",
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://carkeysinstockport.co.uk/#website",
      name: "Car Keys in Stockport",
      url: "https://carkeysinstockport.co.uk",
    },
  }

  return (
    <Script
      id={`article-schema-${slug}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
