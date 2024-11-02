import React,{useEffect} from 'react'
import Skill from './Skill'

export default function Section({SectionName, Skills, activeIndex,handleCategoryClick, id, index}){
    useEffect(() => {
        const animateSkillBars = () => {
            const skillBars = document.querySelectorAll('.skill-progress');
            skillBars.forEach((bar) => {
                const width = bar.getAttribute('data-width');
                
                bar.style.transition = 'none'; // Remove transition to reset it
                bar.style.width = '0%'; // Set initial width to 0%
                // Apply the transition to animate to the actual width
                setTimeout(() => {
                    bar.style.transition = 'width 1s ease-in-out';
                    bar.style.width = `${width}%`;
                }, 200);
            });
        };
        // Call the animation function whenever the active category changes
        animateSkillBars();
    }, [activeIndex]);
    
    return(
        <div id={id} className="skill-category" onClick={() => handleCategoryClick(index)}>
        <div className="skill-header">
            <h5 className="mb-0">{SectionName}</h5>
            <i>{activeIndex === index ? '▲' : '▼'}</i>
        </div>
        <div className={activeIndex === index ? 'seen' : 'skill-content'}>
            <div className="mt-3">
                {Skills.map((n,i) => <Skill id={i} Name={n.skillName} img={n.img} Percent={n.percent}/>)}
            </div>
        </div>
    </div>
    )
}