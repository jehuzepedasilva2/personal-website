import './projects.css';
import { projects } from './data';

export default function Projects() {
  return (
    <div className='project-page'>
      <div className='project-header'>
        <p>Projects</p>
      </div>
    </div>
  );
}

// one full page per project?
function Project({ project }) {
  return (
    <div className='project-card'>

    </div>
  );
}