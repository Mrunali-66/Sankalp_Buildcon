import Media from './Media.jsx'

export default function Hero() {
  return (
    <section id="home">
      <div className="wrap">
        <div className="hero">
          <div className="hero-copy">
            <p className="hero-est in"><s></s> Established 2012 &nbsp;·&nbsp; Pune</p>
            <h1 className="in">Building trust.<br /><em>Creating better futures.</em></h1>
            <p className="in">
              A construction and real estate development company working on residential
              projects and society redevelopment across Pune — planned carefully, built
              dependably, handed over to families who intend to stay.
            </p>
            <div className="hero-do in">
              <a href="#projects" className="btn btn-solid">Explore our projects</a>
              <a href="#contact" className="btn btn-line">Get in touch</a>
            </div>
          </div>

          <figure className="hero-figure in">
            <Media
              src="assets/hero.jpg"
              alt="Residential development by Sankalp Buildcon, Pune"
              className="panel"
            />
          </figure>
        </div>

        <dl className="titleblock">
          <div className="tb"><dt>Established</dt><dd>2012</dd></div>
          <div className="tb"><dt>Projects</dt><dd className="pending">[XX]</dd></div>
          <div className="tb"><dt>Families</dt><dd className="pending">[XX]</dd></div>
          <div className="tb"><dt>Working in</dt><dd>Old Sangvi</dd></div>
        </dl>
      </div>
    </section>
  )
}
