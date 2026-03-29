// components/ui/StickyCallBar.tsx
"use client"

import { useEffect, useState } from "react"

const PHONE_DISPLAY = "07309903243"
const PHONE_HREF = "tel:+447309903243"
const SCROLL_THRESHOLD = 300

export default function StickyCallBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > SCROLL_THRESHOLD)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[9999] lg:hidden transition-transform duration-300 ease-in-out ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!visible}
    >
      <a
        href={PHONE_HREF}
        className="flex items-center justify-center gap-2 w-full h-14 bg-[#FFD700] text-[#0B1B2B] font-bold text-base"
        aria-label="Call Vikki Heaton Ã¢â‚¬â€ free quote, fast response"
      >
        <span aria-hidden="true">Ã°Å¸â€œÅ¾</span>
        <span>Call Vikki Ã¢â‚¬â€ Free Quote, Fast Response</span>
        <span className="ml-1 text-sm opacity-80">{PHONE_DISPLAY}</span>
      </a>
    </div>
  )
}
