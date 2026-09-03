import Media from './Media.jsx'
import { SCHEDULE } from '../data/site.js'

export default function Quality() {
  return (
    <section className="band band--tint" id="quality">
      <div className="wrap">
        <div className="head">
          <div className="ref">06 / Quality</div>
          <div className="head-flow">
            <h2 className="title">Specified per project,<br />not by brochure.</h2>
            <p>
              Materials and finishes differ between developments. Rather than publish one
              generic list, we issue the full specification schedule for the project you are
              actually considering.
            </p>
          </div>
        </div>

        <table className="schedule">
          <caption>Specification schedule · categories covered in every project document</caption>
          <thead>
            <tr>
              <th className="c-ref">Ref</th>
              <th className="c-cat">Category</th>
              <th className="c-note">Issued as</th>
            </tr>
          </thead>
          <tbody>
            {SCHEDULE.map((r) => (
              <tr key={r.ref}>
                <td className="c-ref">{r.ref}</td>
                <td className="c-cat">{r.cat}</td>
                <td className="c-note">{r.note}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="sched-foot">
          <p>
            Detailed specifications, drawings and material schedules are shared during site
            visits and at the time of booking, and form part of the project agreement.
            <br /><br />
            <span className="note" style={{ display: 'inline-block', marginTop: 4 }}>
              Exact materials and brands — to be confirmed per project
            </span>
          </p>
          <Media as="figure" src="assets/quality.jpg" alt="Construction detail at a Sankalp Buildcon site" />
        </div>
      </div>
    </section>
  )
}
