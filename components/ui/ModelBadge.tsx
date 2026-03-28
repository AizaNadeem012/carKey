// components/ui/ModelBadge.tsx

interface ModelBadgeProps {
  brandName: string
  model: string
}

export default function ModelBadge({ brandName, model }: ModelBadgeProps) {
  return (
    <span className="bg-slate-700 text-white px-4 py-2 rounded-full text-sm font-medium border border-slate-600 hover:border-orange-400 transition-colors inline-block">
      {brandName} {model}
    </span>
  )
}
