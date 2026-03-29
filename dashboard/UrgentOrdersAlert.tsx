"use client"

import { AlertTriangle, Clock, Phone, Mail, MapPin, ChevronRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface Order {
  id: string
  timestamp: string
  firstName: string
  lastName: string
  services: string
  email: string
  phoneNumber: string
  address: string
  status: 'pending' | 'in_progress' | 'completed' | 'cancelled'
}

interface UrgentOrdersProps {
  orders: Order[]
}

export function UrgentOrdersAlert({ orders }: UrgentOrdersProps) {
  // Get pending and in-progress orders sorted by time
  const urgentOrders = orders
    .filter(o => o.status === 'pending' || o.status === 'in_progress')
    .sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime())
    .slice(0, 5) // Show top 5 most urgent

  const getUrgencyLevel = (order: Order) => {
    const hoursPending = (Date.now() - new Date(order.timestamp).getTime()) / (1000 * 60 * 60)
    
    if (hoursPending > 24) return { level: 'critical', label: 'Overdue', color: 'text-red-500', bgColor: 'bg-red-500/10', borderColor: 'border-red-500/30' }
    if (hoursPending > 12) return { level: 'high', label: 'Urgent', color: 'text-orange-500', bgColor: 'bg-orange-500/10', borderColor: 'border-orange-500/30' }
    if (hoursPending > 4) return { level: 'medium', label: 'Attention', color: 'text-yellow-500', bgColor: 'bg-yellow-500/10', borderColor: 'border-yellow-500/30' }
    return { level: 'low', label: 'Recent', color: 'text-blue-500', bgColor: 'bg-blue-500/10', borderColor: 'border-blue-500/30' }
  }

  const getTimeAgo = (timestamp: string) => {
    const hours = Math.floor((Date.now() - new Date(timestamp).getTime()) / (1000 * 60 * 60))
    if (hours < 1) return 'Just now'
    if (hours < 24) return `${hours}h ago`
    const days = Math.floor(hours / 24)
    return `${days}d ago`
  }

  if (urgentOrders.length === 0) {
    return (
      <div className="glass-card p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-green-500/10 rounded-xl">
            <AlertTriangle className="h-6 w-6 text-green-500" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground">All Caught Up!</h3>
            <p className="text-xs text-muted-foreground">No urgent orders</p>
          </div>
        </div>
        <div className="text-center py-8 text-muted-foreground">
          <div className="text-6xl mb-4">Ã¢Å“â€¦</div>
          <p className="text-sm">Great job! All orders are completed.</p>
          <p className="text-xs mt-2">Time to relax or prepare for new orders!</p>
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-2xl border-2 border-red-200 bg-white p-6 shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-red-100 rounded-xl">
            <AlertTriangle className="h-6 w-6 text-red-600" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">Urgent Attention Needed</h3>
            <p className="text-sm text-gray-600">{urgentOrders.length} pending order{urgentOrders.length !== 1 ? 's' : ''}</p>
          </div>
        </div>
        <div className="px-3 py-1 bg-red-600 text-white text-sm font-semibold rounded-full">
          {urgentOrders.length} Active
        </div>
      </div>

      {/* Orders List */}
      <div className="space-y-3">
        {urgentOrders.map((order, index) => {
          const urgency = getUrgencyLevel(order)
          
          return (
            <div 
              key={order.id}
              className="p-4 rounded-xl border border-gray-200 hover:border-red-300 hover:bg-red-50 transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${urgency.bgColor.replace('/10', '-100')} ${urgency.color.replace('text-', 'text-')}`}>
                      {urgency.label}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {getTimeAgo(order.timestamp)}
                    </span>
                  </div>
                  
                  <div className="mb-2">
                    <p className="text-sm font-semibold text-gray-900">
                      {order.firstName} {order.lastName}
                    </p>
                    <p className="text-xs text-gray-600 mt-1">{order.services}</p>
                  </div>
                  
                  <div className="flex items-center gap-3 text-xs">
                    {order.phoneNumber && (
                      <a href={`tel:${order.phoneNumber}`} className="flex items-center gap-1 text-red-600 hover:underline font-medium">
                        <Phone className="h-3 w-3" />
                        Call
                      </a>
                    )}
                    {order.email && (
                      <a href={`mailto:${order.email}`} className="flex items-center gap-1 text-red-600 hover:underline font-medium">
                        <Mail className="h-3 w-3" />
                        Email
                      </a>
                    )}
                    {order.address && (
                      <div className="flex items-center gap-1 text-gray-600">
                        <MapPin className="h-3 w-3" />
                        <span className="truncate max-w-[150px]">{order.address.split(',')[0]}</span>
                      </div>
                    )}
                  </div>
                </div>
                
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </div>
              
              <div className="flex items-center justify-between pt-3 mt-3 border-t border-gray-200">
                <div className="text-xs text-gray-600">
                  Status: <span className="font-semibold text-gray-900 capitalize">{order.status.replace('_', ' ')}</span>
                </div>
                <button className="px-3 py-1.5 bg-red-600 text-white text-xs font-semibold rounded-lg hover:bg-red-700 transition-colors">
                  Take Action
                </button>
              </div>
            </div>
          )
        })}
      </div>

      {/* Footer */}
      {urgentOrders.length > 0 && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl">
          <div className="flex items-start gap-2">
            <Clock className="h-5 w-5 text-red-600 mt-0.5" />
            <div className="text-sm text-red-800">
              <strong>Tip:</strong> Contact customers within 2 hours for best satisfaction ratings!
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
