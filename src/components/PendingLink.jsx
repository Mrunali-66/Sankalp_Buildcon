import { useEffect, useRef, useState } from 'react'

// Call / WhatsApp buttons have no number yet, so they say so on click.
export default function PendingLink({ href, className, children }) {
  const [label, setLabel] = useState(children)
  const timer = useRef(null)

  useEffect(() => () => clearTimeout(timer.current), [])

  const click = (e) => {
    e.preventDefault()
    setLabel('Number pending')
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setLabel(children), 1600)
  }

  return (
    <a href={href} className={className} aria-disabled="true" onClick={click}>
      {label}
    </a>
  )
}
