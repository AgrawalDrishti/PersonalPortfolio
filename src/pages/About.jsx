import { useState, useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const [counters, setCounters] = useState({ projects: 0, technologies: 0, years: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);
  const [activeTimeline, setActiveTimeline] = useState(null);

  // Animated counter effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateCounters = () => {
    const targets = { projects: 6, technologies: 10, years: 4 };
    const duration = 2000;
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
  };

  const timeline = [
    {
      year: "2021",
      title: "Started My Journey",
      description: "Discovered my passion for coding and began exploring web development",
      icon: "🌱",
      details: "Built my first website, learned HTML, CSS, JavaScript"
    },
    {
      year: "2022",
      title: "First Major Projects",
      description: "Built full-stack applications and dove into machine learning",
      icon: "🚀",
      details: "Created food delivery app, explored React and Flutter"
    },
    {
      year: "2023",
      title: "Advanced Development",
      description: "Worked on AI/ML projects and cloud deployment solutions",
      icon: "🤖",
      details: "NLP projects, deployment automation, Google Cloud"
    },
    {
      year: "2024",
      title: "Internship at Adobe",
      description: "Developed impactful feature for Acrobat, enhancing the user experience and productivity.",
      icon: "💡",
      details: "Gen AI Integration, Automation of tasks"
    },
    {
      year: "2025",
      title: "Software Engineer at Adobe",
      description: "Full time software engineer at Adobe, working in Globalisation team.",
      icon: "⭐",
      details: "Full Stack Development, Gen AI Integration, Automation of tasks"
    }
  ];

  const interests = [
    { icon: "🎬", title: "Movie Watching", description: "From classics to latest releases" },
    { icon: "💬", title: "Chit Chat", description: "Connecting & sharing stories" },
    { icon: "🎨", title: "Designing", description: "UI/UX & creative exploration" },
    { icon: "✈️", title: "Travelling", description: "Exploring new places & cultures" }
  ];

  const techStack = [
    "React", "Python", "JavaScript", "Machine Learning", "Docker", 
    "Django", "Flutter", "NLP", "Firebase", "Blockchain", "TypeScript", "Google Cloud"
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-content-wrapper">
          <div className="about-image-container animated-float">
            <div className="about-image-placeholder">
              <img src="/profile-pic.JPG" alt="Drishti Agrawal" className="profile-image" />
            </div>
          </div>
          
          <div className="about-intro">
            <h1 className="about-name">
              Hi, I'm <span className="highlight-text">Drishti</span> 👋
            </h1>
            <p className="about-tagline">
              Software Engineer at Adobe • Building intelligent solutions with Gen AI and Full Stack Development
            </p>
            <div className="about-location">
              <span className="location-icon bounce-icon">📍</span>
              <span>Based in Noida, India</span>
            </div>
          </div>
        </div>

        {/* Animated Stats */}
        <div className="quick-stats" ref={statsRef}>
          <div className="stat-card">
            <span className="stat-number">{counters.projects}+</span>
            <span className="stat-label">Projects</span>
            <div className="stat-progress">
              <div className="stat-bar" style={{ width: `${(counters.projects / 6) * 100}%` }}></div>
            </div>
          </div>
          <div className="stat-card">
            <span className="stat-number">{counters.technologies}+</span>
            <span className="stat-label">Technologies</span>
            <div className="stat-progress">
              <div className="stat-bar" style={{ width: `${(counters.technologies / 10) * 100}%` }}></div>
            </div>
          </div>
          <div className="stat-card">
            <span className="stat-number">{counters.years}+</span>
            <span className="stat-label">Years Experience</span>
            <div className="stat-progress">
              <div className="stat-bar" style={{ width: `${(counters.years / 4) * 100}%` }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Tech Stack Cloud */}
      <section className="tech-stack-cloud">
        <h2 className="section-title">Tech I Work With</h2>
        <div className="floating-tags">
          {techStack.map((tech, index) => (
            <span 
              key={index} 
              className="floating-tag"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animationDuration: `${3 + (index % 3)}s`
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* About Story */}
      <section className="about-story">
        <h2 className="section-title">My Story</h2>
        <div className="story-content">
          <p className="story-paragraph">
          Started my grind as a JEE aspirant in 2020 and made it to IIT as a CSE student. First year was all about exploring new domains, new people, late-night chaos. Eventually got pulled into the tech world, kicked off with web dev, moved to app dev, tinkered with Unity, and did some competitive programming on the side.
          </p>
          <p className="story-paragraph">
          After plenty of late-night CP contests and internship prep, I landed a Product Intern role at Adobe with the Globalisation team. Wrapped up the summer, bagged the PPO, and now rolling as a Software Engineer at Adobe.
          </p>
        </div>
      </section>

      {/* Interactive Info Cards */}
      <section className="info-cards-section">
        <div className="info-cards">
          <div className="info-card flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="card-icon">🎓</div>
                <h3>Education</h3>
                <p className="card-detail">Hover to learn more</p>
              </div>
              <div className="flip-card-back">
                <h3>Education</h3>
                <p className="card-detail">B.Tech in Computer Science</p>
                <p className="card-subdetail">Specializing in Software Engineering</p>
                <p className="card-subdetail">Building strong foundation</p>
              </div>
            </div>
          </div>

          <div className="info-card flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="card-icon">💼</div>
                <h3>Experience</h3>
                <p className="card-detail">Hover to learn more</p>
              </div>
              <div className="flip-card-back">
                <h3>Experience</h3>
                <p className="card-detail"><strong>Adobe Inc.</strong></p>
                <p className="card-subdetail">Product Intern (Summer 2024)</p>
                <p className="card-subdetail">Software Engineer (2025 - Present)</p>
                <p className="card-subdetail">Gen AI Integration • Automation</p>
              </div>
            </div>
          </div>

          <div className="info-card flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="card-icon">🎯</div>
                <h3>Focus Areas</h3>
                <p className="card-detail">Hover to learn more</p>
              </div>
              <div className="flip-card-back">
                <h3>Focus Areas</h3>
                <ul className="focus-list">
                  <li>Machine Learning & NLP</li>
                  <li>Web Development</li>
                  <li>Cloud & DevOps</li>
                  <li>Blockchain</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="info-card flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="card-icon">🔭</div>
                <h3>Currently</h3>
                <p className="card-detail">Hover to learn more</p>
              </div>
              <div className="flip-card-back">
                <h3>Currently</h3>
                <p className="card-detail">Software Engineer at Adobe</p>
                <p className="card-subdetail">Globalisation Team</p>
                <p className="card-subdetail">Gen AI & Full Stack Development</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="timeline-section">
        <h2 className="section-title">My Journey</h2>
        <div className="timeline">
          {timeline.map((item, index) => (
            <div 
              key={index} 
              className={`timeline-item ${activeTimeline === index ? 'active' : ''}`}
              onMouseEnter={() => setActiveTimeline(index)}
              onMouseLeave={() => setActiveTimeline(null)}
            >
              <div className="timeline-marker">
                <div className="timeline-icon wobble-icon">{item.icon}</div>
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
          ))}
        </div>
      </section>

      {/* Animated Interests */}
      <section className="interests-section">
        <h2 className="section-title">Beyond the Code</h2>
        <div className="interests-grid">
          {interests.map((interest, index) => (
            <div key={index} className="interest-card">
              <span className="interest-icon rotate-on-hover">{interest.icon}</span>
              <h4 className="interest-title">{interest.title}</h4>
              <p className="interest-description">{interest.description}</p>
              <div className="interest-glow"></div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA with Pulse Effect */}
      <section className="cta-section">
        <h2 className="cta-title">Let's Connect and Collaborate</h2>
        <p className="cta-description">
          I'm always excited to connect with fellow developers and discuss innovative ideas.
        </p>
        <div className="cta-buttons">
          <a href="/contact" className="cta-button primary pulse-button">
            Connect With Me
            <span className="button-shine"></span>
          </a>
          <a href="https://github.com/AgrawalDrishti" target="_blank" rel="noopener noreferrer" className="cta-button secondary">
            <span className="github-icon">⚡</span>
            View GitHub
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
