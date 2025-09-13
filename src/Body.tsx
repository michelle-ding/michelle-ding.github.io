import React, { useEffect, useState } from 'react';
import chatgpt from './images/Michelle_ChatGPT.jpg'
import elections from './images/Mudbhary_RecallReactions_CO_MichelleDing.jpeg'
import menstrual from './images/Michelle_FreeMenstrualProducts.png'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import tablemanners from "./images/TableManners_MichelleDing.png"
import dragon from './images/world_ilo.png'
import dragon2 from './images/world2_ilo.png'
import AAAS1 from './images/AAAS1.png'
import AAAS2 from './images/AAAS2.png'
import AAAS3 from './images/AAAS3.png'
import AAAS4 from './images/AAAS4.png'
import AAAS5 from './images/AAAS5.png'
import AAAS6 from './images/AAAS6.png'
import bluesky from './images/pbsky.png'
import linkedin from './images/linkedinp.png'
import mail from './images/mail.png'
import mail1 from './images/pmail.png'
import darkMail from './images/darkmail.png'
import darklinkedin from './images/darklinkedin.png'
import darkbluesky from './images/darkbsk.png'
import michelle from './images/michelle_ding_portrait.jpg'
import gslight from './images/gs.png'
import gsdark from './images/gslight.png'

const src="https://cntr.brown.edu/projects/socially-responsible-computing-src-curriculum-handbook"
const decisiontree = "https://www.aaas.org/ai2/projects/decision-tree-practitioners?utm_content=bufferbcf16&utm_medium=social&utm_source=linkedin.com&utm_campaign=buffer"
const esvroundtable = "https://www.browndailyherald.com/article/2023/05/end-sexual-violence-at-brown-hosts-nonprofit-roundtable-to-address-survivor-support-advocacy"
const titleix = "https://www.browndailyherald.com/article/2022/11/sexual-misconduct-reports-increased-52-in-2021-22-academic-year"
const brunobrief = "https://www.browndailyherald.com/article/2022/11/the-bruno-brief-diving-into-advocacy-around-sexual-assault-on-campus"
const esvinterview = "https://www.browndailyherald.com/article/2022/11/an-ongoing-effort-looking-into-past-present-future-of-sexual-assault-activism-at-brown"
const bdh = "The Brown Daily Herald"
const aaasinterview = "https://www.aaas.org/news/summer-science-aaas-2023-summer-interns-stories"
const mckee= "https://governor.ri.gov/press-releases/governor-mckee-signs-legislation-protecting-confidentiality-survivors-domestic"

function welcome(){
    return (
        <div className="welcome" id="About">
            <span>Michelle L. Ding</span>
            </div>
    )
}
function icons(logoval:boolean){
    return(
        <div className="iconcontainer">
            <a className="icons" target="_blank" href="https://bsky.app/profile/michelleding.bsky.social">
            <img className="icons" title="Go to @michelleding.bsky.social" 
            src={logoval ? bluesky : darkbluesky} alt="Michelle's BlueSky @michelleding.bsky.social"></img>
            </a>

            <a className="icons" target="_blank" href="https://www.linkedin.com/in/michelleding1/">
            <img className="icons" title= "Go to www.linkedin.com/in/michelleding1" 
            src={logoval ? linkedin : darklinkedin} alt="Michelle's LinkedIn at www.linkedin.com/in/michelleding1"></img>
            </a>
            <a className="icons" target="_blank" href="mailto:michelle_ding@brown.edu">
            <img className="icons" title="Email michelle_ding@brown.edu" 
            src={logoval ? mail1 : darkMail} alt="Michelle's Email at michelle_ding@brown.edu" />
            </a>
            <a className="icons" target="_blank" href="https://scholar.google.com/citations?user=yk_fq5AAAAAJ&hl=en">
            <img className="icons" title="Go to https://scholar.google.com/citations?user=yk_fq5AAAAAJ&hl=en" 
            src={logoval ? gslight : gsdark} alt="Michelle's Google Scholar at https://scholar.google.com/citations?user=yk_fq5AAAAAJ&hl=en" />
            </a>
        </div>
    )
}

