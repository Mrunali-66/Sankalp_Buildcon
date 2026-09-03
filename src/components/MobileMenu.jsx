import Brand from './Brand.jsx'
import { NAV } from '../data/site.js'

export default function MobileMenu({ open, onClose }) {
  return (
    <div className={`menu${open ? ' open' : ''}`} id="menu" aria-hidden={!open}>
      <div className="menu-top">
        <Brand />
        <button className="menu-close" onClick={onClose}>Close</button>
      </div>

      <nav aria-label="Mobile primary">
        {NAV.map((l, i) => (
          <a key={l.id} href={`#${l.id}`} onClick={onClose}>
            <s>{String(i + 1).padStart(2, '0')}</s> {l.label}
          </a>
        ))}
      </nav>

      <div className="menu-foot">
        <a href="#contact" className="btn btn-paper" onClick={onClose}>Enquire now</a>
        <p>
          Established 2012 · Pune, Maharashtra<br />
          <span className="pending">[Contact Number]</span>
        </p>
      </div>
    </div>
  )
}
