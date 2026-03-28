import { NextResponse } from "next/server"
import { getOrdersFromSheet } from "@/carKey/lib/google-orders"

export async function GET() {
  try {
    const orders = await getOrdersFromSheet()
    
    if (!orders || orders.length === 0) {
      return NextResponse.json({ 
        orders: [], 
        message: "No orders found. Create a new sheet tab named 'Orders' with headers."
      })
    }

    return NextResponse.json({ orders })
  } catch (error) {
    console.error("Error fetching orders:", error)
    
    return NextResponse.json(
      { 
        error: "Failed to fetch orders",
        details: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    )
  }
}
