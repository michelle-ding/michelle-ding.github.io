import React, { useState } from "react";
import "./styles/PortfolioLayout.css";

export default function Research1() {
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
      title: "How to Stop Playing Whack-a-Mole: Mapping the Ecosystem of Technologies Facilitating \
      AI-Generated Non-Consensual Intimate Images. ",
      content: (
        <div>
            <span className="name">Michelle L. Ding</span>, Harini Suresh, Suresh Venkatasubramanian. 
        Preprint, 2026.{" "}
        <span className="researchlinks">
        <a href="https://arxiv.org/pdf/2602.04759" target="_blank">[PDF]</a>{" "}
        <a href="https://arxiv.org/abs/2602.04759" target="_blank">[Arxiv]</a>
        </span>
        </div>
      )
    },
    {
      title: "Silencing at Scale: AI Generated Abuse, Digital Democracy, \
      and the Urgent Need to Dismantle the Nudifier Economy.",
      content: (
        <div>
          Malika Saada Saar and <span className="name">Michelle L. Ding</span>. 
        Oxford Handbook of Human Security, 2026.{" "}
         <span className="researchlinks">
        <a href="https://global.oup.com/academic/product/the-oxford-handbook-of-human-security-9780197823934?lang=en&cc=us" target="_blank">[Journal]</a>{" "}
        </span>
        </div>
      )
    },
    {
      title: "Video Deepfake Abuse: How Company Choices Predictably Shape Misuse Patterns.",
      content: (
        <div>
          Max Kamachee, Stephen Casper, <span className="name">Michelle L. Ding</span>, 
        Rui-Jie Yew, Anka Reuel, Stella Biderman, Dylan Hadfield-Menell. Preprint, 2025.{" "}
        <span className="researchlinks">
            <a href="https://arxiv.org/pdf/2512.11815" target="_blank">[PDF]</a>{" "}
        <a href="https://arxiv.org/abs/2512.11815" target="_blank">[Arxiv]</a>{" "}
        <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5829303" target="_blank">[SSRN]</a>{" "}
        </span>
        </div>
      )
    },
    {
      title: "The Malicious Technical Ecosystem: Exposing Limitations \
        in Technical Governance of AI-Generated Nonconsensual Intimate Images of Adults.",
      content: (
        <div>
          <span className="name">Michelle L. Ding</span> and Harini Suresh. 
        Sociotechnical AI Governance
        Workshop, CHI Conference on Human Factors in Computing Systems, 2025.{" "}
        <span className="researchlinks">
            <a href="https://arxiv.org/pdf/2504.17663" target="_blank">[PDF]</a>{" "}
        <a href="https://arxiv.org/abs/2504.17663" target="_blank">[Arxiv]</a>
        </span>       
        </div>
      )
    }
  ];

  return (
    <main className="projects">
      <h1 className="h1_page">Research</h1>
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
