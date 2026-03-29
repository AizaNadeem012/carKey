// app/cars/page.tsx
import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import { ChevronRight, Phone, Car, Shield, Clock, CheckCircle } from "lucide-react"
import { carBrandsData } from "@/data/carBrands"
import type { CarBrandData } from "@/data/carBrands"
import CarBreadcrumb from "@/components/ui/CarBreadcrumb"
import AuthorBio from "@/components/ui/AuthorBio"
import NAPBlock from "@/components/seo/NAPBlock"
import AreaLinksSection from "@/components/seo/AreaLinksSection"

const PHONE = "07309903243"
const PHONE_HREF = "tel:+447309903243"
const DATE_MODIFIED = "2026-03-09"

// â”€â”€ Metadata â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export const metadata: Metadata = {
  title: "Car Key Replacement by Make & Model | Stockport Auto Locksmith | Car Keys in Stockport",
  description:
    "Lost your car key in Stockport? Find your make below â€” same-day replacement for every brand. Audi, BMW, Ford, Toyota, VW & 40+ more. Call Vikki Heaton: 07309903243.",
  authors: [
    { name: "Vikki Heaton", url: "https://carkeysinstockport.co.uk/about" },
  ],
  creator: "Vikki Heaton",
  publisher: "Car Keys in Stockport",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://carkeysinstockport.co.uk/cars",
  },
  openGraph: {
    title: "Car Key Replacement by Make & Model | Stockport Auto Locksmith",
    description:
      "Same-day car key replacement in Stockport for every major brand. Mobile service, no call-out fee. Call Vikki Heaton.",
    url: "https://carkeysinstockport.co.uk/cars",
    siteName: "Car Keys in Stockport",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://carkeysinstockport.co.uk/images/auto-car-locksmith-services-in-stockport.jpg",
        width: 1200,
        height: 630,
        alt: "Car key replacement by make and model â€” Vikki Heaton Auto Locksmith Stockport",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Car Key Replacement by Make & Model | Stockport Auto Locksmith",
    description:
      "Same-day car key replacement for 45+ brands in Stockport. Mobile, fixed price, no call-out fee.",
    images: [
      "https://carkeysinstockport.co.uk/images/auto-car-locksmith-services-in-stockport.jpg",
    ],
    creator: "@carkeysinstockport",
  },
  other: {
    "article:author": "Vikki Heaton",
    "article:publisher": "https://carkeysinstockport.co.uk",
    "geo.region": "GB-SKP",
    "geo.placename": "Stockport",
    "geo.position": "53.4106;-2.1575",
    ICBM: "53.4106, -2.1575",
  },
}

// â”€â”€ Schema helpers â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
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
  ],
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Locksmith"],
  "@id": "https://carkeysinstockport.co.uk/cars#business",
  name: "Car Keys in Stockport",
  description:
    "Mobile auto locksmith in Stockport providing same-day car key replacement for all major vehicle brands. No call-out fee. Fully insured.",
  url: "https://carkeysinstockport.co.uk/cars",
  telephone: "+447309903243",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Stockport",
    addressRegion: "Greater Manchester",
    postalCode: "SK1",
    addressCountry: "GB",
  },
  founder: {
    "@type": "Person",
    "@id": "https://carkeysinstockport.co.uk/about#vikki-heaton",
    name: "Vikki Heaton",
  },
  priceRange: "Â£Â£",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
}

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://carkeysinstockport.co.uk/about#vikki-heaton",
  name: "Vikki Heaton",
  jobTitle: "Auto Locksmith Expert & Founder",
  url: "https://carkeysinstockport.co.uk/about",
  worksFor: {
    "@type": "LocalBusiness",
    "@id": "https://carkeysinstockport.co.uk/#business",
    name: "Car Keys in Stockport",
  },
}

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://carkeysinstockport.co.uk/cars",
  url: "https://carkeysinstockport.co.uk/cars",
  name: "Car Key Replacement by Make & Model | Stockport Auto Locksmith",
  description:
    "Find your car make and get same-day key replacement in Stockport. 45+ brands covered by Vikki Heaton â€” mobile service, no call-out fee.",
  inLanguage: "en-GB",
  dateModified: `${DATE_MODIFIED}T00:00:00+00:00`,
  author: {
    "@type": "Person",
    "@id": "https://carkeysinstockport.co.uk/about#vikki-heaton",
    name: "Vikki Heaton",
  },
  isPartOf: {
    "@type": "WebSite",
    "@id": "https://carkeysinstockport.co.uk/#website",
    name: "Car Keys in Stockport",
    url: "https://carkeysinstockport.co.uk",
  },
}

// â”€â”€ UI helpers â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
type Origin = "European" | "British" | "Asian & Other"
const originOrder: Origin[] = ["European", "British", "Asian & Other"]

