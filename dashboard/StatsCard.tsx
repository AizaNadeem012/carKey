import { TrendingUp, TrendingDown, LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  icon?: LucideIcon;
  index: number;
}

export function StatsCard({ 
  title, 
  value, 
  change, 
  icon: Icon,
  index 
}: StatsCardProps) {
  return (
    <div
      className="rounded-xl border border-red-200 bg-white p-5 shadow-sm hover:border-red-300 hover:shadow-md transition-all duration-300"
      style={{ animationDelay: `${index * 80}ms`, animationFillMode: "both" }}
    >
      <div className="flex items-center justify-between mb-3">
        <p className="text-sm font-medium text-gray-600">{title}</p>
        {Icon && <Icon className="h-5 w-5 text-red-600" />}
      </div>
      
      <div className="flex items-end justify-between">
        <p className="text-3xl font-bold text-gray-900 tracking-tight">
          {value}
        </p>
        <div className={`flex items-center gap-1 px-2 py-1 rounded text-xs font-medium ${
          change.includes('+') || change.includes('week') || !isNaN(parseFloat(change))
            ? 'bg-green-50 text-green-600'
            : 'bg-gray-50 text-gray-600'
        }`}>
          {change.includes('+') || change.includes('week') || !isNaN(parseFloat(change)) ? (
            <TrendingUp className="h-3 w-3" />
          ) : (
            <TrendingDown className="h-3 w-3" />
          )}
          <span>{change}</span>
        </div>
      </div>
    </div>
  );
}
