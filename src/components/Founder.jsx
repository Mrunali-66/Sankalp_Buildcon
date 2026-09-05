import React from 'react'

export default function Founder() {
  return (
    <section className="founder-hero-section" id="founder">
      {/* Background blueprint decorative illustration & soft glow */}
      <div className="founder-bg-elements" aria-hidden="true">
        {/* Sky blueprint ring top-left */}
        <svg className="founder-bg-sky-ring" viewBox="0 0 500 500">
          <circle cx="120" cy="120" r="160" fill="none" stroke="rgba(24, 104, 219, 0.05)" strokeWidth="1.5" strokeDasharray="5 7" />
          <circle cx="120" cy="120" r="280" fill="none" stroke="rgba(24, 104, 219, 0.04)" strokeWidth="1" />
        </svg>

        {/* Subtle Architectural Blueprint building wireframe on bottom-left & bottom-right */}
        <svg className="founder-bg-blueprint-left" viewBox="0 0 420 300" fill="none">
          <g stroke="#1868db" strokeWidth="1" strokeOpacity="0.14">
            <path d="M40 300 V120 L90 80 V300" />
            <path d="M40 120 H90" /><path d="M40 150 H90" /><path d="M40 180 H90" /><path d="M40 210 H90" /><path d="M40 240 H90" /><path d="M40 270 H90" />
            <path d="M90 300 V50 L150 20 L190 45 V300" />
            <path d="M90 50 L150 75 V300" /><path d="M150 20 V75" />
            <path d="M90 80 H150" /><path d="M90 110 H150" /><path d="M90 140 H150" /><path d="M90 170 H150" /><path d="M90 200 H150" /><path d="M90 230 H150" /><path d="M90 260 H150" />
            <path d="M0 300 H260" strokeWidth="1.5" />
          </g>
        </svg>

        <svg className="founder-bg-blueprint-right" viewBox="0 0 420 300" fill="none">
          <g stroke="#1868db" strokeWidth="1" strokeOpacity="0.14">
            <path d="M260 300 V120 L310 80 V300" />
            <path d="M260 120 H310" /><path d="M260 150 H310" /><path d="M260 180 H310" /><path d="M260 210 H310" /><path d="M260 240 H310" /><path d="M260 270 H310" />
            <path d="M310 300 V50 L370 20 L410 45 V300" />
            <path d="M310 50 L370 75 V300" /><path d="M370 20 V75" />
            <path d="M310 80 H370" /><path d="M310 110 H370" /><path d="M310 140 H370" /><path d="M310 170 H370" /><path d="M310 200 H370" /><path d="M310 230 H370" /><path d="M310 260 H370" />
            <path d="M180 300 H420" strokeWidth="1.5" />
          </g>
        </svg>
      </div>

      <div className="wrap founder-master-wrap">
        {/* Main 3-Column Hero Layout */}
        <div className="founder-hero-grid">
          {/* COLUMN 1: Left Editorial Content */}
          <div className="founder-editorial">
            {/* Small Eyebrow Label */}
            <div className="founder-eyebrow">
              <span className="founder-target-badge">
                <span className="founder-target-dot" />
              </span>
              <span className="founder-eyebrow-text">OUR FOUNDER</span>
            </div>

            {/* Large Bold Headline */}
            <h2 className="founder-headline">
              The Vision Behind<br />
              <span className="founder-accent-blue">Sankalp Buildcon</span>
            </h2>

            {/* Decorative curved arrow pointing towards founder */}
            <div className="founder-arrow-wrap" aria-hidden="true">
              <svg className="founder-curved-arrow" viewBox="0 0 130 50" fill="none">
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

            {/* Section Number & Core Belief */}
            <div className="founder-lead-block">
              <div className="founder-num-tag">
                <span className="founder-num-val">01</span>
                <span className="founder-num-bar" />
              </div>
              <p className="founder-lead-desc">
                Sankalp Buildcon was founded on a simple yet powerful belief — that every structure we build can transform lives and shape a better tomorrow.
              </p>
            </div>

            {/* Icon & Supporting Passion Statement */}
            <div className="founder-sub-block">
              <div className="founder-sub-icon">
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
              <p className="founder-sub-desc">
                Our founder's passion, integrity, and commitment to excellence continue to drive every project we undertake, creating spaces that stand the test of time.
              </p>
            </div>
          </div>

          {/* COLUMN 2: Center Large Founder Portrait (Arch Shape) */}
          <div className="founder-portrait-container">
            <div className="founder-portrait-arch">
              {/* Architectural ambient backdrop inside the arch */}
              <div className="founder-portrait-backdrop" aria-hidden="true">
                <div className="founder-backdrop-glow" />
                <div className="founder-backdrop-pattern" />
              </div>
              <img
                src="/assets/founder/founder-portrait.png"
                alt="Mr. Sandip Chandrakant Shitole, Founder & Managing Director of Sankalp Buildcon"
                className="founder-portrait-img"
                loading="eager"
              />
            </div>
          </div>

          {/* COLUMN 3: Right Founder Profile Card */}
          <div className="founder-profile-stage">
            <div className="founder-profile-card">
              {/* Top Architecture/Project Image */}
              <div className="founder-project-thumb">
                <img
                  src="/assets/founder/founder-building.jpg"
                  alt="Sankalp Buildcon residential architecture development"
                  className="founder-project-img"
                  loading="lazy"
                />
              </div>

              {/* Bottom Card Content with Signature */}
              <div className="founder-card-content">
                <div className="founder-signature-wrap" aria-label="Mr. Sandip Chandrakant Shitole signature">
                  <h3 className="founder-script-sig">Mr. Sandip Chandrakant Shitole</h3>
                  <p className="founder-role-text">Founder &amp; Managing Director</p>
                </div>

                <div className="founder-profile-divider" />

                <div className="founder-exp-row">
                  <div className="founder-exp-badge-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1868db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <div className="founder-exp-text-wrap">
                    <strong className="founder-exp-num-title">30+ Years of Experience</strong>
                    <span className="founder-exp-sub">in Construction &amp; Real Estate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: 3 Premium Blocks */}
        <div className="founder-bottom-grid">
          {/* BLOCK 1: OUR VALUES (Wide 4-Column Card) */}
          <div className="founder-info-card founder-card-values">
            <div className="founder-values-head">
              <div className="founder-values-head-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1868db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <span className="founder-values-tag">OUR VALUES</span>
            </div>

            <div className="founder-values-columns">
              {/* Value 1: Integrity */}
              <div className="founder-val-item">
                <div className="founder-val-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1868db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h4 className="founder-val-title">Integrity</h4>
                <p className="founder-val-desc">
                  We believe in transparency, honesty, and ethical practices.
                </p>
              </div>

              {/* Value 2: Innovation */}
              <div className="founder-val-item">
                <div className="founder-val-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1868db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="9" y1="18" x2="15" y2="18" />
                    <line x1="10" y1="22" x2="14" y2="22" />
                    <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
                  </svg>
                </div>
                <h4 className="founder-val-title">Innovation</h4>
                <p className="founder-val-desc">
                  We embrace modern ideas and smart solutions.
                </p>
              </div>

              {/* Value 3: Commitment */}
              <div className="founder-val-item">
                <div className="founder-val-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1868db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h4 className="founder-val-title">Commitment</h4>
                <p className="founder-val-desc">
                  We are committed to quality, safety, and timely delivery.
                </p>
              </div>

              {/* Value 4: Excellence */}
              <div className="founder-val-item">
                <div className="founder-val-icon">
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
                </div>
                <h4 className="founder-val-title">Excellence</h4>
                <p className="founder-val-desc">
                  We strive for excellence in every project we build.
                </p>
              </div>
            </div>
          </div>

          {/* BLOCK 2: LEADERSHIP EXPERIENCE */}
          <div className="founder-info-card founder-card-leadership">
            <div className="founder-lead-badge-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1868db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="8" r="7" />
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
              </svg>
            </div>
            <div className="founder-lead-num">30+</div>
            <h3 className="founder-lead-title">Years of Leadership</h3>
            <p className="founder-lead-desc-text">
              Leading with vision, delivering with passion, building with purpose.
            </p>
          </div>

          {/* BLOCK 3: FOUNDER QUOTE (Deep Navy Statement Card) */}
          <div className="founder-info-card founder-card-quote">
            <div className="founder-quote-symbol" aria-hidden="true">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="#1868db">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <blockquote className="founder-quote-body">
              &ldquo;Great buildings are not just made of concrete and steel, they are built on trust, teamwork, and a vision for a better future.&rdquo;
            </blockquote>
            <div className="founder-quote-author">
              <span className="founder-quote-dash">—</span> Mr. Sandip Chandrakant Shitole
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
