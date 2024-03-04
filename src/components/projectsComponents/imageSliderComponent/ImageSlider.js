import React,{useState} from 'react'
import Arrow from './arrowleft.png'
import './imageSlider.css'

export default function ImageSlider({projectImages, descriptions}){
    const [imageIndex, setImageIndex] = useState(0)
    const [fade, setFade] = useState(false)
    const [isChanging, setIsChaning] = useState(false)

    function sleep(ms){
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    async function changeImage(direction){
        if(isChanging === false){
            setIsChaning(true)
            setFade(true)
            await sleep(400);
            if(direction === 0){
                if(imageIndex - 1 < 0){
                    setImageIndex(projectImages.length -1)
                }
                else{
                    setImageIndex(imageIndex -1)
                }
            }
            else{
                if(imageIndex + 1 === projectImages.length){
                    setImageIndex(0)
                }
                else{
                    setImageIndex(imageIndex + 1)
                }
            }
            await sleep(100)
            setFade(false) 
            setIsChaning(false)
        } 

    }

    return(
        <div className='frame'>
            <div className='slides'>
                <img className={fade ? 'showImage fade' : 'showImage'} src={projectImages[imageIndex]}/>
                <button className='arrow-left' onClick={()=>(changeImage(0))}>
                    <img src={Arrow}/>
                </button>
                <button className='arrow-right' onClick={()=>(changeImage(1))}>
                    <img src={Arrow}/>
                </button>
                <h1 className={fade ? 'description fade' : "description"}>{descriptions[imageIndex]}</h1>
            </div>


        </div>
    )
}

