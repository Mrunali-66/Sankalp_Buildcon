import { loadEnvSafely } from '../api/contact.js'

loadEnvSafely()

const key = process.env.RESEND_API_KEY || process.env.EMAIL_API_KEY || ''
const isPlaceholder = key.includes('PASTE') || key.includes('YOUR_') || key.includes('your_') || !key.trim()
const hasValidKey = Boolean(key && !isPlaceholder)

console.log('--- Environment Detection Status ---')
console.log(`RESEND_API_KEY detected: ${hasValidKey ? 'Yes' : 'No (Placeholder detected - real key needed)'}`)
console.log(`CONTACT_EMAIL detected: ${Boolean(process.env.CONTACT_EMAIL) ? 'Yes' : 'No'}`)
console.log(`FROM_EMAIL detected: ${Boolean(process.env.FROM_EMAIL) ? 'Yes' : 'No'}`)
console.log('------------------------------------')
