// components/seo/RelatedBrandsSection.tsx
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { carBrandsData } from "@/carKey/data/carBrands"

interface RelatedBrandsSectionProps {
  relatedBrands: string[]
  currentSlug: string
}

function difficultyBadge(level: "Standard" | "Advanced" | "Specialist") {
  const base = "text-xs px-2 py-0.5 rounded-full font-medium border"
  if (level === "Standard")
    return `${base} bg-green-900/40 text-green-400 border-green-700`
  if (level === "Advanced")
    return `${base} bg-yellow-900/40 text-yellow-400 border-yellow-700`
  return `${base} bg-red-900/40 text-red-400 border-red-700`
}

export default function RelatedBrandsSection({
  relatedBrands,
  currentSlug,
}: RelatedBrandsSectionProps) {
  const related = relatedBrands
    .map((rb) =>
      carBrandsData.find(
        (b) =>
          b.slug === rb ||
          b.brand.toLowerCase() === rb.toLowerCase() ||
          b.slug === rb.toLowerCase().replace(/[\s_]+/g, "-")
      )
    )
    .filter(
      (b): b is NonNullable<typeof b> => !!b && b.slug !== currentSlug
    )
    .slice(0, 4)

  if (!related.length) return null

  return (
    <section
      className="section-padding bg-slate-800"
      aria-labelledby="related-brands-heading"
    >
      <div className="container-custom">
        <h2
          id="related-brands-heading"
          className="text-2xl font-bold mb-2 text-center"
        >
          Other Car Makes We Cover in Stockport
        </h2>
        <p className="text-gray-400 text-center mb-8 text-sm">
          We programme keys for all related makes — same mobile service, same day.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {related.map((brand) => (
            <Link
              key={brand.slug}
              href={`/cars/${brand.slug}`}
              className="card p-5 hover:bg-slate-700 transition-colors group"
              aria-label={`${brand.brand} car key replacement Stockport`}
              title={`${brand.brand} key replacement — mobile locksmith Stockport`}
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-bold text-white group-hover:text-orange-400 transition-colors leading-tight">
                  {brand.brand}
                </h3>
                <ChevronRight
                  className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                />
              </div>
              <p className="text-gray-400 text-xs mb-3">
                {brand.popularModels.slice(0, 3).join(", ")} &amp; more
              </p>
              <div className="flex items-center justify-between">
                <span className="text-gray-500 text-xs">
                  {brand.popularModels.length}+ models
                </span>
                <span className={difficultyBadge(brand.programmingDifficulty)}>
                  {brand.programmingDifficulty}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
