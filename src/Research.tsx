import React from "react";
import "./styles/PortfolioLayout.css";

export default function Research() {
  return (
    <main className="publications">
        <h1>Research</h1>
      <ul className="publications-list">
      <li>
 <a id="ref" href="https://arxiv.org/abs/2504.17663" target="_blank">
        "The Malicious Technical Ecosystem: Exposing Limitations 
        in Technical Governance of AI-Generated Nonconsensual Intimate Images of Adults."</a>
       <span className="name">Michelle L. Ding</span> and Harini Suresh. 
        Sociotechnical AI Governance
        Workshop, CHI, 2025       
      </li>
      <li>
        "Silencing at Scale: AI-Generated Non-Consensual Intimate Images 
        as a Challenge for Technological Security."{" "}
       <span className="name">Michelle L. Ding</span> and Malika Saada Saar. 
        To be in the Oxford Handbook of Human Security, 2026.        
      </li>
       
        </ul>
    </main>
  );
}
