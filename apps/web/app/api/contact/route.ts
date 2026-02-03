import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// =============================================================================
// CONTACT FORM API ROUTE
// =============================================================================
// This API route handles contact form submissions using Resend.

// Input validation limits
const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 5000;

// Initialize lazily to avoid build-time errors when API key is not set
function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }
  return new Resend(apiKey);
}

// Sanitize user input for HTML to prevent XSS
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
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
      name: (formData.get("name") as string || "").slice(0, MAX_NAME_LENGTH),
      email: (formData.get("email") as string || "").slice(0, MAX_EMAIL_LENGTH),
      message: (formData.get("message") as string || "").slice(0, MAX_MESSAGE_LENGTH),
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

    // Send email via Resend (with sanitized HTML)
    const resend = getResend();
    await resend.emails.send({
      from: "contact@northvalleytavern.com",
      to: process.env.CONTACT_EMAIL || "admin@northvalleytavern.com",
      subject: `New Contact Form Submission from ${escapeHtml(data.name)}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(data.message).replace(/\n/g, "<br>")}</p>
      `,
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
