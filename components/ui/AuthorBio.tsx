// components/ui/AuthorBio.tsx
import Link from "next/link"
import { CheckCircle } from "lucide-react"

const trustPoints = [
  "Fully insured & DBS checked",
  "10+ years hands-on experience",
  "All major makes & models covered",
]

export default function AuthorBio() {
  return (
    <div
      className="w-full max-w-lg"
      itemScope
      itemType="https://schema.org/Person"
    >
      {/* Hidden microdata */}
      <link
        itemProp="url"
        href="https://carkeysinstockport.co.uk/about"
      />
      <meta itemProp="jobTitle" content="Auto Locksmith Expert" />

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        {/* Avatar */}
        <div className="w-14 h-14 rounded-full bg-[#0B1B2B] flex items-center justify-center flex-shrink-0 text-[#FFD700] font-bold text-xl select-none">
          VH
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <p className="text-xs text-gray-500 mb-0.5">Written &amp; Verified by</p>
          <p
            className="font-bold text-[#0B1B2B] text-base leading-tight"
            itemProp="name"
          >
            Vikki Heaton
          </p>
          <p className="text-sm text-gray-600 mb-2">
            Auto Locksmith Expert Ã‚Â· Stockport
          </p>

          {/* Trust ticks */}
          <ul className="space-y-0.5">
            {trustPoints.map((point) => (
              <li
                key={point}
                className="flex items-center gap-1.5 text-xs text-green-600 font-medium"
              >
                <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>

          {/* Profile link */}
          <Link
            href="/about"
            itemProp="url"
            className="inline-block mt-2 text-xs text-[#0B1B2B] underline hover:text-yellow-500 transition-colors"
            aria-label="View Vikki Heaton's full profile"
          >
            View full profile Ã¢â€ â€™
          </Link>
        </div>
      </div>
    </div>
  )
}
