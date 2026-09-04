import { SERVICES_DATA, WORKFLOW_STEPS } from '../data/services.js'

/* ─── Service Category SVG Icons ─── */
function ServiceIcon({ type }) {
  switch (type) {
    case 'building':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="4" y="2" width="16" height="20" rx="1.5" />
          <path d="M9 6h1M14 6h1M9 10h1M14 10h1M9 14h1M14 14h1M9 18h6" />
        </svg>
      )
    case 'redevelopment':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l.73-.73" />
          <rect x="7" y="7" width="10" height="10" rx="1" />
        </svg>
      )
    case 'construction':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M2 18h20M4 18V8a8 8 0 0 1 16 0v10M12 2v6" />
        </svg>
      )
    case 'management':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    case 'planning':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9" />
        </svg>
      )
    case 'quality':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      )
    default:
      return null
  }
}

/* ─── Workflow Step Technical SVG Icons ─── */
function WorkflowIcon({ type }) {
  switch (type) {
    case 'layout':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
          <line x1="8" y1="2" x2="8" y2="18" />
          <line x1="16" y1="6" x2="16" y2="22" />
        </svg>
      )
    case 'soil':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 2v14M7 11l5 5 5-5M4 21h16" />
        </svg>
      )
    case 'structure':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M3 21h18M4 18h16M6 18V7M12 18V7M18 18V7M3 7l9-4 9 4" />
        </svg>
      )
    case 'masonry':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="1.5" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="3" y1="15" x2="21" y2="15" />
          <line x1="9" y1="3" x2="9" y2="9" />
          <line x1="15" y1="3" x2="15" y2="9" />
          <line x1="6" y1="9" x2="6" y2="15" />
          <line x1="12" y1="9" x2="12" y2="15" />
          <line x1="18" y1="9" x2="18" y2="15" />
          <line x1="9" y1="15" x2="9" y2="21" />
          <line x1="15" y1="15" x2="15" y2="21" />
        </svg>
      )
    case 'plumbing':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 10v4h5v-4H4zm11 0v4h5v-4h-5zM9 14v4h6v-4H9zm0-4V6h6v4H9z" />
        </svg>
      )
    case 'flooring':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M2 12l10-8 10 8-10 8-10-8z" />
          <path d="M12 4v16M2 12h20" />
        </svg>
      )
    case 'painting':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="4" y="3" width="16" height="6" rx="2" />
          <path d="M20 6v5a2 2 0 0 1-2 2h-5v5a1 1 0 0 1-2 0v-5" />
        </svg>
      )
    case 'handover':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="7.5" cy="15.5" r="4.5" />
          <path d="M11 12l9-9M16 3l4 4M13 6l2 2" />
        </svg>
      )
    default:
      return null
  }
}

