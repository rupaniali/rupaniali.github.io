import './Experience.css'

const experiences = [
  {
    role: 'Data Analyst Intern',
    company: 'Equitec Software Technology Pvt Ltd',
    period: 'Apr 2026 - Oct 2026',
    points: [
      'Built dashboards and analysed LinkedIn engagement data to find which posts performed best.',
      'Wrote Python scripts to sort support tickets into categories using keyword classification.',
      'Compared features across different websites to find what was implemented and what was missing.',
      'Cleaned and analysed project tracking data using pandas, Excel and Power BI.',
    ],
  },
]

function Experience() {
  return (
    <section id="experience" className="section">
      <h2 className="section-title">Experience</h2>
      <p className="section-subtitle">My journey so far</p>

      {experiences.map((exp) => (
        <div className="exp-grid" key={exp.company}>
          <div className="exp-card">
            <h3>{exp.role}</h3>
            <p className="exp-company">{exp.company}</p>
            <span className="exp-period">{exp.period}</span>
          </div>

          <div className="exp-card exp-points">
            <h3>Responsibilities &amp; Achievements</h3>
            <ol>
              {exp.points.map((point, index) => (
                <li key={point}>
                  <span className="exp-number">{index + 1}</span>
                  <p>{point}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Experience