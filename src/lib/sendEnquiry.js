// Sends an enquiry-form submission to email via Web3Forms (https://web3forms.com).
//
// Setup (one-time, ~1 minute):
//   1. Go to https://web3forms.com  →  enter the address that should RECEIVE
//      enquiries (the builder's official mail)  →  they email you an Access Key.
//   2. Put that key in a `.env` file at the project root:
//        VITE_WEB3FORMS_KEY=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
//   3. On the host (Netlify / Vercel / etc.) add the same key as an
//      environment variable named VITE_WEB3FORMS_KEY.
//
// The access key is safe to expose in client code — that is how Web3Forms is
// designed to work. It only lets people submit the form, not read submissions.

const ENDPOINT = 'https://api.web3forms.com/submit'
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY

export function enquiryConfigured() {
  return Boolean(ACCESS_KEY)
}

/**
 * @param {{name:string, phone:string, email:string, project?:string, message?:string}} values
 * @param {{source?:string}} [opts]  where the form was submitted from
 * @returns {Promise<{ok:boolean, error?:string}>}
 */
export async function sendEnquiry(values, opts = {}) {
  if (!ACCESS_KEY) {
    return { ok: false, error: 'Form is not configured yet (missing VITE_WEB3FORMS_KEY).' }
  }

  const payload = {
    access_key: ACCESS_KEY,
    subject: `New website enquiry — ${values.name || 'Unknown'}`,
    from_name: 'Sankalp Buildcon Website',
    // fields that show up in the email
    Name: values.name,
    Phone: values.phone,
    Email: values.email,
    'Project of interest': values.project || '—',
    Message: values.message || '—',
    'Submitted from': opts.source || 'Website',
    // let replies go straight to the enquirer
    replyto: values.email,
  }

  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
    })
    const data = await res.json().catch(() => ({}))
    if (res.ok && data.success) return { ok: true }
    return { ok: false, error: data.message || `Request failed (${res.status})` }
  } catch {
    return { ok: false, error: 'Network error — please try again or call us.' }
  }
}
