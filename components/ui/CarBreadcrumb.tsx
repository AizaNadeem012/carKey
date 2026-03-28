// components/ui/CarBreadcrumb.tsx
// Car-specific breadcrumb: Home → Cars → [Brand]
// Note: Named CarBreadcrumb to avoid conflict with /components/ui/breadcrumb.tsx (shadcn)
import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbItem {
  name: string
  href: string
}

interface CarBreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function CarBreadcrumb({ items }: CarBreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      role="navigation"
      className="bg-slate-800 border-b border-slate-700 py-3"
    >
      <div className="container-custom">
        <ol
          className="flex flex-wrap items-center gap-1 text-xs sm:text-sm text-gray-400 overflow-x-auto"
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          {items.map((item, index) => {
            const isLast = index === items.length - 1
            return (
              <li
                key={item.href}
                className="flex items-center gap-1 whitespace-nowrap"
                itemScope
                itemType="https://schema.org/ListItem"
                itemProp="itemListElement"
              >
                <meta itemProp="position" content={String(index + 1)} />
                {index === 0 ? (
                  <Link
                    href={item.href}
                    itemProp="item"
                    className="text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-1"
                    aria-label="Home"
                  >
                    <Home className="w-3.5 h-3.5" aria-hidden="true" />
                    <span itemProp="name" className="sr-only">
                      {item.name}
                    </span>
                  </Link>
                ) : isLast ? (
                  <span
                    itemProp="name"
                    aria-current="page"
                    className="text-orange-400 font-semibold"
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    itemProp="item"
                    className="text-gray-400 hover:text-orange-400 transition-colors"
                  >
                    <span itemProp="name">{item.name}</span>
                  </Link>
                )}
                {!isLast && (
                  <ChevronRight
                    className="w-3.5 h-3.5 text-slate-600 flex-shrink-0"
                    aria-hidden="true"
                  />
                )}
              </li>
            )
          })}
        </ol>
      </div>
    </nav>
  )
}
