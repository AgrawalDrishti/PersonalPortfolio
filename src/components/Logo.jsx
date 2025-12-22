import { Link } from 'react-router-dom';
import './Logo.css';

const Logo = () => {
  return (
    <Link to="/" className="logo-container">
      <svg className="logo" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="30" cy="30" r="28" stroke="currentColor" strokeWidth="2"/>
        <path 
          d="M15 30 Q20 25, 25 30 T35 30 Q40 35, 45 30" 
          stroke="currentColor" 
          strokeWidth="2" 
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </Link>
  );
};

export default Logo;
