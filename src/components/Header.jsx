import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const location = useLocation()

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <Link to="/" className="logo">
            { '<hack_night>' }
          </Link>
          <div className="nav-links">
            <Link 
              to="/" 
              className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}
            >
              Home
            </Link>
            <Link 
              to="/team" 
              className={location.pathname === '/team' || location.pathname.startsWith('/team/') ? 'nav-link active' : 'nav-link'}
            >
              Team
            </Link>
            <Link 
              to="/about" 
              className={location.pathname === '/about' ? 'nav-link active' : 'nav-link'}
            >
              About Hack Night
            </Link>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#events" className="nav-link">Events</a>
            <a href="#contact" className="nav-link">Join Us</a>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header 