import './Skills.css'

const skillGroups = [
  {
    title: 'Data Science & Analytics',
    skills: ['Python', 'pandas', 'Power BI', 'Excel'],
  },
  {
    title: 'Web Development',
    skills: ['React', 'Next.js', 'Supabase'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code'],
  },
]

function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills</h2>
      <p className="section-subtitle">Tools I use to turn data into decisions</p>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-card" key={group.title}>
            <h3>{group.title}</h3>
            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills