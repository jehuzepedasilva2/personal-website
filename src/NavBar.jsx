import './navbar.css';

function NavButton({ name, id, isSelected=false }) {

  const handleClick = (e) => {
    // get old selected
    const oldSelected = document.querySelector('.selected');
    oldSelected.classList.remove('selected');
    // process newly clicked
    e.target.classList.add('selected');
    const elementId = e.target.id.split('-')[0];
    const element = document.getElementById(elementId);
    element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <button
      id={id}
      className={`${isSelected ? 'selected' : ''}`}
      onClick={(e) => handleClick(e)}
    >
      {name}
    </button>
  );
}

export default function NavBar() {

  return (
    <div className="nav-bar">
      <div className="buttons">
        <NavButton name='Home' id='intro-nav' isSelected={true} />
        <NavButton name='About' id='about-nav' />
        <NavButton name='Projects' id='projects-nav' />
        <NavButton name='Contact' id='contact-nav' />
      </div>
      <div className='line'></div>
    </div>
  );
}