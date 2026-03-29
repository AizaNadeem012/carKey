"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  BarChart3,
  Settings,
  Globe,
  MessageSquare,
  LogOut,
  Menu,
  X,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { SyncProvider } from "@/contexts/sync-provider"
import { NotificationBell } from "@/dashboard/NotificationBell"
import { ThemeToggle } from "@/dashboard/ThemeToggle"
import { QuickActions } from "@/dashboard/QuickActions"

const navigation = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Services", href: "/admin/services", icon: Package },
  { name: "Orders", href: "/admin/orders", icon: ShoppingCart },
  { name: "Users", href: "/admin/users", icon: Users },
  { name: "Analytics", href: "/admin/analytics", icon: BarChart3 },
  { name: "Contacts", href: "/admin/contacts", icon: MessageSquare },
  { name: "Integrations", href: "/admin/integrations", icon: Globe },
  { name: "Settings", href: "/admin/settings", icon: Settings },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    const isAuth = localStorage.getItem("adminAuth")
    if (!isAuth && pathname !== "/admin/login") {
      localStorage.setItem("adminAuth", "true")
      localStorage.setItem("adminEmail", "admin@carkeysinstockport.co.uk")
    }
    
    // Update admin email display after hydration
    const emailDisplay = document.getElementById('admin-email-display')
    if (emailDisplay) {
      const email = localStorage.getItem("adminEmail") || "Admin"
      emailDisplay.textContent = email
    }
  }, [pathname])

  const handleLogout = () => {
    localStorage.removeItem("adminAuth")
    localStorage.removeItem("adminEmail")
    window.location.href = "/admin/login"
  }

  // If on login page or forgot-password page, show only the form without layout
  if (pathname === "/admin/login" || pathname === "/admin/forgot-password" || pathname === "/admin/reset-password") {
    return (
      <>
        <style>{`
          header.bg-slate-900, 
          footer.bg-slate-900,
          div.fixed.bottom-0 {
            display: none !important;
          }
        `}</style>
        {children}
      </>
    )
  }

  // Hide website header/footer on other admin pages
  return (
    <SyncProvider>
      <style>{`
        header.bg-slate-900, 
        footer.bg-slate-900,
        div.fixed.bottom-0 {
          display: none !important;
        }
      `}</style>
      <div className="min-h-screen bg-background">
        {/* Mobile sidebar backdrop */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/50 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside
          className={cn(
            "fixed inset-y-0 left-0 z-50 w-64 transform border-r bg-card transition-transform duration-200 ease-in-out lg:translate-x-0",
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex h-full flex-col">
            {/* Logo */}
            <div className="flex h-16 items-center border-b px-6">
              <h1 className="text-lg font-bold text-foreground">Car Keys Admin</h1>
              <button
                onClick={() => setSidebarOpen(false)}
                className="ml-auto lg:hidden"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 space-y-1 overflow-y-auto p-4">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.name}
                  </Link>
                )
              })}
            </nav>

            {/* Logout */}
            <div className="border-t p-4">
              <button
                onClick={handleLogout}
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-destructive hover:bg-destructive/10 transition-colors"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <div className="lg:pl-64">
          {/* Top bar */}
          <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background/80 backdrop-blur-sm px-6">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-foreground">
                {navigation.find((n) => pathname === n.href)?.name || "Admin Panel"}
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <NotificationBell />
              <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="h-4 w-4" />
                <span id="admin-email-display">Admin</span>
              </div>
            </div>
          </header>

          {/* Page content */}
          <main className="p-6">
            {children}
          </main>

          {/* Floating Quick Actions Button */}
          <div className="fixed bottom-6 right-6 z-50">
            <QuickActions />
          </div>
        </div>
      </div>
    </SyncProvider>
  )
}