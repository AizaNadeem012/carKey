// components/ui/FAQAccordion.tsx
"use client"

import { useState, useRef, KeyboardEvent } from "react"
import { ChevronDown } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([])

  function toggle(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  function handleKeyDown(e: KeyboardEvent<HTMLButtonElement>, index: number) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      toggle(index)
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      const next = (index + 1) % items.length
      buttonRefs.current[next]?.focus()
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      const prev = (index - 1 + items.length) % items.length
      buttonRefs.current[prev]?.focus()
    } else if (e.key === "Home") {
      e.preventDefault()
      buttonRefs.current[0]?.focus()
    } else if (e.key === "End") {
      e.preventDefault()
      buttonRefs.current[items.length - 1]?.focus()
    }
  }

  return (
    <div className="space-y-3" role="list">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        const panelId = `faq-panel-${index}`
        const buttonId = `faq-btn-${index}`

        return (
          <div
            key={index}
            role="listitem"
            className="card overflow-hidden"
          >
            {/* Question button */}
            <button
              id={buttonId}
              ref={(el) => { buttonRefs.current[index] = el }}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-inset"
            >
              <h3 className="font-bold text-white text-sm sm:text-base leading-snug">
                {item.question}
              </h3>
              <ChevronDown
                className={`w-5 h-5 text-orange-400 flex-shrink-0 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </button>

            {/* Answer panel — CSS max-height transition, no CLS */}
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              style={{
                maxHeight: isOpen ? "600px" : "0px",
                overflow: "hidden",
                transition: "max-height 0.25s ease",
              }}
            >
              <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
