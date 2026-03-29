"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"
import { pageview } from "@/lib/gtag"

/**
 * Fires a GA4 page_view event every time the Next.js route changes.
 * Must be a Client Component because it uses usePathname + useEffect.
 * Rendered once in RootLayout so it covers every page automatically.
 */
export default function PageViewTracker() {
  const pathname = usePathname()

  useEffect(() => {
    pageview(pathname)
  }, [pathname])

  return null
}
