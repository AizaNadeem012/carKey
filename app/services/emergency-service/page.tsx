// app/services/emergency-service/page.tsx

import type { Metadata } from "next"

export const revalidate = 86400;
import Image from "next/image";
import { Phone, Clock, Shield, CheckCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Emergency Car Key Service Stockport | 24/7 Locksmith",
  description: "Fast emergency car key replacement and locksmith service in Stockport. 24/7 mobile service. Call +44 7309 903243.",
  keywords: "emergency car key service, 24/7 locksmith, emergency lockout, car locksmith stockport",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Emergency Car Key Service Stockport | 24/7 Locksmith",
    description: "Locked out or lost keys? Fast 24/7 emergency car key service in Stockport. Call 07309903243",
    url: "https://carkeysinstockport.co.uk/services/emergency-service",
    type: "website",
  },
  alternates: {
    canonical: "https://carkeysinstockport.co.uk/services/emergency-service",
  },
};

export default function EmergencyServicePage() {
  return (
    <main className="bg-slate-900 text-white pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-red-600 via-orange-500 to-red-600">
        <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Emergency Car Key Service in Stockport</h1>
            <p className="text-xl text-gray-300 mb-8">
              Locked out of your car or lost your keys? Our 24/7 mobile locksmiths provide fast and professional emergency
              car key replacement service across Stockport. Immediate response guaranteed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="tel:07309903243" className="btn-primary text-center" aria-label="Call emergency locksmith service">
                <Phone className="w-5 h-5 inline mr-2" />
                Call Now: 07309903243
              </a>
              <Link href="/contact" className="btn-secondary text-center" aria-label="Get free quote for emergency service">
                Get Free Quote
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="card">
                <Clock className="w-6 h-6 text-orange-400 mx-auto mb-2" aria-hidden="true" />
                <div className="text-sm font-semibold">Immediate Response</div>
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
                src="/emergency-locksmith.svg"
                alt="Professional emergency car key service available 24/7 in Stockport"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="section-padding">
        <div className="container-custom max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Emergency Services</h2>

          <ul className="space-y-4 text-gray-300 list-disc list-inside">
            <li>Emergency car key replacement for all makes and models</li>
            <li>Lockout assistance when keys are lost or locked inside the vehicle</li>
            <li>Transponder and remote key programming on-site</li>
            <li>Replacement of broken or damaged car keys</li>
            <li>Spare key creation while you wait</li>
            <li>24/7 mobile locksmith service across Stockport and surrounding areas</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">How Our Emergency Service Works</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card text-center p-6 bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 text-orange-400 bg-black rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h4 className="font-bold mb-2">Call & Quote</h4>
              <p className="text-gray-300 text-sm">Call us immediately and get an instant quote. We’ll ask about your vehicle and situation.</p>
            </div>
            <div className="card text-center p-6 bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 text-orange-400 bg-black rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h4 className="font-bold mb-2">Immediate Dispatch</h4>
              <p className="text-gray-300 text-sm">Our mobile locksmith is dispatched immediately to your location, fully equipped for your emergency.</p>
            </div>
            <div className="card text-center p-6 bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 text-orange-400 bg-black rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h4 className="font-bold mb-2">On-Site Resolution</h4>
              <p className="text-gray-300 text-sm">We cut, program, and test your replacement keys on-site, ensuring you’re back on the road immediately.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-red-700 text-center">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Locked Out or Lost Keys?</h2>
          <p className="text-xl text-primary/80 mb-8 max-w-2xl mx-auto">
            Contact our 24/7 emergency locksmith service now for fast, reliable assistance anywhere in Stockport.
          </p>
          <a
            href="tel:07309903243"
            className="bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-primary/90 transition-colors"
          >
            Call Now: 07309903243
          </a>
        </div>
      </section>
    </main>
  );
}
