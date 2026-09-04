import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { SCHEDULE, COMMITMENTS, COMMIT_SUB } from '../data/site.js'
import {
  IconArrow, IconBuilding, IconShield, IconTools, IconClipboard,
  IconLayers, IconCompass, IconLeaf, IconUsers, IconCheck,
} from '../pages/icons.jsx'

const SCHEDULE_ICONS = {
  A1: <IconBuilding />,
  A2: <IconTools />,
  B1: <IconLayers />,
  B2: <IconClipboard />,
  C1: <IconLayers />,
  C2: <IconCompass />,
  D1: <IconShield />,
  D2: <IconLeaf />,
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
              <Link to="/contact" className="m-btn m-btn--solid">
                Talk to us <IconArrow />
              </Link>
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
              Specification schedule · categories covered in every project document
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
                    data-delay={i * 40}
                  >
                    <td className="qp-td-ref">{row.ref}</td>
                    <td className="qp-td-cat">
                      <span className="qp-cat-icon" aria-hidden="true">
                        {SCHEDULE_ICONS[row.ref]}
                      </span>
                      {row.cat}
                    </td>
                    <td className="qp-td-note">{row.note}</td>
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
                  <strong>Exact materials and brands —</strong><br />
                  to be confirmed per project
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          COMMITMENTS
          ════════════════════════════════════════════════════ */}
      <section className="qp-section qp-commit-section">
        <div className="m-wrap qp-commit-inner">

          <div className="qp-commit-copy">
            <div className="qp-section-label" data-reveal>07 / Commitments</div>
            <h2 className="qp-commit-h2" data-reveal data-delay="60">
              Three things we will<br />
              <em>not compromise.</em>
            </h2>
            <div className="qp-rule" data-reveal data-delay="100" aria-hidden="true" />
            <p className="qp-commit-sub" data-reveal data-delay="140">
              These are the tests applied before committing to a project,
              and before signing off any stage of work on one.
            </p>
          </div>

          <div className="qp-commit-media" data-reveal data-delay="80">
            <img
              src="/assets/projects/premraj-vihar-1.jpg"
              alt="Sankalp Buildcon architectural project facade"
              className="qp-commit-img"
            />
          </div>

        </div>

        <div className="m-wrap">
          <div className="qp-commit-pillars">
            {COMMITMENTS.map((c, i) => (
              <div
                className="qp-commit-pillar"
                key={c.no}
                data-reveal
                data-delay={80 + i * 80}
              >
                <div className="qp-pillar-num">{c.no}</div>
                <div className="qp-pillar-body">
                  <div className="qp-pillar-icon-wrap">
                    {COMMIT_ICONS[i]}
                  </div>
                  <h3 className="qp-pillar-title">{c.h}</h3>
                  <p className="qp-pillar-text">{c.p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="m-wrap">
          <div className="qp-sub-row">
            {COMMIT_SUB.map((s, i) => (
              <div
                className="qp-sub-item"
                key={s.h}
                data-reveal
                data-delay={i * 80}
              >
                <div className="qp-sub-icon">{SUB_ICONS[i]}</div>
                <div>
                  <h4 className="qp-sub-title">{s.h}</h4>
                  <p className="qp-sub-text">{s.p}</p>
                </div>
              </div>
            ))}
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
              <Link to="/contact" className="m-btn m-btn--white">
                Arrange a visit <IconArrow />
              </Link>
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
