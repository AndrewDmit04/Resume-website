import React from 'react'
import "./styles/Projects.css"

export default function ProjectCard({title, description, image, gifImage}){
    return(
    <div className='projectCard'>
        <div className='images'>
            <img className='profile' src={image}></img>
            <img className='gifImage' src={gifImage}></img>
        </div>
        <h1>{title}</h1>
        <h3>About</h3>
        <p>{description}</p>
    </div>
    )

}