function about_text(){
    return(
        <div id="about_text">
            I am a researcher and community organizer at Brown University.
            
            My goal is to use intersectional, multi-stakeholder, and interdisciplinary methods to build a culture of technology that empowers communities.
            My work primarily focuses on sociotechnical AI governance, human-AI interaction, and participatory design. Currently, 
            I am looking into methods of developing community-driven, domain-specific, and localized LLM evaluations. My recent work also explores AI-generated 
            non-consensual intimate images, technology-facilitated gender-based violence, and reproductive justice. I also founded the {" "}
            <a href="https://srch.cs.brown.edu" id="ref" target="_blank">Socially
            Responsible Computing Handbook</a>, a think tank and resource for socio-technical computing education. I am pursuing a Ph.D. in Computer Science
            under advisors <a href="https://vivo.brown.edu/display/suresh" id="ref" target="_blank">
                Suresh Venkatasubramanian
                    </a> and <a href="https://harinisuresh.com/" id="ref" target="_blank">Harini Suresh</a>. I am affiliated with the {" "}
                    <a href="https://cntr.brown.edu/" id="ref" target="_blank">Center for Technological Responsibility, Reimagination, and Redesign (CNTR) </a> 
                    and the {" "}
                    <a href="https://discolab.cs.brown.edu/" id="ref" target="_blank">Data in Society Collective (DISCO) Lab.</a> {" "}
                
            </div>
    )
}
function bio(logoval:boolean){
    const aaas="https://www.aaas.org/ai2/projects/decision-tree-practitioners?utm_content=bufferbcf16&utm_medium=social&utm_source=linkedin.com&utm_campaign=buffer"
    return(
        <div id="bio">
            <b id="header">
                {portrait()}
                <div className="iconcontainer">
                {icons(logoval)} (She/Her)
                </div>
            </b>
            <br></br>
            {about_text()}
        </div>
    )
}

function makeTechDiv(category: string, list: string){
    return(
        <span>{category}: <i>{list}</i></span>
    )
}

function technicalSkills(){
    return(
        <div className="techskills" id="TechnicalSkills">
            <b id="header">{'Technical Skills'}</b>
            <br></br>
            {makeTechDiv("Programming Languages", "Java, Python, JavaScript")}
            <br></br>
            {makeTechDiv("Web Development", "React, TypeScript, HTML, CSS")}
            <br></br>
            {makeTechDiv("IDEs", "Visual Studio Code, IntelliJ")}
            <br></br>
            <span>Version Control: <i><a id="ref" href="http://www.github.com/mding16" target="_blank">GitHub</a></i></span>
            <br></br>
            {makeTechDiv("Design Tools", "Adobe Photoshop, Adobe InDesign, Procreate")}
            <br></br>
            {makeTechDiv("Data & Formatting", "LaTeX, Microsoft Suite, Google Suite")}
        </div>
    )
}

function formatPress(link: string, title: string, source: string, date: string){
    return(
        <div id="press">
            <a id="ref" href={link} target="_blank">
                "{title},"
            </a> <i>{source}</i>, {date}
        </div>
    )
}
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
    return(
        <div id="News">
            <b id="header">{'News'}</b>
            {formatPress(
                cntrprize, "The Data Science Institute Awards Inaugural Senior Awards to 2025 Graduating Seniors"
                , "Brown University Data Science Institute", "May 29, 2025")}

            {formatPress(
                cntr, "2025 CNTR Graduating Student Spotlights"
                , "Center for Technological Responsibility, Reimagination and Redesign", "May 2, 2025")}

            {formatPress(
                seniorprize, "Twenty-Four Students Win 2025 Brown CS Senior Prizes"
                , "Brown University Computer Science Department", "May 1, 2025")}

            {formatPress(cntrnews, "The CNTR celebrates its one-year-anniversary and launches the Socially Responsible Computing Handbook", "Center for Technological Responsibility, Reimagination and Redesign", "April 24, 2025")}

            {formatPress(aaasinterview, "A Summer of Science: AAAS 2023 Summer Interns’ Stories", "American Association for the Advancement of Science", "August 7, 2023")}
       
            {formatPress(esvroundtable, "End Sexual Violence at Brown hosts nonprofit roundtable to address survivor support, advocacy", 
             bdh, "May 3, 2023")}
      
             {formatPress(titleix, "Sexual misconduct reports increased 52% in 2021-22 academic year", bdh, "November 16, 2022")}
 
            {formatPress(brunobrief, "The Bruno Brief: Diving into advocacy around sexual assault on campus", bdh, "November 14, 2022")}
 
            {formatPress(esvinterview, "‘An ongoing effort’: looking into past, present, future of sexual assault activism at Brown", bdh, "November 3, 2022")}
        </div>
    )
}

