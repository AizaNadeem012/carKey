import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Phone, Clock, CheckCircle, Key, Car, Wrench, Truck, Users } from "lucide-react"

export const revalidate = 86400

export const metadata: Metadata = {
  title: "Car Key Fob Programming Stockport | Remote Key & Smart Key Coding",
  description:
    "Professional car key fob programming and replacement in Stockport. We program remote key fobs, transponder keys, and smart keys for all makes and models. Mobile service available.",
  keywords: [
    "key fob programming Stockport",
    "car key fob replacement",
    "remote key programming",
    "smart key programming",
    "key fob cutting",
    "key fob repair",
    "transponder key programming",
    "car key coding",
    "mobile key programming",
    "key fob locksmith near me",
    "key fob replacement near me",
    "chip key programming",
    "new car key fob",
    "keyless entry car key replacement",
    "automotive key fob programming",
  ],
  alternates: {
    canonical: "https://carkeysinstockport.co.uk/services/key-fob-programming",
  },
}

export default function KeyFobProgrammingPage() {
  return (
    <main className="bg-slate-900 text-white pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary via-secondary to-primary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Car Key Fob Programming & Replacement</h1>
              <p className="text-xl text-gray-300 mb-8">
                Expert mobile service for car key fob programming, remote key replacement, and smart key coding across
                Stockport. We ensure your vehicle's security system is perfectly synced.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="tel:07309903243" className="btn-primary text-center" aria-label="Call key fob programming service">
                  <Phone className="w-5 h-5 inline mr-2" />
                  Call: 07309903243
                </a>
                <Link href="/contact" className="btn-secondary text-center" aria-label="Get free quote for key fob programming">
                  Get Free Quote
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="card">
                  <Key className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                  <div className="text-sm font-semibold">All Fob Types</div>
                </div>
                <div className="card">
                  <Car className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                  <div className="text-sm font-semibold">All Car Makes</div>
                </div>
                <div className="card">
                  <Wrench className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                  <div className="text-sm font-semibold">On-Site Service</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden">
                <Image
                  src="/remote-key-fobs.svg"
                  alt="Professional car key fob programming service in Stockport with advanced equipment"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Comprehensive Key Fob & Remote Programming</h2>

              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 text-lg mb-6">
                  Modern vehicles rely heavily on sophisticated key fobs and remote controls for security and
                  convenience. If your key fob is lost, damaged, or simply not working, our mobile locksmiths can
                  provide professional key fob programming and replacement services directly at your location in
                  Stockport.
                </p>

                <h3 className="text-2xl font-bold mb-4">What We Program & Replace</h3>
                <p className="text-gray-300 mb-4">Our expertise covers a wide range of automotive key technologies:</p>

                <ul className="space-y-2 mb-6">
                  {[
                    "Remote Key Fob Programming & Replacement",
                    "Transponder Key Programming (Chip Keys)",
                    "Smart Key Programming & Replacement (Keyless Entry)",
                    "Proximity Key Programming",
                    "Central Locking Remote Coding",
                    "Key Fob Battery Replacement & Repair",
                    "Duplicate Key Fob Creation",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-2xl font-bold mb-4">Why Choose Our Programming Service?</h3>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {[
                    {
                      title: "Advanced Equipment",
                      description:
                        "We use state-of-the-art diagnostic and programming tools to ensure accurate and secure coding for all vehicle makes.",
                      icon: <Wrench className="w-8 h-8 text-blue-400" />,
                    },
                    {
                      title: "Mobile Convenience",
                      description:
                        "Our fully equipped vans bring the programming service to you, whether you're at home, work, or stranded.",
                      icon: <Truck className="w-8 h-8 text-green-400" />,
                    },
                    {
                      title: "Expert Technicians",
                      description:
                        "Our certified auto locksmiths are highly trained in complex immobilizer and keyless entry systems.",
                      icon: <Users className="w-8 h-8 text-yellow-400" />,
                    },
                    {
                      title: "Fast & Efficient",
                      description:
                        "Most key fob programming can be completed within 15-30 minutes, getting you back on the road quickly.",
                      icon: <Clock className="w-8 h-8 text-orange-400" />,
                    },
                  ].map((item, index) => (
                    <div key={index} className="card flex items-start gap-4">
                      <div className="flex-shrink-0">{item.icon}</div>
                      <div>
                        <h4 className="font-bold mb-2">{item.title}</h4>
                        <p className="text-gray-300 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-bold mb-4">Makes We Program For</h3>
                <p className="text-gray-300 mb-4">
                  We provide key fob programming for all major vehicle manufacturers including:
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  {[
                    "Audi",
                    "BMW",
                    "Mercedes-Benz",
                    "Volkswagen",
                    "Ford",
                    "Vauxhall",
                    "Toyota",
                    "Honda",
                    "Nissan",
                    "Hyundai",
                    "Kia",
                    "Peugeot",
                    "Renault",
                    "Citroen",
                    "Fiat",
                    "SEAT",
                    "Skoda",
                    "Volvo",
                    "Land Rover",
                    "Jaguar",
                    "Porsche",
                    "Lexus",
                    "Mazda",
                    "Subaru",
                    "Mitsubishi",
                  ].map((make, index) => (
                    <div key={index} className="text-gray-300">
                      • {make}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Pricing */}
              <div className="card">
                <h3 className="text-xl font-bold mb-4">Pricing for Key Fob Programming</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Transponder Key Programming</span>
                    <span className="text-orange-400 font-bold">From £79</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Remote Key Fob Programming</span>
                    <span className="text-orange-400 font-bold">From £99</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Smart Key / Proximity Key</span>
                    <span className="text-orange-400 font-bold">From £149</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Key Fob Repair / Battery</span>
                    <span className="text-orange-400 font-bold">From £30</span>
                  </div>
                </div>
                <p className="text-sm text-gray-400 mt-4">
                  * Prices include programming and testing. New key fobs are extra.
                </p>
              </div>

              {/* Contact */}
              <div className="card bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                <h3 className="text-xl font-bold mb-4">Need a Key Fob Programmed Now?</h3>
                <p className="mb-4">Call our 24/7 emergency line for immediate assistance.</p>
                <a
                  href="tel:+447309903243"
                  className="bg-white text-black px-6 py-3 rounded-xl font-bold block text-center hover:bg-gray-100 transition-colors"
                >
                  07309903243
                </a>
              </div>

              {/* Service Areas */}
              <div className="card">
                <h3 className="text-xl font-bold mb-4">Service Areas</h3>
                <div className="space-y-1 text-sm">
                  {["Stockport", "Cheadle", "Bramhall", "Hazel Grove", "Marple", "Romiley", "Bredbury", "Woodley"].map(
                    (area, index) => (
                      <div key={index} className="text-gray-300">
                        • {area}
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-slate-800">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Key Fob Programming FAQs</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "How long does key fob programming take?",
                answer: "Most key fob programming takes 15-30 minutes. Complex smart keys might take up to 45 minutes.",
              },
              {
                question: "Do I need the original key fob to program a new one?",
                answer:
                  "No, we can program new key fobs even if you've lost all your originals, using specialized equipment.",
              },
              {
                question: "Can you program key fobs for all car makes and models?",
                answer:
                  "Yes, we have the latest software and equipment to program key fobs for nearly all major car manufacturers.",
              },
              {
                question: "What if my key fob is broken, can it be repaired?",
                answer:
                  "Often, yes! We can repair common issues like broken buttons, worn casings, or replace dead batteries, saving you money on a full replacement.",
              },
              {
                question: "Is key fob programming safe for my car's electronics?",
                answer:
                  "Absolutely. Our technicians are highly trained and use manufacturer-approved procedures to ensure no damage to your vehicle's immobilizer or ECU.",
              },
              {
                question: "Do you offer mobile key fob programming?",
                answer:
                  "Yes, our service is fully mobile. We come to your location anywhere in Stockport and surrounding areas to program your key fob on-site.",
              },
            ].map((faq, index) => (
              <div key={index} className="card">
                <h3 className="font-bold mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-blue-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Need Your Car Key Fob Programmed?</h2>
          <p className="text-xl text-primary/80 mb-8 max-w-2xl mx-auto">
            Don't let a faulty key fob disrupt your day. Our mobile locksmiths are ready to help 24/7. Fast response,
            professional service, competitive prices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+447309903243"
              className="bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-primary/90 transition-colors"
            >
              <Phone className="w-5 h-5 inline mr-2" />
              Call: 07309903243
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

    </main>
  )
}
