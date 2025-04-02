import satelite from './assets/satelite2.png';
import { personalInfo } from './data';
import { useRef } from 'react';
import './intropage.css';
import glitchText from './glitchText.js';


export default function IntroPage() {

  const h1Glitch = useRef(null);
  const pGlitch = useRef(null);

  const handleClick = () => {
    const oldSelected = document.querySelector('.selected');
    oldSelected.classList.remove('selected');
    document.getElementById('about-nav').classList.add('selected');

    const element = document.getElementById('about');
    const root = document.getElementById('root');
    const y = element.offsetTop;
    root.scrollTo({
      top: y, 
      behavior: 'smooth'
    })
    document.title = 'About';
  };

  return (
    <div className='intro-page'>
      <p className='intro-text'>
        Hi, I'm <span ref={pGlitch} className='glitch' onMouseEnter={() => glitchText(pGlitch)} data-text={personalInfo.name.split(' ')[0]}>{personalInfo.name.split(' ')[0]}</span>. <br></br>
        I am a {personalInfo.title}.
      </p>
      <button
        onClick={handleClick}
        onMouseEnter={() => glitchText(h1Glitch)}
      >
        <h1 className='glitch' ref={h1Glitch} onMouseEnter={() => glitchText(h1Glitch)} data-text='More About Me ▽'>
        {/* <h1 className='glitch-button-text' data-text='More About Me ▽'> */}
          More About Me ▽
        </h1>
      </button>
      <div className='sat-container'>
        <img src={satelite}></img>
      </div>
    </div>
  );
}