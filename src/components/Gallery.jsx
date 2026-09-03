import { useState } from 'react'
import Media from './Media.jsx'
import { PLATES } from '../data/site.js'

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'ongoing', label: 'Ongoing' },
  { key: 'upcoming', label: 'Upcoming' },
  { key: 'progress', label: 'Construction progress' },
]

export default function Gallery() {
  const [filter, setFilter] = useState('all')

  return (
    <section className="band band--tint" id="gallery">
      <div className="wrap">
        <div className="head">
          <div className="ref">08 / Gallery</div>
          <div className="head-flow">
            <h2 className="title">From site<br />to structure.</h2>
            <p>
              Photographs from our current sites in Old Sangvi, updated as construction
              progresses.
            </p>
            <div className="filters" role="group" aria-label="Filter gallery">
              {FILTERS.map((f) => (
                <button
                  key={f.key}
                  className={`fbtn${filter === f.key ? ' on' : ''}`}
                  onClick={() => setFilter(f.key)}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="plates">
          {PLATES.map((p) => (
            <figure
              className={`plate ${p.cls}`.trim()}
              key={p.no}
              hidden={!(filter === 'all' || filter === p.g)}
            >
              <Media src={p.src} alt={p.alt} />
              <figcaption>
                <span>{p.cap}</span>
                <s>{p.no}</s>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="note" style={{ marginTop: 34 }}>
          Site photographs to be supplied — image paths are already wired in
        </p>
      </div>
    </section>
  )
}
