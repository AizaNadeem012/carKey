"use client"

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

interface SyncContextType {
  lastSyncTime: number | null
  isOnline: boolean
  triggerRefresh: () => void
}

const SyncContext = createContext<SyncContextType | undefined>(undefined)

export function SyncProvider({ children }: { children: ReactNode }) {
  const [lastSyncTime, setLastSyncTime] = useState<number | null>(null)
  const [isOnline, setIsOnline] = useState(true)

  // Listen for Google Sheets updates
  useEffect(() => {
    const handleSheetsUpdate = (event: CustomEvent) => {
      console.log('📊 Google Sheets updated:', event.detail)
      setLastSyncTime(Date.now())
      
      // Broadcast to all pages
      localStorage.setItem('sheetsUpdate', JSON.stringify(event.detail))
    }

    window.addEventListener('google-sheets-updated', handleSheetsUpdate as EventListener)

    return () => {
      window.removeEventListener('google-sheets-updated', handleSheetsUpdate as EventListener)
    }
  }, [])

  // Listen for localStorage changes (cross-tab sync)
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'sheetsUpdate') {
        console.log('🔄 Cross-tab sync detected:', e.newValue)
        setLastSyncTime(Date.now())
      }
    }

    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  // Check online status
  useEffect(() => {
    const checkOnline = () => setIsOnline(navigator.onLine)
    
    window.addEventListener('online', checkOnline)
    window.addEventListener('offline', checkOnline)
    
    return () => {
      window.removeEventListener('online', checkOnline)
      window.removeEventListener('offline', checkOnline)
    }
  }, [])

  const triggerRefresh = () => {
    setLastSyncTime(Date.now())
    // Trigger a full refresh across all tabs
    localStorage.setItem('forceRefresh', Date.now().toString())
  }

  return (
    <SyncContext.Provider value={{ lastSyncTime, isOnline, triggerRefresh }}>
      {children}
    </SyncContext.Provider>
  )
}

export function useSync() {
  const context = useContext(SyncContext)
  if (context === undefined) {
    throw new Error('useSync must be used within a SyncProvider')
  }
  return context
}
