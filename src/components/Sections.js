import React from 'react';
import Welcome from './Sections/Welcome';
import About from './Sections/About';
import Skills from './Sections/Skills';
import Contact from './Sections/Contact';

export default function Sections() {
    return (
        <div className='col-lg-8 col-md-8 col-sm-12 scrollable-section'>
            <Welcome/>
            <About/>
            <Skills/>
            <Contact/>
        </div>
    );
}
