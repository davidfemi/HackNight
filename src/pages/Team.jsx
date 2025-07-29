import React from 'react'
import TeamGrid from '../components/TeamGrid'
import './Team.css'

const Team = () => {
  return (
    <div className="team-page">
      <div className="container">
        <div className="team-page-header">
          <h1 className="page-title">Meet The Team</h1>
          <p className="page-description">
            Get to know the amazing individuals who make Hack Night possible. 
            Click on any team member to learn more about their background and expertise.
          </p>
        </div>
      </div>
      <TeamGrid />
    </div>
  )
}

export default Team 