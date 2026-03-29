import type { Metadata } from "next"
import { Phone, Mail, MapPin, Clock, Users, MessageCircle, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us - Car Keys Stockport | Get Free Quote",
  description:
    "Contact Car Keys Stockport for fast car key replacement, programming and lockout assistance. Call +44 7936 755530 or get a free quote online.",
}

export default function ContactPage() {
  return (
    <main className="bg-slate-900 text-white pt-20">
      <div className="container-custom section-padding">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get in touch for fast car key replacement, programming and emergency lockout assistance across Stockport.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-8">Get In Touch</h2>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-orange-400 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <a href="tel:07309903243" className="text-orange-400 hover:underline text-lg">
                    07309903243
                  </a>
                  <p className="text-gray-300 text-sm">24/7 Emergency Service</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-orange-400 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a href="mailto:info@carkeysinstockport.co.uk" className="text-orange-400 hover:underline">
                    info@carkeysinstockport.co.uk
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-orange-400 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Address</h3>
                  <p className="text-gray-300">
                    Stockport
                    <br />
                    Greater Manchester
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-orange-400 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Opening Hours</h3>
                  <p className="text-gray-300">
                    24/7 Emergency Service
                    <br />
                    Monday - Sunday: Available
                  </p>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div className="card mb-8">
              <h3 className="font-bold mb-4">Areas We Cover</h3>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
                <div>ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â¢ Stockport</div>
                <div>ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â¢ Cheadle</div>
                <div>ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â¢ Bramhall</div>
                <div>ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â¢ Hazel Grove</div>
                <div>ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â¢ Marple</div>
                <div>ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â¢ Romiley</div>
                <div>ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â¢ Bredbury</div>
                <div>ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â¢ Woodley</div>
              </div>
            </div>

            {/* Response Times */}
            <div className="card">
              <h3 className="font-bold mb-4">Response Times</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Stockport Centre</span>
                  <span className="text-orange-400 font-bold">15-20 mins</span>
                </div>
                <div className="flex justify-between">
                  <span>Cheadle/Bramhall</span>
                  <span className="text-orange-400 font-bold">20-25 mins</span>
                </div>
                <div className="flex justify-between">
                  <span>Outer Areas</span>
                  <span className="text-orange-400 font-bold">25-30 mins</span>
                </div>
              </div>
            </div>
          </div>

          {/* Google Form Embed */}
          <div className="card bg-slate-800 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-white">Get Free Quote</h2>
            <div className="w-full">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLScIlH0fpzh4lb84t_jR92V_eXNO1mQdOfXto3BS5pKfBSCBUQ/viewform?embedded=true"
                width="100%"
                height="1200"
                style={{ border: 'none', borderRadius: '0.5rem' }}
                title="Contact Form"
                className="w-full bg-white"
              >
                LoadingÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â¦
              </iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <section className="section-padding bg-slate-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-300">Professional, certified locksmiths ready to help</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "John Smith",
                role: "Lead Locksmith",
                experience: "15+ years",
                speciality: "BMW, Mercedes, Audi",
              },
              {
                name: "Mike Johnson",
                role: "Mobile Technician",
                experience: "10+ years",
                speciality: "Ford, Vauxhall, Toyota",
              },
              {
                name: "Sarah Wilson",
                role: "Emergency Specialist",
                experience: "8+ years",
                speciality: "24/7 Lockout Service",
              },
            ].map((member, index) => (
              <div key={index} className="card text-center">
                <div className="w-24 h-24 bg-slate-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-orange-400" />
                </div>
                <h3 className="font-bold text-lg mb-2">{member.name}</h3>
                <p className="text-orange-400 mb-2">{member.role}</p>
                <p className="text-gray-300 text-sm mb-1">{member.experience}</p>
                <p className="text-gray-400 text-xs">{member.speciality}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Multiple Ways to Reach Us</h2>
            <p className="text-gray-300">Choose the contact method that works best for you</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: <Phone className="w-8 h-8 text-orange-400" />,
                title: "Call Direct",
                description: "Instant response for emergencies",
                action: "07309903243",
                link: "tel:+07309903243",
              },
              {
                icon: <MessageCircle className="w-8 h-8 text-blue-400" />,
                title: "WhatsApp",
                description: "Quick messages and photos",
                action: "Message Us",
                link: "https://wa.me/07309903243",
              },
              {
                icon: <Mail className="w-8 h-8 text-green-400" />,
                title: "Email Quote",
                description: "Detailed service requests",
                action: "Send Email",
                link: "mailto:info@carkeysinstockport.co.uk",
              },
              {
                icon: <Calendar className="w-8 h-8 text-purple-400" />,
                title: "Book Online",
                description: "Schedule non-emergency work",
                action: "Book Now",
                link: "/contact",
              },
            ].map((method, index) => (
              <div key={index} className="card text-center hover:scale-105 transition-transform duration-300">
                <div className="flex justify-center mb-4">{method.icon}</div>
                <h3 className="font-bold mb-2">{method.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{method.description}</p>
                <a href={method.link} className="text-orange-400 font-semibold hover:underline">
                  {method.action}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="bg-red-600 py-8">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Emergency Lockout?</h2>
            <p className="text-red-100 mb-6">Don't panic - we're here to help 24/7</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:07309903243"
                className="bg-white text-red-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                <Phone className="w-5 h-5 inline mr-2" />
                Emergency: 07309903243
              </a>
              <a
                href="https://wa.me/07309903243"
                className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-red-600 transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-slate-800 py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Find Us</h2>
          <div className="bg-gray-300 h-96 rounded-2xl flex items-center justify-center">
            <p className="text-gray-600">Interactive Map Would Go Here</p>
          </div>
        </div>
      </section>
    </main>
  )
}
