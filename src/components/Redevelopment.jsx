import { REDEV_POINTS, REDEV_STEPS } from '../data/site.js'

export default function Redevelopment() {
  return (
    <section className="band band--dark" id="redevelopment">
      <div className="wrap">
        <div className="head">
          <div className="ref">04 / Redevelopment</div>
          <div className="head-flow">
            <h2 className="title">
              Reimagining communities.<br /><em>Creating better living.</em>
            </h2>
            <p>
              Redevelopment is a long process with a lot of people in it. We run it as a
              structured programme, so every member of the society knows what is happening,
              and why, at each stage.
            </p>
            <ul className="redev-list">
              {REDEV_POINTS.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </div>
        </div>

        <ol className="ladder">
          {REDEV_STEPS.map((s) => (
            <li className="rung" key={s.no}>
              <div className="rung-no">{s.no}</div>
              <div className="rung-body">
                <h3>{s.h}</h3>
                <p>{s.p}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="redev-do">
          <a href="#contact" className="btn btn-paper">Discuss a redevelopment</a>
          <p>
            Every redevelopment is governed by its own agreement and approvals. Terms are
            confirmed with the society in writing before any work begins.
          </p>
        </div>
      </div>
    </section>
  )
}
