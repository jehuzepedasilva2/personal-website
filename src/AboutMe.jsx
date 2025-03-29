import me from './assets/better.png';
import { personalInfo } from './data';
import './aboutme.css';
import { 
  cssSvg, 
  cSvg, 
  githubSvg, 
  htmlSvg, 
  javaScriptSvg, 
  pythonSvg, 
  reactSvg, 
  sqlSvg 
} from './svgs';

// ! TODO: Add more languages?

export default function AboutMe() {
  return (
    <div className='about-page'>
      <div className='about-content'>
        <p>About</p>
        <div className="about-content-bottom">
          <div className='about-left'>
            <img src={me}></img>
            <p>
             {personalInfo.about}
            </p>
          </div>
          <div className='about-right'>
            <div className='technologies'>
              <div className='tech1'>
                {pythonSvg}
              </div>
              <div className='tech2'>
                {javaScriptSvg}
              </div>
              <div className='tech3'>
                {htmlSvg}
              </div>
              <div className='tech4'>
                {cSvg}
              </div>
              <div className='tech5'>
                {githubSvg}
              </div>
              <div className='tech6'>
                {cssSvg}
              </div>
              <div className='tech8'>
                {sqlSvg}
              </div>
              <div className='tech10'>
                {reactSvg}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
