"use client"

import { useEffect, useState } from 'react'
import { Search, Filter, Mail, Phone, Calendar } from 'lucide-react'
import { Input } from "@/carKey/components/ui/input"
import { Badge } from "@/carKey/components/ui/badge"
import { Button } from "@/carKey/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/carKey/components/ui/select"

interface Contact {
  id: number
  timestamp: string
  name: string
  email: string
  phone: string
  service: string
  message: string
  additionalData: string
}

export default function Contacts() {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [search, setSearch] = useState("")
  const [serviceFilter, setServiceFilter] = useState("all")

  useEffect(() => {
    // Fetch contacts from Google Sheets via API
    fetch('/api/contacts')
      .then(res => res.json())
      .then(data => {
        console.log('📋 Contacts data received:', data)
        setContacts(data.contacts || [])
        setLoading(false)
      })
      .catch(err => {
        console.error('Error fetching contacts:', err)
        setError(err.message)
        setLoading(false)
      })
  }, [])

  const filtered = contacts.filter(contact => {
    const matchesSearch = 
      contact.name.toLowerCase().includes(search.toLowerCase()) ||
      contact.email.toLowerCase().includes(search.toLowerCase()) ||
      contact.service.toLowerCase().includes(search.toLowerCase())
    const matchesService = serviceFilter === "all" || contact.service === serviceFilter
    return matchesSearch && matchesService
  })

  // Get unique services for filter
  const uniqueServices = Array.from(new Set(contacts.map(c => c.service))).filter(Boolean)

  if (loading) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground tracking-tight">Contact Messages</h1>
          <p className="text-sm text-muted-foreground mt-1">Loading submissions from Google Sheets...</p>
        </div>
        <div className="glass-card p-6 flex items-center justify-center" style={{ minHeight: '200px' }}>
          <div className="animate-pulse text-muted-foreground">Loading...</div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground tracking-tight">Contact Messages</h1>
          <p className="text-sm text-muted-foreground mt-1">Error loading data</p>
        </div>
        <div className="glass-card p-6 bg-red-900/20 border-red-500">
          <p className="text-red-400">Error: {error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground tracking-tight">Contact Messages</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Messages from your website visitors (via Google Forms)
          {contacts.length > 0 && ` • ${contacts.length} submission${contacts.length !== 1 ? 's' : ''}`}
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search by name, email, or service..." 
            value={search} 
            onChange={e => setSearch(e.target.value)} 
            className="pl-9 bg-muted/50 border-border" 
          />
        </div>
        <Select value={serviceFilter} onValueChange={setServiceFilter}>
          <SelectTrigger className="w-full sm:w-48 bg-muted/50 border-border"><SelectValue /></SelectTrigger>
          <SelectContent className="bg-card border-border">
            <SelectItem value="all">All Services</SelectItem>
            {uniqueServices.map(service => (
              <SelectItem key={service} value={service}>{service}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="glass-card p-6">
        {contacts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">No contact messages yet</p>
            <p className="text-sm text-muted-foreground">
              When someone submits your Google Form, their response will appear here automatically.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Table Header */}
            <div className="hidden md:grid grid-cols-12 gap-4 pb-3 border-b text-sm font-semibold text-muted-foreground">
              <div className="col-span-2">Date/Time</div>
              <div className="col-span-3">Name & Phone</div>
              <div className="col-span-3">Email</div>
              <div className="col-span-4">Service</div>
            </div>

            {/* Contact List */}
            {filtered.map((contact) => (
              <div key={contact.id} className="border rounded-lg p-4 hover:bg-accent/50 transition-colors">
                <div className="flex flex-col md:grid md:grid-cols-12 gap-3">
                  {/* Date/Time */}
                  <div className="col-span-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground mb-1">
                      <Calendar className="h-3 w-3" />
                      <span className="font-medium text-foreground">
                        {contact.timestamp ? new Date(contact.timestamp).toLocaleDateString() : 'N/A'}
                      </span>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {contact.timestamp ? new Date(contact.timestamp).toLocaleTimeString() : ''}
                    </div>
                  </div>

                  {/* Name & Phone */}
                  <div className="col-span-3">
                    <div className="font-semibold text-foreground mb-1">{contact.name || 'Not provided'}</div>
                    {contact.phone ? (
                      <a href={`tel:${contact.phone}`} className="flex items-center gap-1.5 text-blue-400 hover:underline text-xs">
                        <Phone className="h-3 w-3" />
                        <span className="font-medium">{contact.phone}</span>
                      </a>
                    ) : (
                      <span className="text-muted-foreground text-xs">No phone number</span>
                    )}
                  </div>

                  {/* Email */}
                  <div className="col-span-3">
                    {contact.email ? (
                      <a href={`mailto:${contact.email}`} className="flex items-center gap-2 text-blue-400 hover:underline text-sm">
                        <Mail className="h-3 w-3" />
                        {contact.email}
                      </a>
                    ) : (
                      <span className="text-muted-foreground text-sm">Not provided</span>
                    )}
                  </div>

                  {/* Service */}
                  <div className="col-span-4">
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                      {contact.service || 'Not specified'}
                    </Badge>
                  </div>
                </div>

                {/* Message - Full Width */}
                {contact.message && (
                  <div className="mt-3 pt-3 border-t">
                    <div className="text-sm font-medium text-foreground mb-1">Message:</div>
                    <p className="text-foreground text-sm bg-muted/30 p-3 rounded">{contact.message}</p>
                  </div>
                )}

                {/* Additional Data */}
                {contact.additionalData && (
                  <div className="mt-2 pt-2 border-t">
                    <div className="text-xs text-muted-foreground">Additional: {contact.additionalData}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
