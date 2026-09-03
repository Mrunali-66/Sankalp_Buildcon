import { useEffect } from 'react'

// Stops the page behind a menu or sheet from scrolling.
export default function useBodyLock(locked) {
  useEffect(() => {
    document.body.style.overflow = locked ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [locked])
}
