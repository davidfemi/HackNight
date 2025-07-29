import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Team from './pages/Team'
import TeamProfile from './pages/TeamProfile'
import AboutPage from './pages/About'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/team/:id" element={<TeamProfile />} />
        </Routes>
      </main>
    </div>
  )
}

export default App 