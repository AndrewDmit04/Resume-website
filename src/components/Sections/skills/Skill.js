import React from 'react'


export default function Skill({img, Name,Percent, className}){
    return(
        <div>
            <div className="d-flex justify-content-between mb-1">
                <div className='flex align-items-center'>
                    <img alt={Name} className='m-1' width={30} src={img}></img>
                    <span>{Name}</span>
                </div>

                <span>{Percent}%</span>
            </div>
            <div className="skill-bar">
                <div className="skill-progress bg-primary" data-width={Percent}></div>
            </div>
        </div>
    )
}