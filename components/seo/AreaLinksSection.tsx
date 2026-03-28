// components/seo/AreaLinksSection.tsx
import Link from "next/link"
import { MapPin } from "lucide-react"

const areas = [
  { name: "Stockport", href: "/areas/stockport" },
  { name: "Cheadle", href: "/areas/stockport/cheadle" },
  { name: "Bramhall", href: "/areas/stockport/bramhall" },
  { name: "Hazel Grove", href: "/areas/stockport/hazel-grove" },
  { name: "Marple", href: "/areas/stockport/marple" },
  { name: "Romiley", href: "/areas/stockport/romiley" },
  { name: "Bredbury", href: "/areas/stockport/bredbury" },
  { name: "Reddish", href: "/areas/stockport/reddish" },
  { name: "Edgeley", href: "/areas/stockport/edgeley" },
  { name: "Offerton", href: "/areas/stockport/offerton" },
  { name: "Davenport", href: "/areas/stockport/davenport" },
  { name: "Gatley", href: "/areas/stockport/gatley" },
  { name: "Heaton Mersey", href: "/areas/stockport/heaton-mersey" },
  { name: "Heaton Moor", href: "/areas/stockport/heaton-moor" },
  { name: "High Lane", href: "/areas/stockport/high-lane" },
  { name: "Portwood", href: "/areas/stockport/portwood" },
  { name: "Woodsmoor", href: "/areas/stockport/woodsmoor" },
  { name: "Stepping Hill", href: "/areas/stockport/stepping-hill" },
  { name: "Adswood", href: "/areas/stockport/adswood" },
  { name: "Brinnington", href: "/areas/stockport/brinnington" },
  { name: "Manchester", href: "/areas/stockport/manchester" },
  { name: "Bury", href: "/areas/stockport/bury" },
  { name: "Oldham", href: "/areas/stockport/oldham" },
  { name: "Rochdale", href: "/areas/stockport/rochdale" },
  { name: "Salford", href: "/areas/stockport/salford" },
  { name: "Tameside", href: "/areas/stockport/tameside" },
  { name: "Trafford", href: "/areas/stockport/trafford" },
  { name: "Denton", href: "/areas/stockport/denton" },
]

interface AreaLinksSectionProps {
  brandName?: string
}

export default function AreaLinksSection({ brandName }: AreaLinksSectionProps) {
  return (
    <section
      className="section-padding bg-slate-800"
      aria-labelledby="area-links-heading"
    >
      <div className="container-custom">
        <h2
          id="area-links-heading"
          className="text-2xl font-bold mb-2 text-center"
        >
          Car Key Replacement Near You in Greater Manchester
        </h2>
        <p className="text-gray-400 text-center mb-8 text-sm max-w-2xl mx-auto">
          {brandName
            ? `Mobile ${brandName} auto locksmith serving all of Stockport and Greater Manchester. Click your area for local service details.`
            : "Mobile auto locksmith serving all of Stockport and Greater Manchester. Click your area for local service details."}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2 max-w-5xl mx-auto">
          {areas.map((area) => (
            <Link
              key={area.href}
              href={area.href}
              title={`Car key replacement in ${area.name} — mobile auto locksmith`}
              className="flex items-center gap-1.5 text-sm text-gray-300 hover:text-orange-400 transition-colors group py-1.5"
            >
              <MapPin
                className="w-3.5 h-3.5 text-orange-400 flex-shrink-0 group-hover:text-orange-300"
                aria-hidden="true"
              />
              <span>Car Keys in {area.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
