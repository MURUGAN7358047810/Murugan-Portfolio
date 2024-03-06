import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import H1 from './components/H1'
import About from './components/About'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'

function App() {
 

  return (
    <>
      <div>
      
      <Header />
      <H1 />
      <About />
      <Projects />
      <Resume />
      <Contact />
      
      </div>
    </>
  )
}

export default App
 