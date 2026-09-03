import Brand from './Brand.jsx'

export default function Footer({ onOpen }) {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-mark">
          <Brand className="lock" />
          <p className="foot-say">Building trust.<br />Creating better futures.</p>
        </div>

        <div className="foot-cols">
          <div>
            <h4>Sankalp Buildcon</h4>
            <p>
              Residential development, redevelopment and construction in Pune, Maharashtra.
              Established 2012.
            </p>
          </div>

          <div>
            <h4>Navigate</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#founder">Our Founder</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#redevelopment">Redevelopment</a></li>
            </ul>
          </div>

          <div>
            <h4>More</h4>
            <ul>
              <li><a href="#services">Services</a></li>
              <li><a href="#quality">Quality &amp; Specifications</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <h4 style={{ marginTop: 26 }}>Projects</h4>
            <ul>
              <li>
                <a href="#projects" onClick={(e) => { e.preventDefault(); onOpen('premraj-vihar-2') }}>
                  Premraj Vihar 2.0
                </a>
              </li>
              <li>
                <a href="#projects" onClick={(e) => { e.preventDefault(); onOpen('shree-krupa') }}>
                  Shree Krupa Co-Op Hsg. Society
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4>Get in touch</h4>
            <dl>
              <dt>Phone</dt><dd className="pending">[Contact Number]</dd>
              <dt>Email</dt><dd className="pending">[Email Address]</dd>
              <dt>Office</dt><dd className="pending">[Office Address]</dd>
            </dl>
            <a
              href="#contact"
              className="tick"
              style={{ color: '#fff', borderBottomColor: 'rgba(255,255,255,.25)' }}
            >
              Enquire now <i></i>
            </a>
          </div>
        </div>

        <div className="foot-end">
          <span>© 2026 Sankalp Buildcon. All Rights Reserved.</span>
          <span>Demo prototype · content and imagery pending confirmation</span>
        </div>
      </div>
    </footer>
  )
}
