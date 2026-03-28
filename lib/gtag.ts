export const GA_MEASUREMENT_ID = "G-FY3T0KFEJQ"

// Extend Window so TypeScript knows about gtag
declare global {
  interface Window {
    gtag: (
      command: "config" | "event" | "js" | "set",
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void
    dataLayer: unknown[]
  }
}

/** Fire a page_view hit — called on every SPA route change */
export const pageview = (url: string) => {
  if (typeof window === "undefined" || !window.gtag) return
  window.gtag("config", GA_MEASUREMENT_ID, { page_path: url })
}

type GtagEvent = {
  action: string
  category: string
  label?: string
  value?: number
}

/** Generic GA4 event wrapper */
export const event = ({ action, category, label, value }: GtagEvent) => {
  if (typeof window === "undefined" || !window.gtag) return
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  })
}

// ─── Site-specific convenience helpers ───────────────────────────────────────

/** Track a phone number click. Pass the UI location, e.g. "hero", "header", "footer" */
export const trackPhoneClick = (location: string) =>
  event({ action: "phone_click", category: "Contact", label: location })

/** Track a "Get Free Quote" button click. Pass the UI location. */
export const trackQuoteClick = (location: string) =>
  event({ action: "quote_click", category: "Contact", label: location })

/** Track a successful contact form submission. Pass the selected service value. */
export const trackFormSubmit = (service?: string) =>
  event({ action: "form_submit", category: "Contact", label: service || "General" })
