import React from 'react';

function navcontent(){
  return(
    <nav>
      <ul>
        <li><a href="#QuickBio">quickBio,</a></li>
        <li><a href="#Technical">technicalSkills,</a></li>
        <li><a href="#Teaching">teaching,</a></li>
        <li><a href="#ResponsibleAI">responsibleAI,</a></li>
        <li><a href="#Research">research,</a></li>
        <li><a href="#advocacy">advocacy,</a></li>
        <li><a href="#Illustrations">illustrations,</a></li>
        <li><a href="#Publications">press&Publications,</a></li>
        <li><a href="#Contact">contact</a></li>
      </ul>
    </nav>
  )
}

function Nav(){
    return (
        <div className="navtext">
          <div>
          jumpTo(click) -&gt; {'{'}
          </div> 
          {navcontent()}
          {'}'}
        </div>
    )
}
export default Nav;