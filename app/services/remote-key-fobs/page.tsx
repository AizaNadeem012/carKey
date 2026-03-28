// app/services/remote-key-fobs/page.tsx

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, Clock, Shield, CheckCircle, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Remote Key Fob Replacement Stockport | Fast Mobile Service",
  description:
    "Lost or damaged your car remote key fob? Our mobile locksmiths provide fast, professional remote key fob replacement service across Stockport. Call +44 7309 903243",
  keywords: "remote key fob replacement, key fob repair, lost key fob, car key fob stockport",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Remote Key Fob Replacement Stockport | Fast Mobile Service",
    description: "Lost your key fob? Fast replacement and programming in Stockport. Call 07309903243",
    url: "https://carkeysinstockport.co.uk/services/remote-key-fobs",
    type: "website",
  },
  alternates: {
    canonical: "https://carkeysinstockport.co.uk/services/remote-key-fobs",
  },
};

export default function RemoteKeyFobsPage() {
  return (
    <main className="bg-slate-900 text-white pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary via-secondary to-primary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Remote Key Fob Replacement in Stockport
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Lost, damaged or faulty remote key fob? Our mobile locksmiths provide on-site replacement and programming for all car makes across Stockport.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="tel:07309903243" className="btn-primary text-center" aria-label="Call remote key fob service">
                  <Phone className="w-5 h-5 inline mr-2" />
                  Call: 07309903243
                </a>
                <Link href="/contact" className="btn-secondary text-center" aria-label="Get free quote for key fob replacement">
                  Get Free Quote
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="card">
                  <Clock className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                  <div className="text-sm font-semibold">30min Response</div>
                </div>
                <div className="card">
                  <Shield className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                  <div className="text-sm font-semibold">Fully Insured</div>
                </div>
                <div className="card">
                  <CheckCircle className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                  <div className="text-sm font-semibold">Transparent Pricing</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden">
                <Image
                  src="/remote-key-fobs.svg"
                  alt="Professional remote key fob replacement and programming service in Stockport"
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
              <h2 className="text-3xl font-bold mb-6">Professional Remote Key Fob Replacement</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 text-lg mb-6">
                  Remote key fobs can stop working due to battery issues, damage, or programming faults. Our expert locksmiths in Stockport provide on-site replacement and programming for all car makes.
                </p>

                <h3 className="text-2xl font-bold mb-4">Our Services Include</h3>
                <ul className="space-y-2 mb-6">
                  {[
                    "On-site remote key fob replacement and programming",
                    "Repairing faulty remote fobs",
                    "Battery replacement and key testing",
                    "Compatibility check with all car models",
                    "Insurance-approved documentation if required",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-2xl font-bold mb-4">How It Works</h3>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  {[
                    {
                      step: "1",
                      title: "Call & Quote",
                      description:
                        "Provide your car make, model and issue. We give an instant quote over the phone.",
                    },
                    {
                      step: "2",
                      title: "We Come To You",
                      description:
                        "Our mobile locksmith arrives on-site within 30 minutes fully equipped.",
                    },
                    {
                      step: "3",
                      title: "Replace & Program",
                      description: "We replace or repair your remote key fob and test it before leaving.",
                    },
                  ].map((item, index) => (
                    <div key={index} className="card text-center">
                      <div className="w-12 h-12 text-orange-400 bg-black rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                        {item.step}
                      </div>
                      <h4 className="font-bold mb-2">{item.title}</h4>
                      <p className="text-gray-300 text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="card bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                <h3 className="text-xl font-bold mb-4">Need Remote Key Help?</h3>
                <p className="mb-4">Call our 24/7 emergency line for instant assistance.</p>
                <a
                  href="tel:+447309903243"
                  className="bg-white text-black px-6 py-3 rounded-xl font-bold block text-center hover:bg-gray-100 transition-colors"
                >
                  07309 903243
                </a>
              </div>

              <div className="card">
                <h3 className="text-xl font-bold mb-4">Service Areas</h3>
                <div className="space-y-1 text-sm">
                  {["Stockport", "Cheadle", "Bramhall", "Hazel Grove", "Marple", "Romiley"].map((area, index) => (
                    <div key={index} className="text-gray-300">
                      • {area}
                    </div>
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
                question: "How fast can you replace my remote key fob?",
                answer: "We aim to replace or repair your remote key fob within 30 minutes on-site.",
              },
              {
                question: "Do you provide programming for all car makes?",
                answer: "Yes, we can program remote key fobs for all major car manufacturers and models.",
              },
              {
                question: "What if my remote key fob is damaged?",
                answer: "We can repair or replace faulty or damaged remote key fobs immediately.",
              },
              {
                question: "Is this service available 24/7?",
                answer: "Absolutely, our mobile locksmiths provide round-the-clock remote key fob replacement service.",
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
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Need Remote Key Assistance Now?</h2>
          <p className="text-xl text-primary/80 mb-8 max-w-2xl mx-auto">
            Our mobile locksmiths are ready to help 24/7. Fast response, professional service, competitive pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:07309903243"
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
    </main>
  );
}
