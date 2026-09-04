import { Link, useParams, Navigate } from 'react-router-dom'
import Media from '../components/Media.jsx'
import { getProjectBySlug, getRelatedProjects } from '../data/projects.js'
import { IconArrow, IconPin, IconCheck } from './icons.jsx'

export default function ProjectDetailPage() {
  const { slug } = useParams()
  const p = getProjectBySlug(slug)

  if (!p) return <Navigate to="/projects" replace />

  const related = getRelatedProjects(slug)
  const specs = [
    ['Status', p.statusLabel],
    ['Configuration', p.homes],
    ['Floors', p.floors],
    ['Type', p.projectType],
    ['Location', p.location],
  ].filter(([, v]) => v)

  return (
    <>
      <section className="m-pagehero">
        <div className="m-wrap m-pagehero-in">
          <p className="m-crumb">
            <Link to="/">Home</Link> &nbsp;/&nbsp; <Link to="/projects">Projects</Link>
            &nbsp;/&nbsp; {p.name}
          </p>
          <span
            className={`m-pill m-pill--${p.status}`}
            style={{ position: 'static', display: 'inline-block' }}
          >
            {p.statusLabel}
          </span>
          <h1 style={{ marginTop: 18 }}>{p.name}</h1>
          <p className="m-proj-where" style={{ marginTop: 14 }}><IconPin /> {p.location}</p>
        </div>
      </section>

      <section className="m-section">
        <div className="m-wrap">
          <div className="m-detail">
            <div>
              <div className="m-detail-cover">
                <Media src={p.image} alt={p.name} />
              </div>
              {p.shots?.length > 0 && (
                <div className="m-detail-shots">
                  {p.shots.map((s) => <Media key={s} src={s} alt={`${p.name} — view`} />)}
                </div>
              )}
              <p className="m-detail-lead" style={{ marginTop: 28 }}>{p.description}</p>
              {p.overviewDesc2 && (
                <p className="m-detail-lead" style={{ marginTop: 16 }}>{p.overviewDesc2}</p>
              )}
            </div>

            <aside className="m-spec">
              <h3>Project details</h3>
              <dl>
                {specs.map(([dt, dd]) => (
                  <div key={dt}>
                    <dt>{dt}</dt>
                    <dd>{dd}</dd>
                  </div>
                ))}
              </dl>
              <Link to="/contact" className="m-btn m-btn--solid">
                Enquire about this project <IconArrow />
              </Link>
            </aside>
          </div>
        </div>
      </section>

      {p.highlights?.length > 0 && (
        <section className="m-section" style={{ background: 'var(--bg-2)', paddingTop: 0 }}>
          <div className="m-wrap" style={{ paddingTop: 'clamp(48px,6vw,84px)' }}>
            <div className="m-section-head">
              <span className="m-eyebrow">Highlights</span>
              <h2>{p.overviewHeadline} <span style={{ color: 'var(--blue)' }}>{p.overviewSubheadline}</span></h2>
            </div>
            <div className="m-grid m-grid--3">
              {p.highlights.map((h) => (
                <article className="m-card" key={h.title}>
                  <div className="m-tile"><IconCheck /></div>
                  <h3>{h.title}</h3>
                  <p>{h.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="m-section" style={{ paddingTop: 0 }}>
          <div className="m-wrap">
            <div className="m-section-head">
              <span className="m-eyebrow">More projects</span>
              <h2>Explore the portfolio</h2>
            </div>
            <div className="m-projects">
              {related.map((r) => (
                <article className="m-proj" key={r.slug}>
                  <div className="m-proj-media">
                    <span className={`m-pill m-pill--${r.status}`}>{r.statusLabel}</span>
                    <Media src={r.image} alt={r.name} />
                  </div>
                  <div className="m-proj-body">
                    <h3>{r.name}</h3>
                    <p className="m-proj-where"><IconPin /> {r.location}</p>
                    <Link to={`/projects/${r.slug}`} className="m-link" style={{ marginTop: 'auto', paddingTop: 16 }}>
                      View details <IconArrow />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="m-section" style={{ paddingTop: 0 }}>
        <div className="m-wrap">
          <div className="m-cta">
            <div>
              <h2>Want to see this project in person?</h2>
              <p>We can arrange a site visit and walk you through the current stage of work.</p>
            </div>
            <div className="m-cta-do">
              <Link to="/contact" className="m-btn m-btn--light">Request a site visit <IconArrow /></Link>
              <Link to="/projects" className="m-btn m-btn--light">All projects</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
