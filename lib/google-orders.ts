import { google } from 'googleapis'

export interface Order {
  timestamp: string
  firstName: string
  lastName: string
  services: string
  email: string
  address: string
  phoneNumber: string
  additionalDescription: string
  id?: string
  status?: 'pending' | 'in_progress' | 'completed' | 'cancelled'
  amount?: number
  assignedTo?: string
  notes?: string
}

export async function getOrdersFromSheet(): Promise<Order[]> {
  try {
    const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
    const privateKey = process.env.GOOGLE_PRIVATE_KEY
    const spreadsheetId = process.env.GOOGLE_SHEET_ID
    const sheetName = process.env.GOOGLE_ORDERS_SHEET_NAME || 'Orders'

    if (!serviceAccountEmail || !privateKey || !spreadsheetId) {
      console.warn('Google Sheets credentials not configured')
      return []
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: serviceAccountEmail,
        private_key: privateKey ? privateKey.replace(/\\n/g, '\n') : undefined,
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })

    const sheets = google.sheets({ version: 'v4', auth })

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: `${sheetName}!A2:Z`, // Start from row 2 to skip header
    })

    const rows = response.data.values || []
    
    // Convert rows to Order objects
    // Expected columns: Timestamp, First Name, Last Name, Services, Email, Address, Phone Number, Additional Description
    const orders: Order[] = rows.map((row, index) => ({
      timestamp: row[0] || '',
      firstName: row[1] || '',
      lastName: row[2] || '',
      services: row[3] || '',
      email: row[4] || '',
      address: row[5] || '',
      phoneNumber: row[6] || '',
      additionalDescription: row[7] || '',
      id: row[8] || `ORD-${index + 1}`,
      status: (row[9] as Order['status']) || 'pending',
      amount: parseFloat(row[10]) || 0,
      assignedTo: row[11] || '',
      notes: row[12] || '',
    }))

    return orders
  } catch (error) {
    console.error('Error fetching orders from Google Sheet:', error)
    return []
  }
}

export async function appendOrderToSheet(orderData: Partial<Order>) {
  try {
    const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
    const privateKey = process.env.GOOGLE_PRIVATE_KEY
    const spreadsheetId = process.env.GOOGLE_SHEET_ID
    const sheetName = process.env.GOOGLE_ORDERS_SHEET_NAME || 'Orders'

    if (!serviceAccountEmail || !privateKey || !spreadsheetId) {
      console.warn('Google Sheets credentials not configured')
      return { success: false, message: 'Credentials not configured' }
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: serviceAccountEmail,
        private_key: privateKey ? privateKey.replace(/\\n/g, '\n') : undefined,
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })

    const sheets = google.sheets({ version: 'v4', auth })

    const timestamp = orderData.timestamp || new Date().toISOString()
    const orderId = orderData.id || `ORD-${Date.now()}`
    
    const values = [
      [
        timestamp,
        orderData.firstName || '',
        orderData.lastName || '',
        orderData.services || '',
        orderData.email || '',
        orderData.address || '',
        orderData.phoneNumber || '',
        orderData.additionalDescription || '',
        orderId,
        orderData.status || 'pending',
        orderData.amount || 0,
        orderData.assignedTo || '',
        orderData.notes || '',
      ],
    ]

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${sheetName}!A:M`,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values,
      },
    })

    console.log('Order appended to Google Sheet successfully')
    return { success: true, message: 'Order saved to Google Sheet', orderId }
  } catch (error) {
    console.error('Error appending order to Google Sheet:', error)
    return { 
      success: false, 
      message: error instanceof Error ? error.message : 'Unknown error occurred' 
    }
  }
}
