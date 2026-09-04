import { loadEnvSafely } from '../api/contact.js'

loadEnvSafely()

const hasResendKey = Boolean(process.env.RESEND_API_KEY || process.env.EMAIL_API_KEY)
const contactEmail = process.env.CONTACT_EMAIL || 'mrunalihajare5@gmail.com (default)'
const fromEmail = process.env.FROM_EMAIL || 'Sankalp Buildcon <onboarding@resend.dev> (default)'

console.log('--- Environment Detection Status ---')
console.log(`RESEND_API_KEY detected: ${hasResendKey ? 'Yes' : 'No'}`)
console.log(`CONTACT_EMAIL detected: ${Boolean(process.env.CONTACT_EMAIL) ? 'Yes' : 'Yes (using default: mrunalihajare5@gmail.com)'}`)
console.log(`FROM_EMAIL detected: ${Boolean(process.env.FROM_EMAIL) ? 'Yes' : 'Yes (using default: Sankalp Buildcon <onboarding@resend.dev>)'}`)
console.log('------------------------------------')
