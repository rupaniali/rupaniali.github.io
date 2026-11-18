import { useEffect, useState } from 'react'
import './Projects.css'

const projects = [
  {
    title: 'SkillBridge',
    description:
      'A full stack, trust-based hiring web application built with Next.js and Supabase.',
    tags: ['Next.js', 'Supabase', 'Full Stack'],
    image: '/projects/skillbridge.png',
    link: '#',
    details:
      'SkillBridge is a full stack, trust-based hiring web application that focuses on hiring based on real skills instead of just resumes. It is designed for tech recruiters and hiring managers struggling to verify candidate claims. It solves the problem of exaggerated resumes by requiring developers to provide verifiable proof of work, bridging the gap between what candidates say and what they can actually build.',
    highlights: [
      'Built with Next.js for the interface and Supabase as the backend.',
      'Designed as a complete full stack application, from the screens to the data behind them.',
      'Engineered a dynamic verification system that securely renders NDA case studies and real-world debugging logs to prove authentic technical experience.',
    ],
  },
  {
    title: 'LinkedIn Engagement Dashboard',
    description:
      'Dashboards and analysis of LinkedIn post engagement to find which posts perform best.',
    tags: ['Power BI', 'Python', 'pandas'],
    image: '/projects/linkedin.png',
    link: '#',
    details:
      'During my Data Analyst internship at Equitec, I worked on LinkedIn post engagement data, cleaning it and building dashboards to understand which posts performed best.',
    highlights: [
      'Cleaned and organised raw post data using Excel, Python and pandas.',
      'Built dashboards that make post performance easy to compare.',
      'Took raw LinkedIn data from messy sheets to a finished Power BI dashboard, handling cleaning, analysis and presentation end to end.',
    ],
  },
  {
    title: 'Support Ticket Segregation',
    description:
      'A Python script that sorts support tickets into categories using keyword classification.',
    tags: ['Python', 'pandas', 'Automation'],
    image: '/projects/tickets.png',
    link: '#',
    details:
      'A Python script that reads support tickets and sorts each one into an issue category using keyword classification. The output is a summary table showing the ticket count and percentage for every category.',
    highlights: [
      'Keyword rules decide which category each ticket belongs to.',
      'A summary table shows the ticket count and share of the total for each category.',
      'Built a keyword-based classifier in Python and pandas that sorts around 900 tickets into categories automatically.',
    ],
  },
]

function Projects() {
  const [selected, setSelected] = useState(null)
  const [zoomImage, setZoomImage] = useState(null)

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') {
        if (zoomImage) setZoomImage(null)
        else setSelected(null)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [zoomImage])

  useEffect(() => {
    document.body.style.overflow = selected || zoomImage ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [selected, zoomImage])

  function openZoom(project) {
    setZoomImage({ src: project.image, alt: project.title })
  }

  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      <p className="section-subtitle">A collection of analyses and builds</p>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            {project.image ? (
              <button
                type="button"
                className="project-img-btn"
                onClick={() => openZoom(project)}
                aria-label={`Enlarge screenshot of ${project.title}`}
              >
                <img src={project.image} alt={project.title} className="project-img" />
                <span className="zoom-hint">Click to enlarge</span>
              </button>
            ) : (
              <div className="project-placeholder">Screenshot coming soon</div>
            )}

            <h3>{project.title}</h3>
            <p className="project-desc">{project.description}</p>

            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <button
              type="button"
              className="btn btn-primary project-btn"
              onClick={() => setSelected(project)}
            >
              Tell me more
            </button>
          </div>
        ))}
      </div>

      {selected && (
        <div className="modal-backdrop" onClick={() => setSelected(null)}>
          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-label={selected.title}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close"
              onClick={() => setSelected(null)}
              aria-label="Close"
            >
              &times;
            </button>

            <h3>{selected.title}</h3>

            <div className="project-tags">
              {selected.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            {selected.image && (
              <button
                type="button"
                className="project-img-btn"
                onClick={() => openZoom(selected)}
                aria-label={`Enlarge screenshot of ${selected.title}`}
              >
                <img src={selected.image} alt={selected.title} className="project-img" />
                <span className="zoom-hint">Click to enlarge</span>
              </button>
            )}

            <p className="modal-text">{selected.details}</p>

            <h4>Highlights</h4>
            <ul>
              {selected.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            {selected.link !== '#' && (
              <a
                href={selected.link}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                View project
              </a>
            )}
          </div>
        </div>
      )}

      {zoomImage && (
        <div className="lightbox" onClick={() => setZoomImage(null)}>
          <button
            type="button"
            className="modal-close"
            onClick={() => setZoomImage(null)}
            aria-label="Close"
          >
            &times;
          </button>
          <img
            src={zoomImage.src}
            alt={zoomImage.alt}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}

export default Projects