import { useEffect, useRef, useState } from 'react'

function useCounter(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    const isReduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (isReduced) {
      setCount(target)
      return
    }

    let startTime = null
    let frameId = null

    const animate = (time) => {
      if (!startTime) startTime = time
      const progress = Math.min((time - startTime) / duration, 1)
      const easeProgress = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(easeProgress * target))

      if (progress < 1) {
        frameId = requestAnimationFrame(animate)
      } else {
        setCount(target)
      }
    }

    frameId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frameId)
  }, [target, duration, start])

  return count
}

export default function Hero({
  buildingImage = '/assets/hero-building.jpg',
  cardImage = '/assets/hero-card-thumb.jpg',
}) {
  const [statsVisible, setStatsVisible] = useState(false)
  const statsRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const count12 = useCounter(12, 1600, statsVisible)
  const count100 = useCounter(100, 1800, statsVisible)

  return (
    <div className="hero-master-wrap" id="home">
      {/* ========================================================
          1. FULL-WIDTH ARCHITECTURAL HERO STAGE
          ======================================================== */}
      <section className="arch-hero-stage">
        {/* Ambient Sky Backdrop Base */}
        <div className="arch-hero-backdrop">
          {/* Subtle Concentric Sky Blueprint Arcs */}
          <svg className="arch-sky-rings" viewBox="0 0 800 800" aria-hidden="true">
            <circle cx="200" cy="180" r="180" fill="none" stroke="rgba(24, 104, 219, 0.04)" strokeWidth="1" strokeDasharray="4 6" />
            <circle cx="200" cy="180" r="320" fill="none" stroke="rgba(24, 104, 219, 0.05)" strokeWidth="1" />
            <circle cx="200" cy="180" r="460" fill="none" stroke="rgba(24, 104, 219, 0.035)" strokeWidth="1" strokeDasharray="6 8" />
            <circle cx="200" cy="180" r="600" fill="none" stroke="rgba(24, 104, 219, 0.025)" strokeWidth="1" />
          </svg>
        </div>

        {/* Complete Building Showcase Visual Layer (100% Sharp, Full Width/Height, No Crop) */}
        <div className="hero-building-visual">
          <img
            src={buildingImage}
            alt="Sankalp Buildcon residential landmark architecture"
            className="hero-building-img"
          />
        </div>

        {/* Flying Sky Birds Illustration */}
        <svg className="arch-sky-birds" viewBox="0 0 220 70" aria-hidden="true">
          <path d="M15 28 Q20 18 25 28 Q30 18 35 28" fill="none" stroke="#507299" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M55 38 Q59 30 63 38 Q67 30 71 38" fill="none" stroke="#688baa" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M100 20 Q105 12 110 20 Q115 12 120 20" fill="none" stroke="#48698f" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M150 44 Q154 36 158 44 Q162 36 166 44" fill="none" stroke="#799cb8" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M190 30 Q194 22 198 30 Q202 22 206 30" fill="none" stroke="#507299" strokeWidth="1.4" strokeLinecap="round" />
        </svg>

        {/* Hero Editorial Content Overlaid on Left */}
        <div className="wrap arch-hero-content-wrap">
          <div className="arch-hero-editorial in">
            {/* Tag / Eyebrow */}
            <div className="hero-tag-badge">
              <span className="hero-target-icon">
                <span className="hero-target-dot" />
              </span>
              <span className="hero-tag-title">CONSTRUCTION PROJECT</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-headline">
              We Build <br />
              <span className="text-royal-blue">Better</span> Homes
            </h1>

            {/* Supporting Description */}
            <p className="hero-lead-text">
              Creating thoughtfully designed residential spaces through disciplined execution,
              quality craftsmanship, and a commitment to lasting value across Pune.
            </p>

            {/* Dual CTAs */}
            <div className="hero-btn-group">
              <a href="#projects" className="btn-hero-primary-pill">
                <span>Explore Projects</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>

              <a href="#services" className="btn-hero-outline-pill">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <span>Our Services</span>
              </a>
            </div>

            {/* Floating Project Card (Lower-Left) */}
            <div className="arch-floating-card">
              <div className="afc-thumb">
                <img
                  src={cardImage}
                  alt="Sankalp residential landmark thumbnail preview"
                  className="afc-img"
                />
              </div>
              <div className="afc-info">
                <h4 className="afc-title">
                  Creating Landmarks. <br />
                  Building Relationships.
                </h4>
                <p className="afc-sub">Let's build something extraordinary together.</p>
                <a href="#contact" className="afc-link">
                  <span>Contact Us</span>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Absolute Continuous Organic Curved Wave Overlapping Bottom */}
        <div className="arch-wave-divider" aria-hidden="true">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,45 C320,48 580,105 920,108 C1180,110 1340,90 1440,75 L1440,120 L0,120 Z" fill="#061B38" />
          </svg>
        </div>
      </section>

      {/* ========================================================
          2. STATS BAR (Integrated into Navy Base)
          ======================================================== */}
      <section className="arch-navy-overlay" ref={statsRef}>

        <div className="arch-navy-body">
          <div className="wrap">
            {/* Animated Statistics Grid */}
            <div className="stats-glass-grid in">

              {/* Stat 1: Year Established (Static 2012) */}
              <div className="stat-glass-card">
                <div className="stat-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="4" width="18" height="18" rx="3" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                    <circle cx="8" cy="15" r="1" />
                    <circle cx="12" cy="15" r="1" />
                    <circle cx="16" cy="15" r="1" />
                  </svg>
                </div>
                <div className="stat-card-content">
                  <span className="stat-card-label">YEAR ESTABLISHED</span>
                  <strong className="stat-card-value">2012</strong>
                </div>
              </div>

              {/* Stat 2: Years of Trust & Quality (0 -> 12+) */}
              <div className="stat-glass-card">
                <div className="stat-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <div className="stat-card-content">
                  <span className="stat-card-label">YEARS OF TRUST &amp; QUALITY</span>
                  <strong className="stat-card-value">
                    {count12}<span className="stat-plus">+</span>
                  </strong>
                </div>
              </div>

              {/* Stat 3: Families Housed (0 -> 100+) */}
              <div className="stat-glass-card">
                <div className="stat-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div className="stat-card-content">
                  <span className="stat-card-label">FAMILIES HOUSED</span>
                  <strong className="stat-card-value">
                    {count100}<span className="stat-plus">+</span>
                  </strong>
                </div>
              </div>

              {/* Stat 4: Prime Developments (Static text) */}
              <div className="stat-glass-card">
                <div className="stat-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
                <div className="stat-card-content">
                  <span className="stat-card-label">PRIME DEVELOPMENTS</span>
                  <strong className="stat-card-value stat-card-text">Sangvi &amp; PCMC</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. BELOW-THE-FOLD VALUE PILLARS SECTION (Exact match to reference)
          ======================================================== */}
      <section className="pillars-feature-section">
        <div className="wrap">
          {/* Section Header */}
          <div className="pillars-section-head">
            <span className="pillars-kicker">BUILT ON TRUST. DRIVEN BY QUALITY.</span>
            <h2 className="pillars-heading">Building Spaces. Building Futures.</h2>
          </div>

          {/* 4 Feature Items Grid (Side-by-side icon and text layout) */}
          <div className="pillars-grid">
            {/* Item 1: Quality Construction */}
            <div className="pillar-item">
              <div className="pillar-icon-box">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 8l3-5h10l3 5v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8z" />
                  <circle cx="12" cy="14" r="2.8" />
                  <path d="M10.2 16.2L9.5 19l2.5-1.2 2.5 1.2-.7-2.8" />
                </svg>
              </div>
              <div className="pillar-content">
                <h3 className="pillar-item-title">Quality Construction</h3>
                <p className="pillar-item-desc">
                  We use the best materials and modern techniques to ensure long-lasting quality.
                </p>
              </div>
            </div>

            {/* Item 2: Timely Delivery */}
            <div className="pillar-item">
              <div className="pillar-icon-box">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <polyline points="12 7 12 12 15 14" />
                </svg>
              </div>
              <div className="pillar-content">
                <h3 className="pillar-item-title">Timely Delivery</h3>
                <p className="pillar-item-desc">
                  On-time delivery with transparent communication and dependable project management.
                </p>
              </div>
            </div>

            {/* Item 3: Customer Centric */}
            <div className="pillar-item">
              <div className="pillar-icon-box">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="9" cy="8.5" r="3.5" />
                  <path d="M3 19.5c0-3.3 2.7-6 6-6s6 2.7 6 6" />
                  <path d="M15 5.5a3.5 3.5 0 0 1 0 7" />
                  <path d="M17.5 14.5c2.3.8 3.5 2.6 3.5 5" />
                </svg>
              </div>
              <div className="pillar-content">
                <h3 className="pillar-item-title">Customer Centric</h3>
                <p className="pillar-item-desc">
                  Your satisfaction is our priority. We build relationships that last beyond possession.
                </p>
              </div>
            </div>

            {/* Item 4: Value for Money */}
            <div className="pillar-item">
              <div className="pillar-icon-box">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9.5 8h5M9.5 10.5h5M9.5 8h2.5a1.8 1.8 0 0 1 0 3.6H9.5l4 4.5" />
                </svg>
              </div>
              <div className="pillar-content">
                <h3 className="pillar-item-title">Value for Money</h3>
                <p className="pillar-item-desc">
                  Premium homes with the right balance of quality, design, and affordability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

