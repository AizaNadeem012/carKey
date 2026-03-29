import { google } from 'googleapis'

export async function appendToGoogleSheet(data: Record<string, any>) {
  try {
    // Check if environment variables are set
    const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
    const privateKey = process.env.GOOGLE_PRIVATE_KEY
    const spreadsheetId = process.env.GOOGLE_SHEET_ID
    const sheetName = process.env.GOOGLE_SHEET_NAME || 'Sheet1'

    if (!serviceAccountEmail || !privateKey || !spreadsheetId) {
      console.warn('Google Sheets credentials not configured. Skipping sheet update.')
      return { success: false, message: 'Google Sheets credentials not configured' }
    }

    // Create auth client
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: serviceAccountEmail,
        private_key: privateKey ? privateKey.replace(/\\n/g, '\n') : undefined,
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })

    const sheets = google.sheets({ version: 'v4', auth })

    // Prepare row data
    const timestamp = new Date().toISOString()
    const values = [
      [
        data.id || Date.now(),
        data.name || '',
        data.email || '',
        data.phone || '',
        data.service || '',
        data.message || '',
        timestamp,
      ],
    ]

    // Append to sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${sheetName}!A:G`,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values,
      },
    })

    console.log('Data appended to Google Sheet successfully')
    return { success: true, message: 'Data added to Google Sheet' }
  } catch (error) {
    console.error('Error appending to Google Sheet:', error)
    return { 
      success: false, 
      message: error instanceof Error ? error.message : 'Unknown error occurred' 
    }
  }
}

export async function getGoogleSheetData() {
  try {
    const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
    const privateKey = process.env.GOOGLE_PRIVATE_KEY
    const spreadsheetId = process.env.GOOGLE_SHEET_ID
    const sheetName = process.env.GOOGLE_SHEET_NAME || 'CarForm'

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

    // Get headers from row 1
    const headersResponse = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: `${sheetName}!A1:Z1`, // Get header row
    })
    
    const headers = headersResponse.data.values?.[0] || []
    console.log('Ã°Å¸â€œâ€¹ Sheet headers:', headers)

    // Get data from row 2 onwards
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: `${sheetName}!A2:Z`, // Start from row 2 to skip header, get all columns
    })

    const rows = response.data.values || []
    
    console.log(`Ã°Å¸â€œâ€¹ Raw rows from ${sheetName}:`, rows.length, 'rows')
    if (rows.length > 0) {
      console.log('Ã°Å¸â€œâ€¹ First row sample:', rows[0])
    }
    
    // Map based on actual header positions
    const headerIndex = {
      timestamp: headers.findIndex(h => h.toLowerCase().includes('time') || h.toLowerCase().includes('date')),
      name: headers.findIndex(h => h.toLowerCase().includes('name')),
      email: headers.findIndex(h => h.toLowerCase().includes('email')),
      phone: headers.findIndex(h => h.toLowerCase().includes('phone')),
      service: headers.findIndex(h => h.toLowerCase().includes('service')),
      message: headers.findIndex(h => h.toLowerCase().includes('message') || h.toLowerCase().includes('comment'))
    }
    
    console.log('Ã°Å¸â€œâ€¹ Header indices:', headerIndex)
    
    // Convert to objects using dynamic header mapping
    const contacts = rows.map((row, index) => {
      const contact = {
        id: index + 1,
        timestamp: headerIndex.timestamp >= 0 ? row[headerIndex.timestamp] || '' : row[0] || '',
        name: headerIndex.name >= 0 ? row[headerIndex.name] || '' : row[1] || '',
        email: headerIndex.email >= 0 ? row[headerIndex.email] || '' : row[2] || '',
        phone: headerIndex.phone >= 0 ? row[headerIndex.phone] || '' : row[3] || '',
        service: headerIndex.service >= 0 ? row[headerIndex.service] || '' : row[4] || '',
        message: headerIndex.message >= 0 ? row[headerIndex.message] || '' : row[5] || '',
        additionalData: row.slice(6).join(', '),
      }
      
      if (index === 0) {
        console.log('Ã°Å¸â€œâ€¹ Mapped first contact:', contact)
      }
      
      return contact
    })

    return contacts
  } catch (error) {
    console.error('Error fetching Google Sheet data:', error)
    return []
  }
}
