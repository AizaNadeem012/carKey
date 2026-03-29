
// app/layout.tsx

import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import {
  Phone,
  Key,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  MapPin,
  Clock,
} from "lucide-react"

import Script from "next/script"
import "./globals.css"
import MobileNav from "./components/mobile-nav"
import PageViewTracker from "./components/google-analytics"
import { GA_MEASUREMENT_ID } from "@/lib/gtag"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://carkeysinstockport.co.uk"),
  title: {
    default: "Car Keys Stockport | Vikki Heaton Auto Locksmith",
    template: "%s | Car Keys Stockport",
  },
  description:
    "Vikki Heaton — trusted female auto locksmith in Stockport. Car key replacement, van lockout & emergency locksmith services 24/7. No call-out fee. Call 07309903243.",
  keywords: [
    "car key replacement",
    "Stockport",
    "auto locksmith",
    "car keys",
    "key programming",
    "lockout service",
  ],
  authors: [{ name: "Car Keys in Stockport" }],
  creator: "Car Keys in Stockport",
  publisher: "Car Keys in Stockport",

  // Favicon setup
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },

  manifest: "/manifest.json",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://carkeysinstockport.co.uk",
    siteName: "Car Keys Stockport",
    title: "Car Keys Stockport | Vikki Heaton Auto Locksmith",
    description:
      "Female-owned auto locksmith in Stockport. Car key replacement, van lockout & 24/7 emergency service. No call-out fee.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vikki Heaton — Female Auto Locksmith Stockport | Car Keys Stockport",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Car Keys Stockport | Vikki Heaton Auto Locksmith",
    description:
      "Female-owned auto locksmith in Stockport. 24/7 car key replacement & lockout service.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />

        {/* Brand colour in browser chrome — mobile Safari/Chrome address bar */}
        <meta name="theme-color" content="#f97316" />

        {/* Windows Start tile */}
        <meta name="msapplication-TileColor" content="#f97316" />
        <meta name="msapplication-TileImage" content="/favicon-192.png" />

        {/* Safari pinned tab — uses SVG + brand colour */}
        <link rel="mask-icon" href="/favicon.svg" color="#f97316" />

        {/* Preload hero image — critical for LCP score */}
        <link
          rel="preload"
          as="image"
          href="/images/vikki-heaton-auto-locksmith-stockport.jpg"
          fetchPriority="high"
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {/* GA4 SPA page-view tracker — fires on every client-side route change */}
        <PageViewTracker />

        {/* Sticky Call Bar - Mobile */}
        <div className="fixed bottom-0 left-0 right-0 bg-blue-600 text-white p-3 z-50 md:hidden">
          <a
            href="tel:07309903243"
            className="flex items-center justify-center gap-2 font-bold text-sm sm:text-base"
          >
            <Phone className="w-5 h-5 flex-shrink-0" />
            <span>Call Now: 07309903243</span>
          </a>
        </div>

        {/* Header */}
        <header className="bg-slate-900 backdrop-blur-sm fixed w-full z-40 border-b border-white/10">
          <div className="container-custom">
            <div className="flex items-center justify-between h-16 gap-4">
              <Link href="/" className="flex items-center gap-3">
                <Image
                  src="/images/vikki-heaton-auto-locksmith-stockport.jpg"
                  alt="Vikki Heaton — Auto Locksmith Stockport"
                  title="Car Keys Stockport | Vikki Heaton Auto Locksmith"
                  width={44}
                  height={44}
                  priority={true}
                  quality={90}
                  className="rounded-full object-cover ring-2 ring-white"
                />
                <span className="font-bold text-white text-sm leading-tight">
                  Car Keys<br />Stockport
                </span>
              </Link>

              <nav className="hidden md:flex items-center space-x-8">
                <Link href="/" className="text-white hover:text-orange-400 transition-colors">
                  Home
                </Link>
                <Link
                  href="/services"
                  className="text-white hover:text-orange-400 transition-colors"
                >
                  Services
                </Link>
                <Link
                  href="/areas/stockport"
                  className="text-white hover:text-orange-400 transition-colors"
                >
                  Areas
                </Link>
                <Link
                  href="/about"
                  className="text-white hover:text-orange-400 transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-white hover:text-orange-400 transition-colors"
                >
                  Contact
                </Link>
                <Link
                  href="/admin/login"
                  className="text-white/50 hover:text-white transition-colors text-sm flex items-center gap-1"
                  title="Admin Portal"
                >
                  ðŸ”’ Admin
                </Link>
              </nav>

              <a
                href="tel:07309903243"
                className="btn-primary hidden md:flex items-center gap-2 flex-shrink-0"
              >
                <Phone className="w-4 h-4" />
                07309903243
              </a>

              <MobileNav />
            </div>
          </div>
        </header>

        {children}

        {/* Footer */}
        <footer className="bg-slate-900 border-t border-slate-700 pb-20 md:pb-0">
          <div className="container-custom py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Company Info */}
              <div>
                <Link href="/" className="flex items-center gap-2 text-white mb-4">
                  <Key className="w-7 h-7 text-orange-400 flex-shrink-0" />
                  <span>
                    <span className="text-xl sm:text-2xl font-bold block">Car Keys</span>
                    <span className="text-lg sm:text-2xl font-semibold text-gray-300">Stockport</span>
                  </span>
                </Link>
                <p className="text-gray-400 mb-4 text-xs sm:text-sm leading-relaxed">
                  Your trusted 24/7 automotive locksmith in Stockport and Greater Manchester. Fast, reliable, and
                  professional car key replacement, programming, and lockout assistance.
                </p>
                <div className="flex items-center gap-2 text-gray-400 mb-2">
                  <MapPin className="w-4 h-4 text-orange-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">Stockport, Greater Manchester</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Clock className="w-4 h-4 text-orange-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">Open 24/7 for Emergencies</span>
                </div>
              </div>

              {/* Services */}
              <div>
                <h4 className="font-bold text-white mb-4 text-base sm:text-lg">Our Services</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link
                      href="/services/car-key-replacement"
                      className="hover:text-orange-400 transition-colors text-xs sm:text-sm"
                    >
                      Car Key Replacement
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/auto-keys-programming"
                      className="hover:text-orange-400 transition-colors text-xs sm:text-sm"
                    >
                      Key Programming
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/lockout-assistance"
                      className="hover:text-orange-400 transition-colors text-xs sm:text-sm"
                    >
                      Lockout Assistance
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/ignition-repair" className="hover:text-orange-400 transition-colors text-xs sm:text-sm">
                      Ignition Repair
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/emergency-service"
                      className="hover:text-orange-400 transition-colors text-xs sm:text-sm"
                    >
                      Emergency Service
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-bold text-white mb-4 text-base sm:text-lg">Quick Links</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link href="/about" className="hover:text-orange-400 transition-colors text-xs sm:text-sm">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-orange-400 transition-colors text-xs sm:text-sm">
                      Get a Free Quote
                    </Link>
                  </li>
                  <li>
                    <Link href="/areas/stockport" className="hover:text-orange-400 transition-colors text-xs sm:text-sm">
                      Areas We Serve
                    </Link>
                  </li>
                  <li>
                    <Link href="/testimonials" className="hover:text-orange-400 transition-colors text-xs sm:text-sm">
                      Customer Reviews
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq" className="hover:text-orange-400 transition-colors text-xs sm:text-sm">
                      FAQs
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact & Social */}
              <div>
                <h4 className="font-bold text-white mb-4 text-base sm:text-lg">Contact Us</h4>
                <div className="space-y-2 text-gray-400 mb-6">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-orange-400 flex-shrink-0" />
                    <a href="tel:07309903243" className="hover:text-orange-400 transition-colors text-xs sm:text-sm">
                      07309903243
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Link
                      href="mailto:info@carkeysinstockport.co.uk"
                      className="hover:text-orange-400 transition-colors text-xs sm:text-sm break-all"
                    >
                      info@carkeysinstockport.co.uk
                    </Link>
                  </div>
                </div>

                <h4 className="font-bold text-white mb-3 text-base sm:text-lg">Follow Us</h4>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/carkeysinstockport"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-orange-400 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.instagram.com/carkeysinstockport"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-orange-400 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href="https://twitter.com/carkeysinstockport"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-orange-400 transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/carkeysinstockport"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-orange-400 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Verified Author Block — E-E-A-T signal */}
            <div className="border-t border-slate-700 mt-8 pt-8 mb-6 flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <Image
                src="/images/vikki-heaton-auto-locksmith-stockport.jpg"
                alt="Vikki Heaton — Auto Locksmith Stockport"
                width={64}
                height={64}
                className="rounded-full object-cover ring-2 ring-orange-400 flex-shrink-0"
              />
              <div>
                <p className="text-white font-semibold text-sm">Vikki Heaton</p>
                <p className="text-gray-400 text-xs mb-1">Auto Locksmith &amp; Business Owner — Car Keys Stockport</p>
                <p className="text-gray-400 text-xs leading-relaxed max-w-xl">
                  Vikki is a fully insured, female auto locksmith based in Stockport, serving customers across Greater Manchester since 2016. She personally handles every job — no subcontractors.
                </p>
                <a
                  href="https://www.facebook.com/vikki.heaton.5"
                  target="_blank"
                  rel="noopener noreferrer me"
                  className="text-orange-400 hover:text-orange-300 text-xs mt-1 inline-block transition-colors"
                >
                  Follow Vikki on Facebook
                </a>
              </div>
            </div>

            <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
              <p className="text-gray-400 text-xs sm:text-sm">
                © {new Date().getFullYear()} Car Keys Stockport. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center gap-x-4 sm:gap-x-6 gap-y-2 text-gray-400 text-xs sm:text-sm">
                <Link href="/privacy-policy" className="hover:text-orange-400 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-orange-400 transition-colors">
                  Terms of Service
                </Link>
                <Link href="/sitemap.xml" className="hover:text-orange-400 transition-colors">
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </footer>

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "Locksmith"],
              "@id": "https://carkeysinstockport.co.uk/#business",
              name: "Car Keys in Stockport",
              url: "https://carkeysinstockport.co.uk",
              telephone: "+447309903243",
              email: "info@carkeysinstockport.co.uk",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Stockport",
                addressRegion: "Greater Manchester",
                postalCode: "SK1",
                addressCountry: "GB",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 53.4106,
                longitude: -2.1575,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
                opens: "00:00",
                closes: "23:59",
              },
              priceRange: "££",
              description:
                "24/7 car key replacement, programming and lockout assistance in Stockport and Greater Manchester. No call-out fee. Fully insured.",
              areaServed: [
                { "@type": "City", name: "Stockport" },
                { "@type": "City", name: "Cheadle" },
                { "@type": "City", name: "Bramhall" },
                { "@type": "City", name: "Hazel Grove" },
                { "@type": "City", name: "Manchester" },
                { "@type": "City", name: "Bury" },
                { "@type": "City", name: "Oldham" },
                { "@type": "City", name: "Rochdale" },
                { "@type": "City", name: "Salford" },
                { "@type": "City", name: "Tameside" },
                { "@type": "City", name: "Trafford" },
              ],
              sameAs: [
                "https://www.facebook.com/carkeysinstockport",
                "https://www.instagram.com/carkeysinstockport",
              ],
            }),
          }}
        />
        {/* Google Analytics 4 — loads after page is interactive, no render-blocking */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', { page_path: window.location.pathname });
            `,
          }}
        />
      </body>
    </html>
  )
}




