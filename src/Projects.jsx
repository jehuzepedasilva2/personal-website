import './projects.css';
import { 
  filledCircle, 
  emptyCircle, 
  liveLinkSvg, 
  githubLinksvg 
} from './svgs';
import { projects } from './data';
import React, { 
  useRef, 
  useState,
  useEffect,
} from 'react';

function Carousel({ itemRefs, currentId, setCurrentId, setPreviousId }) {

  let dotStatus = projects.map(() => emptyCircle);
  dotStatus[0] = filledCircle;

  const containerRef = useRef(null);
  const [dots, setDots] = useState(dotStatus)

  const updateCarousel = (current, next) => {
    setCurrentId(next);
    setPreviousId(current);
    const newDots = [...dots];
    newDots[current-1] = emptyCircle;
    newDots[next-1] = filledCircle;
    setDots(newDots);
  }

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
      updateCarousel(currentId, closestId);
    }
  };

  const handleNextClick = () => {
    const nextId = currentId + 1;
    if (currentId < dots.length) {
      const element = document.getElementById(`${nextId}`);
      element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest'});
    }
  }

  const handlePrevClick = () => {
    const nextId = currentId - 1;
    if (nextId > 0) {
      const element = document.getElementById(`${nextId}`);
      element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
    }
  }

  return (
    <div 
      className='carousel-container'
      ref={containerRef}
      onScroll={() => handleScroll()}
    >
      {projects.map(p => {
        return (
          <div 
            id ={p.id}
            key={p.id+'-img'} 
            ref={itemRefs[p.id]}
            className='carousel-item' 
          >
            <img src={p.screenShotLink}></img>
          </div>
        );
      })}
      <div className='carousel-map-container'>
        {currentId > 1 ? (<div className='arrow prev-arrow' onClick={handlePrevClick}></div>) : (<div className='prev-disabled'></div>)}
        <div className='carousel-map'>
          {dots.map((c, i) => {
            return (
              <div
                id={`${i+1}-c`}
                key={`${i+1}-circle`}
                className='circle-map'
              >
                {c}
              </div>
          )})}
        </div>
        {currentId < projects.length ? (<div className='arrow next-arrow' onClick={handleNextClick}></div>) : (<div className='next-disabled'></div>)}
      </div>
    </div>
  );
}

function ProjectData({ id, previousId }) {

  // keep a ref of the project description tag
  const projectDataRef = useRef(null);

  // find the project
  let project = null;
  for (const p of projects) {
    if (p.id == id) {
      project = p;
      break;
    }
  }

  useEffect(() => {
    if (id > previousId) {
      projectDataRef.current.classList.add('slide-down-new')
      setTimeout(() => {
        projectDataRef.current.classList.remove('slide-down-new')
      }, 200);
    } else {
      projectDataRef.current.classList.add('slide-up-prev')
      setTimeout(() => {
        projectDataRef.current.classList.remove('slide-up-prev')
      }, 200);
    }
  }, [id, previousId]);

  return (
    <div className='project-data' ref={projectDataRef}>
      <p className='proj-title' data-text={project.projName}>{project.projName}</p>
      <p className='proj-desc'>{project.description}</p>
      <div className="links">
        {project.projName !== 'DSA in JavaScript' && 
          <a 
            className='link live-link'
            href={project.liveLink}
            target='_blank'
          >
           {liveLinkSvg}
          </a>
        }
        <a 
          className='link git-link'
          href={project.gitLink}
          target='_blank'
        >
          {githubLinksvg}
        </a>
      </div>
    </div>
  );
}

export default function Projects() {

  const imageRefs = useRef(projects.reduce((acc, p) => {
    acc[p.id] = React.createRef();
    return acc;
  }, {})).current;

  const [currentId, setCurrentId] = useState(1); // default project
  const [previousId, setPreviousId] = useState(0);

  return (
    <div className='project-page'>
      <div className='project-header'>
        <p>Projects</p>
      </div>
      <div className="project-disp">
        <div className='disp-left'>
          <Carousel itemRefs={imageRefs} currentId={currentId} setCurrentId={setCurrentId} setPreviousId={setPreviousId}/>
        </div>
        <div className='disp-right'>
          {/* use the currentId to index into projects and display that projects info */}
          <ProjectData id={currentId} previousId={previousId} />
        </div>
      </div>
    </div>
  );
}