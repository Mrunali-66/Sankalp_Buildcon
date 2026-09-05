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

/* ─── Workflow Step Header Icons ─── */
function WorkflowIcon({ type }) {
  switch (type) {
    case 'layout':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
          <line x1="8" y1="2" x2="8" y2="18" />
          <line x1="16" y1="6" x2="16" y2="22" />
        </svg>
      )
    case 'soil':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 3v13M7 11l5 5 5-5M4 21h16" />
        </svg>
      )
    case 'structure':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21V11h6v10" />
        </svg>
      )
    case 'masonry':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="3" y1="15" x2="21" y2="15" />
          <line x1="9" y1="3" x2="9" y2="9" />
          <line x1="15" y1="3" x2="15" y2="9" />
          <line x1="12" y1="9" x2="12" y2="15" />
          <line x1="9" y1="15" x2="9" y2="21" />
          <line x1="15" y1="15" x2="15" y2="21" />
        </svg>
      )
    case 'plumbing':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 2v6m0 0a4 4 0 1 0 0 8m0-8a4 4 0 1 1 0 8m0 0v6M6 12h12" />
        </svg>
      )
    case 'flooring':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="12" y1="3" x2="12" y2="21" />
          <line x1="3" y1="12" x2="21" y2="12" />
        </svg>
      )
    case 'painting':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="4" y="3" width="16" height="6" rx="2" />
          <path d="M20 6v5a2 2 0 0 1-2 2h-5v5a1 1 0 0 1-2 0v-5" />
        </svg>
      )
    case 'handover':
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
          <polyline points="16 11 18 13 22 9" />
        </svg>
      )
    default:
      return null
  }
}

