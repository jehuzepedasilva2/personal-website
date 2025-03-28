import './homepage.css'
import { projects, personalInfo } from './data';

export default function Homepage() {
  return (
    <div className='front'>
      <p className='intro-text'>
        Hi, I'm <span>{personalInfo.name}</span>. <br></br>
        I am a {personalInfo.title}.
      </p>
    </div>
  );
}