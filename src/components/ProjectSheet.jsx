import { useEffect, useRef } from 'react'
import Media from './Media.jsx'
import { getProject } from '../data/projects.js'

export default function ProjectSheet({ slug, onClose }) {
  const closeRef = useRef(null)
  const project = getProject(slug)

  useEffect(() => { closeRef.current?.focus() }, [slug])

  if (!project) return null

  // Clicking the dark backdrop closes the sheet.
  const backdrop = (e) => { if (e.target === e.currentTarget) onClose() }

  return (
    <div
      className="sheetview open"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`h-${project.slug}`}
      onClick={backdrop}
    >
      <div className="panel">
        <div className="bar">
          <span className="route">/projects/{project.slug}</span>
          <button ref={closeRef} onClick={onClose}>Close</button>
        </div>

        <div className="inner">
          <span className={project.statusClass}>{project.statusLabel}</span>
          <h2 id={`h-${project.slug}`}>{project.name}</h2>
          <p className="where">{project.where}</p>

          <Media className="cover" src={project.cover} alt={project.name} />

          <div className="plates2">
            {project.shots.map((s) => <Media key={s} src={s} alt="" />)}
          </div>

          <p
            className="lead"
            style={{ marginTop: 26, color: 'var(--steel)', maxWidth: '60ch' }}
          >
            {project.lead}
          </p>

          <dl className="facts" style={{ marginTop: 26 }}>
            {project.facts.map((f) => (
              <div key={f.dt}>
                <dt>{f.dt}</dt>
                <dd className={f.pending ? 'pending' : undefined}>{f.dd}</dd>
              </div>
            ))}
          </dl>

          <p className="note" style={{ marginTop: 22 }}>{project.note}</p>

          <div className="end">
            <a href="#contact" className="btn btn-solid" onClick={onClose}>{project.cta}</a>
            {project.extraCta && (
              <a href={project.extraCta.href} className="tick" onClick={onClose}>
                {project.extraCta.label} <i></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
