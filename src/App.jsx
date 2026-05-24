import React from 'react'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import './css/App.css'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>

  )
}

export default App
