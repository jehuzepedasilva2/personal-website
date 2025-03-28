import './page.css'
import { useEffect, useRef, useState } from 'react';
import NavBar from './NavBar.jsx';
import IntroPage from './IntroPage.jsx';
import AboutMe from './AboutMe.jsx';
import Projects from './Projects.jsx';

export default function Page() {
  const [activeSection, setActiveSection] = useState('intro');

  const refs = {
    intro: useRef(null),
    about: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    Object.values(refs).forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  });

  return (
    <div>
      <NavBar activeSection={activeSection} setActiveSection={setActiveSection} />
      <div id="intro" ref={refs.intro} className="section"><IntroPage /></div>
      <div id="about" ref={refs.about} className="section"><AboutMe /></div>
      <div id="projects" ref={refs.projects} className="section"><Projects /></div>
      <div id="contact" ref={refs.contact} className="section">Contact</div>
    </div>
  );
}
