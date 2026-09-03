import { COMMITMENTS, COMMIT_SUB } from '../data/site.js'

export default function Commitments() {
  return (
    <section className="band">
      <div className="wrap">
        <div className="head">
          <div className="ref">07 / Commitments</div>
          <div className="head-flow">
            <h2 className="title">Three things we<br />will not compromise.</h2>
            <p>
              These are the tests applied before committing to a project, and before signing
              off any stage of work on one.
            </p>
          </div>
        </div>

        <div className="commit">
          {COMMITMENTS.map((c) => (
            <div className="commit-row" key={c.no}>
              <div className="ref">{c.no}</div>
              <h3>{c.h}</h3>
              <p>{c.p}</p>
            </div>
          ))}
        </div>

        <div className="commit-sub">
          {COMMIT_SUB.map((c) => (
            <div key={c.h}>
              <h4>{c.h}</h4>
              <p>{c.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
