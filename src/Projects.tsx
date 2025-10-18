import React, { useState } from "react";
import "./styles/PortfolioLayout.css";

export default function Projects() {
  const [expandedIndexes, setExpandedIndexes] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    setExpandedIndexes(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index); // collapse
      } else {
        newSet.add(index); // expand
      }
      return newSet;
    });
  };

  const items = [
    {
      title: "Socially Responsible Computing Handbook (2024-present)",
      content: (
        <div>
            The <a href="https://srch.cs.brown.edu/about">Socially Responsible Computing Handbook (SRCH)</a>{" "} is a community-owned, 
            interdisciplinary think tank and living resource that I founded in May 2024 with{" "}
            <a href="https://vivo.brown.edu/display/suresh" id="ref" target="_blank">
                Suresh Venkatasubramanian</a> and {" "}
            <a href="http://www.julianetter.de/" id="ref" target="_blank">Julia Netter</a>.
            Our goal is to improve the quality of socially computing education taught in Brown University's
            Computer Science courses by building a dedicated pipeline from current sociotechnical research 
            to the CS classroom. 
            Simultaneously, we create opportunities for students to engage in research and product development, 
            receive mentorship from faculty, and practice leadership and teamwork skills. 
            {" "}<a href="https://cntr.brown.edu/news/2025-04-24/cntr01-and-src-handbook" id="ref" target="_blank">
            After just one year</a>, the{" "}
            <a href="https://cntr.brown.edu/projects/socially-responsible-computing-src-curriculum-handbook" id="ref" target="_blank">
            SRCH community</a>{" "} has grown into over 22 undergraduate, masters, and Ph.D. 
            students coming from Behavioral Decision Sciences, Economics, International and Public Affairs, 
            Science Technology and Society, Public Health, Religious Studies, Urban Studies, 
            Computational Biology, Data Science, Computer Science, and English. 
            All students working on the handbook are compensated through an independent
             study credit or pay. The handbook is supported by grants from the Public 
             Interest Technology University Network and Google Research.
        </div>
      )
    },
    {
      title: "Decision Tree for the Responsible Application of Artificial Intelligence (2023)",
      content: (
        <div>
          I designed and co-authored the <a href="https://www.aaas.org/ai2/projects/decision-tree-practitioners?utm_content=bufferbcf16&utm_medium=social&utm_source=linkedin.com&utm_campaign=buffer"
          id="ref" target="_blank">Decision Tree for the Responsible Application 
          of Artificial Intelligence</a>{" "} as a <a href="https://www.aaas.org/news/summer-science-aaas-2023-summer-interns-stories"
          id="ref" target="_blank">summer intern at the American 
          Association for the Advancement of Science</a>. The decision tree 
          is a resource for non-profit organizations who are considering using an AI tool but are unclear
          about how to do so responsibly.
          The tree guides users through a series of questions and actionable steps
          that will help them progress towards adopting (or not adopting) the technology 
          by centering impacted communities. This project is supported by Microsoft and the Ford Foundation. 
        </div>
      )
    },
    {
      title: "Address Confidentiality Program for Domestic Violence Survivors (2022)",
      content: (
        <div>
          As a community organizer, I worked with the{" "}
          <a href="https://ricadv.org/" id="ref" target="_blank" >
          Rhode Island Coalition Against 
          Domestic Violence
            </a> to advocate 
          and lobby for the <a id="ref" target="_blank" href="https://www.sos.ri.gov/AddressConfidentialityProgram">Address Confidentiality Program.</a>{" "} This piece of legislation, 
          {" "}<a id="ref" target="_blank" href="https://governor.ri.gov/press-releases/governor-mckee-signs-legislation-protecting-confidentiality-survivors-domestic">
          now signed into law by Governor McKee,</a> protects the privacy of victims of 
          domestic violence, stalking, sexual assault, and trafficking and/or abuse
        by providing them with an anonymous PO box for voting, obtaining driver’s 
          licenses, and creating other records with state and local governments. 
        </div>
      )
    },
    {
      title: "Mutual Aid Campaign for Abortion-Funds (2022)",
      content: (
        <div>
          Post-Dobbs, I co-founded (with Nelson Lin){" "}
          <a href="https://www.gofundme.com/f/students-brown-for-reproductive-justice" id="ref" target="_blank">
          Students at Brown for Reproductive Justice</a>, a coalition led by{" "}
          <a href="https://www.instagram.com/endsexualviolence.brown/?hl=en">
          End Sexual Violence @ Brown
          </a>{" "}
          and <a href="https://www.instagram.com/brownrisdaapa/?hl=en">
          Asian/American Political Alliance at Brown/RISD</a> consisting of
          over 40 student organizations. We launched a{" "}
          <a href="https://www.gofundme.com/f/students-brown-for-reproductive-justice" id="ref" target="_blank">
          mutual aid campaign</a> supporting the{" "}
          <a href="https://riabortionfund.org/" id="ref" target="_blank">
          Women's Health & Education Fund of Rhode Island
          </a>,{" "}
          <a href="https://www.iwrising.org/" id="ref" target="_blank">
            Indigenous Women Rising
          </a>{" "} and{" "}
           <a href="https://www.sistersong.net/" id="ref" target="_blank">
           Sister Song
           </a>, organizations 
            providing reproductive care for disproportionately affected communities across the United States. 
            Our campaign reached 10k users on Instagram and raised over $3000 from
            over 80 individual donors in one summer.
        </div>
      )
    }
  ];

  return (
    <main className="projects">
      <h1>Projects (click to expand)</h1>
      <ul className="expandable-list">
        {items.map((item, index) => (
          <li key={index}>
            <button
              className="expandable-title"
              onClick={() => toggleItem(index)}
              aria-expanded={expandedIndexes.has(index)}
            >
              {item.title}
            </button>
            {expandedIndexes.has(index) && (
              <div className="expandable-content">{item.content}</div>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}
