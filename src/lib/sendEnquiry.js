/**
 * Sends an enquiry-form submission to the backend email API endpoint.
 *
 * All email service credentials remain securely on the server/API layer.
 *
 * @param {{name:string, phone:string, email:string, project?:string, service?:string, message:string}} values
 * @param {{source?:string}} [opts] where the form was submitted from
 * @returns {Promise<{ok:boolean, message?:string, error?:string, errors?:Record<string,string>}>}
 */
export async function sendEnquiry(values, opts = {}) {
  const payload = {
    name: values.name,
    phone: values.phone,
    email: values.email,
    service: values.project || values.service || '',
    project: values.project || values.service || '',
    message: values.message,
    source: opts.source || 'Website Contact Us Form',
  }

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    })

    const data = await res.json().catch(() => ({}))

    if (res.ok && data.success) {
      return {
        ok: true,
        message: data.message || 'Thank you! Your enquiry has been sent successfully. Our team will get back to you soon.',
      }
    }

    return {
      ok: false,
      error: data.error || `Something went wrong while sending your enquiry. (Status ${res.status})`,
      errors: data.errors,
    }
  } catch (err) {
    return {
      ok: false,
      error: 'Network error — unable to reach the server. Please check your connection or contact us directly.',
    }
  }
}
