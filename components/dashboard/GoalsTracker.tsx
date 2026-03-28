"use client"

import { Target, TrendingUp, Award, Clock } from "lucide-react"
import { Badge } from "@/carKey/components/ui/badge"

interface GoalsTrackerProps {
  todayOrders: number
  weekOrders: number
  monthOrders: number
  todayRevenue: number
  weekRevenue: number
  monthRevenue: number
}

export function GoalsTracker({ 
  todayOrders, 
  weekOrders, 
  monthOrders,
  todayRevenue,
  weekRevenue,
  monthRevenue
}: GoalsTrackerProps) {
  // Set goals (you can customize these)
  const goals = {
    daily: { orders: 5, revenue: 750 },
    weekly: { orders: 25, revenue: 3750 },
    monthly: { orders: 100, revenue: 15000 }
  }

  const calculateProgress = (current: number, target: number) => {
    return Math.min(Math.round((current / target) * 100), 100)
  }

  const dailyProgress = calculateProgress(todayOrders, goals.daily.orders)
  const weeklyProgress = calculateProgress(weekOrders, goals.weekly.orders)
  const monthlyProgress = calculateProgress(monthOrders, goals.monthly.orders)

  const getProgressColor = (progress: number) => {
    if (progress >= 100) return 'from-green-500 to-emerald-500'
    if (progress >= 70) return 'from-blue-500 to-cyan-500'
    if (progress >= 40) return 'from-yellow-500 to-orange-500'
    return 'from-red-500 to-pink-500'
  }

  const getProgressStatus = (progress: number) => {
    if (progress >= 100) return { label: 'Goal Achieved!', color: 'text-green-500', bgColor: 'bg-green-500/10' }
    if (progress >= 70) return { label: 'On Track', color: 'text-blue-500', bgColor: 'bg-blue-500/10' }
    if (progress >= 40) return { label: 'In Progress', color: 'text-yellow-500', bgColor: 'bg-yellow-500/10' }
    return { label: 'Needs Focus', color: 'text-red-500', bgColor: 'bg-red-500/10' }
  }

  return (
    <div className="glass-card p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-primary/10 rounded-xl">
            <Target className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground">Today's Goals</h3>
            <p className="text-xs text-muted-foreground">Track your progress</p>
          </div>
        </div>
        <Badge variant="outline" className="border-primary/30 text-primary">
          <TrendingUp className="h-3 w-3 mr-1" />
          Real-time
        </Badge>
      </div>

      {/* Daily Goal */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium text-foreground">Today</span>
          </div>
          <div className="text-right">
            <span className={`text-sm font-bold ${getProgressStatus(dailyProgress).color}`}>
              {todayOrders} / {goals.daily.orders} orders
            </span>
            <span className="text-xs text-muted-foreground ml-2">
              £{todayRevenue.toLocaleString()} / £{goals.daily.revenue.toLocaleString()}
            </span>
          </div>
        </div>
        <div className="relative h-3 bg-muted rounded-full overflow-hidden">
          <div 
            className={`absolute left-0 top-0 h-full bg-gradient-to-r ${getProgressColor(dailyProgress)} transition-all duration-1000`}
            style={{ width: `${dailyProgress}%` }}
          />
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-xs text-muted-foreground">{dailyProgress}% complete</span>
          <span className={`text-xs font-medium ${getProgressStatus(dailyProgress).color}`}>
            {getProgressStatus(dailyProgress).label}
          </span>
        </div>
      </div>

      {/* Weekly Goal */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Award className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium text-foreground">This Week</span>
          </div>
          <div className="text-right">
            <span className={`text-sm font-bold ${getProgressStatus(weeklyProgress).color}`}>
              {weekOrders} / {goals.weekly.orders} orders
            </span>
          </div>
        </div>
        <div className="relative h-3 bg-muted rounded-full overflow-hidden">
          <div 
            className={`absolute left-0 top-0 h-full bg-gradient-to-r ${getProgressColor(weeklyProgress)} transition-all duration-1000`}
            style={{ width: `${weeklyProgress}%` }}
          />
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-xs text-muted-foreground">{weeklyProgress}% complete</span>
          <span className={`text-xs font-medium ${getProgressStatus(weeklyProgress).color}`}>
            {getProgressStatus(weeklyProgress).label}
          </span>
        </div>
      </div>

      {/* Monthly Goal */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium text-foreground">This Month</span>
          </div>
          <div className="text-right">
            <span className={`text-sm font-bold ${getProgressStatus(monthlyProgress).color}`}>
              {monthOrders} / {goals.monthly.orders} orders
            </span>
          </div>
        </div>
        <div className="relative h-3 bg-muted rounded-full overflow-hidden">
          <div 
            className={`absolute left-0 top-0 h-full bg-gradient-to-r ${getProgressColor(monthlyProgress)} transition-all duration-1000`}
            style={{ width: `${monthlyProgress}%` }}
          />
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-xs text-muted-foreground">{monthlyProgress}% complete</span>
          <span className={`text-xs font-medium ${getProgressStatus(monthlyProgress).color}`}>
            {getProgressStatus(monthlyProgress).label}
          </span>
        </div>
      </div>

      {/* Motivational Message */}
      <div className={`mt-6 p-4 rounded-xl ${getProgressStatus(dailyProgress).bgColor} border ${getProgressStatus(dailyProgress).color.replace('text-', 'border-')} /20`}>
        <p className={`text-sm font-semibold ${getProgressStatus(dailyProgress).color}`}>
          {dailyProgress >= 100 ? '🎉 Amazing! You\'ve crushed today\'s goal!' :
           dailyProgress >= 70 ? '🔥 Almost there! Keep pushing!' :
           dailyProgress >= 40 ? '💪 Good progress! Halfway there!' :
           '⚡ Time to focus! Let\'s get those orders!'}
        </p>
      </div>
    </div>
  )
}
