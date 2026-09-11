import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navigation.css';

const NAV_ITEMS = [
  { to: '/works', label: 'Works.', color: 'var(--accent-orange)', rotate: -3 },
  { to: '/skills', label: 'Skills.', color: 'var(--accent-blue)', rotate: 2 },
  { to: '/about', label: 'About.', color: 'var(--accent-lime)', rotate: -2 },
  { to: '/contact', label: 'Contact.', color: 'var(--accent-pink)', rotate: 3 }
];

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <nav className="navigation">
        <div className="nav-links">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`nav-link ${location.pathname === item.to ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          className="nav-toggle"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div className={`nav-overlay ${isOpen ? 'is-open' : ''}`}>
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="nav-overlay-link"
            style={{ background: item.color, '--rotate': `${item.rotate}deg` }}
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navigation;
