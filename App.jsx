import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Hollywood from './components/Hollywood'
import Bollywood from './components/Bollywood'
import Technology from './components/Technology'
import Food from './components/Food'
import Fitness from './components/Fitness'
import Navbar from './components/Navbar'
import Details from './components/Details'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hollywood" element={<Hollywood />} />
        <Route path="/bollywood" element={<Bollywood />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/food" element={<Food />} />
        <Route path="/fitness" element={<Fitness />} />
        <Route path='/post/:id' element={<Details />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
