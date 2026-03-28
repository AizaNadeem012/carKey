import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Phone, MapPin, Clock, Star } from "lucide-react"

export const revalidate = 86400

export const metadata: Metadata = {
  title: "Auto Locksmith Stockport | Local Car Key & Lockout Service | 25-Min Response",
  description:
    "Auto locksmith services in Stockport, UK. Local car key replacement, emergency lockout, key fob programming. Available 24/7. Fast 25-minute response. Fully insured. Call 07309903243",
  keywords: "locksmith Stockport, auto locksmith near me, car locksmith Stockport, emergency locksmith",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Auto Locksmith Stockport | Local Car Key & Lockout Service",
    description: "Fast auto locksmith services in Stockport. Car key replacement, emergency lockout, key fob programming. 24/7 service. Call 07309903243",
    url: "https://carkeysinstockport.co.uk/areas/stockport",
    type: "website",
  },
  alternates: {
    canonical: "https://carkeysinstockport.co.uk/areas/stockport",
  },
}

const subLocations = [
  { name: "Manchester", slug: "manchester" },
  { name: "Bury", slug: "bury" },
  { name: "Oldham", slug: "oldham" },
  { name: "Rochdale", slug: "rochdale" },
  { name: "Tameside", slug: "tameside" },
  { name: "Trafford", slug: "trafford" },
  { name: "Salford", slug: "salford" },
]

