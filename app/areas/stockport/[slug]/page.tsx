import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import { notFound } from "next/navigation"
import { Phone, Clock, Shield, CheckCircle, MapPin, Star } from "lucide-react"
import Breadcrumb from "../../../components/breadcrumb"
import { faqSchema, localBusinessSchema, breadcrumbSchema } from "@/carKey/lib/schema"
import { stockportSubAreaData, stockportSubAreaSlugs } from "@/carKey/lib/area-locations"

export const revalidate = 86400

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return stockportSubAreaSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const area = stockportSubAreaData[slug]
  if (!area) return { title: "Page Not Found" }

  return {
    title: area.metaTitle,
    description: area.metaDescription,
    alternates: {
      canonical: `https://carkeysinstockport.co.uk/areas/stockport/${slug}`,
    },
    openGraph: {
      title: area.metaTitle,
      description: area.metaDescription,
      url: `https://carkeysinstockport.co.uk/areas/stockport/${slug}`,
      type: "website",
      siteName: "Car Keys in Stockport",
      locale: "en_GB",
    },
  }
}

export default async function StockportSubAreaPage({ params }: Props) {
  const { slug } = await params
  const area = stockportSubAreaData[slug]

  if (!area) notFound()

  const faqItems = [
    {
      question: `How quickly can you reach ${area.name}?`,
      answer: `We aim to arrive within ${area.responseTime} of your call in ${area.name} ${area.postcode}. Our mobile locksmith is based in Stockport and covers the full area.`,
    },
    {
      question: `Do you charge a call-out fee in ${area.name}?`,
      answer: `No. We never charge a call-out fee in ${area.name} or anywhere else. You receive an upfront fixed price before any work begins — no surprises.`,
    },
    {
      question: "Will you damage my car getting in?",
      answer: "No. We use professional, damage-free techniques to gain entry to your vehicle. Our methods are non-destructive and leave no marks on your car.",
    },
    {
      question: `Are you available at night in ${area.name}?`,
      answer: `Yes, we're available 24/7 in ${area.name}, including late nights, weekends, and bank holidays. Call 07309903243 any time.`,
    },
    {
      question: "Can you programme keys for my car model?",
      answer: "Yes. We carry modern diagnostic and programming equipment and can programme keys for the vast majority of car makes and models, including Ford, Vauxhall, BMW, Mercedes, Audi, Toyota, Nissan, and many more.",
    },
  ]

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Service Areas", url: "/#locations" },
    { name: "Stockport", url: "/areas/stockport" },
    { name: area.name, url: `/areas/stockport/${slug}` },
  ]

  const nearbyStockportSlugs = stockportSubAreaSlugs
    .filter((s) => s !== slug)
    .slice(0, 5)

  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema(`stockport/${slug}`, area.name)),
        }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(faqItems)),
        }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema(breadcrumbItems)),
        }}
      />

      <Breadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Service Areas", href: "/#locations" },
          { name: "Stockport", href: "/areas/stockport" },
          { name: area.name, href: `/areas/stockport/${slug}` },
        ]}
      />

      <main className="bg-slate-900 text-white pt-20">

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section className="section-padding bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="container-custom">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-orange-400 mb-4">
                <MapPin className="w-5 h-5" aria-hidden="true" />
                <span className="font-semibold">Stockport Auto Locksmith – {area.postcode}</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Auto Locksmith in{" "}
                <span className="text-orange-400">{area.name}</span>
              </h1>

              <p className="text-xl text-gray-300 mb-4 leading-relaxed">
                {area.heroDescription} Available 24/7 with a{" "}
                <strong className="text-white">{area.responseTime} response time</strong> across{" "}
                {area.name} {area.postcode}.
              </p>

              <p className="text-gray-300 mb-8 leading-relaxed">
                Explore our full range of{" "}
                <Link href="/services" className="text-orange-400 hover:text-orange-300 underline">
                  auto locksmith services
                </Link>{" "}
                including{" "}
                <Link href="/services/car-key-replacement" className="text-orange-400 hover:text-orange-300 underline">
                  car key replacement
                </Link>
                ,{" "}
                <Link href="/services/key-fob-programming" className="text-orange-400 hover:text-orange-300 underline">
                  key fob programming
                </Link>
                , and{" "}
                <Link href="/services/lockout-assistance" className="text-orange-400 hover:text-orange-300 underline">
                  emergency lockout assistance
                </Link>
                .
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="tel:+447309903243"
                  className="btn-primary text-center"
                  aria-label={`Call our locksmith in ${area.name}`}
                >
                  <Phone className="w-5 h-5 inline mr-2" aria-hidden="true" />
                  Call Now: 07309903243
                </a>
                <Link href="/contact" className="btn-secondary text-center">
                  Get Free Quote
                </Link>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: <MapPin className="w-6 h-6 text-orange-400 mx-auto mb-2" />, label: area.postcode },
                  { icon: <Clock className="w-6 h-6 text-orange-400 mx-auto mb-2" />, label: `${area.responseTime}` },
                  { icon: <Shield className="w-6 h-6 text-orange-400 mx-auto mb-2" />, label: "Fully Insured" },
                  { icon: <Star className="w-6 h-6 text-orange-400 mx-auto mb-2" />, label: "5★ Rated" },
                ].map(({ icon, label }) => (
                  <div key={label} className="card text-center text-sm font-semibold">
                    {icon}
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── About ────────────────────────────────────────────────────────── */}
        <section className="section-padding bg-slate-800">
          <div className="container-custom">
            <div className="grid lg:grid-cols-3 gap-8">

              {/* Main content */}
              <article className="lg:col-span-2 space-y-8">
                <h2 className="text-3xl font-bold">
                  Car Locksmith in {area.name} — Why Choose Us?
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">{area.description}</p>

                <section>
                  <h3 className="text-2xl font-bold mb-4">Services Available in {area.name}</h3>
                  <ul className="space-y-3">
                    {[
                      { label: "Car key replacement — all makes and models", href: "/services/car-key-replacement" },
                      { label: "Emergency 24/7 car lockout assistance", href: "/services/lockout-assistance" },
                      { label: "Key fob programming and remote repair", href: "/services/key-fob-programming" },
                      { label: "Van lockout and van key services", href: "/services/van-lockout" },
                      { label: "Ignition repair and replacement", href: "/services/ignition-repair" },
                      { label: "Transponder and smart key programming", href: "/services/auto-keys-programming" },
                    ].map(({ label, href }) => (
                      <li key={label} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                        <Link href={href} className="text-gray-300 hover:text-orange-400 transition-colors">
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h3 className="text-2xl font-bold mb-4">Areas Around {area.name} We Cover</h3>
                  <p className="text-gray-300 mb-4">
                    Based in Stockport, we cover {area.name} and its surrounding neighbourhoods including:
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {area.nearbyAreas.map((nearby) => (
                      <div key={nearby} className="flex items-center gap-2 text-gray-300">
                        <MapPin className="w-4 h-4 text-orange-400 flex-shrink-0" aria-hidden="true" />
                        {nearby}
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-bold mb-3">Local Landmarks We Service Near</h3>
                  <div className="flex flex-wrap gap-2">
                    {area.landmarks.map((lm) => (
                      <span key={lm} className="bg-slate-700 text-gray-300 text-sm px-3 py-1 rounded-full">
                        {lm}
                      </span>
                    ))}
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-bold mb-3">A Local Locksmith You Can Trust</h3>
                  <p className="text-gray-300 leading-relaxed">{area.whyChoose}</p>
                </section>
              </article>

              {/* Sidebar */}
              <aside aria-label="Quick info and contact">
                <div className="space-y-6">

                  <div className="card p-6">
                    <h3 className="text-xl font-bold mb-4">Quick Facts</h3>
                    <ul className="space-y-3 text-sm text-gray-300">
                      {[
                        { label: "Area:", value: `${area.name} ${area.postcode}` },
                        { label: "Response time:", value: area.responseTime },
                        { label: "Available:", value: "24/7" },
                        { label: "Call-out fee:", value: "None" },
                        { label: "Insurance:", value: "Fully insured" },
                      ].map(({ label, value }) => (
                        <li key={label} className="flex justify-between">
                          <span>{label}</span>
                          <span className="text-orange-400 font-bold">{value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="card p-6 bg-orange-400/10 border border-orange-400/20">
                    <h3 className="text-xl font-bold mb-3 text-orange-400">
                      Locked Out in {area.name}?
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm">
                      Call now for immediate help. Fixed price given before any work starts.
                    </p>
                    <a
                      href="tel:+447309903243"
                      className="btn-primary w-full text-center block"
                      aria-label={`Call locksmith in ${area.name}`}
                    >
                      <Phone className="w-4 h-4 inline mr-2" aria-hidden="true" />
                      07309903243
                    </a>
                  </div>

                  <nav className="card p-6" aria-label="All services">
                    <h3 className="text-xl font-bold mb-4">All Services</h3>
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
                          <Link href={s.href} className="text-orange-400 hover:text-orange-300 transition-colors">
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

        {/* ── FAQ ──────────────────────────────────────────────────────────── */}
        <section className="section-padding">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-8 text-center">
              {area.name} Auto Locksmith — Frequently Asked Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {faqItems.map((item, i) => (
                <article key={i} className="card p-6">
                  <h3 className="font-bold text-orange-400 mb-2">{item.question}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Nearby Stockport Areas ────────────────────────────────────────── */}
        <section className="section-padding bg-slate-800">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Nearby Areas in Stockport We Also Cover
            </h2>
            <p className="text-gray-300 text-center mb-10 max-w-2xl mx-auto">
              Our auto locksmith covers all of Stockport. If you're near {area.name}, we also
              serve these neighbouring areas:
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {nearbyStockportSlugs.map((s) => {
                const nearby = stockportSubAreaData[s]
                if (!nearby) return null
                return (
                  <Link
                    key={s}
                    href={`/areas/stockport/${s}`}
                    className="card p-5 hover:bg-slate-700 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-orange-400">{nearby.name}</span>
                      <span className="text-gray-400 text-sm">{nearby.postcode}</span>
                    </div>
                    <p className="text-gray-300 text-sm">
                      Auto locksmith — {nearby.responseTime} response
                    </p>
                  </Link>
                )
              })}
              <Link
                href="/areas/stockport"
                className="card p-5 hover:bg-slate-700 transition-colors"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-orange-400">All Stockport Areas</span>
                  <span className="text-gray-400 text-sm">→</span>
                </div>
                <p className="text-gray-300 text-sm">View the full Stockport coverage map</p>
              </Link>
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <section className="section-padding bg-gradient-to-br from-orange-600 to-orange-700">
          <div className="container-custom text-center">
            <h2 className="text-4xl font-bold mb-4">
              Need an Auto Locksmith in {area.name}?
            </h2>
            <p className="text-xl text-orange-50 mb-8 max-w-2xl mx-auto">
              Available 24/7 across {area.name} {area.postcode}. Fixed price given upfront.
              No call-out fee. Fully insured.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:+447309903243"
                className="btn-primary bg-white text-orange-600 hover:bg-gray-100"
                aria-label={`Call our locksmith in ${area.name}`}
              >
                <Phone className="w-5 h-5 inline mr-2" aria-hidden="true" />
                Call Now: 07309903243
              </a>
              <Link href="/contact" className="btn-secondary border-2 border-white text-white hover:bg-white/10">
                Request Free Quote
              </Link>
            </div>
          </div>
        </section>

        {/* ── Back link ────────────────────────────────────────────────────── */}
        <section className="py-8 bg-slate-800">
          <div className="container-custom text-center">
            <p className="text-gray-300">
              <Link href="/areas/stockport" className="text-orange-400 hover:text-orange-300 font-semibold">
                ← Back to all Stockport service areas
              </Link>
            </p>
          </div>
        </section>

      </main>
    </>
  )
}
