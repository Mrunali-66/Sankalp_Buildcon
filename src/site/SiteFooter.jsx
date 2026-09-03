import { useState } from 'react'
import { Link } from 'react-router-dom'
import MARK from '../logoMark.js'

function FootLogo() {
  const [src, setSrc] = useState('/assets/mark.png')
  return (
    <div className="m-brand">
      <img src={src} alt="Sankalp Buildcon" onError={() => setSrc(MARK)} />
      <span className="m-brand-txt">
        <span className="m-brand-name">Sankalp Buildcon</span>
        <span className="m-brand-tag">Est. 2012 · Pune</span>
      </span>
    </div>
  )
}

export default function SiteFooter() {
  return (
    <footer className="m-foot">
      <div className="m-wrap m-foot-in">
        <div className="m-foot-top">
          <div>
            <FootLogo />
            <p className="m-foot-blurb">
              Residential development, society redevelopment and construction across Pune,
              Maharashtra — planned carefully, built dependably, handed over to families who
              intend to stay.
            </p>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="/#about">About Us</a></li>
              <li><a href="/#founder">Our Founder</a></li>
              <li><a href="/#redevelopment">Redevelopment</a></li>
              <li><a href="/#quality">Quality &amp; Specifications</a></li>
              <li><a href="/#gallery">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4>Explore</h4>
            <ul>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/projects/premraj-vihar-2">Premraj Vihar 2.0</Link></li>
              <li><a href="/#contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4>Get in touch</h4>
            <dl>
              <dt>Phone</dt>
              <dd>[Contact number — pending]</dd>
              <dt>Email</dt>
              <dd>[Email address — pending]</dd>
              <dt>Office</dt>
              <dd>[Office address — pending]</dd>
            </dl>
          </div>
        </div>

        <div className="m-foot-end">
          <span>© 2026 Sankalp Buildcon. All rights reserved.</span>
          <span>Demo prototype · content and imagery pending confirmation</span>
        </div>
      </div>
    </footer>
  )
}
