import React from "react";
import "./styles/PortfolioLayout.css";

export default function Resources() {
  return (
    <main className="resources">
        <h1>Resources</h1>
        <li>
        <a target="_blank" id="ref" href="https://docs.google.com/spreadsheets/d/1gFWBW6Rpf4hPpQjtSzE5BQq8XuPLcz6yEx2yB5_uCjY/edit?usp=sharing">
        Survivor-centered sexual health resources primarily based in Brown and Providence/RI</a>
        </li>
        <li><a target="_blank" id="ref" href="https://www.goodreads.com/review/list/181978928-michelle?order=d&shelf=michelles-sociotech-reads">
        Socio-technical books that I have read or want to read</a>
        </li>
        <li>
        <a target="_blank" id="ref" 
        href="https://docs.google.com/spreadsheets/d/1XL17SFOEy12K_yALJxL9mgCyD2IAn6MTO9eB6iyb05c/edit?usp=sharing">
            Crowdsourced resources for artists who are concerned about AI</a>
        </li>
        <li>
        <a target="_blank" id="ref" 
        href="https://docs.google.com/spreadsheets/d/1LACeIoVlOV2PveYJBKR90kkzPb5SIi6QBu4zVYbs8wQ/edit?usp=sharing">
            Crowdsourced resources and case studies for researchers who want to do community-driven LLM evaluations</a>
        </li>
    </main>
  );
}
