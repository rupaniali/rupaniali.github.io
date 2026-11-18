import { useState } from 'react'
import './Contact.css'

const FORM_URL = 'https://formspree.io/f/mgakkvey'

function Contact() {
  const [status, setStatus] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    setStatus('sending')

    try {
      const res = await fetch(FORM_URL, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section">
      <h2 className="section-title">Contact Me</h2>
      <p className="section-subtitle">Let's talk about data</p>

      <div className="contact-grid">
        <div className="contact-info">
          <h3>Rupani Aliabbas</h3>

          <div className="contact-item">
            <span>Email</span>
            <a href="mailto:rupanialiabbas6@gmail.com">rupanialiabbas6@gmail.com</a>
          </div>

          <div className="contact-item">
            <span>Phone</span>
            <a href="tel:+918149431220">+91 8149431220</a>
          </div>

          <div className="contact-item">
            <span>Find me at</span>
            <div className="contact-links">
              <a
                href="https://www.linkedin.com/in/aliabbas-rupani-4182b9430?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/rupaniali"
                target="_blank"
                rel="noreferrer"
  >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Your Name
            <input type="text" name="name" placeholder="Your name" required />
          </label>
          <label>
            Email Address
            <input type="email" name="email" placeholder="you@example.com" required />
          </label>
          <label>
            Subject
            <input type="text" name="subject" placeholder="What is this about?" />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" placeholder="Your message here..." required></textarea>
          </label>

          <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p className="form-status form-success">Thanks! Your message has been sent.</p>
          )}
          {status === 'error' && (
            <p className="form-status form-error">Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact