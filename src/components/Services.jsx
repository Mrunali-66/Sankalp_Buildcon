import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { SERVICE_CARDS, PROCESS, WHY } from '../data/services.js'
import {
  IconArrow, IconBuilding, IconRefresh, IconTools, IconClipboard, IconCompass,
  IconShield, IconLeaf, IconCalendar, IconUsers, IconCheck,
} from '../pages/icons.jsx'

/* ─── icon map ─────────────────────────────────────── */
const ICONS = {
  building:  <IconBuilding />,
  refresh:   <IconRefresh />,
  tools:     <IconTools />,
  clipboard: <IconClipboard />,
  compass:   <IconCompass />,
  shield:    <IconShield />,
  leaf:      <IconLeaf />,
  calendar:  <IconCalendar />,
  users:     <IconUsers />,
}

const STATS = [
  { icon: <IconCalendar />, label: 'Year Established',        value: '2012'        },
  { icon: <IconUsers />,    label: 'Years of Trust & Quality', value: '12+'         },
  { icon: <IconBuilding />, label: 'Families Housed',          value: '100+'        },
  { icon: <IconShield />,   label: 'Prime Developments',       value: 'Sangvi & PCMC' },
]

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
            setTimeout(() => e.target.classList.add('srv-visible'), Number(delay))
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])
  return ref
}

export default function Services() {
  const pageRef = useReveal()

  return (
    <div ref={pageRef} id="services" className="mod">

      {/* ════════════════════════════════════════════════
          HERO — full-bleed building image + overlay text
          ════════════════════════════════════════════════ */}
      <section className="srv-hero">
        <img
          src="/assets/hero-building.jpg"
          alt="Sankalp Buildcon residential development"
          className="srv-hero-img"
        />
        <div className="srv-hero-overlay" aria-hidden="true" />

        <div className="m-wrap srv-hero-body">
          <div className="srv-eyebrow" data-reveal>
            <span className="srv-eyebrow-line"></span>
            05 / Services
          </div>

          <h1 className="srv-hero-h1" data-reveal data-delay="80">
            What we take on,<br />
            <em>end to end.</em>
          </h1>

          <p className="srv-hero-sub" data-reveal data-delay="160">
            From initial land assessment and society redevelopment proposals to precision structural
            engineering and final keys handover — Sankalp Buildcon manages every stage of residential
            development in Pune with transparency and technical rigor.
          </p>

          <div className="srv-hero-cta" data-reveal data-delay="220">
            <Link to="/contact" className="m-btn m-btn--solid">
              Discuss Your Project <IconArrow />
            </Link>
            <a href="#services-list" className="m-btn srv-btn-outline">
              Explore Our Expertise
            </a>
          </div>
        </div>

        <a href="#services-list" className="srv-scroll-hint" aria-label="Scroll down to services">
          <span className="srv-scroll-line"></span>
          SCROLL
        </a>
      </section>

      {/* ════════════════════════════════════════════════
          STAT BAND
          ════════════════════════════════════════════════ */}
      <section className="srv-band">
        <div className="m-wrap">
          <div className="srv-band-grid">
            {STATS.map((s) => (
              <div key={s.label} className="srv-band-cell">
                <div className="srv-band-icon">{s.icon}</div>
                <div>
                  <div className="srv-band-label">{s.label}</div>
                  <div className="srv-band-value">{s.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          CORE SERVICES GRID
          ════════════════════════════════════════════════ */}
      <section className="srv-section" id="services-list">
        <div className="m-wrap">
          <div className="srv-section-head" data-reveal>
            <span className="srv-overline">Comprehensive Capabilities</span>
            <h2 className="srv-section-title">Tailored services for home buyers and society committees</h2>
            <p className="srv-section-sub">
              Every project is led directly by our founder, technical supervisors, and legal advisors —
              ensuring clear communication without middle layers.
            </p>
          </div>

          <div className="srv-cards">
            {(SERVICE_CARDS || []).map((svc, idx) => (
              <div
                key={svc.title || idx}
                className="srv-card"
                data-reveal
                data-delay={idx * 70}
              >
                <div className="srv-card-top">
                  <span className="srv-card-num">0{idx + 1}</span>
                  <div className="srv-card-tile">
                    {ICONS[svc.icon] ?? <IconBuilding />}
                  </div>
                </div>

                <h3 className="srv-card-title">{svc.title}</h3>
                <p className="srv-card-body">{svc.body || svc.description}</p>

                {svc.to && (
                  <Link to={svc.to} className="srv-card-link">
                    {svc.linkLabel || 'Learn more'} <IconArrow />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          HOW WE WORK — TIMELINE
          ════════════════════════════════════════════════ */}
      <section className="srv-section srv-process-bg">
        <div className="m-wrap">
          <div className="srv-section-head center" data-reveal>
            <span className="srv-overline">Structured Workflow</span>
            <h2 className="srv-section-title">How we deliver from vision to handover</h2>
          </div>

          <div className="srv-timeline">
            {(PROCESS || []).map((p, idx) => (
              <div key={p.h || p.title || idx} className="srv-timeline-item" data-reveal data-delay={idx * 80}>
                <span className="srv-tl-num">0{idx + 1}</span>
                <div className="srv-tl-connector">
                  <div className="srv-tl-dot" />
                </div>
                <h3 className="srv-tl-title">{p.h || p.title}</h3>
                <p className="srv-tl-text">{p.p || p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          WHY SANKALP BUILDCON — PILLARS
          ════════════════════════════════════════════════ */}
      <section className="srv-section">
        <div className="m-wrap">
          <div className="srv-section-head" data-reveal>
            <span className="srv-overline">Our Commitment</span>
            <h2 className="srv-section-title">Why partners choose Sankalp Buildcon</h2>
          </div>

          <div className="srv-pillars">
            {(WHY || []).map((w, idx) => (
              <div key={w.h || w.title || idx} className="srv-pillar" data-n={`0${idx + 1}`} data-reveal data-delay={idx * 80}>
                <div className="srv-pillar-icon">{ICONS[w.icon] ?? <IconShield />}</div>
                <div className="srv-pillar-check"><IconCheck /></div>
                <h3 className="srv-pillar-title">{w.h || w.title}</h3>
                <p className="srv-pillar-text">{w.p || w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          CTA STRIP
          ════════════════════════════════════════════════ */}
      <section className="srv-section" style={{ paddingTop: 0 }}>
        <div className="m-wrap">
          <div className="srv-cta" data-reveal>
            <div className="srv-cta-copy">
              <span className="srv-overline srv-overline--light" style={{ color: '#9EC0FF' }}>
                Get Started
              </span>
              <h2 className="srv-section-title" style={{ color: '#FFFFFF', marginBottom: 12 }}>
                Ready to discuss your redevelopment or housing requirement?
              </h2>
              <p className="srv-section-sub" style={{ color: '#D0E1FF' }}>
                Schedule a personal consultation with our founder or request a site visit to inspect our finished structures.
              </p>
            </div>
            <div className="srv-cta-actions">
              <Link to="/contact" className="m-btn m-btn--solid">
                Contact Us Now <IconArrow />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
