import Link from "next/link"
import { ChevronRight } from "lucide-react"
import Script from "next/script"
import { breadcrumbSchema } from "@/lib/schema"

interface BreadcrumbItem {
  name: string
  href: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const schemaItems = items.map((item) => ({
    name: item.name,
    url: item.href,
  }))

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema(schemaItems)),
        }}
      />
      <nav aria-label="Breadcrumb" className="section-padding bg-slate-800 border-b border-slate-700">
        <div className="container-custom">
          <ol className="flex flex-wrap items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-400 overflow-x-auto">
            {items.map((item, index) => (
              <li key={item.href} className="flex items-center gap-1 sm:gap-2 whitespace-nowrap">
                <Link
                  href={item.href}
                  className={index === items.length - 1 ? "text-orange-400 font-semibold" : "text-gray-400 hover:text-orange-400 transition-colors"}
                >
                  {item.name}
                </Link>
                {index < items.length - 1 && <ChevronRight className="w-3 sm:w-4 h-3 sm:h-4 text-gray-600 flex-shrink-0" />}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  )
}
