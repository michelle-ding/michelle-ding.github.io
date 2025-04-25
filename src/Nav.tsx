import React from 'react';
import './styles/App.css'; // Assuming your styles are here

function navcontent() {
  return (
    <nav>
      <ul>
        <li><a href="#About">About</a></li>
        <li><a href="#Resources">Resources</a></li>
        <li><a href="#publications">Publications</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#Press">Press_Features</a></li>
        <li><a href="#WebsiteDetails">Website_Details</a></li>
      </ul>
    </nav>
  );
}

interface NavProps {
  logoval: boolean;
  setlogoval: React.Dispatch<React.SetStateAction<boolean>>;
}

function Nav({ logoval, setlogoval }: NavProps) {
  function toggletheme() {
    document.body.classList.toggle("dark-theme");
    setlogoval(!logoval); // Toggle theme state
  }

  return (
    <div className="navtext">
      <div
        id="togglecont"
        onClick={toggletheme}
        aria-label="Click to change color theme"
      >
        {logoval ? "Switch_to_Dark_Mode" : "Switch_to_Light_Mode"}
      </div>
      {navcontent()}
      
    </div>
  );
}

export default Nav;
