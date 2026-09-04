import { useState } from 'react'

const FILTERS = [
  { key: 'all', label: 'All Projects' },
  { key: 'completed', label: 'Completed' },
  { key: 'ongoing', label: 'Ongoing' },
  { key: 'redevelopment', label: 'Redevelopment' },
  { key: 'construction', label: 'Construction' },
]

export default function Gallery({ onOpenProject }) {
  const [filter, setFilter] = useState('all')

  return (
    <section className="gallery-editorial-section" id="gallery">
      <div className="gallery-editorial-container">
        {/* Top Header */}
        <div className="gallery-editorial-header">
          <div className="gallery-editorial-title-col">
            <div className="gallery-editorial-eyebrow">
              <span className="gallery-eyebrow-text">OUR WORK</span>
              <span className="gallery-eyebrow-line" aria-hidden="true" />
            </div>
            <h2 className="gallery-editorial-h2">
              Spaces we've helped<br />
              <em>bring to life.</em>
            </h2>
            <p className="gallery-editorial-sub">
              Explore a selection of our residential developments, redevelopment projects, construction progress, and completed spaces.
            </p>
          </div>

          {/* Filter Categories */}
          <div className="gallery-editorial-nav" role="group" aria-label="Filter gallery">
            {FILTERS.map((f) => {
              const isActive = filter === f.key
              return (
                <button
                  key={f.key}
                  type="button"
                  className={`gallery-nav-btn ${isActive ? 'is-active' : ''}`}
                  onClick={() => setFilter(f.key)}
                >
                  {f.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Asymmetrical Editorial Masonry Grid */}
        <div className="gallery-editorial-grid">
          {/* 1. Large Left Featured Card */}
          <div
            className="gallery-grid-featured"
            onClick={() => onOpenProject && onOpenProject('premraj-vihar-2')}
            role="button"
            tabIndex={0}
            aria-label="View Premraj Vihar 2.0 Project"
          >
            <div className="gallery-img-box">
              <img
                src="/assets/projects/sai-sarth-night.jpg"
                alt="Premraj Vihar 2.0 Illuminated Night Architectural Render"
                className="gallery-img"
                loading="lazy"
              />
              <div className="gallery-featured-overlay" />
              <div className="gallery-featured-caption">
                <div className="gallery-caption-info">
                  <h3 className="gallery-caption-title">PREMRAJ VIHAR</h3>
                  <p className="gallery-caption-meta">Residential Development &nbsp;|&nbsp; Old Sangvi, Pune</p>
                </div>
                <div className="gallery-caption-arrow" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Middle Column Stack */}
          <div className="gallery-grid-col">
            <div
              className="gallery-grid-tile"
              onClick={() => onOpenProject && onOpenProject('sai-sarth-residency')}
              role="button"
              tabIndex={0}
              aria-label="View Sai Sarth Residency"
            >
              <div className="gallery-img-box">
                <img
                  src="/assets/projects/sai-sarth-residency.jpg"
                  alt="Sai Sarth Residency Corner Daylight Perspective"
                  className="gallery-img"
                  loading="lazy"
                />
              </div>
            </div>
            <div
              className="gallery-grid-tile"
              onClick={() => onOpenProject && onOpenProject('minakshi-apartment')}
              role="button"
              tabIndex={0}
              aria-label="View Minakshi Apartment"
            >
              <div className="gallery-img-box">
                <img
                  src="/assets/projects/minakshi-apartment.jpg"
                  alt="Minakshi Apartment Facade & Balconies"
                  className="gallery-img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* 3. Right Column Stack */}
          <div className="gallery-grid-col">
            <div
              className="gallery-grid-tile"
              onClick={() => onOpenProject && onOpenProject('kapila-society')}
              role="button"
              tabIndex={0}
              aria-label="View Kapila Society"
            >
              <div className="gallery-img-box">
                <img
                  src="/assets/projects/kapila-society.jpg"
                  alt="Kapila Society 3D Rooftop Terrace & Facade"
                  className="gallery-img"
                  loading="lazy"
                />
              </div>
            </div>
            <div
              className="gallery-grid-tile"
              onClick={() => onOpenProject && onOpenProject('premraj-niketan-2')}
              role="button"
              tabIndex={0}
              aria-label="View Premraj Niketan 2.0"
            >
              <div className="gallery-img-box">
                <img
                  src="/assets/projects/premraj-niketan.jpg"
                  alt="Premraj Niketan 2.0 Curved Street Perspective"
                  className="gallery-img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* 4. Full-Width Bottom Panoramic Tile */}
          <div
            className="gallery-grid-pano"
            onClick={() => onOpenProject && onOpenProject('premraj-vihar-2')}
            role="button"
            tabIndex={0}
            aria-label="View Premraj Vihar 2.0 Rooftop Layout"
          >
            <div className="gallery-img-box">
              <img
                src="/assets/projects/premraj-vihar-2.jpg"
                alt="Premraj Vihar 2.0 Master Rooftop Terrace Plan & Green Landscape"
                className="gallery-img"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Bottom Editorial Call-to-Action Bar */}
        <div className="gallery-editorial-cta">
          <div className="gallery-cta-rule" aria-hidden="true" />
          <div className="gallery-cta-row">
            <h3 className="gallery-cta-heading">
              Every project begins with a vision.
            </h3>
            <a href="#projects" className="gallery-cta-btn">
              <span>Explore Our Projects</span>
              <span className="gallery-cta-arrow" aria-hidden="true">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
