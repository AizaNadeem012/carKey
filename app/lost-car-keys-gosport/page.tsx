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
  Award,
  Zap,
  Car,
  Key,
  Wrench,
  Lock,
  Settings,
  MessageCircle,
  Users,
  TrendingUp,
} from "lucide-react"
import type { Metadata } from "next"
import { faqSchema } from "@/lib/schema"

// SEO Metadata for Lost Car Keys Gosport
export const metadata: Metadata = {
  title: "Lost Car Keys Gosport | Expert Car Key Replacement & Auto Locksmith Service | 24/7",
  description:
    "Lost Car Keys Gosport: Professional lost car key replacement, spare keys, key fob programming, and emergency car lockout assistance in Gosport, Hampshire. Fully insured, no call-out fee, trusted local service. Available 24/7. Call 07309903243 now.",
  keywords: [
    "Lost car keys Gosport",
    "car key replacement Gosport",
    "auto locksmith Gosport",
    "emergency car locksmith Gosport",
    "key fob programming Gosport",
    "ignition repair Gosport",
    "car locksmith Gosport",
    "mobile locksmith Gosport",
    "24/7 locksmith Gosport",
    "lost keys Gosport",
    "spare car keys Gosport",
    "car key cutting Gosport",
    "transponder key Gosport",
    "smart key programming Gosport",
    "emergency lockout Gosport",
    "car key duplication Gosport",
    "remote key fob Gosport",
    "ignition key replacement Gosport",
    "automotive locksmith Gosport",
    "professional car keys Gosport",
    "trusted locksmith Gosport",
    "Gosport Hampshire locksmith",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Lost Car Keys Gosport | Expert Car Key Replacement & Auto Locksmith",
    description:
      "Professional lost car key replacement, spare keys, and emergency lockout assistance in Gosport, Hampshire. Fully insured, no call-out fee, 24/7 service. Call 07309903243",
    url: "https://carkeysinstockport.co.uk/lost-car-keys-gosport",
    type: "website",
    siteName: "Lost Car Keys Gosport",
    locale: "en_GB",
    images: [
      {
        url: "https://carkeysinstockport.co.uk/images/lost-car-keys-gosport-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Lost Car Keys Gosport - Professional Car Key Replacement Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lost Car Keys Gosport | 24/7 Car Key Replacement Service",
    description: "Professional lost car key replacement and auto locksmith services in Gosport, Hampshire. Call 07309903243",
    images: ["https://carkeysinstockport.co.uk/images/lost-car-keys-gosport-hero.jpg"],
  },
  alternates: {
    canonical: "https://carkeysinstockport.co.uk/lost-car-keys-gosport",
  },
  authors: [{ name: "Lost Car Keys Gosport" }],
  creator: "Lost Car Keys Gosport",
  publisher: "Lost Car Keys Gosport",
  category: "Automotive Locksmith Services",
}

// FAQ Data for Structured Data
const faqData = [
  {
    question: "What should I do if I've lost my car keys in Gosport?",
    answer:
      "If you've lost your car keys in Gosport, contact Lost Car Keys Gosport immediately at 07309903243. Our mobile locksmiths can create new car keys on-site, even without the original key. We're equipped with advanced key cutting and programming equipment to handle all vehicle makes and models. Our fast response service means we'll be with you quickly to get you back on the road.",
  },
  {
    question: "Can Lost Car Keys Gosport program smart keys and key fobs?",
    answer:
      "Yes, Lost Car Keys Gosport specializes in smart key programming and key fob programming for all modern vehicles. Our certified locksmiths use professional diagnostic equipment to program transponder keys, remote key fobs, and smart keys for vehicles including BMW, Mercedes, Audi, Ford, Vauxhall, and all other major manufacturers. We can program new keys or reprogram existing ones.",
  },
  {
    question: "Do you charge a call-out fee for emergency car lockout assistance in Gosport?",
    answer:
      "No, Lost Car Keys Gosport does not charge a call-out fee. We believe in transparent pricing with no hidden charges. You'll receive an upfront quote before any work begins, so you know exactly what you'll pay for lost car key replacement, emergency lockout assistance, or any other auto locksmith service. Our pricing is fair and competitive.",
  },
  {
    question: "How quickly can Lost Car Keys Gosport replace lost car keys?",
    answer:
      "Lost Car Keys Gosport provides fast, professional car key replacement services across Gosport and surrounding areas. Our mobile locksmiths typically arrive within 30-45 minutes of your call. We're equipped with advanced key cutting and programming equipment to handle all vehicle makes and models, ensuring your new car keys are ready quickly. For emergency situations, we prioritize fast response times.",
  },
  {
    question: "What areas around Gosport does Lost Car Keys Gosport serve?",
    answer:
      "Lost Car Keys Gosport provides comprehensive auto locksmith services across Gosport town center, Lee-on-the-Solent, Fareham, Stubbington, Alverstoke, and surrounding areas in Hampshire. Our mobile service covers the entire Gosport region, bringing professional car key replacement and auto locksmith services directly to your location.",
  },
]

// LocalBusiness Schema for Lost Car Keys Gosport
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://carkeysinstockport.co.uk/lost-car-keys-gosport#business",
  name: "Lost Car Keys Gosport",
  image: "https://carkeysinstockport.co.uk/images/lost-car-keys-gosport-hero.jpg",
  description:
    "Professional lost car key replacement, spare keys, key fob programming, and emergency car lockout assistance in Gosport, Hampshire. Fully insured, no call-out fee, trusted local service. Available 24/7.",
  url: "https://carkeysinstockport.co.uk/lost-car-keys-gosport",
  telephone: "+447309903243",
  email: "info@carkeysinstockport.co.uk",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gosport",
    addressRegion: "Hampshire",
    postalCode: "PO12",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 50.7948,
    longitude: -1.1294,
  },
  areaServed: [
    { "@type": "City", name: "Gosport" },
    { "@type": "City", name: "Lee-on-the-Solent" },
    { "@type": "City", name: "Fareham" },
    { "@type": "City", name: "Stubbington" },
    { "@type": "City", name: "Alverstoke" },
  ],
  priceRange: "££",
  paymentAccepted: "Cash, Credit Card, Debit Card",
  currenciesAccepted: "GBP",
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
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Car Key Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Lost Car Key Replacement",
          description: "Professional car key cutting and programming for lost keys, all vehicle makes and models",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Spare Keys",
          description: "Spare car key cutting and programming service",
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
          name: "Emergency Car Lockout Assistance",
          description: "Fast, damage-free car lockout entry service available 24/7",
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

// Service Schema
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Auto Locksmith Service",
  provider: {
    "@type": "LocalBusiness",
    name: "Lost Car Keys Gosport",
    telephone: "+447309903243",
  },
  areaServed: {
    "@type": "City",
    name: "Gosport",
    containedInPlace: {
      "@type": "State",
      name: "Hampshire",
    },
  },
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: "https://carkeysinstockport.co.uk/contact",
    servicePhone: "+447309903243",
    availableLanguage: "en-GB",
  },
}

