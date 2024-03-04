import React from 'react'
import './styles/sidebar.css'
export default function SideBar({isRendered}){
    const logoStyle = {color:'#3322b6'}
    const logoStyle1 = {color: 'beige'}
    
    
    const scrollToComponent = (componentId) => {
        const element = document.getElementById(componentId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
    
    return(
        <div className={isRendered ? 'sideBarContainer sideBarContainer-slide' : 'sideBarContainer' }>
            <div className={isRendered ? 'menuContainer' : 'menuContainer hide'}>
                <h1 className="logo"><span style={logoStyle}>A</span><span style={logoStyle1}>D</span></h1>
                <ul className='menuOptions'>
                    <li><button onClick={() => scrollToComponent("Home")}>Home</button></li>
                    <li><button onClick={() => scrollToComponent("AboutMe")}>About Me</button></li>
                    <li><button onClick={() => scrollToComponent("Projects")}>Projects</button></li>
                    <li><button onClick={() => scrollToComponent("Skills")}>Skills</button></li>
                    <li><button onClick={() => scrollToComponent("ContactMe")}>Contact Me</button></li>
                </ul>
                <p className='copyRight'>&copy; All rights reserved</p>
            </div>
        </div>
    )
}