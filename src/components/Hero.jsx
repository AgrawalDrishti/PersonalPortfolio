import { StickerBadge, DoodleArrow } from './Doodles';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-frame">
        <img src="/hero-bg2.JPG" alt="Drishti Agrawal" className="hero-photo" />
        <div className="hero-frame-overlay"></div>

        <StickerBadge className="hero-sticker" color="var(--accent-lime)" rotate={-8}>
          open to work ✦
        </StickerBadge>

        <div className="hero-content">
          <h1 className="hero-title">
            <span className="highlight">D</span>RISHTI
          </h1>
          <p className="hero-subtitle">
            learner <em>&amp;</em> creator <em>&amp;</em> software engineer
          </p>
        </div>
      </div>

      <div className="hero-footer">
        <div className="hero-location">Based in Noida</div>
        <div className="hero-scroll-hint">
          <DoodleArrow className="hero-scroll-arrow" color="var(--ink)" />
          <span>keep scrolling</span>
        </div>
        <div className="hero-reach">Working Globally</div>
      </div>
    </section>
  );
};

export default Hero;
