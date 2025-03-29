import { personalInfo } from "./data";
import './contact.css';
import { 
  locationSvg, 
  phoneSvg, 
  emailSvg, 
  githubLinksvg,
  linkedinSvg
} from "./svgs";

function Footer() {

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
    </div>
  );
}

export default function Contact() {
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
            <a className="glitch-button-text" href="tel:4088075334" data-text={personalInfo.phone}>{personalInfo.phone}</a>
          </div>
          <div className="sub-c email">
            {emailSvg}
            <a className="glitch-button-text" href="mailto:jehuzepeda@yahoo.com" data-text={personalInfo.email}>{personalInfo.email}</a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}