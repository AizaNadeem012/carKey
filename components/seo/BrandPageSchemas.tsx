// components/seo/BrandPageSchemas.tsx
import Script from "next/script"
import type { CarBrandData } from "@/data/carBrands"
import { authorSchemaData } from "./AuthorSchema"

interface BrandPageSchemasProps {
  brand: CarBrandData
  currentUrl: string
  dateModified: string
}

export default function BrandPageSchemas({
  brand,
  currentUrl,
  dateModified,
}: BrandPageSchemasProps) {
  // 1. LocalBusiness Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Locksmith"],
    "@id": `${currentUrl}#business`,
    name: "Car Keys in Stockport",
    description: `${brand.brand} car key replacement and auto locksmith services in Stockport and Greater Manchester. Mobile service, same day, no call-out fee.`,
    image:
      "https://carkeysinstockport.co.uk/images/auto-car-locksmith-services-in-stockport.jpg",
    url: currentUrl,
    telephone: "+447309903243",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Stockport",
      addressRegion: "Greater Manchester",
      postalCode: "SK1",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 53.4106,
      longitude: -2.1575,
    },
    areaServed: [
      { "@type": "City", name: "Stockport" },
      { "@type": "City", name: "Manchester" },
      { "@type": "AdministrativeArea", name: "Greater Manchester" },
    ],
    priceRange: "££",
    founder: {
      "@type": "Person",
      "@id": "https://carkeysinstockport.co.uk/about#vikki-heaton",
      name: "Vikki Heaton",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  }

  // 2. Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${brand.brand} Car Key Replacement Stockport`,
    description: brand.introText,
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://carkeysinstockport.co.uk/#business",
      name: "Car Keys in Stockport",
      telephone: "+447309903243",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Greater Manchester",
    },
    serviceType: `${brand.brand} Auto Locksmith`,
    offers: brand.services.map((s) => ({
      "@type": "Offer",
      name: s.name,
      description: s.description,
      price: s.price.replace(/[^0-9.]/g, ""),
      priceCurrency: "GBP",
    })),
  }

  // 3. FAQPage Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: brand.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  // 4. BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://carkeysinstockport.co.uk",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Car Key by Make",
        item: "https://carkeysinstockport.co.uk/cars",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: brand.brand,
        item: currentUrl,
      },
    ],
  }

  // 5. WebPage Schema
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": currentUrl,
    url: currentUrl,
    name: brand.metaTitle,
    description: brand.metaDescription,
    inLanguage: "en-GB",
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://carkeysinstockport.co.uk/#website",
      name: "Car Keys in Stockport",
      url: "https://carkeysinstockport.co.uk",
    },
    author: {
      "@type": "Person",
      "@id": "https://carkeysinstockport.co.uk/about#vikki-heaton",
      name: "Vikki Heaton",
    },
    dateModified: `${dateModified}T00:00:00+00:00`,
    breadcrumb: {
      "@id": `${currentUrl}#breadcrumb`,
    },
  }

  // 6. Person Schema (Vikki Heaton)
  // Imported from AuthorSchema.tsx

  // 7. Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${brand.brand} Car Key Replacement in Stockport`,
    description: brand.metaDescription,
    url: currentUrl,
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
      "@id": currentUrl,
    },
    image: {
      "@type": "ImageObject",
      url: `https://carkeysinstockport.co.uk/og/cars/${brand.slug}.jpg`,
      width: 1200,
      height: 630,
    },
    about: {
      "@type": "Service",
      name: `${brand.brand} Car Key Replacement`,
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
    <>
      <Script
        id={`lb-schema-${brand.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id={`service-schema-${brand.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id={`faq-schema-${brand.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id={`breadcrumb-schema-${brand.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id={`webpage-schema-${brand.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <Script
        id="author-schema-brand"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchemaData) }}
      />
      <Script
        id={`article-schema-${brand.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </>
  )
}
