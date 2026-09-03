import Brand from './Brand.jsx'
import { NAV } from '../data/site.js'

export default function Header({ active, onBurger, menuOpen }) {
  return (
    <header className="nav" id="nav">
      <div className="wrap">
        <div className="nav-top">
          <Brand as="a" href="#home" className="brand" aria-label="Sankalp Buildcon — home" />
          <div className="nav-side">
            <span className="where">Established 2012 · Pune</span>
            <a href="#contact" className="btn btn-solid btn-sm">Enquire now</a>
            <button
              className="burger"
              id="burger"
              aria-expanded={menuOpen}
              aria-controls="menu"
              onClick={onBurger}
            >
              Menu <u></u>
            </button>
          </div>
        </div>

        <nav className="nav-links" aria-label="Primary">
          {NAV.map((l) => (
            <a key={l.id} href={`#${l.id}`} className={active === l.id ? 'on' : undefined}>
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
