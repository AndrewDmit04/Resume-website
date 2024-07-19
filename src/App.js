import React from 'react'
import './App.css';
import Landing from './components/Landing'
import Hamburger from './components/Hamburger'
import AboutMe from './components/AboutMe';
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};



export default function App() {
  return (
    <div className="App">
      <Hamburger/>
      <Landing/>
      <AboutMe/>
      <Projects/>
      <Skills/>
      <Contact/>
      <div>
      <Carousel responsive={responsive}>
                <div style={{color:"red",}}>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
                <div>Item 4</div>
            </Carousel>;
      </div>
    </div>
  );
}

