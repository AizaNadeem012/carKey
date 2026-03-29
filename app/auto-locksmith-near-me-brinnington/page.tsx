import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import {
  Phone,
  Clock,
  Shield,
  MapPin,
  Star,
  CheckCircle,
  ArrowRight,
  Zap,
  Key,
  Wrench,
  Lock,
  Settings,
  MessageCircle,
} from "lucide-react"
import type { Metadata } from "next"
import { faqSchema } from "@/lib/schema"

const location = "Brinnington"
const locationSlug = "brinnington"
const neighborhoods = ["Brinnington","Adswood","Portwood","Reddish"]

export const metadata: Metadata = {
  title: "Brinnington Auto Locksmith Near Me 24/7 | Fast Car Key & Lockout Services",
  description:
    "Looking for an auto locksmith near me in Brinnington? Our certified mobile locksmiths provide 24/7 emergency car lockout assistance, lost key replacement, key fob programming, and ignition repair. Call 07309903243 now.",
  keywords: [
    "Brinnington auto locksmith",
    "auto locksmith near me Brinnington",
    "emergency locksmith Brinnington",
    "car key replacement Brinnington",
    "key fob programming Brinnington",
    "lost car keys Brinnington",
    "24/7 auto locksmith Brinnington",
    "mobile locksmith Brinnington",
    "emergency car lockout Brinnington",
    "smart key programming Brinnington",
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: `https://carkeysinstockport.co.uk/auto-locksmith-near-me-${locationSlug}` },
}

const faqData = [
  {
    question: `What should I do if I've lost my car keys in ${location}?`,
    answer: `If you've lost your car keys in ${location}, contact us immediately at 07309903243. Our mobile locksmiths can create new car keys on-site, even without the original key. We're equipped with advanced key cutting and programming equipment to handle all vehicle makes and models. Our fast response service means we'll be with you quickly to get you back on the road.`,
  },
  {
    question: `Can you program smart keys and key fobs in ${location}?`,
    answer: `Yes, we specialize in smart key programming and key fob programming for all modern vehicles in ${location}. Our certified locksmiths use professional diagnostic equipment to program transponder keys, remote key fobs, and smart keys for vehicles including BMW, Mercedes, Audi, Ford, Vauxhall, and all other major manufacturers.`,
  },
  {
    question: `How quickly can you respond to an emergency car lockout in ${location}?`,
    answer: `We provide fast emergency car lockout assistance in ${location} with typical response times of 25-30 minutes. Our mobile locksmiths are strategically positioned to reach you quickly, 24 hours a day, 7 days a week. We use non-destructive entry techniques to get you back in your vehicle safely and quickly.`,
  },
]

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: `Auto Locksmith ${location}`,
  description: `24/7 emergency auto locksmith services in ${location}. Car lockout assistance, lost key replacement, key fob programming.`,
  url: `https://carkeysinstockport.co.uk/auto-locksmith-near-me-${locationSlug}`,
  telephone: "+447309903243",
  address: {
    "@type": "PostalAddress",
    addressLocality: location,
    addressRegion: "Greater Manchester",
    addressCountry: "GB",
  },
  areaServed: { "@type": "City", name: location },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
}

