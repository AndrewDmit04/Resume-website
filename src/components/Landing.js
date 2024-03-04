import React from 'react'
import {useState, useEffect} from 'react'
import "./styles/landing.css"
import ParticleComponent from './ParticleComponent';
import mask from './styles/images/mask.png'

export default function Landing(){
    let andrewStyle = {color : "#3322b6" }



    const [currentText, setCurrentText] = useState({part1: '', part2 : '',  part3 : ""});
    const [currentIndex, setCurrentIndex] = useState({partt1: 0, partt2 : 0 , partt3 : 0});
    const [cursorStyle, setCursorStyle] = useState({color : "#5C84B2"})
    let text1 = "HI I'M "
    let text2 = "ANDREW "
    let text3 = "DMITRIEVSKY"
    let delay = 100;

    useEffect(() => {
        if (currentIndex.partt1 < text1.length) {
            const timeout = setTimeout(() => {
            setCurrentText(prevText => ({...prevText, part1 : prevText.part1 + text1[currentIndex.partt1]}));
            setCurrentIndex(prevIndex => ({...prevIndex, partt1 : prevIndex.partt1 + 1}));
          }, delay);
          return () => clearTimeout(timeout);
        }
        if (currentIndex.partt2 < text2.length) {
            const timeout = setTimeout(() => {
            setCurrentText(prevText => ({...prevText, part2 : prevText.part2 + text2[currentIndex.partt2]}));
            setCurrentIndex(prevIndex => ({...prevIndex, partt2 : prevIndex.partt2 + 1}));
          }, delay);
          setCursorStyle({color: '#3322b6'})
          return () => clearTimeout(timeout);
        }
        if (currentIndex.partt3 < text3.length) {
            const timeout = setTimeout(() => {
            setCurrentText(prevText => ({...prevText, part3 : prevText.part3 + text3[currentIndex.partt3]}));
            setCurrentIndex(prevIndex => ({...prevIndex, partt3 : prevIndex.partt3 + 1}));
          }, delay);
          setCursorStyle({color: '#5C84B2'})
          return () => clearTimeout(timeout);
        }
        if(currentIndex.partt3  == text3.length){
            setCursorStyle({display : 'None'})
        }

      }, [currentIndex,currentText]);

    return(
        <div id="Home" className='home'>
            <ParticleComponent/>
            <div className='Landing'>
                <h1 className="welcomeText">{currentText.part1}<span style={andrewStyle}>{currentText.part2}
                </span>{currentText.part3}
                <span style={cursorStyle} className='cursor'>|</span>
                </h1>
            </div>

        </div>
    )
}