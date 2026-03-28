import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Cheap Locksmith Denton 24 Hours | Auto, Car & Van | Car Keys Stockport",
  description:
    "Need a cheap 24 hour locksmith in Denton? Fast auto, car & van locksmith in Denton SK14 day or night. Mobile service. No call-out fee. Call 07309903243.",
  alternates: {
    canonical: "https://carkeysinstockport.co.uk/blog/cheap-locksmith-denton-24-hours",
  },
}

const faqItems = [
  {
    question: "How much does a 24 hour locksmith cost in Denton?",
    answer:
      "Car Keys Stockport provides a fixed upfront price with no call-out fee in Denton SK14. Price varies by vehicle and key type. Call 07309903243 for an instant quote.",
  },
  {
    question: "Is there a cheap auto locksmith available in Denton tonight?",
    answer:
      "Yes. Car Keys Stockport is available 24/7 in Denton SK14 including nights, weekends and bank holidays for car lockouts, van lockouts, key replacement and emergency locksmith services.",
  },
  {
    question: "What is the fastest mobile locksmith in Denton?",
    answer:
      "Car Keys Stockport aims to reach Denton within 20 minutes. Mobile auto locksmith covering the full SK14 area including Hyde, Audenshaw and Dukinfield.",
  },
]

export default function CheapLocksmithDenton24HoursPage() {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Cheap Locksmith Denton 24 Hours — Auto, Car & Van Services",
            description:
              "Need a cheap 24 hour locksmith in Denton? Fast auto, car & van locksmith in Denton SK14 day or night. Mobile service. No call-out fee.",
            url: "https://carkeysinstockport.co.uk/blog/cheap-locksmith-denton-24-hours",
            datePublished: "2024-01-15",
            dateModified: "2024-06-01",
            author: {
              "@type": "Person",
              name: "Vikki Heaton",
              url: "https://carkeysinstockport.co.uk/about",
              sameAs: [
                "https://www.facebook.com/vikki.heaton.5",
                "https://carkeysinstockport.co.uk/about",
              ],
            },
            publisher: {
              "@type": "LocalBusiness",
              name: "Car Keys Stockport",
              url: "https://carkeysinstockport.co.uk",
              logo: {
                "@type": "ImageObject",
                url: "https://carkeysinstockport.co.uk/favicon-192.png",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://carkeysinstockport.co.uk/blog/cheap-locksmith-denton-24-hours",
            },
          }),
        }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />

      <main className="max-w-5xl mx-auto p-6">

        <h1 className="text-4xl font-bold mb-4">
          Cheap Locksmith Denton 24 Hours — Auto, Car &amp; Van Services
        </h1>

        {/* Author block — E-E-A-T */}
        <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-200">
          <Image
            src="/images/vikki-heaton-auto-locksmith-stockport.jpg"
            alt="Vikki Heaton — Auto Locksmith"
            width={48}
            height={48}
            className="rounded-full object-cover ring-2 ring-orange-400 flex-shrink-0"
          />
          <div>
            <p className="font-semibold text-sm">
              Written by{" "}
              <a
                href="https://www.facebook.com/vikki.heaton.5"
                target="_blank"
                rel="noopener noreferrer me author"
                className="text-orange-600 hover:underline"
              >
                Vikki Heaton
              </a>
            </p>
            <p className="text-gray-500 text-xs">Auto Locksmith &amp; Owner, Car Keys Stockport</p>
          </div>
        </div>

        {/* Intro */}
        <section className="mb-8">
          <p className="text-lg leading-relaxed">
            Locked out in Denton at 2am? Lost your car keys near Crown Point? Whether it&apos;s a car lockout,
            a van key replacement, or a smart key programming job, <strong>Car Keys Stockport</strong> is your
            local <strong>cheap 24 hour locksmith in Denton SK14</strong>. We cover the full SK14 area with a
            mobile auto, car and van locksmith service available day and night — including weekends and bank
            holidays. No call-out fee. Fixed price agreed before work starts. Call{" "}
            <strong>07309903243</strong> any time and we aim to reach you within 20 minutes.
          </p>
        </section>

        {/* H2 #1 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            What Does a 24 Hour Auto Locksmith in Denton Actually Cost?
          </h2>
          <p className="leading-relaxed mb-4">
            One of the first things people ask is: how much will this cost me? At Car Keys Stockport, we believe
            in transparent, upfront pricing with no nasty surprises. There is no call-out fee for any job in
            Denton SK14 — ever. Before we start any work, you receive a fixed price quote by phone.
          </p>
          <p className="leading-relaxed mb-4">
            The actual cost varies depending on what you need. A basic car key cut-and-programme for a common
            Ford or Vauxhall is different from programming a BMW smart key or replacing a van transponder. A
            simple{" "}
            <Link href="/services/lockout-assistance" className="text-blue-600 hover:underline">
              car lockout
            </Link>{" "}
            will cost less than a full{" "}
            <Link href="/services/car-key-replacement" className="text-blue-600 hover:underline">
              car key replacement
            </Link>
            . Whatever your situation, we promise a cheap locksmith price for Denton — competitive, honest, and
            agreed upfront.
          </p>
          <p className="leading-relaxed">
            Avoid calling national booking lines that add a hefty margin before passing you to a local
            contractor. When you call us directly, you speak to the locksmith, get a real price, and we come
            straight to you in Denton SK14.
          </p>
        </section>

        {/* H2 #2 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Car Locksmith vs Van Locksmith in Denton — What&apos;s the Difference?
          </h2>
          <p className="leading-relaxed mb-4">
            Whether you need a car locksmith or a van locksmith in Denton, the answer is the same: call Car
            Keys Stockport. We cover both, with exactly the same fast mobile service and 20 minute response
            time across SK14.
          </p>
          <p className="leading-relaxed mb-4">
            Car lockouts and car key replacement cover everything from standard hatchbacks and saloons to
            prestige vehicles with advanced security systems. Van lockout assistance in Denton covers
            commercial vans, light goods vehicles, and all makes — Ford Transit, Mercedes Sprinter, Vauxhall
            Vivaro and more.{" "}
            <Link href="/services/van-lockout" className="text-blue-600 hover:underline">
              Van key replacement
            </Link>{" "}
            is often more specialist, but we carry the equipment to handle it on-site in Denton.
          </p>
          <p className="leading-relaxed">
            The process is the same for both: call 07309903243, tell us your vehicle make and model, get a
            fixed price, and we come to you. No towing required. No garage wait. View our full{" "}
            <Link href="/areas/stockport/denton" className="text-blue-600 hover:underline">
              Denton locksmith page
            </Link>{" "}
            for the complete service list.
          </p>
        </section>

        {/* CTA box — placed after second H2 */}
        <section className="mb-8 rounded-lg border border-orange-400 bg-orange-50 p-6">
          <p className="text-lg font-semibold mb-2">
            Locked out in Denton? Need a car key or van lockout right now?
          </p>
          <p className="mb-4">
            Call <strong>07309903243</strong> — available 24/7 in Denton SK14. 20 minute response. No
            call-out fee.
          </p>
          <Link
            href="/areas/stockport/denton"
            className="inline-block rounded bg-orange-500 px-5 py-2 font-semibold text-white hover:bg-orange-600 transition-colors"
          >
            View Denton Locksmith Page
          </Link>
        </section>

        {/* H2 #3 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            How to Find a Cheap Locksmith in Denton Without Getting Ripped Off
          </h2>
          <p className="leading-relaxed mb-4">
            Not all cheap locksmith prices are genuine. Here&apos;s how to protect yourself when you need an{" "}
            <Link href="/services/emergency-service" className="text-blue-600 hover:underline">
              emergency locksmith in Denton
            </Link>{" "}
            at short notice:
          </p>
          <ul className="list-disc list-inside space-y-2 leading-relaxed mb-4">
            <li>
              <strong>Always ask for a fixed price upfront</strong> — before anyone touches your vehicle. A
              reputable cheap locksmith in Denton will give you a firm quote over the phone.
            </li>
            <li>
              <strong>Avoid national call centres</strong> — they often advertise low prices but add fees once
              the job is done. You want to speak directly to your locksmith, not a booking agent.
            </li>
            <li>
              <strong>Check they are insured</strong> — Car Keys Stockport is fully insured. Always ask for
              proof of insurance before allowing work to begin.
            </li>
            <li>
              <strong>Use a local Denton auto locksmith specialist</strong> — local means faster arrival,
              local knowledge of SK14, and no middleman markup.
            </li>
          </ul>
          <p className="leading-relaxed">
            Car Keys Stockport ticks every box. We are a genuine local, cheap, 24 hour locksmith in Denton —
            not a call centre redirect. Call 07309903243 and speak directly to us.
          </p>
        </section>

        {/* H2 #4 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Why Local Beats a National Call Centre Every Time
          </h2>
          <p className="leading-relaxed mb-4">
            When you call a national locksmith number, you are usually speaking to someone in a call centre
            who has no idea where Ashton Road is, or whether Hyde Road is blocked at that time of night. They
            then relay your details to a subcontractor — and your &quot;cheap locksmith Denton&quot; quote
            suddenly grows.
          </p>
          <p className="leading-relaxed mb-4">
            Car Keys Stockport is different. We are a local mobile auto locksmith based in Stockport. We know
            the roads around Crown Point Retail Park, we know the quickest route to Denton town centre at
            midnight, and we know that a customer on Hyde Road needs us there fast. That local knowledge means
            a genuine 20 minute response time — not an estimate.
          </p>
          <p className="leading-relaxed">
            When you call <strong>07309903243</strong>, you speak directly to the person coming to help you.
            No call centre. No re-route. Just a fast, cheap auto locksmith heading to your location in Denton
            SK14.
          </p>
        </section>

        {/* H2 #5 — CTA section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Call a Cheap 24 Hour Locksmith in Denton Now
          </h2>
          <p className="leading-relaxed mb-4">
            Car Keys Stockport provides a fully mobile, cheap 24 hour locksmith service in Denton SK14 with a
            20 minute response time. Whether you need car key replacement, a van lockout, or emergency
            locksmith help in the middle of the night — we are on call right now.
          </p>
          <ul className="list-disc list-inside space-y-1 mb-4 leading-relaxed">
            <li>Available 24/7 including bank holidays</li>
            <li>20 minute response across Denton SK14</li>
            <li>No call-out fee — ever</li>
            <li>Fixed price given before work starts</li>
            <li>All car and van makes and models covered</li>
          </ul>
          <p className="leading-relaxed mb-4">
            For full details of our services in the area, visit our{" "}
            <Link href="/areas/stockport/denton" className="text-blue-600 hover:underline">
              Denton locksmith page
            </Link>
            . Or for specific services see{" "}
            <Link href="/services/lockout-assistance" className="text-blue-600 hover:underline">
              lockout assistance
            </Link>
            ,{" "}
            <Link href="/services/van-lockout" className="text-blue-600 hover:underline">
              van lockout
            </Link>
            , and{" "}
            <Link href="/services/car-key-replacement" className="text-blue-600 hover:underline">
              car key replacement
            </Link>
            .
          </p>
          <p className="text-lg font-semibold">
            Call now:{" "}
            <a href="tel:+447309903243" className="text-orange-600 hover:underline">
              07309903243
            </a>{" "}
            — we&apos;re ready to help right now, 24 hours a day.
          </p>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqItems.map((item, i) => (
              <div key={i}>
                <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
                <p className="leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

      </main>
    </>
  )
}
