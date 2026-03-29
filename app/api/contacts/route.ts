import { NextResponse } from "next/server"
import { getGoogleSheetData } from "@/lib/google-sheets"

export async function GET() {
  try {
    const contacts = await getGoogleSheetData()
    
    console.log('📋 Fetched contacts from Google Sheets:', contacts.length, 'contacts')
    if (contacts.length > 0) {
      console.log('📋 First contact sample:', contacts[0])
    }
    
    if (!contacts || contacts.length === 0) {
      return NextResponse.json({ contacts: [], message: "No contacts found" })
    }

    return NextResponse.json({ contacts })
  } catch (error) {
    console.error("Error fetching contacts:", error)
    
    return NextResponse.json(
      { 
        error: "Failed to fetch contacts",
        details: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    )
  }
}
