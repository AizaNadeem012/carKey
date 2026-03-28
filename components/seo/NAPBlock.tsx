// components/seo/NAPBlock.tsx

const PHONE_DISPLAY = "07309903243"
const PHONE_HREF = "tel:+447309903243"
const SITE_EMAIL = "info@carkeysinstockport.co.uk"

export default function NAPBlock() {
  return (
    <div
      itemScope
      itemType="https://schema.org/LocalBusiness"
      className="text-gray-500 text-xs py-6"
    >
      {/* Hidden structured data */}
      <link itemProp="url" href="https://carkeysinstockport.co.uk" />
      <meta itemProp="openingHours" content="Mo-Su 00:00-23:59" />
      <meta itemProp="priceRange" content="££" />

      {/* Visible NAP content */}
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-center md:gap-6 gap-2 border-t border-slate-700 pt-6">
          {/* Business name */}
          <span
            itemProp="name"
            className="font-semibold text-gray-400 whitespace-nowrap"
          >
            Car Keys in Stockport
          </span>

          <span className="hidden md:inline text-slate-600">·</span>

          {/* Phone */}
          <a
            href={PHONE_HREF}
            itemProp="telephone"
            className="text-orange-400 hover:text-orange-300 transition-colors font-medium whitespace-nowrap"
            aria-label="Call Car Keys in Stockport"
          >
            {PHONE_DISPLAY}
          </a>

          <span className="hidden md:inline text-slate-600">·</span>

          {/* Email */}
          <a
            href={`mailto:${SITE_EMAIL}`}
            className="text-orange-400 hover:text-orange-300 transition-colors whitespace-nowrap"
            aria-label="Email Car Keys in Stockport"
          >
            {SITE_EMAIL}
          </a>

          <span className="hidden md:inline text-slate-600">·</span>

          {/* Address */}
          <address
            itemProp="address"
            itemScope
            itemType="https://schema.org/PostalAddress"
            className="not-italic text-gray-500"
          >
            <span itemProp="addressLocality">Stockport</span>
            {", "}
            <span itemProp="addressRegion">Greater Manchester</span>
            {", "}
            <span itemProp="postalCode">SK1</span>
            {" "}
            <span itemProp="addressCountry" className="sr-only">
              GB
            </span>
          </address>

          <span className="hidden md:inline text-slate-600">·</span>

          {/* Founder */}
          <span
            itemProp="founder"
            itemScope
            itemType="https://schema.org/Person"
            className="text-gray-500 whitespace-nowrap"
          >
            Founded by{" "}
            <span itemProp="name" className="text-gray-400 font-medium">
              Vikki Heaton
            </span>
          </span>

          <span className="hidden md:inline text-slate-600">·</span>

          {/* Hours */}
          <span className="text-gray-500 whitespace-nowrap">Open 24/7</span>
        </div>
      </div>
    </div>
  )
}
