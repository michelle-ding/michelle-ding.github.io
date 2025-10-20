import React from "react";
import "./styles/PortfolioLayout.css";

export default function Talks() {
  return (
    <main className="talks">
        <h1>Talks</h1>
            <ul>
              <li>
            <span className="name">Oct 10, 2025:</span> I gave a selected talk on the opinion abstract <a href="https://cntr.brown.edu/news/2025-09-15/responsible-llm-testing" id="ref" target="_blank">
            "Testing LLMs in a sandbox isn’t responsible. Focusing on community uses and needs is."</a>
            (written with Jo Kavishe, Victor Ojewale, and Suresh Venkatasubramanian) at the {" "}
            <a href="https://solar-colm.github.io/" id="ref" target="_blank">
            Third Workshop on Socially Responsible Language Modelling Research (SoLaR)</a> at{" "}
            <a href="https://colmweb.org/">COLM 2025</a>{" "}
           in Montreal, Canada. We also crowdsourced <a href="https://bit.ly/solar-cntr" id="ref" target="_blank">
           case studies & resources</a> for community-driven
           evaluations.
              </li>
            </ul>
            

        
    </main>
  );
}
