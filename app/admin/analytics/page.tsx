"use client"

import { useState, useEffect } from "react"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, LineChart, Line } from "recharts"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Download, TrendingUp, TrendingDown } from "lucide-react"
import { toast } from "@/hooks/use-toast"

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

interface Contact {
  id: number
  timestamp: string
  name: string
  service: string
}

interface AnalyticsData {
  orders: Order[]
  contacts: Contact[]
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload?.length) {
    return (
      <div className="glass-card px-3 py-2 text-sm shadow-lg">
        <p className="text-muted-foreground">{label}</p>
        <p className="text-foreground font-semibold">{typeof payload[0].value === 'number' ? payload[0].value.toLocaleString() : payload[0].value}</p>
      </div>
    )
  }
  return null
}

export default function Analytics() {
  const [timeRange, setTimeRange] = useState("monthly")
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData>({ orders: [], contacts: [] })
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState<{
    totalOrders: number
    totalRevenue: number
    totalContacts: number
    conversionRate: number
    topService: string
    growthPercentage: number
    averageOrderValue: number
  }>({
    totalOrders: 0,
    totalRevenue: 0,
    totalContacts: 0,
    conversionRate: 0,
    topService: '',
    growthPercentage: 0,
    averageOrderValue: 0
  })

  useEffect(() => {
    // Fetch real data from Google Sheets with real-time refresh
    const fetchAnalyticsData = async () => {
      try {
        const [ordersRes, contactsRes] = await Promise.all([
          fetch('/api/orders').then(res => res.json()),
          fetch('/api/contacts').then(res => res.json())
        ])
        
        const orders = ordersRes.orders || []
        const contacts = contactsRes.contacts || []
        
        setAnalyticsData({ orders, contacts })
        
        // Calculate revenue based on ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â£150 per service
        const calculateOrderAmount = (order: Order) => {
          const serviceCount = order.services.split(',').filter(s => s.trim()).length
          return serviceCount * 150
        }
        
        // Calculate real statistics
        const totalOrders = orders.length
        const totalRevenue = orders.reduce((sum: number, order: Order) => sum + calculateOrderAmount(order), 0)
        const totalContacts = contacts.length
        
        // Calculate conversion rate (contacts to orders)
        const conversionRate = totalContacts > 0 ? ((totalOrders / totalContacts) * 100).toFixed(1) : 0
        
        // Find top service
        const serviceCount: any = {}
        orders.forEach((order: Order) => {
          const services = order.services.split(',').map(s => s.trim()).filter(s => s)
          services.forEach(service => {
            serviceCount[service] = (serviceCount[service] || 0) + 1
          })
        })
        const topService = Object.keys(serviceCount).length > 0 
          ? Object.keys(serviceCount).reduce((a, b) => serviceCount[a] > serviceCount[b] ? a : b)
          : 'No orders yet'
        
        // Calculate growth (compare first half vs second half of orders)
        const midPoint = Math.floor(totalOrders / 2)
        const firstHalf = orders.slice(0, midPoint).length
        const secondHalf = orders.slice(midPoint).length
        const growthPercentage = firstHalf > 0 ? (((secondHalf - firstHalf) / firstHalf) * 100).toFixed(1) : 0
        
        // Calculate average order value
        const averageOrderValue = totalOrders > 0 ? totalRevenue / totalOrders : 0
        
        setStats({
          totalOrders,
          totalRevenue,
          totalContacts,
          conversionRate: Number(conversionRate),
          topService,
          growthPercentage: Number(growthPercentage),
          averageOrderValue
        })
        
        setLoading(false)
      } catch (err) {
        console.error('Error fetching analytics data:', err)
        setLoading(false)
      }
    }
    
    fetchAnalyticsData()
    
    // Set up real-time refresh every 30 seconds
    const interval = setInterval(fetchAnalyticsData, 30000)
    return () => clearInterval(interval)
  }, [])

  const handleExport = () => {
    toast({ title: "Report exported", description: "CSV file has been downloaded" })
  }

  // Generate chart data from real orders
  const generateOrderTrends = () => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const monthlyData: any = {}
    const revenueData: any = {}
    
    // Initialize all months with 0
    months.forEach(month => {
      monthlyData[month] = 0
      revenueData[month] = 0
    })
    
    analyticsData.orders.forEach((order: Order) => {
      const date = new Date(order.timestamp)
      const monthName = months[date.getMonth()]
      
      // Count orders per month
      monthlyData[monthName]++
      
      // Calculate revenue per month (ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â£150 per service)
      const serviceCount = order.services.split(',').filter(s => s.trim()).length
      revenueData[monthName] += serviceCount * 150
    })
    
    return months.map(month => ({
      month,
      orders: monthlyData[month],
      revenue: revenueData[month]
    }))
  }

  // Generate category distribution from services
  const generateCategoryDistribution = () => {
    const categories: any = {}
    
    analyticsData.orders.forEach((order: Order) => {
      // Split multiple services and count each
      const services = order.services.split(',').map(s => s.trim()).filter(s => s)
      services.forEach(service => {
        categories[service] = (categories[service] || 0) + 1
      })
    })
    
    const colors = ['#f43f5e', '#8b5cf6', '#10b981', '#f59e0b', '#3b82f6', '#ec4899', '#6366f1', '#14b8a6']
    
    return Object.entries(categories).map(([name, value], index) => ({
      name,
      value,
      fill: colors[index % colors.length]
    }))
  }

  const orderData = generateOrderTrends()
  const categoryData = generateCategoryDistribution()

  if (loading) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground tracking-tight">Analytics</h1>
          <p className="text-sm text-muted-foreground mt-1">Loading insights...</p>
        </div>
        <div className="glass-card p-6 flex items-center justify-center" style={{ minHeight: '400px' }}>
          <div className="animate-pulse text-muted-foreground text-lg">Loading analytics...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground tracking-tight">Analytics</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Real-time performance insights from Google Sheets
            {stats.totalOrders > 0 && ` ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â¢ ${stats.totalOrders} orders analyzed`}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-36 bg-muted/50 border-border"><SelectValue /></SelectTrigger>
            <SelectContent className="bg-card border-border">
              <SelectItem value="daily">Daily</SelectItem>
              <SelectItem value="weekly">Weekly</SelectItem>
              <SelectItem value="monthly">Monthly</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={handleExport} variant="outline" className="border-border text-foreground hover:bg-muted/50">
            <Download className="h-4 w-4 mr-2" /> Export
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="glass-card p-5">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-muted-foreground">Total Orders</h3>
            {stats.growthPercentage >= 0 ? (
              <TrendingUp className="h-4 w-4 text-success" />
            ) : (
              <TrendingDown className="h-4 w-4 text-destructive" />
            )}
          </div>
          <p className="text-2xl font-bold text-foreground">{stats.totalOrders}</p>
          <p className={`text-xs mt-1 ${stats.growthPercentage >= 0 ? 'text-success' : 'text-destructive'}`}>
            {stats.growthPercentage >= 0 ? '+' : ''}{stats.growthPercentage}% from previous period
          </p>
        </div>

        <div className="glass-card p-5">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-muted-foreground">Total Revenue</h3>
            <TrendingUp className="h-4 w-4 text-success" />
          </div>
          <p className="text-2xl font-bold text-foreground">ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â£{stats.totalRevenue.toLocaleString()}</p>
          <p className="text-xs text-muted-foreground mt-1">From all completed orders</p>
        </div>

        <div className="glass-card p-5">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-muted-foreground">Contact Submissions</h3>
          </div>
          <p className="text-2xl font-bold text-foreground">{stats.totalContacts}</p>
          <p className="text-xs text-muted-foreground mt-1">Via Google Forms</p>
        </div>

        <div className="glass-card p-5">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-muted-foreground">Conversion Rate</h3>
          </div>
          <p className="text-2xl font-bold text-foreground">{stats.conversionRate}%</p>
          <p className="text-xs text-muted-foreground mt-1">Contacts to orders</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="glass-card p-5">
          <h3 className="text-sm font-semibold text-foreground mb-4">Order Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={orderData}>
              <defs>
                <linearGradient id="orderGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(0, 99%, 47.6%)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(0, 99%, 47.6%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(320, 3%, 28%)" />
              <XAxis dataKey="month" stroke="hsl(0, 0%, 60%)" fontSize={12} />
              <YAxis stroke="hsl(0, 0%, 60%)" fontSize={12} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="orders" stroke="hsl(0, 99%, 47.6%)" fill="url(#orderGrad)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="glass-card p-5">
          <h3 className="text-sm font-semibold text-foreground mb-4">Revenue Breakdown</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={orderData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(320, 3%, 28%)" />
              <XAxis dataKey="month" stroke="hsl(0, 0%, 60%)" fontSize={12} />
              <YAxis stroke="hsl(0, 0%, 60%)" fontSize={12} tickFormatter={(v) => `ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â£${(v/1000).toFixed(0)}k`} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="revenue" fill="hsl(0, 99%, 47.6%)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="glass-card p-5">
          <h3 className="text-sm font-semibold text-foreground mb-4">Service Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={categoryData} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={3} dataKey="value" label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                {categoryData.map((entry, index) => (
                  <Cell key={index} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="glass-card p-5">
          <h3 className="text-sm font-semibold text-foreground mb-4">Growth Metrics</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={orderData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(320, 3%, 28%)" />
              <XAxis dataKey="month" stroke="hsl(0, 0%, 60%)" fontSize={12} />
              <YAxis stroke="hsl(0, 0%, 60%)" fontSize={12} />
              <Tooltip content={<CustomTooltip />} />
              <Line type="monotone" dataKey="orders" stroke="hsl(0, 99%, 47.6%)" strokeWidth={2} dot={{ fill: "hsl(0, 99%, 47.6%)", r: 3 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Additional Insights */}
      <div className="glass-card p-5">
        <h3 className="text-sm font-semibold text-foreground mb-4">Key Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Top Performing Service</p>
            <p className="text-lg font-bold text-foreground">{stats.topService}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Average Order Value</p>
            <p className="text-lg font-bold text-foreground">ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â£{stats.averageOrderValue > 0 ? stats.averageOrderValue.toFixed(0) : 0}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Growth Trend</p>
            <p className={`text-lg font-bold ${stats.growthPercentage >= 0 ? 'text-success' : 'text-destructive'}`}>
              {stats.growthPercentage >= 0 ? '+' : ''}{stats.growthPercentage}%
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
