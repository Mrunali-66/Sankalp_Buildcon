import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import MobileMenu from './components/MobileMenu.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Founder from './components/Founder.jsx'
import Projects from './components/Projects.jsx'
import ProjectDetail from './components/ProjectDetail.jsx'
import Redevelopment from './components/Redevelopment.jsx'
import Services from './components/Services.jsx'
import Quality from './components/Quality.jsx'
import Commitments from './components/Commitments.jsx'
import Gallery from './components/Gallery.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import FloatingSocials from './components/FloatingSocials.jsx'
import useScrollSpy from './hooks/useScrollSpy.js'
import useBodyLock from './hooks/useBodyLock.js'
import { NAV } from './data/site.js'
import { getProjectBySlug } from './data/projects.js'

const SECTION_IDS = [...NAV.map((n) => n.id), 'contact']

// Helper to inspect current URL path or hash for dedicated project route
function getInitialProjectSlug() {
  if (typeof window === 'undefined') return null
  const path = window.location.pathname.replace(/^\/+|\/+$/g, '')
  if (path.startsWith('projects/')) {
    const slug = path.split('/')[1]
    if (getProjectBySlug(slug)) return slug
  }
  const hash = window.location.hash
  if (hash.startsWith('#projects/')) {
    const slug = hash.replace('#projects/', '')
    if (getProjectBySlug(slug)) return slug
  }
  return null
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [projectSlug, setProjectSlug] = useState(getInitialProjectSlug)
  const [projectsFilter, setProjectsFilter] = useState('all')

  const scrollSpyActive = useScrollSpy(SECTION_IDS)
  // When viewing dedicated project details, keep 'projects' as active navbar item
  const active = projectSlug ? 'projects' : scrollSpyActive

  useBodyLock(menuOpen)

  // One entrance animation on load
  useEffect(() => {
    const id = requestAnimationFrame(() => document.body.classList.add('lit'))
    return () => cancelAnimationFrame(id)
  }, [])

  // Listen for browser Back/Forward navigation and hash scrolling
  useEffect(() => {
    const handlePopState = () => {
      const slug = getInitialProjectSlug()
      setProjectSlug(slug)
    }

    const handleHashScroll = () => {
      const hash = window.location.hash
      if (hash && hash.startsWith('#') && !hash.startsWith('#projects/')) {
        const targetId = hash.replace('#', '')
        if (projectSlug) {
          setProjectSlug(null)
          setTimeout(() => {
            const el = document.getElementById(targetId)
            if (el) el.scrollIntoView({ behavior: 'smooth' })
          }, 50)
        } else {
          const el = document.getElementById(targetId)
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' })
          }
        }
      }
    }

    handleHashScroll()
    window.addEventListener('popstate', handlePopState)
    window.addEventListener('hashchange', handlePopState)
    return () => {
      window.removeEventListener('popstate', handlePopState)
      window.removeEventListener('hashchange', handlePopState)
    }
  }, [])

  // Navigation handlers
  const navigateToProject = (slug) => {
    setProjectSlug(slug)
    try {
      window.history.pushState({ slug }, '', `/projects/${slug}`)
    } catch {
      window.location.hash = `#projects/${slug}`
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navigateBackToProjects = () => {
    setProjectSlug(null)
    try {
      window.history.pushState({}, '', '/')
    } catch {
      window.location.hash = '#projects'
    }
    setTimeout(() => {
      const el = document.getElementById('projects')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 50)
  }

  const handleFilterOngoing = () => {
    setProjectSlug(null)
    setProjectsFilter('ongoing')
    try {
      window.history.pushState({}, '', '/')
    } catch {
      window.location.hash = '#projects'
    }
    setTimeout(() => {
      const el = document.getElementById('projects')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 50)
  }

  return (
    <>
      <Header
        active={active}
        menuOpen={menuOpen}
        onBurger={() => setMenuOpen((o) => !o)}
      />

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      {projectSlug ? (
        <main>
          <ProjectDetail
            slug={projectSlug}
            onBack={navigateBackToProjects}
            onSelectProject={navigateToProject}
            onFilterOngoing={handleFilterOngoing}
          />
        </main>
      ) : (
        <main>
          <Hero />
          <About />
          <Founder />
          <Projects
            onOpen={navigateToProject}
            initialFilter={projectsFilter}
          />
          <Redevelopment />
          <Services />
          <Quality />
          <Commitments />
          <Gallery />
          <Contact />
        </main>
      )}

      <Footer onOpen={navigateToProject} />
      <FloatingSocials />
    </>
  )
}
