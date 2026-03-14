import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Basic server-side validation
    if (!body.name || !body.email || !body.phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Honeypot check
    if (body._gotcha) {
      // Return success to fool bots, but don't actually process
      return NextResponse.json({ success: true });
    }

    // In a real production environment, you would:
    // 1. Sanitize inputs
    // 2. Send email via Resend, SendGrid, or Nodemailer
    // 3. Save to database (Supabase, MongoDB, etc.)
    // 4. Log to analytics

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Form submission received:", {
      name: body.name,
      email: body.email,
      phone: body.phone,
      projectType: body.projectType,
      message: body.message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}