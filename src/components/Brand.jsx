import { useState } from 'react'
import MARK from '../logoMark.js'

// Logo lockup. Falls back to the inline mark if assets/mark.png is missing.
export default function Brand({ as: Tag = 'span', className = 'brand', ...rest }) {
  const [src, setSrc] = useState('assets/mark.png')

  return (
    <Tag className={className} {...rest}>
      <img src={src} alt="Sankalp Buildcon" onError={() => setSrc(MARK)} />
      <span className="bt">
        <span className="b1">SANKALP</span>
        <span className="b2">BUILDCON</span>
      </span>
    </Tag>
  )
}
