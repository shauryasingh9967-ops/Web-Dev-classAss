import { useState } from "react"
import { NavLink } from "react-router-dom"
import "../style/Navbar.css"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="nav-inner">

        <NavLink to="/" className="nav-logo">
          <span className="logo-dot"></span>
          MyApp
        </NavLink>

        <ul className="nav-links">
          <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
          <li><NavLink to="/hollywood" className={({ isActive }) => isActive ? "active" : ""}>Hollywood</NavLink></li>
          <li><NavLink to="/bollywood" className={({ isActive }) => isActive ? "active" : ""}>Bollywood</NavLink></li>
          <li><NavLink to="/technology" className={({ isActive }) => isActive ? "active" : ""}>Technology</NavLink></li>
          <li><NavLink to="/food" className={({ isActive }) => isActive ? "active" : ""}>Food</NavLink></li>
          <li><NavLink to="/fitness" className={({ isActive }) => isActive ? "active" : ""}>Fitness</NavLink></li>
        </ul>

        <button
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>

      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
        <NavLink to="/hollywood" onClick={() => setIsOpen(false)}>Hollywood</NavLink>
        <NavLink to="/bollywood" onClick={() => setIsOpen(false)}>Bollywood</NavLink>
        <NavLink to="/technology" onClick={() => setIsOpen(false)}>Technology</NavLink>
        <NavLink to="/food" onClick={() => setIsOpen(false)}>Food</NavLink>
        <NavLink to="/fitness" onClick={() => setIsOpen(false)}>Fitness</NavLink>
      </div>
    </nav>
  )
}

export default Navbar
