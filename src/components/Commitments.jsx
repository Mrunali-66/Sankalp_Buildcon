import { COMMITMENTS, COMMIT_SUB } from '../data/site.js'

const COMMITMENT_TAGS = [
  ['Documented Agreements', 'Zero Hidden Clauses', 'Statutory Compliance'],
  ['Supervised Execution', 'Rigorous Material Testing', 'Zero Structural Shortcuts'],
  ['Habitable Space Planning', 'Enduring Asset Value', 'Thriving Community Life'],
]

export default function Commitments() {
  return (
    <section className="commitments-luxury-section" id="commitments">
      {/* Background ambient lighting */}
      <div className="commitments-bg-glow" aria-hidden="true" />

      <div className="commitments-container">
        {/* Section Header */}
        <div className="commitments-header">
          <div className="commitments-eyebrow">
            <span className="commitments-eyebrow-badge">07 / OUR COMMITMENTS</span>
            <span className="commitments-eyebrow-line" aria-hidden="true" />
          </div>
          <div className="commitments-title-row">
            <h2 className="commitments-h2">
              Three things we will<br />
              <span className="commitments-accent-text">never compromise.</span>
            </h2>
            <p className="commitments-lead-desc">
              These are the non-negotiable tests applied before committing to any project, approving architectural blueprints, and signing off every stage of work on site.
            </p>
          </div>
        </div>

        {/* 3 Main Pillar Cards */}
        <div className="commitments-cards-grid">
          {COMMITMENTS.map((c, idx) => (
            <article className="commitment-card" key={c.no}>
              <div className="commitment-card-top">
                <span className="commitment-num-badge">{c.no}</span>
                <div className="commitment-icon-circle">
                  {idx === 0 && (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                  )}
                  {idx === 1 && (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="4" y="2" width="16" height="20" rx="2" />
                      <line x1="9" y1="6" x2="9" y2="6.01" />
                      <line x1="15" y1="6" x2="15" y2="6.01" />
                      <line x1="9" y1="10" x2="9" y2="10.01" />
                      <line x1="15" y1="10" x2="15" y2="10.01" />
                      <line x1="9" y1="14" x2="9" y2="14.01" />
                      <line x1="15" y1="14" x2="15" y2="14.01" />
                      <line x1="9" y1="18" x2="15" y2="18" />
                    </svg>
                  )}
                  {idx === 2 && (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  )}
                </div>
              </div>

              <div className="commitment-card-body">
                <h3 className="commitment-card-title">{c.h}</h3>
                <p className="commitment-card-text">{c.p}</p>
              </div>

              <div className="commitment-tags-wrap">
                {COMMITMENT_TAGS[idx]?.map((tag) => (
                  <span className="commitment-tag" key={tag}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1868db" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Supporting Principles Ribbon */}
        <div className="commitments-principles-ribbon">
          <div className="commitments-ribbon-grid">
            {COMMIT_SUB.map((sub) => (
              <div className="commitments-principle-item" key={sub.h}>
                <div className="commitments-principle-indicator">
                  <span className="principle-bullet" aria-hidden="true" />
                </div>
                <div className="commitments-principle-content">
                  <h4 className="commitments-principle-title">{sub.h}</h4>
                  <p className="commitments-principle-desc">{sub.p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