function contact(){
    return(
        <div className="contact" id="Contact">
            <b id="header">{'Contact'}</b><br></br>
            <span>
                michelle_ding@brown.edu{" "}
                <br></br>
                <a id="ref" href="https://bsky.app/profile/michelleding.bsky.social" target="_blank">@michelleding.bsky.social</a>
                <br></br>
            <a id="ref" href="http://www.linkedin.com/in/michelleding1" target="_blank">LinkedIn</a>
            </span>
        </div>
    )
}

function ilo(){
    return(
        <div id="Illustrations">
            <b id="header">{'Illustrations'}</b>
            <br></br>
            I also occasionally draw for the {" "}
            <a id="ref" href="https://www.browndailyherald.com/staff/michelle-ding" target="_blank">
                The Brown Daily Herald,
                </a>
            {" "} 
            <a id="ref" href="https://www.theindy.org/illustrator=Michelle%20L%20Ding" target="_blank">
                The College Hill Independent</a> and a {" "}
                <a id="ref" href="https://drive.google.com/file/d/1aV5bFFcT_OxtKoGDqQZrdy5K9LCie4qH/preview" target="_blank">Visual Essay on the Atlanta Spa Shootings.</a>
        </div>
    )
}
function publications(){
    return(
        <div id="publications">
            <b id="header">{'Publications'}</b>
            <br></br>
            <b>Michelle L. Ding</b> and Harini Suresh. 2025. "The malicious technical ecosystem: Exposing limitations in technical governance of AI-generated nonconsensual intimate images of adults." In CHI’25 Sociotechnical AI Governance
            Workshop (STAIG ’25), April 2025, Yokohama, Japan. <a id="ref" href="https://arxiv.org/abs/2504.17663" target="_blank">https://arxiv.org/abs/2504.17663</a>
            <br></br>
            <br></br>
            Malika Saada Saar and <b>Michelle L. Ding</b>. "Silencing at Scale: AI-Generated Non-Consensual Intimate Images as a Threat to Technology Security."
            To be in the Oxford Handbook of Human Security in 2026.
        </div>
    )
}
function projects(){
    return(
        <div id="projects">
            <b id="header">{'Projects'}</b>
            <br></br>
            <a id="ref" href={src} target="_blank">Socially Responsible Computing (SRC) Curriculum Handbook</a>
            <i> - Founder & Director - </i>
            The SRC Curriculum Handbook is a joint effort between 
            Brown's Socially Responsible Computing program in the Computer Science Department
            and Center for Technological Responsibility, 
            Reimagination, and Redesign (CNTR) in the Data Science Institute
            to monitor and gather interdisciplinary and multi-stakeholder 
            content on the rapidly changing landscape of socially responsible computing and to 
            synthesize that content into educational, digestible primers and a database of curated resources.
            The handbook aids the integration of topics like algorithmic fairness and justice, data 
            privacy and protection, sustainability, etc.
            into Brown's computer science curriculum serving 400+ undergraduate and graduate students. 
            The handbook was founded in May 2024 by Michelle L. Ding '25, Julia Netter, and Suresh Venkatasubramanian 
            and has since expanded into an interdisciplinary team of 22 undergraduate, masters, and Ph.D. students
            working on product design, product development, and AI, privacy, and accessibility research. 
            This project is supported by the Public Interest Technology University Network 
             and Google Research.
            <br></br><br></br>
            <a id="ref" href={decisiontree} target="_blank">Decision Tree for the Responsible Application 
                of Artificial Intelligence</a>
                <i> - Co-Author & Designer - </i> The decision tree is a guide to operationalizing a broad set of 
                principles that AAAS has identified as core components of an 
                ethical approach to developing and implementing artificial intelligence. Its goal is to assist
                 those who may be contemplating AI solutions in asking appropriate questions and identifying
                  practical steps that will help them progress towards implementing the technology 
                  in an effective, ethical way. This project is supported by Microsoft.
                  <br></br><br></br>

                  {/* <a id="ref" href="https://www.aaas.org/ai2/projects/ethics/public-interest-training/modules" target="_blank">
                    Responsible AI Training Modules
               </a>
                <i> - Co-Author & Researcher - </i> A series of training modules for 
                AI/ML developers in the healthcare industry that cover topics algorithmic discrimination, 
                human rights, and best practices during implementation. This project is supported by the Ford Foundation.
                <br></br><br></br> */}
        
        
            <a id="ref" href="https://ricadv.org/policy/" target="_blank">Address Confidentiality Program for Domestic Violence Survivors</a>
                <i> - Community Organizer - </i>
                I worked with the Rhode Island Coalition Against Domestic Violence (RICADV) to advocate 
                and lobby for the <a id="ref" target="_blank" href="https://www.sos.ri.gov/AddressConfidentialityProgram">Address Confidentiality Program.</a>{" "} This piece of legislation, 
                now signed into <a id="ref" target="_blank" href={mckee}>law</a> by Governor McKee, protects the privacy of victims of 
                domestic violence, stalking, sexual assault, and trafficking and/or abuse
                 by providing them with an anonymous PO box for voting, obtaining driver’s 
                 licenses, and creating other records with state and local governments. 
           
                <br></br><br></br>
            <a id="ref" href="https://www.gofundme.com/f/students-brown-for-reproductive-justice" target="_blank">
                Abortion Fund Mutual Aid Campaign</a>
                <i> - Community Organizer & Co-Founder - </i>
                Post-Dobbs, I co-founded Students at Brown for Reproductive Justice, a coalition with 
             over 40 Brown student organizations, to launch a mutual aid campaign supporting the Women's Health & Education Fund of Rhode Island (WHEF),
            Indigenous Women Rising (IWR), and Sister Song. Our mutual aid campaign reached 10k users and raised over $3000 from
            over 80 individual donors in one summer for organizations 
            providing reproductive care for disproportionately affected communities across the country.{" "}
            <a id="ref" target="_blank" href={esvinterview}>Brown Daily Herald Coverage.</a>
        </div>
    )
}

