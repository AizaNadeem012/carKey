// app/cars/[brand]/page.tsx
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { carBrandsData } from "@/data/carBrands"

// Components — SEO
import BrandPageSchemas from "@/components/seo/BrandPageSchemas"
import RelatedBrandsSection from "@/components/seo/RelatedBrandsSection"
import AreaLinksSection from "@/components/seo/AreaLinksSection"
import NAPBlock from "@/components/seo/NAPBlock"

// Components — UI
import CarBreadcrumb from "@/components/ui/CarBreadcrumb"
import HeroCallButton from "@/components/ui/HeroCallButton"
import AuthorBio from "@/components/ui/AuthorBio"
import FAQAccordion from "@/components/ui/FAQAccordion"
import ServiceCard from "@/components/ui/ServiceCard"
import ModelBadge from "@/components/ui/ModelBadge"
import StickyCallBar from "@/components/ui/StickyCallBar"

import Link from "next/link"
import { Clock, Shield, CheckCircle, Car, Key, Wrench } from "lucide-react"

const PHONE = "07309903243"
const PHONE_HREF = "tel:+447309903243"
const DATE_MODIFIED = "2026-03-09"

function difficultyColour(level: "Standard" | "Advanced" | "Specialist") {
  if (level === "Standard")
    return "bg-green-900/40 text-green-400 border border-green-700"
  if (level === "Advanced")
    return "bg-yellow-900/40 text-yellow-400 border border-yellow-700"
  return "bg-red-900/40 text-red-400 border border-red-700"
}

// ── Static params ──────────────────────────────────────────────────────────
export async function generateStaticParams() {
  return carBrandsData.map((b) => ({ brand: b.slug }))
}

