"use client"

import { useEffect, useState } from "react"
import { StatsCard } from "@/dashboard/StatsCard"
import { RecentActivity } from "@/dashboard/RecentActivity"
import { PerformanceMeter } from "@/dashboard/PerformanceMeter"
import { GoalsTracker } from "@/dashboard/GoalsTracker"
import { UrgentOrdersAlert } from "@/dashboard/UrgentOrdersAlert"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, AreaChart, Area } from "recharts"
import { TrendingUp, TrendingDown, Clock, Calendar, Star, Zap, Award, DollarSign, ShoppingCart, CheckCircle, PoundSterling } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface Order {
  id: string
  timestamp: string
  firstName: string
  lastName: string
  services: string
  email: string
  address: string
  phoneNumber: string
  additionalDescription: string
  status: 'pending' | 'in_progress' | 'completed' | 'cancelled'
  amount: number
}

interface DashboardStats {
  totalOrders: number
  pendingOrders: number
  completedOrders: number
  inProgressOrders: number
  totalRevenue: number
  pendingRevenue: number
  todayOrders: number
  weekOrders: number
  monthOrders: number
  todayRevenue: number
  weekRevenue: number
  monthRevenue: number
  averageOrderValue: number
  completionRate: number
  topService: string
  busiestDay: string
}

