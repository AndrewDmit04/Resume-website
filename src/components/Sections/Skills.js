import React, { useState } from 'react';
import '../styles/Skills.css';
import skillsList from '../constants/skills'
import Section from './skills/Section';
export default function Skills() {
    
    const [activeIndex, setActiveIndex] = useState(0); // State to track the active skill category

    // Handle skill category click event to toggle category
    const handleCategoryClick = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
    };
    
    return (
        <div className="card m-5 section-card">
            <div className="card-body">
                <h2 className="card-title text-primary mb-4">Skills</h2>
                    {skillsList.map((n,i) => 
                        <Section 
                            SectionName={n.Section} 
                            Skills={n.skills}
                            activeIndex={activeIndex}
                            handleCategoryClick={handleCategoryClick}
                            index={i}
                            key={i}
                            />) 
                    }
            </div>
        </div>
    );
}