// ── Metadata ───────────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: { brand: string }
}): Promise<Metadata> {
  const brand = carBrandsData.find((b) => b.slug === params.brand)
  if (!brand) return {}

  const ogImage = `https://carkeysinstockport.co.uk/og/cars/${brand.slug}.jpg`
  const pageUrl = `https://carkeysinstockport.co.uk/cars/${brand.slug}`

  return {
    title: `${brand.brand} Car Key Replacement Stockport | Same Day | Car Keys in Stockport`,
    description: brand.metaDescription,
    authors: [
      {
        name: "Vikki Heaton",
        url: "https://carkeysinstockport.co.uk/about",
      },
    ],
    creator: "Vikki Heaton",
    publisher: "Car Keys in Stockport",
    keywords: brand.targetKeywords,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `${brand.brand} Car Key Replacement Stockport | Same Day`,
      description: brand.metaDescription,
      url: pageUrl,
      siteName: "Car Keys in Stockport",
      locale: "en_GB",
      type: "article",
      authors: ["Vikki Heaton"],
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${brand.brand} car key replacement Stockport — Vikki Heaton Auto Locksmith`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${brand.brand} Car Key Replacement Stockport | Same Day`,
      description: brand.metaDescription,
      images: [ogImage],
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
}

// ── Page ───────────────────────────────────────────────────────────────────
export default function BrandPage({ params }: { params: { brand: string } }) {
  const brand = carBrandsData.find((b) => b.slug === params.brand)
  if (!brand) notFound()

  const pageUrl = `https://carkeysinstockport.co.uk/cars/${brand.slug}`

  return (
    <>
      {/* ── 1. ALL SCHEMAS ─────────────────────────────────────────────── */}
      <BrandPageSchemas
        brand={brand}
        currentUrl={pageUrl}
        dateModified={DATE_MODIFIED}
      />

      {/* ── 2. BREADCRUMB ──────────────────────────────────────────────── */}
      <CarBreadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Car Key by Make", href: "/cars" },
          { name: brand.brand, href: `/cars/${brand.slug}` },
        ]}
      />

      <main className="bg-slate-900 text-white pt-20">

        {/* ── 3. HERO ──────────────────────────────────────────────────── */}
        <section className="section-padding bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="container-custom">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-2 text-orange-400 mb-4">
                <Car className="w-5 h-5" aria-hidden="true" />
                <span className="font-semibold">{brand.origin}</span>
                <span className="text-slate-500">·</span>
                <span
                  className={`text-xs px-3 py-1 rounded-full font-semibold ${difficultyColour(brand.programmingDifficulty)}`}
                >
                  {brand.programmingDifficulty} Programming
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                {brand.heroHeadline}
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {brand.heroSubheadline}
              </p>

              {/* ── HeroCallButton ───────────────────────────────────── */}
              <div className="flex flex-col sm:flex-row gap-4 items-start mb-8">
                <HeroCallButton
                  ariaLabel={`Call Vikki Heaton — ${brand.brand} key replacement Stockport`}
                />
                <Link href="/contact" className="btn-secondary text-center self-start">
                  Get Free Quote
                </Link>
              </div>

              {/* Key type badges */}
              <div className="flex flex-wrap gap-2">
                {brand.keyTypes.map((kt) => (
                  <span
                    key={kt}
                    className="bg-slate-700 text-gray-300 text-xs px-3 py-1 rounded-full"
                  >
                    {kt}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. TRUST BAR ─────────────────────────────────────────────── */}
        <section className="bg-orange-500 py-4" aria-label="Trust signals">
          <div className="container-custom">
            <div className="flex flex-wrap justify-center gap-5 md:gap-8 text-sm font-bold text-white text-center">
              {[
                {
                  icon: <Clock className="w-5 h-5 mx-auto mb-1" aria-hidden="true" />,
                  label: "30 Min Response",
                },
                {
                  icon: <Car className="w-5 h-5 mx-auto mb-1" aria-hidden="true" />,
                  label: "All Models Covered",
                },
                {
                  icon: <Shield className="w-5 h-5 mx-auto mb-1" aria-hidden="true" />,
                  label: "No Fix No Fee",
                },
                {
                  icon: <CheckCircle className="w-5 h-5 mx-auto mb-1" aria-hidden="true" />,
                  label: "DBS Checked",
                },
                {
                  icon: <span className="text-lg mx-auto mb-1 block" aria-hidden="true">★</span>,
                  label: "Vikki Heaton — Verified Expert",
                },
              ].map(({ icon, label }) => (
                <div key={label} className="flex flex-col items-center min-w-[100px]">
                  {icon}
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. INTRO + TECH DETAILS ──────────────────────────────────── */}
        <section className="section-padding bg-slate-800">
          <div className="container-custom">
            <div className="grid lg:grid-cols-3 gap-8">

              {/* Main intro */}
              <article className="lg:col-span-2 space-y-6">
                <h2 className="text-3xl font-bold">
                  {brand.brand} Auto Locksmith — Stockport Specialist
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {brand.introText}
                </p>

                {/* Technical specs */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="card p-5 space-y-3">
                    <h3 className="font-bold text-orange-400 flex items-center gap-2 text-sm uppercase tracking-wide">
                      <Key className="w-4 h-4" aria-hidden="true" />
                      Chip &amp; Transponder Types
                    </h3>
                    <ul className="space-y-1.5">
                      {brand.chipTypes.map((c) => (
                        <li key={c} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-3.5 h-3.5 text-orange-400 flex-shrink-0" aria-hidden="true" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="card p-5 space-y-3">
                    <h3 className="font-bold text-orange-400 flex items-center gap-2 text-sm uppercase tracking-wide">
                      <Wrench className="w-4 h-4" aria-hidden="true" />
                      Immobiliser System
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {brand.immobilizerGeneration}
                    </p>
                    <div className="pt-1 border-t border-slate-700">
                      <span className="text-xs text-gray-500">Avg replacement time</span>
                      <p className="text-white font-semibold">{brand.avgReplacementTime}</p>
                    </div>
                    {brand.specialNotes && (
                      <p className="text-xs text-yellow-400 leading-relaxed">
                        ⚠️ {brand.specialNotes}
                      </p>
                    )}
                  </div>
                </div>
              </article>

              {/* Sidebar */}
              <aside aria-label="Quick contact and info">
                <div className="space-y-5">
                  {/* Quick facts */}
                  <div className="card p-6">
                    <h3 className="text-lg font-bold mb-4">Quick Facts</h3>
                    <ul className="space-y-3 text-sm text-gray-300">
                      {[
                        { label: "Vehicle make:", value: brand.brand },
                        { label: "Programming:", value: brand.programmingDifficulty },
                        { label: "Avg time:", value: brand.avgReplacementTime },
                        { label: "Available:", value: "24/7" },
                        { label: "Call-out fee:", value: "None" },
                        { label: "Insurance:", value: "Fully insured" },
                      ].map(({ label, value }) => (
                        <li key={label} className="flex justify-between gap-2">
                          <span className="text-gray-400">{label}</span>
                          <span className="text-orange-400 font-bold text-right">{value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA card */}
                  <div className="card p-6 bg-orange-400/10 border border-orange-400/20">
                    <h3 className="text-lg font-bold mb-2 text-orange-400">
                      Lost Your {brand.brand} Key?
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">
                      Mobile {brand.brand} specialist in Stockport. Fixed price before work starts.
                    </p>
                    <a
                      href={PHONE_HREF}
                      className="btn-primary w-full text-center block text-sm"
                      aria-label={`Call ${brand.brand} locksmith Stockport`}
                    >
                      📞 Call {PHONE}
                    </a>
                  </div>

                  {/* Services quick nav */}
                  <nav className="card p-6" aria-label="All locksmith services">
                    <h3 className="text-lg font-bold mb-4">All Services</h3>
                    <ul className="space-y-2 text-sm">
                      {[
                        { name: "Car Key Replacement", href: "/services/car-key-replacement" },
                        { name: "Emergency Lockout", href: "/services/lockout-assistance" },
                        { name: "Key Fob Programming", href: "/services/key-fob-programming" },
                        { name: "Van Lockout", href: "/services/van-lockout" },
                        { name: "Ignition Repair", href: "/services/ignition-repair" },
                        { name: "Emergency Service", href: "/services/emergency-service" },
                      ].map((s) => (
                        <li key={s.name}>
                          <Link
                            href={s.href}
                            className="text-orange-400 hover:text-orange-300 transition-colors"
                          >
                            {s.name} →
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* ── 6. SERVICES GRID ─────────────────────────────────────────── */}
        <section className="section-padding" aria-labelledby="services-heading">
          <div className="container-custom">
            <h2 id="services-heading" className="text-3xl font-bold mb-2 text-center">
              {brand.brand} Key Services &amp; Pricing
            </h2>
            <p className="text-gray-400 text-center mb-10 max-w-xl mx-auto text-sm">
              Fixed prices given upfront — no hidden charges, no call-out fee.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {brand.services.map((service) => (
                <ServiceCard
                  key={service.name}
                  name={service.name}
                  description={service.description}
                  price={service.price}
                  brandName={brand.brand}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. HOW IT WORKS ──────────────────────────────────────────── */}
        <section className="section-padding bg-slate-800" aria-labelledby="how-heading">
          <div className="container-custom">
            <h2 id="how-heading" className="text-3xl font-bold mb-10 text-center">
              How It Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  step: "1",
                  title: "Call Us",
                  desc: `Call ${PHONE} and describe your ${brand.brand} key situation. We give you an instant fixed price — no surprises.`,
                },
                {
                  step: "2",
                  title: "We Come To You",
                  desc: "Our mobile locksmith heads straight to your location anywhere in Stockport or Greater Manchester. Typical arrival in 30 minutes.",
                },
                {
                  step: "3",
                  title: "Key Cut & Programmed",
                  desc: `Your new ${brand.brand} key is cut and fully programmed on-site. You drive away — job done.`,
                },
              ].map(({ step, title, desc }) => (
                <div key={step} className="text-center">
                  <div className="w-14 h-14 rounded-full bg-orange-500 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                    {step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 8. AUTHOR BIO ────────────────────────────────────────────── */}
        <section className="section-padding" aria-label="About the author">
          <div className="container-custom">
            <div className="flex flex-col items-start gap-4">
              <h2 className="text-2xl font-bold text-white">
                Your {brand.brand} Key Specialist
              </h2>
              <AuthorBio />
            </div>
          </div>
        </section>

        {/* ── 9. MODELS COVERED ────────────────────────────────────────── */}
        <section className="section-padding bg-slate-800" aria-labelledby="models-heading">
          <div className="container-custom">
            <h2 id="models-heading" className="text-3xl font-bold mb-2 text-center">
              {brand.brand} Models We Cover
            </h2>
            <p className="text-gray-400 text-center mb-8 text-sm">
              All models listed — and more. If yours isn&apos;t shown, just call us.
            </p>
            <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
              {brand.popularModels.map((model) => (
                <ModelBadge key={model} brandName={brand.brand} model={model} />
              ))}
            </div>
          </div>
        </section>

        {/* ── 10. AREA LINKS SECTION ───────────────────────────────────── */}
        <AreaLinksSection brandName={brand.brand} />

        {/* ── 11. FAQ ──────────────────────────────────────────────────── */}
        <section className="section-padding" aria-labelledby="faq-heading">
          <div className="container-custom">
            <h2 id="faq-heading" className="text-3xl font-bold mb-2 text-center">
              {brand.brand} Car Key FAQs
            </h2>
            <p className="text-gray-400 text-center mb-10 text-sm">
              Common questions about {brand.brand} key replacement in Stockport
            </p>
            <div className="max-w-3xl mx-auto">
              <FAQAccordion items={brand.faqs} />
            </div>
          </div>
        </section>

        {/* ── 12. RELATED BRANDS ───────────────────────────────────────── */}
        <RelatedBrandsSection
          relatedBrands={brand.relatedBrands}
          currentSlug={brand.slug}
        />

        {/* ── 13. NAP BLOCK ────────────────────────────────────────────── */}
        <div className="bg-slate-900">
          <NAPBlock />
        </div>

        {/* ── 14. FINAL CTA ────────────────────────────────────────────── */}
        <section className="section-padding bg-gradient-to-br from-orange-600 to-orange-700">
          <div className="container-custom text-center">
            <h2 className="text-4xl font-bold mb-4">
              Lost your {brand.brand} key? Call now — we come to you in Stockport
            </h2>
            <p className="text-xl text-orange-50 mb-8 max-w-2xl mx-auto">
              Same-day {brand.brand} key replacement across Stockport &amp; Greater
              Manchester. Fixed price, no call-out fee, fully insured.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <HeroCallButton
                label="📞 Call Now — Free Quote"
                ariaLabel={`Call Vikki — ${brand.brand} key replacement Stockport`}
              />
              <Link
                href="/contact"
                className="btn-secondary border-2 border-white text-white hover:bg-white/10"
              >
                Request Free Quote
              </Link>
            </div>
          </div>
        </section>

      </main>

      {/* ── MOBILE STICKY BAR ──────────────────────────────────────────── */}
      <StickyCallBar />
    </>
  )
}