const originDescriptions: Record<Origin, string> = {
  European:
    "Audi, BMW, Ford, Mercedes-Benz, Volkswagen and more â€” full transponder, smart key and keyless programming.",
  British:
    "Aston Martin, Bentley, MG, McLaren and Rolls-Royce â€” specialist encrypted key systems handled with care.",
  "Asian & Other":
    "BYD, Chevrolet, Maserati, Suzuki and more â€” ID46, ID47 and AES 128-bit mobile programming.",
}

function DifficultyBadge({
  level,
}: {
  level: CarBrandData["programmingDifficulty"]
}) {
  const base =
    "text-xs px-2 py-0.5 rounded-full font-medium border whitespace-nowrap"
  if (level === "Standard")
    return (
      <span className={`${base} bg-green-900/40 text-green-400 border-green-700`}>
        Standard
      </span>
    )
  if (level === "Advanced")
    return (
      <span className={`${base} bg-yellow-900/40 text-yellow-400 border-yellow-700`}>
        Advanced
      </span>
    )
  return (
    <span className={`${base} bg-red-900/40 text-red-400 border-red-700`}>
      Specialist
    </span>
  )
}

// â”€â”€ Page â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export default function CarsIndexPage() {
  const grouped = originOrder.reduce<Record<Origin, CarBrandData[]>>(
    (acc, origin) => {
      acc[origin] = carBrandsData.filter((b) => b.origin === origin)
      return acc
    },
    { European: [], British: [], "Asian & Other": [] }
  )

  const totalBrands = carBrandsData.length

  return (
    <>
      {/* Schemas */}
      <Script
        id="cars-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="cars-lb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="cars-person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Script
        id="cars-webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      {/* Breadcrumb */}
      <CarBreadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Car Key by Make", href: "/cars" },
        ]}
      />

      <main className="bg-slate-900 text-white pt-20">

        {/* â”€â”€ HERO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <section className="section-padding bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="container-custom">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-orange-400 mb-4">
                <Car className="w-5 h-5" aria-hidden="true" />
                <span className="font-semibold">
                  {totalBrands} Brands Covered Â· Stockport &amp; Greater Manchester
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Car Key Replacement by{" "}
                <span className="text-orange-400">Make &amp; Model</span>{" "}
                â€” Stockport
              </h1>

              <p className="text-xl text-gray-300 mb-4 leading-relaxed">
                Find your car make below and get same-day key replacement anywhere in
                Stockport. Vikki Heaton is a verified auto locksmith expert covering{" "}
                {totalBrands} brands â€” all models, all key types. Fixed price, no
                call-out fee, fully insured.
              </p>

              <p className="text-gray-400 mb-8 text-sm leading-relaxed">
                Whether you drive a common Ford or a specialist Porsche, our mobile
                service reaches you in 30 minutes across Stockport and Greater Manchester.
                Keys cut and programmed on-site â€” no recovery truck required.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={PHONE_HREF}
                  className="btn-primary text-center flex items-center justify-center gap-2"
                  aria-label="Call Vikki Heaton â€” Stockport auto locksmith"
                >
                  <Phone className="w-5 h-5" aria-hidden="true" />
                  Call Vikki: {PHONE}
                </a>
                <Link href="/contact" className="btn-secondary text-center">
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* â”€â”€ TRUST BAR â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <section className="bg-orange-500 py-4" aria-label="Trust signals">
          <div className="container-custom">
            <div className="flex flex-wrap justify-center gap-5 md:gap-8 text-sm font-bold text-white text-center">
              {[
                { icon: <Clock className="w-5 h-5 mx-auto mb-1" />, label: "30 Min Response" },
                { icon: <Car className="w-5 h-5 mx-auto mb-1" />, label: "All Makes Covered" },
                { icon: <Shield className="w-5 h-5 mx-auto mb-1" />, label: "No Fix No Fee" },
                { icon: <CheckCircle className="w-5 h-5 mx-auto mb-1" />, label: "DBS Checked" },
                {
                  icon: <span className="text-lg mx-auto mb-1 block">â˜…</span>,
                  label: "Vikki Heaton â€” Verified Expert",
                },
              ].map(({ icon, label }) => (
                <div key={label} className="flex flex-col items-center min-w-[90px]">
                  {icon}
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* â”€â”€ BRAND GROUPS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        {originOrder.map((origin) => {
          const brands = grouped[origin]
          if (!brands.length) return null
          const sectionId = `brands-${origin.toLowerCase().replace(/[\s&]+/g, "-")}`
          return (
            <section
              key={origin}
              className="section-padding"
              aria-labelledby={sectionId}
            >
              <div className="container-custom">
                <div className="mb-8">
                  <h2 id={sectionId} className="text-3xl font-bold mb-2">
                    {origin} Brands
                  </h2>
                  <p className="text-gray-400 text-sm max-w-2xl">
                    {originDescriptions[origin]}
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {brands.map((brand) => (
                    <Link
                      key={brand.slug}
                      href={`/cars/${brand.slug}`}
                      className="card p-5 hover:bg-slate-700 transition-colors group flex flex-col"
                      aria-label={`${brand.brand} car key replacement Stockport`}
                      title={`${brand.brand} key replacement â€” mobile locksmith Stockport`}
                    >
                      <div className="flex items-start justify-between mb-2 gap-2">
                        <h3 className="font-bold text-white text-lg group-hover:text-orange-400 transition-colors leading-tight">
                          {brand.brand}
                        </h3>
                        <ChevronRight
                          className="w-4 h-4 text-orange-400 flex-shrink-0 mt-1"
                          aria-hidden="true"
                        />
                      </div>

                      <p className="text-gray-400 text-xs mb-3 leading-snug">
                        {brand.popularModels.slice(0, 3).join(", ")} &amp; more
                      </p>

                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-gray-500 text-xs">
                          {brand.popularModels.length}+ models
                        </span>
                        <DifficultyBadge level={brand.programmingDifficulty} />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )
        })}

        {/* â”€â”€ DIFFICULTY KEY â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <section className="section-padding bg-slate-800" aria-labelledby="difficulty-heading">
          <div className="container-custom">
            <h2
              id="difficulty-heading"
              className="text-2xl font-bold mb-6 text-center"
            >
              Programming Difficulty Guide
            </h2>
            <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                {
                  level: "Standard",
                  colour: "text-green-400",
                  border: "border-green-700",
                  bg: "bg-green-900/20",
                  desc: "Common transponder or remote key. Programmed on-site quickly with standard automotive tools.",
                },
                {
                  level: "Advanced",
                  colour: "text-yellow-400",
                  border: "border-yellow-700",
                  bg: "bg-yellow-900/20",
                  desc: "Encrypted or proximity smart key. Requires specialist OBD programming â€” still completed on-site.",
                },
                {
                  level: "Specialist",
                  colour: "text-red-400",
                  border: "border-red-700",
                  bg: "bg-red-900/20",
                  desc: "Highly encrypted or proprietary key system. Advanced tools required â€” contact us for a tailored quote.",
                },
              ].map(({ level, colour, border, bg, desc }) => (
                <div key={level} className={`card p-5 ${bg} border ${border}`}>
                  <h3 className={`font-bold text-lg mb-2 ${colour}`}>{level}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* â”€â”€ WHY CHOOSE US â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <section className="section-padding" aria-labelledby="why-heading">
          <div className="container-custom">
            <h2 id="why-heading" className="text-3xl font-bold mb-10 text-center">
              Why Choose Our Stockport Auto Locksmith?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "All Makes & Models",
                  desc: `We cover ${totalBrands} brands â€” from everyday Fords to specialist Porsche and Tesla keys.`,
                },
                {
                  title: "No Original Key Needed",
                  desc: "Lost all your keys? No problem. We can programme a new key from scratch for most vehicles.",
                },
                {
                  title: "Fixed Prices Upfront",
                  desc: "You receive a firm quote before we start â€” no nasty surprises, no hidden charges.",
                },
                {
                  title: "Faster Than a Dealer",
                  desc: "Dealers can take days. We arrive in 30 minutes and complete most jobs on-site, same day.",
                },
              ].map(({ title, desc }) => (
                <div key={title} className="card p-6">
                  <CheckCircle
                    className="w-8 h-8 text-orange-400 mb-3"
                    aria-hidden="true"
                  />
                  <h3 className="font-bold text-lg mb-2">{title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* â”€â”€ AUTHOR BIO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <section className="section-padding bg-slate-800" aria-label="About the author">
          <div className="container-custom">
            <h2 className="text-2xl font-bold mb-6">
              Meet Your Stockport Auto Locksmith Expert
            </h2>
            <AuthorBio />
          </div>
        </section>

        {/* â”€â”€ AREA LINKS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <AreaLinksSection />

        {/* â”€â”€ NAP BLOCK â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <div className="bg-slate-900">
          <NAPBlock />
        </div>

        {/* â”€â”€ FINAL CTA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <section className="section-padding bg-gradient-to-br from-orange-600 to-orange-700">
          <div className="container-custom text-center">
            <h2 className="text-4xl font-bold mb-4">
              Can&apos;t see your make? Just call us.
            </h2>
            <p className="text-xl text-orange-50 mb-8 max-w-2xl mx-auto">
              We cover virtually every car brand on the road. Call Vikki on{" "}
              <strong>{PHONE}</strong> for an instant quote â€” available 24/7.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 font-bold text-lg px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Call Vikki Heaton â€” Stockport auto locksmith"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                Call Vikki: {PHONE}
              </a>
              <Link
                href="/contact"
                className="btn-secondary border-2 border-white text-white hover:bg-white/10"
              >
                Send a Message
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
