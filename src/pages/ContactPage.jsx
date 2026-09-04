import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { PROJECT_OPTIONS } from '../data/site.js'
import { sendEnquiry } from '../lib/sendEnquiry.js'
import { IconBuilding } from './icons.jsx'

/* ── contact details ────────────────────────────────── */
const CONTACT_DETAILS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3 4.2 2 2 0 0 1 4.9 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2L9 9.9A16 16 0 0 0 15 15l1.2-1.2a2 2 0 0 1 2-.5c.9.4 1.9.6 2.9.7A2 2 0 0 1 22 16.9z" />
      </svg>
    ),
    label: 'Phone',
    value: '+91 98 7654 3210',
    href: 'tel:+919876543210',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 7 10 7 10-7" />
      </svg>
    ),
    label: 'Email',
    value: 'hello@sankalpbuildcon.com',
    href: 'mailto:hello@sankalpbuildcon.com',
  },
  {
    icon: <IconBuilding />,
    label: 'Office',
    value: 'Sankalp Buildcon,\nShop No. 3, Plot No. 18,\nAnand Nagar, Old Sangvi,\nPune – 411027, Maharashtra.',
    multiline: true,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    ),
    label: 'Current sites',
    value: 'Anand Nagar & Dhore Nagar Chowk,\nOld Sangvi, Pune – 27',
    multiline: true,
  },
]

/* ── form validation ─────────────────────────────────── */
const EMPTY = { name: '', phone: '', email: '', project: '', message: '' }

function isValid(field, value) {
  const v = (value || '').trim()
  if (field === 'name') return v.length > 0
  if (field === 'email') return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)
  if (field === 'phone') return v.replace(/\D/g, '').length >= 10
  if (field === 'project') return v.length > 0
  if (field === 'message') return v.length > 0
  return true
}

/* ── scroll-reveal ───────────────────────────────────── */
function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    if (!ref.current) return
    const els = ref.current.querySelectorAll('[data-reveal]')
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const delay = e.target.dataset.delay ?? 0
            setTimeout(() => e.target.classList.add('cp-visible'), Number(delay))
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.08 }
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])
  return ref
}

