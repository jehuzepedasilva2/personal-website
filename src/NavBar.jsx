import './navbar.css';

export default function NavBar() {
  return (
    <div className="nav-bar">
      <div className="buttons">
        <button className='selected'>Home</button>
        <button>About</button>
        <button>Projects</button>
        <button>Contact</button>
      </div>
      <div className='line'></div>
    </div>
  );
}