import { personalInfo } from "./data";
import './contact.css';
import { 
  locationSvg, 
  phoneSvg, 
  emailSvg, 
  githubLinksvg,
  linkedinSvg
} from "./svgs";
import glitchText from "./glitchText.js";
import { useRef } from "react";

function Footer() {

  const upRef = useRef(null);

  const handleUpClick = () => {
    const root = document.getElementById('root');
    const element = document.getElementById('intro');
    const y = element.getBoundingClientRect().top - window.scrollY;
    root.scrollTo({
      top: y,
      behavior: "smooth",
    })
  }

  const handleGitClick = () => {
    window.open(personalInfo.githubSchoolLink, '_blank');
  }

  const handleLinkedinClick = () => {
    window.open(personalInfo.linkedInLink, '_blank');
  }

  return (
    <div className="footer">
      <div className="footer-links">
        <button 
          className="footer-button"
          onClick={handleGitClick}
        >
          {githubLinksvg}
        </button>
        <button 
          className="footer-button"
          onClick={handleLinkedinClick}
        >
          {linkedinSvg}
        </button>
      </div>
      <div className="created">
        <p>{personalInfo.name.toUpperCase()} ©2025</p>
      </div>
      <div 
        className="back-up glitch"
        ref={upRef}
        onMouseEnter={() => glitchText(upRef)} 
        data-text='⇧'
        onClick={handleUpClick}
      >
        ⇧
      </div>
    </div>
  );
}

export default function Contact() {

  const phoneRef = useRef(null);
  const emailRef = useRef(null);

  return (
    <div className='contact-page'>
      <p>Contact</p>
      <div className="contact-inner">
        <div className='contact-message'>
          <p>{personalInfo.contactMessage}</p>
        </div>
        <div className="contact-info">
          <div className="sub-c location">
            {locationSvg}
            <p>{personalInfo.location}</p>
          </div>
          <div className="sub-c phone-num">
            {phoneSvg}
            <a ref={phoneRef} className="glitch" href="tel:4088075334" onMouseEnter={() => glitchText(phoneRef)} data-text={personalInfo.phone}>{personalInfo.phone}</a>
          </div>
          <div className="sub-c email">
            {emailSvg}
            <a ref={emailRef} className="glitch" href="mailto:jehuzepeda@yahoo.com" onMouseEnter={() => glitchText(emailRef)} data-text={personalInfo.email}>{personalInfo.email}</a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}