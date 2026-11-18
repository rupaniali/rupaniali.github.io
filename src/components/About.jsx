import './About.css'

function About() {
  return (
    <section id="about" className="section">
      <h2 className="section-title">About Me</h2>
      <p className="section-subtitle">A little about who I am</p>

      <div className="about-grid">
        <div className="about-text">
          <p>
            I'm a Data Analyst and Data Science student who enjoys turning raw, messy data into clear insights. I work with Python, pandas, Power BI and Excel to clean data, find patterns and build dashboards that people can actually use.

            During my recent Data Analyst internship at Equitec, I worked on real business data, automated workflows and learned how accurate analysis helps teams make better decisions.
          </p>
          <p>
            Beyond pure analysis, I am also passionate about building scalable platforms that manage data. I recently engineered SkillBridge, a full stack trust based hiring web application built with Next.js and Supabase, showcasing my ability to not just analyze data but build the systems that drive it.
          </p>
        </div>

        <div className="about-card">
          <h3>Quick Facts</h3>
          <ul>
            <li><span>Focus</span> Data Analytics, Data Science & Web Platforms</li>
            <li><span>Tools</span> Python, pandas, Power BI, Excel, Next.js, Supabase</li>
            <li><span>Experience</span> Data Analyst Intern</li>
            <li><span>Education</span> Data Science</li>
            <li><span>Based in</span> Mumbai, India</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About