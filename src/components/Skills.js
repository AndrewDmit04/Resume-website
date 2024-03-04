import React, {useState,useEffect, useRef} from 'react'
import { motion, useAnimation, useInView} from 'framer-motion';
import './styles/skills.css'
import titleIcon from './styles/images/skills.png'
import python from './icons/python.png'
import react from './icons/react.png'
import C from './icons/C.png'
import c from './icons/c++.png'
import css from './icons/css.png'
import html from './icons/html.png'
import java from './icons/java.png'
import javascript from './icons/javascript.png'

export default function Skills(){
    const titleIconStyle = {width : "7%", transform: "translateY(4px)"}
    const iconStyle = {width : "100%", marginLeft : '20px'}
    
    const ref = useRef(null)
    const isVisible = useInView(ref, { once : true ,amount : 0.5})
    const maintControls = useAnimation()
    useEffect(() =>{
        if(isVisible){
            maintControls.start("visible")
        }
    },[isVisible])
    return(
        <motion.div ref={ref}
        variants={{hidden : {opacity : 0,y : -80}, visible : {opacity : 1, y : 0}}}
        initial="hidden"
        animate={maintControls}
        transition={{duration : 0.5, delay : 0.1}}
        id="Skills" className='skills'>
            <h1 style={{textAlign: "center",}}><img style={titleIconStyle} src={titleIcon}/> Skills and Technologies <img  style={titleIconStyle} src={titleIcon}/></h1>
            <div className='skills-grid'>
                <div class="skill"> 
                    <div className='icon'>
                        <img src={python} style={iconStyle}/>
                    </div>
                    <div className='text'>
                        Python
                    </div>
                </div>
                
                <div class="skill"> 
                    <div className='icon'>
                        <img src={java} style={iconStyle}/>
                    </div>
                    <div className='text'>
                        Java
                    </div>
                </div>
                <div class="skill"> 
                    <div className='icon'>
                        <img src={c} style={iconStyle}/>
                    </div>
                    <div className='text'>
                        C++
                    </div>
                </div>

                <div class="skill"> 
                    <div className='icon'>
                        <img src={react} style={iconStyle}/>
                    </div>
                    <div className='text'>
                        React
                    </div>
                </div>
                <div class="skill"> 
                    <div className='icon'>
                        <img src={javascript} style={iconStyle}/>
                    </div>
                    <div className='text'>
                        JavaScript
                    </div>
                </div>
                <div class="skill"> 
                    <div className='icon'>
                        <img src={html} style={iconStyle}/>
                    </div>
                    <div className='text'>
                        HTML
                    </div>
                </div>
                <div class="skill"> 
                    <div className='icon'>
                        <img src={C} style={iconStyle}/>
                    </div>
                    <div className='text'>
                        C
                    </div>
                </div>
                <div class="skill"> 
                    <div className='icon'>
                        <img src={css} style={iconStyle}/>
                    </div>
                    <div className='text'>
                        CSS
                    </div>
                </div>
            </div>

        </motion.div>
    )
}