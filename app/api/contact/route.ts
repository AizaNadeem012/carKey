import { type NextRequest, NextResponse } from "next/server"
import { appendToGoogleSheet } from "@/lib/google-sheets"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, service, message } = body

    // Validate required fields
    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: "Missing required fields: name, phone, and message are required" },
        { status: 400 }
      )
    }

    // Validate phone format
    if (!/^[\d\s\-\+\(\)]+$/.test(phone)) {
      return NextResponse.json({ error: "Invalid phone number format" }, { status: 400 })
    }

    // Validate email if provided
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Log the contact form submission
    console.log("Contact form submission:", {
      name,
      email: email || "Not provided",
      phone,
      service: service || "Not specified",
      message,
      timestamp: new Date().toISOString(),
    })

    // Save to Google Sheets
    const sheetResult = await appendToGoogleSheet({
      name,
      email,
      phone,
      service,
      message,
    })

    if (!sheetResult.success) {
      console.warn('Failed to save to Google Sheets:', sheetResult.message)
    }

    return NextResponse.json({ 
      success: true, 
      message: "Your message has been received",
      savedToSheet: sheetResult.success
    })
  } catch (error) {
    console.error("Contact form error:", error)

    if (error instanceof SyntaxError) {
      return NextResponse.json({ error: "Invalid JSON in request body" }, { status: 400 })
    }

    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    )
  }
}
