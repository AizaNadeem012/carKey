import Link from "next/link"
import Script from "next/script"
import { MapPin, Phone, ArrowRight } from "lucide-react"
import { organizationSchema } from "@/lib/schema"

export const locationsMetadata = {
  title: "Auto Locksmith Services Across Greater Manchester | Stockport, Manchester, Bury & More",
  description:
    "Professional auto locksmith services in Stockport, Manchester, Bury, Oldham, Rochdale, Tameside, Trafford & Salford. Car key replacement, emergency lockout, van locksmith. 24/7. Fast response. Call 07309903243",
  keywords: "auto locksmith near me, locksmith near me, car locksmith Manchester, auto locksmith Stockport, van locksmith, emergency locksmith 24/7",
}

interface Location {
  name: string
  slug: string
  description: string
  services: string[]
}

const locations: Location[] = [
  {
    name: "Stockport",
    slug: "stockport",
    description:
      "Our home base for professional auto locksmith services in Stockport and surrounding areas. Whether you need car key replacement, emergency lockout assistance, or van locksmith services, our mobile locksmiths arrive within 25 minutes. We serve Stockport town centre, Cheadle, Bramhall, Hazel Grove, and nearby communities.",
    services: ["Car Key Replacement", "Emergency Lockout", "Key Fob Programming", "Van Locksmith", "Ignition Repair"],
  },
  {
    name: "Manchester",
    slug: "manchester",
    description:
      "Expert auto locksmith services throughout Manchester and the surrounding areas. From city centre to outer regions, our mobile locksmiths provide fast car key replacement, emergency lockout assistance, and professional key programming. Available 24/7 for urgent locksmith needs.",
    services: ["Car Key Replacement", "Emergency Lockout", "Smart Key Programming", "Auto Key Coding", "Vehicle Access"],
  },
  {
    name: "Bury",
    slug: "bury",
    description:
      "Professional car locksmith and auto key services in Bury. Locked out of your car? Need a new key? Our certified locksmiths provide damage-free entry, rapid response times, and transparent pricing. We handle all vehicle types and modern security systems.",
    services: ["Car Lockout Service", "Key Replacement", "Transponder Programming", "Emergency Service", "Fob Repair"],
  },
  {
    name: "Oldham",
    slug: "oldham",
    description:
      "Trusted auto locksmith services in Oldham, offering comprehensive solutions for car and van lockouts, key replacement, and emergency locksmith assistance. Our experienced technicians are equipped to handle all makes and models with professional, non-destructive techniques.",
    services: ["Car Lockout", "Van Locksmith", "Key Programming", "Emergency Response", "Mobile Service"],
  },
  {
    name: "Rochdale",
    slug: "rochdale",
    description:
      "Fast, reliable locksmith services for Rochdale residents and businesses. Specializing in auto locksmith solutions including car key replacement, emergency lockout assistance, and key fob programming. Available 24/7 for urgent situations.",
    services: ["Car Key Replacement", "Lockout Assistance", "Key Fob Programming", "Ignition Repair", "Emergency Service"],
  },
  {
    name: "Tameside",
    slug: "tameside",
    description:
      "Professional auto locksmith services across Tameside, including Ashton-under-Lyne and Denton. Whether you need emergency car lockout help or car key replacement, our mobile locksmiths provide fast, professional service with transparent pricing.",
    services: ["Emergency Lockout", "Car Key Replacement", "Key Programming", "Van Locksmith", "Professional Service"],
  },
  {
    name: "Trafford",
    slug: "trafford",
    description:
      "Expert auto locksmith and car key services throughout Trafford. From Sale to Altrincham, we provide emergency lockout assistance, professional key replacement, and advanced key fob programming. Fast response times, fully insured service.",
    services: ["Car Lockout Service", "Key Replacement", "Fob Programming", "Emergency Service", "All Vehicle Types"],
  },
  {
    name: "Salford",
    slug: "salford",
    description:
      "Comprehensive auto locksmith services for Salford and surrounding areas. Our mobile locksmiths specialise in car key replacement, emergency lockout solutions, and professional key coding. Available around the clock for urgent locksmith emergencies.",
    services: ["Car Key Services", "Emergency Lockout", "Key Programming", "Vehicle Access", "24/7 Response"],
  },
]

