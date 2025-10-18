import React from "react";
import "./styles/PortfolioLayout.css";

const PortfolioLayout = () => {
  return (
    <div className="portfolio-layout">
      <div className="mobile-header">Michelle L. Ding</div>
      <main className="portfolio-bio" role="main" aria-label="Biography">
        <div>
          <p>
            Hi! I'm Michelle, a researcher and community organizer critically investigating how AI systems impact communities. 
            I am currently a Computer Science Ph.D student at Brown University
            advised by <a href="https://vivo.brown.edu/display/suresh" id="ref" target="_blank">
                Suresh Venkatasubramanian
                    </a> and <a href="https://harinisuresh.com/" id="ref" target="_blank">Harini Suresh</a>. I am affiliated with the {" "}
                    <a href="https://cntr.brown.edu/" id="ref" target="_blank">Center for Technological Responsibility, Reimagination, and Redesign (CNTR)</a> 
                    {" "} and the {" "}
                    <a href="https://discolab.cs.brown.edu/" id="ref" target="_blank">Data in Society Collective (DISCO) Lab.</a>{" "}
            {/* I founded the {" "}
            <a href="https://srch.cs.brown.edu" id="ref" target="_blank">Socially
            Responsible Computing Handbook</a>, a think tank and resource for socio-technical computing education.  {" "} */}
            </p>
             <div className="bio-links" aria-label="Quick Links">
              <a href="mailto:michelle_ding@brown.edu" id="ref" target="_blank">Email</a>
            <a href="https://bsky.app/profile/michelleding.bsky.social" id="ref" target="_blank">Bluesky</a>
            <a href="https://www.linkedin.com/in/michelleding1/" id="ref" target="_blank">LinkedIn</a>
            <a href="https://michellelding.substack.com/" id="ref" target="_blank">Substack</a>
            <a href="https://scholar.google.com/citations?user=yk_fq5AAAAAJ&hl=en" id="ref" target="_blank">Google Scholar</a>
            </div>
        </div>
      </main>
     
    </div>
  );
};

export default PortfolioLayout;
