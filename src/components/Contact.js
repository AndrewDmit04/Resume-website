import React, {useState,useEffect,useRef} from 'react'
import './styles/contact.css'
import locationIcon from './icons/location.png'
import { motion, useInView, useAnimation} from 'framer-motion';
import linkedIcon from './images/linkedIn.png'
import githubIcon from './images/github.png'
import mail from './images/Mail.png'

export default function Contact(){
    const locationIconStyle = {width : "30px", height : '30px'} 
    const [sucIsVisible,setSucIsVisible] = useState(false)
    const [failIsVisible, setFailIsVisible] = useState(false)
    const Smessage = {color: "lightgreen", 
                      fontFamily : "monospace", 
                      fontSize : "15px",
                      opacity : `${sucIsVisible ? '1' : '0'}`,
                      transition : "opacity 0.3s ease"}
    
    const Fmessage = {color: "red", 
                      fontFamily : "monospace", 
                      fontSize : "15px",
                      opacity : `${failIsVisible ? '1' : '0'}`,
                      transition : "opacity 0.3s ease",}
    const nameInputref = useRef(null)
    const EmailInputref = useRef(null)
    const TextInputref = useRef(null)
    
    function hide(){
        setSucIsVisible(false)
        setFailIsVisible(false)
    }
    
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "aabd80fe-5db6-4d46-8252-5ef0121601f5");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            nameInputref.current.value = ''
            EmailInputref.current.value = ''
            TextInputref.current.value = ''

            setSucIsVisible(true)
            setTimeout(hide, 2000)
        }
        else{
            setFailIsVisible(true)
            setTimeout(hide, 2000)
        }
      };
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
        variants={{hidden : {opacity : 0,y : 50}, visible : {opacity : 1, y : 0}}}
        initial="hidden"
        animate={mainControls}
        transition={{duration : 0.5, delay : 0.1}}
        id="ContactMe" className='Contact'>

                <h1> <img style={locationIconStyle} src={locationIcon}/> Contact Me <img style={locationIconStyle} src={locationIcon}/> </h1>
                <div className='contacts-cointainer'>
                    <p className='contactInfo'>
                        I am currently actively seeking out opportunities in the field of computer science. 
                        I am looking for a challenging environment where I would be able to develop myself professionally. 
                        If you have questions or collaboration opportunities or just want to connect!  feel free to get in touch, 
                        I am always available to discuss exciting opportunities or project ideas.  
                        I am very passionate about the field of computer science and I am very eager 
                        for any opportunity to work and collaborate on a dynamic team, Thank you! 
                    
                    </p>
                    <div class="contact-me">
                        <form onSubmit={onSubmit}>
                            <input className="formName"  ref={nameInputref} placeholder="Name" type="text" name="name" required/>
                            <input className="formEmail" ref={EmailInputref} placeholder="Email" type="email" name="email" required/>
                            <textarea className="formText"  ref={TextInputref} placeholder="Message" name="message" required></textarea> 
                            <button className="formButton" type="submit">Submit Form</button>
                            <p style={Smessage}><span style={{fontSize : "20px"}}>&#10003;</span> Successful message sent</p>
                            <p style={Fmessage}><span style={{fontSize : "20px"}}>X</span> Something went wrong</p>
                        </form>
                    </div>
                </div>
                <div className='links'>
                    <div className='contactLink'>
                        <a href="https://www.linkedin.com/in/andrew-dmitrievsky-3a8b6025b/"  target="_blank" 
                        className='contactIcon'>
                            <img style={{width : "100%"}} src={linkedIcon}></img>
                        </a>
                        <a href="https://www.linkedin.com/in/andrew-dmitrievsky-3a8b6025b/" target ="_blank" className='contactP'>linkedin.com/in/andrewdmit</a>
                    </div>
                    <div className='contactLink'>
                        <a href="https://github.com/AndrewDmit04" target="_blank" className='contactIcon'>
                            <img style={{width : "100%"}} src={githubIcon}></img>
                        </a>
                        <a className="contactP" href="https://github.com/AndrewDmit04" target='_blank'>github.com/AndrewDmit04</a>
                    </div>
                    <div className='contactLink'>
                        <a className='contactIcon'>
                            <img style={{width : "100%"}} src={mail}></img>
                        </a>
                        <p>AndrewDmit2021@gmail.com</p>
                    </div>
    
                </div>
                <p style={{color: "white", marginTop: "50px"}}>&copy; All rights reserved</p>

        </motion.div>
    )
}