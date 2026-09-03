import { Link } from 'react-router-dom'
import { SERVICE_CARDS, PROCESS, WHY } from '../data/services.js'
import {
  IconArrow, IconBuilding, IconRefresh, IconTools, IconClipboard, IconCompass,
  IconShield, IconLeaf, IconCalendar, IconUsers,
} from './icons.jsx'

const ICONS = {
  building: <IconBuilding />, refresh: <IconRefresh />, tools: <IconTools />,
  clipboard: <IconClipboard />, compass: <IconCompass />, shield: <IconShield />,
  leaf: <IconLeaf />, calendar: <IconCalendar />, users: <IconUsers />,
}

/* ── stat band data ── */
const STATS = [
  { icon: <IconCalendar />, label: 'Year Established', value: '2012' },
  { icon: <IconUsers />,    label: 'Years of Trust & Quality', value: '12+' },
  { icon: <IconBuilding />, label: 'Families Housed', value: '100+' },
  { icon: <IconShield />,   label: 'Prime Developments', value: 'Sangvi & PCMC' },
]

export default function ServicesPage() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="sp-hero">
        {/* decorative blobs */}
        <div className="sp-blob sp-blob--1" aria-hidden="true" />
        <div className="sp-blob sp-blob--2" aria-hidden="true" />

        <div className="m-wrap sp-hero-in">
          {/* breadcrumb */}
          <nav className="sp-crumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>Services</span>
          </nav>

          <span className="m-eyebrow">What We Do</span>

          <h1 className="sp-hero-h1">
            Spaces with purpose.<br />
            <span>Projects with direction.</span>
          </h1>

          <p className="sp-hero-sub">
            From the first site assessment through to handover, the same team stays with
            the project — so nothing is lost between stages. Here is what we take on.
          </p>

          <div className="sp-hero-cta">
            <a href="/#contact" className="m-btn m-btn--solid">
              Contact Us <IconArrow />
            </a>
            <Link to="/projects" className="m-btn m-btn--ghost">
              Explore Projects
            </Link>
          </div>

          {/* info card */}
          <div className="sp-hero-card">
            <div className="sp-hero-card-icon">
              <IconBuilding />
            </div>
            <div>
              <strong>Creating Landmarks.</strong>
              <p>Building Relationships. Let's build something extraordinary together.</p>
              <a href="/#contact" className="m-link" style={{ marginTop: 8, display: 'inline-flex' }}>
                Contact Us <IconArrow />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── STAT BAND ── */}
      <div className="m-wrap" style={{ paddingBlock: '0 clamp(48px,6vw,84px)' }}>
        <div className="m-band">
          <div className="m-band-grid">
            {STATS.map((s) => (
              <div className="m-band-cell" key={s.label}>
                {s.icon}
                <div>
                  <div className="l">{s.label}</div>
                  <div className="v">{s.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SERVICE CARDS ── */}
      <section className="m-section">
        <div className="m-wrap">
          <div className="m-section-head">
            <span className="m-eyebrow">Our Services</span>
            <h2>Built around how families actually live</h2>
            <p>Six areas of work, one standard of execution across all of them.</p>
          </div>

          <div className="m-grid m-grid--3">
            {SERVICE_CARDS.map((s, i) => (
              <article className="m-card" key={s.title}>
                <div className="m-card-no">{String(i + 1).padStart(2, '0')}</div>
                <div className="m-tile">{ICONS[s.icon]}</div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
                {s.to && (
                  <a href={s.to} className="m-link" style={{ marginTop: 'auto', paddingTop: 18 }}>
                    {s.linkLabel} <IconArrow />
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONSTRUCTION PROCESS ── */}
      <section className="m-section sp-process-section">
        <div className="m-wrap">
          <div className="m-section-head">
            <span className="m-eyebrow">Our Construction Approach</span>
            <h2>From foundation to finishing</h2>
            <p>A strong building needs attention at every stage. Our process is deliberately systematic.</p>
          </div>

          <div className="m-steps sp-steps--4">
            {PROCESS.map((step, i) => (
              <div className="m-step" key={step.h}>
                <div className="n">{String(i + 1).padStart(2, '0')}</div>
                <h4>{step.h}</h4>
                <p>{step.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY SANKALP ── */}
      <section className="m-section">
        <div className="m-wrap">
          <div className="m-section-head center">
            <span className="m-eyebrow">Why Sankalp Buildcon</span>
            <h2>Built on strong foundations</h2>
          </div>

          <div className="m-grid m-grid--4">
            {WHY.map((w) => (
              <article className="m-card sp-why-card" key={w.h}>
                <div className="m-tile">{ICONS[w.icon]}</div>
                <h3>{w.h}</h3>
                <p>{w.p}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="m-section" style={{ paddingTop: 0 }}>
        <div className="m-wrap">
          <div className="m-cta">
            <div>
              <h2>Planning a project or a redevelopment?</h2>
              <p>Start a conversation with the team — no obligation, just a clear view of what is possible.</p>
            </div>
            <div className="m-cta-do">
              <a href="/#contact" className="m-btn m-btn--light">Get in touch <IconArrow /></a>
              <Link to="/projects" className="m-btn m-btn--light">See our projects</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
