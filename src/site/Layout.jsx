import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import SiteHeader from './SiteHeader.jsx'
import SiteFooter from './SiteFooter.jsx'
import FloatingSocials from '../components/FloatingSocials.jsx'
import '../theme-modern.css'

export default function Layout() {
  const { pathname } = useLocation()

  // New page = start at the top.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="mod">
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
      <FloatingSocials />
    </div>
  )
}
