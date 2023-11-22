import React, { useEffect, useState } from 'react';
import ding from './images/dinggreen.png'
import ding2 from './images/dingpink.png'

function navcontent(){
  return(
    <nav>
      <ul>
        <li><a href="#QuickBio">about,</a></li>
        <li><a href="#ResponsibleAI">responsibleAI,</a></li>
{/*         
        <li><a href="#advocacy">advocacy,</a></li> */}
        <li><a href="#Technical">technicalSkills,</a></li>
        <li><a href="#Teaching">teaching&Fellowships,</a></li>
        <li><a href="#Illustrations">illustrations,</a></li>
        <li><a href="#Research">researchPapers,</a></li>
        <li><a href="#Publications">press&Publications,</a></li>
        <li><a href="#Contact">contact</a></li>
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
          <div id="togglecont" onClick={toggletheme}>
            <img id="toggle" src={logoval ? ding2: ding}></img> 
          </div>
          <br></br>
          <div>
          jumpTo(click) -&gt; {'{'}
          </div> 
          {navcontent()}
          {'}'}
        </div>
    )
}
export default Nav;