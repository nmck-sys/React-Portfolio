import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <Link to="/" className="nav-link">About</Link>
      <Link to="/portfolio" className="nav-link">Portfolio</Link>
      <Link to="/contact" className="nav-link">Contact</Link>
      <Link to="/resume" className="nav-link">Resume</Link>
    </nav>
  );
};

export default Nav;