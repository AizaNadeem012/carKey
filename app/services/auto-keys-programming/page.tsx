// app/services/auto-keys-programming/page.tsx

import type { Metadata } from "next"

export const revalidate = 86400
import Image from "next/image"
import Link from "next/link"
import { Phone, Clock, Shield, CheckCircle, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Auto Keys Programming Stockport | Fast Mobile Service",
  description:
    "Professional auto keys programming service in Stockport. Program car keys, transponders, and remotes on-site. 30min response, fully insured. Call +44 07309903243",
  alternates: {
    canonical: "https://carkeysinstockport.co.uk/services/auto-keys-programming",
  },
}

export default function AutoKeysProgrammingPage() {
  return (
    <main className="bg-slate-900 text-white pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary via-secondary to-primary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Auto Keys Programming in Stockport</h1>
              <p className="text-xl text-gray-300 mb-8">
                Need to program your car keys or transponder? Our mobile technicians provide fast and professional auto
                key programming services across Stockport. On-site programming from £89.
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

              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="card">
                  <Clock className="w-6 h-6 text-orange-400 mx-auto mb-2" aria-hidden="true" />
                  <div className="text-sm font-semibold">30min Response</div>
                </div>
                <div className="card">
                  <Shield className="w-6 h-6 text-orange-400 mx-auto mb-2" aria-hidden="true" />
                  <div className="text-sm font-semibold">Fully Insured</div>
                </div>
                <div className="card">
                  <CheckCircle className="w-6 h-6 text-orange-400 mx-auto mb-2" aria-hidden="true" />
                  <div className="text-sm font-semibold">Fixed Pricing</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden">
                <Image
                  src="/auto-keys-programming.svg"
                  alt="Professional auto keys programming service in Stockport with advanced diagnostic equipment"
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
              <h2 className="text-3xl font-bold mb-6">Professional Auto Keys Programming Service</h2>

              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 text-lg mb-6">
                  Auto key programming is essential when replacing keys, transponders, or remote fobs. Our technicians
                  provide on-site programming for all major car makes and models, ensuring your keys work perfectly.
                </p>

                <h3 className="text-2xl font-bold mb-4">What We Offer</h3>
                <ul className="space-y-2 mb-6">
                  {[
                    "Program transponder keys on-site",
                    "Remote key fob programming",
                    "ECU and immobilizer synchronization",
                    "Duplicate key programming",
                    "Emergency key programming service",
                    "Insurance-approved documentation included",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-2xl font-bold mb-4">Makes We Cover</h3>
                <p className="text-gray-300 mb-4">
                  We program auto keys for all major manufacturers, including:
                </p>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  {[
                    "Audi","BMW","Mercedes-Benz","Volkswagen","Ford","Vauxhall","Toyota",
                    "Honda","Nissan","Hyundai","Kia","Peugeot","Renault","Citroen","Fiat"
                  ].map((make, index) => (
                    <div key={index} className="text-gray-300">• {make}</div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Pricing */}
              <div className="card">
                <h3 className="text-xl font-bold mb-4">Pricing</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Basic Auto Key Programming</span>
                    <span className="text-orange-400 font-bold">From £89</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Transponder Key</span>
                    <span className="text-orange-400 font-bold">From £129</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Remote Key Fob</span>
                    <span className="text-orange-400 font-bold">From £149</span>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="card bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                <h3 className="text-xl font-bold mb-4">Need Help Now?</h3>
                <p className="mb-4">Call our 24/7 emergency line for immediate assistance.</p>
                <a
                  href="tel:+447309903243"
                  className="bg-white text-black px-6 py-3 rounded-xl font-bold block text-center hover:bg-gray-100 transition-colors"
                >
                  07309 903243
                </a>
              </div>

              {/* Service Areas */}
              <div className="card">
                <h3 className="text-xl font-bold mb-4">Service Areas</h3>
                <div className="space-y-1 text-sm">
                  {["Stockport", "Cheadle", "Bramhall", "Hazel Grove", "Marple"].map((area, index) => (
                    <div key={index} className="text-gray-300">• {area}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-slate-800">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "How long does auto key programming take?",
                answer: "Most auto key programming takes 20-45 minutes depending on the car model and key type.",
              },
              {
                question: "Do you need the original key?",
                answer: "No, we can program new keys using your vehicle's VIN and proper identification.",
              },
              {
                question: "Which car makes can you program?",
                answer: "We cover all major car manufacturers including Audi, BMW, Mercedes, Volkswagen, Ford, and more.",
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
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Need Auto Key Programming Now?</h2>
          <p className="text-xl text-primary/80 mb-8 max-w-2xl mx-auto">
            Our mobile technicians are ready 24/7 to program your car keys quickly and professionally.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:07309903243"
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
