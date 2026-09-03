import { Link, useParams, Navigate } from 'react-router-dom'
import Media from '../components/Media.jsx'
import { getProject } from '../data/projects.js'
import { IconArrow, IconPin } from './icons.jsx'

export default function ProjectDetailPage() {
  const { slug } = useParams()
  const p = getProject(slug)

  if (!p) return <Navigate to="/projects" replace />

  return (
    <>
      <section className="m-pagehero">
        <div className="m-wrap m-pagehero-in">
          <p className="m-crumb">
            <Link to="/">Home</Link> &nbsp;/&nbsp; <Link to="/projects">Projects</Link>
            &nbsp;/&nbsp; {p.name}
          </p>
          <span className={`m-pill m-pill--${p.status}`} style={{ position: 'static', display: 'inline-block' }}>
            {p.statusLabel}
          </span>
          <h1 style={{ marginTop: 18 }}>{p.name}</h1>
          <p className="m-proj-where" style={{ marginTop: 14 }}><IconPin /> {p.where}</p>
        </div>
      </section>

      <section className="m-section">
        <div className="m-wrap">
          <div className="m-detail">
            <div>
              <div className="m-detail-cover">
                <Media src={p.cover} alt={p.name} />
              </div>
              <div className="m-detail-shots">
                {p.shots.map((s) => <Media key={s} src={s} alt={`${p.name} — view`} />)}
              </div>
              <p className="m-detail-lead" style={{ marginTop: 28 }}>{p.lead}</p>
            </div>

            <aside className="m-spec">
              <h3>Project details</h3>
              <dl>
                {p.facts.map((f) => (
                  <div key={f.dt}>
                    <dt>{f.dt}</dt>
                    <dd className={f.pending ? 'pending' : undefined}>{f.dd}</dd>
                  </div>
                ))}
              </dl>
              <a href="/#contact" className="m-btn m-btn--solid">{p.cta} <IconArrow /></a>
              {p.note && <p className="m-note">{p.note}</p>}
            </aside>
          </div>
        </div>
      </section>

      <section className="m-section" style={{ paddingTop: 0 }}>
        <div className="m-wrap">
          <div className="m-cta">
            <div>
              <h2>Want to see this project in person?</h2>
              <p>We can arrange a site visit and walk you through the current stage of work.</p>
            </div>
            <div className="m-cta-do">
              <a href="/#contact" className="m-btn m-btn--light">Request a site visit <IconArrow /></a>
              <Link to="/projects" className="m-btn m-btn--light">All projects</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
