// lib/schema.ts
// Schema.org structured data generators for semantic SEO

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Locksmith"],
  "@id": "https://carkeysinstockport.co.uk/#business",
  name: "Car Keys in Stockport",
  image: "https://carkeysinstockport.co.uk/images/auto-car-locksmith-services-in-stockport.jpg",
  description:
    "Professional auto locksmith services in Stockport and Greater Manchester. Car key replacement, emergency lockout, key fob programming, van locksmith services. Available 24/7. No call-out fee. Fully insured.",
  url: "https://carkeysinstockport.co.uk",
  telephone: "+447309903243",
  email: "info@carkeysinstockport.co.uk",
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
    { "@type": "City", name: "Bury" },
    { "@type": "City", name: "Oldham" },
    { "@type": "City", name: "Rochdale" },
    { "@type": "City", name: "Tameside" },
    { "@type": "City", name: "Trafford" },
    { "@type": "City", name: "Salford" },
  ],
  priceRange: "££",
  paymentAccepted: "Cash, Credit Card, Debit Card",
  currenciesAccepted: "GBP",
  sameAs: [
    "https://www.facebook.com/carkeysinstockport",
    "https://www.instagram.com/carkeysinstockport",
    "https://www.tiktok.com/@carkeysinstockport",
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Auto Locksmith Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Car Key Replacement",
          description: "Professional car key cutting and programming for all vehicle makes and models",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Emergency Lockout Assistance",
          description: "Fast damage-free car lockout entry service available 24/7",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Key Fob Programming",
          description: "Remote key fob and transponder key programming service",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Van Locksmith Services",
          description: "Commercial and personal van lockout and key services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Ignition Repair",
          description: "Ignition switch repair and replacement service",
        },
      },
    ],
  },
}

interface ServiceSchemaProps {
  name: string
  description: string
  url?: string
  areaServed?: string
  priceMin?: number
  priceMax?: number
}

export const serviceSchema = ({
  name,
  description,
  url = "",
  areaServed = "Greater Manchester",
  priceMin = 59,
  priceMax = 150,
}: ServiceSchemaProps) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  description,
  provider: {
    "@type": "LocalBusiness",
    "@id": "https://carkeysinstockport.co.uk/#business",
    name: "Car Keys in Stockport",
    url: "https://carkeysinstockport.co.uk",
    telephone: "+447309903243",
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: areaServed,
  },
  offers: {
    "@type": "Offer",
    priceSpecification: {
      "@type": "PriceSpecification",
      minPrice: priceMin,
      maxPrice: priceMax,
      priceCurrency: "GBP",
    },
    availability: "https://schema.org/InStock",
  },
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: "https://carkeysinstockport.co.uk/contact",
    servicePhone: "+447309903243",
  },
})

interface FAQSchemaItem {
  question: string
  answer: string
}

export const faqSchema = (items: FAQSchemaItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
})

interface BreadcrumbItem {
  name: string
  url: string
}

export const breadcrumbSchema = (items: BreadcrumbItem[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `https://carkeysinstockport.co.uk${item.url}`,
  })),
})

export const localBusinessSchema = (location: string, area: string) => ({
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Locksmith"],
  "@id": `https://carkeysinstockport.co.uk/areas/${location}#business`,
  name: "Car Keys in Stockport",
  description: `Professional auto locksmith services in ${area}. Car key replacement, emergency lockout, key fob programming. 24/7 service. No call-out fee.`,
  image: "https://carkeysinstockport.co.uk/images/auto-car-locksmith-services-in-stockport.jpg",
  url: `https://carkeysinstockport.co.uk/areas/${location}`,
  telephone: "+447309903243",
  address: {
    "@type": "PostalAddress",
    addressLocality: area,
    addressRegion: "Greater Manchester",
    addressCountry: "GB",
  },
  areaServed: {
    "@type": "City",
    name: area,
  },
  priceRange: "££",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
})

export const reviewSchema = (author: string, rating: number, text: string) => ({
  "@context": "https://schema.org",
  "@type": "Review",
  reviewRating: {
    "@type": "Rating",
    ratingValue: rating,
    bestRating: "5",
    worstRating: "1",
  },
  reviewBody: text,
  author: {
    "@type": "Person",
    name: author,
  },
  datePublished: new Date().toISOString().split("T")[0],
})
