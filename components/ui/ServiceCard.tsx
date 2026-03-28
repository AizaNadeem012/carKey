// components/ui/ServiceCard.tsx
import { Phone } from "lucide-react"

const PHONE_HREF = "tel:+447309903243"

interface ServiceCardProps {
  name: string
  description: string
  price: string
  brandName: string
}

export default function ServiceCard({
  name,
  description,
  price,
  brandName,
}: ServiceCardProps) {
  return (
    <article className="card p-6 flex flex-col h-full">
      <div className="flex items-start justify-between mb-3 gap-2">
        <h3 className="font-bold text-white text-base leading-tight flex-1">
          {name}
        </h3>
        <span className="text-orange-400 font-bold text-lg whitespace-nowrap flex-shrink-0">
          {price}
        </span>
      </div>

      <p className="text-gray-300 text-sm leading-relaxed flex-1">
        {description}
      </p>

      <a
        href={PHONE_HREF}
        className="mt-4 btn-primary text-sm text-center flex items-center justify-center gap-2"
        aria-label={`Book ${name} for ${brandName}`}
      >
        <Phone className="w-4 h-4" aria-hidden="true" />
        Book Now
      </a>
    </article>
  )
}
