import React from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background"></div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-logo">
            <img 
              src="/images/Hack night.jpeg" 
              alt="Hack Night Logo"
              className="logo-image"
            />
          </div>
          <h1 className="hero-title">
            Welcome to<br />
            <span className="title-highlight">Hack Night</span>
          </h1>
          <p className="hero-subtitle">
            Every Wednesday night, our diverse team of developers, designers, and innovators 
            come together to build something amazing. From seasoned professionals to passionate 
            newcomers, we're united by our love for technology and problem-solving.
          </p>
          <div className="hero-actions">
            <Link to="/about" className="btn btn-primary">
              Learn More
            </Link>
            <Link to="/team" className="btn btn-secondary">
              Meet The Team
            </Link>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">Every Wednesday</span>
              <span className="stat-label">Weekly Meetups</span>
            </div>
            <div className="stat">
              <span className="stat-number">AI-Focused</span>
              <span className="stat-label">Technology</span>
            </div>
            <div className="stat">
              <span className="stat-number">All Levels</span>
              <span className="stat-label">Welcome</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 