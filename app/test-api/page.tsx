"use client"

import { useEffect, useState } from 'react'

export default function TestAPI() {
  const [contactsResult, setContactsResult] = useState<any>(null)
  const [ordersResult, setOrdersResult] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function testAPIs() {
      try {
        // Test Contacts API
        const contactsRes = await fetch('/api/contacts')
        const contactsData = await contactsRes.json()
        setContactsResult({
          status: contactsRes.status,
          data: contactsData
        })

        // Test Orders API
        const ordersRes = await fetch('/api/orders')
        const ordersData = await ordersRes.json()
        setOrdersResult({
          status: ordersRes.status,
          data: ordersData
        })
      } catch (error) {
        console.error('Test failed:', error)
      } finally {
        setLoading(false)
      }
    }

    testAPIs()
  }, [])

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">ðŸ§ª API Test Page</h1>
        
        {loading ? (
          <div className="text-center py-12">
            <p className="text-xl">Testing APIs...</p>
          </div>
        ) : (
          <div className="space-y-8">
            
            {/* Contacts Test */}
            <div className="bg-slate-800 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">ðŸ“ž Contacts API (/api/contacts)</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-sm">Status:</span>
                  <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                    contactsResult?.status === 200 ? 'bg-green-500' : 'bg-red-500'
                  }`}>
                    {contactsResult?.status || 'Error'}
                  </span>
                </div>
                <div className="bg-slate-900 p-4 rounded font-mono text-sm overflow-auto max-h-96">
                  <pre>{JSON.stringify(contactsResult?.data, null, 2)}</pre>
                </div>
              </div>
            </div>

            {/* Orders Test */}
            <div className="bg-slate-800 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">ðŸ›’ Orders API (/api/orders)</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-sm">Status:</span>
                  <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                    ordersResult?.status === 200 ? 'bg-green-500' : 'bg-red-500'
                  }`}>
                    {ordersResult?.status || 'Error'}
                  </span>
                </div>
                <div className="bg-slate-900 p-4 rounded font-mono text-sm overflow-auto max-h-96">
                  <pre>{JSON.stringify(ordersResult?.data, null, 2)}</pre>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="bg-blue-900/30 border border-blue-500 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-3">ðŸ“Š Test Summary</h3>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Contacts Count:</strong> {contactsResult?.data?.contacts?.length || 0}
                </p>
                <p>
                  <strong>Orders Count:</strong> {ordersResult?.data?.orders?.length || 0}
                </p>
                
                {contactsResult?.data?.contacts?.length === 0 && (
                  <div className="mt-4 p-4 bg-yellow-900/30 border border-yellow-500 rounded">
                    <p className="font-semibold text-yellow-200">âš ï¸ No contacts found</p>
                    <p className="text-sm mt-2">
                      Make sure your "CarForm" tab has data and service account has access.
                    </p>
                  </div>
                )}

                {ordersResult?.data?.orders?.length === 0 && (
                  <div className="mt-4 p-4 bg-yellow-900/30 border border-yellow-500 rounded">
                    <p className="font-semibold text-yellow-200">âš ï¸ No orders found</p>
                    <p className="text-sm mt-2">
                      Create an "Orders" tab in your Google Sheet with proper headers and add sample data.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex gap-4 flex-wrap">
              <a 
                href="/admin/contacts" 
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition"
              >
                Go to Contacts Admin
              </a>
              <a 
                href="/admin/orders" 
                className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition"
              >
                Go to Orders Admin
              </a>
              <button 
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg font-semibold transition"
              >
                Retest
              </button>
            </div>

          </div>
        )}
      </div>
    </div>
  )
}
