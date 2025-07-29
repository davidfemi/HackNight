import React from 'react'
import './About.css'

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about-content">
          <h2 className="about-title">What is Hack Night?</h2>
          
          <div className="about-intro">
            <p className="about-description">
              Hack Night is a weekly after-hours meetup of CS teammates to explore, create, tinker and collaborate on projects. 
              The current cadence is three virtual meetups and one in-person session each month.
            </p>
          </div>

          <div className="about-grid">
            <div className="about-card">
              <h3 className="card-header">🎯 Purpose</h3>
              <p>To invoke curiosity and encourage teammates to explore AI tools across both work-related and personal applications.</p>
            </div>

            <div className="about-card">
              <h3 className="card-header">🚀 Vision</h3>
              <p>To help teammates adopt AI tools in their day-to-day workflows.</p>
            </div>

            <div className="about-card">
              <h3 className="card-header">👥 Target Audience</h3>
              <p>Hack Night is designed for teammates that are looking to explore new technologies, grow their technical skills and work on exciting projects using AI tools.</p>
            </div>
          </div>

          <div className="structure-section">
            <h3 className="section-header">Structure</h3>
            <p className="structure-intro">Hack Night has a flexible structure that may include:</p>
            <div className="structure-list">
              <div className="structure-item">
                <span className="structure-icon">🔨</span>
                <span>Free-for-all building sessions</span>
              </div>
              <div className="structure-item">
                <span className="structure-icon">👥</span>
                <span>Pair programming</span>
              </div>
              <div className="structure-item">
                <span className="structure-icon">🎤</span>
                <span>Demos or presentations on AI tools (during in-person sessions)</span>
              </div>
              <div className="structure-item">
                <span className="structure-icon">🚀</span>
                <span>Project-specific showcases to highlight progress and experimentation</span>
              </div>
            </div>
          </div>

          <div className="participation-section">
            <h3 className="section-header">How to Join In</h3>
            <p className="participation-intro">
              Checkout our post in the #cs-ai-corner channel on Slack.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 