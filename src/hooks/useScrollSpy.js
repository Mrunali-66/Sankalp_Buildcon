import { useEffect, useState } from 'react'

// Robust ScrollSpy that accurately aligns active navbar state with user scroll position
export default function useScrollSpy(ids) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const handleScroll = () => {
      // 1. Top of page activates the first section (Home)
      if (window.scrollY < 120) {
        setActive(ids[0])
        return
      }

      // 2. Bottom of page activates the last section (Contact)
      const isBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 90
      if (isBottom) {
        setActive(ids[ids.length - 1])
        return
      }

      // 3. Find current active section based on scroll offset
      const headerOffset = 150
      const scrollPos = window.scrollY + headerOffset

      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i])
        if (el) {
          const top = el.offsetTop
          if (scrollPos >= top) {
            setActive(ids[i])
            return
          }
        }
      }

      setActive(ids[0])
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [ids])

  return active
}
