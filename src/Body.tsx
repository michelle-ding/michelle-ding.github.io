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

function welcome(){
    return (
        <div className="welcome" id="About">
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
            I am a computer scientist, advocate, and artist who 
            envisions a culture of technology that centers 
            human rights through genuine and inclusive stakeholder 
            engagement. I am based in Providence, Rhode Island, studying Computer Science 
            @ Brown University. 
            <br></br><br></br>
            My work on Responsible Artificial Intelligence (AI)
             aims to bridge the gap between 
             the technical and ethical by developing resources for diverse audiences. 
             I have created published resources for non-profits, policymakers, and industry scientists.
             Last summer, I worked on the {" "}
             <a id="ref" target="_blank" href="https://www.aaas.org/ai2/about">(AI)2 initiative</a> {" "}
              at the 
             American Association for the Advancement of Science (AAAS), 
             the world's largest general scientific society and publisher of the journal Science. 
             There,
             I co-authored and designed the {" "}
             <a id="ref" href={aaas} target="_blank">AAAS Decision Tree for the Responsible
            Application of Artificial Intelligence</a>.
            I also co-authored {" "}
            <a id="ref" target="_blank" href="https://www.aaas.org/ai2/projects/ethics/public-interest-training">
            Public Interest AI 101: Resources and Trainings for Developing Equitable AI Systems
            </a>, soon to be piloted. These projects were funded by grants from Microsoft and
            the Ford Foundation.

            <br></br><br></br>
            Currently at Brown, I am developing the {" "}
            
            <a id="ref" href="https://responsible.cs.brown.edu/index.html" target="_blank">
                Socially Responsible Computing</a>{" "}
            curriculum for the CS department as an undergraduate teaching assistant. 
            My work aims to thoughtfully and holistically incorporate an anti-racist, 
            human-centered framework into every step of the coding process,
            using education as a preventative approach to tackling algorithmic bias and discrimination
            
            <br></br><br></br>
            My past research and advocacy navigate sexual violence prevention, 
            consent education, reproductive justice, and intersectional & transnational feminism at Brown and
            in Rhode Island. In May 2022, I worked with the <a id="ref" href="https://ricadv.org/policy/" target="_blank">
                Rhode Island Coalition Against 
            Domestic Violence (RICADV)</a> to advocate and lobby for the Address Confidentiality Program 
            that protects survivors and their children (now {" "}
            <a id="ref" href="https://governor.ri.gov/press-releases/governor-mckee-signs-legislation-protecting-confidentiality-survivors-domestic" target="_blank">
            signed
                </a> into law). Following the Dobbs decision overturning
            Roe v. Wade,
            I co-founded Students at Brown for Reproductive Justice, a coalition with 
             over 40 Brown student organizations, to launch a <a id="ref" target="_blank" href="https://www.gofundme.com/f/students-brown-for-reproductive-justice">
            mutual aid campaign</a> supporting
            Women's Health & Education Fund of Rhode Island (WHEF),
            Indigenous Women Rising (IWR), and Sister Song. Our mutual aid campaign raised over $3000 from
            over 80 individual donors in one summer for organizations 
            providing reproductive care for disproportionately affected communities across the country. 
            Learn more about my work <a id="ref" href="#Research">here</a> or contact me at michelle_ding@brown.edu.

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
            <b id="header">{'{Illustrations [Selected Published Pieces]}'}</b>
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
            See full portfolio of illustrations for {" "}
            <a id="ref" href="https://www.browndailyherald.com/staff/michelle-ding" target="_blank">
                The Brown Daily Herald
                </a>
            {" "} & {" "}
            <a id="ref" href="https://www.theindy.org/illustrator=Michelle%20L%20Ding" target="_blank">
                The College Hill Independent</a>
        </div>
    )
}

function responsibleai(){
    const dtImage = (
        <div id="decisiontree">
            <div id="dttext">
                Decision Tree
            </div>
            <div id="dtContainer">
                <img id="dt" src={AAAS1}></img>
                <img id="dt" src={AAAS2}></img>
                <img id="dt" src={AAAS3}></img>
                <img id="dt" src={AAAS4}></img>
                <img id="dt" src={AAAS5}></img>
                <img id="dt" src={AAAS6}></img>
            </div>
        </div>
    )
    return(
        <div id="ResponsibleAI">
            <b id="header">{'{Responsible AI}'}</b>
            <br></br>
            {dtImage}
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
            <br></br><br></br>
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

function formatTeaching(position: string, course: string, year: string, site: string){
    return(
        <div>
            {position},
            <br>
            </br> <a target="_blank" id="ref" href={site}><i>{course}</i></a>, {year}
        </div>
    )
}
function teaching(){
    return(
        <div id="Teaching">
            <b id="header">{'{Teaching & Fellowships}'}</b>
            <br></br>
            {formatTeaching("Undergraduate Teaching Assistant", "CS0320: Introduction to Software Engineering", "Spring 2023", "https://cs.brown.edu/courses/info/csci0320/")}
            <br></br>
            {formatTeaching("Undergraduate Teaching Assistant", "CS0111: Computing Foundations, Data", 
            "Fall 2023", "https://cs.brown.edu/courses/csci0111/")}
            <br></br>
            {formatTeaching("Socially Responsible Computing Teaching Assistant", "CS0111: Computing Foundations, Data", 
            "Fall 2023", "https://cs.brown.edu/courses/csci0111/")}
            <br></br>
            Fellow, <a target="_blank" id="ref" href="https://college.brown.edu/learn-beyond-classroom/us-study/brown-washington-program">
                Brown in Washington
            </a>, Summer 2023
            <br></br>
            <br></br>
            {formatTeaching("Undergraduate Teaching Assistant", "ENGN90: Management of Industrial and Nonprofit Organizations", 
            "Fall 2022", "https://selfservice.brown.edu/ss/bwckctlg.p_disp_course_detail?cat_term_in=201010&subj_code_in=ENGN&crse_numb_in=0090")}
            
        </div>
    )
}

export default function Body(){
    return(
        <div className="text">
            {welcome()}
            <br></br>
            {bio()}
            {/* <br></br> 
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