import { useEffect, useState } from 'react'

// Robust ScrollSpy using getBoundingClientRect for accurate active navbar tab highlighting
export default function useScrollSpy(ids) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const handleScroll = () => {
      // 1. Top of page activates first section (Home)
      if (window.scrollY < 80) {
        setActive(ids[0])
        return
      }

      // 2. Bottom of page activates last section (Contact)
      const isBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60
      if (isBottom) {
        setActive(ids[ids.length - 1])
        return
      }

      // 3. Iterate backwards from last to first section to pick the lowest active section in focal area
      const focalY = 180

      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i])
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= focalY && rect.bottom > 60) {
            setActive(ids[i])
            return
          }
        }
      }
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