export default function LostCarKeysGosportPage() {
  return (
    <>
      {/* Structured Data - LocalBusiness */}
      <Script
        id="gosport-local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      {/* Structured Data - Service */}
      <Script
        id="gosport-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      {/* Structured Data - FAQ */}
      <Script
        id="gosport-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(faqData)),
        }}
      />

      <main className="bg-slate-900 text-white">
        {/* Hero Section */}
        <section
          className="section-padding pt-24 sm:pt-28 md:pt-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
          itemScope
          itemType="https://schema.org/LocalBusiness"
        >
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="animate-fade-in">
                <div className="flex items-center gap-2 text-orange-400 mb-3 sm:mb-4">
                  <Clock className="w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0" />
                  <span className="font-semibold text-sm sm:text-base">Available 24/7 - Fast Response</span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                  Lost Car Keys Gosport – Expert Car Key Replacement & Auto Locksmith
                </h1>

                <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                  Lost your car keys in Gosport? Need spare keys or emergency lockout assistance? Lost Car Keys Gosport
                  is your trusted local auto locksmith service in Gosport, Hampshire. We provide professional lost car
                  key replacement, spare keys, key fob programming, emergency car lockout assistance, and ignition
                  repair with transparent pricing, no call-out fees, and fully insured service. Available 24/7 for fast
                  response times when you need us most.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <a
                    href="tel:07309903243"
                    className="btn-primary text-center w-full sm:w-auto flex items-center justify-center gap-2"
                    aria-label="Call Lost Car Keys Gosport now at 07309903243"
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

                {/* Trust Indicators */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                  <div className="card">
                    <Shield className="w-6 sm:w-8 h-6 sm:h-8 text-green-400 mx-auto mb-2" />
                    <div className="text-xs sm:text-sm font-semibold">Fully Insured</div>
                    <div className="text-xs text-gray-400 mt-1">All services protected</div>
                  </div>
                  <div className="card">
                    <Zap className="w-6 sm:w-8 h-6 sm:h-8 text-blue-400 mx-auto mb-2" />
                    <div className="text-xs sm:text-sm font-semibold">Fast Response</div>
                    <div className="text-xs text-gray-400 mt-1">Mobile service arrives quickly</div>
                  </div>
                  <div className="card">
                    <CheckCircle className="w-6 sm:w-8 h-6 sm:h-8 text-orange-400 mx-auto mb-2" />
                    <div className="text-xs sm:text-sm font-semibold">No Call-Out Fee</div>
                    <div className="text-xs text-gray-400 mt-1">Transparent pricing</div>
                  </div>
                  <div className="card">
                    <Star className="w-6 sm:w-8 h-6 sm:h-8 text-yellow-400 mx-auto mb-2" />
                    <div className="text-xs sm:text-sm font-semibold">Trusted Local</div>
                    <div className="text-xs text-gray-400 mt-1">Gosport's trusted service</div>
                  </div>
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative animate-slide-up">
                <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden border-2 border-orange-400/30">
                  <Image
                    src="/images/auto-car-locksmith-services-in-stockport.jpg"
                    alt="Lost Car Keys Gosport professional auto locksmith working on car key replacement in Gosport, Hampshire"
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

        {/* Services Section */}
        <section className="section-padding bg-slate-800" id="services">
          <div className="container-custom">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                Comprehensive Auto Locksmith Services by Lost Car Keys Gosport
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-2 sm:px-0">
                Professional automotive locksmith services across Gosport and Hampshire. From lost car keys to emergency
                lockouts, Lost Car Keys Gosport handles all your auto locksmith needs with expertise, professionalism,
                and fast response times.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <ul className="space-y-6">
                <li className="card p-6 sm:p-8" itemScope itemType="https://schema.org/Service">
                  <div className="flex items-start gap-4">
                    <Key className="w-8 h-8 text-orange-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white" itemProp="name">
                        Lost Car Key Replacement
                      </h3>
                      <p className="text-sm sm:text-base text-gray-300 mb-4" itemProp="description">
                        Lost your car keys? Lost Car Keys Gosport provides professional lost car key replacement
                        services for all vehicle makes and models. Our mobile locksmiths can create new keys on-site,
                        even without the original key. We cut and program new keys, including transponder keys, remote
                        key fobs, and smart keys. Our advanced equipment handles all vehicle security systems and
                        immobilizers.
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-sm text-gray-300 ml-4">
                        <li>On-site key cutting without original key</li>
                        <li>Transponder key programming</li>
                        <li>Smart key replacement</li>
                        <li>Immobilizer synchronization</li>
                        <li>All vehicle makes and models</li>
                      </ul>
                    </div>
                  </div>
                </li>

                <li className="card p-6 sm:p-8" itemScope itemType="https://schema.org/Service">
                  <div className="flex items-start gap-4">
                    <Key className="w-8 h-8 text-orange-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white" itemProp="name">
                        Spare Keys
                      </h3>
                      <p className="text-sm sm:text-base text-gray-300 mb-4" itemProp="description">
                        Need a spare car key? Lost Car Keys Gosport provides professional spare key cutting and
                        programming services. Having a spare key can save you time and money if you lose your primary
                        key. We can create spare keys for all vehicle types, including transponder keys, remote key
                        fobs, and smart keys. Get peace of mind with a backup key.
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-sm text-gray-300 ml-4">
                        <li>Spare key cutting and programming</li>
                        <li>Remote key fob duplication</li>
                        <li>Transponder key copying</li>
                        <li>Smart key backup creation</li>
                        <li>Affordable spare key solutions</li>
                      </ul>
                    </div>
                  </div>
                </li>

                <li className="card p-6 sm:p-8" itemScope itemType="https://schema.org/Service">
                  <div className="flex items-start gap-4">
                    <Settings className="w-8 h-8 text-orange-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white" itemProp="name">
                        Key Fob Programming
                      </h3>
                      <p className="text-sm sm:text-base text-gray-300 mb-4" itemProp="description">
                        Need your key fob programmed or reprogrammed? Lost Car Keys Gosport specializes in key fob
                        programming for all modern vehicles. Our certified locksmiths use professional diagnostic
                        equipment to program transponder keys, remote key fobs, and smart keys. Whether you need a
                        new key fob programmed or existing keys synchronized, we've got you covered with expert service.
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-sm text-gray-300 ml-4">
                        <li>Remote key fob programming</li>
                        <li>Transponder key coding</li>
                        <li>Smart key synchronization</li>
                        <li>Central locking system programming</li>
                        <li>Key fob repair and replacement</li>
                      </ul>
                    </div>
                  </div>
                </li>

                <li className="card p-6 sm:p-8" itemScope itemType="https://schema.org/Service">
                  <div className="flex items-start gap-4">
                    <Lock className="w-8 h-8 text-orange-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white" itemProp="name">
                        Emergency Car Lockout Assistance
                      </h3>
                      <p className="text-sm sm:text-base text-gray-300 mb-4" itemProp="description">
                        Locked out of your car? Lost Car Keys Gosport provides fast, damage-free emergency car lockout
                        assistance 24/7. Our experienced locksmiths use non-destructive entry techniques to get you back
                        in your vehicle quickly and safely, without causing any damage to your car's locks or doors.
                        Available around the clock for your peace of mind.
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-sm text-gray-300 ml-4">
                        <li>Non-destructive entry methods</li>
                        <li>24/7 emergency availability</li>
                        <li>Fast response times</li>
                        <li>No damage guarantee</li>
                        <li>All vehicle types</li>
                      </ul>
                    </div>
                  </div>
                </li>

                <li className="card p-6 sm:p-8" itemScope itemType="https://schema.org/Service">
                  <div className="flex items-start gap-4">
                    <Wrench className="w-8 h-8 text-orange-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white" itemProp="name">
                        Ignition Repair
                      </h3>
                      <p className="text-sm sm:text-base text-gray-300 mb-4" itemProp="description">
                        Ignition problems? Lost Car Keys Gosport provides professional ignition repair and replacement
                        services. Whether your ignition switch is stuck, broken, or not turning, our certified
                        locksmiths can diagnose and fix the issue quickly. We handle ignition cylinder replacement,
                        switch repair, and broken key extraction with professional expertise.
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-sm text-gray-300 ml-4">
                        <li>Ignition switch repair</li>
                        <li>Ignition cylinder replacement</li>
                        <li>Broken key extraction</li>
                        <li>All vehicle types</li>
                        <li>Fast turnaround time</li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="section-padding bg-slate-900" id="service-areas">
          <div className="container-custom">
            <div className="text-center mb-12 sm:mb-16">
              <div className="flex items-center justify-center gap-2 text-orange-400 mb-3 sm:mb-4">
                <MapPin className="w-5 sm:w-6 h-5 sm:h-6 flex-shrink-0" />
                <span className="font-semibold text-xs sm:text-sm tracking-wide uppercase">Service Areas</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                Lost Car Keys Gosport Serves Areas Around Gosport, Hampshire
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-2 sm:px-0">
                Our mobile locksmith service covers Gosport and surrounding areas, bringing professional car key
                replacement and auto locksmith services directly to your location.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {[
                  "Gosport Town Center",
                  "Lee-on-the-Solent",
                  "Fareham",
                  "Stubbington",
                  "Alverstoke",
                ].map((area) => (
                  <div key={area} className="card p-4 sm:p-6 text-center">
                    <MapPin className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                    <h3 className="text-lg sm:text-xl font-bold text-white">{area}</h3>
                    <p className="text-sm text-gray-300 mt-2">Car key services available</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="section-padding bg-slate-800" id="why-choose-us">
          <div className="container-custom">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                Why Choose Lost Car Keys Gosport?
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-2 sm:px-0">
                Trust, professionalism, and reliability—the foundation of Lost Car Keys Gosport's reputation as Gosport's
                leading auto locksmith service.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <ul className="space-y-4 text-lg sm:text-xl">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">
                    <strong className="text-white">Fully Insured:</strong> Comprehensive insurance coverage for all
                    services, giving you complete peace of mind and protection
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">
                    <strong className="text-white">No Call-Out Fee:</strong> Transparent pricing with no hidden
                    charges or surprise fees—you know exactly what you'll pay upfront before any work begins
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">
                    <strong className="text-white">Trusted Local Service:</strong> Lost Car Keys Gosport is a trusted
                    local business with deep roots in the Gosport community, providing reliable service you can count on
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">
                    <strong className="text-white">Fast Response Times:</strong> Our mobile locksmiths are strategically
                    positioned across Gosport and surrounding areas to provide quick response times when you need us
                    most, typically within 30-45 minutes
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">
                    <strong className="text-white">Professional Expertise:</strong> Certified locksmiths with extensive
                    training in modern vehicle security systems, transponder keys, and keyless entry technology
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">
                    <strong className="text-white">Transparent Pricing:</strong> Upfront quotes before any work begins,
                    ensuring you know exactly what you'll pay with no surprises or hidden costs
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">
                    <strong className="text-white">24/7 Availability:</strong> Round-the-clock emergency service for
                    lost car key replacement, lockout assistance, and urgent auto locksmith needs, available every day
                    of the year
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">
                    <strong className="text-white">All Vehicle Types:</strong> Car key replacement and programming for
                    all makes and models, from classic cars to the latest smart key systems and electric vehicles
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* How Our Process Works Section */}
        <section className="section-padding bg-slate-900" id="process">
          <div className="container-custom">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                How Our Process Works
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-2 sm:px-0">
                Simple, fast, and transparent. Here's what to expect when you call Lost Car Keys Gosport for lost car
                key replacement or auto locksmith services.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <ol className="space-y-6">
                <li className="card p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-400 text-slate-900 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center font-bold text-lg sm:text-xl flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white">
                        Contact Lost Car Keys Gosport
                      </h3>
                      <p className="text-sm sm:text-base text-gray-300">
                        Call us at <strong className="text-white">07309903243</strong> or request a free quote online.
                        Our friendly team will gather details about your vehicle make, model, year, and the service you
                        need. We'll provide an upfront quote with no obligation, so you know exactly what to expect.
                      </p>
                    </div>
                  </div>
                </li>

                <li className="card p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-400 text-slate-900 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center font-bold text-lg sm:text-xl flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white">Fast Mobile Response</h3>
                      <p className="text-sm sm:text-base text-gray-300">
                        Our mobile locksmiths arrive at your location quickly—whether you're at home, work, or roadside
                        in Gosport or surrounding areas. We're strategically positioned to provide fast response times,
                        typically within 30-45 minutes. Our fully equipped vans carry all necessary tools and equipment
                        for on-site key cutting and programming.
                      </p>
                    </div>
                  </div>
                </li>

                <li className="card p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-400 text-slate-900 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center font-bold text-lg sm:text-xl flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white">Professional Key Replacement or Programming</h3>
                      <p className="text-sm sm:text-base text-gray-300">
                        Our certified locksmiths assess your situation, confirm the quote, and complete the work using
                        professional-grade equipment and techniques. Whether it's lost car key replacement, key fob
                        programming, or lockout assistance, we handle it with expertise and care. We can create new keys
                        even without the original key, using advanced diagnostic equipment.
                      </p>
                    </div>
                  </div>
                </li>

                <li className="card p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-400 text-slate-900 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center font-bold text-lg sm:text-xl flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white">Job Complete & Tested</h3>
                      <p className="text-sm sm:text-base text-gray-300">
                        Your car keys are replaced, programmed, or your lockout resolved. We test everything thoroughly
                        to ensure it works perfectly before leaving. Your new keys will unlock doors, start the engine,
                        and work with your vehicle's immobilizer system. You'll receive a receipt and can be confident
                        that your vehicle is secure and operational.
                      </p>
                    </div>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* Emergency Services Section */}
        <section className="section-padding bg-red-600">
          <div className="container-custom text-center">
            <div className="max-w-3xl mx-auto">
              <Zap className="w-12 h-12 sm:w-16 sm:h-16 text-yellow-300 mx-auto mb-4 sm:mb-6 animate-pulse" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                Emergency Auto Locksmith Services Available 24/7
              </h2>
              <p className="text-lg sm:text-xl mb-6 sm:mb-8 leading-relaxed">
                Lost your car keys? Locked out of your vehicle? Need urgent car key replacement? Lost Car Keys Gosport
                provides round-the-clock emergency auto locksmith services across Gosport, Hampshire, and surrounding
                areas. Our mobile locksmiths are available 24 hours a day, 7 days a week, including weekends and
                holidays. We understand that car key emergencies don't wait for convenient times, which is why we're
                always ready to help. Fast response times, no call-out fee, and professional service when you need it
                most. Our mobile service means we come to you—whether you're at home, work, or stranded roadside.
              </p>
              <a
                href="tel:07309903243"
                className="bg-white text-red-600 font-bold px-8 py-4 rounded-2xl hover:bg-gray-100 transition-colors text-lg sm:text-xl inline-flex items-center justify-center gap-2 mb-4 sm:mb-6"
                aria-label="Emergency call to Lost Car Keys Gosport"
              >
                <Phone className="w-5 h-5" />
                Call Now: 07309903243
              </a>
              <p className="text-sm sm:text-base opacity-90">
                Available 24/7 • Fast Response • No Call-Out Fee • Fully Insured • Mobile Service
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-slate-800" id="faq">
          <div className="container-custom">
            <div className="text-center mb-12 sm:mb-16">
              <div className="flex items-center justify-center gap-2 text-orange-400 mb-3 sm:mb-4">
                <MessageCircle className="w-5 sm:w-6 h-5 sm:h-6 flex-shrink-0" />
                <span className="font-semibold text-xs sm:text-sm tracking-wide uppercase">
                  Frequently Asked Questions
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                Common Questions About Lost Car Keys Gosport Services
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-2 sm:px-0">
                Find answers to the most common questions about lost car keys, key replacement, and auto locksmith
                services in Gosport, Hampshire.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {faqData.map((faq, index) => (
                <article
                  key={index}
                  className="card p-6 sm:p-8"
                  itemScope
                  itemType="https://schema.org/Question"
                >
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 text-white" itemProp="name">
                    {faq.question}
                  </h3>
                  <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed" itemProp="text">
                      {faq.answer}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-300 text-base sm:text-lg mb-6 px-2 sm:px-0">
                Still have questions? Lost Car Keys Gosport's friendly team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <a
                  href="tel:07309903243"
                  className="btn-primary inline-flex items-center justify-center gap-2 w-full sm:w-auto"
                  aria-label="Call Lost Car Keys Gosport for questions"
                >
                  <Phone className="w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0" />
                  Call: 07309903243
                </a>
                <Link
                  href="/contact"
                  className="btn-secondary inline-flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding bg-gradient-to-r from-orange-600 to-red-600">
          <div className="container-custom text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Need Car Key Services in Gosport? Contact Lost Car Keys Gosport Today
            </h2>
            <p className="text-lg sm:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto px-2 sm:px-0">
              Whether you need lost car key replacement, spare keys, key fob programming, emergency lockout assistance,
              or ignition repair, Lost Car Keys Gosport is ready to help. Fast response, professional service,
              transparent pricing, and fully insured—your trusted local auto locksmith in Gosport, Hampshire.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8 sm:mb-10">
              <a
                href="tel:07309903243"
                className="bg-white text-orange-600 font-bold px-8 py-4 rounded-2xl hover:bg-gray-100 transition-colors text-lg sm:text-xl inline-flex items-center justify-center gap-2 w-full sm:w-auto"
                aria-label="Call Lost Car Keys Gosport now at 07309903243"
              >
                <Phone className="w-5 h-5" />
                Call Now: 07309903243
              </a>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-2xl hover:bg-white/10 transition-colors text-lg sm:text-xl inline-flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <span>Request Free Quote</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Why Choose Lost Car Keys Gosport?</h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                  <span className="text-sm sm:text-base">Fully Insured & Certified</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                  <span className="text-sm sm:text-base">No Call-Out Fee</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                  <span className="text-sm sm:text-base">Fast Response Times</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                  <span className="text-sm sm:text-base">24/7 Emergency Service</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                  <span className="text-sm sm:text-base">Transparent Pricing</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                  <span className="text-sm sm:text-base">Trusted Local Service</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
