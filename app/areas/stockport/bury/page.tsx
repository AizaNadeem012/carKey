import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import Breadcrumb from "../../../components/breadcrumb"
import { localBusinessSchema, faqSchema } from "@/lib/schema"
import { Phone, Clock, Shield, CheckCircle, MapPin, Star } from "lucide-react"

const locationName = "Bury"
const locationSlug = "bury"

export const metadata: Metadata = {
  title: "Auto Locksmith Bury | Car Key Replacement & Emergency Lockout Service 24/7",
  description:
    "Professional auto locksmith services in Bury, Greater Manchester. Car key replacement, emergency lockout, key fob programming. Fast response. Fully insured. Call 07309903243",
  keywords: "auto locksmith Bury, car locksmith Bury, lockout service, key replacement",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Auto Locksmith Bury | Professional Car Key & Emergency Service",
    description: "Fast auto locksmith services in Bury. Car key replacement, emergency lockout, key fob programming. 24/7 service. Call 07309903243",
    url: "https://carkeysinstockport.co.uk/areas/stockport/bury",
    type: "website",
  },
  alternates: {
    canonical: "https://carkeysinstockport.co.uk/areas/stockport/bury",
  },
}

const faqItems = [
  {
    question: `How fast can you arrive in ${locationName}?`,
    answer: `We aim to arrive within 25 minutes of your call in ${locationName} and surrounding areas.`,
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

const serviceAreas = ["Bury Town Centre", "Radcliffe", "Whitefield", "Prestwich", "Heywood"]

export default function BuryPage() {
  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema(locationSlug, locationName)),
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
          { name: "Stockport", href: "/areas/stockport" },
          { name: locationName, href: `/areas/stockport/${locationSlug}` },
        ]}
      />
      <main className="bg-slate-900 text-white pt-20">
        <section className="section-padding bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="container-custom">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-orange-400 mb-4">
                <MapPin className="w-5 h-5" aria-hidden="true" />
                <span className="font-semibold">Local Locksmith Service</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Auto Locksmith Services in <span className="text-orange-400">{locationName}</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Professional car locksmith and auto key services in {locationName}. Available 24/7 with 25-minute response time.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="tel:07309903243" className="btn-primary text-center" aria-label="Call our locksmith service">
                  <Phone className="w-5 h-5 inline mr-2" aria-hidden="true" />
                  Call Now: 07309903243
                </a>
                <Link href="/contact" className="btn-secondary text-center">
                  Request Service
                </Link>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="card">
                  <MapPin className="w-6 h-6 text-orange-400 mx-auto mb-2" aria-hidden="true" />
                  <div className="text-sm font-semibold">Local Service</div>
                </div>
                <div className="card">
                  <Clock className="w-6 h-6 text-orange-400 mx-auto mb-2" aria-hidden="true" />
                  <div className="text-sm font-semibold">25 Min Response</div>
                </div>
                <div className="card">
                  <Shield className="w-6 h-6 text-orange-400 mx-auto mb-2" aria-hidden="true" />
                  <div className="text-sm font-semibold">Fully Insured</div>
                </div>
                <div className="card">
                  <Star className="w-6 h-6 text-orange-400 mx-auto mb-2" aria-hidden="true" />
                  <div className="text-sm font-semibold">5★ Rated</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-slate-800">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
              <article className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-6">Why Choose Our {locationName} Locksmith Service?</h2>

                <div className="space-y-6">
                  <p className="text-gray-300 text-lg">
                    Locked out of your car in {locationName}? Need a new key? Our certified locksmiths provide damage-free entry, rapid response times, and transparent pricing. We handle all vehicle types and modern security systems. Whether it's an emergency lockout or planned key replacement, we're ready to help.
                  </p>

                  <section>
                    <h3 className="text-2xl font-bold">What We Offer in {locationName}:</h3>
                    <ul className="space-y-3 mt-4">
                      {[
                        "Car key replacement for all makes and models",
                        "Emergency 24/7 lockout assistance",
                        "Key fob programming and repair",
                        "Van lockout services",
                        "Ignition repair and replacement",
                        "Auto key programming with modern technology",
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-2xl font-bold">Service Areas in {locationName}</h3>
                    <p className="text-gray-300 mb-4 mt-4">We cover {locationName} and surrounding areas, including:</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {serviceAreas.map((area) => (
                        <div key={area} className="flex items-center gap-2 text-gray-300">
                          <MapPin className="w-4 h-4 text-orange-400" aria-hidden="true" />
                          {area}
                        </div>
                      ))}
                    </div>
                  </section>

                  <section>
                    <h3 className="text-2xl font-bold">Local Locksmith You Can Trust</h3>
                    <p className="text-gray-300 mt-4">
                      We're local to {locationName} and know the area well. Fast response times, professional service, and no hidden charges. Available 24/7 for emergencies including evenings, weekends, and bank holidays.
                    </p>
                  </section>
                </div>
              </article>

              <aside aria-label="Service information sidebar">
                <div className="space-y-6">
                  <div className="card p-6">
                    <h3 className="text-xl font-bold mb-4">Quick Facts</h3>
                    <ul className="space-y-3 text-sm text-gray-300">
                      <li className="flex justify-between">
                        <span>Service Area:</span>
                        <span className="text-orange-400 font-bold">{locationName}</span>
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
                    <h3 className="text-xl font-bold mb-4 text-orange-400">Need Help in {locationName}?</h3>
                    <p className="text-gray-300 mb-4">Call us now for immediate assistance.</p>
                    <a href="tel:07309903243" className="btn-primary w-full text-center" aria-label="Call our locksmith service">
                      <Phone className="w-4 h-4 inline mr-2" aria-hidden="true" />
                      07309903243
                    </a>
                  </div>

                  <nav className="card p-6">
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
                  </nav>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-8 text-center">{locationName} Auto Locksmith FAQs</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {faqItems.map((item, index) => (
                <article key={index} className="card p-6">
                  <h3 className="font-bold text-orange-400 mb-2">{item.question}</h3>
                  <p className="text-gray-300 text-sm">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-gradient-to-br from-orange-600 to-orange-700">
          <div className="container-custom text-center">
            <h2 className="text-4xl font-bold mb-6">Need an Auto Locksmith in {locationName}?</h2>
            <p className="text-xl text-orange-50 mb-8 max-w-2xl mx-auto">
              We're here to help with car keys, lockouts, and emergency services. Available 24/7 across {locationName}.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:07309903243" className="btn-primary bg-white text-orange-600 hover:bg-gray-100" aria-label="Call our locksmith service">
                <Phone className="w-5 h-5 inline mr-2" aria-hidden="true" />
                Call Now: 07309903243
              </a>
              <Link href="/contact" className="btn-secondary border-2 border-white text-white hover:bg-white/10">
                Get Free Quote
              </Link>
            </div>
          </div>
        </section>

        <section className="section-padding bg-slate-800">
          <div className="container-custom text-center">
            <p className="text-gray-300 mb-6">
              Looking for service in a different area?{" "}
              <Link href="/areas/stockport" className="text-orange-400 hover:text-orange-300 font-semibold">
                View all Stockport service areas
              </Link>
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
