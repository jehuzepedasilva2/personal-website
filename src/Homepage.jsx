import './homepage.css'
import NavBar from './NavBar';
import { projects, personalInfo } from './data';

function LoadPage() {
  return (
    <div className='front'>
      <p className='intro-text'>
        Hi, I'm <span>{personalInfo.name}</span>. <br></br>
        I am a {personalInfo.title}.
      </p>
    </div>
  );
}

export default function Homepage() {
  return (
    <div>
      <NavBar />
      <LoadPage />
    </div>
  );
}