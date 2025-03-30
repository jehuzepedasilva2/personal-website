import me from './assets/better.png';
import { personalInfo } from './data';
import './aboutme.css';
import { 
  cppSvg,
  cssSvg, 
  cSvg, 
  githubSvg, 
  htmlSvg, 
  javaScriptSvg, 
  javaSvg, 
  matplotlibSvg, 
  numpySvg, 
  pythonSvg, 
  reactSvg, 
  sqlSvg 
} from './svgs';

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
              <div className='java'>
                {javaSvg}
              </div>
              <div className='py'>
                {pythonSvg}
              </div>
              <div className='js'>
                {javaScriptSvg}
              </div>
              <div className='html'>
                {htmlSvg}
              </div>
              <div className='c'>
                {cSvg}
              </div>
              <div className='cpp'>
                {cppSvg}
              </div>
              <div className='git'>
                {githubSvg}
              </div>
              <div className='css'>
                {cssSvg}
              </div>
              <div className='sql'>
                {sqlSvg}
              </div>
              <div className='numpy'>
                {numpySvg}
              </div>
              <div className='matplotlib'>
                {matplotlibSvg}
              </div>
              <div className='jsx'>
                {reactSvg}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
