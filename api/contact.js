/**
 * Contact Enquiry API Handler
 * Validates enquiry form submissions and sends emails via Resend API.
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const DEFAULT_RECIPIENT = 'mrunalihajare5@gmail.com'
const BRAND_NAME = 'Sankalp Buildcon'

let __dirname = ''
try {
  __dirname = path.dirname(fileURLToPath(import.meta.url))
} catch {
  __dirname = process.cwd()
}

/**
 * Safely loads .env and .env.local into process.env if running in Node environment
 */
export function loadEnvSafely() {
  const searchDirs = [
    process.cwd(),
    path.resolve(__dirname, '..'),
    __dirname,
  ]
  const candidateFiles = ['.env', '.env.local', '.env.development', '.env.development.local']

  for (const dir of searchDirs) {
    for (const file of candidateFiles) {
      try {
        const fullPath = path.resolve(dir, file)
        if (fs.existsSync(fullPath) && fs.statSync(fullPath).isFile()) {
          const content = fs.readFileSync(fullPath, 'utf-8')
          for (const line of content.split(/\r?\n/)) {
            const trimmed = line.trim()
            if (!trimmed || trimmed.startsWith('#') || !trimmed.includes('=')) continue
            const idx = trimmed.indexOf('=')
            const key = trimmed.slice(0, idx).trim()
            let val = trimmed.slice(idx + 1).trim()
            if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
              val = val.slice(1, -1)
            } else {
              val = val.replace(/\s+#.*$/, '').trim()
            }
            if (key && val) {
              process.env[key] = val
            }
          }
        }
      } catch {
        // Ignore if filesystem is read-only or in edge environments
      }
    }
  }
}

// Initial environment load
loadEnvSafely()

function sanitizeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export function validateEnquiryData(data) {
  const errors = {}
  const name = (data.name || '').trim()
  const email = (data.email || '').trim()
  const phone = (data.phone || '').trim()
  const service = (data.service || data.project || '').trim()
  const message = (data.message || '').trim()

  if (!name) {
    errors.name = 'Full Name is required.'
  }

  if (!email) {
    errors.email = 'Email address is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    errors.email = 'Please provide a valid email address.'
  }

  const digits = phone.replace(/\D/g, '')
  if (!phone) {
    errors.phone = 'Phone number is required.'
  } else if (digits.length < 10) {
    errors.phone = 'Phone number must have at least 10 digits.'
  }

  if (!service) {
    errors.service = 'Service or project of interest is required.'
  }

  if (!message) {
    errors.message = 'Message is required.'
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    sanitized: {
      name,
      email,
      phone,
      service,
      message,
      source: data.source || 'Website Contact Us Form',
    },
  }
}

