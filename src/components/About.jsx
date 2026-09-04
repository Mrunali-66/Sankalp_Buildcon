import React from 'react'

export default function About() {
  return (
    <section className="about-hero-section" id="about">
      {/* Background blueprint decorative illustration & soft glow */}
      <div className="about-bg-elements" aria-hidden="true">
        {/* Sky blueprint ring top-left */}
        <svg className="about-bg-sky-ring" viewBox="0 0 500 500">
          <circle cx="120" cy="120" r="160" fill="none" stroke="rgba(24, 104, 219, 0.05)" strokeWidth="1.5" strokeDasharray="5 7" />
          <circle cx="120" cy="120" r="280" fill="none" stroke="rgba(24, 104, 219, 0.04)" strokeWidth="1" />
        </svg>

        {/* Subtle Architectural Blueprint building wireframe on bottom-right */}
        <svg className="about-bg-blueprint" viewBox="0 0 420 300" fill="none">
          <g stroke="#1868db" strokeWidth="1" strokeOpacity="0.16">
            {/* Building 1 Tower */}
            <path d="M260 300 V120 L310 80 V300" />
            <path d="M260 120 H310" />
            <path d="M260 145 H310" />
            <path d="M260 170 H310" />
            <path d="M260 195 H310" />
            <path d="M260 220 H310" />
            <path d="M260 245 H310" />
            <path d="M260 270 H310" />
            <path d="M285 120 V300" strokeDasharray="3 3" />
            <path d="M285 80 V120" />

            {/* Building 2 Tower High-Rise */}
            <path d="M310 300 V50 L370 20 L410 45 V300" />
            <path d="M310 50 L370 75 V300" />
            <path d="M370 20 V75" />
            <path d="M370 75 L410 45" />
            <path d="M370 100 L410 70" />
            <path d="M370 125 L410 95" />
            <path d="M370 150 L410 120" />
            <path d="M370 175 L410 145" />
            <path d="M370 200 L410 170" />
            <path d="M370 225 L410 195" />
            <path d="M370 250 L410 220" />
            <path d="M370 275 L410 245" />

            {/* Front grid facade */}
            <path d="M310 80 H370" />
            <path d="M310 105 H370" />
            <path d="M310 130 H370" />
            <path d="M310 155 H370" />
            <path d="M310 180 H370" />
            <path d="M310 205 H370" />
            <path d="M310 230 H370" />
            <path d="M310 255 H370" />
            <path d="M310 280 H370" />
            <path d="M340 50 V300" strokeDasharray="4 4" />

            {/* Ground gridlines */}
            <path d="M200 300 H420" strokeWidth="1.5" />
            <path d="M220 285 L250 300" />
            <path d="M240 270 L300 300" />
          </g>
        </svg>
      </div>

      <div className="wrap about-master-wrap">
        {/* Main 2-Column Hero Area: Left Editorial, Right Image Collage */}
        <div className="about-hero-grid">
          {/* LEFT SIDE: Editorial Content */}
          <div className="about-editorial">
            {/* Small Eyebrow Label */}
            <div className="about-eyebrow">
              <span className="about-target-badge">
                <span className="about-target-dot" />
              </span>
              <span className="about-eyebrow-text">ABOUT US</span>
            </div>

            {/* Large Bold Headline */}
            <h2 className="about-headline">
              Building Trust.<br />
              Creating <span className="about-accent-blue">Landmarks.</span>
            </h2>

            {/* Subtle decorative curved arrow pointing towards collage */}
            <div className="about-arrow-wrap" aria-hidden="true">
              <svg className="about-curved-arrow" viewBox="0 0 130 50" fill="none">
                <path
                  d="M10 20 C 42 50, 72 6, 118 32"
                  stroke="#1868db"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
                <path
                  d="M106 25 L 118 32 L 109 40"
                  stroke="#1868db"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Section Number & Values Statement */}
            <div className="about-lead-block">
              <div className="about-num-tag">
                <span className="about-num-val">01</span>
                <span className="about-num-bar" />
              </div>
              <p className="about-lead-desc">
                At Sankalp Buildcon, we believe that every structure we build is a reflection of our values, commitment, and vision for a better tomorrow.
              </p>
            </div>

            {/* Icon & Supporting Experience Text */}
            <div className="about-sub-block">
              <div className="about-sub-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1868db" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
              <p className="about-sub-desc">
                With years of experience and a passion for excellence, we transform ideas into enduring spaces that enrich lives and communities.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE: Asymmetrical Image Collage */}
          <div className="about-collage-stage">
            {/* Smooth soft blue organic wave/backdrop shape */}
            <div className="about-collage-backdrop" aria-hidden="true">
              <svg viewBox="0 0 450 450" preserveAspectRatio="none">
                <path
                  d="M180,40 C320,-20 440,110 430,260 C420,380 320,440 190,430 C60,420 10,320 30,190 C50,60 90,80 180,40 Z"
                  fill="url(#aboutBlueGlow)"
                />
                <defs>
                  <linearGradient id="aboutBlueGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#bfdbfe" stopOpacity="0.65" />
                    <stop offset="100%" stopColor="#dbeafe" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* 1. Wide Horizontal Image (Top) */}
            <div className="about-collage-card about-card-top">
              <img
                src="/assets/about/sunset-engineers.jpg"
                alt="Sankalp Buildcon engineers at sunset construction site with crane"
                loading="lazy"
                className="about-collage-img"
              />
            </div>

            {/* 2. Tall Vertical Arch Image (Right) */}
            <div className="about-collage-card about-card-arch">
              <img
                src="/assets/about/engineer-blueprints.jpg"
                alt="Site engineer in helmet and safety vest reviewing blueprints"
                loading="lazy"
                className="about-collage-img"
              />
            </div>

            {/* 3. Central/Lower Architectural Landmark Image (Organic/Circular) */}
            <div className="about-collage-card about-card-circle">
              <img
                src="/assets/about/sankalp-building.jpg"
                alt="Sankalp Buildcon landmark residential building development"
                loading="lazy"
                className="about-collage-img"
              />
            </div>

            {/* Decorative Sankalp Blue 8-Point Star */}
            <div className="about-deco-star" aria-hidden="true">
              <svg width="42" height="42" viewBox="0 0 24 24" fill="#1868db">
                <path d="M12 0L13.8 8.2L22 12L13.8 15.8L12 24L10.2 15.8L2 12L10.2 8.2L12 0Z" />
              </svg>
            </div>
          </div>
        </div>

        {/* BOTTOM INFORMATION AREA: 3 Premium Cards */}
        <div className="about-cards-grid">
          {/* BLOCK 1 — OUR MISSION */}
          <div className="about-info-card about-card-mission">
            {/* Overlapping Scalloped Story Badge */}
            <div className="about-story-badge" aria-label="Our Story badge">
              <svg viewBox="0 0 100 100" className="about-badge-svg" aria-hidden="true">
                <circle cx="50" cy="50" r="48" fill="#1868db" />
                <circle cx="50" cy="50" r="44" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.85" />
              </svg>
              <div className="about-badge-label">
                <span>OUR</span>
                <span>STORY</span>
              </div>
            </div>

            <div className="about-mission-header">
              <div className="about-mission-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1868db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <div className="about-mission-title-group">
                <span className="about-card-tag">OUR MISSION</span>
              </div>
            </div>

            <p className="about-mission-text">
              To deliver high-quality construction solutions with integrity, innovation, and a commitment to excellence.
            </p>

            <div className="about-mission-stats">
              {/* Stat 1: 150+ Projects Completed */}
              <div className="about-mstat-item">
                <div className="about-mstat-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1868db" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="10 8 16 12 10 16 10 8" fill="#1868db" />
                  </svg>
                </div>
                <div className="about-mstat-info">
                  <strong className="about-mstat-num">100+</strong>
                  <span className="about-mstat-lbl">Projects Completed</span>
                </div>
              </div>

              {/* Stat 2: 98% Client Satisfaction */}
              <div className="about-mstat-item">
                <div className="about-mstat-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1868db" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <div className="about-mstat-info">
                  <strong className="about-mstat-num">98%</strong>
                  <span className="about-mstat-lbl">Client Satisfaction</span>
                </div>
              </div>
            </div>
          </div>

          {/* BLOCK 2 — EXPERIENCE */}
          <div className="about-info-card about-card-experience">
            <div className="about-exp-content">
              <div className="about-exp-icon-box">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1868db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div className="about-exp-details">
                <div className="about-exp-num">12+</div>
                <h3 className="about-exp-heading">Years of Experience</h3>
                <p className="about-exp-desc">
                  Delivering excellence in construction and infrastructure across Pune.
                </p>
              </div>
            </div>
          </div>

          {/* BLOCK 3 — BRAND STATEMENT */}
          <div className="about-info-card about-card-statement">
            <div className="about-quote-icon" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="#1868db">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <blockquote className="about-quote-text">
              &ldquo;We don't just build structures, we build trust, relationships, and a better future.&rdquo;
            </blockquote>
            <div className="about-quote-author">
              <span className="about-quote-dash">—</span> Sankalp Buildcon Team
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
