import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Phone, Clock, Shield, CheckCircle, MapPin, AlertCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Van Lockout Assistance Stockport | Emergency Mobile Service 24/7 | From £69",
  description:
    "Van locked out? Emergency van lockout assistance in Stockport, 24/7. Fast damage-free entry for all van types. 25-minute response. Fully insured. Call 07309903243",
  keywords: "van lockout, locked out of van, van locksmith Stockport, emergency van service",
  alternates: {
    canonical: "https://carkeysinstockport.co.uk/services/van-lockout",
  },
}

export default function VanLockoutPage() {
  return (
    <main className="bg-slate-900 text-white pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 text-orange-400 mb-4">
                <AlertCircle className="w-5 h-5" />
                <span className="font-semibold">Emergency Van Lockout Service</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Van Lockout Assistance in Stockport</h1>
              <p className="text-xl text-gray-300 mb-8">
                Locked out of your van? We specialize in fast, professional van lockout assistance for all commercial and personal vehicles. Damage-free entry guaranteed. Available 24/7 across Stockport.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="tel:07309903243" className="btn-primary text-center">
                  <Phone className="w-5 h-5 inline mr-2" />
                  Call Now: 07309903243
                </a>
                <Link href="/contact" className="btn-secondary text-center">
                  Request Help
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="card">
                  <Clock className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                  <div className="text-sm font-semibold">25 Min Response</div>
                </div>
                <div className="card">
                  <Shield className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                  <div className="text-sm font-semibold">Damage-Free</div>
                </div>
                <div className="card">
                  <CheckCircle className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                  <div className="text-sm font-semibold">From £69</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden border-2 border-orange-400/30">
                <Image
                  src="/images/van-lockout.jpg"
                  alt="Professional emergency van lockout service in Stockport with fast response"
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
      <section className="section-padding bg-slate-800">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Professional Van Lockout Solutions</h2>

              <div className="space-y-6">
                <p className="text-gray-300 text-lg">
                  Being locked out of your van can disrupt your business and personal life. Whether you're a tradesperson with tools inside or simply locked out unexpectedly, our expert van locksmith service in Stockport is ready to help 24/7.
                </p>

                <h3 className="text-2xl font-bold">Van Lockout Services We Provide:</h3>
                <ul className="space-y-3">
                  {[
                    "Emergency van lockout entry for all van types",
                    "Commercial vehicle access assistance",
                    "Damage-free, non-destructive techniques",
                    "24/7 availability including weekends",
                    "Fully insured and certified technicians",
                    "Average response time of 25 minutes",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-2xl font-bold mt-8">Why Our Van Lockout Service is Different</h3>
                <p className="text-gray-300 mb-4">
                  We understand that your van may contain expensive tools or important cargo. Our technicians use specialized equipment and techniques to access your van quickly without causing damage. We work with all van manufacturers including Ford Transit, Mercedes Sprinter, Volkswagen Transporter, and more.
                </p>

                <h3 className="text-2xl font-bold mt-8">Van Types We Service:</h3>
                <div className="grid grid-cols-2 gap-3">
                  {["Panel Vans", "Box Vans", "Minibuses", "Pickup Trucks", "Camper Vans", "Refrigerated Vans"].map((type) => (
                    <div key={type} className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-orange-400" />
                      {type}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-4">Quick Facts</h3>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex justify-between">
                    <span>Service Cost:</span>
                    <span className="text-orange-400 font-bold">From £69</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Response Time:</span>
                    <span className="text-orange-400 font-bold">25 min avg</span>
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
                <h3 className="text-xl font-bold mb-4 text-orange-400">Van Locked?</h3>
                <p className="text-gray-300 mb-4">Get help immediately. We arrive fast.</p>
                <a href="tel:07309903243" className="btn-primary w-full text-center">
                  <Phone className="w-4 h-4 inline mr-2" />
                  07309903243
                </a>
              </div>

              <div className="card p-6">
                <h3 className="text-xl font-bold mb-4">Related Services</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Car Lockout", href: "/services/lockout-assistance" },
                    { name: "Key Replacement", href: "/services/car-key-replacement" },
                    { name: "Emergency Service", href: "/services/emergency-service" },
                  ].map((service) => (
                    <li key={service.name}>
                      <Link href={service.href} className="text-orange-400 hover:text-orange-300">
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
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                q: "Do you service all van types?",
                a: "Yes, we handle all van manufacturers including Ford, Mercedes, VW, and more.",
              },
              {
                q: "Will you damage my van getting in?",
                a: "No. We use professional, damage-free techniques to open your van safely.",
              },
              {
                q: "What if my tools are locked inside?",
                a: "We get you access quickly so you can retrieve your tools and get back to work.",
              },
              {
                q: "Are you available at weekends?",
                a: "Yes, 24/7 including evenings, weekends, and bank holidays.",
              },
            ].map((item, index) => (
              <div key={index} className="card p-6">
                <h3 className="font-bold text-orange-400 mb-2">{item.q}</h3>
                <p className="text-gray-300 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-orange-600 to-orange-700">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">Van Locked Out in Stockport?</h2>
          <p className="text-xl text-orange-50 mb-8 max-w-2xl mx-auto">
            Don't let a lockout cost you business time. Call us for fast, professional van access assistance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:07309903243" className="btn-primary bg-white text-orange-600 hover:bg-gray-100">
              <Phone className="w-5 h-5 inline mr-2" />
              Call Now: 07309903243
            </a>
            <Link href="/contact" className="btn-secondary border-2 border-white text-white hover:bg-white/10">
              Get Quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
