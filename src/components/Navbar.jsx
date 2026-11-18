import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-inner">
        <a href="#" className="logo"><span>{'<'}</span>aliabbas<span>{' />'}</span></a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar