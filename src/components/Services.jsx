import { SERVICES } from '../data/site.js'

export default function Services() {
  return (
    <section className="band" id="services">
      <div className="wrap">
        <div className="head">
          <div className="ref">05 / Services</div>
          <div className="head-flow">
            <h2 className="title">What we take on,<br />end to end.</h2>
            <p>
              From the first site assessment through to handover, the same team stays with the
              project — so nothing is lost between stages.
            </p>
          </div>
        </div>

        <div className="services">
          {SERVICES.map((s) => (
            <article className="svc" key={s.no}>
              <div className="svc-no">{s.no}</div>
              <div>
                <h3>{s.h}</h3>
                <p>{s.p}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
