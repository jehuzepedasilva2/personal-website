import './projects.css';
import { projects } from './data';
import React, { useRef, useState } from 'react';

// carousel of all the projects;

function Carousel({ itemRefs, currentId, setCurrentId }) {

  const containerRef = useRef(null);

  const handleScroll = () => {
    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();
    const containerCenterX = containerRect.left + containerRect.width / 2;
    // find the current item
    let closest = Number.MAX_VALUE;
    let closestId = null;
    for (const item in itemRefs) {
      const itemRect = itemRefs[item].current.getBoundingClientRect();
      const itemCenterX = itemRect.left + itemRect.width / 2;
      if (Math.abs(containerCenterX - itemCenterX) < closest) {
        closest = Math.abs(containerCenterX - itemCenterX);
        closestId = Number(item);
      }
    }
    if (closestId !== currentId) {
      setCurrentId(closestId);
    }
  };

  return (
    <div 
      className='carousel-container'
      ref={containerRef}
      onScroll={() => handleScroll()}
    >
      {projects.map(p => {
        return (
          <div key={p.id} 
            ref={itemRefs[p.id]}
            className='carousel-item' 
          >
            <img src={p.screenShotLink}></img>
          </div>
        );
      })}
    </div>
  );
}

function ProjectData({ id }) {
  // find the project
  let project = null;
  for (const p of projects) {
    if (p.id == id) {
      project = p;
      break;
    }
  }
  return (
    <div className='project-data'>
      <p className='proj-title'>{project.projName}</p>
      <p>{project.description}</p>
      {/* <p className='link live-link'><a href={project.liveLink} target='_blank'>Live Demo</a></p>
      <p className='link git-link'><a href={project.gitLink} target='_blank'>Source Code</a></p> */}
    </div>
  );
}

export default function Projects() {

  const imageRefs = useRef(projects.reduce((acc, p) => {
    acc[p.id] = React.createRef();
    return acc;
  }, {})).current;

  const [currentId, setCurrentId] = useState(1); // default project

  return (
    <div className='project-page'>
      <div className='project-header'>
        <p>Projects</p>
      </div>
      <div className="project-disp">
        <div className='disp-left'>
          <Carousel itemRefs={imageRefs} currentId={currentId} setCurrentId={setCurrentId}/>
        </div>
        <div className='disp-right'>
          {/* use the currentId to index into projects and display that projects info */}
          <ProjectData id={currentId} />
        </div>
      </div>
    </div>
  );
}

// one full page per project?
function Project({ project }) {
  return (
    <div className='project-card'>
      {project.id}
    </div>
  );
}