import React from 'react'
import '../styles/About.css'

export default function About(){
    return(
        <div class="card section-card m-5">
        <div class="card-body">
            <h2 class="card-title text-primary mb-4">About Me</h2>
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
            <div class="row">
                <div class="col-md-6 mb-4">
                    <h5 class="mb-3">Work Experience</h5>
                    
                    <div class="experience-item hover-target">
                        <span class="date-badge bg-primary text-white">May 2024 - Present</span>
                        <h6 class="company-name mb-1">Icode</h6>
                        <div class="fw-bold mb-1">Programing Instructor</div>
                        <p class="mb-0 text-muted">Teaching and Mentortring students in proggraming</p>
                    </div>
                </div>

                <div class="col-md-6">
                    <h5 class="mb-3">Education</h5>
                    
                    <div class="education-item hover-target">
                        <span class="date-badge text-white" style={{backgroundColor: "Orange"}}>2022 - 2026</span>
                        <h6 class="school-name mb-1">University of Texas at Dallas</h6>
                        <div class="fw-bold mb-2">BS in Computer Science</div>
                        <div class="d-flex align-items-center">
                            <span class="gpa-badge">GPA: 3.9/4.0</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}