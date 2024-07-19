import React from 'react'
import './App.css';
import Landing from './components/Landing'
import Hamburger from './components/Hamburger'
import AboutMe from './components/AboutMe';
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact';





export default function App() {
  return (
    <div className="App">
      <Hamburger/>
      <Landing/>
      <AboutMe/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  );
}

