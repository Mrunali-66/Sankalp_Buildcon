import { useRef, useState } from 'react'
import PendingLink from './PendingLink.jsx'
import { PROJECT_OPTIONS } from '../data/site.js'

const EMPTY = { name: '', phone: '', email: '', project: '', message: '' }

// Returns true when the one field is fine.
function isValid(field, value) {
  const v = value.trim()
  if (field === 'message') return true
  if (!v) return false
  if (field === 'email') return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)
  if (field === 'phone') return v.replace(/\D/g, '').length >= 10
  return true
}

export default function Contact() {
  const [values, setValues] = useState(EMPTY)
  const [bad, setBad] = useState({})
  const [done, setDone] = useState(false)
  const doneRef = useRef(null)

  const change = (field) => (e) => {
    const value = e.target.value
    setValues((v) => ({ ...v, [field]: value }))
    // Only re-check a field that is already marked bad.
    if (bad[field]) setBad((b) => ({ ...b, [field]: !isValid(field, value) }))
  }

  const blur = (field) => () => {
    if (values[field].trim()) setBad((b) => ({ ...b, [field]: !isValid(field, values[field]) }))
  }

  const submit = (e) => {
    e.preventDefault()
    const next = {}
    ;['name', 'phone', 'email', 'project'].forEach((f) => {
      next[f] = !isValid(f, values[f])
    })
    setBad(next)

    if (Object.values(next).some(Boolean)) {
      setDone(false)
      const first = Object.keys(next).find((f) => next[f])
      document.getElementById(first)?.focus()
      return
    }

    setDone(true)
    setValues(EMPTY)
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    doneRef.current?.scrollIntoView({ behavior: calm ? 'auto' : 'smooth', block: 'center' })
  }

  const fieldClass = (f) => `f${bad[f] ? ' bad' : ''}`

  return (
    <section className="band band--dark" id="contact">
      <div className="wrap">
        <div className="head">
          <div className="ref">09 / Contact</div>
          <div className="head-flow">
            <h2 className="title">Let's build<br /><em>something meaningful.</em></h2>
            <p>
              Whether you are looking at a home, representing a society considering
              redevelopment, or simply want to see a site — we would be glad to talk.
            </p>
          </div>
        </div>

        <div className="contact">
          <div className="contact-side">
            <dl>
              <div><dt>Phone</dt><dd className="pending">[Contact Number]</dd></div>
              <div><dt>Email</dt><dd className="pending">[Email Address]</dd></div>
              <div><dt>Office</dt><dd className="pending">[Office Address]</dd></div>
              <div>
                <dt>Current sites</dt>
                <dd style={{ fontSize: 15 }}>
                  Anand Nagar &amp; Dhore Nagar Chowk,<br />Old Sangvi, Pune – 27
                </dd>
              </div>
            </dl>
            <div className="contact-do">
              <PendingLink href="tel:" className="btn btn-paper btn-sm">Call us</PendingLink>
              <PendingLink href="https://wa.me/" className="btn btn-line-light btn-sm">
                WhatsApp us
              </PendingLink>
            </div>
            <p className="note" style={{ marginTop: 24 }}>
              Phone, email and address awaiting confirmation
            </p>
          </div>

          <form className="enquiry" noValidate onSubmit={submit}>
            <div className="fields">
              <div className={fieldClass('name')}>
                <label htmlFor="name">Name</label>
                <input
                  id="name" name="name" type="text" autoComplete="name" placeholder="Your name"
                  value={values.name} onChange={change('name')} onBlur={blur('name')}
                />
                <em>Please enter your name.</em>
              </div>

              <div className={fieldClass('phone')}>
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel"
                  placeholder="10-digit number"
                  value={values.phone} onChange={change('phone')} onBlur={blur('phone')}
                />
                <em>Please enter a valid phone number.</em>
              </div>

              <div className={fieldClass('email')}>
                <label htmlFor="email">Email</label>
                <input
                  id="email" name="email" type="email" autoComplete="email"
                  placeholder="you@example.com"
                  value={values.email} onChange={change('email')} onBlur={blur('email')}
                />
                <em>Please enter a valid email address.</em>
              </div>

              <div className={fieldClass('project')}>
                <label htmlFor="project">Project of interest</label>
                <select
                  id="project" name="project"
                  value={values.project} onChange={change('project')} onBlur={blur('project')}
                >
                  <option value="">Select an option</option>
                  {PROJECT_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                </select>
                <em>Please choose an option.</em>
              </div>

              <div className="f full">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message" name="message"
                  placeholder="A few details about what you are looking for."
                  value={values.message} onChange={change('message')}
                />
              </div>
            </div>

            <div className="send">
              <button type="submit" className="btn btn-paper">Submit enquiry</button>
              <p>Demo form — nothing is sent or stored.</p>
            </div>

            <div
              className={`done${done ? ' show' : ''}`}
              ref={doneRef}
              role="status"
              aria-live="polite"
            >
              <b>Thank you — your enquiry has been captured.</b>
              <span>This is a demo. On the live site it will reach the Sankalp Buildcon team.</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