function formatTeaching(position: string, course: string, year: string, site: string){
    return(
        <div>
            {position}, {" "}
           <a target="_blank" id="ref" href={site}><i>{course}</i></a>, {year}
        </div>
    )
}

function websiteinfo(){
    return(
        <div id="WebsiteDetails">
            <b id="header">{'Website_Details'}</b>
            <br></br>
            Built {"&"} designed by Michelle L. Ding using React, TypeScript, CSS, and HTML
            <br></br>
            Hosted on GitHub Pages
            <br></br>
            Website colors tested using <a target="_blank" id="ref" href="https://accessible-colors.com/">Accessible Colors</a>
            <br></br>
            Last updated September 2025

        </div>
    )
}

function resources(){
    return(
        <div id="Resources">
            <b id="header">{'Resources'}</b>
            <br></br>
            <a target="_blank" id="ref" href="https://docs.google.com/spreadsheets/d/1gFWBW6Rpf4hPpQjtSzE5BQq8XuPLcz6yEx2yB5_uCjY/edit?usp=sharing">
                Sexual health resources @ Brown/Providence</a>
                <br></br>
            
                <a target="_blank" id="ref" href="https://www.goodreads.com/review/list/181978928-michelle?order=d&shelf=michelles-sociotech-reads">
                Michelle's socio-tech reading list!</a>

        </div>
    )
    }

interface BodyProps {
    logoval: boolean;
   
}

function portrait(){
    return(
        <img id="portrait" src={michelle} alt="Michelle Ding Portrait Dec 2024"></img>
    )
}
export default function Body({ logoval }: BodyProps){
    return(
        <div className="text">
            {welcome()}
            {/* <br></br> */}
            {bio(logoval)}
            <br></br>
            {resources()}
            <br></br>
            {publications()}
            <br></br>
            {projects()}
            <br></br>
            {pressAndPub()}
            <br></br>
            {websiteinfo()}
        </div>
    )
}