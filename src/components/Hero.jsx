import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <p className="hero-tag">Data Analyst · Data Science</p>
        <h1>Rupani Aliabbas</h1>
        <p className="hero-desc">
          I turn messy data into clean dashboards and decisions people can act on.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn btn-outline">View Resume</a>
        </div>

        <div className="chips">
          <span>Python</span>
          <span>pandas</span>
          <span>Power BI</span>
          <span>Excel</span>
        </div>
      </div>

      <div className="hero-photo">
        <img src="/profile.jpg" alt="Rupani Aliabbas" />
      </div>
    </section>
  )
}

export default Hero