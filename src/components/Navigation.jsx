import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const location = useLocation();
  
  return (
    <nav className="navigation">
      <div className="nav-links">
        <Link to="/works" className={`nav-link ${location.pathname === '/works' ? 'active' : ''}`}>
          Works.
        </Link>
        <Link to="/skills" className={`nav-link ${location.pathname === '/skills' ? 'active' : ''}`}>
          Skills.
        </Link>
        <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>
          About.
        </Link>
        <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>
          Contact.
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
