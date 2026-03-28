// components/seo/AuthorSchema.tsx
import Script from "next/script"

const authorSchemaData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://carkeysinstockport.co.uk/about#vikki-heaton",
  name: "Vikki Heaton",
  jobTitle: "Auto Locksmith Expert & Founder",
  description:
    "Vikki Heaton is a fully qualified auto locksmith based in Stockport, Greater Manchester. With years of hands-on experience replacing and programming car keys for all major vehicle makes and models, Vikki founded Car Keys in Stockport to provide fast, affordable, mobile auto locksmith services across the Greater Manchester area.",
  url: "https://carkeysinstockport.co.uk/about",
  worksFor: {
    "@type": "LocalBusiness",
    "@id": "https://carkeysinstockport.co.uk/#business",
    name: "Car Keys in Stockport",
  },
  knowsAbout: [
    "Car Key Replacement",
    "Transponder Key Programming",
    "Smart Key Programming",
    "Key Fob Replacement",
    "Auto Locksmith Services",
    "Vehicle Lockout Assistance",
    "Ignition Repair",
    "Toyota Key Programming",
    "Ford Key Programming",
    "BMW Key Programming",
    "Mercedes Key Programming",
    "Volkswagen Key Programming",
  ],
  areaServed: {
    "@type": "City",
    name: "Stockport",
    containedInPlace: {
      "@type": "State",
      name: "Greater Manchester",
    },
  },
}

export default function AuthorSchema() {
  return (
    <Script
      id="author-person-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchemaData) }}
    />
  )
}

export { authorSchemaData }
