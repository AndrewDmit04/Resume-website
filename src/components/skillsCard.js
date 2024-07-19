import React from 'react'


export default function SkillCard({skillName, image}){
    return(
        <div className="skill"> 
            <div className='icon'>
                <img className="iconImage" alt="python" src={image}/>
            </div>
            <div className='text'>
                {skillName}
            </div>
        </div>
    )
}