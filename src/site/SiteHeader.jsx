import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import MARK from '../logoMark.js'
import { IconArrow } from '../pages/icons.jsx'

// Anchor links point back to the single-page Home; routed links use <NavLink>.
const LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', href: '/#about' },
  { label: 'Our Founder', href: '/#founder' },
  { label: 'Projects', to: '/projects' },
  { label: 'Redevelopment', href: '/#redevelopment' },
  { label: 'Services', to: '/services' },
  { label: 'Quality & Specifications', href: '/#quality' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'Contact', href: '/#contact' },
]

function Logo() {
  const [src, setSrc] = useState('/assets/mark.png')
  return (
    <Link to="/" className="m-brand" aria-label="Sankalp Buildcon — home">
      <img src={src} alt="Sankalp Buildcon" onError={() => setSrc(MARK)} />
      <span className="m-brand-txt">
        <span className="m-brand-name">Sankalp Buildcon</span>
        <span className="m-brand-tag">Building Trust. Creating Better Futures.</span>
      </span>
    </Link>
  )
}

function NavItems({ onClick }) {
  return LINKS.map((l) =>
    l.to ? (
      <NavLink key={l.label} to={l.to} end={l.to === '/'} onClick={onClick}>
        {l.label}
      </NavLink>
    ) : (
      <a key={l.label} href={l.href} onClick={onClick}>
        {l.label}
      </a>
    )
  )
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="m-head">
      <div className="m-wrap m-head-in">
        <Logo />
        <nav className="m-nav" aria-label="Primary">
          <NavItems />
        </nav>
        <a href="/#contact" className="m-btn m-btn--solid">
          Contact Us <IconArrow />
        </a>
        <button
          className="m-burger"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
        </button>
      </div>

      <div className={`m-mobnav${open ? ' open' : ''}`}>
        <NavItems onClick={close} />
        <a href="/#contact" className="m-btn m-btn--solid" onClick={close}>
          Contact Us <IconArrow />
        </a>
      </div>
    </header>
  )
}
