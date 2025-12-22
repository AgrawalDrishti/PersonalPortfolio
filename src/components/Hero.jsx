import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="highlight">D</span>RISHTI 
        </h1>
        <p className="hero-subtitle">LEARNER • CREATOR • SOFTWARE ENGINEER </p>
      </div>
      <div className="hero-footer">
        <div className="hero-location">BASED IN NOIDA</div>
        <div className="hero-reach">WORKING GLOBALLY</div>
      </div>
    </section>
  );
};

export default Hero;

