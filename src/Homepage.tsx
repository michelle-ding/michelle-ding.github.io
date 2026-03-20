import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import "./styles/homepage.css";
import michelle from './images/michelle_ding_portrait.jpg'
import michelle1 from './images/michelle.png'
import icon from './images/icon.png'

function Homepage() {
  const [headerContent, setHeaderContent] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/markdown/header.md")
      .then((res) => res.text())
      .then((text) => setHeaderContent(text));

    fetch("/markdown/about.md")
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
   <div className="page-wrapper">
  <div className="markdown-container">
    <div className="header-wrapper">
      <img src={michelle} alt="Portrait" className="portrait" />
      <div className="header-text">
        
        <ReactMarkdown>{headerContent}</ReactMarkdown>
        <a href="https://michellelding.substack.com/" target="_blank">
          <img src={icon} alt="Illustration" className="icon" />
          </a>

      </div>
    </div>

    <ReactMarkdown>{content}</ReactMarkdown>
  </div>

  <footer className="footer">
    &copy; {new Date().getFullYear()} Michelle L. Ding • All Rights Reserved
  </footer>
</div>
  );
}

export default Homepage;