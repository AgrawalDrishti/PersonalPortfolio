import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { StickerBadge, DoodleUnderline, DoodleSquiggle, Blob } from '../components/Doodles';
import './Home.css';

const quickLinks = [
  { to: '/works', label: 'See my work', sticker: 'projects', color: 'var(--accent-orange)', rotate: -4 },
  { to: '/skills', label: 'What I use', sticker: 'skills', color: 'var(--accent-blue)', rotate: 3 },
  { to: '/about', label: 'Who I am', sticker: 'about me', color: 'var(--accent-lime)', rotate: -3 },
  { to: '/contact', label: "Let's talk", sticker: 'say hi', color: 'var(--accent-pink)', rotate: 4 }
];

const Home = () => {
  const scrubRef = useRef(null);
  const scrubTextRef = useRef(null);

  useEffect(() => {
    const getMaxTranslate = () => {
      if (!scrubTextRef.current) return 0;
      const textWidth = scrubTextRef.current.scrollWidth;
      return Math.max(0, textWidth - window.innerWidth + 220);
    };

    const setHeight = () => {
      if (!scrubRef.current) return;
      scrubRef.current.style.height = `${getMaxTranslate() + window.innerHeight}px`;
    };

    const handleScroll = () => {
      if (!scrubRef.current || !scrubTextRef.current) return;
      const rect = scrubRef.current.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const progress = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0;
      scrubTextRef.current.style.transform = `translateX(-${progress * getMaxTranslate()}px)`;
    };

    setHeight();
    document.fonts?.ready?.then(() => {
      setHeight();
      handleScroll();
    });
    window.addEventListener('resize', setHeight);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('resize', setHeight);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="home-page">
      <Hero />

      {/* Scroll-scrubbed statement */}
      <section className="scrub-section" ref={scrubRef}>
        <div className="scrub-sticky">
          <p className="scrub-caption">
            scroll on
            <DoodleSquiggle color="var(--accent-lime)" className="scrub-caption-doodle" />
          </p>
          <h2 className="scrub-text" ref={scrubTextRef}>
            I BUILD PRODUCTS PEOPLE <em>ACTUALLY</em> WANT TO USE — FROM GEN&nbsp;AI TO FULL&nbsp;STACK.
          </h2>
        </div>
      </section>

      {/* Quick links collage */}
      <section className="quick-links-section">
        <Blob color="var(--accent-blue)" className="quick-links-blob-1" />
        <Blob color="var(--accent-green)" className="quick-links-blob-2" />

        <h2 className="section-heading">
          Where to next<span className="heading-dot">?</span>
        </h2>
        <DoodleUnderline color="var(--ink)" className="section-heading-underline" />

        <div className="quick-links-grid">
          {quickLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="quick-link-card"
              style={{ '--rotate': `${item.rotate}deg`, background: item.color }}
            >
              <StickerBadge color="var(--paper)" rotate={-item.rotate} className="quick-link-sticker">
                {item.sticker}
              </StickerBadge>
              <span className="quick-link-label">{item.label}</span>
              <span className="quick-link-arrow">→</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="home-cta-section">
        <p className="home-cta-eyebrow">say hi</p>
        <h2 className="home-cta-title">
          Let's build something <em>great</em>
          <DoodleUnderline color="var(--accent-lime)" className="home-cta-underline" />
        </h2>
        <Link to="/contact" className="home-cta-button">
          Get in touch
        </Link>
      </section>
    </div>
  );
};

export default Home;