/* ─── Card Background Authentic Architectural Pencil-Sketch Illustrations ─── */
function WorkflowIllustration({ type }) {
  switch (type) {
    case 'blueprint':
      return (
        <svg viewBox="0 0 160 120" fill="none" stroke="currentColor" strokeWidth="1" className="svc-pencil-sketch">
          {/* Main 3D Blueprint Board */}
          <path d="M12 55L85 12L152 48L78 88Z" strokeWidth="1.2" strokeLinecap="square" />
          <path d="M12 55v6l66 33v-6Z" fill="currentColor" fillOpacity="0.08" />
          <path d="M152 48v6l-74 39v-6Z" fill="currentColor" fillOpacity="0.12" />
          {/* Over-shot Draftsman Pencil Guide Lines */}
          <path d="M5 58L92 8M80 8L158 45M10 52L82 91M155 42L74 91" strokeWidth="0.6" strokeDasharray="4 2" opacity="0.6" />
          {/* 3D Isometric Building Layout Sketch */}
          <path d="M42 48L75 32L108 48L75 64Z" strokeWidth="1.2" />
          <path d="M42 48v18l33 15V64M108 48v18l-33 15" strokeWidth="1.2" />
          <path d="M75 32v16M42 48l33 16M108 48l-33 16" strokeWidth="0.8" strokeDasharray="3 2" />
          {/* Cross-hatch shading on roof */}
          <path d="M50 44l25-12M60 49l25-12M70 54l25-12" strokeWidth="0.5" />
          {/* Dimension Extension Lines & Compass Rose */}
          <path d="M25 40L85 11M35 45L95 16" strokeWidth="0.6" strokeDasharray="2 3" />
          <circle cx="130" cy="32" r="9" strokeWidth="0.8" />
          <path d="M130 20v24M118 32h24M130 23l3 4h-6Z" fill="currentColor" strokeWidth="0.8" />
        </svg>
      )
    case 'foundation':
      return (
        <svg viewBox="0 0 160 120" fill="none" stroke="currentColor" strokeWidth="1" className="svc-pencil-sketch">
          {/* Ground Surface Pencil Line */}
          <path d="M5 42L155 42" strokeWidth="1.2" />
          <path d="M5 40L155 40" strokeWidth="0.6" strokeDasharray="5 3" />
          {/* Underground Soil Stratification Hatching */}
          <path d="M10 54h140M20 68h120M10 82h140M20 96h120" strokeWidth="0.6" strokeDasharray="3 4" opacity="0.6" />
          <path d="M15 48l10 6M45 48l10 6M75 48l10 6M105 48l10 6M135 48l10 6" strokeWidth="0.6" opacity="0.5" />
          {/* 3D Concrete Footing Pad with Over-shots */}
          <path d="M45 68L85 50L138 68L98 84Z" strokeWidth="1.2" />
          <path d="M45 68v16l53 16V84M138 68v16l-40 16" strokeWidth="1.2" />
          <path d="M40 70L85 48M85 48L142 70" strokeWidth="0.6" strokeDasharray="3 2" />
          {/* Rebar Column Cage */}
          <path d="M80 84V15M92 77V10M72 74V20M102 68V25" strokeWidth="1.2" />
          <path d="M72 20L80 15L102 25L92 30Z" strokeWidth="0.9" />
          <path d="M72 38L80 33L102 43L92 48Z" strokeWidth="0.9" />
          <path d="M72 56L80 51L102 61L92 66Z" strokeWidth="0.9" />
        </svg>
      )
    case 'frame':
      return (
        <svg viewBox="0 0 160 120" fill="none" stroke="currentColor" strokeWidth="1" className="svc-pencil-sketch">
          {/* Ground Grid Base */}
          <path d="M20 95L85 70L150 95L85 116Z" strokeWidth="1" />
          {/* 1st Floor Slab */}
          <path d="M20 60L85 35L150 60L85 80Z" strokeWidth="1.1" />
          <path d="M20 60v4l65 20v-4M85 80v4l65-20v-4" fill="currentColor" fillOpacity="0.08" />
          {/* 2nd Floor Roof Slab */}
          <path d="M20 25L85 0L150 25L85 45Z" strokeWidth="1.2" />
          <path d="M20 25v4l65 20v-4M85 45v4l65-20v-4" fill="currentColor" fillOpacity="0.1" />
          {/* Columns & Over-shot Extension Lines */}
          <path d="M20 98V20M85 72V-4M150 98V20M85 118V42" strokeWidth="1.3" />
          <path d="M52 82V12M118 82V12" strokeWidth="0.8" strokeDasharray="3 2" />
          {/* Beam Hatching */}
          <path d="M30 55l10-4M50 47l10-4M70 39l10-4" strokeWidth="0.5" />
          <path d="M95 43l10-3M115 50l10-3M135 56l10-3" strokeWidth="0.5" />
        </svg>
      )
    case 'wall':
      return (
        <svg viewBox="0 0 160 120" fill="none" stroke="currentColor" strokeWidth="1" className="svc-pencil-sketch">
          {/* 3D Wall Frame with Draftsman Over-shots */}
          <path d="M25 18L135 7V92L25 103Z" strokeWidth="1.3" />
          <path d="M20 18h120M20 103h120M25 2v105M135 2v105" strokeWidth="0.6" strokeDasharray="4 2" opacity="0.6" />
          {/* Staggered Brick Courses */}
          <path d="M25 35L135 24M25 52L135 41M25 69L135 58M25 86L135 75" strokeWidth="0.85" />
          {/* Vertical Mortar Joints */}
          <path d="M48 16v18M75 14v19M102 12v18M38 35v17M65 33v18M92 31v18M119 29v18M52 52v17M79 50v17M106 48v17M42 69v17M69 67v17M96 65v17M123 63v17" strokeWidth="0.75" />
          {/* Plaster Layer Stroke with Diagonal Cross Hatching */}
          <path d="M25 65 C55 52, 90 75, 135 48 V92 L25 103 Z" fill="currentColor" fillOpacity="0.08" strokeWidth="1" strokeDasharray="3 2" />
          <path d="M35 75l15-10M55 80l15-10M75 85l15-10M95 72l15-10M115 65l15-10" strokeWidth="0.5" opacity="0.7" />
        </svg>
      )
    case 'pipes':
      return (
        <svg viewBox="0 0 160 120" fill="none" stroke="currentColor" strokeWidth="1" className="svc-pencil-sketch">
          {/* 3D Corner Wall Grid Background */}
          <path d="M15 10v72l65 26V20Z" strokeWidth="0.7" strokeDasharray="3 3" />
          <path d="M80 20v88l70-28V10Z" strokeWidth="0.7" strokeDasharray="3 3" />
          {/* Main Plumbing Riser Pipes */}
          <path d="M42 5v98M50 5v98" strokeWidth="1.3" />
          <path d="M50 32h52a14 14 0 0 1 14 14v45" strokeWidth="1.3" />
          <path d="M50 40h44a14 14 0 0 1 14 14v37" strokeWidth="0.9" />
          {/* Pipe Flange Joints & Valve Wheel */}
          <rect x="39" y="52" width="14" height="16" rx="2" strokeWidth="1.2" fill="currentColor" fillOpacity="0.1" />
          <circle cx="116" cy="56" r="8" strokeWidth="1.2" />
          <path d="M116 48v16M108 56h16M111 51l10 10M111 61l10-10" strokeWidth="0.7" />
          {/* Flexible Electrical Conduit Tube */}
          <path d="M80 5v48l45 22" strokeWidth="1.1" strokeDasharray="3 2" />
        </svg>
      )
    case 'tiles':
      return (
        <svg viewBox="0 0 160 120" fill="none" stroke="currentColor" strokeWidth="1" className="svc-pencil-sketch">
          {/* 3D Room Corner Walls */}
          <path d="M10 18L80 44V112L10 86Z" strokeWidth="1" />
          <path d="M150 18L80 44V112L150 86Z" strokeWidth="1" />
          {/* Floor Tile Perspective Grid */}
          <path d="M10 86L80 112L150 86L80 60Z" strokeWidth="1.3" />
          <path d="M28 81L98 107M46 75L116 101M64 69L134 95" strokeWidth="0.85" />
          <path d="M28 92L98 66M46 97L116 71M64 102L134 76" strokeWidth="0.85" />
          {/* Wall Tile Grid & Hatching */}
          <path d="M10 35L80 61M10 52L80 78M10 69L80 95" strokeWidth="0.75" />
          <path d="M33 26V92M56 35V102" strokeWidth="0.75" />
          <path d="M80 61L150 35V86L80 112Z" fill="currentColor" fillOpacity="0.06" />
          <path d="M95 62l25-10M115 70l25-10" strokeWidth="0.5" opacity="0.6" />
        </svg>
      )
    case 'paint':
      return (
        <svg viewBox="0 0 160 120" fill="none" stroke="currentColor" strokeWidth="1" className="svc-pencil-sketch">
          {/* 3D Wall Perspective Outline */}
          <path d="M15 10H145V98H15Z" strokeWidth="1.3" />
          <path d="M10 10h140M10 98h140M15 5v98M145 5v98" strokeWidth="0.6" strokeDasharray="3 3" opacity="0.5" />
          {/* Paint Stroke Area with Pencil Hatching */}
          <path d="M45 22H115V82H45Z" fill="currentColor" fillOpacity="0.08" strokeWidth="1" strokeDasharray="4 2" />
          <path d="M55 30l45 35M65 30l45 35M75 30l35 27" strokeWidth="0.5" opacity="0.6" />
          {/* Paint Roller Frame & Handle */}
          <rect x="98" y="16" width="38" height="14" rx="3" strokeWidth="1.3" fill="currentColor" fillOpacity="0.15" />
          <path d="M117 30v20h-28v32" strokeWidth="1.5" />
          <circle cx="89" cy="84" r="3.5" strokeWidth="1.2" fill="currentColor" />
          {/* Electrical Switch Plate Fitting */}
          <rect x="30" y="52" width="20" height="25" rx="2" strokeWidth="1.1" />
          <rect x="36" y="58" width="8" height="13" rx="1" strokeWidth="0.8" />
        </svg>
      )
    case 'door':
      return (
        <svg viewBox="0 0 160 120" fill="none" stroke="currentColor" strokeWidth="1" className="svc-pencil-sketch">
          {/* 3D Wall Outer Frame with Extension Lines */}
          <path d="M15 8H145V108H15Z" strokeWidth="0.8" strokeDasharray="4 2" opacity="0.5" />
          {/* Heavy Door Casing Frame */}
          <path d="M42 108V16H118V108" strokeWidth="1.5" />
          {/* 3D Open Door Leaf in Perspective */}
          <path d="M45 18L110 26V103L45 107Z" strokeWidth="1.3" fill="currentColor" fillOpacity="0.06" />
          {/* Beveled Door Panels with Pencil Shading */}
          <path d="M54 28L100 33V58L54 55Z" strokeWidth="0.9" />
          <path d="M54 62L100 66V96L54 99Z" strokeWidth="0.9" />
          <path d="M60 35l30 4M60 69l30 4" strokeWidth="0.5" opacity="0.6" />
          {/* Lever Handle & Escutcheon */}
          <circle cx="102" cy="66" r="3.5" strokeWidth="1.3" fill="currentColor" />
          <path d="M102 66h10" strokeWidth="1.8" />
          {/* Handover Key Ring */}
          <circle cx="122" cy="74" r="7" strokeWidth="1.1" />
          <path d="M127 79l13 13M135 87l3 3M133 91l3-3" strokeWidth="1.1" />
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
          SECTION 02 — STRUCTURED WORKFLOW (REDESIGNED 4x2 GRID)
          ════════════════════════════════════════════════ */}
      <section className="svc-workflow-section" id="workflow">
        <div className="svc-container">
          {/* Deep Navy Architectural Hero Banner */}
          <div className="svc-workflow-banner">
            <div className="svc-workflow-banner-bg" aria-hidden="true">
              <svg viewBox="0 0 800 300" fill="none" stroke="currentColor" className="svc-wf-crane-watermark">
                <path d="M700 280V40L550 10M700 40h90M550 10h150M550 10V280M580 40v240M610 40v240M640 40v240M670 40v240" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.3" />
                <path d="M400 280V120l150-40v200M400 120h150M400 170h150M400 220h150" strokeWidth="0.7" opacity="0.25" />
              </svg>
            </div>

            <div className="svc-workflow-banner-inner">
              <div className="svc-wf-banner-left">
                <div className="svc-wf-eyebrow">
                  <span className="svc-wf-eyebrow-text">STRUCTURED WORKFLOW</span>
                  <span className="svc-wf-eyebrow-line" aria-hidden="true" />
                </div>
                <h2 className="svc-wf-heading">
                  How we deliver from vision to handover
                </h2>
                <p className="svc-wf-subheading">
                  A transparent, step-by-step process that ensures quality, safety, and timely delivery at every stage.
                </p>
              </div>

              <div className="svc-wf-banner-right" aria-hidden="true">
                <span className="svc-wf-pill-tag">A BETTER TOMORROW</span>
              </div>
            </div>
          </div>

          {/* 8 Cards arranged in 4 Columns x 2 Rows Grid */}
          <div className="svc-wf-grid-container">
            <div className="svc-wf-grid" role="list">
              {WORKFLOW_STEPS.map((step) => (
                <div className="svc-wf-card" key={step.number} role="listitem">
                  <div className="svc-wf-card-header">
                    <div className="svc-wf-icon-box">
                      <WorkflowIcon type={step.icon} />
                    </div>
                    <span className="svc-wf-step-num">{step.number}</span>
                  </div>

                  <h3 className="svc-wf-card-title">{step.title}</h3>
                  <p className="svc-wf-card-desc">{step.desc}</p>

                  <ul className="svc-wf-checklist" role="list">
                    {step.checklist.map((item, i) => (
                      <li key={i} className="svc-wf-check-item">
                        <span className="svc-wf-check-bullet" aria-hidden="true">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span className="svc-wf-check-text">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="svc-wf-card-illustration" aria-hidden="true">
                    <WorkflowIllustration type={step.illustration} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Trust & CTA Bar */}
          <div className="svc-wf-footer-bar">
            <div className="svc-wf-footer-left">
              <div className="svc-wf-footer-icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1868DB" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <polyline points="9 12 11 14 15 10" />
                </svg>
              </div>
              <div className="svc-wf-footer-text">
                <h4 className="svc-wf-footer-title">WELL PLANNED. WELL BUILT. FOR GENERATIONS.</h4>
                <p className="svc-wf-footer-sub">Every step is managed with care, quality, and commitment to deliver spaces that last a lifetime.</p>
              </div>
            </div>

            <div className="svc-wf-footer-right">
              <a href="#contact" className="svc-wf-cta-btn">
                <span>Let's Build Together</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