export default function AutoLocksmithNearMePage() {
  return (
    <>
      <Script
        id={`${locationSlug}-schema`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id={`${locationSlug}-faq-schema`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqData)) }}
      />

      <main className="bg-slate-900 text-white">
        <section className="section-padding pt-24 sm:pt-28 md:pt-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 text-orange-400 mb-3 sm:mb-4">
                  <Clock className="w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0" />
                  <span className="font-semibold text-sm sm:text-base">Available 24/7 - Fast Mobile Response</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                  {location} Auto Locksmith Near Me 24/7 – Fast, Mobile Car Key Services
                </h1>
                <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                  Looking for a trusted auto locksmith near me in {location}? Our certified mobile locksmiths provide
                  24/7 emergency car lockout assistance, lost car key replacement, key fob programming, and ignition
                  repair. Fully insured, professional technicians, fast response times, and no call-out fee. We come to
                  you wherever you are in {location}—home, work, or roadside. Your trusted local auto locksmith service.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <a
                    href="tel:07309903243"
                    className="btn-primary text-center w-full sm:w-auto flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now: 07309903243
                  </a>
                  <Link
                    href="/contact"
                    className="btn-secondary text-center w-full sm:w-auto flex items-center justify-center gap-2"
                  >
                    <span>Request Free Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                  <div className="card">
                    <Shield className="w-6 sm:w-8 h-6 sm:h-8 text-green-400 mx-auto mb-2" />
                    <div className="text-xs sm:text-sm font-semibold">Fully Insured</div>
                  </div>
                  <div className="card">
                    <Zap className="w-6 sm:w-8 h-6 sm:h-8 text-blue-400 mx-auto mb-2" />
                    <div className="text-xs sm:text-sm font-semibold">Fast Response</div>
                  </div>
                  <div className="card">
                    <CheckCircle className="w-6 sm:w-8 h-6 sm:h-8 text-orange-400 mx-auto mb-2" />
                    <div className="text-xs sm:text-sm font-semibold">No Call-Out Fee</div>
                  </div>
                  <div className="card">
                    <Star className="w-6 sm:w-8 h-6 sm:h-8 text-yellow-400 mx-auto mb-2" />
                    <div className="text-xs sm:text-sm font-semibold">24/7 Available</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden border-2 border-orange-400/30">
                  <Image
                    src="/images/auto-car-locksmith-services-in-stockport.jpg"
                    alt={`Professional auto locksmith service in ${location}`}
                    width={600}
                    height={500}
                    priority
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-slate-800" id="services">
          <div className="container-custom">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-center">
              Comprehensive Auto Locksmith Services in {location}
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto text-center mb-12">
              Professional automotive locksmith services available 24/7 in {location}. From emergency lockouts to lost
              key replacement, we handle all your auto locksmith needs.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <article className="card p-6">
                <Lock className="w-10 h-10 text-orange-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">Emergency Car Lockout Assistance</h3>
                <p className="text-gray-300 mb-4">
                  Locked out of your car in {location}? Our mobile locksmiths provide fast, damage-free entry using
                  non-destructive techniques. Available 24/7 for immediate assistance.
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
                  <li>Non-destructive entry methods</li>
                  <li>24/7 emergency availability</li>
                  <li>Fast response times</li>
                </ul>
              </article>
              <article className="card p-6">
                <Key className="w-10 h-10 text-orange-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">Lost Car Key Replacement</h3>
                <p className="text-gray-300 mb-4">
                  Lost your car keys? We can create new keys on-site in {location}, even without the original key.
                  Professional key cutting and programming for all vehicle types.
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
                  <li>On-site key cutting</li>
                  <li>Transponder key programming</li>
                  <li>All vehicle makes and models</li>
                </ul>
              </article>
              <article className="card p-6">
                <Key className="w-10 h-10 text-orange-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">Spare Car Key Cutting & Duplication</h3>
                <p className="text-gray-300 mb-4">
                  Need a spare car key? We provide professional key cutting and duplication services in {location}.
                  Having a backup key can save you time and money.
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
                  <li>Spare key cutting</li>
                  <li>Key duplication</li>
                  <li>Affordable solutions</li>
                </ul>
              </article>
              <article className="card p-6">
                <Settings className="w-10 h-10 text-orange-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">Key Fob Repair & Programming</h3>
                <p className="text-gray-300 mb-4">
                  Key fob not working? We repair and program remote key fobs, transponder keys, and smart keys for all
                  modern vehicles in {location}.
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
                  <li>Remote key fob programming</li>
                  <li>Key fob repair</li>
                  <li>Smart key synchronization</li>
                </ul>
              </article>
              <article className="card p-6">
                <Settings className="w-10 h-10 text-orange-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">Transponder & Smart Key Programming</h3>
                <p className="text-gray-300 mb-4">
                  Need transponder or smart key programming? Our certified locksmiths use professional diagnostic
                  equipment to program all types of vehicle keys in {location}.
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
                  <li>Transponder key coding</li>
                  <li>Smart key programming</li>
                  <li>Immobilizer synchronization</li>
                </ul>
              </article>
              <article className="card p-6">
                <Wrench className="w-10 h-10 text-orange-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">Ignition Repair & Replacement</h3>
                <p className="text-gray-300 mb-4">
                  Ignition problems? We provide professional ignition repair and replacement services in {location}. Fast
                  diagnosis and repair for all vehicle types.
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
                  <li>Ignition switch repair</li>
                  <li>Ignition cylinder replacement</li>
                  <li>Broken key extraction</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="section-padding bg-slate-900">
          <div className="container-custom">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-center">
              Areas We Serve in {location}
            </h2>
            <p className="text-lg text-gray-300 text-center mb-8">
              Our mobile locksmith service covers {location} and surrounding neighborhoods:
            </p>
            <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {neighborhoods.map((area) => (
                <div key={area} className="card p-4 text-center">
                  <MapPin className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                  <h3 className="font-bold">{area}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-slate-800">
          <div className="container-custom">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-center">
              Why Choose Our Auto Locksmith Service in {location}?
            </h2>
            <div className="max-w-3xl mx-auto">
              <ul className="space-y-4 text-lg">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">
                    <strong className="text-white">Fully Insured:</strong> Comprehensive insurance coverage for all
                    services, giving you complete peace of mind
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">
                    <strong className="text-white">No Call-Out Fee:</strong> Transparent pricing with no hidden
                    charges—you know exactly what you'll pay upfront
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">
                    <strong className="text-white">Fast Response Times:</strong> Our mobile locksmiths arrive quickly
                    in {location}, typically within 25-30 minutes
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">
                    <strong className="text-white">Professional Expertise:</strong> Certified locksmiths with extensive
                    training in modern vehicle security systems
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">
                    <strong className="text-white">24/7 Availability:</strong> Round-the-clock emergency service for
                    car lockouts, lost keys, and urgent auto locksmith needs
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">
                    <strong className="text-white">Mobile Service:</strong> We come to you—home, work, or roadside in{" "}
                    {location}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section-padding bg-slate-900">
          <div className="container-custom">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-center">
              How Our Emergency Locksmith Process Works
            </h2>
            <div className="max-w-3xl mx-auto">
              <ol className="space-y-6">
                <li className="card p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-400 text-slate-900 rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Call Us</h3>
                      <p className="text-gray-300">
                        Contact us at <strong className="text-white">07309903243</strong> or request a free quote
                        online. We'll gather details about your vehicle and situation.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="card p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-400 text-slate-900 rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Fast Mobile Response</h3>
                      <p className="text-gray-300">
                        Our mobile locksmith arrives at your location in {location} quickly, typically within 25-30
                        minutes, fully equipped with all necessary tools.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="card p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-400 text-slate-900 rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Professional Service</h3>
                      <p className="text-gray-300">
                        Our certified locksmith assesses your situation, provides an upfront quote, and completes the
                        work using professional-grade equipment and techniques.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="card p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-400 text-slate-900 rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Job Complete</h3>
                      <p className="text-gray-300">
                        Your car keys are replaced, programmed, or your lockout resolved. We test everything to ensure
                        it works perfectly before leaving.
                      </p>
                    </div>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </section>

        <section className="section-padding bg-red-600">
          <div className="container-custom text-center">
            <Zap className="w-16 h-16 text-yellow-300 mx-auto mb-6 animate-pulse" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Emergency Auto Locksmith Services Available 24/7 in {location}
            </h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
              Locked out of your car? Lost your keys? Need urgent car key replacement? Our mobile locksmiths provide
              round-the-clock emergency auto locksmith services in {location}. We're available 24 hours a day, 7 days a
              week, including weekends and holidays. Fast response times, no call-out fee, and professional service
              when you need it most. Our mobile service means we come to you—whether you're at home, work, or stranded
              roadside in {location}.
            </p>
            <a
              href="tel:07309903243"
              className="bg-white text-red-600 font-bold px-8 py-4 rounded-2xl hover:bg-gray-100 transition-colors text-lg sm:text-xl inline-flex items-center justify-center gap-2 mb-4"
            >
              <Phone className="w-5 h-5" />
              Call Now: 07309903243
            </a>
            <p className="text-sm opacity-90">Available 24/7 • Fast Response • No Call-Out Fee • Fully Insured</p>
          </div>
        </section>

        <section className="section-padding bg-slate-800" id="faq">
          <div className="container-custom">
            <div className="text-center mb-12">
              <MessageCircle className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked Questions About Auto Locksmith Services in {location}
              </h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqData.map((faq, index) => (
                <article key={index} className="card p-6">
                  <h3 className="text-xl font-bold mb-3 text-white">{faq.question}</h3>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-gradient-to-r from-orange-600 to-red-600">
          <div className="container-custom text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Need an Auto Locksmith Near Me in {location}? Contact Us Today
            </h2>
            <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
              Whether you need emergency car lockout assistance, lost key replacement, key fob programming, or ignition
              repair, we're ready to help. Fast response, professional service, transparent pricing, and fully
              insured—your trusted local auto locksmith in {location}.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <a
                href="tel:07309903243"
                className="bg-white text-orange-600 font-bold px-8 py-4 rounded-2xl hover:bg-gray-100 transition-colors text-lg inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now: 07309903243
              </a>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-2xl hover:bg-white/10 transition-colors text-lg inline-flex items-center justify-center gap-2"
              >
                <span>Request Free Quote</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <p className="text-lg mb-4">
                <strong>Fully Insured</strong> • <strong>No Call-Out Fee</strong> • <strong>Fast Response</strong> •{" "}
                <strong>24/7 Available</strong>
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}