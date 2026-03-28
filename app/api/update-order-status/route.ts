import { NextRequest, NextResponse } from "next/server"
import { google } from "googleapis"

export async function PUT(request: NextRequest) {
  return updateOrderStatus(request)
}

// Also support POST for backwards compatibility
export async function POST(request: NextRequest) {
  return updateOrderStatus(request)
}

async function updateOrderStatus(request: NextRequest) {
  try {
    console.log('🔑 Checking environment variables...')
    
    // Check if environment variables are set
    const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
    const privateKey = process.env.GOOGLE_PRIVATE_KEY
    const spreadsheetId = process.env.GOOGLE_SHEET_ID

    console.log('Environment check:', {
      hasEmail: !!serviceAccountEmail,
      hasKey: !!privateKey,
      hasSheetId: !!spreadsheetId
    })

    if (!serviceAccountEmail || !privateKey || !spreadsheetId) {
      console.error('❌ Google Sheets credentials not configured')
      return NextResponse.json(
        { error: "Google Sheets credentials not configured", details: "Missing environment variables" },
        { status: 500 }
      )
    }

    // Create auth client
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: serviceAccountEmail,
        private_key: privateKey.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })

    const sheets = google.sheets({ version: 'v4', auth })

    const body = await request.json()
    const { orderId, status } = body

    if (!orderId || !status) {
      return NextResponse.json(
        { error: "Order ID and status are required" },
        { status: 400 }
      )
    }

    console.log('🔍 Searching for order:', orderId, 'New status:', status)

    // Get all orders first to find the row number
    // IMPORTANT: Order ID is in Column I (9th column, index 8), NOT Column A
    const ordersData = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: "Orders!I2:I", // Search only Column I where Order IDs are stored
    })

    const rows = ordersData.data.values || []
    console.log(`📊 Found ${rows.length} rows in Orders sheet`)
    
    // Log all order IDs for debugging
    console.log('📋 Available Order IDs:', rows.map((r, i) => `Row ${i+2}: ${r[0]}`))
    
    // Find the row with matching order ID in Column I
    let rowIndex = -1
    for (let i = 0; i < rows.length; i++) {
      const sheetOrderId = rows[i][0]?.toString().trim()
      const searchOrderId = orderId.toString().trim()
      console.log(`Comparing: Sheet="${sheetOrderId}" vs Search="${searchOrderId}"`)
      
      if (sheetOrderId === searchOrderId) {
        rowIndex = i + 2 // +2 because we start from row 2 (row 1 is headers)
        console.log(`✅ Found order at row ${rowIndex}`)
        break
      }
    }

    if (rowIndex === -1) {
      console.error('❌ Order not found:', orderId)
      return NextResponse.json(
        { error: "Order not found", details: `Order ID ${orderId} not found in sheet` },
        { status: 404 }
      )
    }

    // Find which column is "Status" (could be different positions)
    const headersData = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: "Orders!1:1",
    })

    const headers = headersData.data.values?.[0] || []
    console.log('📋 Sheet headers:', headers)
    
    const statusColumnIndex = headers.findIndex((h: string) => 
      h.toLowerCase().trim() === 'status'
    )

    if (statusColumnIndex === -1) {
      console.error('❌ Status column not found')
      return NextResponse.json(
        { error: "Status column not found in sheet", details: "Make sure there's a 'Status' column header" },
        { status: 404 }
      )
    }

    console.log(`📍 Status column index: ${statusColumnIndex} (Letter: ${String.fromCharCode(65 + statusColumnIndex)})`)

    // Convert column index to letter (0=A, 1=B, 2=C, etc.)
    const statusColumnLetter = String.fromCharCode(65 + statusColumnIndex)
    
    console.log(`📝 About to update: Row ${rowIndex}, Column ${statusColumnLetter} (${statusColumnIndex + 1}), Value: ${status}`)
    
    // Update the status in Google Sheet
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: `Orders!${statusColumnLetter}${rowIndex}`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[status]],
      },
    })

    console.log(`✅ Order ${orderId} status updated to: ${status}`)
    console.log(`📊 Verification: Updated cell reference: Orders!${statusColumnLetter}${rowIndex}`)

    return NextResponse.json({ 
      success: true, 
      message: "Order status updated successfully",
      orderId,
      status
    })

  } catch (error) {
    console.error("❌ Error updating order status:", error)
    
    return NextResponse.json(
      { 
        error: "Failed to update order status",
        details: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    )
  }
}
