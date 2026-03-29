import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import Breadcrumb from "../../components/breadcrumb"

export const revalidate = 86400
import { serviceSchema, faqSchema } from "@/lib/schema"
import { Phone, Clock, Shield, CheckCircle, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Car Key Replacement Stockport | Cut & Programmed On-Site | From £89 | 25 Min Response",
  description:
    "Professional car key replacement in Stockport & Greater Manchester. Lost, stolen, broken keys cut and programmed on-site for all makes and models. 25-min response. No call-out fee. Fully insured. Call 07309903243",
  keywords: "car key replacement, car key lost, broken car key, car key programming, auto key replacement Stockport",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Car Key Replacement Stockport | Professional On-Site Service",
    description: "Lost your car key? We cut and program new keys on-site. From £89. 25-min response. Call 07309903243",
    url: "https://carkeysinstockport.co.uk/services/car-key-replacement",
  },
  alternates: {
    canonical: "https://carkeysinstockport.co.uk/services/car-key-replacement",
  },
}

export default function CarKeyReplacementPage() {
  const faqItems = [
    {
      question: "How much does car key replacement cost?",
      answer: "Car key replacement starts from £89 depending on your vehicle type and key complexity. We provide transparent pricing upfront with no hidden fees.",
    },
    {
      question: "How long does car key replacement take?",
      answer: "Most car key replacements are completed within 20-30 minutes on-site. This includes cutting and programming the new key.",
    },
    {
      question: "Do you service all car makes and models?",
      answer: "Yes, we service all car makes and models including BMW, Mercedes, Audi, Volkswagen, Ford, Vauxhall, and more.",
    },
    {
      question: "Can you replace keys if I don't have the original?",
      answer: "Yes, we can cut and program new keys even without the original key. We use advanced diagnostic equipment.",
    },
  ]

  return (
    <>
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: "Car Key Replacement",
              description: "Professional car key cutting and programming service for all vehicle makes and models",
              areaServed: "Stockport",
              priceMin: 89,
              priceMax: 150,
            })
          ),
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
          { name: "Services", href: "/services" },
          { name: "Car Key Replacement", href: "/services/car-key-replacement" },
        ]}
      />
      <main className="bg-slate-900 text-white pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary via-secondary to-primary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Car Key Replacement in Stockport</h1>
              <p className="text-xl text-gray-300 mb-8">
                Lost, stolen or broken car keys? Our mobile locksmiths provide fast, professional car key replacement
                service across Stockport. Cut and programmed on-site from £89.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="tel:+447309903243" className="btn-primary text-center">
                  <Phone className="w-5 h-5 inline mr-2" />
                  Call: 07309 903243
                </a>
                <Link href="/contact" className="btn-secondary text-center">
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
                  <div className="text-sm font-semibold">Fixed Pricing</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden">
                <Image
                  src="/car-key-replacement.svg"
                  alt="Professional car key replacement and programming service in Stockport"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
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
              <h2 className="text-3xl font-bold mb-6">Professional Car Key Replacement Service</h2>

              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 text-lg mb-6">
                  When you lose your car keys or they break, it can be incredibly frustrating and stressful. At Car Keys
                  Stockport, we understand the urgency of your situation and provide fast, professional car key
                  replacement services across Stockport and surrounding areas.
                </p>

                <h3 className="text-2xl font-bold mb-4">What We Offer</h3>
                <p className="text-gray-300 mb-4">
                  Our mobile car key replacement service covers all aspects of automotive key solutions:
                </p>

                <ul className="space-y-2 mb-6">
                  {[
                    "Complete car key replacement for all makes and models",
                    "Transponder key cutting and programming",
                    "Remote key fob replacement and coding",
                    "Spare key creation while you wait",
                    "Emergency key replacement service",
                    "Insurance-approved service with full documentation",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-2xl font-bold mb-4">Makes We Cover</h3>
                <p className="text-gray-300 mb-4">
                  We provide car key replacement services for all major vehicle manufacturers including:
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
                  ].map((make, index) => (
                    <div key={index} className="text-gray-300">
                      • {make}
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-bold mb-4">Our Process</h3>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  {[
                    {
                      step: "1",
                      title: "Call & Quote",
                      description:
                        "Call us with your vehicle details and we'll provide an instant quote over the phone.",
                    },
                    {
                      step: "2",
                      title: "We Come To You",
                      description:
                        "Our mobile locksmith arrives at your location within 30 minutes with all equipment.",
                    },
                    {
                      step: "3",
                      title: "Cut & Program",
                      description: "We cut and program your new keys on-site, testing everything before we leave.",
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
              {/* Pricing */}
              <div className="card">
                <h3 className="text-xl font-bold mb-4">Pricing</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Basic Key Replacement</span>
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
                  <div className="flex justify-between">
                    <span>Proximity Key</span>
                    <span className="text-orange-400 font-bold">From £199</span>
                  </div>
                </div>
                <p className="text-sm text-gray-400 mt-4">
                  * Prices include cutting, programming and testing. No hidden fees.
                </p>
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
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "How long does car key replacement take?",
                answer:
                  "Most car key replacements take 15-30 minutes once we arrive. Complex programming may take up to 45 minutes.",
              },
              {
                question: "Do you need the original key?",
                answer:
                  "No, we can create new keys without the original using your vehicle's VIN number and proper identification.",
              },
              {
                question: "Can you program keys for all car makes?",
                answer:
                  "Yes, we have the equipment and expertise to program keys for all major car manufacturers and models.",
              },
              {
                question: "Is there a call-out charge?",
                answer:
                  "No, we don't charge call-out fees. You only pay for the work completed, with transparent pricing provided upfront.",
              },
              {
                question: "Do you provide spare keys?",
                answer: "Yes, we can create spare keys while you wait. It's always recommended to have a backup key.",
              },
              {
                question: "Are you available for emergencies?",
                answer:
                  "Yes, we provide 24/7 emergency car key replacement service across Stockport and surrounding areas.",
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

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "James Wilson",
                location: "Stockport",
                rating: 5,
                text: "Lost my BMW keys on a Saturday night. These guys were out within 20 minutes and had new keys cut and programmed in 30 minutes. Brilliant service!",
              },
              {
                name: "Sarah Mitchell",
                location: "Cheadle",
                rating: 5,
                text: "Professional service from start to finish. Fair pricing, no hidden costs, and the locksmith was very knowledgeable. Highly recommended.",
              },
              {
                name: "David Brown",
                location: "Bramhall",
                rating: 5,
                text: "Needed a replacement key for my Mercedes. The locksmith arrived quickly, was very professional, and had the key working perfectly. Great value for money.",
              },
            ].map((review, index) => (
              <div key={index} className="card">
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-orange-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{review.text}"</p>
                <div>
                  <div className="font-semibold">{review.name}</div>
                  <div className="text-sm text-gray-400">{review.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-blue-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Need Car Key Replacement Now?</h2>
          <p className="text-xl text-primary/80 mb-8 max-w-2xl mx-auto">
            Don't wait - our mobile locksmiths are ready to help 24/7. Fast response, professional service, competitive
            prices.
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
    </>
  )
}
