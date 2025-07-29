import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { teamMembers } from '../data/teamData'
import './TeamProfile.css'

const TeamProfile = () => {
  const { id } = useParams()
  const member = teamMembers.find(m => m.id === parseInt(id))

  if (!member) {
    return (
      <div className="profile-not-found">
        <div className="container">
          <h1>Team member not found</h1>
          <Link to="/" className="back-link">← Back to Team</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="team-profile">
      <div className="container">
        <Link to="/" className="back-link">← Back to Team</Link>
        
        <div className="profile-content">
          <div className="profile-image-section">
            <img 
              src={member.image} 
              alt={member.name}
              className="profile-image"
            />
          </div>
          
          <div className="profile-info">
            <h1 className="profile-name">{member.name}</h1>
            <p className="profile-role">{member.role}</p>
            <p className="profile-bio">{member.bio}</p>
            
            <div className="skills-section">
              <h3 className="skills-title">Skills & Technologies</h3>
              <div className="skills-grid">
                {member.skills.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="contact-section">
              <h3 className="contact-title">Get in Touch</h3>
              <div className="contact-links">
                {member.github && (
                  <a href={member.github} target="_blank" rel="noopener noreferrer" className="contact-link">
                    GitHub
                  </a>
                )}
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
                    LinkedIn
                  </a>
                )}
                {member.dribbble && (
                  <a href={member.dribbble} target="_blank" rel="noopener noreferrer" className="contact-link">
                    Dribbble
                  </a>
                )}
                {member.email && (
                  <a href={`mailto:${member.email}`} className="contact-link">
                    Email
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamProfile 