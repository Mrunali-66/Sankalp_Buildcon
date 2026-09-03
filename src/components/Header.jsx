import { useEffect, useState } from 'react'
import Brand from './Brand.jsx'
import { NAV } from '../data/site.js'

export default function Header({ active, onBurger, menuOpen }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`} id="nav">
      <div className="wrap nav-wrap">
        <Brand as="a" href="#home" className="brand" aria-label="Sankalp Buildcon — home" />

        <nav className="nav-links" aria-label="Primary">
          {NAV.map((l) => (
            <a key={l.id} href={`#${l.id}`} className={active === l.id ? 'on' : undefined}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav-side">
          <a href="#contact" className="btn-header-contact">
            <span>Contact Us</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <button
            className="burger"
            id="burger"
            aria-expanded={menuOpen}
            aria-controls="menu"
            onClick={onBurger}
            aria-label="Open menu"
          >
            Menu <u />
          </button>
        </div>
      </div>
    </header>
  )
}


