"use client"

import { useState } from "react"
import { Plus, ShoppingCart, Users, FileText, BarChart3, Settings, Mail, Phone, Zap } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/carKey/components/ui/dropdown-menu"
import { Button } from "@/carKey/components/ui/button"
import { Badge } from "@/carKey/components/ui/badge"

export function QuickActions() {
  const [open, setOpen] = useState(false)

  const quickActions = [
    {
      name: "New Order",
      icon: ShoppingCart,
      href: "/admin/orders",
      description: "Create manual order",
      color: "text-red-500",
      bgColor: "bg-red-500/10"
    },
    {
      name: "Add Contact",
      icon: Users,
      href: "/admin/contacts",
      description: "Add new contact",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      name: "View Analytics",
      icon: BarChart3,
      href: "/admin/analytics",
      description: "Check performance",
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    {
      name: "Export Report",
      icon: FileText,
      href: "/admin/orders",
      description: "Download CSV",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    },
    {
      name: "Settings",
      icon: Settings,
      href: "/admin/settings",
      description: "Configure panel",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10"
    },
    {
      name: "Send Email",
      icon: Mail,
      href: "mailto:admin@carkeysinstockport.co.uk",
      description: "Contact support",
      color: "text-pink-500",
      bgColor: "bg-pink-500/10"
    },
  ]

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button 
          size="lg"
          className="relative h-14 w-14 rounded-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 hover:scale-110"
        >
          <Plus className="h-6 w-6 text-white" />
          <Badge className="absolute -top-1 -right-1 h-6 w-6 rounded-full bg-yellow-500 text-yellow-900 text-xs flex items-center justify-center p-0 min-w-6 animate-pulse">
            <Zap className="h-3 w-3" />
          </Badge>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-72 bg-card border-border p-2" align="end">
        <DropdownMenuLabel className="flex items-center gap-2 py-2">
          <Zap className="h-4 w-4 text-yellow-500" />
          <span className="font-semibold text-foreground">Quick Actions</span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        
        <div className="grid grid-cols-2 gap-2 p-2">
          {quickActions.map((action) => (
            <a
              key={action.name}
              href={action.href}
              onClick={() => setOpen(false)}
              className={`flex flex-col items-center gap-2 p-3 rounded-lg transition-all hover:${action.bgColor} group cursor-pointer`}
            >
              <div className={`p-3 rounded-full ${action.bgColor} group-hover:scale-110 transition-transform`}>
                <action.icon className={`h-5 w-5 ${action.color}`} />
              </div>
              <div className="text-center">
                <p className="text-sm font-medium text-foreground">{action.name}</p>
                <p className="text-xs text-muted-foreground">{action.description}</p>
              </div>
            </a>
          ))}
        </div>

        <DropdownMenuSeparator />
        
        <div className="px-2 py-2">
          <p className="text-xs text-muted-foreground text-center">
            ⌨️ Press <kbd className="px-1.5 py-0.5 bg-muted rounded text-[10px]">Shift</kbd> + <kbd className="px-1.5 py-0.5 bg-muted rounded text-[10px]">?</kbd> for keyboard shortcuts
          </p>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
