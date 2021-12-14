// all the imports for app.js
import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Projects from './pages/Projects'
import WorkHistory from './pages/WorkHistory'
import Error from './pages/Error'
import './App.css'

// nav bar to all the different routes in the portfolio

function App() {
  return ( 
  <Router>
    <nav>
      <button classname= "home">
        <Link to= "/"> Home </Link>
        </button>
        <button classname = "about">
        <Link to='/AboutMe'> About </Link>
        </button>
        <button>
        <Link to='/projects'> Projects </Link>
        </button>
        <button>
          <Link to='/WorkHistory'>Work</Link>
        </button>
        
        

    </nav>
  {/* setting routes to different pages */}
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Projects" element={<Projects/>}/>
    <Route path="/AboutMe" element={<AboutMe/>}/>
    <Route path="/WorkHistory" element={<WorkHistory/>}/>
    <Route path="*" element={Error}/>
    </Routes>

  </Router>
  
  
  )
}

export default App
