export default function Redevelopment() {
  return (
    <section className="redev-hero-section" id="redevelopment">
      {/* Background blueprint decorative sketch */}
      <div className="redev-bg-elements" aria-hidden="true">
        <svg className="redev-bg-blueprint-left" viewBox="0 0 460 320" fill="none">
          <g stroke="#1868db" strokeWidth="1" strokeOpacity="0.14">
            <rect x="20" y="40" width="360" height="260" rx="4" strokeDasharray="3 3" />
            <path d="M20 90 H380" /><path d="M20 140 H380" /><path d="M20 190 H380" /><path d="M20 240 H380" />
            <path d="M90 40 V300" /><path d="M160 40 V300" /><path d="M230 40 V300" /><path d="M300 40 V300" />
            {/* Balconies */}
            <rect x="40" y="55" width="30" height="20" rx="2" />
            <rect x="110" y="55" width="30" height="20" rx="2" />
            <rect x="180" y="55" width="30" height="20" rx="2" />
            <rect x="250" y="55" width="30" height="20" rx="2" />
            <rect x="40" y="105" width="30" height="20" rx="2" />
            <rect x="110" y="105" width="30" height="20" rx="2" />
            <rect x="180" y="105" width="30" height="20" rx="2" />
            <rect x="250" y="105" width="30" height="20" rx="2" />
          </g>
        </svg>
      </div>

      <div className="wrap redev-master-wrap">
        {/* ========================================================
            HERO SECTION: Left Editorial & Right Major Redevelopment Image
            ======================================================== */}
        <div className="redev-hero-grid">
          {/* Left Column: Content */}
          <div className="redev-hero-left">
            <div className="redev-hero-eyebrow">
              <span className="redev-eyebrow-tag">04 / REDEVELOPMENT</span>
            </div>

            <h2 className="redev-hero-title">
              Reimagining communities.<br />
              Creating better <span className="redev-accent-blue">living.</span>
            </h2>

            <p className="redev-hero-desc">
              Redevelopment is a long process with a lot of people in it. We run it as a structured programme, so every member of the society knows what is happening, and why, at each stage.
            </p>

            <div className="redev-hero-actions">
              <a href="#contact" className="btn-redev-primary">
                <span>Discuss a redevelopment</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Subtle Blueprint sketch under text */}
            <div className="redev-hero-blueprint" aria-hidden="true">
              <svg viewBox="0 0 340 140" fill="none">
                <g stroke="#1868db" strokeWidth="1" strokeOpacity="0.16">
                  <path d="M20 140 V40 L90 10 L160 40 V140" />
                  <path d="M20 40 H160" /><path d="M20 75 H160" /><path d="M20 110 H160" />
                  <path d="M90 10 V140" />
                  <path d="M160 140 V60 L240 30 L320 60 V140" />
                  <path d="M160 60 H320" /><path d="M160 100 H320" />
                  <path d="M240 30 V140" />
                  <path d="M0 140 H340" strokeWidth="1.5" />
                </g>
              </svg>
            </div>
          </div>

          {/* Right Column: ONE Major Architectural Visual */}
          <div className="redev-hero-right">
            <div className="redev-hero-image-frame">
              <img
                src="/assets/redevelopment/redevelopment-hero.jpg"
                alt="Modern 7-story residential apartment redevelopment project by Sankalp Buildcon"
                className="redev-hero-img"
              />
            </div>
          </div>
        </div>

        {/* ========================================================
            BENEFITS STRIP: Single Connected Large Rounded Container
            ======================================================== */}
        <div className="redev-benefits-strip">
          {/* Benefit 1 */}
          <div className="redev-benefit-item">
            <div className="redev-benefit-icon-wrap">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1868db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18M9 21V9" />
              </svg>
            </div>
            <div className="redev-benefit-text">
              <span className="redev-benefit-num">01</span>
              <h4 className="redev-benefit-title">Better planned layouts</h4>
            </div>
          </div>

          {/* Benefit 2 */}
          <div className="redev-benefit-item">
            <div className="redev-benefit-icon-wrap">
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
            <div className="redev-benefit-text">
              <span className="redev-benefit-num">02</span>
              <h4 className="redev-benefit-title">Modern infrastructure</h4>
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="redev-benefit-item">
            <div className="redev-benefit-icon-wrap">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1868db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <div className="redev-benefit-text">
              <span className="redev-benefit-num">03</span>
              <h4 className="redev-benefit-title">Quality construction</h4>
            </div>
          </div>

          {/* Benefit 4 */}
          <div className="redev-benefit-item">
            <div className="redev-benefit-icon-wrap">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1868db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div className="redev-benefit-text">
              <span className="redev-benefit-num">04</span>
              <h4 className="redev-benefit-title">Transparent communication</h4>
            </div>
          </div>
        </div>

        {/* ========================================================
            PROCESS SECTION: Connected 5-Stage Redevelopment Journey
            ======================================================== */}
        <div className="redev-process-section">
          <div className="redev-process-head">
            <span className="redev-process-eyebrow">— OUR REDEVELOPMENT PROCESS —</span>
            <h3 className="redev-process-title">
              A clear process. Every step <span className="redev-accent-blue">together.</span>
            </h3>
            <p className="redev-process-desc">
              A redevelopment project involves many decisions and many people. Our approach keeps the journey structured, documented and clear from the first discussion through to handover.
            </p>
          </div>

          {/* 5-Step Connected Roadmap Cards */}
          <div className="redev-steps-container">
            {/* Step 1 */}
            <div className="redev-step-card">
              <span className="redev-step-num">01</span>
              <div className="redev-step-icon-circle">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1868db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h4 className="redev-step-title">Understanding the society</h4>
              <p className="redev-step-text">
                Site visit, review of the existing structure, and an open discussion with members about needs and expectations.
              </p>
            </div>

            {/* Step 2 */}
            <div className="redev-step-card">
              <span className="redev-step-num">02</span>
              <div className="redev-step-icon-circle">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1868db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <h4 className="redev-step-title">Planning &amp; consultation</h4>
              <p className="redev-step-text">
                Feasibility, planning options, and a clear presentation of what redevelopment would actually mean for the society.
              </p>
            </div>

            {/* Step 3 */}
            <div className="redev-step-card">
              <span className="redev-step-num">03</span>
              <div className="redev-step-icon-circle">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1868db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
              <h4 className="redev-step-title">Design &amp; approvals</h4>
              <p className="redev-step-text">
                Architectural drawings, statutory documentation, and coordination with the relevant authorities.
              </p>
            </div>

            {/* Step 4 (Emphasized Execution Stage) */}
            <div className="redev-step-card is-emphasized">
              <span className="redev-step-num">04</span>
              <div className="redev-step-icon-circle">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1868db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 21h18M5 21V5l8-3v19M9 9h4M9 13h4M9 17h4M19 21v-7l-6-3" />
                </svg>
              </div>
              <h4 className="redev-step-title">Construction &amp; execution</h4>
              <p className="redev-step-text">
                Supervised construction in defined stages, with regular updates and a single point of contact for members.
              </p>
            </div>

            {/* Step 5 */}
            <div className="redev-step-card">
              <span className="redev-step-num">05</span>
              <div className="redev-step-icon-circle">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1868db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="4" y="2" width="16" height="20" rx="2" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <h4 className="redev-step-title">Modern living delivered</h4>
              <p className="redev-step-text">
                Handover of completed homes and common areas, with documentation in order and support through the transition.
              </p>
            </div>
          </div>
        </div>

        {/* ========================================================
            WHY REDEVELOP WITH SANKALP BUILDCON (3 Editorial Columns)
            ======================================================== */}
        <div className="redev-why-container">
          <div className="redev-why-head">
            <h3 className="redev-why-title">
              Built around clarity.<br />
              Delivered with <span className="redev-accent-blue">accountability.</span>
            </h3>
          </div>

          <div className="redev-why-grid">
            <div className="redev-why-col">
              <span className="redev-why-num">01</span>
              <h4 className="redev-why-col-title">Transparent communication</h4>
              <p className="redev-why-col-desc">
                Clear updates throughout the redevelopment journey, with important decisions and commitments documented.
              </p>
            </div>

            <div className="redev-why-col">
              <span className="redev-why-num">02</span>
              <h4 className="redev-why-col-title">Structured execution</h4>
              <p className="redev-why-col-desc">
                Planning, approvals and construction managed through defined stages rather than disconnected activity.
              </p>
            </div>

            <div className="redev-why-col">
              <span className="redev-why-num">03</span>
              <h4 className="redev-why-col-title">A long-term perspective</h4>
              <p className="redev-why-col-desc">
                Redevelopment decisions considered for durability, maintenance and how residents will actually live in the finished development.
              </p>
            </div>
          </div>
        </div>

        {/* ========================================================
            CTA CARD: Deep Navy Container
            ======================================================== */}
        <div className="redev-cta-card">
          <div className="redev-cta-blueprint-art" aria-hidden="true">
            <svg viewBox="0 0 280 180" fill="none">
              <g stroke="#ffffff" strokeWidth="1" strokeOpacity="0.12">
                <rect x="20" y="20" width="240" height="140" />
                <line x1="20" y1="55" x2="260" y2="55" />
                <line x1="20" y1="90" x2="260" y2="90" />
                <line x1="20" y1="125" x2="260" y2="125" />
                <line x1="80" y1="20" x2="80" y2="160" />
                <line x1="140" y1="20" x2="140" y2="160" />
                <line x1="200" y1="20" x2="200" y2="160" />
              </g>
            </svg>
          </div>

          <div className="redev-cta-left">
            <div className="redev-cta-chat-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                <circle cx="8" cy="10" r="0.5" fill="#60a5fa" strokeWidth="1.5" />
                <circle cx="12" cy="10" r="0.5" fill="#60a5fa" strokeWidth="1.5" />
                <circle cx="16" cy="10" r="0.5" fill="#60a5fa" strokeWidth="1.5" />
              </svg>
            </div>
            <div className="redev-cta-text-wrap">
              <h3 className="redev-cta-heading">
                Ready to discuss your <br />
                <span className="redev-cta-accent">redevelopment?</span>
              </h3>
              <p className="redev-cta-sub">
                Let's understand your society's needs and explore the right possibilities together.
              </p>
            </div>
          </div>

          <div className="redev-cta-right">
            <a href="#contact" className="redev-discuss-btn">
              <span>Discuss a redevelopment</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <span className="redev-cta-note">No obligation. Start with a conversation.</span>
          </div>
        </div>

        {/* ========================================================
            TRANSPARENCY / TRUST NOTE PANEL
            ======================================================== */}
        <div className="redev-transparency-panel">
          <div className="redev-trans-icon-wrap">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1868db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
          </div>
          <p className="redev-trans-text">
            Every redevelopment is governed by its own agreement and approvals. Terms are confirmed with the society in writing before any work begins.
          </p>

          <div className="redev-trans-blueprint-right" aria-hidden="true">
            <svg viewBox="0 0 200 60" fill="none">
              <g stroke="#1868db" strokeWidth="0.8" strokeOpacity="0.2">
                <path d="M10 50 V10 L50 2 V50" /><path d="M50 50 V20 L90 12 V50" />
                <path d="M90 50 V15 L140 5 V50" /><path d="M140 50 V25 L180 18 V50" />
                <line x1="0" y1="50" x2="200" y2="50" strokeWidth="1.2" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
