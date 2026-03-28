/**
 * Google Sheets Configuration Checker
 * 
 * Run this to verify your .env.local setup is correct
 * Usage: node scripts/check-google-sheets-config.mjs
 */

import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

console.log('🔍 Checking Google Sheets Configuration...\n')

// Check .env.local exists
try {
  const envPath = join(__dirname, '..', '.env.local')
  const envContent = readFileSync(envPath, 'utf-8')
  
  console.log('✅ .env.local file found\n')
  
  // Parse environment variables
  const envVars = {}
  envContent.split('\n').forEach(line => {
    const trimmed = line.trim()
    if (trimmed && !trimmed.startsWith('#')) {
      const [key, ...valueParts] = trimmed.split('=')
      if (key && valueParts.length > 0) {
        envVars[key.trim()] = valueParts.join('=').trim().replace(/^"|"$/g, '')
      }
    }
  })
  
  // Check required variables
  const required = [
    'GOOGLE_SERVICE_ACCOUNT_EMAIL',
    'GOOGLE_PRIVATE_KEY',
    'GOOGLE_SHEET_ID',
    'GOOGLE_SHEET_NAME'
  ]
  
  console.log('📋 Environment Variables Check:\n')
  
  let allPresent = true
  required.forEach(varName => {
    const present = !!envVars[varName]
    const status = present ? '✅' : '❌'
    console.log(`${status} ${varName}: ${present ? 'Present' : 'MISSING'}`)
    if (!present) allPresent = false
  })
  
  console.log('\n')
  
  if (allPresent) {
    // Validate formats
    let hasErrors = false
    
    // Check email format
    const email = envVars.GOOGLE_SERVICE_ACCOUNT_EMAIL
    if (email.includes('your-service-account') || email.includes('iam.gserviceaccount.com') === false) {
      console.log('⚠️  GOOGLE_SERVICE_ACCOUNT_EMAIL looks like a placeholder')
      console.log('   Please update with your actual service account email\n')
      hasErrors = true
    } else {
      console.log('✅ Service account email format looks good\n')
    }
    
    // Check private key format
    const privateKey = envVars.GOOGLE_PRIVATE_KEY
    if (privateKey.includes('YourPrivateKeyHere') || !privateKey.includes('BEGIN PRIVATE KEY')) {
      console.log('⚠️  GOOGLE_PRIVATE_KEY looks like a placeholder')
      console.log('   Please update with your actual private key\n')
      hasErrors = true
    } else if (!privateKey.includes('\\n')) {
      console.log('⚠️  Private key should have \\n for newlines')
      console.log('   Format: "-----BEGIN PRIVATE KEY-----\\n...\\n-----END PRIVATE KEY-----\\n"\n')
      hasErrors = true
    } else {
      console.log('✅ Private key format looks good\n')
    }
    
    // Check sheet ID
    const sheetId = envVars.GOOGLE_SHEET_ID
    if (sheetId === '1Y4D69zS4dHhO5LcYZvBFog94RyFgZGcnd-w56pdP3Yg') {
      console.log('✅ Google Sheet ID is set correctly')
      console.log(`   Sheet URL: https://docs.google.com/spreadsheets/d/${sheetId}/edit\n`)
    } else {
      console.log('⚠️  Google Sheet ID differs from expected value')
      console.log(`   Current: ${sheetId}\n`)
    }
    
    // Check sheet name
    const sheetName = envVars.GOOGLE_SHEET_NAME
    console.log(`✅ Sheet name: "${sheetName}"`)
    console.log('   Make sure your Google Sheet tab has this exact name\n')
    
    if (!hasErrors) {
      console.log('🎉 Configuration looks good!\n')
      console.log('Next steps:')
      console.log('1. Share your Google Sheet with the service account email')
      console.log('2. Add headers to your sheet: ID, Name, Email, Phone, Service, Message, Timestamp')
      console.log('3. Restart your dev server: npm run dev')
      console.log('4. Test by submitting the contact form\n')
    } else {
      console.log('⚠️  Please fix the issues above and restart\n')
    }
    
  } else {
    console.log('\n❌ Missing required environment variables!')
    console.log('\nPlease open .env.local and fill in all values.\n')
    console.log('See GOOGLE_SHEETS_SETUP.md for detailed instructions.\n')
  }
  
} catch (error) {
  console.log('❌ .env.local file not found!')
  console.log('\nPlease create .env.local file in the project root.\n')
  console.log('See GOOGLE_SHEETS_SETUP.md for template and instructions.\n')
  console.error('Error:', error.message)
}
