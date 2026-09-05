import { useState } from 'react'
import { Link } from 'react-router-dom'
import Media from '../components/Media.jsx'
import { PROJECTS } from '../data/projects.js'
import {
  IconArrow, IconPin, IconCalendar, IconUsers, IconBuilding, IconShield,
} from './icons.jsx'

const FILTERS = [
  { key: 'all', label: 'All projects' },
  { key: 'ongoing', label: 'Ongoing' },
  { key: 'completed', label: 'Completed' },
  { key: 'upcoming', label: 'Upcoming' },
]

const STATS = [
  { icon: <IconCalendar />, l: 'Year established', v: '2012' },
  { icon: <IconShield />, l: 'Years of trust & quality', v: '12+' },
  { icon: <IconUsers />, l: 'Families housed', v: '100+' },
  { icon: <IconBuilding />, l: 'Working across', v: 'Sangvi & PCMC' },
]

function ProjectCard({ p }) {
  const chips = [p.homes, p.floors, p.projectType].filter(Boolean)
  return (
    <article className="m-proj">
      <div className="m-proj-media">
        <span className={`m-pill m-pill--${p.status}`}>{p.statusLabel}</span>
        <Media src={p.image} alt={`${p.name}, ${p.location}`} />
      </div>
      <div className="m-proj-body">
        <h3>{p.name}</h3>
        <p className="m-proj-where"><IconPin /> {p.location}</p>
        <div className="m-proj-facts">
          {chips.slice(0, 3).map((c) => (
            <span className="m-chip" key={c}>{c}</span>
          ))}
        </div>
        <p className="m-proj-lead">{p.description}</p>
        <Link to={`/projects/${p.slug}`} className="m-link">
          View project details <IconArrow />
        </Link>
      </div>
    </article>
  )
}

export default function ProjectsPage() {
  const [filter, setFilter] = useState('all')
  const shown = PROJECTS.filter((p) => filter === 'all' || p.status === filter)

  return (
    <>
      <section className="m-pagehero">
        <div className="m-wrap m-pagehero-in">
          <p className="m-crumb"><Link to="/">Home</Link> &nbsp;/&nbsp; Projects</p>
          <span className="m-eyebrow">Our Projects</span>
          <h1>Built with care. <span>Made to last.</span></h1>
          <p>
            A growing portfolio across Old Sangvi, New Sangvi and the wider PCMC area — from
            completed residences to developments currently under construction.
          </p>
        </div>
      </section>

      <section className="m-section">
        <div className="m-wrap">
          <div className="m-filters" role="group" aria-label="Filter projects">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                className={`m-fbtn${filter === f.key ? ' on' : ''}`}
                onClick={() => setFilter(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="m-projects">
            {shown.map((p) => <ProjectCard key={p.slug} p={p} />)}

            {shown.length === 0 && (
              <article className="m-proj m-proj--empty">
                <h3>Nothing here yet</h3>
                <p>
                  No {filter} projects to show right now. New developments are added here as
                  each one is confirmed.
                </p>
              </article>
            )}
          </div>
        </div>
      </section>

      <section className="m-section" style={{ paddingTop: 0 }}>
        <div className="m-wrap">
          <div className="m-band">
            <div className="m-band-grid">
              {STATS.map((s) => (
                <div className="m-band-cell" key={s.l}>
                  {s.icon}
                  <div>
                    <div className="l">{s.l}</div>
                    <div className="v">{s.v}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="m-section" style={{ paddingTop: 0 }}>
        <div className="m-wrap">
          <div className="m-cta">
            <div>
              <h2>Interested in a Sankalp Buildcon home?</h2>
              <p>Tell us what you are looking for and we will get back to you with current availability.</p>
            </div>
            <div className="m-cta-do">
              <a href="/#contact" className="m-btn m-btn--light">Enquire now <IconArrow /></a>
              <Link to="/services" className="m-btn m-btn--light">Our services</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