export function buildEmailTemplates({ name, email, phone, service, message, source, dateString }) {
  const safeName = sanitizeHtml(name)
  const safeEmail = sanitizeHtml(email)
  const safePhone = sanitizeHtml(phone)
  const safeService = sanitizeHtml(service)
  const safeMessage = sanitizeHtml(message)
  const safeSource = sanitizeHtml(source)
  const safeDate = sanitizeHtml(dateString)

  const subject = `New Website Enquiry | ${BRAND_NAME}`

  const text = `NEW ENQUIRY RECEIVED

────────────────────────

CUSTOMER DETAILS

Name:
${name}

Email:
${email}

Phone:
${phone}

────────────────────────

ENQUIRY DETAILS

Service:
${service}

Message:
${message}

────────────────────────

Submitted From:
${source}

Submitted On:
${dateString}
`

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${subject}</title>
</head>
<body style="margin:0;padding:0;background-color:#F1F5F9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#1E293B;line-height:1.6;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#F1F5F9;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width:600px;background-color:#FFFFFF;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.06);border:1px solid #E2E8F0;">
          <!-- Header -->
          <tr>
            <td style="background-color:#0D233A;padding:28px 32px;text-align:left;border-bottom:3px solid #2F6BF6;">
              <div style="font-size:12px;font-weight:700;color:#94A3B8;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:6px;">${BRAND_NAME}</div>
              <h1 style="margin:0;font-size:22px;font-weight:700;color:#FFFFFF;line-height:1.3;">New Enquiry Received</h1>
            </td>
          </tr>

          <!-- Body Content -->
          <tr>
            <td style="padding:32px;">

              <!-- Customer Details Section -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom:28px;">
                <tr>
                  <td style="padding-bottom:12px;border-bottom:1px solid #E2E8F0;">
                    <div style="font-size:13px;font-weight:700;color:#2F6BF6;letter-spacing:1px;text-transform:uppercase;">Customer Details</div>
                  </td>
                </tr>
                <tr>
                  <td style="padding-top:16px;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                      <tr>
                        <td width="35%" style="padding:8px 0;font-size:13px;color:#64748B;font-weight:600;vertical-align:top;">Name:</td>
                        <td width="65%" style="padding:8px 0;font-size:15px;color:#0F172A;font-weight:700;vertical-align:top;">${safeName}</td>
                      </tr>
                      <tr>
                        <td style="padding:8px 0;font-size:13px;color:#64748B;font-weight:600;vertical-align:top;">Email:</td>
                        <td style="padding:8px 0;font-size:15px;color:#0F172A;vertical-align:top;">
                          <a href="mailto:${safeEmail}" style="color:#2F6BF6;text-decoration:none;font-weight:600;">${safeEmail}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:8px 0;font-size:13px;color:#64748B;font-weight:600;vertical-align:top;">Phone:</td>
                        <td style="padding:8px 0;font-size:15px;color:#0F172A;vertical-align:top;">
                          <a href="tel:${safePhone}" style="color:#2F6BF6;text-decoration:none;font-weight:600;">${safePhone}</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Enquiry Details Section -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom:28px;">
                <tr>
                  <td style="padding-bottom:12px;border-bottom:1px solid #E2E8F0;">
                    <div style="font-size:13px;font-weight:700;color:#2F6BF6;letter-spacing:1px;text-transform:uppercase;">Enquiry Details</div>
                  </td>
                </tr>
                <tr>
                  <td style="padding-top:16px;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                      <tr>
                        <td width="35%" style="padding:8px 0;font-size:13px;color:#64748B;font-weight:600;vertical-align:top;">Service / Type:</td>
                        <td width="65%" style="padding:8px 0;font-size:15px;color:#0F172A;font-weight:600;vertical-align:top;">${safeService}</td>
                      </tr>
                      <tr>
                        <td colspan="2" style="padding:14px 0 6px 0;font-size:13px;color:#64748B;font-weight:600;">Message:</td>
                      </tr>
                      <tr>
                        <td colspan="2" style="padding:0;">
                          <div style="background-color:#F8FAFC;border:1px solid #E2E8F0;border-left:4px solid #2F6BF6;border-radius:6px;padding:16px;font-size:14px;color:#334155;line-height:1.6;white-space:pre-wrap;">${safeMessage}</div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Quick Actions -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-top:24px;margin-bottom:12px;">
                <tr>
                  <td align="center">
                    <a href="mailto:${safeEmail}?subject=Re:%20Your%20Enquiry%20to%20Sankalp%20Buildcon" style="display:inline-block;background-color:#2F6BF6;color:#FFFFFF;font-size:13.5px;font-weight:600;text-decoration:none;padding:10px 20px;border-radius:8px;margin-right:8px;">Reply via Email</a>
                    <a href="tel:${safePhone}" style="display:inline-block;background-color:#0D233A;color:#FFFFFF;font-size:13.5px;font-weight:600;text-decoration:none;padding:10px 20px;border-radius:8px;">Call Customer</a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer Information -->
          <tr>
            <td style="background-color:#F8FAFC;padding:20px 32px;border-top:1px solid #E2E8F0;font-size:12px;color:#64748B;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="line-height:1.6;">
                    <div><strong>Submitted From:</strong> ${safeSource}</div>
                    <div><strong>Submitted On:</strong> ${safeDate}</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>

        <div style="font-size:11px;color:#94A3B8;margin-top:16px;text-align:center;">
          © ${BRAND_NAME} • Automated Notification
        </div>
      </td>
    </tr>
  </table>
</body>
</html>`

  return { subject, text, html }
}

/**
 * Sends email via Resend API
 */
export async function sendEmailWithProvider({ to, replyTo, subject, html, text }) {
  loadEnvSafely()

  const apiKey = process.env.RESEND_API_KEY || process.env.EMAIL_API_KEY
  const fromEmail = process.env.FROM_EMAIL || `${BRAND_NAME} <onboarding@resend.dev>`

  if (!apiKey) {
    console.error('[Contact API] Missing RESEND_API_KEY in environment variables.')
    return {
      ok: false,
      error: 'Email service is not configured. Please set RESEND_API_KEY in environment variables.',
    }
  }

  const payload = {
    from: fromEmail,
    to: Array.isArray(to) ? to : [to],
    reply_to: replyTo,
    subject,
    html,
    text,
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(payload),
    })

    const data = await res.json().catch(() => ({}))

    if (!res.ok) {
      console.error('[Contact API] Resend API Error:', res.status, data)
      const errorMsg = data.message || `Email delivery failed (status ${res.status})`
      return { ok: false, error: errorMsg }
    }

    return { ok: true, data }
  } catch (err) {
    console.error('[Contact API] Network/Fetch Error sending email:', err)
    return { ok: false, error: 'Network error communicating with email provider.' }
  }
}

/**
 * Main handler logic for contact form submission
 */
export async function processContactEnquiry(body) {
  loadEnvSafely()

  const { isValid, errors, sanitized } = validateEnquiryData(body || {})

  if (!isValid) {
    return {
      statusCode: 400,
      body: {
        success: false,
        error: 'Validation failed. Please check the submitted fields.',
        errors,
      },
    }
  }

  const recipientEmail = process.env.CONTACT_EMAIL || DEFAULT_RECIPIENT

  const now = new Date()
  let dateString
  try {
    dateString = new Intl.DateTimeFormat('en-IN', {
      dateStyle: 'full',
      timeStyle: 'medium',
      timeZone: 'Asia/Kolkata',
    }).format(now) + ' (IST)'
  } catch {
    dateString = now.toUTCString()
  }

  const { subject, text, html } = buildEmailTemplates({
    ...sanitized,
    dateString,
  })

  const sendResult = await sendEmailWithProvider({
    to: recipientEmail,
    replyTo: sanitized.email,
    subject,
    html,
    text,
  })

  if (!sendResult.ok) {
    return {
      statusCode: 500,
      body: {
        success: false,
        error: sendResult.error || 'Something went wrong while sending your enquiry. Please try again.',
      },
    }
  }

  return {
    statusCode: 200,
    body: {
      success: true,
      message: 'Thank you! Your enquiry has been sent successfully. Our team will get back to you soon.',
    },
  }
}

/**
 * Standard Vercel / Node serverless handler
 */
export default async function handler(req, res) {
  loadEnvSafely()

  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: `Method ${req.method} not allowed. Use POST.`,
    })
  }

  let body = req.body
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body)
    } catch {
      return res.status(400).json({ success: false, error: 'Invalid JSON payload.' })
    }
  }

  const result = await processContactEnquiry(body)
  return res.status(result.statusCode).json(result.body)
}
