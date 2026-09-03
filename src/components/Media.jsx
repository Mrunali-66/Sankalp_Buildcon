import { useState } from 'react'

/**
 * Image box. If the image is missing, it falls back to the
 * labelled drafting plate, same as the original page did.
 */
export default function Media({ src, alt = '', className = '', as: Tag = 'div', children }) {
  const [empty, setEmpty] = useState(false)

  const classes = ['media', className, empty ? 'is-empty' : ''].filter(Boolean).join(' ')

  // Resolve bare paths ("assets/x.jpg") from the site root so they work the
  // same on nested routes like /projects/<slug> as they do on "/".
  const url = /^(https?:|data:|\/)/.test(src) ? src : `/${src}`

  return (
    <Tag className={classes} data-src={src}>
      <img
        src={url}
        alt={alt}
        onError={() => setEmpty(true)}
        onLoad={(e) => { if (e.target.naturalWidth === 0) setEmpty(true) }}
      />
      {children}
    </Tag>
  )
}
