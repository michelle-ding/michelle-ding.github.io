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

const src="https://cntr.brown.edu/projects#socially-responsible-computing-src-curriculum-handbook"
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
            <span>Michelle Luowen Ding</span>
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
        </div>
    )
}

function about_text(){
    return(
        <div id="about_text">
            I am an interdisciplinary researcher, computer scientist, and community organizer at Brown University.
            My goal is to build a culture of technology that empowers communities.
            My work primarily focuses on human-AI interaction, participatory design/stakeholder engagement, 
            transnational feminism and human rights, and algorithmic justice.
            I serve as founder and project director of the {" "}
            <a id="ref" href="https://cntr.brown.edu/projects#socially-responsible-computing-src-curriculum-handbook" target="_blank">Socially Responsible Computing Curriculum Handbook Project</a>{" "}
             in {" "}
            <a id="ref" href="https://cntr.brown.edu/" target="_blank">Brown's Center for Technological 
            Responsibility, Reimagination and Redesign</a>{" "}advised by {" "}
            <a href="http://www.julianetter.de/" id="ref" target="_blank">
            Julia Netter
                </a> and {" "}
                <a href="https://vivo.brown.edu/display/suresh" id="ref" target="_blank">
                Suresh Venkatasubramanian.
                    </a>{" "}
            I am currently co-authoring a chapter for The Oxford Handbook of Human Security on gender-based violence and women's security in
            relation to technology and deepfakes
            with <a href="https://home.watson.brown.edu/people/faculty/senior-fellows/malika-saada-saar" id="ref" target="_blank">
                Malika Saada Saar.
                    </a>{" "}
             
            My work has received funding and support from Brown, Google, AAAS, Microsoft, and the Ford Foundation. 
            I also occasionally illustrate for the {" "}
            <a id="ref" href="https://www.browndailyherald.com/staff/michelle-ding" target="_blank">
                The Brown Daily Herald
                </a>
            {" "} and {" "}
            <a id="ref" href="https://www.theindy.org/illustrator=Michelle%20L%20Ding" target="_blank">
                The College Hill Independent</a> and crowdsource <a id="ref"href="#Resources">resources</a> - see below :) 
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
        <div id="Press">
            <b id="header">{'Press_Features'}</b>
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
            {/* <div id="ilocontainer">
                <a id="iloa" href="https://www.browndailyherald.com/article/2023/09/u-community-discusses-integration-of-ai-into-academic-points-to-opportunities-for-innovation" target="_blank">
                <img id="ilos" src={chatgpt} alt="Michelle Ding Illustration of Chat GPT for the Brown Daily Herald"></img>
                </a>
                <a id="iloa" href="https://www.browndailyherald.com/article/2023/02/its-over-the-top-students-react-to-ucs-president-recall-election" target="_blank">
                <img id="ilos" src={elections} alt="Michelle Ding Illustration of Recall Election for the Brown Daily Herald"></img>
                </a>
                <a id="iloa" href="https://www.browndailyherald.com/article/2023/03/ucs-gsc-work-to-install-menstrual-product-dispensers-in-university-bathrooms" target="_blank">
                <img id="ilos" src={menstrual} alt="Michelle Ding Illustration of Free Menstrual Products for the Brown Daily Herald"></img>
                </a>
            </div> */}
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

function project_and_publications(){
    return(
        <div id="projects_and_publications">
            <b id="header">{'Projects_and_Publications'}</b>
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
            Advised by {" "}
            <a href="http://www.julianetter.de/" id="ref" target="_blank">
            Julia Netter
                </a> & {" "}
                <a href="https://vivo.brown.edu/display/suresh" id="ref" target="_blank">
                Suresh Venkatasubramanian
                    </a>.
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
                  <a id="ref" href="https://www.aaas.org/ai2/projects/ethics/public-interest-training/modules" target="_blank">
                    Responsible AI Training Modules
               </a>
                <i> - Co-Author & Researcher - </i> A series of training modules for 
                AI/ML developers in the healthcare industry that cover topics algorithmic discrimination, 
                human rights, and best practices during implementation. This project is supported by the Ford Foundation.
                  <br></br><br></br>
            {/* <a id="ref" href="https://michelleluowending.github.io/invisiblebodies/" target="_blank">* Invisible Bodies: Hidden Labor Behind Word Embeddings</a>
                <i> - Researcher & Creator - </i>
                "Invisible Bodies" is an interactive web exhibit that adopts a feminist digital humanities methodology
                in examining the various forms of unseen labor behind the 
                creation and (gender) debiasing of word embedding models like Word2Vec and GloVe. 
                As word embeddings form the foundation of language models, the exhibit also acts as 
                a broader exploration of unseen labor behind modern AI technology.
            <br></br><br></br> */}
             <a id="ref" href="https://drive.google.com/file/d/18NgVvgEJwVlFUAXfW-SLx4nAyyRbXYmM/preview" target="_blank">
             Breaking Barriers: A Facilitated Dialogue Between My Mother and Post-Mao Feminism
               </a>
                <i> - Author - </i> 
                This paper explores the fascinating development of Chinese feminism since 1949, from socialist
feminism in Maoist China to revisions of socialist feminism in the early 1980s to independent
post-Mao feminism in the late 1980s and 1990s. My explorations also involve understanding the
limitations of Chinese feminism in its many forms—in particular, Marxist feminism’s gender
blindness and male-centered values and independent post-Mao feminism’s blindness towards
historical, political, intellectual, and transnational factors that influenced its formation. In my final
reflection, I also trace the underlying Western ideological forces that shaped both post-Mao
feminists and my mother’s own recollections of her experience in the New Era. Advised by {" "}
<a target="_blank" id="ref" href="https://vivo.brown.edu/display/lwang">
Lingzhen Wang.
</a>
                <br></br><br></br>
        
        
            <a id="ref" href="https://ricadv.org/policy/" target="_blank">Address Confidentiality Program for Domestic Violence Survivors</a>
                <i> - Community Organizer - </i>
                I worked with the Rhode Island Coalition Against Domestic Violence (RICADV) to advocate 
                and lobby for the <a id="ref" target="_blank" href="https://www.sos.ri.gov/AddressConfidentialityProgram">Address Confidentiality Program.</a>{" "} This piece of legislation, 
                now signed into <a id="ref" target="_blank" href={mckee}>law</a> by Governor McKee, protects the privacy of victims of 
                domestic violence, stalking, sexual assault, and trafficking and/or abuse
                 by providing them with an anonymous PO box for voting, obtaining driver’s 
                 licenses, and creating other records with state and local governments. 
            <br></br><br></br>
            <a id="ref" href="https://drive.google.com/file/d/1hDbzgEEK_PIP0206xkhTJJSGJOKmdtZi/preview" target="_blank">
                Transformative Futures: A Comparative Case Study on the Rhode Island Coalition Against Domestic Violence
(RICADV) and the National Network to End Domestic Violence (NNEDV)
               </a>
                <i> - Author - </i> 
               This paper documents my interviews with two powerful and motivating social change practitioners—
Lucy Rios and Deborah (Deb) DeBare—who have dedicated decades of their lives to ending
domestic violence. From their experiences, I analyzed and compared strategies on intersectionality,
prevention work vs. direct service, funding and accountability, cultural change vs. legal change,
and criminal justice vs. transformative justice. From my analysis, I then
provided evaluations and suggestions for internal organizational reforms and external directions
towards transformative futures. Advised by Marti Rosenberg.
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
            {/* <br></br><br></br>
            <a target="_blank" id="ref" href="https://drive.google.com/file/d/1hDbzgEEK_PIP0206xkhTJJSGJOKmdtZi/view?usp=sharing">
            <i>Transformative Futures: </i>
            A Comparative Case Study on the Rhode Island Coalition Against Domestic Violence (RICADV) 
            and the National Network to End Domestic Violence (NNEDV), April 2022</a>
            <br></br><br></br>
            <a target="_blank" id="ref" href="https://drive.google.com/file/d/18NgVvgEJwVlFUAXfW-SLx4nAyyRbXYmM/view?usp=sharing">
            <i>Breaking Barriers: </i>
            A Facilitated Dialogue Between My Mother and Post-Mao Feminism, May 2023
            </a> */}
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
function teaching(){
    return(
        <div id="Teaching&Fellowships">
            <b id="header">{"Teaching_and_Fellowships"}</b>

            {formatTeaching("Teaching Assistant", "CS0320: Introduction to Software Engineering", "Spring 2024 & Fall 2024", "https://cs.brown.edu/courses/info/csci0320/")}
     
            {formatTeaching("Teaching Assistant", "CS0111: Computing Foundations, Data", 
            "Fall 2023", "https://cs.brown.edu/courses/csci0111/")}
     
      
            {formatTeaching("Teaching Assistant", "ENGN90: Management of Industrial and Nonprofit Organizations", 
            "Fall 2022", "https://selfservice.brown.edu/ss/bwckctlg.p_disp_course_detail?cat_term_in=201010&subj_code_in=ENGN&crse_numb_in=0090")}
            
            Research Fellow, <a target="_blank" id="ref" href="https://college.brown.edu/learn-beyond-classroom/us-study/brown-washington-program">
                Brown in Washington
            </a>, Summer 2023
     
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
            Last updated January 2025

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
            <a target="_blank" id="ref" href="https://docs.google.com/spreadsheets/d/1XL17SFOEy12K_yALJxL9mgCyD2IAn6MTO9eB6iyb05c/edit?usp=sharing">
                Crowdsourced resources for artists concerned about generative AI</a>
            
         
                <br></br>
                <a target="_blank" id="ref" href="https://alltechishuman.org/responsible-tech-organizations">
                Responsible Tech Organizations List (w/ All Tech is Human)</a>
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
            
            {project_and_publications()}
            {/* <br></br>
            {technicalSkills()} */}
            {/* <br></br>
            {teaching()} */}
            {/* <br></br>
            {ilo()} */}
            <br></br>
            {pressAndPub()}
            
            {/* <br></br>
            {contact()} */}
            <br></br>
            {websiteinfo()}
        </div>
    )
}