export default function Services() {
  return (
    <div id="services" className="services-master-wrapper">
      {/* ════════════════════════════════════════════════
          SECTION 01 — COMPREHENSIVE CAPABILITIES
          ════════════════════════════════════════════════ */}
      <section className="svc-capabilities-section">
        {/* Subtle background architectural blueprint linework */}
        <div className="svc-bg-watermark" aria-hidden="true">
          <svg width="460" height="340" viewBox="0 0 460 340" fill="none" stroke="currentColor">
            <path d="M120 300V90l130-45v255M250 45l150 55v200M250 110l150-10M120 135l130-20M120 200l130-20M120 265l130-20M250 175l150-10M250 240l150-10M40 300V150l80-35v185M40 205l80-15M40 260l80-15M210 45V20l70 12v13M320 100V75l55 18v7" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.4" />
            <path d="M30 300h390M120 90h130M250 45h150" strokeWidth="0.8" opacity="0.5" />
          </svg>
        </div>

        <div className="svc-container">
          {/* Header Row */}
          <div className="svc-header-wrap">
            <div className="svc-header-copy">
              <div className="svc-eyebrow">
                <span className="svc-eyebrow-text">COMPREHENSIVE CAPABILITIES</span>
                <span className="svc-eyebrow-line" aria-hidden="true" />
              </div>
              <h2 className="svc-heading">
                Tailored services for<br />
                <em>home buyers and society committees</em>
              </h2>
              <p className="svc-lead-desc">
                Every project is led directly by our founder, technical supervisors and legal advisors —
                ensuring clear communication, transparency and hassle-free execution.
              </p>
            </div>

            <div className="svc-header-divider" aria-hidden="true" />

            <div className="svc-header-editorial">
              <div className="svc-header-brand-block">
                <span className="svc-brand-building">Building</span>
                <span className="svc-brand-living">Better Living</span>
                <span className="svc-brand-sub">TRUST · QUALITY · COMMUNITY</span>
              </div>
              <div className="svc-header-pillars" aria-hidden="true">
                <span>SPACES</span>
                <span>PEOPLE</span>
                <span>COMMUNITIES</span>
                <span>A STRONGER TOMORROW</span>
              </div>
            </div>
          </div>

          {/* 6 Editorial Architectural Service Cards Grid */}
          <div className="svc-cards-grid">
            {SERVICES_DATA.map((svc) => (
              <article className="svc-card" key={svc.number}>
                <div className="svc-card-content">
                  <div className="svc-card-meta-top">
                    <span className="svc-card-num">{svc.number}</span>
                    <span className="svc-card-num-line" aria-hidden="true" />
                  </div>

                  <h3 className="svc-card-title">{svc.title}</h3>
                  <p className="svc-card-desc">{svc.body}</p>

                  <a href={svc.to || '#contact'} className="svc-card-cta" aria-label={`Learn more about ${svc.title}`}>
                    <span>Learn more</span>
                    <span className="svc-card-cta-icon" aria-hidden="true">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </a>
                </div>

                <div className="svc-card-media">
                  <img
                    src={svc.image}
                    alt={svc.imageAlt || svc.title}
                    className="svc-card-img"
                    loading="lazy"
                  />
                  <div className="svc-card-media-fade" aria-hidden="true" />
                </div>
              </article>
            ))}
          </div>

          {/* Bottom Editorial Bar */}
          <div className="svc-capabilities-footer" aria-hidden="true">
            <span className="svc-bottom-brand">SANKALP BUILDCON</span>
            <span className="svc-bottom-tagline">CONSTRUCTING TRUST · BUILDING LIVES</span>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SECTION 02 — STRUCTURED WORKFLOW
          ════════════════════════════════════════════════ */}
      <section className="svc-workflow-section" id="workflow">
        {/* Dark Luxury Architectural Banner Header */}
        <div className="svc-workflow-banner">
          <div className="svc-container svc-workflow-banner-inner">
            <div className="svc-wf-banner-left">
              <div className="svc-wf-eyebrow">
                <span className="svc-wf-eyebrow-text">STRUCTURED WORKFLOW</span>
                <span className="svc-wf-eyebrow-line" aria-hidden="true" />
              </div>
              <h2 className="svc-wf-heading">
                How we deliver from vision to handover
              </h2>
            </div>
            <div className="svc-wf-banner-right" aria-hidden="true">
              <span>A BETTER TOMORROW</span>
            </div>
          </div>
        </div>

        {/* 8-Step Architectural Process Timeline */}
        <div className="svc-container svc-timeline-container">
          <div className="svc-timeline-track" role="list">
            {WORKFLOW_STEPS.map((step) => (
              <div className="svc-timeline-step" key={step.number} role="listitem">
                <div className="svc-step-header">
                  <span className="svc-step-pill">{step.number}</span>
                  <div className="svc-step-line" aria-hidden="true" />
                </div>

                <div className="svc-step-icon-wrap">
                  <WorkflowIcon type={step.icon} />
                </div>

                <h3 className="svc-step-title">{step.title}</h3>
                <p className="svc-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Bottom Editorial Bar with CTA */}
          <div className="svc-workflow-footer">
            <div className="svc-wf-footer-left">
              <span className="svc-wf-motto-line" aria-hidden="true" />
              <span className="svc-wf-motto">WELL PLANNED. WELL BUILT. FOR GENERATIONS.</span>
            </div>
            <div className="svc-wf-footer-right">
              <a href="#contact" className="svc-wf-cta-btn">
                <span>Let's Build Together</span>
                <span className="svc-wf-cta-arrow" aria-hidden="true">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

