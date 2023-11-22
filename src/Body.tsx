import React, { useEffect, useState } from 'react';
import chatgpt from './images/Michelle_ChatGPT.jpg'
import elections from './images/Mudbhary_RecallReactions_CO_MichelleDing.jpeg'
import menstrual from './images/Michelle_FreeMenstrualProducts.png'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import tablemanners from "./images/TableManners_MichelleDing.png"
import dragon from './images/world_ilo.png'
import dragon2 from './images/world2_ilo.png'
function welcome(){
    return (
        <div className="welcome" id="QuickBio">
            <span>Hi there.</span>
            <br></br>
            <span>My name is </span>
            <br></br>
            <span>Michelle Ding.</span>
            </div>
    )
}

function bio(){
    const aaas="https://www.aaas.org/ai2/projects/decision-tree-practitioners?utm_content=bufferbcf16&utm_medium=social&utm_source=linkedin.com&utm_campaign=buffer"
    return(
        <div >
            I am a programmer, advocate, and artist who 
            envisions a culture of technology that centers 
            human rights through genuine and inclusive stakeholder 
            engagement. I am based in Providence, Rhode Island, studying Computer Science 
            @ Brown University. 
            <br></br><br></br>
            My current work on Responsible Artificial Intelligence (AI)
             and Socially Responsible Computing (SRC) aims to bridge the gap between 
             the technical and ethical through 
             the development of creative, intentional, and comprehensive
             resources for diverse audiences. 
             <br></br><br></br>
            I have authored and designed Responsible AI & SRC content 
            for human rights non-profit organizations, state and local
            policymakers, industry scientists and engineers, and Brown University 
            students. My work has been published by the {" "}
            <a id="ref" href={aaas} target="_blank">American Association for the Advancement of Science (AAAS) Center for
            Scientific Responsibility and Justice</a> and 
            by Brown University as part of their current {" "}
            <a id="ref" href="https://responsible.cs.brown.edu/index.html" target="_blank">
                Socially Responsible Computing</a> curriculum.
            My work has been funded by grants from Microsoft and
            the Ford Foundation.
            <br></br><br></br>
            My past research and advocacy focus on sexual violence prevention, consent education,
            reproductive justice, and intersectional & transnational feminism. I have organized and volunteered in
            campus, state, and nation level advocacy campaigns and <a id="ref" href="https://www.gofundme.com/f/students-brown-for-reproductive-justice" target="_blank">
            mutual aid efforts</a> in collaboration with 
            coalitions, networks, and local community-based groups, including the{" "}
            <a id="ref" href="https://ricadv.org/" target="_blank">Rhode Island Coalition Against 
            Domestic Violence (RICADV)</a>, {" "}
            <a id="ref" href="https://whefri.org/" target="_blank">The Women's Health & Education Fund of Rhode Island (WHEF)</a>,{" "}
            <a id="ref" href="https://www.iwrising.org/" target="_blank">Indigenous Women Rising</a>, {" "}
            and <a id="ref" href="https://apiavote.org/" target="_blank">Asian and Pacific Islander American Vote (APIAVote)</a>.
            {/* I also serve
            as a <a id="ref" href="https://www.brown.edu/campus-life/health/services/promotion/sape" target="_blank">
            Sexual Assault Peer Educator</a> and facilitate Culture of Consent workshops for incoming
            first-year students at Brown.  */}
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
        <div className="techskills" id="Technical">
            <b id="header">{'{Technical Skills}'}</b>
            <br></br>
            {makeTechDiv("Programming Languages", "Java, Python")}
            <br></br>
            {makeTechDiv("Web Development", "React, TypeScript, HTML, CSS")}
            <br></br>
            {makeTechDiv("IDEs", "Visual Studio Code, IntelliJ")}
            <br></br>
            <span>Version Control: <i><a id="ref" href="http://www.github.com/mding16" target="_blank">GitHub</a></i></span>
            <br></br>
            {makeTechDiv("Design Tools", "Adobe Photoshop, Adobe InDesign, Procreate")}
            <br></br>
            {makeTechDiv("Formatting", "LaTeX, Microsoft Word")}
        </div>
    )
}

