import React, {useEffect, useRef, useState} from 'react'
import descriptionImage from './images/Andrew.jpg'
import "./styles/aboutMe.css"
import { motion, useInView, useAnimation} from 'framer-motion';

export default function AboutMe(){
    const utdStyle ={color : 'orange'}
    const computerScienceStyle = {color:'lightgreen'}
    const tennisStyle = {color: 'green'}
    const wrongStyle = {color: 'red'}
    
    const ref = useRef(null)
    const isInView = useInView(ref,{once : false,amount: 0.5})

    useEffect(() =>{
        if(isInView){
            mainControls.start("visible")
        }
    }, [isInView])
    
    const mainControls = useAnimation()
    return(
        <motion.div ref={ref} 
            variants={{hidden : {opacity : 0,y : -50}, visible : {opacity : 1, y : 0}}}
            initial="hidden"
            animate={mainControls}
            transition={{duration : 0.5, delay : 0.1}}
            id="AboutMe" className='aboutMe'>
            <div className='col1'>
                <img className='aboutMePhoto' src={descriptionImage}></img>
            </div>
            <div className='col2'>
                <h1>About me</h1>
                <p>
                Hello I'm Andrew Dmitrievsky I am currently a second-year <span style={computerScienceStyle}>Computer Science</span> student 
                    at the <span style={utdStyle}>University of Texas at Dallas</span>.
                    And so far I'm loving it! I enjoy challenging myself with difficult problems, 
                    as it helps me become a better developer and programmer.
                    Apart from school, I enjoy building my projects and learning new technologies in the 
                    field of <span style={computerScienceStyle}>Computer Science</span>. 
                    I try to make each project more difficult to continue challenging myself and building my 
                    skill set over time. I am constantly pushing my boundaries and trying to improve upon the skills that I possess.
                    <p>
                        Outside of my professional career goals I enjoy playing sports, 
                        some of my favorite sports to play are badminton, and volleyball, and my 
                        favorite sport is <span style={tennisStyle}>Tennis</span>. I also enjoy 
                        spending time with family and friends, cooking, airplanes, watching movies, 
                        as well as watching professional tennis matches (especially Rafael Nadal,"VAMOS!").
            
                    </p>

                </p>
            </div>
        </motion.div>
    )
}