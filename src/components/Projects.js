import React, {useState,useEffect, useRef} from 'react'
import { motion, useInView,useAnimation} from 'framer-motion';
import "./styles/Projects.css"
import github from './styles/images/Github.png'
import SecurityCamera from './projectsComponents/SecurityCamera'
import Movies from './projectsComponents/Movies'
import reactIcon from './icons/react.png'
import javaIcon from './icons/java.png'
export default function Projects(){
    const reactStyle = {color: 'cyan'}
    const javaStyle = {color : 'orange'}
    const iconStyle = {width : '19px', height : '19px', transform : "translateY(3px)"}
    
    const [lines, setLines] = useState({line1 : "", line2: "", line3: ""})
    const [blocks, setBlocks] = useState({block1 : "D" , block2 :"", block3:""})
    const [fineshed,setFinished] = useState(true)

    const [isPopped, setPopped] = useState(false)
    const delay = 50

    const ProjectsList = [<SecurityCamera setPopped={setPopped}/>, <Movies setPopped={setPopped}/>]
    const [currentProject, setCurrentProject] = useState(0)
    function sleep(ms){
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    async function type(event){
        if(fineshed){
            if(event.target.id === "Security-camera"){
                setCurrentProject(0)
            }
            if(event.target.id === "Movies"){
                setCurrentProject(1)
            }
            setFinished(false)
            setLines({line1 : "", line2: "", line3: ""})
            setBlocks({block1 : "D" , block2 :"", block3:""})
            const str1 = "cd " + event.target.id
            const str2 = `run ${event.target.id}.ssh`
            for(let i = 0; i <= str1.length; i++){
                setLines(prev => ({...prev, line1 : str1.substring(0,i)}))
                await sleep(delay)
            }
            setLines(prev => ({...prev, line2 : `home ${event.target.id} ~ % `}))
            setBlocks(prev => ({...prev, block1 : "" , block2: "D"}))
            for(let i = 0; i < str2.length; i++){
                setLines(prev => ({...prev, line2 : prev.line2 + str2[i]}))
                await sleep(delay)
            }
            let percentDone = 0;
            setLines(prev => ({...prev, line3: "-----------------------------------------------------"}))
            setBlocks(prev => ({...prev, block1 : "" , block2: ""}))
            for(let i = 0; i < 50; i++){
                setLines(prev => ({...prev,line3 : (prev.line3.substring(0,i) + '#' + prev.line3.substring(i +1,prev.line3.length -3)) + ` ${percentDone}%`}))
                percentDone += 2;
                await sleep(10)
            }
            setFinished(true)
            setPopped(true)
        }
        
    }   

    const ref = useRef(null)
    const isInView = useInView(ref, {once : true ,amount : 0.5})
    const mainControls = useAnimation()
    useEffect(()=>{
        if(isInView){
            mainControls.start("visible")
        }
    },[isInView])
    return(
        <motion.div 
        ref={ref}
        variants={{hidden : {opacity : 0,x : -50}, visible : {opacity : 1, x : 0}}}
        initial="hidden"
        animate={mainControls}
        transition={{duration : 0.5, delay : 0.1}}
        id="Projects" className='projectsContainer'>
            {
                isPopped ? 
                <div className='overLay'>
                    {ProjectsList[currentProject]}
                </div> : null
            }
            <h1 className='projectsTitle'>
                <img  className="gitIcon" src={github}></img>
                Projects
                <img className="gitIcon" src={github}></img>
            </h1>
            <div className='projects'>
                <div className='col1Project'>
                    <ul className='projectsList'>
                        
                        <li className='projectButton'><button id="Security-camera" onClick={type}>
                            <img style={iconStyle} src={reactIcon}/>
                            <span style={reactStyle}> React</span> Cloud security camera System</button></li>
                        
                        <li><button className='projectButton' id="Movies" onClick={type}>
                            <img style={iconStyle} src={javaIcon}/>
                            <span style={javaStyle}> Java</span> movie theatre Reservesion System</button></li>
                    </ul>
                </div>
                
                <div className='col2Project'>
                    <p className='commandLine'>
                        home ~ % {lines.line1}<span className='block'>{blocks.block1}</span>
                        <p>{lines.line2}<span className='block'>{blocks.block2}</span></p>
                        <p style={{overflow : "hidden"}}>{lines.line3}<span className='block'>{blocks.block3}</span></p>
                    </p>
                </div>
            </div>
        </motion.div>
    )
}