import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import MobileMenu from './components/MobileMenu.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Founder from './components/Founder.jsx'
import Projects from './components/Projects.jsx'
import Redevelopment from './components/Redevelopment.jsx'
import Services from './components/Services.jsx'
import Quality from './components/Quality.jsx'
import Commitments from './components/Commitments.jsx'
import Gallery from './components/Gallery.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import ProjectSheet from './components/ProjectSheet.jsx'
import useScrollSpy from './hooks/useScrollSpy.js'
import useBodyLock from './hooks/useBodyLock.js'
import { NAV } from './data/site.js'

const SECTION_IDS = NAV.map((n) => n.id)

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [sheet, setSheet] = useState(null)

  const active = useScrollSpy(SECTION_IDS)
  useBodyLock(menuOpen || Boolean(sheet))

  // One entrance animation on load, nothing after.
  useEffect(() => {
    const id = requestAnimationFrame(() => document.body.classList.add('lit'))
    return () => cancelAnimationFrame(id)
  }, [])

  // Escape closes the sheet first, then the menu.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== 'Escape') return
      if (sheet) setSheet(null)
      else if (menuOpen) setMenuOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [sheet, menuOpen])

  return (
    <>
      <Header
        active={active}
        menuOpen={menuOpen}
        onBurger={() => setMenuOpen((o) => !o)}
      />

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      <main>
        <Hero />
        <About />
        <Founder />
        <Projects onOpen={setSheet} />
        <Redevelopment />
        <Services />
        <Quality />
        <Commitments />
        <Gallery />
        <Contact />
      </main>

      <Footer onOpen={setSheet} />

      {sheet && <ProjectSheet slug={sheet} onClose={() => setSheet(null)} />}
    </>
  )
}
