"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { DollarSign, TrendingUp, TrendingDown, Calculator, Percent } from "lucide-react"

interface Order {
  id: string
  timestamp: string
  services: string
  status: 'pending' | 'in_progress' | 'completed' | 'cancelled'
}

export function RevenueCalculator() {
  const [orders, setOrders] = useState<Order[]>([])
  const [open, setOpen] = useState(false)
  const [costPerService, setCostPerService] = useState(50)
  const [fixedCosts, setFixedCosts] = useState(0)
  
  useEffect(() => {
    if (open) {
      fetchOrders()
    }
  }, [open])

  const fetchOrders = async () => {
    try {
      const res = await fetch('/api/orders')
      const data = await res.json()
      setOrders(data.orders || [])
    } catch (err) {
      console.error('Error fetching orders:', err)
    }
  }

  // Calculate revenue metrics
  const calculateMetrics = () => {
    const completedOrders = orders.filter(o => o.status === 'completed')
    
    // Calculate total revenue
    const totalRevenue = completedOrders.reduce((sum, order) => {
      const serviceCount = order.services.split(',').filter(s => s.trim()).length
      return sum + (serviceCount * 150)
    }, 0)
    
    // Calculate total costs
    const totalServices = completedOrders.reduce((sum, order) => {
      return sum + order.services.split(',').filter(s => s.trim()).length
    }, 0)
    
    const variableCosts = totalServices * costPerService
    const totalCosts = variableCosts + fixedCosts
    
    // Calculate profit
    const grossProfit = totalRevenue - totalCosts
    const profitMargin = totalRevenue > 0 ? (grossProfit / totalRevenue) * 100 : 0
    
    return {
      totalRevenue,
      totalCosts,
      variableCosts,
      grossProfit,
      profitMargin,
      totalServices,
      completedOrders: completedOrders.length
    }
  }

  const metrics = calculateMetrics()

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="border-primary/30 hover:bg-primary/10">
          <Calculator className="h-4 w-4 mr-2" />
          Profit Calculator
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-card border-border max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold flex items-center gap-2">
            <Calculator className="h-5 w-5 text-primary" />
            Revenue & Profit Calculator
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Input Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-muted/30 rounded-lg">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-green-500" />
                Cost Per Service (Ã‚Â£)
              </label>
              <Input
                type="number"
                value={costPerService}
                onChange={(e) => setCostPerService(Number(e.target.value))}
                className="bg-background border-border"
              />
              <p className="text-xs text-muted-foreground">Parts, labor, and materials per service</p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center gap-2">
                <TrendingDown className="h-4 w-4 text-red-500" />
                Fixed Costs (Ã‚Â£)
              </label>
              <Input
                type="number"
                value={fixedCosts}
                onChange={(e) => setFixedCosts(Number(e.target.value))}
                className="bg-background border-border"
              />
              <p className="text-xs text-muted-foreground">Rent, utilities, insurance, etc.</p>
            </div>
          </div>

          {/* Revenue Breakdown */}
          <div className="glass-card p-5">
            <h3 className="text-sm font-semibold text-foreground mb-4">Revenue Breakdown</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-500/20 rounded-lg">
                    <TrendingUp className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Total Revenue</p>
                    <p className="text-xs text-muted-foreground">{metrics.completedOrders} completed orders</p>
                  </div>
                </div>
                <p className="text-xl font-bold text-green-500">Ã‚Â£{metrics.totalRevenue.toLocaleString()}</p>
              </div>

              <div className="flex items-center justify-between p-3 bg-red-500/10 rounded-lg border border-red-500/20">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-red-500/20 rounded-lg">
                    <TrendingDown className="h-5 w-5 text-red-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Total Costs</p>
                    <p className="text-xs text-muted-foreground">Variable: Ã‚Â£{metrics.variableCosts.toLocaleString()} + Fixed: Ã‚Â£{fixedCosts.toLocaleString()}</p>
                  </div>
                </div>
                <p className="text-xl font-bold text-red-500">Ã‚Â£{metrics.totalCosts.toLocaleString()}</p>
              </div>
            </div>
          </div>

          {/* Profit Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="glass-card p-5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 rounded-full blur-xl" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <DollarSign className="h-5 w-5 text-blue-500" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">Gross Profit</span>
                </div>
                <p className="text-3xl font-bold text-foreground mb-1">Ã‚Â£{metrics.grossProfit.toLocaleString()}</p>
                <Badge variant="outline" className="bg-blue-500/10 text-blue-500 border-blue-500/30">
                  From {metrics.totalServices} services
                </Badge>
              </div>
            </div>

            <div className="glass-card p-5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/10 rounded-full blur-xl" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <Percent className="h-5 w-5 text-purple-500" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">Profit Margin</span>
                </div>
                <p className="text-3xl font-bold text-foreground mb-1">{metrics.profitMargin.toFixed(1)}%</p>
                <Badge variant="outline" className={metrics.profitMargin >= 50 ? "bg-green-500/10 text-green-500 border-green-500/30" : "bg-yellow-500/10 text-yellow-500 border-yellow-500/30"}>
                  {metrics.profitMargin >= 50 ? 'Excellent' : metrics.profitMargin >= 30 ? 'Good' : 'Needs Improvement'}
                </Badge>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="p-4 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-lg border border-primary/20">
            <h4 className="text-sm font-semibold text-foreground mb-3">Quick Insights</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">{metrics.completedOrders}</p>
                <p className="text-xs text-muted-foreground">Completed Orders</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">{metrics.totalServices}</p>
                <p className="text-xs text-muted-foreground">Total Services</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">Ã‚Â£{(metrics.totalRevenue / (metrics.completedOrders || 1)).toFixed(0)}</p>
                <p className="text-xs text-muted-foreground">Avg Order Value</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">Ã‚Â£{(metrics.grossProfit / (metrics.totalServices || 1)).toFixed(0)}</p>
                <p className="text-xs text-muted-foreground">Profit/Service</p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-2 pt-4 border-t">
            <Button variant="outline" onClick={() => setOpen(false)}>
              Close
            </Button>
            <Button className="bg-primary hover:bg-primary/90">
              Export Report
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