export default function AdminDashboard() {
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState<DashboardStats>({
    totalOrders: 0,
    pendingOrders: 0,
    completedOrders: 0,
    inProgressOrders: 0,
    totalRevenue: 0,
    pendingRevenue: 0,
    todayOrders: 0,
    weekOrders: 0,
    monthOrders: 0,
    todayRevenue: 0,
    weekRevenue: 0,
    monthRevenue: 0,
    averageOrderValue: 0,
    completionRate: 0,
    topService: 'N/A',
    busiestDay: 'N/A'
  })

  useEffect(() => {
    // Fetch real orders from Google Sheets
    const fetchDashboardData = async () => {
      try {
        console.log('🔄 Fetching dashboard data...')
        const res = await fetch('/api/orders')
        const data = await res.json()
        const ordersList = data.orders || []
        
        console.log('📊 Received orders:', ordersList.length)
        setOrders(ordersList)
        
        // Calculate real-time statistics
        const totalOrders = ordersList.length
        const pendingOrders = ordersList.filter((o: Order) => o.status === 'pending').length
        const completedOrders = ordersList.filter((o: Order) => o.status === 'completed').length
        const inProgressOrders = ordersList.filter((o: Order) => o.status === 'in_progress').length
        
        // Calculate revenue based on services (£150 per service)
        const calculateOrderAmount = (order: Order) => {
          const serviceCount = order.services.split(',').filter(s => s.trim()).length
          return serviceCount * 150
        }
        
        const totalRevenue = ordersList.reduce((sum: number, order: Order) => sum + calculateOrderAmount(order), 0)
        const pendingRevenue = ordersList
          .filter((o: Order) => o.status === 'pending' || o.status === 'in_progress')
          .reduce((sum: number, order: Order) => sum + calculateOrderAmount(order), 0)
        
        // Time-based calculations
        const now = new Date()
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
        const weekAgo = new Date(today.getTime() - (7 * 24 * 60 * 60 * 1000))
        const monthAgo = new Date(today.getTime() - (30 * 24 * 60 * 60 * 1000))
        
        const todayOrders = ordersList.filter((o: Order) => new Date(o.timestamp) >= today).length
        const weekOrders = ordersList.filter((o: Order) => new Date(o.timestamp) >= weekAgo).length
        const monthOrders = ordersList.filter((o: Order) => new Date(o.timestamp) >= monthAgo).length
        
        const todayRevenue = ordersList
          .filter((o: Order) => new Date(o.timestamp) >= today)
          .reduce((sum: number, order: Order) => sum + calculateOrderAmount(order), 0)
        const weekRevenue = ordersList
          .filter((o: Order) => new Date(o.timestamp) >= weekAgo)
          .reduce((sum: number, order: Order) => sum + calculateOrderAmount(order), 0)
        const monthRevenue = ordersList
          .filter((o: Order) => new Date(o.timestamp) >= monthAgo)
          .reduce((sum: number, order: Order) => sum + calculateOrderAmount(order), 0)
        
        // Advanced metrics
        const averageOrderValue = totalOrders > 0 ? totalRevenue / totalOrders : 0
        const completionRate = totalOrders > 0 ? (completedOrders / totalOrders) * 100 : 0
        
        // Find top service
        const serviceCount: Record<string, number> = {}
        ordersList.forEach((order: Order) => {
          const services = order.services.split(',').map(s => s.trim())
          services.forEach(service => {
            serviceCount[service] = (serviceCount[service] || 0) + 1
          })
        })
        const topService = Object.entries(serviceCount).sort((a, b) => b[1] - a[1])[0]?.[0] || 'N/A'
        
        // Find busiest day
        const dayCount: Record<string, number> = {}
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        ordersList.forEach((order: Order) => {
          const dayIndex = new Date(order.timestamp).getDay()
          const dayName = days[dayIndex]
          dayCount[dayName] = (dayCount[dayName] || 0) + 1
        })
        const busiestDay = Object.entries(dayCount).sort((a, b) => b[1] - a[1])[0]?.[0] || 'N/A'
        
        const newStats = {
          totalOrders,
          pendingOrders,
          completedOrders,
          inProgressOrders,
          totalRevenue,
          pendingRevenue,
          todayOrders,
          weekOrders,
          monthOrders,
          todayRevenue,
          weekRevenue,
          monthRevenue,
          averageOrderValue,
          completionRate,
          topService,
          busiestDay
        }
        
        console.log('✅ Dashboard stats updated:', newStats)
        setStats(newStats)
        setLoading(false)
      } catch (err) {
        console.error('❌ Error fetching dashboard data:', err)
        setLoading(false)
      }
    }

    // Initial fetch
    fetchDashboardData()

    // Listen for order status changes (same tab)
    const handleOrderStatusChange = (event: CustomEvent) => {
      console.log('🎯 Order status changed event received:', event.detail)
      fetchDashboardData()
    }

    window.addEventListener('order-status-changed', handleOrderStatusChange as EventListener)

    // Listen for localStorage changes (cross-tab sync)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'orderStatusUpdate') {
        console.log('💾 localStorage change detected:', e.newValue)
        fetchDashboardData()
      }
    }

    window.addEventListener('storage', handleStorageChange)

    // Polling fallback - refresh every 5 seconds
    const pollInterval = setInterval(fetchDashboardData, 5000)

    // Cleanup
    return () => {
      window.removeEventListener('order-status-changed', handleOrderStatusChange as EventListener)
      window.removeEventListener('storage', handleStorageChange)
      clearInterval(pollInterval)
    }
  }, [])

  // Generate real-time chart data from orders
  const generateOrdersOverTime = () => {
    const monthData: Record<string, number> = {}
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    
    orders.forEach((order: Order) => {
      const date = new Date(order.timestamp)
      const monthKey = `${months[date.getMonth()]} ${date.getFullYear().toString().slice(-2)}`
      monthData[monthKey] = (monthData[monthKey] || 0) + 1
    })
    
    return Object.entries(monthData).map(([month, orders]) => ({ month, orders })).slice(-6)
  }

  const generateServiceDistribution = () => {
    const serviceCount: Record<string, number> = {}
    let totalServices = 0
    
    orders.forEach((order: Order) => {
      const services = order.services.split(',').map(s => s.trim()).filter(s => s)
      services.forEach(service => {
        serviceCount[service] = (serviceCount[service] || 0) + 1
        totalServices++
      })
    })
    
    const colors = ['#f43f5e', '#8b5cf6', '#10b981', '#f59e0b', '#3b82f6', '#ec4899', '#6366f1', '#14b8a6']
    
    return Object.entries(serviceCount)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6)
      .map(([name, value], index) => ({
        name,
        value: Math.round((value / totalServices) * 100),
        fill: colors[index % colors.length]
      }))
  }

  const generateMonthlyRevenue = () => {
    const revenueData: Record<string, number> = {}
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    
    orders.forEach((order: Order) => {
      const date = new Date(order.timestamp)
      const monthKey = `${months[date.getMonth()]} ${date.getFullYear().toString().slice(-2)}`
      const serviceCount = order.services.split(',').filter(s => s.trim()).length
      const amount = serviceCount * 150
      revenueData[monthKey] = (revenueData[monthKey] || 0) + amount
    })
    
    return Object.entries(revenueData).map(([month, revenue]) => ({ month, revenue })).slice(-6)
  }

  const ordersOverTime = generateOrdersOverTime()
  const categoryDistribution = generateServiceDistribution()
  const monthlyRevenue = generateMonthlyRevenue()

  if (loading) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground tracking-tight">Dashboard</h1>
          <p className="text-sm text-muted-foreground mt-1">Loading your stats...</p>
        </div>
        <div className="glass-card p-6 flex items-center justify-center" style={{ minHeight: '400px' }}>
          <div className="animate-pulse text-muted-foreground text-lg">Loading dashboard...</div>
        </div>
      </div>
    )
  }

  const statsCardsData = [
    {
      title: "Total Orders",
      value: stats.totalOrders.toString(),
      change: `+${stats.weekOrders} this week`,
      icon: ShoppingCart
    },
    {
      title: "Pending Orders",
      value: stats.pendingOrders.toString(),
      change: `${stats.totalOrders > 0 ? ((stats.pendingOrders / stats.totalOrders) * 100).toFixed(0) : 0}% of total`,
      icon: Clock
    },
    {
      title: "Completed Orders",
      value: stats.completedOrders.toString(),
      change: `${stats.completionRate.toFixed(1)}% success rate`,
      icon: CheckCircle
    },
    {
      title: "Total Revenue",
      value: `£${stats.totalRevenue.toLocaleString()}`,
      change: `Avg £${stats.averageOrderValue.toFixed(0)} per order`,
      icon: PoundSterling
    }
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground tracking-tight">Dashboard</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Welcome back. Here's your overview from Google Sheets
          {orders.length > 0 && ` • ${orders.length} total orders`}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statsCardsData.map((stat: any, i: number) => (
          <StatsCard key={stat.title} {...stat} index={i} />
        ))}
      </div>

      {/* NEW INFORMATIVENESS WIDGETS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Business Health Score - Takes 2 columns */}
        <div className="lg:col-span-2">
          <PerformanceMeter 
            totalOrders={stats.totalOrders}
            completedOrders={stats.completedOrders}
            totalRevenue={stats.totalRevenue}
            averageOrderValue={stats.averageOrderValue}
          />
        </div>
        
        {/* Quick Stats Summary - Takes 1 column */}
        <div className="glass-card p-6">
          <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
            <Zap className="h-5 w-5 text-yellow-500" />
            At a Glance
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
              <span className="text-sm text-muted-foreground">Pending Orders</span>
              <Badge className={stats.pendingOrders > 5 ? "bg-red-500/20 text-red-500 border-red-500/30" : "bg-blue-500/20 text-blue-500 border-blue-500/30"}>
                {stats.pendingOrders}
              </Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
              <span className="text-sm text-muted-foreground">In Progress</span>
              <Badge className="bg-orange-500/20 text-orange-500 border-orange-500/30">
                {stats.inProgressOrders}
              </Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
              <span className="text-sm text-muted-foreground">Completion Rate</span>
              <span className={`text-sm font-bold ${stats.completionRate >= 80 ? 'text-green-500' : stats.completionRate >= 60 ? 'text-blue-500' : 'text-yellow-500'}`}>
                {stats.completionRate.toFixed(1)}%
              </span>
            </div>
            <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
              <span className="text-sm text-muted-foreground">Avg Order Value</span>
              <span className="text-sm font-bold text-foreground">£{stats.averageOrderValue.toFixed(0)}</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
              <span className="text-sm text-muted-foreground">Top Service</span>
              <span className="text-sm font-bold text-primary truncate max-w-[120px]">{stats.topService}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Goals Tracker & Urgent Orders */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Goals Tracker */}
        <GoalsTracker 
          todayOrders={stats.todayOrders}
          weekOrders={stats.weekOrders}
          monthOrders={stats.monthOrders}
          todayRevenue={stats.todayRevenue}
          weekRevenue={stats.weekRevenue}
          monthRevenue={stats.monthRevenue}
        />
        
        {/* Urgent Orders Alert */}
        <UrgentOrdersAlert orders={orders} />
      </div>

      {/* New Enhanced Metrics Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Today's Performance */}
        <div className="glass-card p-5 relative overflow-hidden group hover:scale-105 transition-transform duration-300">
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <Clock className="w-5 h-5 text-blue-500" />
              </div>
              <h3 className="text-sm font-semibold text-muted-foreground">Today</h3>
            </div>
            <p className="text-3xl font-bold text-foreground">{stats.todayOrders}</p>
            <p className="text-xs text-muted-foreground mt-1">Orders • £{stats.todayRevenue.toLocaleString()}</p>
          </div>
        </div>

        {/* This Week's Performance */}
        <div className="glass-card p-5 relative overflow-hidden group hover:scale-105 transition-transform duration-300">
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full blur-2xl group-hover:from-green-500/30 group-hover:to-emerald-500/30 transition-all" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-green-500/20 rounded-lg">
                <Calendar className="w-5 h-5 text-green-500" />
              </div>
              <h3 className="text-sm font-semibold text-muted-foreground">This Week</h3>
            </div>
            <p className="text-3xl font-bold text-foreground">{stats.weekOrders}</p>
            <p className="text-xs text-muted-foreground mt-1">Orders • £{stats.weekRevenue.toLocaleString()}</p>
          </div>
        </div>

        {/* This Month's Performance */}
        <div className="glass-card p-5 relative overflow-hidden group hover:scale-105 transition-transform duration-300">
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-2xl group-hover:from-orange-500/30 group-hover:to-red-500/30 transition-all" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-orange-500/20 rounded-lg">
                <TrendingUp className="w-5 h-5 text-orange-500" />
              </div>
              <h3 className="text-sm font-semibold text-muted-foreground">This Month</h3>
            </div>
            <p className="text-3xl font-bold text-foreground">{stats.monthOrders}</p>
            <p className="text-xs text-muted-foreground mt-1">Orders • £{stats.monthRevenue.toLocaleString()}</p>
          </div>
        </div>

        {/* Top Service */}
        <div className="glass-card p-5 relative overflow-hidden group hover:scale-105 transition-transform duration-300">
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-500/20 to-amber-500/20 rounded-full blur-2xl group-hover:from-yellow-500/30 group-hover:to-amber-500/30 transition-all" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-yellow-500/20 rounded-lg">
                <Award className="w-5 h-5 text-yellow-500" />
              </div>
              <h3 className="text-sm font-semibold text-muted-foreground">Top Service</h3>
            </div>
            <p className="text-xl font-bold text-foreground truncate">{stats.topService}</p>
            <p className="text-xs text-muted-foreground mt-1">Most requested</p>
          </div>
        </div>
      </div>

      {/* Quick Insights Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="glass-card p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
              <Zap className="w-4 h-4 text-yellow-500" />
              Business Insights
            </h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
              <span className="text-sm text-muted-foreground">Completion Rate</span>
              <div className="flex items-center gap-2">
                <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                    style={{ width: `${stats.completionRate}%` }}
                  />
                </div>
                <span className="text-sm font-semibold text-foreground">{stats.completionRate.toFixed(1)}%</span>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
              <span className="text-sm text-muted-foreground">Average Order Value</span>
              <span className="text-sm font-bold text-foreground">£{stats.averageOrderValue.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
              <span className="text-sm text-muted-foreground">Busiest Day</span>
              <span className="text-sm font-bold text-foreground">{stats.busiestDay}</span>
            </div>
          </div>
        </div>

        <div className="glass-card p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
              <Star className="w-4 h-4 text-blue-500" />
              Performance Highlights
            </h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
              <div className="flex-shrink-0 w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-green-500" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">Total Revenue Generated</p>
                <p className="text-xs text-muted-foreground">All time earnings</p>
              </div>
              <span className="text-sm font-bold text-green-500">£{stats.totalRevenue.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                <Award className="w-4 h-4 text-blue-500" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">Successfully Completed</p>
                <p className="text-xs text-muted-foreground">{stats.completedOrders} orders delivered</p>
              </div>
              <span className="text-sm font-bold text-blue-500">{stats.completedOrders}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 glass-card p-5 relative overflow-hidden group">
          <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2 relative">
            <Calendar className="w-4 h-4 text-blue-500" />
            Recent Activity
          </h3>
          <RecentActivity />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Line Chart - Orders Over Time */}
        <div className="lg:col-span-2 glass-card p-5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-full blur-3xl group-hover:from-pink-500/20 group-hover:to-purple-500/20 transition-all" />
          <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2 relative">
            <TrendingUp className="w-4 h-4 text-pink-500" />
            Orders Over Time
          </h3>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={ordersOverTime}>
              <defs>
                <linearGradient id="colorOrders" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ec4899" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#ec4899" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(320, 3%, 28%)" vertical={false} />
              <XAxis dataKey="month" stroke="hsl(0, 0%, 60%)" fontSize={11} tickLine={false} axisLine={false} dy={10} />
              <YAxis stroke="hsl(0, 0%, 60%)" fontSize={11} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} dx={-10} />
              <Tooltip content={<EnhancedTooltip title="Orders" valueSuffix=" orders" />} />
              <Area type="monotone" dataKey="orders" stroke="#ec4899" strokeWidth={3} fillOpacity={1} fill="url(#colorOrders)" animationDuration={1500} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart - Service Categories */}
        <div className="glass-card p-5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl group-hover:from-purple-500/20 group-hover:to-blue-500/20 transition-all" />
          <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2 relative">
            <Award className="w-4 h-4 text-purple-500" />
            Top Services
          </h3>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie 
                data={categoryDistribution} 
                cx="50%" 
                cy="50%" 
                innerRadius={50} 
                outerRadius={80} 
                paddingAngle={5} 
                dataKey="value"
                animationBegin={0}
                animationDuration={1500}
              >
                {categoryDistribution.map((entry: any, index: number) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.fill} 
                    stroke={entry.fill}
                    strokeWidth={2}
                    style={{ transition: 'all 0.3s ease', cursor: 'pointer' }}
                  />
                ))}
              </Pie>
              <Tooltip content={<EnhancedTooltip title="Services" valueSuffix="%" />} />
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-2 mt-3">
            {categoryDistribution.map((cat: any, index: number) => (
              <div key={cat.name} className="flex items-center justify-between text-xs group/item cursor-pointer hover:bg-muted/30 p-1 rounded transition-all">
                <div className="flex items-center gap-2">
                  <div 
                    className="h-3 w-3 rounded-full shadow-lg transform group-hover/item:scale-110 transition-transform" 
                    style={{ backgroundColor: cat.fill }} 
                  />
                  <span className="text-muted-foreground group-hover/item:text-foreground transition-colors">{cat.name}</span>
                </div>
                <span className="text-foreground font-bold group-hover/item:scale-110 transition-transform">{cat.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Monthly Revenue Chart */}
      <div className="glass-card p-5 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-full blur-3xl group-hover:from-green-500/20 group-hover:to-emerald-500/20 transition-all" />
        <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2 relative">
          <DollarSign className="w-4 h-4 text-green-500" />
          Monthly Revenue Trend
        </h3>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={monthlyRevenue}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#10b981" stopOpacity={0.3}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(320, 3%, 28%)" vertical={false} />
            <XAxis dataKey="month" stroke="hsl(0, 0%, 60%)" fontSize={11} tickLine={false} axisLine={false} dy={10} />
            <YAxis stroke="hsl(0, 0%, 60%)" fontSize={11} tickLine={false} axisLine={false} tickFormatter={(value) => `£${value}`} dx={-10} />
            <Tooltip content={<EnhancedTooltip title="Revenue" valuePrefix="£" />} />
            <Bar dataKey="revenue" fill="url(#colorRevenue)" radius={[6, 6, 0, 0]} animationDuration={1500} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 glass-card p-5">
          <h3 className="text-sm font-semibold text-foreground mb-4">Monthly Revenue</h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={monthlyRevenue}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(320, 3%, 28%)" vertical={false} />
              <XAxis dataKey="month" stroke="hsl(0, 0%, 60%)" fontSize={11} tickLine={false} axisLine={false} dy={10} />
              <YAxis stroke="hsl(0, 0%, 60%)" fontSize={11} tickLine={false} axisLine={false} tickFormatter={(v) => `$${(v/1000).toFixed(0)}k`} dx={-10} />
              <Tooltip content={<EnhancedTooltip title="Revenue" valuePrefix="£" />} />
              <Bar dataKey="revenue" fill="hsl(0, 99%, 47.6%)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <RecentActivity />
      </div>
    </div>
  )
}

interface CustomTooltipProps {
  active?: boolean
  payload?: any[]
  label?: string
}

interface EnhancedTooltipProps {
  title?: string
  valuePrefix?: string
  valueSuffix?: string
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload?.length) {
    return (
      <div className="glass-card px-3 py-2 text-sm shadow-lg">
        <p className="text-muted-foreground">{label}</p>
        <p className="text-foreground font-semibold">{payload[0].value.toLocaleString()}</p>
      </div>
    )
  }
  return null
}

const EnhancedTooltip = ({ title, valuePrefix = '', valueSuffix = '' }: EnhancedTooltipProps) => {
  const TooltipComponent = ({ active, payload, label }: CustomTooltipProps) => {
    if (active && payload?.length) {
      const value = payload[0].value
      return (
        <div className="glass-card px-4 py-3 text-sm shadow-xl border border-primary/20">
          <p className="text-muted-foreground text-xs mb-1">{label}</p>
          <p className="text-foreground font-bold text-lg">
            {valuePrefix}{typeof value === 'number' ? value.toLocaleString() : value}{valueSuffix}
          </p>
        </div>
      )
    }
    return null
  }
  return <TooltipComponent />
}
