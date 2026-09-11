import './Doodles.css';

export const DoodleUnderline = ({ color = 'var(--ink)', className = '' }) => (
  <svg
    className={`doodle doodle-underline ${className}`}
    viewBox="0 0 240 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 15C40 6 90 3 120 8C150 13 190 18 237 9"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
);

export const DoodleArrow = ({ color = 'var(--ink)', className = '' }) => (
  <svg
    className={`doodle doodle-arrow ${className}`}
    viewBox="0 0 120 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 10C35 5 70 5 90 40C100 58 80 65 65 55"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="round"
    />
    <path
      d="M50 48L65 55L60 38"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const DoodleSquiggle = ({ color = 'var(--ink)', className = '' }) => (
  <svg
    className={`doodle doodle-squiggle ${className}`}
    viewBox="0 0 60 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 5C25 15 5 30 25 40C45 50 25 65 5 75"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
);

export const Blob = ({ color = 'var(--accent-blue)', className = '', style = {} }) => (
  <svg
    className={`doodle-blob ${className}`}
    style={style}
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill={color}
      d="M55.6,-45.7C68.4,-32.4,73.5,-11.9,69.2,6.1C64.9,24.1,51.2,39.6,35.1,50.7C19,61.8,0.5,68.5,-19.1,67.3C-38.7,66.1,-59.4,57,-68.5,40.9C-77.6,24.8,-75.1,1.7,-67.6,-18.2C-60.1,-38.1,-47.6,-54.8,-31.7,-67.3C-15.8,-79.8,3.5,-88.1,20.6,-83.5C37.7,-78.9,53.6,-61.4,55.6,-45.7Z"
      transform="translate(100 100)"
    />
  </svg>
);

export const StickerBadge = ({ children, color = 'var(--accent-lime)', rotate = -6, className = '' }) => (
  <span
    className={`sticker-badge ${className}`}
    style={{ background: color, transform: `rotate(${rotate}deg)` }}
  >
    {children}
  </span>
);
