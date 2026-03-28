import { NextRequest, NextResponse } from "next/server"

// This endpoint will be called by Google Sheets triggers
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { action, orderId, changes } = body

    console.log('📡 Webhook received:', { action, orderId, changes })

    // Broadcast to all connected clients via localStorage event
    // This will trigger updates in all open admin pages
    if (typeof window !== 'undefined') {
      const event = new CustomEvent('google-sheets-updated', {
        detail: { action, orderId, changes, timestamp: Date.now() }
      })
      window.dispatchEvent(event)
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Webhook processed successfully' 
    })
  } catch (error) {
    console.error('Error processing webhook:', error)
    return NextResponse.json(
      { error: 'Failed to process webhook' },
      { status: 500 }
    )
  }
}

// GET endpoint for testing
export async function GET() {
  return NextResponse.json({
    message: 'Orders webhook endpoint is active',
    instructions: 'POST to this endpoint with: { action, orderId, changes }'
  })
}
