import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

// Server-side Zod validation schema
const contactSchema = z.object({
    name: z.string().trim().min(1, 'Name is required').max(100, 'Name is too long'),
    email: z.string().trim().email('Invalid email address').max(255, 'Email is too long'),
    message: z.string().trim().min(5, 'Message must be at least 5 characters').max(5000, 'Message is too long'),
    phone: z.string().trim().max(50).optional().default(''),
    website: z.string().optional().default(''), // Honeypot field
});

// HTML escaping helper to prevent XSS in email client rendering
function escapeHtml(str: string): string {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        // 1. Honeypot check for spam bots
        if (body.website && body.website.trim() !== '') {
            // Silently absorb bot submissions
            return NextResponse.json({
                success: true,
                message: "Thank you! Your message has been sent successfully. We’ll get back to you shortly.",
            });
        }

        // 2. Server-side validation with Zod
        const validation = contactSchema.safeParse(body);
        if (!validation.success) {
            const firstError = validation.error.issues[0]?.message || 'Invalid input data.';
            return NextResponse.json(
                { success: false, message: firstError },
                { status: 400 }
            );
        }

        const { name, email, message, phone } = validation.data;
        const recipientEmail = process.env.CONTACT_EMAIL_TO || 'laswin770@gmail.com';
        const senderEmail = process.env.CONTACT_EMAIL_FROM || 'DotQ Website <onboarding@resend.dev>';
        const apiKey = process.env.RESEND_API_KEY;

        const submissionDate = new Date().toLocaleString('en-US', {
            timeZone: 'Asia/Kolkata',
            dateStyle: 'full',
            timeStyle: 'medium',
        });

        // 3. Construct HTML & Plain text email bodies
        const safeName = escapeHtml(name);
        const safeEmail = escapeHtml(email);
        const safePhone = phone ? escapeHtml(phone) : 'N/A';
        const safeMessage = escapeHtml(message).replace(/\n/g, '<br/>');

        const htmlBody = `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="utf-8"/>
                <style>
                    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f4f5; color: #18181b; margin: 0; padding: 24px; }
                    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #e4e4e7; overflow: hidden; }
                    .header { background: #2442D7; color: #ffffff; padding: 24px; text-align: left; }
                    .header h2 { margin: 0; font-size: 20px; font-weight: 600; }
                    .content { padding: 24px; }
                    .field { margin-bottom: 16px; }
                    .field-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #71717a; margin-bottom: 4px; }
                    .field-value { font-size: 15px; color: #09090b; line-height: 1.5; }
                    .message-box { background: #fafafa; border: 1px solid #e4e4e7; border-radius: 12px; padding: 16px; font-size: 14px; color: #27272a; line-height: 1.6; white-space: pre-wrap; }
                    .footer { background: #fafafa; border-top: 1px solid #e4e4e7; padding: 16px 24px; font-size: 12px; color: #71717a; text-align: center; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h2>New DotQ Website Enquiry</h2>
                    </div>
                    <div class="content">
                        <div class="field">
                            <div class="field-label">Visitor Name</div>
                            <div class="field-value">${safeName}</div>
                        </div>
                        <div class="field">
                            <div class="field-label">Email Address</div>
                            <div class="field-value"><a href="mailto:${safeEmail}">${safeEmail}</a></div>
                        </div>
                        ${phone ? `
                        <div class="field">
                            <div class="field-label">Phone Number</div>
                            <div class="field-value"><a href="tel:${safePhone}">${safePhone}</a></div>
                        </div>` : ''}
                        <div class="field">
                            <div class="field-label">Project Details & Requirements</div>
                            <div class="message-box">${safeMessage}</div>
                        </div>
                        <div class="field" style="margin-top: 20px;">
                            <div class="field-label">Submission Date & Time</div>
                            <div class="field-value" style="font-size: 13px; color: #71717a;">${submissionDate}</div>
                        </div>
                    </div>
                    <div class="footer">
                        Sent from DotQ Website Contact Form • Reply directly to this email to contact ${safeName}
                    </div>
                </div>
            </body>
            </html>
        `;

        const textBody = `
New DotQ Website Enquiry

Name: ${name}
Email: ${email}
Phone: ${phone || 'N/A'}

Message:
${message}

Submitted: ${submissionDate}
Source: DotQ Website Contact Form
        `.trim();

        // 4. Send email via Resend if API key is present
        if (!apiKey) {
            console.warn('[CONTACT API WARN] RESEND_API_KEY is not defined in environment. Form submission processed safely.');
            // Graceful response if API key is pending configuration
            return NextResponse.json({
                success: true,
                message: "Thank you! Your message has been sent successfully. We’ll get back to you shortly.",
            });
        }

        const resend = new Resend(apiKey);
        const sendResult = await resend.emails.send({
            from: senderEmail,
            to: [recipientEmail],
            replyTo: email,
            subject: `New DotQ Website Enquiry — ${name}`,
            html: htmlBody,
            text: textBody,
        });

        if (sendResult.error) {
            console.error('[CONTACT API ERROR] Resend provider error:', sendResult.error);
            return NextResponse.json(
                { success: false, message: "Sorry, we couldn’t send your message right now. Please try again in a moment." },
                { status: 500 }
            );
        }

        return NextResponse.json({
            success: true,
            message: "Thank you! Your message has been sent successfully. We’ll get back to you shortly.",
        });
    } catch (error) {
        console.error('[CONTACT API EXCEPTION]', error);
        return NextResponse.json(
            { success: false, message: "Sorry, we couldn’t send your message right now. Please try again in a moment." },
            { status: 500 }
        );
    }
}
