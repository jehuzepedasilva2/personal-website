import me from './assets/better.png';
import { personalInfo } from './data';
import './aboutme.css';
import { 
  cppSvg,
  cssSvg, 
  cSvg, 
  // htmlSvg, 
  javaScriptSvg, 
  javaSvg, 
  matplotlibSvg, 
  numpySvg, 
  pythonSvg, 
  reactSvg, 
  sqlSvg, 
  nodeSvg, 
  githubSvg
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
              <div className='git'>
                {nodeSvg}
              </div>
              <div className='c'>
                {cSvg}
              </div>
              <div className='cpp'>
                {cppSvg}
              </div>
              <div className='html'>
                {githubSvg}
              </div>
              <div className='sql'>
                {cssSvg}
              </div>
              <div className='css'>
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
