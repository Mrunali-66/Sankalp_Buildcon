import Media from './Media.jsx'

export default function Founder() {
  return (
    <section className="band" id="founder">
      <div className="wrap">
        <div className="head">
          <div className="ref">02 / Founder</div>
          <div className="head-flow">
            <h2 className="title">A Vision That<br />Became a Foundation.</h2>
          </div>
        </div>

        <div className="founder">
          <figure className="founder-figure">
            <Media src="assets/founder.jpg" alt="Mr. Sandip Chandrakant Shitole — Founder & Director, Sankalp Buildcon" />
          </figure>

          <div className="founder-said">
            <blockquote>
              “Our goal is not just to construct buildings. Our goal is to create spaces that bring comfort, security, value and a better future for the people who live in them.”
            </blockquote>
            <div className="body">
              <p>
                Mr. Sandip Chandrakant Shitole is the Founder &amp; Director of Sankalp Buildcon. With determination, hard work and a vision to build something meaningful in the construction industry, he established Sankalp Buildcon in 2012.
              </p>
              <p>
                His journey represents the belief that success is not built overnight—it is created through consistent effort, responsibility and trust. Under his leadership, Sankalp Buildcon continues to move forward with a vision of creating quality developments and building long-term relationships with customers and communities.
              </p>
            </div>
            <div className="sig">
              <div>
                <div className="who">Mr. Sandip Chandrakant Shitole</div>
                <div className="role">Founder &amp; Director, Sankalp Buildcon</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
