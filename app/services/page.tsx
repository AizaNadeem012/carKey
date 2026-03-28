import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock, Shield, CheckCircle, Star, Award, Zap, PenTool, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Car Locksmith Services Stockport | Auto Locksmith Near Me | Professional Mobile Service",
  description:
    "Professional car locksmith services in Stockport - auto locksmith near me, mobile locksmith, car key replacement near me. 24/7 emergency service.",
  alternates: {
    canonical: "https://carkeysinstockport.co.uk/services",
  },
}

export default function ServicesPage() {
  const services = [
    {
      title: "Car Key Replacement",
      slug: "car-key-replacement",
      description: "Lost, stolen or broken car keys? We provide fast replacement keys for all makes and models.",
      features: ["All car makes & models", "Cut & programmed on-site", "Transponder keys", "Remote key fobs"],
      price: "From £89",
      image: "/real-car-keys.jpg",
      popular: true,
    },
    {
      title: "Auto Key Programming",
      slug: "auto-keys-programming",
      description: "Professional transponder key programming and remote key fob coding for modern vehicles.",
      features: ["Transponder programming", "Remote fob coding", "Immobilizer bypass", "ECU programming"],
      price: "From £79",
      image: "/real-locksmith-service.jpg",
    },
    {
      title: "Key Fob Programming",
      slug: "key-fob-programming",
      description: "Expert programming for all types of remote key fobs, transponder keys, and smart keys.",
      features: ["Remote fob coding", "Smart key programming", "Transponder chip sync", "Key fob repair"],
      price: "From £79",
      image: "/real-car-keys.jpg",
    },
    {
      title: "Lockout Assistance",
      slug: "lockout-assistance",
      description: "Locked out of your car? Fast, damage-free entry service available 24/7 across Stockport.",
      features: ["Damage-free entry", "All vehicle types", "24/7 availability", "Insurance approved"],
      price: "From £59",
      image: "/real-mobile-locksmith.jpg",
      emergency: true,
    },
    {
      title: "Ignition Repair",
      slug: "ignition-repair",
      description: "Ignition switch problems? We repair and replace faulty ignition systems and worn keys.",
      features: ["Ignition switch repair", "Key extraction", "Cylinder replacement", "Steering lock repair"],
      price: "From £99",
      image: "/real-locksmith-service.jpg",
    },
    {
      title: "Remote Key Fobs",
      slug: "remote-key-fobs",
      description: "Replacement and programming of remote key fobs and central locking systems.",
      features: ["Remote fob replacement", "Central locking repair", "Button repair", "Range optimization"],
      price: "From £69",
      image: "/real-car-keys.jpg",
    },
    {
      title: "Emergency Service",
      slug: "emergency-service",
      description: "24/7 emergency automotive locksmith service for urgent car key problems.",
      features: ["24/7 availability", "30min response", "All emergencies", "No call-out fee"],
      price: "From £79",
      image: "/real-mobile-locksmith.jpg",
      emergency: true,
    },
  ]

  return (
    <main className="bg-slate-900 text-white pt-20">
      {/* Header / Hero */}
      <section className="section-padding pt-20 sm:pt-24 md:pt-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
            {/* Left: Content */}
            <div>
              <div className="flex items-center gap-2 text-orange-400 mb-3 sm:mb-4">
                <Zap className="w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0" />
                <span className="font-semibold text-sm sm:text-base">24/7 Mobile Car Locksmith</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                Car Locksmith & Auto Locksmith in <span className="text-orange-400">Stockport</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                Fast, professional help for{" "}
                <Link href="/services/car-key-replacement" className="text-orange-400 hover:text-orange-300 underline">
                  car key replacement
                </Link>
                ,{" "}
                <Link href="/services/key-fob-programming" className="text-orange-400 hover:text-orange-300 underline">
                  key fob programming
                </Link>
                , and{" "}
                <Link href="/services/lockout-assistance" className="text-orange-400 hover:text-orange-300 underline">
                  vehicle lockout assistance
                </Link>
                . Average
                <span className="text-orange-400"> 30-minute response</span>. Your trusted "car locksmith near me" across
                <Link href="/areas/stockport" className="text-orange-400 hover:text-orange-300 underline">
                  Stockport
                </Link>{" "}
                and{" "}
                <Link href="/areas/manchester" className="text-orange-400 hover:text-orange-300 underline">
                  Greater Manchester
                </Link>
                .
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
                <a href="tel:+447309903243" className="btn-primary text-center w-full sm:w-auto">
                  <Phone className="w-4 sm:w-5 h-4 sm:h-5 inline mr-2 flex-shrink-0" /> Call Now: 07309903243</a>
                <Link href="/contact" className="btn-secondary text-center w-full sm:w-auto">
                  Get Free Quote <ArrowRight className="w-4 h-4 inline ml-2" />
                </Link>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3">
                <div className="flex items-center gap-2 bg-slate-800/60 p-2 sm:p-3 rounded-lg border border-slate-700 text-xs sm:text-sm">
              <Clock className="w-4 sm:w-5 h-4 sm:h-5 text-orange-400 flex-shrink-0" />
                  <span>30min Response</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-800/60 p-2 sm:p-3 rounded-lg border border-slate-700 text-xs sm:text-sm">
                  <Shield className="w-4 sm:w-5 h-4 sm:h-5 text-green-400 flex-shrink-0" />
                  <span>Fully Insured</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-800/60 p-2 sm:p-3 rounded-lg border border-slate-700 text-xs sm:text-sm">
                  <CheckCircle className="w-4 sm:w-5 h-4 sm:h-5 text-blue-400 flex-shrink-0" />
                  <span>Fixed Pricing</span>
                </div>
              </div>
            </div>

            {/* Right: Visual with Remote Key Fobs */}
            <div className="relative">
              <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden border-2 border-orange-400/30">
                <Image
                  src="/real-car-keys.jpg"
                  alt="Remote key fobs and car locksmith services in Stockport - auto locksmith near me"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating rating badge */}
              <div className="absolute -bottom-5 -left-5 bg-slate-800 p-3 sm:p-4 rounded-xl border border-slate-700 shadow-lg" aria-label="5-star rated local locksmith service">
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 sm:w-4 h-3 sm:h-4 text-yellow-400 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <div className="text-xs text-gray-300 mt-2">5-Star Rated Local Service</div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="section-padding bg-slate-800">
        <div className="container-custom">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Car Locksmith Service Categories</h2>
            <p className="text-sm sm:text-base text-gray-300 px-2 sm:px-0">Choose the auto locksmith service category that matches your needs for quick assistance. Professional car locksmith near me.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mb-8 sm:mb-12">
            {[
              {
                icon: <Zap className="w-6 sm:w-8 h-6 sm:h-8 text-red-400" />,
                title: "Emergency",
                description: "Urgent lockout & key issues",
                count: "2 services",
              },
              {
                icon: <PenTool className="w-6 sm:w-8 h-6 sm:h-8 text-blue-400" />,
                title: "Replacement",
                description: "New keys & programming",
                count: "3 services",
              },
              {
                icon: <Award className="w-6 sm:w-8 h-6 sm:h-8 text-green-400" />,
                title: "Repair",
                description: "Fix existing systems",
                count: "2 services",
              },
              {
                icon: <Star className="w-6 sm:w-8 h-6 sm:h-8 text-yellow-400" />,
                title: "Premium",
                description: "High-end vehicle services",
                count: "All services",
              },
            ].map((category, index) => (
              <div key={index} className="card text-center hover:scale-105 transition-transform duration-300 p-3 sm:p-6">
                <div className="flex justify-center mb-3 sm:mb-4">{category.icon}</div>
                <h3 className="font-bold mb-2 text-sm sm:text-base">{category.title}</h3>
                <p className="text-gray-300 text-xs sm:text-sm mb-2">{category.description}</p>
                <p className="text-orange-400 text-xs">{category.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`card bg-slate-700 border-slate-600 hover:bg-slate-800 transition-all duration-300 group relative ${
                  service.popular ? "ring-2 ring-orange-400" : ""
                } ${service.emergency ? "ring-2 ring-red-400" : ""}`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-6 bg-orange-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                    MOST POPULAR
                  </div>
                )}
                {service.emergency && (
                  <div className="absolute -top-3 left-6 bg-red-400 text-white px-3 py-1 rounded-full text-xs font-bold">
                    EMERGENCY
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative h-48 md:h-full rounded-xl overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <h2 className="text-xl font-bold">{service.title}</h2>
                      <span className="text-orange-400 font-bold">{service.price}</span>
                    </div>

                    <p className="text-orange-400/80 mb-4">{service.description}</p>

                    <ul className="space-y-1 mb-6">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-orange-400" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={`/services/${service.slug}`}
                      className="text-orange-400 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all"
                    >
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="section-padding bg-slate-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Car Locksmith Service Pricing Comparison</h2>
            <p className="text-gray-300">Transparent auto locksmith pricing with no hidden fees, ensuring you get the best value. Professional car locksmith near me.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-slate-700 rounded-2xl overflow-hidden">
              <thead className="bg-slate-600">
                <tr>
                  <th className="px-6 py-4 text-left text-white">Service</th>
                  <th className="px-6 py-4 text-center text-white">Basic</th>
                  <th className="px-6 py-4 text-center text-white">Standard</th>
                  <th className="px-6 py-4 text-center text-white">Premium</th>
                  <th className="px-6 py-4 text-center text-white">Response Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-600">
                <tr>
                  <td className="px-6 py-4 font-semibold text-gray-300">Key Replacement</td>
                  <td className="px-6 py-4 text-center text-orange-400">£89</td>
                  <td className="px-6 py-4 text-center text-orange-400">£129</td>
                  <td className="px-6 py-4 text-center text-orange-400">£199</td>
                  <td className="px-6 py-4 text-center text-gray-300">30 mins</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-gray-300">Key Programming</td>
                  <td className="px-6 py-4 text-center text-orange-400">£79</td>
                  <td className="px-6 py-4 text-center text-orange-400">£99</td>
                  <td className="px-6 py-4 text-center text-orange-400">£149</td>
                  <td className="px-6 py-4 text-center text-gray-300">30 mins</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-gray-300">Lockout Service</td>
                  <td className="px-6 py-4 text-center text-orange-400">£59</td>
                  <td className="px-6 py-4 text-center text-orange-400">£79</td>
                  <td className="px-6 py-4 text-center text-orange-400">£99</td>
                  <td className="px-6 py-4 text-center text-gray-300">15 mins</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-gray-300">Ignition Repair</td>
                  <td className="px-6 py-4 text-center text-orange-400">£99</td>
                  <td className="px-6 py-4 text-center text-orange-400">£149</td>
                  <td className="px-6 py-4 text-center text-orange-400">£249</td>
                  <td className="px-6 py-4 text-center text-gray-300">45 mins</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-400 text-sm">
              * Prices include all parts, programming, and testing. No call-out fees or hidden charges. Contact us for a
              precise quote.
            </p>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Car Locksmith Service Process</h2>
            <p className="text-gray-300">A streamlined, professional auto locksmith workflow ensuring quality results every time. Professional car locksmith near me.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              {
                step: "1",
                title: "Call/Book",
                description: "Contact us via phone, online, or WhatsApp for immediate assistance.",
              },
              {
                step: "2",
                title: "Quote",
                description: "Receive an instant, transparent price quote with no hidden fees.",
              },
              {
                step: "3",
                title: "Dispatch",
                description: "Our certified technician is promptly dispatched to your location.",
              },
              {
                step: "4",
                title: "Service",
                description: "Professional service completed efficiently on-site using advanced tools.",
              },
              {
                step: "5",
                title: "Payment",
                description: "Pay only after successful completion and your complete satisfaction.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center card p-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Guarantee */}
      <section className="section-padding bg-slate-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Car Locksmith Service Guarantees</h2>
            <p className="text-gray-300">Your peace of mind is our priority. We stand by the quality of our auto locksmith work. Professional car locksmith near me.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Award className="w-8 h-8 text-yellow-400" />,
                title: "12 Month Warranty",
                description: "All work guaranteed for 12 months for your assurance.",
              },
              {
                icon: <Shield className="w-8 h-8 text-green-400" />,
                title: "Damage Protection",
                description: "£2M insurance covers any potential damage during service.",
              },
              {
                icon: <Clock className="w-8 h-8 text-blue-400" />,
                title: "Time Guarantee",
                description: "We promise to be on time or offer a discount.",
              },
              {
                icon: <CheckCircle className="w-8 h-8 text-orange-400" />,
                title: "Satisfaction Promise",
                description: "100% satisfaction or we'll make it right, guaranteed.",
              },
            ].map((guarantee, index) => (
              <div key={index} className="card text-center hover:scale-105 transition-transform duration-300">
                <div className="flex justify-center mb-4">{guarantee.icon}</div>
                <h3 className="font-bold mb-2">{guarantee.title}</h3>
                <p className="text-gray-300 text-sm">{guarantee.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Showcase */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Professional Car Locksmith Equipment</h2>
              <p className="text-gray-300 mb-8">
                We invest in the latest automotive locksmith technology to provide fast, accurate service for all
                vehicle types, ensuring precision and reliability. Professional auto locksmith equipment.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Laser Key Cutting",
                    description:
                      "Precision cutting for high-security keys, including sidewinder, dimple, and Tibbe keys.",
                    features: ["Sidewinder keys", "Dimple keys", "Tibbe keys"],
                  },
                  {
                    title: "Programming Tools",
                    description:
                      "Latest diagnostic equipment for OBD programming, EEPROM reading, and immobilizer bypass.",
                    features: ["OBD programming", "EEPROM reading", "Immobilizer bypass"],
                  },
                  {
                    title: "Mobile Workshop",
                    description:
                      "Fully equipped service van with power supply, extensive key blanks, and testing equipment for on-site solutions.",
                    features: ["Power supply", "Key blanks", "Testing equipment"],
                  },
                ].map((equipment, index) => (
                  <div key={index} className="card">
                    <h3 className="font-bold mb-2">{equipment.title}</h3>
                    <p className="text-gray-300 mb-3">{equipment.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {equipment.features.map((feature, i) => (
                        <span key={i} className="bg-slate-600 px-2 py-1 rounded text-xs">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                  src="/real-locksmith-service.jpg"
                  alt="Professional car locksmith equipment and tools - auto locksmith near me"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-blue-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need Help With Your Car Keys?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Our mobile locksmiths are ready to help 24/7. Call now for immediate assistance or get a free quote. We're
            here to get you back on the road!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:07309903243 "
              className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-100 transition-colors"
            >
              Call: 07309903243
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: services.map((service, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "Service",
                name: service.title,
                description: service.description,
                provider: {
                  "@type": "AutomotiveBusiness",
                  name: "Car Keys Stockport",
                },
                areaServed: {
                  "@type": "City",
                  name: "Stockport",
                },
              },
            })),
          }),
        }}
      />
    </main>
  )
}
