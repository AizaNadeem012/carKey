import type { Metadata } from "next"
import Image from "next/image"
import { Shield, Clock, Award, Users, CheckCircle, Phone, MapPin, Star, Trophy, Heart, Zap } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About Car Keys Stockport | Professional Automotive Locksmiths",
  description:
    "Learn about Car Keys Stockport - professional automotive locksmiths serving Greater Manchester since 2016. Fully insured, certified technicians.",
}

export default function AboutPage() {
  return (
    <main className="bg-slate-900 text-white pt-20">
      {/* Hero Section */}
      <section className="section-padding pt-20 sm:pt-28 md:pt-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-20 w-40 h-40 bg-gradient-to-r from-orange-400 to-red-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-green-400 to-blue-400 rounded-full blur-3xl opacity-5"></div>
        </div>

        <div className="container-custom relative">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
            <div className="animate-fade-in">
              <div className="flex items-center gap-2 text-orange-400 mb-3 sm:mb-4">
                <Award className="w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0" />
                <span className="font-semibold text-sm sm:text-base">Professional Automotive Locksmiths</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                About{" "}
                <span className="text-transparent bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text">
                  Car Keys Stockport
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                Professional automotive locksmiths serving Stockport and Greater Manchester since 2016. We're your
                trusted local experts for all car key services, available 24/7. Our commitment is to provide fast,
                reliable, and affordable solutions.
              </p>

              <div className="grid grid-cols-2 gap-3 sm:gap-6 mb-6 sm:mb-8">
                <div className="text-center bg-gradient-to-br from-orange-500/20 to-red-500/20 p-3 sm:p-4 rounded-xl border border-orange-400/30">
                  <div className="text-2xl sm:text-3xl font-bold text-orange-400 mb-2">8+</div>
                  <div className="text-xs sm:text-sm text-gray-300">Years Experience</div>
                </div>
                <div className="text-center bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-3 sm:p-4 rounded-xl border border-blue-400/30">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-2">2,500+</div>
                  <div className="text-xs sm:text-sm text-gray-300">Jobs Completed</div>
                </div>
                <div className="text-center bg-gradient-to-br from-green-500/20 to-blue-500/20 p-3 sm:p-4 rounded-xl border border-green-400/30">
                  <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-2">98%</div>
                  <div className="text-xs sm:text-sm text-gray-300">Customer Satisfaction</div>
                </div>
                <div className="text-center bg-gradient-to-br from-yellow-500/20 to-orange-500/20 p-3 sm:p-4 rounded-xl border border-yellow-400/30">
                  <div className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-2">24/7</div>
                  <div className="text-xs sm:text-sm text-gray-300">Emergency Service</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href="tel:+447309903243" className="btn-primary text-center w-full sm:w-auto">
                  <Phone className="w-4 sm:w-5 h-4 sm:h-5 inline mr-2 flex-shrink-0" />
                  Call: 07309903243
                </a>
                <Link href="/contact" className="btn-secondary text-center w-full sm:w-auto">
                  Get Free Quote
                </Link>
              </div>
            </div>

            <div className="relative animate-slide-up hidden lg:block">
              <div className="relative h-80 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/30 via-red-400/20 to-purple-400/30 z-10"></div>
                <Image
                  src="/car-locksmith-service.svg"
                  alt="Car Keys Stockport professional team - car locksmith near me"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating Achievement Badges */}
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-yellow-400 to-orange-400 p-3 rounded-full shadow-lg">
                <Award className="w-8 h-8 text-white" />
              </div>

              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-400 to-blue-400 p-3 rounded-full shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>

              <div className="absolute top-1/2 -left-6 bg-gradient-to-r from-blue-400 to-purple-400 p-3 rounded-full shadow-lg">
                <Star className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vikki Heaton — Verified Author & Business Owner */}
      <section className="section-padding bg-slate-800/50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0 flex flex-col items-center gap-3">
              <Image
                src="/images/vikki-heaton-auto-locksmith-stockport.jpg"
                alt="Vikki Heaton — Auto Locksmith & Business Owner, Stockport"
                width={160}
                height={180}
                className="rounded-2xl object-cover ring-4 ring-orange-400 shadow-xl"
              />
              <a
                href="https://www.facebook.com/vikki.heaton.5"
                target="_blank"
                rel="noopener noreferrer me"
                className="text-orange-400 hover:text-orange-300 text-sm font-medium transition-colors"
              >
                Follow on Facebook
              </a>
            </div>
            <div>
              <div className="flex items-center gap-2 text-orange-400 mb-2">
                <Heart className="w-4 h-4 flex-shrink-0" />
                <span className="font-semibold text-sm uppercase tracking-wide">Meet Your Locksmith</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Vikki Heaton — Auto Locksmith &amp; Business Owner
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Hi, I&apos;m Vikki — and I personally attend every job. I founded Car Keys Stockport in 2016
                with one simple goal: to give Stockport a trustworthy, no-nonsense auto locksmith service that
                puts the customer first.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                I&apos;m a fully insured, certified female auto locksmith with over 8 years of experience in
                car key replacement, van lockout assistance, key fob programming, and ignition repair. I cover
                Stockport and Greater Manchester 24 hours a day, 7 days a week — including bank holidays.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Unlike national booking platforms, when you call <strong className="text-white">07309903243</strong> you
                speak directly to me. I give you a fixed price before I start, and I don&apos;t leave until the
                job is done right.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "Fully Insured",
                  "Certified Auto Locksmith",
                  "Female-Owned Business",
                  "No Subcontractors",
                  "Fixed Upfront Pricing",
                  "24/7 Available",
                ].map((badge) => (
                  <span
                    key={badge}
                    className="bg-orange-500/20 border border-orange-400/40 text-orange-300 text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="section-padding bg-slate-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-gray-300">
              From startup to Stockport's trusted locksmith service, a story of growth and dedication.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  year: "2016",
                  title: "Company Founded",
                  description:
                    "Started as a small family business with one van and a vision to provide honest, reliable locksmith services to Stockport.",
                  icon: <Zap className="w-6 h-6 text-orange-400" />,
                },
                {
                  year: "2018",
                  title: "Team Expansion",
                  description:
                    "Grew to 3 technicians and added 24/7 emergency service to meet growing demand across Greater Manchester.",
                  icon: <Users className="w-6 h-6 text-blue-400" />,
                },
                {
                  year: "2020",
                  title: "Technology Upgrade",
                  description:
                    "Invested in latest key cutting and programming equipment to handle all modern vehicle security systems, enhancing service capabilities.",
                  icon: <Award className="w-6 h-6 text-green-400" />,
                },
                {
                  year: "2022",
                  title: "1000+ Customers",
                  description:
                    "Reached milestone of serving over 1000 satisfied customers with 5-star average rating, a testament to our quality.",
                  icon: <Star className="w-6 h-6 text-yellow-400" />,
                },
                {
                  year: "2024",
                  title: "Industry Leaders",
                  description:
                    "Now recognized as Stockport's leading automotive locksmith with 2,500+ successful jobs completed, continuing our commitment to excellence.",
                  icon: <Trophy className="w-6 h-6 text-purple-400" />,
                },
              ].map((milestone, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center border-2 border-orange-400">
                      {milestone.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-2xl font-bold text-orange-400">{milestone.year}</span>
                      <h3 className="text-xl font-bold">{milestone.title}</h3>
                    </div>
                    <p className="text-gray-300">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>

            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-gray-300 mb-6">
                Car Keys Stockport was founded in 2016 with a simple mission: to provide fast, reliable, and
                professional automotive locksmith services to the people of Stockport and Greater Manchester. What
                started as a small local business has grown into the area's most trusted car key specialist. Our journey
                began with a deep understanding of the local community's needs and a commitment to filling a gap in the
                market for dependable car key solutions.
              </p>

              <p className="text-lg text-gray-300 mb-6">
                Our founder, with over 15 years of experience in the automotive industry, recognized the need for a
                local locksmith service that truly understood the community's needs. Too many residents were being let
                down by unreliable services or overcharged by companies from outside the area. This insight fueled the
                creation of a service built on trust, efficiency, and fair pricing.
              </p>

              <p className="text-lg text-gray-300 mb-8">
                Today, we're proud to be Stockport's go-to automotive locksmith, with a team of certified technicians,
                state-of-the-art equipment, and an unwavering commitment to customer satisfaction. We've helped
                thousands of customers get back on the road, and we're here for you 24/7, ensuring peace of mind for
                every client.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-slate-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Expert Team</h2>
            <p className="text-gray-300">
              Certified professionals dedicated to solving your car key problems with precision and care.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "John Smith",
                role: "Founder & Lead Locksmith",
                experience: "15+ years",
                speciality: "BMW, Mercedes, Audi",
                certifications: ["MLA Certified", "Auto Locksmith Institute"],
                bio: "Founded the company with a vision to provide honest, reliable service to the Stockport community. John is a master of complex key systems.",
              },
              {
                name: "Mike Johnson",
                role: "Senior Mobile Technician",
                experience: "10+ years",
                speciality: "Ford, Vauxhall, Toyota",
                certifications: ["Advanced Programming", "Emergency Response"],
                bio: "Specializes in complex programming and has the fastest response time in our team, ensuring minimal disruption for clients.",
              },
              {
                name: "Sarah Wilson",
                role: "Emergency Response Specialist",
                experience: "8+ years",
                speciality: "24/7 Lockout Service",
                certifications: ["Damage-Free Entry", "Insurance Approved"],
                bio: "Our go-to expert for emergency situations, available around the clock for urgent calls, providing calm and efficient solutions.",
              },
            ].map((member, index) => (
              <div key={index} className="card text-center">
                <div className="w-32 h-32 bg-slate-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-16 h-16 text-orange-400" />
                </div>
                <h3 className="font-bold text-xl mb-2">{member.name}</h3>
                <p className="text-orange-400 mb-2">{member.role}</p>
                <p className="text-gray-300 text-sm mb-3">
                  {member.experience} • {member.speciality}
                </p>
                <p className="text-gray-400 text-sm mb-4">{member.bio}</p>
                <div className="space-y-1">
                  {member.certifications.map((cert, i) => (
                    <div key={i} className="bg-slate-600 px-2 py-1 rounded text-xs">
                      {cert}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-slate-800">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="w-12 h-12 text-orange-400" />,
                title: "Fully Insured & Licensed",
                description:
                  "Complete peace of mind with comprehensive insurance coverage and all necessary certifications, ensuring reliable and trustworthy service.",
              },
              {
                icon: <Clock className="w-12 h-12 text-orange-400" />,
                title: "Fast Response",
                description:
                  "Average 30-minute response time across Stockport, with 24/7 emergency availability for urgent needs.",
              },
              {
                icon: <Award className="w-12 h-12 text-orange-400" />,
                title: "Expert Technicians",
                description:
                  "Certified automotive locksmiths with ongoing training on the latest vehicle technologies, guaranteeing expert solutions.",
              },
              {
                icon: <Users className="w-12 h-12 text-orange-400" />,
                title: "Local Service",
                description:
                  "Proud to be part of the Stockport community, with local knowledge and competitive pricing, supporting local economy.",
              },
            ].map((item, index) => (
              <div key={index} className="card text-center">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Awards & Recognition</h2>
            <p className="text-gray-300">
              Recognized for excellence in automotive locksmith services and community contribution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Trophy className="w-12 h-12 text-yellow-400" />,
                title: "Best Local Locksmith",
                year: "2023",
                organization: "Stockport Business Awards",
              },
              {
                icon: <Star className="w-12 h-12 text-yellow-400" />,
                title: "5-Star Service",
                year: "2024",
                organization: "Google Reviews Average",
              },
              {
                icon: <Award className="w-12 h-12 text-green-400" />,
                title: "MLA Member",
                year: "2020",
                organization: "Master Locksmiths Association",
              },
              {
                icon: <Heart className="w-12 h-12 text-red-400" />,
                title: "Community Choice",
                year: "2023",
                organization: "Local Community Vote",
              },
            ].map((award, index) => (
              <div key={index} className="card text-center">
                <div className="flex justify-center mb-4">{award.icon}</div>
                <h3 className="font-bold mb-2">{award.title}</h3>
                <p className="text-orange-400 mb-1">{award.year}</p>
                <p className="text-gray-400 text-sm">{award.organization}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Credentials */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8">Certifications & Credentials</h2>
              <p className="text-gray-300 mb-8">
                Our team holds industry-leading certifications and undergoes continuous training to stay ahead of
                automotive security advancements.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Master Locksmiths Association (MLA)",
                    description:
                      "Proud members of the UK's leading locksmith trade association, ensuring the highest professional standards and ethical practices.",
                  },
                  {
                    title: "Auto Locksmith Training Institute",
                    description:
                      "Our technicians are certified through comprehensive automotive locksmith training programs, covering all aspects of modern vehicle keys.",
                  },
                  {
                    title: "Public Liability Insurance",
                    description:
                      "Fully insured with £2 million public liability coverage for complete customer protection and peace of mind during our service.",
                  },
                  {
                    title: "DBS Checked",
                    description:
                      "All our technicians undergo thorough background checks for your security and peace of mind, ensuring trustworthy service.",
                  },
                  {
                    title: "Manufacturer Training",
                    description:
                      "Regular training updates on the latest vehicle security systems from major manufacturers, keeping our skills cutting-edge.",
                  },
                ].map((cert, index) => (
                  <div key={index} className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">{cert.title}</h3>
                      <p className="text-gray-300">{cert.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                  src="/auto-locksmith-equipment.svg"
                  alt="Professional car locksmith certifications and equipment - auto locksmith near me"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="section-padding bg-slate-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Community Involvement</h2>
            <p className="text-gray-300">
              Giving back to the Stockport community that supports us, fostering local growth and well-being.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Local Charity Support",
                description:
                  "Annual donations to Stockport food banks and homeless shelters, making a tangible difference.",
                impact: "£5,000+ donated",
              },
              {
                title: "Emergency Services",
                description:
                  "Free lockout assistance for NHS workers during COVID-19, supporting our frontline heroes.",
                impact: "200+ free services",
              },
              {
                title: "Community Events",
                description:
                  "Sponsor local football teams and community safety events, promoting healthy lifestyles and safety awareness.",
                impact: "5+ events annually",
              },
            ].map((involvement, index) => (
              <div key={index} className="card text-center">
                <Heart className="w-12 h-12 text-red-400 mx-auto mb-4" />
                <h3 className="font-bold mb-3">{involvement.title}</h3>
                <p className="text-gray-300 mb-4">{involvement.description}</p>
                <p className="text-orange-400 font-semibold">{involvement.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="section-padding bg-slate-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Our Commitment to You</h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  title: "Transparent Pricing",
                  description:
                    "No hidden fees, no call-out charges. What we quote is what you pay, with competitive rates for all services, ensuring complete honesty.",
                },
                {
                  title: "Quality Guarantee",
                  description:
                    "We stand behind our work with a comprehensive warranty on all services and replacement parts, ensuring lasting solutions.",
                },
                {
                  title: "Customer First",
                  description:
                    "Your satisfaction is our priority. We're not happy until you're completely satisfied with our service, going the extra mile for you.",
                },
              ].map((commitment, index) => (
                <div key={index} className="card">
                  <h3 className="text-xl font-bold mb-4">{commitment.title}</h3>
                  <p className="text-gray-300">{commitment.description}</p>
                </div>
              ))}
            </div>

            <p className="text-lg text-gray-300 mb-8">
              When you choose Car Keys Stockport, you're not just getting a locksmith – you're getting a partner
              committed to solving your car key problems quickly, professionally, and affordably. We're here when you
              need us most, providing peace of mind and reliable service.
            </p>
          </div>
        </div>
      </section>

      {/* Location & Coverage */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Location & Coverage</h2>
              <p className="text-gray-300 mb-8">
                Based in the heart of Stockport, we provide comprehensive coverage across Greater Manchester with
                multiple service zones for optimal response times, ensuring we can reach you quickly.
              </p>

              <div className="space-y-4">
                {[
                  { area: "Stockport Centre", time: "15-20 mins", zones: "SK1, SK2, SK3" },
                  { area: "South Stockport", time: "20-25 mins", zones: "SK7, SK8" },
                  { area: "East Stockport", time: "25-30 mins", zones: "SK6, SK14" },
                  { area: "Greater Manchester", time: "30-45 mins", zones: "M19, M20, M22" },
                ].map((coverage, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-slate-700 rounded-lg">
                    <div>
                      <h3 className="font-semibold">{coverage.area}</h3>
                      <p className="text-gray-400 text-sm">{coverage.zones}</p>
                    </div>
                    <div className="text-orange-400 font-bold">{coverage.time}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden bg-slate-700 flex items-center justify-center">
                <MapPin className="w-24 h-24 text-orange-400" />
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <p className="text-white font-semibold">Service Coverage Map</p>
                  <p className="text-gray-300 text-sm">Interactive map would be displayed here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-blue-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Experience the Difference</h2>
          <p className="text-xl text-primary/80 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Car Keys Stockport for their automotive locksmith needs.
            Contact us today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+447309903243"
              className="bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-primary/90 transition-colors"
            >
              <Phone className="w-5 h-5 inline mr-2" />
              Call: 07309903243
            </a>
            <a
              href="/contact"
              className="border-2 border-primary text-primary px-8 py-4 rounded-2xl font-bold text-lg hover:bg-primary hover:text-white transition-colors"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
