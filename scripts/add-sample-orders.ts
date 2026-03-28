import { google } from 'googleapis'

async function addSampleOrders() {
  try {
    const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
    const spreadsheetId = process.env.GOOGLE_SHEET_ID
    const sheetName = process.env.GOOGLE_ORDERS_SHEET_NAME || 'Orders'

    if (!serviceAccountEmail || !privateKey || !spreadsheetId) {
      console.error('❌ Missing credentials!')
      return
    }

    // Create auth client
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: serviceAccountEmail,
        private_key: privateKey,
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })

    const sheets = google.sheets({ version: 'v4', auth })

    // First, set up headers
    const headers = [
      'Order ID',
      'Timestamp',
      'First Name',
      'Last Name',
      'Services',
      'Email',
      'Address',
      'Phone Number',
      'Additional Description',
      'Status',
      'Amount',
      'Assigned To',
      'Notes'
    ]

    console.log('📝 Setting up headers...')
    
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: `${sheetName}!A1:M1`,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [headers],
      },
    })

    // Sample order data
    const sampleOrders = [
      [
        'ORD-001',
        '2024-03-15 10:30:00',
        'John',
        'Smith',
        'Car Key Replacement',
        'john@example.com',
        '123 High Street, Stockport SK1 1AA',
        '07700 900001',
        'BMW key replacement needed urgently',
        'pending',
        '150',
        'Mike Johnson',
        'Customer prefers morning appointment'
      ],
      [
        'ORD-002',
        '2024-03-14 14:20:00',
        'Sarah',
        'Jones',
        'Lockout Assistance',
        'sarah@example.com',
        '45 Market Street, Cheadle SK8 2AB',
        '07700 900002',
        'Locked out of Ford Fiesta - keys inside car',
        'in_progress',
        '80',
        'Alex Rivera',
        'Urgent - customer waiting at location'
      ],
      [
        'ORD-003',
        '2024-03-13 09:15:00',
        'Tom',
        'Wilson',
        'Auto Keys Programming',
        'tom@example.com',
        '78 London Road, Hazel Grove SK7 3CD',
        '07700 900003',
        'Audi A4 2020 - need spare key programmed',
        'completed',
        '120',
        'Sarah Chen',
        'Completed successfully - tested both keys'
      ],
      [
        'ORD-004',
        '2024-03-12 16:45:00',
        'Emma',
        'Brown',
        'Key Fob Programming',
        'emma@example.com',
        '22 Church Lane, Bramhall SK7 4EF',
        '07700 900004',
        'VW Golf key fob buttons not working',
        'pending',
        '140',
        'Mike Johnson',
        'Need to order battery first'
      ],
      [
        'ORD-005',
        '2024-03-11 11:00:00',
        'David',
        'Lee',
        'Remote Key Fobs',
        'david@example.com',
        '56 Park Road, Gatley SK8 5GH',
        '07700 900005',
        'Mercedes C-Class - need complete remote key',
        'completed',
        '200',
        'Alex Rivera',
        'Supply and programming completed'
      ],
      [
        'ORD-006',
        '2024-03-10 13:30:00',
        'Lisa',
        'Garcia',
        'Emergency Service',
        'lisa@example.com',
        '89 Station Road, Marple SK6 6IJ',
        '07700 900006',
        'Emergency lockout at night - stranded',
        'completed',
        '100',
        'Sarah Chen',
        '2AM emergency call - resolved quickly'
      ],
      [
        'ORD-007',
        '2024-03-09 08:20:00',
        'James',
        'Martin',
        'Van Lockout',
        'james@example.com',
        '34 Mill Lane, Romiley SK6 7KL',
        '07700 900007',
        'Ford Transit van - keys locked in back',
        'in_progress',
        '90',
        'Mike Johnson',
        'Commercial vehicle - priority customer'
      ],
      [
        'ORD-008',
        '2024-03-08 15:10:00',
        'Anna',
        'Taylor',
        'Ignition Repair',
        'anna@example.com',
        '67 Bridge Street, Bury BL9 8MN',
        '07700 900008',
        'Ignition switch broken - key won\'t turn',
        'cancelled',
        '180',
        '',
        'Customer cancelled - found alternative solution'
      ]
    ]

    console.log('📊 Adding sample orders...')

    for (const order of sampleOrders) {
      await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: `${sheetName}!A:M`,
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [order],
        },
      })
      console.log(`✅ Added: ${order[0]} - ${order[2]} ${order[3]}`)
    }

    console.log('\n✨ Success! All sample orders added to Google Sheet.')
    console.log('\n📋 Fields added:')
    console.log('   ✓ First Name')
    console.log('   ✓ Last Name')
    console.log('   ✓ Services')
    console.log('   ✓ Email')
    console.log('   ✓ Phone Number')
    console.log('   ✓ Address')
    console.log('   ✓ Additional Description')
    console.log('   ✓ Status')
    console.log('   ✓ Amount')
    console.log('   ✓ Assigned To')
    console.log('\n🌐 Now visit: http://localhost:3001/admin/orders to see the data!')

  } catch (error) {
    console.error('❌ Error:', error)
  }
}

// Run the script
addSampleOrders()
