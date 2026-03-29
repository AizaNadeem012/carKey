"use client"

import { useState, useEffect } from "react"
import { Plus, Search, Edit2, Trash2, ToggleLeft, ToggleRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/hooks/use-toast"

interface Service {
  id: string
  name: string
  category: string
  price: number
  description: string
  status: "active" | "inactive"
}

interface Contact {
  id: number
  timestamp: string
  name: string
  email: string
  phone: string
  service: string
  message: string
}

const categories = [
  "Car Key Replacement",
  "Lockout Assistance", 
  "Auto Keys Programming",
  "Ignition Repair",
  "Emergency Service",
  "Van Lockout",
  "Key Fob Programming",
  "Remote Key Fobs",
  "Other"
]

// Default services based on your offerings
const defaultServices: Service[] = [
  {
    id: "svc-car-key-replacement",
    name: "Car Key Replacement",
    category: "Car Key Replacement",
    price: 150,
    description: "Professional car key replacement service for all vehicle makes and models. Spare keys, lost keys, and transponder keys.",
    status: "active"
  },
  {
    id: "svc-lockout-assistance",
    name: "Lockout Assistance",
    category: "Lockout Assistance",
    price: 150,
    description: "Fast and reliable car lockout service. Locked out? We'll get you back in your vehicle quickly without damage.",
    status: "active"
  },
  {
    id: "svc-auto-keys-programming",
    name: "Auto Keys Programming",
    category: "Auto Keys Programming",
    price: 150,
    description: "Expert car key programming service. We program transponder keys, smart keys, and remote fobs for all major brands.",
    status: "active"
  },
  {
    id: "svc-ignition-repair",
    name: "Ignition Repair",
    category: "Ignition Repair",
    price: 150,
    description: "Professional ignition switch repair and replacement. Fixing ignition problems, stuck keys, and starting issues.",
    status: "active"
  },
  {
    id: "svc-emergency-service",
    name: "Emergency Service",
    category: "Emergency Service",
    price: 150,
    description: "24/7 emergency locksmith service for cars. Available round the clock for urgent car key and lockout emergencies.",
    status: "active"
  },
  {
    id: "svc-van-lockout",
    name: "Van Lockout",
    category: "Van Lockout",
    price: 150,
    description: "Specialized van lockout service for commercial and private vans. Quick response to get you back on the road.",
    status: "active"
  },
  {
    id: "svc-key-fob-programming",
    name: "Key Fob Programming",
    category: "Key Fob Programming",
    price: 150,
    description: "Professional key fob programming and replacement. Remote fob coding, battery replacement, and repairs.",
    status: "active"
  },
  {
    id: "svc-remote-key-fobs",
    name: "Remote Key Fobs",
    category: "Remote Key Fobs",
    price: 150,
    description: "Complete remote key fob service including supply, programming, and repair. All makes and models covered.",
    status: "active"
  }
]

export default function Services() {
  const [servicesList, setServicesList] = useState<Service[]>([])
  const [contacts, setContacts] = useState<Contact[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [dialogOpen, setDialogOpen] = useState(false)
  const [editingService, setEditingService] = useState<Service | null>(null)
  const [form, setForm] = useState({ name: "", category: "", price: "", description: "" })

  // Fetch contacts and merge with default services
  useEffect(() => {
    fetch('/api/contacts')
      .then(res => res.json())
      .then(data => {
        const contactList = data.contacts || []
        setContacts(contactList)
        
        // Start with default services
        let finalServices = [...defaultServices]
        
        // Extract unique services from contacts that aren't in defaults
        const existingServiceNames = new Set(finalServices.map(s => s.name.toLowerCase()))
        
        contactList.forEach((contact: Contact) => {
          if (contact.service && !existingServiceNames.has(contact.service.toLowerCase())) {
            const serviceName = contact.service.trim()
            const category = guessCategory(serviceName)
            
            finalServices.push({
              id: `svc-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
              name: serviceName,
              category: category,
              price: 0,
              description: contact.message || `Service: ${serviceName}`,
              status: "active"
            })
            
            existingServiceNames.add(serviceName.toLowerCase())
          }
        })
        
        setServicesList(finalServices)
        setLoading(false)
      })
      .catch(err => {
        console.error('Error fetching services:', err)
        setLoading(false)
      })
  }, [])

  const guessCategory = (serviceName: string): string => {
    const lower = serviceName.toLowerCase()
    if (lower.includes('program')) return "Auto Keys Programming"
    if (lower.includes('lockout')) return "Lockout Assistance"
    if (lower.includes('remote') || lower.includes('fob')) return "Remote Key Fobs"
    if (lower.includes('ignition')) return "Ignition Repair"
    if (lower.includes('emerg')) return "Emergency Service"
    if (lower.includes('van')) return "Van Lockout"
    if (lower.includes('replace')) return "Car Key Replacement"
    return "Other"
  }

  const filtered = servicesList.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(search.toLowerCase())
    const matchesCat = categoryFilter === "all" || s.category === categoryFilter
    return matchesSearch && matchesCat
  })

  const openCreate = () => {
    setEditingService(null)
    setForm({ name: "", category: "", price: "", description: "" })
    setDialogOpen(true)
  }

  const openEdit = (service: Service) => {
    setEditingService(service)
    setForm({ name: service.name, category: service.category, price: String(service.price), description: service.description })
    setDialogOpen(true)
  }

  const handleSave = () => {
    if (!form.name || !form.category || !form.price) return
    if (editingService) {
      setServicesList(prev => prev.map(s => s.id === editingService.id ? { ...s, ...form, price: Number(form.price) } : s))
      toast({ title: "Service updated" })
    } else {
      const newService: Service = { id: String(Date.now()), ...form, price: Number(form.price), status: "active" }
      setServicesList(prev => [...prev, newService])
      toast({ title: "Service created" })
    }
    setDialogOpen(false)
  }

  const toggleStatus = (id: string) => {
    setServicesList(prev => prev.map(s => s.id === id ? { ...s, status: s.status === "active" ? "inactive" : "active" } : s))
  }

  const deleteService = (id: string) => {
    setServicesList(prev => prev.filter(s => s.id !== id))
    toast({ title: "Service deleted", variant: "destructive" })
  }

  if (loading) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground tracking-tight">Services</h1>
          <p className="text-sm text-muted-foreground mt-1">Loading your services...</p>
        </div>
        <div className="glass-card p-6 flex items-center justify-center" style={{ minHeight: '400px' }}>
          <div className="animate-pulse text-muted-foreground text-lg">Loading services...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-border/50">
        <div>
          <h1 className="text-2xl font-bold text-foreground tracking-tight flex items-center gap-3">
            <span className="p-2 bg-primary/10 rounded-lg">🛠️</span>
            Services
          </h1>
          <p className="text-sm text-muted-foreground mt-2 flex items-center gap-2">
            <span>Manage your service offerings</span>
            {servicesList.length > 0 && (
              <>
                <span className="w-1 h-1 bg-primary rounded-full" />
                <span className="font-semibold text-primary">{servicesList.length} services available</span>
              </>
            )}
          </p>
        </div>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={openCreate} className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300">
              <Plus className="h-4 w-4 mr-2" /> Add Service
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-card border-border max-w-md">
            <DialogHeader>
              <DialogTitle className="text-foreground flex items-center gap-2">
                <span className="text-xl">{editingService ? "✏️" : "➕"}</span>
                {editingService ? "Edit Service" : "Add New Service"}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Service Name</label>
                <Input placeholder="e.g., Car Key Replacement" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} className="bg-muted/50 border-border focus:border-primary/50 focus:ring-primary/20" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Category</label>
                <Select value={form.category} onValueChange={v => setForm(f => ({ ...f, category: v }))}>
                  <SelectTrigger className="bg-muted/50 border-border focus:border-primary/50"><SelectValue placeholder="Select category" /></SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    {categories.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Price (£)</label>
                <Input type="number" placeholder="150" value={form.price} onChange={e => setForm(f => ({ ...f, price: e.target.value }))} className="bg-muted/50 border-border focus:border-primary/50 focus:ring-primary/20" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Description</label>
                <Input placeholder="Describe your service..." value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} className="bg-muted/50 border-border focus:border-primary/50 focus:ring-primary/20" />
              </div>
              <Button onClick={handleSave} className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                {editingService ? "✓ Update Service" : "➕ Create Service"}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 bg-muted/30 p-4 rounded-lg border border-border/50">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="🔍 Search services..." value={search} onChange={e => setSearch(e.target.value)} className="pl-9 bg-background/50 border-border focus:border-primary/50 focus:ring-primary/20" />
        </div>
        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger className="w-full sm:w-48 bg-background/50 border-border focus:border-primary/50"><SelectValue /></SelectTrigger>
          <SelectContent className="bg-card border-border">
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
          </SelectContent>
        </Select>
      </div>

      {servicesList.length === 0 ? (
        <div className="glass-card p-12 text-center">
          <h3 className="text-xl font-bold mb-3">No Services Yet</h3>
          <p className="text-muted-foreground mb-6">
            Services will be automatically extracted from your contact form submissions.
          </p>
          <Button onClick={openCreate} className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Plus className="h-4 w-4 mr-2" /> Add Your First Service
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map((service) => (
            <div key={service.id} className="glass-card p-6 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 animate-fade-in group relative overflow-hidden">
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">{service.name}</h3>
                    <Badge variant="outline" className="mt-2 text-xs bg-primary/10 text-primary border-primary/20">
                      {service.category}
                    </Badge>
                  </div>
                  <Badge variant={service.status === "active" ? "default" : "secondary"} className={`${
                    service.status === "active" 
                      ? "bg-success/20 text-success border-success/30 shadow-sm shadow-success/20" 
                      : "bg-muted text-muted-foreground border-border"
                  }`}>
                    {service.status === "active" ? "✓ Active" : "○ Inactive"}
                  </Badge>
                </div>
                
                <p className="text-sm text-muted-foreground mb-6 line-clamp-2 min-h-[2.5rem]">{service.description}</p>
                
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <span className="text-lg font-bold text-primary">£{service.price.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <button 
                      onClick={() => toggleStatus(service.id)} 
                      className={`p-2 rounded-lg transition-all duration-200 ${
                        service.status === "active" 
                          ? "hover:bg-success/10 text-success hover:scale-110" 
                          : "hover:bg-muted/50 text-muted-foreground"
                      }`}
                      title={service.status === "active" ? "Deactivate" : "Activate"}
                    >
                      {service.status === "active" ? <ToggleRight className="h-5 w-5" /> : <ToggleLeft className="h-5 w-5" />}
                    </button>
                    
                    <button 
                      onClick={() => openEdit(service)} 
                      className="p-2 rounded-lg hover:bg-blue-500/10 text-blue-500 hover:scale-110 transition-all duration-200"
                      title="Edit Service"
                    >
                      <Edit2 className="h-5 w-5" />
                    </button>
                    
                    <button 
                      onClick={() => deleteService(service.id)} 
                      className="p-2 rounded-lg hover:bg-red-500/10 text-red-500 hover:scale-110 transition-all duration-200"
                      title="Delete Service"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
