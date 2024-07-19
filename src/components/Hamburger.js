import React, {useState} from 'react'
import SideBar from './SideBar'
import "./styles/hamburger.css"
export default function Hamburger(){
    
    const [active,setActive] = useState(false)
    function changesState(){
        setActive(prev => !prev)
    }
    
    return(
        <div>   
            <SideBar isRendered={active} setActive={setActive}/>
            <div className="hamburgerMenu" onClick={changesState}>
                <span className={active ? 'bar1' : ''}></span>
                <span className={active ? 'bar2' : ''}></span>
                <span className={active ? 'bar3' : ''}></span>
            </div>
        </div>
    )
}