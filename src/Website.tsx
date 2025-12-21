import React from "react";
import "./styles/PortfolioLayout.css";

export default function Website() {
  return (
    <main className="website">
        <h1>Website Details</h1>
       I built this website using React, HTML/CSS/TS on VSCode and 
       hosted it using Github Pages.
       I used ChatGPT* to write starter code for styling, React router set up, 
       accessibility features, mobile responsivity, and minor debugging. No website content or personal
       information about me or my collaborators was inputted {" "}
       <a href="https://chatgpt.com/share/68f3fa85-7908-8013-a521-9b62fe6033d0" id="ref" target="_blank">
        (chat history)</a>. Last updated December 2025.
    
        <br></br>
        <br></br>
        
        <a href="https://michellelding.substack.com/p/coding-isnt-everything" target="_blank">
     
        *Read my thoughts on using ChatGPT to code</a>. 

    </main>
  );
}
