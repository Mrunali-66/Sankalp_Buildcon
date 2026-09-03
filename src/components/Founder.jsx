import Media from './Media.jsx'

export default function Founder() {
  return (
    <section className="band" id="founder">
      <div className="wrap">
        <div className="head">
          <div className="ref">02 / Founder</div>
          <div className="head-flow">
            <h2 className="title">A company is judged<br />on what it hands over.</h2>
          </div>
        </div>

        <div className="founder">
          <figure className="founder-figure">
            <Media src="assets/founder.jpg" alt="Founder, Sankalp Buildcon" />
          </figure>

          <div className="founder-said">
            <blockquote>
              At Sankalp Buildcon, our vision is not simply to construct buildings, but to
              create spaces that earn trust and add value for generations.
            </blockquote>
            <div className="body">
              <p>
                The company was founded in 2012 on a straightforward belief — that
                construction is a long-term commitment to the people who will live in what you
                build, not a transaction that ends at possession.
              </p>
              <p>
                That belief still decides how projects are selected, planned and delivered:
                fewer developments, closer supervision, and honest conversations with every
                family and society we work with.
              </p>
            </div>
            <div className="sig">
              <div>
                <div className="who pending">[Founder Name]</div>
                <div className="role">Founder &amp; Managing Director</div>
              </div>
              <p className="note">Founder biography and photograph — awaiting final content</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
