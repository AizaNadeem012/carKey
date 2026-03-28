// components/ui/HeroCallButton.tsx

const PHONE_DISPLAY = "07309903243"
const PHONE_HREF = "tel:+447309903243"

interface HeroCallButtonProps {
  label?: string
  ariaLabel?: string
}

export default function HeroCallButton({
  label = "📞 Call Now — Free Quote",
  ariaLabel = "Call Vikki Heaton — free quote, fast response",
}: HeroCallButtonProps) {
  return (
    <div className="flex flex-col items-start gap-2">
      <a
        href={PHONE_HREF}
        aria-label={ariaLabel}
        className="
          inline-flex items-center gap-2
          bg-[#FFD700] text-[#0B1B2B]
          font-bold text-lg px-8 py-4 rounded-lg
          shadow-lg hover:shadow-xl
          hover:bg-yellow-400
          transition-all duration-200
          animate-pulse hover:animate-none
          focus:outline-none focus:ring-4 focus:ring-yellow-400/50
        "
      >
        {label}
        <span className="text-sm font-normal opacity-80">{PHONE_DISPLAY}</span>
      </a>
      <p className="text-sm text-gray-400 flex items-center gap-1">
        <span aria-hidden="true">⚡</span>
        Vikki responds in 30 minutes on average
      </p>
    </div>
  )
}
