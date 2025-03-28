import './page.css'
import NavBar from './NavBar';
import { projects, personalInfo } from './data';

function IntroPage() {

  const handleClick = () => {
    const oldSelected = document.querySelector('.selected');
    oldSelected.classList.remove('selected');
    document.getElementById('about-nav').classList.add('selected');
    const element = document.getElementById('about');
    element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className='intro-page'>
      <p className='intro-text'>
        Hi, I'm <span className='glitch-button-text' data-text={personalInfo.name}>{personalInfo.name}</span>. <br></br>
        I am a {personalInfo.title}.
      </p>
      <button
        onClick={handleClick}
      >
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
      <div id='intro' className='section'><IntroPage /></div>
      <div id='about' className='section'><AboutMe/></div>
      <div id='projects' className='section'></div>
      <div id='contact' className='section'></div>
    </div>
  );
}