export default function StockportAreaPage() {
  return (
    <main className="bg-slate-900 text-white pt-20">
      {/* Hero Section */}
      <section className="section-padding pt-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-orange-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <article className="animate-fade-in">
              <div className="flex items-center gap-2 text-orange-400 mb-4">
                <MapPin className="w-5 h-5 text-orange-400" aria-hidden="true" />
                <span className="font-semibold">Serving All Stockport Areas 24/7</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Auto Locksmith in{" "}
                <span className="text-transparent bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text">
                  Stockport
                </span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Your trusted local auto locksmith for car key replacement, emergency lockout assistance, and key fob programming. Available 24/7 across Stockport with 25-minute average response time. Fully insured and transparent pricing.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="tel:07309903243" className="btn-primary text-center">
                  <Phone className="w-5 h-5 inline mr-2" />
                  Call: 07309903243
                </a>
                <Link href="/contact" className="btn-secondary text-center">
                  Get Free Quote
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-6 text-sm">
                <div className="flex items-center gap-2 bg-slate-800/50 p-3 rounded-lg">
                  <Clock className="w-5 h-5 text-orange-400" aria-hidden="true" />
                  <span>Average 25min response in Stockport</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-800/50 p-3 rounded-lg">
                  <Star className="w-5 h-5 text-yellow-400" aria-hidden="true" />
                  <span>5★ rated local service</span>
                </div>
              </div>
            </article>

            <div className="relative animate-slide-up">
              <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden border-2 border-gradient-to-r from-orange-400 to-red-400 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-red-400/20"></div>
                <Image
                  src="/car-locksmith-service.svg"
                  alt="Car locksmith service in Stockport - auto locksmith near me"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 hidden md:block bg-slate-800 p-4 rounded-xl border border-orange-400/30 shadow-lg">
                <div className="text-2xl font-bold text-orange-400">2,500+</div>
                <div className="text-sm text-gray-300">Keys Replaced</div>
              </div>

              <div className="absolute -top-6 -right-6 hidden md:block bg-slate-800 p-4 rounded-xl border border-blue-400/30 shadow-lg">
                <div className="text-2xl font-bold text-blue-400">25min</div>
                <div className="text-sm text-gray-300">Avg Response</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Covered */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Areas We Cover in Stockport</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                area: "Stockport Town Centre",
                postcode: "SK1",
                description: "Central Stockport including the market area, train station and shopping districts.",
              },
              {
                area: "Cheadle",
                postcode: "SK8",
                description: "Cheadle Village, Cheadle Hulme and surrounding residential areas.",
              },
              {
                area: "Bramhall",
                postcode: "SK7",
                description: "Bramhall Village, Bramhall Park and the surrounding suburban areas.",
              },
              {
                area: "Hazel Grove",
                postcode: "SK7",
                description: "Hazel Grove centre and the residential areas towards Poynton.",
              },
              {
                area: "Marple",
                postcode: "SK6",
                description: "Marple Bridge, Marple centre and the canal-side areas.",
              },
              {
                area: "Romiley",
                postcode: "SK6",
                description: "Romiley village and the surrounding residential developments.",
              },
              {
                area: "Bredbury",
                postcode: "SK6",
                description: "Bredbury centre and the industrial areas towards Woodley.",
              },
              {
                area: "Woodley",
                postcode: "SK6",
                description: "Woodley centre and the residential areas towards Hyde.",
              },
              {
                area: "Offerton",
                postcode: "SK1",
                description: "Offerton estate and surrounding residential areas.",
              },
            ].map((location, index) => (
              <div key={index} className="card">
                <h3 className="font-bold text-lg mb-2">{location.area}</h3>
                <div className="text-orange-400 font-semibold mb-2">{location.postcode}</div>
                <p className="text-gray-300 text-sm">{location.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-300 mb-4">
              Don't see your area listed? We cover all of Greater Manchester.
              <br />
              Call us to check if we serve your location.
            </p>
            <a href="tel:+447309903243" className="btn-primary">
              Check Coverage Area
            </a>
          </div>
        </div>
      </section>

      {/* Greater Manchester Service Areas */}
      <section className="section-padding bg-slate-800">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Greater Manchester Service Areas</h2>
          <p className="text-gray-300 text-center mb-8 max-w-3xl mx-auto">
            In addition to Stockport, we provide professional auto locksmith services throughout Greater Manchester. Click below to view detailed information for each area.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {subLocations.map((location) => (
              <Link
                key={location.slug}
                href={`/areas/stockport/${location.slug}`}
                className="group card hover:border-orange-400 hover:bg-slate-700/80 transition-all"
              >
                <h3 className="text-xl font-bold mb-3 text-orange-400 group-hover:text-orange-300 transition-colors">
                  {location.name}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Auto locksmith services available 24/7 with 25-minute response time.
                </p>
                <span className="text-orange-400 text-sm font-semibold group-hover:translate-x-1 transition-transform inline-block">
                  View Details →
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-300 mb-4">
              Serving all of Greater Manchester and surrounding areas
            </p>
          </div>
        </div>
      </section>

      {/* Vehicle Compatibility */}
      <section className="section-padding bg-slate-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Vehicle Compatibility</h2>
            <p className="text-gray-300">We provide key services for a wide range of vehicle types and models.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "Cars (Sedans, Hatchbacks, SUVs)",
              "Vans & Light Commercial Vehicles",
              "Motorcycles",
              "Classic Cars",
              "Electric Vehicles",
              "Hybrid Vehicles",
              "Luxury Cars",
              "Sports Cars",
            ].map((type, index) => (
              <div key={index} className="card text-center">
                <h3 className="font-semibold text-lg text-orange-400 mb-2">{type}</h3>
                <p className="text-gray-300 text-sm">Full key services available</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Information */}
      <section className="section-padding bg-slate-800">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <article>
              <h2 className="text-3xl font-bold mb-6">Why Choose Our Stockport Service?</h2>

              <div className="space-y-6">
                <section>
                  <h3 className="text-xl font-bold mb-3">Local Knowledge</h3>
                  <p className="text-gray-300">
                    As a local Stockport business, we know the area inside out. We can find you quickly, whether you're
                    stuck in the town centre car parks, at the train station, or in any of the residential areas. Our
                    local expertise ensures faster response times.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-3">Fast Response Times</h3>
                  <p className="text-gray-300">
                    Our average response time in Stockport is just 25 minutes. We're strategically located to serve all
                    areas quickly, from Bramhall in the south to Romiley in the east, minimizing your waiting time.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-3">Competitive Local Pricing</h3>
                  <p className="text-gray-300">
                    We offer competitive rates specifically for Stockport customers, with no hidden charges or inflated
                    call-out fees. What we quote is what you pay, ensuring transparency and affordability.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-3">Community Focused</h3>
                  <p className="text-gray-300">
                    We're proud to serve the Stockport community and have built our reputation on reliable, honest
                    service. Check our Google reviews to see what your neighbors say about our commitment to local
                    service.
                  </p>
                </section>
              </div>
            </article>

            <div className="space-y-6">
              <div className="card">
                <h3 className="text-xl font-bold mb-4">Service Statistics</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Average Response Time</span>
                    <span className="text-orange-400 font-bold">25 minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Customer Satisfaction</span>
                    <span className="text-orange-400 font-bold">98%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Jobs Completed</span>
                    <span className="text-orange-400 font-bold">2,500+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Years Serving Stockport</span>
                    <span className="text-orange-400 font-bold">8+</span>
                  </div>
                </div>
              </div>

              <div className="card bg-gradient-to-r from-red-500 to-pink-500 text-white">
                <h3 className="text-xl font-bold mb-4">Emergency Service</h3>
                <p className="mb-4">
                  Locked out in Stockport? Need emergency car key replacement? We're available 24/7 for urgent
                  situations, ensuring you're never stranded.
                </p>
                <a
                  href="tel:+447309903243"
                  className="bg-white text-orange-400 px-6 py-3 rounded-xl font-bold block text-center hover:bg-gray-100 transition-colors"
                >
                  Emergency: 07309 903243
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Testimonials */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">What Stockport Customers Say</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Jennifer Adams",
                area: "Bramhall",
                rating: 5,
                text: "Brilliant local service! Lost my keys at Bramhall Park and they were there in 20 minutes. Professional and reasonably priced.",
              },
              {
                name: "Robert Taylor",
                area: "Stockport Centre",
                rating: 5,
                text: "Locked out near the train station during rush hour. These guys saved my day - quick, efficient and friendly service.",
              },
              {
                name: "Lisa Morgan",
                area: "Cheadle Hulme",
                rating: 5,
                text: "Needed a replacement key for my Audi. Came to my house in Cheadle, cut and programmed the key perfectly. Highly recommend!",
              },
            ].map((review, index) => (
              <article key={index} className="card">
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-orange-400 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{review.text}"</p>
                <div>
                  <div className="font-semibold">{review.name}</div>
                  <div className="text-sm text-gray-400">{review.area}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-blue-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-400 mb-4">Need Car Key Help in Stockport?</h2>
          <p className="text-xl text-primary/80 mb-8 max-w-2xl mx-auto">
            Local mobile locksmith ready to help anywhere in Stockport. Fast response, competitive prices, professional
            service. Don't hesitate to call us!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+447309903243"
              className="bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-primary/90 transition-colors"
            >
              <Phone className="w-5 h-5 inline mr-2" />
              Call: 07309 903243
            </a>
            <Link
              href="/contact"
              className="border-2 border-primary text-primary px-8 py-4 rounded-2xl font-bold text-lg hover:bg-primary hover:text-white transition-colors"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Local Business Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Car Keys Stockport",
            description: "Professional car key replacement service in Stockport, Greater Manchester",
            url: "https://carkeysinstockport.co.uk/areas/stockport",
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
              latitude: "53.4106",
              longitude: "-2.1575",
            },
            openingHours: "Mo-Su 00:00-23:59",
            priceRange: "££",
            areaServed: [
              {
                "@type": "City",
                name: "Stockport",
              },
              {
                "@type": "City",
                name: "Cheadle",
              },
              {
                "@type": "City",
                name: "Bramhall",
              },
            ],
          }),
        }}
      />
    </main>
  )
}
