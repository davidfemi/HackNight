import React from 'react'
import TeamCard from './TeamCard'
import { teamMembers } from '../data/teamData'
import './TeamGrid.css'

const TeamGrid = () => {
  return (
    <section className="team-grid-section">
      <div className="container">
        <h2 className="section-title">ATTENDEES</h2>
        <div className="team-grid">
          {teamMembers.map(member => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamGrid 