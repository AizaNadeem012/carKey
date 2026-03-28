import { google } from 'googleapis'

// Initialize Google Sheets client
export async function getSheetsClient() {
  const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
  const privateKey = process.env.GOOGLE_PRIVATE_KEY
  const spreadsheetId = process.env.GOOGLE_SHEET_ID

  if (!serviceAccountEmail || !privateKey || !spreadsheetId) {
    throw new Error('Google Sheets credentials not configured')
  }

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: serviceAccountEmail,
      private_key: privateKey.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })

  return google.sheets({ version: 'v4', auth })
}

// Get all orders from Google Sheets
export async function getAllOrders() {
  try {
    const sheets = await getSheetsClient()
    
    // Get headers (row 1)
    const headersResponse = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Orders!1:1',
    })

    const headers = headersResponse.data.values?.[0] || []
    
    // Get all data (from row 2 onwards)
    const dataResponse = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Orders!A2:Z1000',
    })

    const rows = dataResponse.data.values || []

    // Convert rows to objects with proper field mapping
    // Sheet structure: A=Timestamp, B=FirstName, C=LastName, D=Services, E=Email, F=Address, G=Phone, H=Description, I=ID, J=Status, K=Amount
    const orders = rows.map((row, index) => {
      const order: any = {
        timestamp: row[0] || new Date().toISOString(),
        firstName: row[1] || '',
        lastName: row[2] || '',
        services: row[3] || '',
        email: row[4] || '',
        address: row[5] || '',
        phoneNumber: row[6] || '',
        additionalDescription: row[7] || '',
        id: row[8] || `ORD-${index + 1}`,  // ID is in column I (index 8)
        status: (row[9] as any) || 'pending',  // Status is in column J (index 9)
        amount: parseFloat(row[10]) || 0,  // Amount is in column K (index 10)
        assignedTo: row[11] || '',
        notes: row[12] || '',
      }
      return order
    })

    return orders
  } catch (error) {
    console.error('Error fetching orders:', error)
    return []
  }
}

// Update order status
export async function updateOrderStatus(orderId: string, newStatus: string) {
  try {
    const sheets = await getSheetsClient()
    const spreadsheetId = process.env.GOOGLE_SHEET_ID!

    // Find the row with this order ID
    // Order ID is in column I (index 8), so we need to search column I
    const ordersData = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: 'Orders!I2:I', // Search only column I for order IDs
    })

    const rows = ordersData.data.values || []
    let rowIndex = -1

    for (let i = 0; i < rows.length; i++) {
      if (rows[i][0]?.toString().trim() === orderId.toString().trim()) {
        rowIndex = i + 2 // +2 because we start from row 2
        break
      }
    }

    if (rowIndex === -1) {
      throw new Error(`Order ${orderId} not found`)
    }

    // Update status column (column J = index 9, which is letter J)
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: `Orders!J${rowIndex}`,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[newStatus]],
      },
    })

    return { success: true, orderId, newStatus }
  } catch (error) {
    console.error('Error updating order status:', error)
    throw error
  }
}

// Update any field in an order
export async function updateOrderField(
  orderId: string,
  fieldName: string,
  newValue: any
) {
  try {
    const sheets = await getSheetsClient()
    const spreadsheetId = process.env.GOOGLE_SHEET_ID!

    // Map field names to column letters based on actual sheet structure
    // Sheet: A=Timestamp, B=FirstName, C=LastName, D=Services, E=Email, F=Address, G=Phone, H=Description, I=ID, J=Status, K=Amount
    const fieldMap: Record<string, string> = {
      timestamp: 'A',
      firstName: 'B',
      lastName: 'C',
      services: 'D',
      email: 'E',
      address: 'F',
      phoneNumber: 'G',
      additionalDescription: 'H',
      id: 'I',
      status: 'J',
      amount: 'K',
      assignedTo: 'L',
      notes: 'M',
    }

    const columnLetter = fieldMap[fieldName]
    if (!columnLetter) {
      throw new Error(`Invalid field name: ${fieldName}`)
    }

    // Find the row
    const ordersData = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: 'Orders!A2:Z',
    })

    const rows = ordersData.data.values || []
    let rowIndex = -1

    for (let i = 0; i < rows.length; i++) {
      if (rows[i][0] === orderId) {
        rowIndex = i + 2
        break
      }
    }

    if (rowIndex === -1) {
      throw new Error(`Order ${orderId} not found`)
    }

    // Update the field
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: `Orders!${columnLetter}${rowIndex}`,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[String(newValue)]],
      },
    })

    return { success: true, orderId, fieldName, newValue }
  } catch (error) {
    console.error('Error updating order field:', error)
    throw error
  }
}

// Add a new order
export async function addNewOrder(orderData: Record<string, any>) {
  try {
    const sheets = await getSheetsClient()
    const spreadsheetId = process.env.GOOGLE_SHEET_ID!

    const timestamp = new Date().toISOString()
    // Sheet structure: A=Timestamp, B=FirstName, C=LastName, D=Services, E=Email, F=Address, G=Phone, H=Description, I=ID, J=Status, K=Amount
    const values = [
      [
        timestamp,                    // Column A
        orderData.firstName || '',    // Column B
        orderData.lastName || '',     // Column C
        orderData.services || '',     // Column D
        orderData.email || '',        // Column E
        orderData.address || '',      // Column F
        orderData.phoneNumber || '',  // Column G
        orderData.additionalDescription || '', // Column H
        orderData.id || `ORD-${Date.now()}`,   // Column I
        orderData.status || 'pending',         // Column J
        orderData.amount || 0,                 // Column K
        orderData.assignedTo || '',            // Column L
        orderData.notes || '',                 // Column M
      ],
    ]

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Orders!A:M',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values,
      },
    })

    return { success: true, orderId: orderData.id }
  } catch (error) {
    console.error('Error adding order:', error)
    throw error
  }
}

// Delete an order
export async function deleteOrder(orderId: string) {
  try {
    const sheets = await getSheetsClient()
    const spreadsheetId = process.env.GOOGLE_SHEET_ID!

    // Find the row
    const ordersData = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: 'Orders!A2:Z',
    })

    const rows = ordersData.data.values || []
    let rowIndex = -1

    for (let i = 0; i < rows.length; i++) {
      if (rows[i][0] === orderId) {
        rowIndex = i + 2
        break
      }
    }

    if (rowIndex === -1) {
      throw new Error(`Order ${orderId} not found`)
    }

    // Delete the row
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      requestBody: {
        requests: [
          {
            deleteDimension: {
              range: {
                sheetId: 0, // First sheet
                dimension: 'ROWS',
                startIndex: rowIndex - 1,
                endIndex: rowIndex,
              },
            },
          },
        ],
      },
    })

    return { success: true, deletedOrderId: orderId }
  } catch (error) {
    console.error('Error deleting order:', error)
    throw error
  }
}
