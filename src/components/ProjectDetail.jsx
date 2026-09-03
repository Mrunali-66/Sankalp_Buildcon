import { useEffect } from 'react'
import { getProjectBySlug, getRelatedProjects } from '../data/projects.js'

export default function ProjectDetail({ slug, onBack, onSelectProject, onFilterOngoing }) {
  const project = getProjectBySlug(slug) || getProjectBySlug('premraj-vihar-2')
  const relatedProjects = getRelatedProjects(project.slug)
  const isOngoing = project.status === 'ongoing'

  // Scroll to top when project detail loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [slug])

  const renderHighlightIcon = (type) => {
    switch (type) {
      case 'layout':
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1868db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M3 9h18M9 21V9" />
          </svg>
        )
      case 'sun':
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1868db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        )
      case 'shield':
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1868db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="M9 12l2 2 4-4" />
          </svg>
        )
      case 'building':
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1868db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="4" y="2" width="16" height="20" rx="2" />
            <line x1="9" y1="6" x2="9" y2="6.01" />
            <line x1="15" y1="6" x2="15" y2="6.01" />
            <line x1="9" y1="10" x2="9" y2="10.01" />
            <line x1="15" y1="10" x2="15" y2="10.01" />
            <line x1="9" y1="14" x2="9" y2="14.01" />
            <line x1="15" y1="14" x2="15" y2="14.01" />
            <line x1="9" y1="18" x2="15" y2="18" />
          </svg>
        )
      case 'users':
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1868db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        )
      default:
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1868db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        )
    }
  }

  return (
    <div className="pdetail-page-wrapper">
      {/* Background ambient lighting */}
      <div className="pdetail-bg-elements" aria-hidden="true">
        <div className="pdetail-glow-top" />
        <div className="pdetail-glow-bottom" />
      </div>

      <div className="wrap pdetail-master-wrap">
        {/* Top Back to Projects Button */}
        <div className="pdetail-back-bar">
          <button
            type="button"
            className="pdetail-back-btn"
            onClick={onBack}
            aria-label="Back to Projects Overview"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span>Back to Projects</span>
          </button>
        </div>

        {/* SECTION 1: HERO (Asymmetrical Composition with Arch/Curved Container) */}
        <section className="pdetail-hero-section">
          <div className="pdetail-hero-grid">
            {/* Left Column: Eyebrow, Title, Location, Blueprint Sketch */}
            <div className="pdetail-hero-left">
              <div className="pdetail-hero-eyebrow">
                <span className="pdetail-eyebrow-tag">
                  {project.number} / {project.status.toUpperCase()}
                </span>
              </div>

              <h1 className="pdetail-hero-title">
                {project.titleFirst} <br />
                <span className="pdetail-blue-accent">{project.titleSecond}</span>
              </h1>

              <p className="pdetail-hero-location">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1868db" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>{project.location}, Pune</span>
              </p>

              {/* Blueprint vector art on bottom left */}
              <div className="pdetail-hero-blueprint" aria-hidden="true">
                <svg viewBox="0 0 320 200" fill="none">
                  <g stroke="#1868db" strokeWidth="1" strokeOpacity="0.2">
                    <rect x="20" y="20" width="280" height="160" strokeDasharray="3 3" />
                    <line x1="20" y1="60" x2="300" y2="60" />
                    <line x1="20" y1="100" x2="300" y2="100" />
                    <line x1="20" y1="140" x2="300" y2="140" />
                    <line x1="90" y1="20" x2="90" y2="180" />
                    <line x1="160" y1="20" x2="160" y2="180" />
                    <line x1="230" y1="20" x2="230" y2="180" />
                  </g>
                </svg>
              </div>
            </div>

            {/* Right Column: Dominant Architectural Hero Image */}
            <div className="pdetail-hero-right">
              <div className="pdetail-hero-image-frame">
                <img
                  src={project.image}
                  alt={`${project.name} architectural elevation`}
                  className="pdetail-hero-img"
                />
              </div>
            </div>
          </div>

          {/* Floating 4-Column Metadata Specs Bar */}
          <div className="pdetail-meta-strip">
            <div className="pdetail-meta-card">
              <div className="pdetail-meta-icon-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1868db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <div className="pdetail-meta-text">
                <span className="pdetail-meta-kicker">STATUS</span>
                <strong className="pdetail-meta-heading">{project.statusLabel}</strong>
              </div>
            </div>

            <div className="pdetail-meta-card">
              <div className="pdetail-meta-icon-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1868db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="4" y="2" width="16" height="20" rx="2" />
                  <line x1="9" y1="6" x2="9" y2="6.01" />
                  <line x1="15" y1="6" x2="15" y2="6.01" />
                  <line x1="9" y1="10" x2="9" y2="10.01" />
                  <line x1="15" y1="10" x2="15" y2="10.01" />
                  <line x1="9" y1="14" x2="9" y2="14.01" />
                  <line x1="15" y1="14" x2="15" y2="14.01" />
                  <line x1="9" y1="18" x2="15" y2="18" />
                </svg>
              </div>
              <div className="pdetail-meta-text">
                <span className="pdetail-meta-kicker">FLOORS</span>
                <strong className="pdetail-meta-heading">{project.floors}</strong>
              </div>
            </div>

            <div className="pdetail-meta-card">
              <div className="pdetail-meta-icon-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1868db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <div className="pdetail-meta-text">
                <span className="pdetail-meta-kicker">HOMES</span>
                <strong className="pdetail-meta-heading">{project.homes}</strong>
              </div>
            </div>

            <div className="pdetail-meta-card">
              <div className="pdetail-meta-icon-wrap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1868db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M2 20h20M5 20V8l7-5 7 5v12M9 12h6M9 16h6" />
                </svg>
              </div>
              <div className="pdetail-meta-text">
                <span className="pdetail-meta-kicker">PROJECT TYPE</span>
                <strong className="pdetail-meta-heading">{project.projectType}</strong>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: PROJECT OVERVIEW & HIGHLIGHTS */}
        <section className="pdetail-overview-section">
          <div className="pdetail-section-header">
            <span className="pdetail-section-tag">— PROJECT OVERVIEW</span>
          </div>

          <div className="pdetail-overview-grid">
            {/* Left Column: Heading and Story */}
            <div className="pdetail-overview-story">
              <h2 className="pdetail-overview-title">
                {project.overviewHeadline} <br />
                <span className="pdetail-blue-accent">{project.overviewSubheadline}</span>
              </h2>

              <p className="pdetail-overview-p1">{project.description}</p>
              <p className="pdetail-overview-p2">{project.overviewDesc2}</p>
            </div>

            {/* Right Column: 5 Highlights Grid */}
            <div className="pdetail-highlights-container">
              <div className="pdetail-highlights-grid">
                {project.highlights.map((h, idx) => (
                  <div key={idx} className="pdetail-highlight-card">
                    <div className="pdetail-hl-icon-wrap">
                      {renderHighlightIcon(h.icon)}
                    </div>
                    <div className="pdetail-hl-body">
                      <h4 className="pdetail-hl-title">{h.title}</h4>
                      <p className="pdetail-hl-desc">{h.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: PROJECT SUMMARY BADGE ROW */}
        <section className="pdetail-summary-section">
          <div className="pdetail-section-header">
            <span className="pdetail-section-tag">— PROJECT SUMMARY</span>
          </div>

          <div className="pdetail-summary-strip">
            <div className="pdetail-summary-col">
              <div className="pdetail-sum-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1868db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="pdetail-sum-text">
                <span className="pdetail-sum-label">LOCATION</span>
                <strong className="pdetail-sum-val">{project.location}, Pune</strong>
              </div>
            </div>

            <div className="pdetail-summary-col">
              <div className="pdetail-sum-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1868db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <div className="pdetail-sum-text">
                <span className="pdetail-sum-label">STATUS</span>
                <strong className="pdetail-sum-val">{project.statusLabel}</strong>
              </div>
            </div>

            <div className="pdetail-summary-col">
              <div className="pdetail-sum-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1868db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="4" y="2" width="16" height="20" rx="2" />
                  <line x1="9" y1="6" x2="9" y2="6.01" />
                  <line x1="15" y1="6" x2="15" y2="6.01" />
                  <line x1="9" y1="10" x2="9" y2="10.01" />
                  <line x1="15" y1="10" x2="15" y2="10.01" />
                </svg>
              </div>
              <div className="pdetail-sum-text">
                <span className="pdetail-sum-label">FLOORS</span>
                <strong className="pdetail-sum-val">{project.floors}</strong>
              </div>
            </div>

            <div className="pdetail-summary-col">
              <div className="pdetail-sum-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1868db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <div className="pdetail-sum-text">
                <span className="pdetail-sum-label">HOMES</span>
                <strong className="pdetail-sum-val">{project.homes}</strong>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: PROJECT STATUS & COMMITMENT */}
        <section className="pdetail-status-section">
          <div className="pdetail-section-header">
            <span className="pdetail-section-tag">— PROJECT STATUS</span>
          </div>

          <div className="pdetail-status-grid">
            {/* Status Progress Box */}
            <div className="pdetail-status-main-box">
              <div className="pdetail-status-avatar-wrap">
                <div className="pdetail-status-circle">
                  {isOngoing ? (
                    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#1868db" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M2 20h20M5 20V8l7-5 7 5v12M9 12h6M9 16h6" />
                    </svg>
                  ) : (
                    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#047857" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  )}
                </div>
              </div>

              <div className="pdetail-status-info">
                <h3 className="pdetail-status-heading">{project.statusLabel}</h3>
                <p className="pdetail-status-desc">
                  {isOngoing
                    ? 'Construction is in progress with defined stages and regular updates. We are committed to delivering quality homes within the promised timelines.'
                    : 'This development has been successfully completed and handed over, adhering to all statutory standards and Sankalp quality benchmarks.'}
                </p>

                <div className="pdetail-status-action">
                  <a href="#contact" className="pdetail-track-btn">
                    <span>{isOngoing ? 'Track Updates' : 'Enquire Quality Details'}</span>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Our Commitment Box */}
            <div className="pdetail-commitment-box">
              <div className="pdetail-commit-head">
                <div className="pdetail-commit-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1868db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <h4 className="pdetail-commit-title">Our Commitment</h4>
              </div>
              <p className="pdetail-commit-body">
                We maintain transparency at every stage of construction and ensure a single point of contact for all members.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5: ENQUIRY CTA SECTION (Dark Navy Card) */}
        <section className="pdetail-cta-section">
          <div className="pdetail-cta-card">
            <div className="pdetail-cta-blueprint-art" aria-hidden="true">
              <svg viewBox="0 0 280 200" fill="none">
                <g stroke="#ffffff" strokeWidth="1" strokeOpacity="0.12">
                  <rect x="20" y="20" width="240" height="160" />
                  <line x1="20" y1="60" x2="260" y2="60" />
                  <line x1="20" y1="100" x2="260" y2="100" />
                  <line x1="20" y1="140" x2="260" y2="140" />
                  <line x1="80" y1="20" x2="80" y2="180" />
                  <line x1="140" y1="20" x2="140" y2="180" />
                  <line x1="200" y1="20" x2="200" y2="180" />
                </g>
              </svg>
            </div>

            <div className="pdetail-cta-left">
              {isOngoing ? (
                <>
                  <h3 className="pdetail-cta-heading">
                    Interested in <br />
                    <span className="pdetail-cta-accent">{project.name}?</span>
                  </h3>
                  <p className="pdetail-cta-sub">
                    Let's help you explore the development and understand the available options.
                  </p>
                </>
              ) : (
                <>
                  <h3 className="pdetail-cta-heading">
                    Explore our <br />
                    <span className="pdetail-cta-accent">current developments</span>
                  </h3>
                  <p className="pdetail-cta-sub">
                    Discover our ongoing residential projects and upcoming opportunities in Old Sangvi.
                  </p>
                </>
              )}
            </div>

            <div className="pdetail-cta-right">
              {isOngoing ? (
                <>
                  <a href="#contact" className="pdetail-cta-btn">
                    <span>Enquire about this project</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                  <p className="pdetail-cta-trust">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    <span>No commitment. Just expert guidance.</span>
                  </p>
                </>
              ) : (
                <button
                  type="button"
                  className="pdetail-cta-btn"
                  onClick={() => {
                    if (onFilterOngoing) onFilterOngoing()
                    else onBack()
                  }}
                >
                  <span>View ongoing projects</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </section>

        {/* SECTION 6: EXPLORE MORE PROJECTS (Related Projects) */}
        <section className="pdetail-related-section">
          <div className="pdetail-section-header">
            <span className="pdetail-section-tag">— EXPLORE MORE PROJECTS</span>
          </div>

          <div className="pdetail-related-grid">
            {relatedProjects.map((rp) => {
              const rpOngoing = rp.status === 'ongoing'
              return (
                <article key={rp.slug} className="pdetail-related-card">
                  <div className="pdetail-related-img-wrap">
                    <img
                      src={rp.image}
                      alt={rp.name}
                      className="pdetail-related-img"
                      loading="lazy"
                    />
                  </div>

                  <div className="pdetail-related-info">
                    <div className="pdetail-related-status-row">
                      <span className={`pdetail-related-status-pill ${rpOngoing ? 'is-ongoing' : 'is-completed'}`}>
                        {rpOngoing ? 'Ongoing' : 'Completed'}
                      </span>
                    </div>

                    <h4 className="pdetail-related-name">{rp.name}</h4>

                    <p className="pdetail-related-location">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#1868db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <span>{rp.location}</span>
                    </p>

                    <p className="pdetail-related-homes">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      </svg>
                      <span>{rp.homes}</span>
                    </p>

                    <button
                      type="button"
                      className="pdetail-related-btn"
                      onClick={() => onSelectProject(rp.slug)}
                    >
                      <span>View project</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </article>
              )
            })}
          </div>
        </section>
      </div>
    </div>
  )
}
