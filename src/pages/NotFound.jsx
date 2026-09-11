import { Link } from 'react-router-dom';
import { DoodleUnderline, DoodleSquiggle, StickerBadge, Blob } from '../components/Doodles';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="notfound-page">
      <Blob color="var(--accent-blue)" className="notfound-blob-1" />
      <Blob color="var(--accent-pink)" className="notfound-blob-2" />

      <StickerBadge color="var(--accent-lime)" rotate={-6} className="notfound-sticker">
        error ✦
      </StickerBadge>

      <h1 className="notfound-title">
        404<span className="notfound-squiggle-wrap"><DoodleSquiggle color="var(--accent-orange)" /></span>
      </h1>
      <p className="notfound-subtitle">
        looks like this page wandered off <em>somewhere else</em>
      </p>
      <DoodleUnderline color="var(--ink)" className="notfound-underline" />

      <Link to="/" className="notfound-button">
        take me home
      </Link>
    </div>
  );
};

export default NotFound;
