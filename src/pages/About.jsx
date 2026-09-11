import { useState, useEffect, useRef } from 'react';
import {
  MapPin, Sparkles, GraduationCap, Briefcase, Target, Telescope,
  Sprout, Rocket, Bot, Lightbulb, Star, Film, MessageCircle, Palette,
  Plane, Code2, ArrowRight
} from 'lucide-react';
import { DoodleUnderline, StickerBadge } from '../components/Doodles';
import './About.css';

const About = () => {
  const [counters, setCounters] = useState({ projects: 0, technologies: 0, years: 0 });
  const [activeTimeline, setActiveTimeline] = useState(null);
  const pageRef = useRef(null);
  const statsRef = useRef(null);
  const timelineRef = useRef(null);
  const timelineFillRef = useRef(null);
  const ctaButtonRef = useRef(null);

  // Reveal-on-scroll for every [data-reveal] element
  useEffect(() => {
    const items = pageRef.current.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-in-view', 'true');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  // Animated counters, triggered once stats strip enters view
  useEffect(() => {
    const targets = { projects: 6, technologies: 10, years: 4 };
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const duration = 1600;
        const steps = 60;
        const stepDuration = duration / steps;
        let current = { projects: 0, technologies: 0, years: 0 };

        const interval = setInterval(() => {
          current.projects = Math.min(current.projects + targets.projects / steps, targets.projects);
          current.technologies = Math.min(current.technologies + targets.technologies / steps, targets.technologies);
          current.years = Math.min(current.years + targets.years / steps, targets.years);

          setCounters({
            projects: Math.floor(current.projects),
            technologies: Math.floor(current.technologies),
            years: Math.floor(current.years)
          });

          if (
            current.projects >= targets.projects &&
            current.technologies >= targets.technologies &&
            current.years >= targets.years
          ) {
            clearInterval(interval);
          }
        }, stepDuration);
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  // Scroll-driven progress line for the timeline
  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current || !timelineFillRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const viewportMid = window.innerHeight * 0.6;
      const progress = (viewportMid - rect.top) / rect.height;
      const clamped = Math.max(0, Math.min(1, progress));
      timelineFillRef.current.style.height = `${clamped * 100}%`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Subtle mouse-follow parallax for the background orbs
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      pageRef.current?.style.setProperty('--mx', x.toFixed(3));
      pageRef.current?.style.setProperty('--my', y.toFixed(3));
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleMagnetMove = (e) => {
    const btn = ctaButtonRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    btn.style.transform = `translate(${relX * 0.25}px, ${relY * 0.25}px)`;
  };

  const handleMagnetLeave = () => {
    if (ctaButtonRef.current) ctaButtonRef.current.style.transform = '';
  };

  const handleTilt = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(600px) rotateX(${-py * 10}deg) rotateY(${px * 10}deg) translateY(-4px)`;
  };

  const resetTilt = (e) => {
    e.currentTarget.style.transform = '';
  };

  const timeline = [
    {
      year: '2021',
      title: 'Started My Journey',
      description: 'Discovered my passion for coding and began exploring web development',
      icon: Sprout,
      details: 'Built my first website, learned HTML, CSS, JavaScript'
    },
    {
      year: '2022',
      title: 'First Major Projects',
      description: 'Built full-stack applications and dove into machine learning',
      icon: Rocket,
      details: 'Created food delivery app, explored React and Flutter'
    },
    {
      year: '2023',
      title: 'Advanced Development',
      description: 'Worked on AI/ML projects and cloud deployment solutions',
      icon: Bot,
      details: 'NLP projects, deployment automation, Google Cloud'
    },
    {
      year: '2024',
      title: 'Internship at Adobe',
      description: 'Developed impactful feature for Acrobat, enhancing the user experience and productivity.',
      icon: Lightbulb,
      details: 'Gen AI Integration, Automation of tasks'
    },
    {
      year: '2025',
      title: 'Software Engineer at Adobe',
      description: 'Full time software engineer at Adobe, working in Globalisation team.',
      icon: Star,
      details: 'Full Stack Development, Gen AI Integration, Automation of tasks'
    }
  ];

  const interests = [
    { icon: Film, title: 'Movie Watching', description: 'From classics to latest releases' },
    { icon: MessageCircle, title: 'Chit Chat', description: 'Connecting & sharing stories' },
    { icon: Palette, title: 'Designing', description: 'UI/UX & creative exploration' },
    { icon: Plane, title: 'Travelling', description: 'Exploring new places & cultures' }
  ];

  const techStack = [
    'React', 'Python', 'JavaScript', 'Machine Learning', 'Docker',
    'Django', 'Flutter', 'NLP', 'Firebase', 'Blockchain', 'TypeScript', 'Google Cloud'
  ];

  return (
    <div className="about-page" ref={pageRef}>
      {/* Hero */}
      <section className="about-hero">
        <div className="hero-grid">
          <div className="hero-text" data-reveal>
            <span className="eyebrow">About Me</span>
            <h1 className="about-name">
              Hi, I'm <span className="highlight-text">Drishti</span>
            </h1>
            <p className="about-tagline">
              Software Engineer at Adobe — building intelligent solutions with Gen AI
              and full-stack development.
            </p>
            <div className="about-meta">
              <span className="meta-pill"><MapPin size={14} /> Noida, India</span>
              <span className="meta-pill"><Sparkles size={14} /> Open to collaborations</span>
            </div>
          </div>

          <div className="hero-visual" data-reveal>
            <div className="photo-ring">
              <img src="/profile-pic.JPG" alt="Drishti Agrawal" className="profile-image" />
            </div>
          </div>
        </div>

        <div className="stats-strip" ref={statsRef} data-reveal>
          <div className="stat-block">
            <span className="stat-number">{counters.projects}+</span>
            <span className="stat-label">Projects</span>
          </div>
          <span className="stat-divider" />
          <div className="stat-block">
            <span className="stat-number">{counters.technologies}+</span>
            <span className="stat-label">Technologies</span>
          </div>
          <span className="stat-divider" />
          <div className="stat-block">
            <span className="stat-number">{counters.years}+</span>
            <span className="stat-label">Years Experience</span>
          </div>
        </div>
      </section>

      {/* Tech Marquee */}
      <section className="tech-marquee-section" data-reveal>
        <h2 className="section-title">Tech I Work With</h2>
        <DoodleUnderline color="var(--cream-text)" className="section-title-underline" />
        <div className="marquee">
          <div className="marquee-track">
            {[...techStack, ...techStack].map((tech, index) => (
              <span className="marquee-item" key={index}>{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="about-story" data-reveal>
        <h2 className="section-title">My Story</h2>
        <DoodleUnderline color="var(--ink)" className="section-title-underline" />
        <div className="story-content">
          <span className="quote-mark">&ldquo;</span>
          <p className="story-paragraph">
            Started my grind as a JEE aspirant in 2020 and made it to IIT as a CSE student.
            First year was all about exploring new domains, new people, late-night chaos.
            Eventually got pulled into the tech world, kicked off with web dev, moved to
            app dev, tinkered with Unity, and did some competitive programming on the side.
          </p>
          <p className="story-paragraph">
            After plenty of late-night CP contests and internship prep, I landed a Product
            Intern role at Adobe with the Globalisation team. Wrapped up the summer, bagged
            the PPO, and now rolling as a Software Engineer at Adobe.
          </p>
        </div>
      </section>

      {/* Bento Info Grid */}
      <section className="info-cards-section" data-reveal>
        <div className="bento-grid">
          <div className="bento-card bento-card-education">
            <GraduationCap className="bento-icon" size={28} />
            <h3>Education</h3>
            <p className="card-detail">B.Tech in Computer Science, IIT</p>
            <p className="card-subdetail">Specializing in Software Engineering</p>
          </div>

          <div className="bento-card bento-card-experience">
            <Briefcase className="bento-icon" size={28} />
            <h3>Experience</h3>
            <p className="card-detail"><strong>Adobe Inc.</strong></p>
            <p className="card-subdetail">Product Intern — Summer 2024</p>
            <p className="card-subdetail">Software Engineer — 2025 to Present</p>
            <p className="card-subdetail">Gen AI Integration • Automation</p>
          </div>

          <div className="bento-card bento-card-focus">
            <Target className="bento-icon" size={28} />
            <h3>Focus Areas</h3>
            <ul className="focus-list">
              <li>Machine Learning &amp; NLP</li>
              <li>Web Development</li>
              <li>Cloud &amp; DevOps</li>
              <li>Blockchain</li>
            </ul>
          </div>

          <div className="bento-card bento-card-currently">
            <Telescope className="bento-icon" size={28} />
            <h3>Currently</h3>
            <p className="card-detail">Software Engineer at Adobe</p>
            <p className="card-subdetail">Globalisation Team</p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline-section" data-reveal>
        <h2 className="section-title">My Journey</h2>
        <DoodleUnderline color="var(--ink)" className="section-title-underline" />
        <div className="timeline" ref={timelineRef}>
          <div className="timeline-line">
            <div className="timeline-line-fill" ref={timelineFillRef}></div>
          </div>
          {timeline.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`timeline-item ${activeTimeline === index ? 'active' : ''}`}
                onMouseEnter={() => setActiveTimeline(index)}
                onMouseLeave={() => setActiveTimeline(null)}
                data-reveal
              >
                <div className="timeline-marker">
                  <Icon size={22} />
                </div>
                <div className="timeline-content">
                  <span className="timeline-year">{item.year}</span>
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-description">{item.description}</p>
                  {activeTimeline === index && (
                    <p className="timeline-details fade-in">{item.details}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Interests */}
      <section className="interests-section" data-reveal>
        <h2 className="section-title">Beyond the Code</h2>
        <DoodleUnderline color="var(--cream-text)" className="section-title-underline" />
        <div className="interests-grid">
          {interests.map((interest, index) => {
            const Icon = interest.icon;
            return (
              <div
                key={index}
                className="interest-card"
                onMouseMove={handleTilt}
                onMouseLeave={resetTilt}
              >
                <Icon className="interest-icon" size={26} />
                <h4 className="interest-title">{interest.title}</h4>
                <p className="interest-description">{interest.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" data-reveal>
        <StickerBadge color="var(--accent-pink)" rotate={-6} className="cta-sticker">
          say hi
        </StickerBadge>
        <h2 className="cta-title">Let's Connect and Collaborate</h2>
        <p className="cta-description">
          I'm always excited to connect with fellow developers and discuss innovative ideas.
        </p>
        <div className="cta-buttons">
          <a
            href="/contact"
            className="cta-button primary"
            ref={ctaButtonRef}
            onMouseMove={handleMagnetMove}
            onMouseLeave={handleMagnetLeave}
          >
            Connect With Me
            <ArrowRight size={18} />
          </a>
          <a
            href="https://github.com/AgrawalDrishti"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button secondary"
          >
            <Code2 size={18} />
            View GitHub
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
