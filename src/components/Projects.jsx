import { useState } from 'react'
import Media from './Media.jsx'

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'ongoing', label: 'Ongoing' },
  { key: 'upcoming', label: 'Upcoming' },
  { key: 'completed', label: 'Completed' },
]

export default function Projects({ onOpen }) {
  const [filter, setFilter] = useState('all')
  const show = (status) => filter === 'all' || filter === status

  return (
    <section className="band" id="projects">
      <div className="wrap">
        <div className="head">
          <div className="ref">03 / Projects</div>
          <div className="head-flow">
            <h2 className="title">Two developments<br />in Old Sangvi.</h2>
            <p>
              One under construction, one in planning. Details are published here as each is
              confirmed — nothing before.
            </p>
            <div className="filters" role="group" aria-label="Filter projects">
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

        <div>
          {/* FEATURED — ONGOING */}
          <article className="feature" style={{ display: show('ongoing') ? '' : 'none' }}>
            <Media
              src="assets/projects/premraj-vihar-1.jpg"
              alt="Premraj Vihar 2.0, Anand Nagar, Old Sangvi"
            />
            <div className="feature-info">
              <div className="feature-no">01</div>
              <div>
                <span className="stat">Ongoing project</span>
                <h3>Premraj Vihar 2.0</h3>
                <p className="where">Anand Nagar, Old Sangvi, Pune – 27</p>
                <div className="feature-do">
                  <button
                    className="btn btn-solid btn-sm"
                    onClick={() => onOpen('premraj-vihar-2')}
                  >
                    View project
                  </button>
                  <a href="#contact" className="tick">
                    Enquire about this project <i></i>
                  </a>
                </div>
              </div>
              <div className="feature-side">
                <p>
                  A residential development of 1 &amp; 2 BHK homes, currently under
                  construction. Planned for efficient layouts, natural light and ventilation
                  in an established neighbourhood.
                </p>
                <dl className="facts">
                  <div><dt>Status</dt><dd>Under construction</dd></div>
                  <div><dt>Configuration</dt><dd>1 &amp; 2 BHK homes</dd></div>
                  <div><dt>Location</dt><dd>Old Sangvi, Pune – 27</dd></div>
                </dl>
              </div>
            </div>
          </article>

          <div className="register">
            {/* UPCOMING */}
            <article className="entry" style={{ display: show('upcoming') ? '' : 'none' }}>
              <div className="entry-no">02</div>
              <div>
                <span className="stat stat--soon">Upcoming project</span>
                <h3>Shree Krupa Co-Op<br />Housing Society</h3>
                <p className="where">Dhore Nagar Chowk, Old Sangvi, Pune – 27</p>
                <p className="where" style={{ marginTop: 6 }}>
                  Configuration and project details to be announced.
                </p>
                <div className="do">
                  <button className="tick" onClick={() => onOpen('shree-krupa')}>
                    View site photographs <i></i>
                  </button>
                </div>
              </div>
              <Media
                as="figure"
                src="assets/projects/shree-krupa-1.jpg"
                alt="Shree Krupa Co-Op Housing Society site"
              />
            </article>

            {/* COMPLETED — content pending */}
            <article
              className="entry entry--empty"
              style={{ display: show('completed') ? '' : 'none' }}
            >
              <div className="entry-no">03</div>
              <div>
                <span className="stat stat--done">Completed</span>
                <h3>Earlier developments</h3>
                <p>
                  Names, locations and photographs of completed projects will be listed here
                  once confirmed.
                </p>
              </div>
              <p className="note" style={{ alignSelf: 'center' }}>Content pending</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