function formatPress(link: string, title: string, source: string, date: string){
    return(
        <div>
            <a id="ref" href={link} target="_blank">
                "{title}", <i>{source}</i>, {date}
            </a>
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
    return(
        <div id="Publications">
            <b id="header">{'{Publications}'}</b>
            <br></br>
            <a id="ref" href={decisiontree} target="_blank">"Decision Tree for the Responsible Application 
                of Artificial Intelligence", 
                AAAS Center for Scientific Responsibility, August 2023</a>
            <br></br>
            <br></br>
            <b id="header">{'{Press Features}'}</b>
            {formatPress(aaasinterview, "A Summer of Science: AAAS 2023 Summer Interns’ Stories", "American Association for the Advancement of Science", "August 7, 2023")}
            <br></br>
            {formatPress(esvroundtable, "End Sexual Violence at Brown hosts nonprofit roundtable to address survivor support, advocacy", 
             bdh, "May 3, 2023")}
             <br></br>
             {formatPress(titleix, "Sexual misconduct reports increased 52% in 2021-22 academic year", bdh, "November 16, 2022")}
            <br></br>
            {formatPress(brunobrief, "The Bruno Brief: Diving into advocacy around sexual assault on campus", bdh, "November 14, 2022")}
            <br></br>
            {formatPress(esvinterview, "‘An ongoing effort’: looking into past, present, future of sexual assault activism at Brown", bdh, "November 3, 2022")}
        </div>
    )
}

function contact(){
    return(
        <div className="contact" id="Contact">
            <b id="header">{'{Contact}'}</b><br></br>
            <span>michelle_ding@brown.edu</span>
            <span>
            <a id="ref" href="http://www.linkedin.com/in/michelleding1" target="_blank">LinkedIn</a>
            </span>
        </div>
    )
}

function ilo(){
    return(
        <div id="Illustrations">
            <b id="header">{'{Illustrations [Selected]}'}</b>
            <br></br>
            <br></br>
            <div id="ilocontainer">
                <a id="iloa" href="https://www.browndailyherald.com/article/2023/09/u-community-discusses-integration-of-ai-into-academic-points-to-opportunities-for-innovation" target="_blank">
                <img id="ilos" src={chatgpt} alt="Michelle Ding Illustration of Chat GPT for the Brown Daily Herald"></img>
                </a>
                <a id="iloa" href="https://www.browndailyherald.com/article/2023/02/its-over-the-top-students-react-to-ucs-president-recall-election" target="_blank">
                <img id="ilos" src={elections} alt="Michelle Ding Illustration of Recall Election for the Brown Daily Herald"></img>
                </a>
                <a id="iloa" href="https://www.browndailyherald.com/article/2023/03/ucs-gsc-work-to-install-menstrual-product-dispensers-in-university-bathrooms" target="_blank">
                <img id="ilos" src={menstrual} alt="Michelle Ding Illustration of Free Menstrual Products for the Brown Daily Herald"></img>
                </a>
            </div>
            <br></br>
            See my complete portfolio of illustrations published in:
            <br></br>
            <a id="ref" href="https://www.browndailyherald.com/staff/michelle-ding" target="_blank">
                The Brown Daily Herald
                </a>
            <br></br>
            <a id="ref" href="https://www.theindy.org/illustrator=Michelle%20L%20Ding" target="_blank">
                The College Hill Independent</a>
        </div>
    )
}

function responsibleai(){
    return(
        <div id="ResponsibleAI">
            <b id="header">{'{Responsible AI}'}</b>
            <br></br>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ipsa tenetur beatae sapiente ab numquam officiis, eum similique eos sint pariatur ad inventore quo saepe sunt minus! Omnis, repellat odit?
        </div>
    )
}

function research(){
    return(
        <div id="Research">
            <b id="header">{'{Research Papers}'}</b>
            <br></br>
            <a target="_blank" id="ref" href="https://drive.google.com/file/d/1hDbzgEEK_PIP0206xkhTJJSGJOKmdtZi/view?usp=sharing">
            <i>Transformative Futures: </i>
            A Comparative Case Study on the Rhode Island Coalition Against Domestic Violence (RICADV) 
            and the National Network to End Domestic Violence (NNEDV), April 2022</a>
            <br></br>
            <br></br>
            <a target="_blank" id="ref" href="https://drive.google.com/file/d/18NgVvgEJwVlFUAXfW-SLx4nAyyRbXYmM/view?usp=sharing">
            <i>Breaking Barriers: </i>
            A Facilitated Dialogue Between My Mother and Post-Mao Feminism, May 2023
            </a>
        </div>
    )
}

function advocacy(){
    return(
        <div id="advocacy">
            <b id="header">{'{Advocacy}'}</b>
            <br></br>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ipsa tenetur beatae sapiente ab numquam officiis, eum similique eos sint pariatur ad inventore quo saepe sunt minus! Omnis, repellat odit?
        </div>
    )
}

function formatTeaching(position: string, course: string, year: string){
    return(
        <div>
            <b>{position}</b>,
            <br>
            </br> <i>{course}</i>, {year}
        </div>
    )
}
function teaching(){
    return(
        <div id="Teaching">
            <b id="header">{'{Teaching & Fellowships}'}</b>
            <br></br>
            {formatTeaching("Undergraduate Teaching Assistant", "CS0320: Introduction to Software Engineering", "Spring 2023")}
            <br></br>
            {formatTeaching("Undergraduate Teaching Assistant", "CS0111: Computing Foundations, Data", 
            "Fall 2023")}
            <br></br>
            {formatTeaching("Socially Responsible Computing Teaching Assistant", "CS0111: Computing Foundations, Data", 
            "Fall 2023")}
            <br></br>
            <div><b>Brown in Washington Fellow</b>, Summer 2023</div>
            <br></br>
            {formatTeaching("Undergraduate Teaching Assistant", "ENGN90: Management of Industrial and Nonprofit Organizations", 
            "Fall 2022")}
            
        </div>
    )
}

export default function Body(){
    return(
        <div className="text">
            {welcome()}
            <br></br>
            {bio()}
            <br></br>
            {responsibleai()}
            {/* <br></br>
            {advocacy()} */}
            <br></br>
            {technicalSkills()}
            <br></br>
            {teaching()}
            <br></br>
            {ilo()}
            <br></br>
            {research()}
            <br></br>
            {pressAndPub()}
            <br></br>
            {contact()}
        </div>
    )
}