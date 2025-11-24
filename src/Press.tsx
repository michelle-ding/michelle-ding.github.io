import React from "react";
import "./styles/PortfolioLayout.css";

function formatPress(link: string, title: string, source: string, date: string){
    return(
            <li>
            <a id="ref" href={link} target="_blank">
                "{title},"
            </a>{" "} <i>{source}</i>, {date}
            </li>
    )}

    function pressAndPub(){
    const decisiontree = "https://www.aaas.org/ai2/projects/decision-tree-practitioners?utm_content=bufferbcf16&utm_medium=social&utm_source=linkedin.com&utm_campaign=buffer"
    const esvroundtable = "https://www.browndailyherald.com/article/2023/05/end-sexual-violence-at-brown-hosts-nonprofit-roundtable-to-address-survivor-support-advocacy"
    const titleix = "https://www.browndailyherald.com/article/2022/11/sexual-misconduct-reports-increased-52-in-2021-22-academic-year"
    const brunobrief = "https://www.browndailyherald.com/article/2022/11/the-bruno-brief-diving-into-advocacy-around-sexual-assault-on-campus"
    const esvinterview = "https://www.browndailyherald.com/article/2022/11/an-ongoing-effort-looking-into-past-present-future-of-sexual-assault-activism-at-brown"
    const bdh = "The Brown Daily Herald"
    const aaasinterview = "https://www.aaas.org/news/summer-science-aaas-2023-summer-interns-stories"
    const cntrnews = "https://cntr.brown.edu/news/2025-04-24/cntr01-and-src-handbook"
    const seniorprize = "https://cs.brown.edu/news/2025/05/01/twenty-four-students-win-2025-brown-cs-senior-prizes/"
    const cntr = "https://cntr.brown.edu/news/2025-05-02/2025-cntr-graduating-student-spotlights"
    const cntrprize = "https://dsi.brown.edu/news/2025-05-29/2025-dsi-senior-awards"
    const cntrphd="https://dsi.brown.edu/news/2025-09-05/2025-incoming-phd-students"
    return(
        <ul id="Press">
            {formatPress(
                cntrphd, "Imagining Dystopias: CNTR Researchers Reflect on the 2025 Conference on Language Modeling"
                , "Brown Center for Technological Responsibility, Reimagination and Redesign", "November 19, 2025")}
            {formatPress(
                cntrphd, "Testing LLMs in a sandbox isn’t responsible. Focusing on community use and needs is."
                , "Brown Center for Technological Responsibility, Reimagination and Redesign", "September 15, 2025")}

            {formatPress(
                cntrphd, "2025 Incoming CCMB and CNTR PhD students"
                , "Brown University Data Science Institute", "Sep 5, 2025")}

            {formatPress(
                cntrprize, "The Data Science Institute Awards Inaugural Senior Awards to 2025 Graduating Seniors"
                , "Brown University Data Science Institute", "May 29, 2025")}

            {formatPress(
                cntr, "2025 CNTR Graduating Student Spotlights"
                , "Brown Center for Technological Responsibility, Reimagination and Redesign", "May 2, 2025")}

            {formatPress(
                seniorprize, "Twenty-Four Students Win 2025 Brown CS Senior Prizes"
                , "Brown University Computer Science Department", "May 1, 2025")}

            {formatPress(cntrnews, "The CNTR celebrates its one-year-anniversary and launches the Socially Responsible Computing Handbook", 
                "Brown Center for Technological Responsibility, Reimagination and Redesign", "April 24, 2025")}

            {formatPress(aaasinterview, "A Summer of Science: AAAS 2023 Summer Interns’ Stories", "American Association for the Advancement of Science", "August 7, 2023")}
       
            {formatPress(esvroundtable, "End Sexual Violence at Brown hosts nonprofit roundtable to address survivor support, advocacy", 
             bdh, "May 3, 2023")}
      
             {formatPress(titleix, "Sexual misconduct reports increased 52% in 2021-22 academic year", bdh, "November 16, 2022")}
 
            {formatPress(brunobrief, "The Bruno Brief: Diving into advocacy around sexual assault on campus", bdh, "November 14, 2022")}
 
            {formatPress(esvinterview, "‘An ongoing effort’: looking into past, present, future of sexual assault activism at Brown", bdh, "November 3, 2022")}
                </ul>
    )
}

export default function Press() {
  return (
    <main className="press">
        <h1>News & Opinions</h1>
      <div className="press-list">
        {pressAndPub()}
        </div>
    </main>
  );
}
