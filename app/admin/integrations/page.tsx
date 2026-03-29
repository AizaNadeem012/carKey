"use client"

import { useState } from "react"
import { Globe, Copy, Plus, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { toast } from "@/hooks/use-toast"

const webhookUrl = "https://api.carkeysinstockport.co.uk/webhook/form-submit/abc123"

const connectedSites = [
  { name: "carkeysinstockport.co.uk", status: "active", submissions: 142, lastSubmission: "2 min ago" },
  { name: "stockport-locksmiths.co.uk", status: "active", submissions: 87, lastSubmission: "1 hr ago" },
  { name: "emergency-locksmith-stockport.com", status: "inactive", submissions: 23, lastSubmission: "3 days ago" },
]

export default function Integrations() {
  const copyWebhook = () => {
    navigator.clipboard.writeText(webhookUrl)
    toast({ title: "Webhook URL copied" })
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground tracking-tight">Website Integrations</h1>
        <p className="text-sm text-muted-foreground mt-1">Connect external website forms to your dashboard</p>
      </div>

      <div className="glass-card p-5">
        <h3 className="text-sm font-semibold text-foreground mb-3">Webhook Endpoint</h3>
        <p className="text-xs text-muted-foreground mb-3">Use this URL in your website's contact form to send submissions directly to your dashboard.</p>
        <div className="flex gap-2">
          <Input value={webhookUrl} readOnly className="bg-muted/50 border-border font-mono text-xs" />
          <Button onClick={copyWebhook} variant="outline" className="border-border text-foreground hover:bg-muted/50 shrink-0">
            <Copy className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="glass-card p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-foreground">Connected Websites</h3>
          <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Plus className="h-4 w-4 mr-1" /> Add Website
          </Button>
        </div>
        <div className="space-y-3">
          {connectedSites.map((site) => (
            <div key={site.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Globe className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{site.name}</p>
                  <p className="text-xs text-muted-foreground">{site.submissions} submissions Ãƒâ€šÃ‚Â· Last: {site.lastSubmission}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge className={site.status === "active" ? "bg-success/20 text-success border-success/30" : "bg-muted text-muted-foreground"}>
                  {site.status}
                </Badge>
                <button className="p-1.5 rounded-md hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-colors">
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="glass-card p-5">
        <h3 className="text-sm font-semibold text-foreground mb-3">Field Mapping</h3>
        <p className="text-xs text-muted-foreground mb-4">Map incoming form fields to your dashboard fields</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            "Name ÃƒÂ¢Ã¢â‚¬Â Ã¢â‚¬â„¢ customer_name",
            "Email ÃƒÂ¢Ã¢â‚¬Â Ã¢â‚¬â„¢ customer_email",
            "Phone ÃƒÂ¢Ã¢â‚¬Â Ã¢â‚¬â„¢ customer_phone",
            "Service ÃƒÂ¢Ã¢â‚¬Â Ã¢â‚¬â„¢ service_type",
            "Message ÃƒÂ¢Ã¢â‚¬Â Ã¢â‚¬â„¢ description",
          ].map((mapping) => (
            <div key={mapping} className="flex items-center gap-2 p-2.5 rounded-lg bg-muted/30 text-sm text-muted-foreground font-mono text-xs">
              {mapping}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
