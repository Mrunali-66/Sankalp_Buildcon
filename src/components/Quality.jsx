import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { SCHEDULE, COMMITMENTS, COMMIT_SUB } from '../data/site.js'
import {
  IconArrow, IconBuilding, IconShield, IconTools, IconClipboard,
  IconLayers, IconCompass, IconLeaf, IconUsers, IconCheck,
} from '../pages/icons.jsx'

const SCHEDULE_ICONS = {
  A1: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 21h18M4 18h16M6 18V7M12 18V7M18 18V7M3 7l9-4 9 4" />
    </svg>
  ),
  A2: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14.5 6a3.5 3.5 0 0 0-4.9 4.5l-6 6a1.5 1.5 0 0 0 2 2l6-6A3.5 3.5 0 0 0 18 8.5l-2.5 2.5L13 8.5z" />
    </svg>
  ),
  B1: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  B2: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
    </svg>
  ),
  C1: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  ),
  C2: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <path d="M9 22v-4h6v4M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01" />
    </svg>
  ),
  D1: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  D2: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242M8 19v2M8 13v2M12 17v2M16 19v2M16 13v2" />
    </svg>
  ),
}

const COMMIT_ICONS = [<IconUsers />, <IconShield />, <IconBuilding />]
const SUB_ICONS = [<IconClipboard />, <IconCheck />, <IconShield />]

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
            setTimeout(() => e.target.classList.add('qp-visible'), Number(delay))
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

export default function Quality() {
  const pageRef = useReveal()

  return (
    <div ref={pageRef} id="quality" className="mod">

      {/* ════════════════════════════════════════════════════
          HERO — split: text left, building image right
          ════════════════════════════════════════════════════ */}
      <section className="qp-hero">
        <div className="m-wrap qp-hero-inner">

          {/* LEFT — text */}
          <div className="qp-hero-copy">
            <div className="qp-section-label" data-reveal>
              06 / Quality
            </div>

            <h1 className="qp-hero-h1" data-reveal data-delay="60">
              Specified per project,<br />
              <em>not by brochure.</em>
            </h1>

            <div className="qp-rule" data-reveal data-delay="100" aria-hidden="true" />

            <p className="qp-hero-sub" data-reveal data-delay="140">
              Materials and finishes differ between developments.
              Rather than publish one generic list, we issue the full
              specification schedule for the project you are actually
              considering.
            </p>

            <div className="qp-hero-actions" data-reveal data-delay="200">
              <a href="#contact" className="m-btn m-btn--solid">
                Talk to us <IconArrow />
              </a>
              <Link to="/projects" className="m-btn m-btn--ghost">
                Our projects
              </Link>
            </div>
          </div>

          {/* RIGHT — building image */}
          <div className="qp-hero-media" data-reveal data-delay="100">
            <img
              src="/assets/hero-building.jpg"
              alt="Sankalp Buildcon residential building — quality construction"
              className="qp-hero-img"
            />
            <div className="qp-hero-badge">
              <IconShield />
              <span>Quality specified per project</span>
            </div>
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          SPECIFICATION SCHEDULE TABLE
          ════════════════════════════════════════════════════ */}
      <section className="qp-section">
        <div className="m-wrap">

          <div className="qp-table-card" data-reveal>
            <div className="qp-table-caption">
              <div className="qp-caption-left">
                <span className="qp-caption-tag">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                  </svg>
                  SPECIFICATION SCHEDULE
                </span>
                <span className="qp-caption-sub">Categories covered in every project document</span>
              </div>
              <span className="qp-caption-doc-id" aria-hidden="true">SANKALP / SPEC-06</span>
            </div>

            <table className="qp-table">
              <thead>
                <tr>
                  <th className="qp-th-ref">Ref</th>
                  <th className="qp-th-cat">Category</th>
                  <th className="qp-th-note">Issued as</th>
                </tr>
              </thead>
              <tbody>
                {SCHEDULE.map((row, i) => (
                  <tr
                    className="qp-tr"
                    key={row.ref}
                    data-reveal
                    data-delay={i * 30}
                  >
                    <td className="qp-td-ref">
                      <span className="qp-ref-badge">{row.ref}</span>
                    </td>
                    <td className="qp-td-cat">
                      <span className="qp-cat-icon" aria-hidden="true">
                        {SCHEDULE_ICONS[row.ref]}
                      </span>
                      <span className="qp-cat-title">{row.cat}</span>
                    </td>
                    <td className="qp-td-note">
                      <span className="qp-note-text">{row.note}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="qp-table-foot">
              <div className="qp-table-foot-item">
                <span className="qp-foot-icon" aria-hidden="true"><IconClipboard /></span>
                <p>
                  Detailed specifications, drawings and material schedules are shared
                  during site visits and at the time of booking, and form part of the
                  project agreement.
                </p>
              </div>
              <div className="qp-table-foot-item qp-table-foot-item--right">
                <span className="qp-foot-icon" aria-hidden="true"><IconLayers /></span>
                <p>
                  <strong>Exact materials and brands —</strong>
                  <span>Confirmed and documented per project development</span>
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          CTA
          ════════════════════════════════════════════════════ */}
      <section className="qp-section" style={{ paddingTop: 0 }}>
        <div className="m-wrap">
          <div className="qp-cta" data-reveal>
            <div className="qp-cta-glow" aria-hidden="true" />
            <div className="qp-cta-copy">
              <span className="qp-section-label qp-section-label--light">
                Get the full specification
              </span>
              <h2 className="qp-cta-title">
                Ready to see the project<br />specification for real?
              </h2>
              <p className="qp-cta-sub">
                Full drawings, material schedules and quality notes are shared
                during site visits — let's arrange one.
              </p>
            </div>
            <div className="qp-cta-actions">
              <a href="#contact" className="m-btn m-btn--white">
                Arrange a visit <IconArrow />
              </a>
              <Link to="/projects" className="m-btn m-btn--outline-white">
                View projects
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
