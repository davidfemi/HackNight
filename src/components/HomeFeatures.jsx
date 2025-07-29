import React from 'react'
import { Link } from 'react-router-dom'
import './HomeFeatures.css'

const HomeFeatures = () => {
  return (
    <section className="home-features">
      <div className="container">
        <div className="features-header">
          <h2 className="features-title">Why Join Hack Night?</h2>
          <p className="features-subtitle">
            Discover what makes our weekly meetups special
          </p>
        </div>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3 className="feature-title">Innovation Focus</h3>
            <p className="feature-description">
              Explore cutting-edge AI tools and emerging technologies in a collaborative environment.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🛠️</div>
            <h3 className="feature-title">Hands-On Learning</h3>
            <p className="feature-description">
              Build real projects, experiment with new technologies, and learn through doing.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🌟</div>
            <h3 className="feature-title">Skill Growth</h3>
            <p className="feature-description">
              Advance your technical skills while receiving mentorship and peer support.
            </p>
          </div>
        </div>

        <div className="cta-section">
          <h3 className="cta-title">Ready to Get Started?</h3>
          <p className="cta-description">
            Join us every Wednesday night and be part of something amazing.
          </p>
          <Link to="/about" className="cta-button">
            Learn How to Join
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HomeFeatures 