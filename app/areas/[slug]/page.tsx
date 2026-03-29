import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import Breadcrumb from "../../components/breadcrumb"

export const revalidate = 86400
import { localBusinessSchema, faqSchema } from "@/lib/schema"
import { areaLocationData, areaSlugs } from "@/lib/area-locations"
import { Phone, Clock, Shield, CheckCircle, MapPin, Star } from "lucide-react"

interface LocationPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const slug = (await params).slug
  const location = areaLocationData[slug]

  if (!location) {
    return {
      title: "Location Not Found",
      description: "This location page could not be found.",
    }
  }

  return {
    title: location.metaTitle,
    description: location.metaDescription,
    keywords: `auto locksmith ${location.name}, car locksmith ${location.name}, lockout service, key replacement`,
  }
}

export function generateStaticParams() {
  return Object.keys(areaLocationData).map((slug) => ({
    slug,
  }))
}

export default function LocationPage({ params }: LocationPageProps) {
  const slug = (params as any).slug
  const location = areaLocationData[slug]

  if (!location) {
    return (
      <main className="bg-slate-900 text-white pt-20">
        <div className="container-custom text-center py-20">
          <h1 className="text-3xl font-bold mb-4">Location Not Found</h1>
          <p className="text-gray-300 mb-8">The location you're looking for doesn't exist.</p>
          <Link href="/" className="text-orange-400 hover:text-orange-300 underline">
            Return to Home
          </Link>
        </div>
      </main>
    )
  }

  const faqItems = [
    {
      question: `How fast can you arrive in ${location.name}?`,
      answer: `We aim to arrive within 25 minutes of your call in ${location.name} and surrounding areas.`,
    },
    {
      question: "Will you damage my car getting in?",
      answer: "No. We use damage-free, professional techniques to unlock your vehicle safely.",
    },
    {
      question: "Do you charge a call-out fee?",
      answer: "No hidden fees. The cost shown is what you pay. Transparent pricing always.",
    },
    {
      question: "Are you available at night?",
      answer: "Yes, we're available 24/7, including weekends and bank holidays.",
    },
  ]

  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema(slug, location.name)),
        }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(faqItems)),
        }}
      />
      <Breadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Service Areas", href: "/#locations" },
          { name: location.name, href: `/areas/${slug}` },
        ]}
      />
      <main className="bg-slate-900 text-white pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-orange-400 mb-4">
              <MapPin className="w-5 h-5" />
              <span className="font-semibold">Local Locksmith Service</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Auto Locksmith Services in <span className="text-orange-400">{location.name}</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              {location.heroDescription} Available 24/7 with 25-minute response time across {location.name} and surrounding
              areas.
            </p>

            <p className="text-gray-300 mb-8">
              Explore our{" "}
              <Link href="/services" className="text-orange-400 hover:text-orange-300 underline">
                car locksmith services
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
              <a href="tel:07309903243" className="btn-primary text-center">
                <Phone className="w-5 h-5 inline mr-2" />
                Call Now: 07309903243
              </a>
              <Link href="/contact" className="btn-secondary text-center">
                Request Service
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="card">
                <MapPin className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                <div className="text-sm font-semibold">Local Service</div>
              </div>
              <div className="card">
                <Clock className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                <div className="text-sm font-semibold">25 Min Response</div>
              </div>
              <div className="card">
                <Shield className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                <div className="text-sm font-semibold">Fully Insured</div>
              </div>
              <div className="card">
                <Star className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                <div className="text-sm font-semibold">5★ Rated</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Service in Location */}
      <section className="section-padding bg-slate-800">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Why Choose Our {location.name} Locksmith Service?</h2>

              <div className="space-y-6">
                <p className="text-gray-300 text-lg">{location.description}</p>

                <h3 className="text-2xl font-bold">What We Offer in {location.name}:</h3>
                <ul className="space-y-3">
                  {[
                    "Car key replacement for all makes and models",
                    "Emergency 24/7 lockout assistance",
                    "Key fob programming and repair",
                    "Van lockout services",
                    "Ignition repair and replacement",
                    "Auto key programming with modern technology",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-2xl font-bold mt-8">Service Areas in {location.name}</h3>
                <p className="text-gray-300 mb-4">We cover {location.name} and surrounding areas, including:</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {location.areas.map((area) => (
                    <div key={area} className="flex items-center gap-2 text-gray-300">
                      <MapPin className="w-4 h-4 text-orange-400" />
                      {area}
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-bold mt-8">Local Locksmith You Can Trust</h3>
                <p className="text-gray-300">{location.whyChoose}</p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-4">Quick Facts</h3>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex justify-between">
                    <span>Service Area:</span>
                    <span className="text-orange-400 font-bold">{location.name}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Avg Response:</span>
                    <span className="text-orange-400 font-bold">25 min</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Available:</span>
                    <span className="text-orange-400 font-bold">24/7</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Call-Out Fee:</span>
                    <span className="text-orange-400 font-bold">None</span>
                  </li>
                </ul>
              </div>

              <div className="card p-6 bg-orange-400/10 border border-orange-400/20">
                <h3 className="text-xl font-bold mb-4 text-orange-400">Need Help in {location.name}?</h3>
                <p className="text-gray-300 mb-4">Call us now for immediate assistance.</p>
                <a href="tel:07309903243" className="btn-primary w-full text-center">
                  <Phone className="w-4 h-4 inline mr-2" />
                  07309903243
                </a>
              </div>

              <div className="card p-6">
                <h3 className="text-xl font-bold mb-4">All Services</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Car Lockout", href: "/services/lockout-assistance" },
                    { name: "Key Replacement", href: "/services/car-key-replacement" },
                    { name: "Van Lockout", href: "/services/van-lockout" },
                    { name: "Key Fob Programming", href: "/services/key-fob-programming" },
                    { name: "Emergency Service", href: "/services/emergency-service" },
                  ].map((service) => (
                    <li key={service.name}>
                      <Link href={service.href} className="text-orange-400 hover:text-orange-300 text-sm">
                        {service.name} Service
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center">{location.name} Auto Locksmith FAQs</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqItems.map((item, index) => (
              <div key={index} className="card p-6">
                <h3 className="font-bold text-orange-400 mb-2">{item.question}</h3>
                <p className="text-gray-300 text-sm">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Service Areas (Sibling Linking) */}
      <section className="section-padding bg-slate-800">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-6 text-center">Nearby Areas We Also Cover</h2>
          <p className="text-gray-300 text-center mb-10 max-w-3xl mx-auto">
            If you’re near {location.name}, you may also be looking for an auto locksmith in these nearby areas:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {areaSlugs
              .filter((s) => s !== slug)
              .slice(0, 6)
              .map((s) => (
                <Link key={s} href={`/areas/${s}`} className="card p-5 hover:bg-slate-700 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-orange-400">{areaLocationData[s]?.name ?? s}</span>
                    <span className="text-gray-400 text-sm">View →</span>
                  </div>
                  <p className="text-gray-300 text-sm mt-2">
                    Auto locksmith services including car keys, lockouts, and key programming.
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-orange-600 to-orange-700">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">Need an Auto Locksmith in {location.name}?</h2>
          <p className="text-xl text-orange-50 mb-8 max-w-2xl mx-auto">
            We're here to help with car keys, lockouts, and emergency services. Available 24/7 across {location.name}.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:07309903243" className="btn-primary bg-white text-orange-600 hover:bg-gray-100">
              <Phone className="w-5 h-5 inline mr-2" />
              Call Now: 07309903243
            </a>
            <Link href="/contact" className="btn-secondary border-2 border-white text-white hover:bg-white/10">
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Back to Main Location */}
      <section className="section-padding bg-slate-800">
        <div className="container-custom text-center">
          <p className="text-gray-300 mb-6">
            Looking for service in a different area?{" "}
            <Link href="/" className="text-orange-400 hover:text-orange-300 font-semibold">
              View all service areas
            </Link>
          </p>
        </div>
      </section>
    </main>
    </>
  )
}
