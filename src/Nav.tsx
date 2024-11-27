import React, { useEffect, useState } from 'react';
import ding from './images/dinggreen.png'
import ding2 from './images/dingpink.png'

function navcontent(){
  return(
    <nav>
      <ul>
        <li><a href="#About">About</a></li>
        <li><a href="#Resources">Resources</a></li>
        <li><a href="#projects_and_publications">Projects_and_Publications</a></li>
        {/* <li><a href="#Teaching&Fellowships">Teaching_and_Fellowships</a></li> */}
        {/* <li><a href="#TechnicalSkills">Technical_Skills</a></li> */}
        <li><a href="#Illustrations">Illustrations</a></li>
        <li><a href="#Press">Press_Features</a></li>
        
        <li><a href="#Contact">Contact</a></li>
        
        <li><a href="#WebsiteDetails">Website_Details</a></li>
      </ul>
    </nav>
  )
}

function Nav(){
  const [logoval, setlogoval] = useState<boolean>(true)

  function toggletheme(){
    document.body.classList.toggle("dark-theme")
    setlogoval(!logoval)
    }
    return (
        <div className="navtext">
          <div id="togglecont" onClick={toggletheme} aria-label="Click to change color theme">
            {"Click_to_Shift_Color_Mode"}
            {/* <img id="toggle" src={logoval ? ding2: ding}></img>  */}
          </div>
          
          {navcontent()}
        </div>
    )
}
export default Nav;