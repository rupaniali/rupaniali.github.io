import { useEffect, useState } from 'react'
import './GitHubActivity.css'

const USERNAME = 'rupaniali'
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function GitHubActivity() {
  const [data, setData] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    let cancelled = false

    fetch(`https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`)
      .then((res) => {
        if (!res.ok) throw new Error('failed')
        return res.json()
      })
      .then((json) => {
        if (!cancelled) setData(json)
      })
      .catch(() => {
        if (!cancelled) setError(true)
      })

    return () => {
      cancelled = true
    }
  }, [])

  const weeks = []
  const months = []
  let total = 0

  if (data) {
    const days = data.contributions
    total = days.reduce((sum, d) => sum + d.count, 0)

    const firstDay = new Date(days[0].date).getUTCDay()
    const cells = [...Array(firstDay).fill(null), ...days]
    for (let i = 0; i < cells.length; i += 7) {
      weeks.push(cells.slice(i, i + 7))
    }

    let lastMonth = -1
    let lastCol = -10
    weeks.forEach((week, col) => {
      const firstReal = week.find((d) => d)
      if (!firstReal) return
      const m = new Date(firstReal.date).getUTCMonth()
      if (m !== lastMonth) {
        if (col - lastCol >= 3) {
          months.push({ col, label: MONTHS[m] })
          lastCol = col
        }
        lastMonth = m
      }
    })
  }

  return (
    <section className="section">
      <h2 className="section-title">GitHub Activity</h2>
      <p className="section-subtitle">My recent contributions</p>

      {error && <p className="gh-note">Could not load GitHub activity right now.</p>}
      {!data && !error && <p className="gh-note">Loading...</p>}

      {data && (
        <div className="gh-card">
          <div className="gh-scroll">
            <div className="gh-inner">
              <div
                className="gh-months"
                style={{ gridTemplateColumns: `repeat(${weeks.length}, 12px)` }}
              >
                {months.map((m) => (
                  <span key={m.col} style={{ gridColumnStart: m.col + 1 }}>
                    {m.label}
                  </span>
                ))}
              </div>

              <div className="gh-grid">
                {weeks.map((week, wi) => (
                  <div className="gh-week" key={wi}>
                    {week.map((day, di) =>
                      day ? (
                        <span
                          key={day.date}
                          className={`gh-day lvl${day.level}`}
                          title={`${day.count} contributions on ${day.date}`}
                        ></span>
                      ) : (
                        <span key={`empty-${di}`} className="gh-day gh-empty"></span>
                      )
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="gh-footer">
            <span>{total} contributions in the last year</span>
            <div className="gh-legend">
              <span>Less</span>
              <span className="gh-day lvl0"></span>
              <span className="gh-day lvl1"></span>
              <span className="gh-day lvl2"></span>
              <span className="gh-day lvl3"></span>
              <span className="gh-day lvl4"></span>
              <span>More</span>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default GitHubActivity