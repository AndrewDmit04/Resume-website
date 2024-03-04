import React from 'react'
import exitIcon from './projectImages/Vector.png'
import ImageSlider from './imageSliderComponent/ImageSlider'
import './projectStyles/SecurityCamera.css'
import cloudImage from './projectImages/java.png'
import pic1 from './moviesPhotos/pic1.png'
import pic2 from './moviesPhotos/pic2.png'
import pic3 from './moviesPhotos/pic3.png'
import pic4 from './moviesPhotos/pic4.png'
import pic5 from './moviesPhotos/pic5.png'
const images = [pic1,pic2,pic3,pic4,pic5]
const descriptions = ["Selecting seats menu", "Reserving seats", "Best avalible seats", "No seats avalible", "Exiting menu"] 
export default function SecurityCamera({setPopped}){
    function close(){
        setPopped(false)
    }
    return(
        <div>
            <div className='popUp'>
                <header className='popUpHeaders'>
                    <h1 className='projectTitle'>
                        <img style={{width: "4%"}} src={cloudImage}/>
                        <span style={{color: 'orange'}}> Java</span> Movie theatre Reservesion System
                    </h1>
                    <img className='exitImage' onClick={()=>close()} src={exitIcon}/>
                </header>
                <div className='popMain'>
                    <div style={{height : '20%'}} className='row1'>
                        <ImageSlider projectImages={images} descriptions={descriptions}/>
                    </div>
                    <div className='row2'>
                        <div className='row2Main'>
                            <h1>About project</h1>
                            <p>
                                This project employes a doubly linked list, to store 
                                a movie theatre seats and allows the user to make a 
                                reservesions based on avalible lists, it also suggests 
                                seats to the user if the user selects unavalible seats.
                                At the end of the program it will calculate the total sales 
                                based on all the seats taken. What I learned during this project 
                                is how to make an algorigtm that will find k amount of seats closest 
                                to the center of the doubly linked list data structure. As well as 
                                data manupultion using pointers in java. 

                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}