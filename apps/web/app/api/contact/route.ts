import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// =============================================================================
// CONTACT FORM API ROUTE
// =============================================================================
// This API route handles contact form submissions using Resend.

// Initialize lazily to avoid build-time errors when API key is not set
function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }
  return new Resend(apiKey);
}

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    const data: ContactFormData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Send email via Resend
    const resend = getResend();
    const emailResult = await resend.emails.send({
      from: "contact@northvalleytavern.com",
      to: process.env.CONTACT_EMAIL || "admin@northvalleytavern.com",
      subject: `New Contact Form Submission from ${data.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, "<br>")}</p>
      `,
    });

    // Log the submission for debugging
    console.log("Contact form submission:", {
      name: data.name,
      email: data.email,
      message: data.message,
      timestamp: new Date().toISOString(),
      resendResult: emailResult,
    });

    // Return success response
    return NextResponse.json(
      { 
        success: true, 
        message: "Form submitted successfully" 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to submit form" },
      { status: 500 }
    );
  }
}
