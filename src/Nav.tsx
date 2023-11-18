import React from 'react';

function navcontent(){
  return(
    <nav>
      <ul>
        <li><a href="#">quickBio</a></li>
        <li><a href="#">technicalSkills</a></li>
        <li><a href="#">responsibleAI</a></li>
        <li><a href="#">advocacy</a></li>
        <li><a href="#">press&Publications</a></li>
        <li><a href="#">contact</a></li>
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