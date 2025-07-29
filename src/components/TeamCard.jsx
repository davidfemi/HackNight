import React from 'react'
import { Link } from 'react-router-dom'
import './TeamCard.css'

const TeamCard = ({ member }) => {
  return (
    <Link to={`/team/${member.id}`} className="team-card">
      <div className="card-image-container">
        <img 
          src={member.image} 
          alt={member.name}
          className="card-image"
        />
        <div className="card-overlay">
          <span className="view-profile">View Profile</span>
        </div>
      </div>
      <div className="card-content">
        <h3 className="card-name">{member.name}</h3>
        <p className="card-role">{member.role}</p>
      </div>
    </Link>
  )
}

export default TeamCard 