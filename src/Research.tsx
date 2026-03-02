import React from "react";
import "./styles/PortfolioLayout.css";

export default function Research() {
  return (
    <main className="publications">
        <h1 className="h1_page">Research</h1>
      <ul className="publications-list">
        <li>
        <a href="https://arxiv.org/abs/2602.04759" target="_blank">
          "How to Stop Playing Whack-a-Mole: Mapping the Ecosystem of Technologies Facilitating 
          AI-Generated Non-Consensual Intimate Images."</a>{" "}
        <span className="name">Michelle L. Ding</span>, Harini Suresh, Suresh Venkatasubramanian. 
        Preprint, 2026.        
      </li>
        <li>
        <a href="https://global.oup.com/academic/product/the-oxford-handbook-of-human-security-9780197823934?lang=en&cc=us" target="_blank">
          "Silencing at Scale: AI Generated Abuse, Digital Democracy, 
        and the Urgent Need to Dismantle the Nudifier Economy."</a>{" "}
        Malika Saada Saar and <span className="name">Michelle L. Ding</span>. 
        Oxford Handbook of Human Security, 2026.        
      </li>
      <li>
        <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5829303" target="_blank">
        "Video Deepfake Abuse: How Company Choices Predictably Shape Misuse Patterns."
        </a>
        {" "}
        Max Kamachee, Stephen Casper, <span className="name">Michelle L. Ding</span>, 
        Rui-Jie Yew, Anka Reuel, Stella Biderman, Dylan Hadfield-Menell. Preprint, 2025.
      </li>
      <li>
 <a href="https://arxiv.org/abs/2504.17663" target="_blank">
        "The Malicious Technical Ecosystem: Exposing Limitations 
        in Technical Governance of AI-Generated Nonconsensual Intimate Images of Adults."</a>
       {" "}<span className="name">Michelle L. Ding</span> and Harini Suresh. 
        Sociotechnical AI Governance
        Workshop, CHI Conference on Human Factors in Computing Systems, 2025       
      </li>
        </ul>
    </main>
  );
}
