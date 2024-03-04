import React from 'react'
import exitIcon from './projectImages/Vector.png'
import ImageSlider from './imageSliderComponent/ImageSlider'
import './projectStyles/SecurityCamera.css'
import cloudImage from './projectImages/cloud.png'
import projectImage from './securityImages/SecurityCam.png'
import projectImage2 from './securityImages/SecurityCam2.png'
import projectImage3 from './securityImages/SecurityCam3.png'
import projectImage4 from './securityImages/SecurityCam4.png'
const images = [projectImage, projectImage3,projectImage4,projectImage2]
const descriptions = ["main page", "dowloadible videos", "all captured faces", "side bar for selection"] 
export default function SecurityCamera({setPopped}){
    function close(){
        setPopped(false)
    }
    return(
        <div>
            <div className='popUp'>
                <header className='popUpHeaders'>
                    <h1 className='projectTitle'>
                        <img src={cloudImage}/>
                        <span style={{color: 'white'}}> Cloud</span> Security camera
                    </h1>
                    <img className='exitImage' onClick={()=>close()} src={exitIcon}/>
                </header>
                <div className='popMain'>
                    <div className='row1'>
                        <ImageSlider projectImages={images} descriptions={descriptions}/>
                    </div>
                    <div className='row2'>
                        <div className='row2Main'>
                            <h1>About project</h1>
                            <p>
                                This project employes a front-end React app,
                                and a back-end Python Flask app to deliver a live feed
                                over the local network. It also has a file manegment System
                                which stores and records videos which can be accessed through the
                                front end. This project tought me how to make a dynamic React websites
                                that has the ability to dynamacally render objects based on the response
                                from the back-end. 

                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}