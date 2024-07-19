import React, {useEffect, useRef} from 'react'
import { DeprecatedLayoutGroupContext, motion, useAnimation, useInView} from 'framer-motion';
import './styles/skills.css'
import titleIcon from './styles/images/skills.png'
import SkillCard from './skillsCard';
import skillsList from './constants/skillsList';

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
            <h1 style={{textAlign: "center",}}><img alt='title' style={titleIconStyle} src={titleIcon}/> Skills and Technologies <img alt='title' style={titleIconStyle} src={titleIcon}/></h1>
            <div className='skills-grid'>
                {skillsList.map((skill,index) =>(
                    <SkillCard id={index} skillName={skill.skillName} image={skill.img}></SkillCard>
                ))}
            </div>
        </motion.div>
    )
}