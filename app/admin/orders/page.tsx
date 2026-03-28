"use client"

import { useState, useEffect } from "react"
import { Search, Filter, Download, Eye, Calendar, DollarSign, User, Phone, Mail, MapPin, ClipboardList, X, Printer, FileText, CheckSquare, Square, RefreshCw, History } from "lucide-react"
import { Input } from "@/carKey/components/ui/input"
import { Badge } from "@/carKey/components/ui/badge"
import { Button } from "@/carKey/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/carKey/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/carKey/components/ui/select"
import { toast } from "@/carKey/hooks/use-toast"
import { Checkbox } from "@/carKey/components/ui/checkbox"
import { CustomerHistoryModal } from "@/carKey/components/dashboard/CustomerHistoryModal"
import { RevenueCalculator } from "@/carKey/components/dashboard/RevenueCalculator"

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
  amount?: number
  assignedTo?: string
  notes?: string
}

export default function Orders() {
  const [ordersList, setOrdersList] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [dateFrom, setDateFrom] = useState("")
  const [dateTo, setDateTo] = useState("")
  const [sortBy, setSortBy] = useState("newest")
  const [selectedOrders, setSelectedOrders] = useState<Set<string>>(new Set())
  const [viewingOrder, setViewingOrder] = useState<Order | null>(null)
  const [viewingCustomerHistory, setViewingCustomerHistory] = useState<{email?: string, phone?: string} | null>(null)

  useEffect(() => {
    fetchOrders()
    
    // Auto-refresh every 5 seconds
    const interval = setInterval(fetchOrders, 5000)
    return () => clearInterval(interval)
  }, [])

  const fetchOrders = async () => {
    try {
      const res = await fetch('/api/orders')
      const data = await res.json()
      setOrdersList(data.orders || [])
      setLoading(false)
    } catch (err) {
      console.error('Error fetching orders:', err)
      setLoading(false)
      toast({ 
        title: "Error loading orders", 
        description: "Could not connect to Google Sheets. Please check your credentials.",
        variant: "destructive"
      })
    }
  }

  const filtered = ordersList.filter(o => {
    const matchesSearch = 
      o.firstName.toLowerCase().includes(search.toLowerCase()) || 
      o.lastName.toLowerCase().includes(search.toLowerCase()) || 
      (o.firstName + ' ' + o.lastName).toLowerCase().includes(search.toLowerCase()) || 
      o.id.toLowerCase().includes(search.toLowerCase()) || 
      o.services.toLowerCase().includes(search.toLowerCase()) ||
      o.email.toLowerCase().includes(search.toLowerCase()) ||
      o.phoneNumber.toLowerCase().includes(search.toLowerCase()) ||
      o.address.toLowerCase().includes(search.toLowerCase())
    
    const matchesStatus = statusFilter === "all" || o.status === statusFilter
    
    const orderDate = new Date(o.timestamp)
    const matchesDateFrom = !dateFrom || orderDate >= new Date(dateFrom)
    const matchesDateTo = !dateTo || orderDate <= new Date(dateTo)
    
    return matchesSearch && matchesStatus && matchesDateFrom && matchesDateTo
  }).sort((a, b) => {
    if (sortBy === "newest") return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    if (sortBy === "oldest") return new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
    const amountA = (a.services.split(',').filter(s => s.trim()).length * 150)
    const amountB = (b.services.split(',').filter(s => s.trim()).length * 150)
    if (sortBy === "highest") return amountB - amountA
    if (sortBy === "lowest") return amountA - amountB
    return 0
  })

  const toggleSelectOrder = (id: string) => {
    const newSelected = new Set(selectedOrders)
    if (newSelected.has(id)) {
      newSelected.delete(id)
    } else {
      newSelected.add(id)
    }
    setSelectedOrders(newSelected)
  }

  const toggleSelectAll = () => {
    if (selectedOrders.size === filtered.length) {
      setSelectedOrders(new Set())
    } else {
      setSelectedOrders(new Set(filtered.map(o => o.id)))
    }
  }

  const exportToCSV = () => {
    const headers = ["Order ID", "Date", "Customer Name", "Services", "Email", "Phone", "Address", "Status", "Amount"]
    const csvData = filtered.map(order => {
      const serviceCount = order.services.split(',').filter(s => s.trim()).length
      const amount = serviceCount * 150
      return [
        order.id,
        new Date(order.timestamp).toLocaleString(),
        `${order.firstName} ${order.lastName}`,
        order.services,
        order.email,
        order.phoneNumber,
        order.address,
        order.status,
        `£${amount}`
      ].join(',')
    })
    
    const csv = [headers.join(','), ...csvData].join('\n')
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `orders-${new Date().toISOString().split('T')[0]}.csv`
    a.click()
    toast({ title: "Export successful", description: "CSV file downloaded" })
  }

  const printOrder = (order: Order) => {
    const printWindow = window.open('', '_blank')
    const serviceCount = order.services.split(',').filter(s => s.trim()).length
    const amount = serviceCount * 150
    
    printWindow?.document.write(`
      <html>
        <head>
          <title>Order #${order.id} - Invoice</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 40px; }
            .header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #f30101; padding-bottom: 20px; }
            .invoice-title { font-size: 24px; color: #f30101; font-weight: bold; }
            .info-section { margin-bottom: 20px; }
            .label { font-weight: bold; color: #666; }
            .value { margin-left: 10px; }
            .total { font-size: 20px; font-weight: bold; color: #f30101; margin-top: 20px; text-align: right; }
            table { width: 100%; border-collapse: collapse; margin-top: 20px; }
            th, td { padding: 10px; text-align: left; border-bottom: 1px solid #ddd; }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="invoice-title">🔑 Car Keys Stockport - Invoice</div>
            <div>Order #${order.id}</div>
            <div>Date: ${new Date(order.timestamp).toLocaleString()}</div>
          </div>
          
          <div class="info-section">
            <div><span class="label">Customer:</span><span class="value">${order.firstName} ${order.lastName}</span></div>
            <div><span class="label">Email:</span><span class="value">${order.email}</span></div>
            <div><span class="label">Phone:</span><span class="value">${order.phoneNumber}</span></div>
            <div><span class="label">Address:</span><span class="value">${order.address}</span></div>
          </div>
          
          <table>
            <tr>
              <th>Service</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
            <tr>
              <td>${order.services}</td>
              <td>${serviceCount}</td>
              <td>£150</td>
              <td>£${amount}</td>
            </tr>
          </table>
          
          <div class="total">Total: £${amount}</div>
          
          <div style="margin-top: 40px; text-align: center; color: #999; font-size: 12px;">
            Thank you for choosing Car Keys Stockport!
          </div>
        </body>
      </html>
    `)
    printWindow?.document.close()
    printWindow?.print()
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

  if (loading) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground tracking-tight">Orders</h1>
          <p className="text-sm text-muted-foreground mt-1">Loading orders from Google Sheets...</p>
        </div>
        <div className="glass-card p-6 flex items-center justify-center" style={{ minHeight: '400px' }}>
          <div className="animate-pulse text-muted-foreground text-lg">Loading orders...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground tracking-tight">Orders</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Track and manage all orders from Google Sheets
            {ordersList.length > 0 && ` • ${ordersList.length} order${ordersList.length !== 1 ? 's' : ''}`}
          </p>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <RevenueCalculator />
          <Button onClick={fetchOrders} variant="outline" size="sm" className="border-border">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
          <Button onClick={exportToCSV} variant="outline" className="border-border">
            <Download className="h-4 w-4 mr-2" />
            Export CSV
          </Button>
        </div>
      </div>

      {/* Advanced Filters */}
      <div className="glass-card p-4 space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-semibold text-foreground">Advanced Filters</span>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search..." 
              value={search} 
              onChange={e => setSearch(e.target.value)} 
              className="pl-9 bg-muted/50 border-border" 
            />
          </div>
          
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="bg-muted/50 border-border">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent className="bg-card border-border">
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="in_progress">In Progress</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="bg-muted/50 border-border">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent className="bg-card border-border">
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="oldest">Oldest First</SelectItem>
              <SelectItem value="highest">Highest Amount</SelectItem>
              <SelectItem value="lowest">Lowest Amount</SelectItem>
            </SelectContent>
          </Select>
          
          <Input 
            type="date" 
            value={dateFrom} 
            onChange={e => setDateFrom(e.target.value)} 
            className="bg-muted/50 border-border"
            placeholder="From date"
          />
          
          <Input 
            type="date" 
            value={dateTo} 
            onChange={e => setDateTo(e.target.value)} 
            className="bg-muted/50 border-border"
            placeholder="To date"
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="glass-card p-12 text-center">
          <ClipboardList className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-3">No Orders Found</h3>
          <p className="text-muted-foreground">
            {ordersList.length === 0 
              ? "When customers submit orders through your website, they will appear here automatically from Google Sheets."
              : "No orders match your current filters. Try adjusting your search criteria."}
          </p>
        </div>
      ) : (
        <>
          {/* Bulk Actions Bar */}
          {selectedOrders.size > 0 && (
            <div className="glass-card p-3 bg-primary/10 border-primary/30 flex items-center justify-between animate-in fade-in slide-in-from-top-2">
              <div className="flex items-center gap-3">
                <Checkbox
                  checked={selectedOrders.size === filtered.length}
                  onCheckedChange={toggleSelectAll}
                />
                <span className="text-sm font-medium text-foreground">
                  {selectedOrders.size} order{selectedOrders.size !== 1 ? 's' : ''} selected
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Button size="sm" variant="outline" className="h-8">
                  <Printer className="h-3 w-3 mr-2" />
                  Print
                </Button>
                <Button size="sm" variant="outline" className="h-8">
                  <Download className="h-3 w-3 mr-2" />
                  Export Selected
                </Button>
                <Button size="sm" variant="destructive" className="h-8">
                  Delete Selected
                </Button>
              </div>
            </div>
          )}

          <div className="glass-card">
            <div className="w-full overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-2 py-3 w-[5%]">
                      <Checkbox
                        checked={selectedOrders.size === filtered.length}
                        onCheckedChange={toggleSelectAll}
                      />
                    </th>
                    <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-2 py-3 w-[8%]">Order</th>
                    <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-2 py-3 w-[12%]">Customer</th>
                    <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-2 py-3 w-[20%] hidden md:table-cell">Services & Details</th>
                    <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-2 py-3 w-[15%] hidden lg:table-cell">Contact</th>
                    <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-2 py-3 w-[15%] hidden xl:table-cell">Address</th>
                    <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-2 py-3 w-[10%]">Status</th>
                    <th className="text-right text-xs font-medium text-muted-foreground uppercase tracking-wider px-2 py-3 w-[10%]">Amount</th>
                    <th className="text-right text-xs font-medium text-muted-foreground uppercase tracking-wider px-2 py-3 w-[5%]">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((order) => {
                    const serviceCount = order.services.split(',').filter(s => s.trim()).length
                    const amount = serviceCount * 150
                    
                    return (
                      <tr key={order.id} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                        <td className="px-2 py-3.5">
                          <Checkbox
                            checked={selectedOrders.has(order.id)}
                            onCheckedChange={() => toggleSelectOrder(order.id)}
                          />
                        </td>
                        <td className="px-2 py-3.5">
                          <p className="text-sm font-mono font-medium text-foreground">{order.id}</p>
                          <p className="text-xs text-muted-foreground">
                            {new Date(order.timestamp).toLocaleDateString()}
                          </p>
                        </td>
                        <td className="px-2 py-3.5">
                          <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                              <User className="h-4 w-4 text-primary" />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-foreground">
                                {order.firstName} {order.lastName}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {new Date(order.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-2 py-3.5 hidden md:table-cell">
                          <p className="text-sm font-medium text-foreground line-clamp-2" title={order.services}>{order.services}</p>
                          {order.additionalDescription && (
                            <p className="text-xs text-muted-foreground truncate mt-1" title={order.additionalDescription}>{order.additionalDescription}</p>
                          )}
                        </td>
                        <td className="px-2 py-3.5 hidden lg:table-cell">
                          <div className="space-y-1">
                            {order.email && (
                              <a href={`mailto:${order.email}`} className="flex items-center gap-1 text-xs text-blue-600 hover:underline">
                                <Mail className="h-3 w-3" />
                                {order.email}
                              </a>
                            )}
                            {order.phoneNumber && (
                              <a href={`tel:${order.phoneNumber}`} className="flex items-center gap-1 text-xs text-blue-600 hover:underline">
                                <Phone className="h-3 w-3" />
                                {order.phoneNumber}
                              </a>
                            )}
                          </div>
                        </td>
                        <td className="px-2 py-3.5 hidden xl:table-cell">
                          <div className="flex items-center gap-1 text-sm text-foreground">
                            <MapPin className="h-3 w-3 text-muted-foreground" />
                            <span className="truncate" title={order.address}>{order.address || 'N/A'}</span>
                          </div>
                        </td>
                        <td className="px-2 py-3.5">
                          <Badge className={getStatusBadgeClass(order.status)}>
                            {order.status === 'in_progress' ? 'In Progress' : order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                          </Badge>
                        </td>
                        <td className="px-5 py-3.5 text-right">
                          <p className="text-sm font-bold text-foreground">£{amount.toLocaleString()}</p>
                          <p className="text-xs text-muted-foreground">{serviceCount} service{serviceCount !== 1 ? 's' : ''}</p>
                        </td>
                        <td className="px-2 py-3.5 text-right">
                          <div className="flex items-center justify-end gap-1">
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => setViewingCustomerHistory({ email: order.email, phone: order.phoneNumber })}
                              className="h-8 w-8 p-0 hover:bg-blue-500/10 hover:text-blue-500"
                              title="View Customer History"
                            >
                              <History className="h-4 w-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => setViewingOrder(order)}
                              className="h-8 w-8 p-0 hover:bg-primary/10 hover:text-primary"
                              title="View Order Details"
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => printOrder(order)}
                              className="h-8 w-8 p-0 hover:bg-primary/10 hover:text-primary"
                              title="Print Invoice"
                            >
                              <Printer className="h-4 w-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {/* Order Details Modal */}
      {viewingOrder && (
        <Dialog open={!!viewingOrder} onOpenChange={() => setViewingOrder(null)}>
          <DialogContent className="bg-card border-border max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="flex items-center justify-between">
                <span className="text-lg font-bold">Order Details</span>
                <Button size="sm" variant="outline" onClick={() => printOrder(viewingOrder)}>
                  <Printer className="h-4 w-4 mr-2" />
                  Print Invoice
                </Button>
              </DialogTitle>
            </DialogHeader>
            
            <div className="space-y-6 mt-4">
              {/* Order Info */}
              <div className="grid grid-cols-2 gap-4 p-4 bg-muted/30 rounded-lg">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Order ID</p>
                  <p className="font-mono font-bold text-foreground">{viewingOrder.id}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Date & Time</p>
                  <p className="text-foreground font-medium">{new Date(viewingOrder.timestamp).toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Status</p>
                  <Badge className={getStatusBadgeClass(viewingOrder.status)}>
                    {viewingOrder.status === 'in_progress' ? 'In Progress' : viewingOrder.status.charAt(0).toUpperCase() + viewingOrder.status.slice(1)}
                  </Badge>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Total Amount</p>
                  <p className="text-lg font-bold text-primary">
                    £{(viewingOrder.services.split(',').filter(s => s.trim()).length * 150).toLocaleString()}
                  </p>
                </div>
              </div>

              {/* Customer Info */}
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Customer Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-muted/30 rounded-lg">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Full Name</p>
                    <p className="text-foreground font-medium">{viewingOrder.firstName} {viewingOrder.lastName}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Email Address</p>
                    <a href={`mailto:${viewingOrder.email}`} className="text-blue-600 hover:underline">
                      {viewingOrder.email}
                    </a>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Phone Number</p>
                    <a href={`tel:${viewingOrder.phoneNumber}`} className="text-blue-600 hover:underline">
                      {viewingOrder.phoneNumber}
                    </a>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Address</p>
                    <p className="text-foreground">{viewingOrder.address}</p>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                  <ClipboardList className="h-4 w-4" />
                  Services Required
                </h3>
                <div className="p-4 bg-muted/30 rounded-lg">
                  <p className="text-foreground font-medium mb-2">{viewingOrder.services}</p>
                  {viewingOrder.additionalDescription && (
                    <div className="mt-3 pt-3 border-t">
                      <p className="text-xs text-muted-foreground mb-1">Additional Notes</p>
                      <p className="text-sm text-foreground">{viewingOrder.additionalDescription}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-end gap-2 pt-4 border-t">
                <Button variant="outline" onClick={() => setViewingOrder(null)}>
                  Close
                </Button>
                <Button className="bg-primary hover:bg-primary/90">
                  Update Status
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Customer History Modal */}
      {viewingCustomerHistory && (
        <CustomerHistoryModal
          customerEmail={viewingCustomerHistory.email || undefined}
          customerPhone={viewingCustomerHistory.phone || undefined}
          onClose={() => setViewingCustomerHistory(null)}
        />
      )}
    </div>
  )
}
