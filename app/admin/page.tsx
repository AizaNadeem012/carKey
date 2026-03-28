"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function AdminIndex() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to dashboard
    router.push("/admin/dashboard")
  }, [router])

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-muted-foreground">Redirecting to dashboard...</p>
      </div>
    </div>
  )
}
