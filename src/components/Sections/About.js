import React from 'react'
import '../styles/About.css'

export default function About(){
    return(
        <div className="card section-card m-5">
        <div className="card-body">
            <h2 className="card-title text-primary mb-4">About Me</h2>
            <p>
            Hello I'm Andrew Dmitrievsky I am currently a third-year 
            Computer Science student at the University of Texas at Dallas. 
            And so far I'm loving it! I enjoy challenging myself with difficult problems, 
            as it helps me become a better developer and programmer. Apart from school, 
            I enjoy building my projects and learning new technologies in the field of Computer Science. 
            I try to make each project more difficult to continue challenging myself and building my skill 
            set over time. I am constantly pushing my boundaries and trying to improve upon the skills that 
            I possess.
            </p>
            <div className="row">
                <div className="col-md-6 mb-4">
                    <h5 className="mb-3">Work Experience</h5>
                    
                    <div className="experience-item hover-target">
                        <span className="date-badge bg-primary text-white">May 2024 - Present</span>
                        <h6 className="company-name mb-1">iCode</h6>
                        <div className="fw-bold mb-1">Programing Instructor</div>
                        <p className="mb-0 text-muted">Teaching and Mentortring students in proggraming</p>
                    </div>
                </div>

                <div className="col-md-6">
                    <h5 className="mb-3">Education</h5>
                    
                    <div className="education-item hover-target">
                        <span className="date-badge text-white" style={{backgroundColor: "Orange"}}>2022 - 2026</span>
                        <h6 className="school-name mb-1">University of Texas at Dallas</h6>
                        <div className="fw-bold mb-2">BS in Computer Science</div>
                        <div className="d-flex align-items-center">
                            <span className="gpa-badge">GPA: 3.9/4.0</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}