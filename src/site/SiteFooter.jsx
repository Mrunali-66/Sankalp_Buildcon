import { useState } from 'react'
import { Link } from 'react-router-dom'
import MARK from '../logoMark.js'
import { IconArrow } from '../pages/icons.jsx'

function FootLogo() {
  const [src, setSrc] = useState('/assets/mark.png')
  return (
    <div className="m-brand m-brand--foot">
      <img src={src} alt="Sankalp Buildcon" onError={() => setSrc(MARK)} />
      <span className="m-brand-txt">
        <span className="m-brand-name">SANKALP</span>
        <span className="m-brand-subname">BUILDCON</span>
      </span>
    </div>
  )
}

export default function SiteFooter() {
  return (
    <footer className="m-foot">
      <div className="m-wrap m-foot-in">
        <div className="m-foot-grid">

          {/* Column 1: Brand & Card */}
          <div className="m-foot-col m-foot-col--brand">
            <FootLogo />
            <p className="m-foot-tagline">
              Building trust.<br />Creating better futures.
            </p>

            <div className="m-foot-card">
              <div className="m-foot-card-head">
                <div className="m-foot-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} style={{width:16,height:16}}>
                    <path d="M3 21h18M5 21V7l8-4v18M13 21V11l6 3v7" />
                  </svg>
                </div>
                <span>Sankalp Buildcon</span>
              </div>
              <p>
                Residential development, redevelopment and construction in Pune, Maharashtra. Established 2012.
              </p>
            </div>

            <div className="m-foot-socials">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor" style={{width:14,height:14}}>
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} style={{width:14,height:14}}>
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" style={{width:14,height:14}}>
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigate */}
          <div className="m-foot-col">
            <h4>Navigate</h4>
            <ul className="m-foot-links-arrows">
              <li>
                <Link to="/">Home <span>›</span></Link>
              </li>
              <li>
                <a href="/#about">About Us <span>›</span></a>
              </li>
              <li>
                <a href="/#founder">Our Founder <span>›</span></a>
              </li>
              <li>
                <Link to="/projects">Projects <span>›</span></Link>
              </li>
              <li>
                <a href="/#redevelopment">Redevelopment <span>›</span></a>
              </li>
            </ul>
          </div>

          {/* Column 3: More */}
          <div className="m-foot-col">
            <h4>More</h4>
            <ul className="m-foot-links">
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/quality">Quality &amp; Specifications</Link></li>
              <li><a href="/#gallery">Gallery</a></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Column 4: Projects */}
          <div className="m-foot-col">
            <h4>Projects</h4>
            <ul className="m-foot-links">
              <li><Link to="/projects/premraj-vihar-2">Premraj Vihar 2.0</Link></li>
              <li><Link to="/projects">Shree Krupa Co-Op Hsg. Society</Link></li>
            </ul>
          </div>

          {/* Column 5: Get in touch */}
          <div className="m-foot-col m-foot-col--touch">
            <h4>Get in touch</h4>
            <div className="m-foot-contact-list">
              <div className="m-foot-contact-item">
                <div className="m-foot-icon-wrap">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} style={{width:15,height:15}}>
                    <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3 4.2 2 2 0 0 1 4.9 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2L9 9.9A16 16 0 0 0 15 15l1.2-1.2a2 2 0 0 1 2-.5c.9.4 1.9.6 2.9.7A2 2 0 0 1 22 16.9z" />
                  </svg>
                </div>
                <div>
                  <div className="m-foot-c-label">Phone</div>
                  <a href="tel:+919876543210" className="m-foot-c-val">+91 98 7654 3210</a>
                </div>
              </div>

              <div className="m-foot-contact-item">
                <div className="m-foot-icon-wrap">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} style={{width:15,height:15}}>
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m2 7 10 7 10-7" />
                  </svg>
                </div>
                <div>
                  <div className="m-foot-c-label">Email</div>
                  <a href="mailto:hello@sankalpbuildcon.com" className="m-foot-c-val">hello@sankalpbuildcon.com</a>
                </div>
              </div>

              <div className="m-foot-contact-item">
                <div className="m-foot-icon-wrap">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} style={{width:15,height:15}}>
                    <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </div>
                <div>
                  <div className="m-foot-c-label">Office</div>
                  <div className="m-foot-c-val">
                    Sankalp Buildcon,<br />
                    Shop No. 3, Plot No. 18,<br />
                    Anand Nagar, Old Sangvi,<br />
                    Pune – 411027, Maharashtra.
                  </div>
                </div>
              </div>
            </div>

            <Link to="/contact" className="m-btn m-btn--solid m-foot-cta-btn">
              Enquire now <IconArrow />
            </Link>
          </div>

        </div>

        <div className="m-foot-bottom">
          <span>© 2026 Sankalp Buildcon. All Rights Reserved.</span>
          <div className="m-foot-credit">
            Designed &amp; Developed by <span className="m-foot-agency">AquaLion Digital</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
