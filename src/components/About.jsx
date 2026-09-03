import Media from './Media.jsx'
import { PILLARS } from '../data/site.js'

export default function About() {
  return (
    <section className="band" id="about">
      <div className="wrap">
        <div className="head">
          <div className="ref">01 / About</div>
          <div className="head-flow">
            <h2 className="title">Building trust.<br /><em>Creating better futures.</em></h2>
          </div>
        </div>

        <div className="about">
          <div className="about-text">
            <p>
              Sankalp Buildcon was <b>established in 2012</b> and works on residential
              development, redevelopment and construction in Pune. Our approach starts with
              the site and the people who will live there, then works outward — planning,
              drawings, approvals, execution, handover.
            </p>
            <p>
              We keep the project list deliberate rather than long. Each development is
              planned around layout, light, ventilation and everyday practicality, and built
              through a process we are willing to be measured on.
            </p>
            <p>
              What we commit to is plain: <b>clear communication, dependable construction and
              long-term value</b> for the families and societies who choose to work with us.
            </p>

            <div className="pillars">
              {PILLARS.map((p) => (
                <div className="pillar" key={p.h}>
                  <h3>{p.h}</h3>
                  <p>{p.p}</p>
                </div>
              ))}
            </div>

            <p className="note" style={{ marginTop: 34 }}>
              Company history and milestones — awaiting final content
            </p>
          </div>

          <figure className="about-figure">
            <Media src="assets/about.jpg" alt="Sankalp Buildcon site, Old Sangvi, Pune" />
            <figcaption className="about-cap">
              <span>Old Sangvi, Pune</span>
              <span>Est. 2012</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
