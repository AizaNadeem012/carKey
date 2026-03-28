"use client"

import { TrendingUp, Activity, Target, Award, Clock, Zap } from "lucide-react"
import { Badge } from "@/carKey/components/ui/badge"

interface PerformanceMeterProps {
  totalOrders: number
  completedOrders: number
  totalRevenue: number
  averageOrderValue: number
}

export function PerformanceMeter({ 
  totalOrders, 
  completedOrders, 
  totalRevenue,
  averageOrderValue 
}: PerformanceMeterProps) {
  // Calculate performance score (0-100)
  const calculateHealthScore = () => {
    let score = 0
    
    // Completion rate (40 points)
    const completionRate = totalOrders > 0 ? (completedOrders / totalOrders) * 100 : 0
    score += Math.min(completionRate * 0.4, 40)
    
    // Revenue performance (30 points) - assuming £5000 target
    const revenueScore = Math.min((totalRevenue / 5000) * 30, 30)
    score += revenueScore
    
    // Order volume (30 points) - assuming 20 orders target
    const orderScore = Math.min((totalOrders / 20) * 30, 30)
    score += orderScore
    
    return Math.min(Math.round(score), 100)
  }

  const healthScore = calculateHealthScore()
  
  const getHealthStatus = () => {
    if (healthScore >= 80) return { label: 'Excellent', color: 'text-green-500', bgColor: 'bg-green-500/10', borderColor: 'border-green-500/30' }
    if (healthScore >= 60) return { label: 'Good', color: 'text-blue-500', bgColor: 'bg-blue-500/10', borderColor: 'border-blue-500/30' }
    if (healthScore >= 40) return { label: 'Average', color: 'text-yellow-500', bgColor: 'bg-yellow-500/10', borderColor: 'border-yellow-500/30' }
    return { label: 'Needs Attention', color: 'text-red-500', bgColor: 'bg-red-500/10', borderColor: 'border-red-500/30' }
  }

  const healthStatus = getHealthStatus()

  return (
    <div className="glass-card p-6 relative overflow-hidden">
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${healthScore >= 80 ? 'from-green-500/5 to-emerald-500/5' : healthScore >= 60 ? 'from-blue-500/5 to-cyan-500/5' : 'from-orange-500/5 to-red-500/5'} transition-all`} />
      
      <div className="relative">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`p-3 rounded-xl ${healthStatus.bgColor}`}>
              <Activity className={`h-6 w-6 ${healthStatus.color}`} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground">Business Health Score</h3>
              <p className="text-xs text-muted-foreground">Real-time performance</p>
            </div>
          </div>
          <Badge className={`${healthStatus.bgColor} ${healthStatus.color} border ${healthStatus.borderColor}`}>
            {healthStatus.label}
          </Badge>
        </div>

        {/* Score Display */}
        <div className="flex items-end justify-between mb-4">
          <div>
            <div className="text-5xl font-bold text-foreground mb-1">{healthScore}</div>
            <div className="text-sm text-muted-foreground">out of 100</div>
          </div>
          <div className="text-right">
            <div className={`text-2xl font-bold ${healthStatus.color}`}>{healthScore}%</div>
            <div className="text-xs text-muted-foreground">performance</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="relative h-4 bg-muted rounded-full overflow-hidden mb-4">
          <div 
            className={`absolute left-0 top-0 h-full rounded-full transition-all duration-1000 ease-out ${
              healthScore >= 80 ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
              healthScore >= 60 ? 'bg-gradient-to-r from-blue-500 to-cyan-500' :
              healthScore >= 40 ? 'bg-gradient-to-r from-yellow-500 to-orange-500' :
              'bg-gradient-to-r from-red-500 to-pink-500'
            }`}
            style={{ width: `${healthScore}%` }}
          />
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-3 pt-4 border-t border-border/50">
          <div className="text-center">
            <div className="text-xs text-muted-foreground mb-1">Completion Rate</div>
            <div className="text-lg font-bold text-foreground">
              {totalOrders > 0 ? ((completedOrders / totalOrders) * 100).toFixed(0) : 0}%
            </div>
          </div>
          <div className="text-center border-l border-border/50">
            <div className="text-xs text-muted-foreground mb-1">Revenue Score</div>
            <div className="text-lg font-bold text-foreground">
              {Math.min((totalRevenue / 5000) * 100, 100).toFixed(0)}%
            </div>
          </div>
          <div className="text-center border-l border-border/50">
            <div className="text-xs text-muted-foreground mb-1">Volume Score</div>
            <div className="text-lg font-bold text-foreground">
              {Math.min((totalOrders / 20) * 100, 100).toFixed(0)}%
            </div>
          </div>
        </div>

        {/* Tips */}
        {healthScore < 60 && (
          <div className="mt-4 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
            <div className="flex items-start gap-2">
              <Zap className="h-4 w-4 text-yellow-500 mt-0.5" />
              <div className="text-xs text-yellow-600 dark:text-yellow-400">
                <strong>Tip:</strong> Focus on completing pending orders and increasing daily orders to improve your score!
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