export default function ContactPage() {
  const pageRef = useReveal()
  const [values, setValues] = useState(EMPTY)
  const [bad, setBad] = useState({})
  const [done, setDone] = useState(false)
  const [sending, setSending] = useState(false)
  const [sendError, setSendError] = useState('')
  const doneRef = useRef(null)

  const change = (field) => (e) => {
    const value = e.target.value
    setValues((v) => ({ ...v, [field]: value }))
    if (bad[field]) {
      setBad((b) => ({ ...b, [field]: !isValid(field, value) }))
    }
  }

  const blur = (field) => () => {
    if (values[field].trim() || bad[field]) {
      setBad((b) => ({ ...b, [field]: !isValid(field, values[field]) }))
    }
  }

  const submit = async (e) => {
    e.preventDefault()
    setSendError('')
    setDone(false)

    const next = {}
    ;['name', 'phone', 'email', 'project', 'message'].forEach((f) => {
      next[f] = !isValid(f, values[f])
    })
    setBad(next)

    if (Object.values(next).some(Boolean)) {
      const first = Object.keys(next).find((f) => next[f])
      document.getElementById(`cp-${first}`)?.focus()
      return
    }

    setSending(true)
    const res = await sendEnquiry(values, { source: 'Contact page' })
    setSending(false)

    if (!res.ok) {
      setSendError(res.error || 'Something went wrong while sending your enquiry. Please try again.')
      return
    }

    setDone(true)
    setValues(EMPTY)
    setBad({})
    setTimeout(() => {
      doneRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }, 100)
  }

  const fc = (f) => `cp-field${bad[f] ? ' cp-field--bad' : ''}`

  return (
    <div ref={pageRef}>

      {/* ════════════════════════════════════════════
          MAIN CONTACT SECTION
          ════════════════════════════════════════════ */}
      <section className="cp-section">
        <div className="m-wrap cp-layout">

          {/* ── LEFT: info ── */}
          <div className="cp-left">
            {/* breadcrumb */}
            <nav className="cp-crumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Contact</span>
            </nav>

            <div className="cp-section-label" data-reveal>09 / Contact</div>

            <h1 className="cp-headline" data-reveal data-delay="60">
              Let's build<br />
              <em>something meaningful.</em>
            </h1>

            <div className="cp-rule" data-reveal data-delay="100" aria-hidden="true" />

            <p className="cp-desc" data-reveal data-delay="130">
              Whether you are looking at a home, representing a society considering
              redevelopment, or simply want to see a site — we would be glad to talk.
            </p>

            {/* contact cards */}
            <div className="cp-details" data-reveal data-delay="160">
              {CONTACT_DETAILS.map((d) => (
                <div className="cp-detail-item" key={d.label}>
                  <div className="cp-detail-icon" aria-hidden="true">{d.icon}</div>
                  <div>
                    <div className="cp-detail-label">{d.label}</div>
                    {d.href ? (
                      <a href={d.href} className="cp-detail-value cp-detail-link">
                        {d.value}
                      </a>
                    ) : (
                      <div className="cp-detail-value">
                        {d.multiline
                          ? d.value.split('\n').map((line, i) => (
                              <span key={i}>{line}{i < d.value.split('\n').length - 1 && <br />}</span>
                            ))
                          : d.value}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="cp-cta-row" data-reveal data-delay="200">
              <a href="tel:+919876543210" className="cp-btn-call">
                <svg viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{width:16,height:16}}>
                  <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3 4.2 2 2 0 0 1 4.9 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2L9 9.9A16 16 0 0 0 15 15l1.2-1.2a2 2 0 0 1 2-.5c.9.4 1.9.6 2.9.7A2 2 0 0 1 22 16.9z" />
                </svg>
                <span>Call us</span>
              </a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="cp-btn-wa">
                <svg viewBox="0 0 24 24" fill="currentColor" style={{width:16,height:16}}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.025.506 3.93 1.395 5.6L0 24l6.584-1.367A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 0 1-5.032-1.384l-.361-.214-3.907.811.835-3.798-.235-.375A9.8 9.8 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
                </svg>
                <span>WhatsApp us</span>
              </a>
            </div>

            <p className="cp-pending-note" data-reveal data-delay="220">
              Phone, email and address awaiting confirmation
            </p>
          </div>

          {/* ── RIGHT: form card ── */}
          <div className="cp-right" data-reveal data-delay="80">
            <div className="cp-form-card">
              <form noValidate onSubmit={submit}>
                <div className="cp-form-row">
                  <div className={fc('name')}>
                    <label htmlFor="cp-name" className="cp-label">Full Name *</label>
                    <input
                      id="cp-name" name="name" type="text" autoComplete="name"
                      placeholder="Your full name"
                      className="cp-input"
                      value={values.name} onChange={change('name')} onBlur={blur('name')}
                    />
                    {bad.name && <span className="cp-err">Please enter your full name.</span>}
                  </div>
                  <div className={fc('phone')}>
                    <label htmlFor="cp-phone" className="cp-label">Phone Number *</label>
                    <input
                      id="cp-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel"
                      placeholder="Your phone number"
                      className="cp-input"
                      value={values.phone} onChange={change('phone')} onBlur={blur('phone')}
                    />
                    {bad.phone && <span className="cp-err">Enter a valid phone (at least 10 digits).</span>}
                  </div>
                </div>

                <div className={fc('email')}>
                  <label htmlFor="cp-email" className="cp-label">Email Address *</label>
                  <input
                    id="cp-email" name="email" type="email" autoComplete="email"
                    placeholder="Your email address"
                    className="cp-input"
                    value={values.email} onChange={change('email')} onBlur={blur('email')}
                  />
                  {bad.email && <span className="cp-err">Enter a valid email address.</span>}
                </div>

                <div className={fc('project')}>
                  <label htmlFor="cp-project" className="cp-label">Service / Project of interest *</label>
                  <div className="cp-select-wrap">
                    <select
                      id="cp-project" name="project"
                      className="cp-select"
                      value={values.project} onChange={change('project')} onBlur={blur('project')}
                    >
                      <option value="">Select a service or project</option>
                      {PROJECT_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                    <svg className="cp-select-arrow" viewBox="0 0 12 8" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <path d="M1 1l5 5 5-5" />
                    </svg>
                  </div>
                  {bad.project && <span className="cp-err">Please choose an option.</span>}
                </div>

                <div className={fc('message')}>
                  <label htmlFor="cp-message" className="cp-label">Message *</label>
                  <textarea
                    id="cp-message" name="message"
                    placeholder="Tell us about your requirement or project..."
                    className="cp-textarea"
                    value={values.message} onChange={change('message')} onBlur={blur('message')}
                  />
                  {bad.message && <span className="cp-err">Please enter your message.</span>}
                </div>

                <button type="submit" className="cp-submit" disabled={sending}>
                  {sending ? 'Sending...' : 'Send Enquiry'}
                </button>

                <p className="cp-form-note">
                  Your enquiry is emailed directly to the Sankalp Buildcon team.
                </p>

                {sendError && (
                  <div className="cp-done cp-done--error" role="alert">
                    <strong>Something went wrong while sending your enquiry.</strong>
                    <span>{sendError}</span>
                  </div>
                )}

                {done && (
                  <div className="cp-done" ref={doneRef} role="status" aria-live="polite">
                    <strong>Thank you! Your enquiry has been sent successfully.</strong>
                    <span>Our team will get back to you soon.</span>
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}
