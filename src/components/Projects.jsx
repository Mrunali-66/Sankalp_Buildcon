import { useState } from 'react'
import { PROJECTS } from '../data/projects.js'

const FILTERS = [
  {
    key: 'all',
    label: 'All',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    key: 'ongoing',
    label: 'Ongoing',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" strokeDasharray="4 4" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    key: 'completed',
    label: 'Completed',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
]

export default function Projects({ onOpen, initialFilter = 'all' }) {
  const [filter, setFilter] = useState(initialFilter)

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'all') return true
    return p.status === filter
  })

  return (
    <section className="projects-hero-section" id="projects">
      {/* Background blueprint decorative illustration */}
      <div className="projects-bg-elements" aria-hidden="true">
        <svg className="projects-bg-blueprint" viewBox="0 0 520 360" fill="none">
          <g stroke="#1868db" strokeWidth="1" strokeOpacity="0.16">
            <path d="M280 360 V120 L350 70 V360" />
            <path d="M280 120 H350" /><path d="M280 155 H350" /><path d="M280 190 H350" /><path d="M280 225 H350" /><path d="M280 260 H350" /><path d="M280 295 H350" /><path d="M280 330 H350" />
            <path d="M350 360 V40 L430 10 L480 35 V360" />
            <path d="M350 40 L430 65 V360" /><path d="M430 10 V65" />
            <path d="M350 75 H430" /><path d="M350 110 H430" /><path d="M350 145 H430" /><path d="M350 180 H430" /><path d="M350 215 H430" /><path d="M350 250 H430" /><path d="M350 285 H430" /><path d="M350 320 H430" />
            <path d="M430 65 L480 35" /><path d="M430 100 L480 70" /><path d="M430 135 L480 105" /><path d="M430 170 L480 140" /><path d="M430 205 L480 175" /><path d="M430 240 L480 210" /><path d="M430 275 L480 245" /><path d="M430 310 L480 280" />
            <path d="M160 360 H520" strokeWidth="1.5" />
          </g>
        </svg>
      </div>

      <div className="wrap projects-master-wrap">
        {/* Section Header */}
        <div className="projects-head-grid">
          <div className="projects-editorial">
            <div className="projects-eyebrow">
              <span className="projects-ref-badge">03 / OUR PROJECTS</span>
            </div>
            <h2 className="projects-headline">
              Built with care.<br />
              Made to <span className="projects-accent-blue">last.</span>
            </h2>
            <p className="projects-lead-desc">
              A growing portfolio across Old Sangvi and New Sangvi, Pune — from completed residences to ongoing premium developments.
            </p>
          </div>

          {/* Hero Blueprint Wireframe Visual on Right */}
          <div className="projects-hero-blueprint" aria-hidden="true">
            <svg viewBox="0 0 460 260" fill="none">
              <g stroke="#1868db" strokeWidth="1.2" strokeOpacity="0.22">
                <rect x="40" y="40" width="380" height="220" rx="4" strokeDasharray="3 3" />
                <path d="M40 90 H420" /><path d="M40 140 H420" /><path d="M40 190 H420" />
                <path d="M120 40 V260" /><path d="M200 40 V260" /><path d="M280 40 V260" /><path d="M360 40 V260" />
                <rect x="70" y="55" width="35" height="20" rx="2" />
                <rect x="150" y="55" width="35" height="20" rx="2" />
                <rect x="230" y="55" width="35" height="20" rx="2" />
                <rect x="310" y="55" width="35" height="20" rx="2" />
                <rect x="70" y="105" width="35" height="20" rx="2" />
                <rect x="150" y="105" width="35" height="20" rx="2" />
                <rect x="230" y="105" width="35" height="20" rx="2" />
                <rect x="310" y="105" width="35" height="20" rx="2" />
                <rect x="70" y="155" width="35" height="20" rx="2" />
                <rect x="150" y="155" width="35" height="20" rx="2" />
                <rect x="230" y="155" width="35" height="20" rx="2" />
                <rect x="310" y="155" width="35" height="20" rx="2" />
              </g>
            </svg>
          </div>
        </div>

        {/* Filter Navigation Bar */}
        <div className="projects-filter-bar" role="group" aria-label="Filter projects by status">
          {FILTERS.map((f) => {
            const isActive = filter === f.key
            return (
              <button
                key={f.key}
                type="button"
                className={`projects-filter-btn ${isActive ? 'is-active' : ''}`}
                onClick={() => setFilter(f.key)}
                aria-pressed={isActive}
              >
                <span className="filter-icon">{f.icon}</span>
                <span className="filter-label">{f.label}</span>
              </button>
            )
          })}
        </div>

        {/* Projects Cards List */}
        <div className="projects-cards-list">
          {filteredProjects.map((project) => {
            const isOngoing = project.status === 'ongoing'
            const isFeatured = project.slug === 'premraj-vihar-2'

            return (
              <article
                key={project.number}
                className={`project-portfolio-card ${isFeatured ? 'is-featured-project' : ''}`}
              >
                {/* 1. Project Image Container with Number Badge */}
                <div
                  className="project-card-image-wrap"
                  onClick={() => onOpen(project.slug)}
                  style={{ cursor: 'pointer' }}
                >
                  <span className="project-badge-number">{project.number}</span>
                  <img
                    src={project.image}
                    alt={`${project.name}, ${project.location} by Sankalp Buildcon`}
                    className="project-card-img"
                    loading="lazy"
                  />
                </div>

                {/* 2. Middle Main Project Details Column */}
                <div className="project-card-info-wrap">
                  <div className="project-status-tag-row">
                    <span className={`project-status-pill ${isOngoing ? 'status-ongoing' : 'status-completed'}`}>
                      {isOngoing ? 'Ongoing project' : 'Completed'}
                    </span>
                  </div>

                  <h3
                    className="project-card-title"
                    onClick={() => onOpen(project.slug)}
                    style={{ cursor: 'pointer' }}
                  >
                    {project.name}
                  </h3>

                  <p className="project-card-location">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1868db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>{project.location}, Pune</span>
                  </p>

                  <p className="project-card-desc">{project.description}</p>

                  <div className="project-card-actions">
                    {/* View Project Button */}
                    <button
                      type="button"
                      className="btn-project-cta-outline"
                      onClick={() => onOpen(project.slug)}
                    >
                      <span>View project</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* 3. Right Structured Metadata Specifications Column */}
                <div className="project-card-meta-wrap">
                  {/* Status Item */}
                  <div className="project-meta-item">
                    <div className="project-meta-icon">
                      {isOngoing ? (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1868db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M2 20h20M5 20V8l7-5 7 5v12M9 12h6M9 16h6" />
                        </svg>
                      ) : (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1868db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                      )}
                    </div>
                    <div className="project-meta-content">
                      <span className="project-meta-label">Status</span>
                      <strong className="project-meta-value">
                        {isOngoing ? 'Under construction' : 'Completed'}
                      </strong>
                    </div>
                  </div>

                  {/* Floors Item */}
                  <div className="project-meta-item">
                    <div className="project-meta-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1868db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                    <div className="project-meta-content">
                      <span className="project-meta-label">Floors</span>
                      <strong className="project-meta-value">{project.floors}</strong>
                    </div>
                  </div>

                  {/* Homes / Configuration Item */}
                  <div className="project-meta-item">
                    <div className="project-meta-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1868db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                      </svg>
                    </div>
                    <div className="project-meta-content">
                      <span className="project-meta-label">Configuration</span>
                      <strong className="project-meta-value">{project.homes}</strong>
                    </div>
                  </div>

                  {/* Location Item */}
                  <div className="project-meta-item">
                    <div className="project-meta-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1868db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div className="project-meta-content">
                      <span className="project-meta-label">Location</span>
                      <strong className="project-meta-value">{project.location}</strong>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
