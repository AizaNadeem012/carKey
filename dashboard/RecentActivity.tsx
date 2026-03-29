"use client"

import { useEffect, useState } from "react"
import { ShoppingCart, CheckCircle2, DollarSign, UserPlus, RefreshCw } from "lucide-react"

interface Order {
  id: string
  timestamp: string
  firstName: string
  lastName: string
  services: string
  email: string
  phoneNumber: string
  status: 'pending' | 'in_progress' | 'completed' | 'cancelled'
  amount?: number
}

const iconMap = {
  order: ShoppingCart,
  complete: CheckCircle2,
  payment: DollarSign,
  user: UserPlus,
  update: RefreshCw,
}

export function RecentActivity() {
  const [recentOrders, setRecentOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/orders')
      .then(res => res.json())
      .then(data => {
        const orders = data.orders || []
        // Get last 5 orders sorted by timestamp
        const sorted = orders.sort((a: Order, b: Order) => 
          new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
        ).slice(0, 5)
        setRecentOrders(sorted)
        setLoading(false)
      })
      .catch(err => {
        console.error('Error fetching recent activity:', err)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="glass-card p-5">
        <h3 className="text-sm font-semibold text-foreground mb-4">Recent Activity</h3>
        <div className="text-center py-8 text-muted-foreground">Loading...</div>
      </div>
    )
  }

  if (recentOrders.length === 0) {
    return (
      <div className="glass-card p-5">
        <h3 className="text-sm font-semibold text-foreground mb-4">Recent Orders</h3>
        <div className="text-center py-8">
          <p className="text-muted-foreground text-sm">No recent orders</p>
          <p className="text-xs text-muted-foreground mt-1">When orders come in, they'll appear here</p>
        </div>
      </div>
    )
  }

  return (
    <div className="glass-card p-5">
      <h3 className="text-sm font-semibold text-foreground mb-4">Recent Orders</h3>
      <div className="space-y-3">
        {recentOrders.map((order) => {
          const Icon = order.status === 'completed' ? CheckCircle2 : 
                       order.status === 'pending' ? ShoppingCart : 
                       order.status === 'in_progress' ? RefreshCw : UserPlus
          
          let actionText = ""
          let detailText = ""
          const fullName = `${order.firstName} ${order.lastName}`.trim() || 'Customer'
          
          switch(order.status) {
            case 'completed':
              actionText = "Order Completed"
              detailText = `${fullName} - ${order.services}`
              break
            case 'pending':
              actionText = "New Order Received"
              detailText = `${fullName} needs ${order.services}`
              break
            case 'in_progress':
              actionText = "Order In Progress"
              detailText = `${fullName} - ${order.services}`
              break
            default:
              actionText = "Order Update"
              detailText = `${fullName} - Order #${order.id}`
          }

          return (
            <div key={order.id} className="flex items-start gap-3 p-2 rounded-lg hover:bg-muted/30 transition-colors">
              <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Icon className="h-4 w-4 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground">{actionText}</p>
                <p className="text-xs text-muted-foreground truncate">{detailText}</p>
              </div>
              <div className="text-right">
                <p className="text-xs font-semibold text-foreground whitespace-nowrap">
                  Ã‚Â£{(order.services.split(',').filter(s => s.trim()).length * 150).toLocaleString()}
                </p>
                <span className="text-xs text-muted-foreground/60 whitespace-nowrap">
                  {new Date(order.timestamp).toLocaleDateString()}
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