export default function LocationsSection() {
  return (
    <section className="section-padding bg-slate-800" id="locations">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-2 text-orange-400 mb-3 sm:mb-4">
            <MapPin className="w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0" />
            <span className="font-semibold text-xs sm:text-sm tracking-wide uppercase">Service Areas</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Auto Locksmith Services Across <span className="text-orange-400">Greater Manchester</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-300 px-2 sm:px-0">
            Professional{" "}
            <Link href="/services/car-key-replacement" className="text-orange-400 hover:text-orange-300 underline">
              car key replacement
            </Link>
            ,{" "}
            <Link href="/services/lockout-assistance" className="text-orange-400 hover:text-orange-300 underline">
              emergency lockout assistance
            </Link>
            , and{" "}
            <Link href="/services/van-lockout" className="text-orange-400 hover:text-orange-300 underline">
              van locksmith services
            </Link>{" "}
            available 24/7 across{" "}
            <Link href="/areas/stockport" className="text-orange-400 hover:text-orange-300 underline">
              Stockport
            </Link>{" "}
            and the wider{" "}
            <Link href="/areas/manchester" className="text-orange-400 hover:text-orange-300 underline">
              Greater Manchester area
            </Link>
            . Wherever you are, we're ready to help.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {locations.map((location) => (
            <Link key={location.slug} href={`/areas/${location.slug}`}>
              <div className="card p-4 sm:p-6 h-full hover:shadow-lg hover:shadow-orange-400/20 transition-all duration-300 cursor-pointer group">
                {/* Location Name */}
                <h3 className="text-lg sm:text-2xl font-bold mb-3 text-white group-hover:text-orange-400 transition-colors">
                  {location.name}
                </h3>

                {/* Short Description */}
                <p className="text-gray-300 text-xs sm:text-sm mb-4 leading-relaxed line-clamp-3">
                  {location.description}
                </p>

                {/* Quick Services List */}
                <div className="space-y-2 mb-6">
                  {location.services.slice(0, 3).map((service) => (
                    <div key={service} className="flex items-center gap-2 text-xs text-gray-400">
                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full flex-shrink-0"></div>
                      {service}
                    </div>
                  ))}
                </div>

                {/* Call to Action */}
                <div className="flex items-center gap-2 text-orange-400 font-semibold text-xs sm:text-sm group-hover:gap-3 transition-all">
                  <span>Learn More About {location.name} Services</span>
                  <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4 flex-shrink-0" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Why Choose Us in Your Area */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-orange-600/10 to-red-600/10 border border-orange-400/20 rounded-2xl p-6 sm:p-8 md:p-10">
          <h3 className="text-xl sm:text-2xl font-bold mb-6">Why Our Locksmith Service Stands Out in Your Area</h3>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                title: "Local Expertise",
                description:
                  "We know the Greater Manchester area intimately. Our mobile locksmiths provide fast response times because we're based locally and understand traffic patterns across Stockport, Manchester, Bury, and beyond.",
              },
              {
                title: "24/7 Emergency Service",
                description:
                  "Locked out of your car at 3 AM? Our emergency locksmith team is always available. Call anytime for immediate assistance with car lockouts, key replacement, or van locksmith emergencies.",
              },
              {
                title: "Professional & Insured",
                description:
                  "Every technician is certified, fully insured, and equipped with modern technology. We use non-destructive, damage-free techniques to access your vehicle and programming equipment for all auto key services.",
              },
              {
                title: "Transparent Pricing",
                description:
                  "No hidden fees. No call-out charges. We quote upfront before any work begins. Whether you need key replacement, lockout assistance, or emergency service, you know exactly what you'll pay.",
              },
            ].map((item, index) => (
              <div key={index}>
                <h4 className="font-bold text-base sm:text-lg mb-2">{item.title}</h4>
                <p className="text-gray-300 text-xs sm:text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-gray-300 text-base sm:text-lg mb-4 sm:mb-6 px-2 sm:px-0">
            Don't see your area listed? <span className="text-orange-400 font-semibold">We likely still serve you.</span> Call
            us to confirm coverage.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <a href="tel:07309903243" className="btn-primary inline-flex items-center justify-center gap-2 w-full sm:w-auto">
              <Phone className="w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0" />
              Call: 07309903243
            </a>
            <Link href="/contact" className="btn-secondary inline-flex items-center justify-center gap-2 w-full sm:w-auto">
              <span>Get Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
