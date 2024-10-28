import React, { useEffect, useState } from 'react';
import '../styles/Skills.css';

export default function Skills() {
    const [activeIndex, setActiveIndex] = useState(0); // State to manage active category

    useEffect(() => {
        const animateSkillBars = () => {
            const skillBars = document.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                const width = bar.getAttribute('data-width');
                bar.style.width = '0%'; // Reset width before animation
                setTimeout(() => {
                    bar.style.width = width + '%';
                }, 200);
            });
        };

        animateSkillBars(); // Animate skill bars on mount

        return () => {
            // Cleanup logic if necessary (e.g., remove event listeners)
        };
    }, [activeIndex]); // Run effect on activeIndex change

    const handleCategoryClick = (index) => {
        setActiveIndex(index === activeIndex ? -1 : index); // Toggle active category
    };

    return (
        <div className="card m-5 section-card">
            <div className="card-body">
                <h2 className="card-title text-primary mb-4">Skills</h2>

                <div className="skill-category" onClick={() => handleCategoryClick(0)}>
                    <div className="skill-header">
                        <h5 className="mb-0">Frontend Development</h5>
                        <i>{activeIndex === 0 ? '▲' : '▼'}</i>
                    </div>
                        <div className={activeIndex === 0 ? "seen" : "skill-content"}>
                            <div className="mt-3">
                                <div className="d-flex justify-content-between mb-1">
                                    <span>HTML/CSS</span>
                                    <span>90%</span>
                                </div>
                                <div className="skill-bar">
                                    <div className="skill-progress bg-primary" data-width="90"></div>
                                </div>

                                <div className="d-flex justify-content-between mb-1">
                                    <span>JavaScript</span>
                                    <span>85%</span>
                                </div>
                                <div className="skill-bar">
                                    <div className="skill-progress bg-primary" data-width="85"></div>
                                </div>

                                <div className="d-flex justify-content-between mb-1">
                                    <span>React</span>
                                    <span>80%</span>
                                </div>
                                <div className="skill-bar">
                                    <div className="skill-progress bg-primary" data-width="80"></div>
                                </div>
                            </div>
                        </div>
                </div>

                <div className="skill-category" onClick={() => handleCategoryClick(1)}>
                    <div className="skill-header">
                        <h5 className="mb-0">Backend Development</h5>
                        <i>{activeIndex === 1 ? '▲' : '▼'}</i>
                    </div>

                        <div className={activeIndex === 1 ? "seen" : "skill-content"}>
                            <div className="mt-3">
                                <div className="d-flex justify-content-between mb-1">
                                    <span>Node.js</span>
                                    <span>75%</span>
                                </div>
                                <div className="skill-bar">
                                    <div className="skill-progress bg-primary" data-width="75"></div>
                                </div>

                                <div className="d-flex justify-content-between mb-1">
                                    <span>Python</span>
                                    <span>70%</span>
                                </div>
                                <div className="skill-bar">
                                    <div className="skill-progress bg-primary" data-width="70"></div>
                                </div>
                            </div>
                        </div>
                </div>

                <div className="skill-category" onClick={() => handleCategoryClick(2)}>
                    <div className="skill-header">
                        <h5 className="mb-0">Other Skills</h5>
                        <i>{activeIndex === 2 ? '▲' : '▼'}</i>
                    </div>
                        <div className={activeIndex === 2 ? "seen" : "skill-content"}>
                            <div className="mt-3">
                                <div className="d-flex justify-content-between mb-1">
                                    <span>Git</span>
                                    <span>85%</span>
                                </div>
                                <div className="skill-bar">
                                    <div className="skill-progress bg-primary" data-width="85"></div>
                                </div>

                                <div className="d-flex justify-content-between mb-1">
                                    <span>Docker</span>
                                    <span>65%</span>
                                </div>
                                <div className="skill-bar">
                                    <div className="skill-progress bg-primary" data-width="65"></div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
}
