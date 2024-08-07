import React, {useEffect, useRef} from 'react'
import { motion, useInView,useAnimation} from 'framer-motion';
import "./styles/Projects.css"
import github from './styles/images/Github.png'
import ProjectCard from './ProjectCard';
import projects from './constants/projectsList'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default function Projects(){
    const ref = useRef(null)
    const isInView = useInView(ref, {once : true ,amount : 0.5})
    const mainControls = useAnimation()
    useEffect(()=>{
        if(isInView){
            mainControls.start("visible")
        }
    },[isInView,mainControls])
    return(
        <motion.div
        ref={ref}
        variants={{hidden : {opacity : 0,x : -50}, visible : {opacity : 1, x : 0}}}
        initial="hidden"
        animate={mainControls}
        transition={{duration : 0.5, delay : 0.1}}
        id="Projects" className='projectsContainer'>
            <h1 className='projectsTitle'>
                <img alt="githubIcon" className="gitIcon" src={github}></img>
                Projects
                <img alt="githubIcon" className="gitIcon" src={github}></img>
            </h1>
            <div className='projectDisplay'>
                <Carousel    swipeable={true}
                    draggable={true}
                    showDots={true}
                    responsive={responsive}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    transitionDuration={500}
                    containerClass="projectDisplay"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px">

                    {projects.map((project,index) =>(
                        <ProjectCard 
                            key={index}
                            title={project.title}
                            gifImage={project.imageGif}
                            image={project.image}
                            description={project.description}
                        ></ProjectCard>
                    ))}
                </Carousel>;
            </div>
        </motion.div>
        
    )
}