import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'

function App() {

  return (
    <>
      <div className="container">
        <Navbar />
        <HeroSection />
      </div>
    </>
  )
}

export default App
