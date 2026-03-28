"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  ShoppingCart, 
  Calendar, 
  DollarSign, 
  CheckCircle, 
  Clock, 
  Package,
  Mail,
  Phone,
  MapPin
} from "lucide-react"

interface Order {
  id: string
  timestamp: string
  firstName: string
  lastName: string
  services: string
  email: string
  address: string
  phoneNumber: string
  status: 'pending' | 'in_progress' | 'completed' | 'cancelled'
}

interface CustomerHistoryProps {
  customerEmail?: string
  customerPhone?: string
  onClose: () => void
}

export function CustomerHistoryModal({ customerEmail, customerPhone, onClose }: CustomerHistoryProps) {
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)
  const [open, setOpen] = useState(true)

  useEffect(() => {
    if (customerEmail || customerPhone) {
      fetchCustomerOrders()
    }
  }, [customerEmail, customerPhone])

  const fetchCustomerOrders = async () => {
    try {
      const res = await fetch('/api/orders')
      const data = await res.json()
      const allOrders = data.orders || []
      
      // Filter orders by email or phone
      const customerOrders = allOrders.filter((order: Order) => 
        (customerEmail && order.email?.toLowerCase() === customerEmail.toLowerCase()) ||
        (customerPhone && order.phoneNumber === customerPhone)
      )
      
      setOrders(customerOrders)
      setLoading(false)
    } catch (err) {
      console.error('Error fetching customer orders:', err)
      setLoading(false)
    }
  }

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen)
    if (!isOpen) {
      onClose()
    }
  }

  const getStatusBadgeClass = (status: string) => {
    switch(status) {
      case 'completed': return "bg-green-500/20 text-green-500 border-green-500/30"
      case 'pending': return "bg-yellow-500/20 text-yellow-500 border-yellow-500/30"
      case 'in_progress': return "bg-blue-500/20 text-blue-500 border-blue-500/30"
      case 'cancelled': return "bg-red-500/20 text-red-500 border-red-500/30"
      default: return "bg-muted text-muted-foreground border-border"
    }
  }

  const totalOrders = orders.length
  const completedOrders = orders.filter(o => o.status === 'completed').length
  const totalRevenue = orders.reduce((sum, order) => {
    const serviceCount = order.services.split(',').filter(s => s.trim()).length
    return sum + (serviceCount * 150)
  }, 0)

  if (!customerEmail && !customerPhone) {
    return null
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="bg-card border-border max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold flex items-center gap-2">
            <ShoppingCart className="h-5 w-5 text-primary" />
            Customer Order History
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Customer Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-lg border border-primary/20">
            {customerEmail && (
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <Mail className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-sm font-medium text-foreground">{customerEmail}</p>
                </div>
              </div>
            )}
            {customerPhone && (
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-500/10 rounded-lg">
                  <Phone className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Phone</p>
                  <p className="text-sm font-medium text-foreground">{customerPhone}</p>
                </div>
              </div>
            )}
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-500/10 rounded-lg">
                <ShoppingCart className="h-5 w-5 text-purple-500" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Total Orders</p>
                <p className="text-sm font-bold text-foreground">{totalOrders}</p>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="glass-card p-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-green-500/10 rounded-full blur-xl" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm font-medium text-muted-foreground">Completed</span>
                </div>
                <p className="text-2xl font-bold text-foreground">{completedOrders}</p>
              </div>
            </div>

            <div className="glass-card p-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/10 rounded-full blur-xl" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-5 w-5 text-blue-500" />
                  <span className="text-sm font-medium text-muted-foreground">Active</span>
                </div>
                <p className="text-2xl font-bold text-foreground">{totalOrders - completedOrders}</p>
              </div>
            </div>

            <div className="glass-card p-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-yellow-500/10 rounded-full blur-xl" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="h-5 w-5 text-yellow-500" />
                  <span className="text-sm font-medium text-muted-foreground">Total Spent</span>
                </div>
                <p className="text-2xl font-bold text-foreground">£{totalRevenue.toLocaleString()}</p>
              </div>
            </div>
          </div>

          {/* Orders List */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
              <Package className="h-4 w-4" />
              Order Timeline
            </h3>
            
            {loading ? (
              <div className="text-center py-8 text-muted-foreground">Loading orders...</div>
            ) : orders.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <ShoppingCart className="h-12 w-12 mx-auto mb-3 opacity-20" />
                <p>No orders found for this customer</p>
              </div>
            ) : (
              <div className="space-y-3">
                {orders.map((order) => {
                  const serviceCount = order.services.split(',').filter(s => s.trim()).length
                  const amount = serviceCount * 150
                  
                  return (
                    <div key={order.id} className="glass-card p-4 hover:border-primary/30 transition-all">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Badge className={getStatusBadgeClass(order.status)}>
                              {order.status === 'in_progress' ? 'In Progress' : order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                            </Badge>
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {new Date(order.timestamp).toLocaleDateString()}
                            </span>
                          </div>
                          
                          <p className="font-medium text-foreground mb-1">{order.services}</p>
                          <p className="text-sm text-muted-foreground">Order #{order.id}</p>
                        </div>
                        
                        <div className="text-right">
                          <p className="text-lg font-bold text-primary">£{amount.toLocaleString()}</p>
                          <p className="text-xs text-muted-foreground">{serviceCount} service{serviceCount !== 1 ? 's' : ''}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-2 pt-4 border-t">
            <Button variant="outline" onClick={() => handleOpenChange(false)}>
              Close
            </Button>
            <Button className="bg-primary hover:bg-primary/90">
              Send Follow-up Email
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
