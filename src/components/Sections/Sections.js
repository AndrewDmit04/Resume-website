import React from 'react';
import Welcome from './Welcome';
import About from './About';
import Skills from './Skills';

export default function Sections() {
    return (
        <div className='col-lg-8 scrollable-section'>
            <Welcome/>
            <About/>
            <Skills/>
        </div>
    );
}
