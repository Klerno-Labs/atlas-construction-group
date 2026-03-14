import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Basic Validation
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Honeypot check
    if (body._gotcha) {
      // Return success silently to trick bots
      return NextResponse.json({ status: "ok" });
    }

    // Here you would integrate with Email Service (SendGrid, Resend, etc.)
    // or a CRM (HubSpot, Salesforce).
    // For this deliverable, we simulate the API delay and success.
    
    console.log("Form Submission Received:", {
      name: body.name,
      email: body.email,
      phone: body.phone,
      service: body.service,
      message: body.message,
      timestamp: new Date().toISOString(),
    });

    // Simulate network delay for realistic UX
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}