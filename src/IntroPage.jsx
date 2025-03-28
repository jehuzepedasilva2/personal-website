import satelite from './assets/satelite2.png';
import { personalInfo } from './data';
import './intropage.css';


export default function IntroPage() {

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
        Hi, I'm <span className='glitch-button-text' data-text={personalInfo.name.split(' ')[0]}>{personalInfo.name.split(' ')[0]}</span>. <br></br>
        I am a {personalInfo.title}.
      </p>
      <button
        onClick={handleClick}
      >
        <h1 className='glitch-button-text' data-text='More About Me ▽'>
          More About Me ▽
        </h1>
      </button>
      <div className='sat-container'>
        <img src={satelite}></img>
      </div>
    </div>
  );
}