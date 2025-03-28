import './page.css'
import NavBar from './NavBar';
import { projects, personalInfo } from './data';

function IntroPage() {
  return (
    <div className='intro-page'>
      <p className='intro-text'>
        Hi, I'm <span className='glitch-button-text' data-text={personalInfo.name}>{personalInfo.name}</span>. <br></br>
        I am a {personalInfo.title}.
      </p>
      <button>
        <h1 className='glitch-button-text' data-text='About Me ▽'>
          About Me ▽
        </h1>
      </button>
    </div>
  );
}

function AboutMe() {
  return (
    <div className='about-page'>
      <div className='about-heading'>
        About
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div>
      <NavBar />
      <div className='section intro'><IntroPage /></div>
      <div className='section about-me'><AboutMe/></div>
      <div className='section projects'></div>
    </div>
  );
}