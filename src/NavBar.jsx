import './navbar.css';
import glitchText from './glitchText.js';
import { useRef } from 'react';

function NavButton({ name, id, isActive, onClick }) {

  const buttonRef = useRef(null);

  return (
    <button
      id={id}
      ref={buttonRef}
      className={`${isActive ? 'selected' : ''} nav-btn glitch`}
      onMouseEnter={() => glitchText(buttonRef)}
      data-text={name}
      onClick={() => onClick(id.split('-')[0])}
    >
      {name}
    </button>
  );
}

export default function NavBar({ activeSection, setActiveSection }) {
  const handleClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    setActiveSection(sectionId);
  };

  return (
    <div className="nav-bar">
      <div className="buttons">
        <NavButton name="Home" id="intro-nav" isActive={activeSection === 'intro'} onClick={handleClick} />
        <NavButton name="About" id="about-nav" isActive={activeSection === 'about'} onClick={handleClick} />
        <NavButton name="Projects" id="projects-nav" isActive={activeSection === 'projects'} onClick={handleClick} />
        <NavButton name="Contact" id="contact-nav" isActive={activeSection === 'contact'} onClick={handleClick} />
      </div>
      <div className="line"></div>
    </div>
  );
}