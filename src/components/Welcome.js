import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import './styles/Welcome.css';

export default function Welcome(){
    const rainbowColors = [
        "#FF0000", // Red
        "#FF7F00", // Orange
        "#00FF00", // Green
        "#0000FF", // Blue
        "#4B0082", // Indigo
        "#9400D3"  // Violet
    ];
    const textRef = useRef(null);

    const fireConfetti = () => {
        const rect = textRef.current.getBoundingClientRect();

        // Calculate origin based on text position
        const x = rect.left + rect.width / 2; // Center of the text element
        const y = rect.top + rect.height / 2; // Center of the text element

        // Fire confetti
        confetti({
            particleCount: 100,
            spread: 300,
            origin: { x: x / window.innerWidth, y: y / window.innerHeight }, // Normalize to canvas coordinates
        });
    };

    const [currentText, setCurrentText] = useState({ part1: '', part2: '', part3: "" });
    const [currentIndex, setCurrentIndex] = useState({ partt1: 0, partt2: 0, partt3: 0 });
    const [cursorStyle, setCursorStyle] = useState({ color: "#5C84B2" });
    const [fired, setFired] = useState(false);
    const [isRainbow, setIsRainbow] = useState(true); // State to trigger rainbow effect
    let text1 = "Hello I'm ";
    let text2 = "Andrew ";
    let text3 = "Dmitrievsky";
    let delay = 100;

    useEffect(() => {
        if (currentIndex.partt1 < text1.length) {
            const timeout = setTimeout(() => {
                setCurrentText(prevText => ({ ...prevText, part1: prevText.part1 + text1[currentIndex.partt1] }));
                setCurrentIndex(prevIndex => ({ ...prevIndex, partt1: prevIndex.partt1 + 1 }));
            }, delay);
            return () => clearTimeout(timeout);
        }

        if (currentIndex.partt2 < text2.length) {
            const timeout = setTimeout(() => {
                setCurrentText(prevText => ({ ...prevText, part2: prevText.part2 + text2[currentIndex.partt2] }));
                setCurrentIndex(prevIndex => ({ ...prevIndex, partt2: prevIndex.partt2 + 1 }));
            }, delay);
            return () => clearTimeout(timeout);
        }

        if (currentIndex.partt3 < text3.length) {
            if (!fired) {
                fireConfetti();
                setIsRainbow(false); // Trigger rainbow effect
                setFired(true);
            }
            const timeout = setTimeout(() => {
                setCurrentText(prevText => ({ ...prevText, part3: prevText.part3 + text3[currentIndex.partt3] }));
                setCurrentIndex(prevIndex => ({ ...prevIndex, partt3: prevIndex.partt3 + 1 }));
            }, delay);
            return () => clearTimeout(timeout);
        }

        if (currentIndex.partt3 === text3.length) {
            setCursorStyle({ display: 'none' });
            setIsRainbow(false); // Reset rainbow effect after animation
        }
    }, [currentIndex, currentText, delay, text1, text2, text3, fired]);

    // Create rainbow letters for "Andrew"
    const rainbowLetters = currentText.part2.split('').map((letter, index) => (
        <span key={index} className={isRainbow ? '' : 'Plain'} style={{ color: rainbowColors[index % rainbowColors.length] }}>
            {letter}
        </span>
    ));
    return(
        <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
            <div className="text-center">
                <h1 className="Welcome-Text">
                    {currentText.part1}
                    <span ref={textRef} className='Plain'>
                        {rainbowLetters}
                    </span>
                    {currentText.part3}
                    <span style={cursorStyle} className='cursor'>|</span>
                </h1>
            </div>
        </div>
    )
}