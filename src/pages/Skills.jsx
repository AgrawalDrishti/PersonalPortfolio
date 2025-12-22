import { useEffect, useRef } from 'react';
import './Skills.css';

const Skills = () => {
  const canvasRef = useRef(null);

  const skillsData = [
    // Frontend
    { name: 'React', category: 'Frontend', color: '#b8956a', x: 15, y: 20 },
    { name: 'JavaScript', category: 'Frontend', color: '#b8956a', x: 30, y: 15 },
    { name: 'CSS/SCSS', category: 'Frontend', color: '#b8956a', x: 45, y: 20 },
    { name: 'HTML5', category: 'Frontend', color: '#b8956a', x: 60, y: 15 },
    { name: 'Flutter', category: 'Frontend', color: '#b8956a', x: 75, y: 20 },
    
    // Backend
    { name: 'Python', category: 'Backend', color: '#c4956f', x: 20, y: 40 },
    { name: 'Django', category: 'Backend', color: '#c4956f', x: 35, y: 35 },
    { name: 'Node.js', category: 'Backend', color: '#c4956f', x: 50, y: 40 },
    { name: 'REST APIs', category: 'Backend', color: '#c4956f', x: 65, y: 35 },
    { name: 'Firebase', category: 'Backend', color: '#c4956f', x: 80, y: 40 },
    
    // AI & ML
    { name: 'ML', category: 'AI/ML', color: '#8b6f47', x: 25, y: 60 },
    { name: 'NLP', category: 'AI/ML', color: '#8b6f47', x: 40, y: 55 },
    { name: 'TensorFlow', category: 'AI/ML', color: '#8b6f47', x: 55, y: 60 },
    { name: 'PyTorch', category: 'AI/ML', color: '#8b6f47', x: 70, y: 55 },
    
    // DevOps
    { name: 'Docker', category: 'DevOps', color: '#a89984', x: 15, y: 80 },
    { name: 'Git', category: 'DevOps', color: '#a89984', x: 30, y: 75 },
    { name: 'Google Cloud', category: 'DevOps', color: '#a89984', x: 45, y: 80 },
    { name: 'CI/CD', category: 'DevOps', color: '#a89984', x: 60, y: 75 },
    { name: 'Linux', category: 'DevOps', color: '#a89984', x: 75, y: 80 },
  ];


  // Draw animated connections
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let animationFrame;
    let offset = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      offset += 0.5;

      // Draw connections between skills
      skillsData.forEach((skill, i) => {
        skillsData.slice(i + 1).forEach(targetSkill => {
          const distance = Math.sqrt(
            Math.pow(skill.x - targetSkill.x, 2) + 
            Math.pow(skill.y - targetSkill.y, 2)
          );

          // Only connect nearby skills
          if (distance < 30) {
            const x1 = (skill.x / 100) * canvas.width;
            const y1 = (skill.y / 100) * canvas.height;
            const x2 = (targetSkill.x / 100) * canvas.width;
            const y2 = (targetSkill.y / 100) * canvas.height;

            const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
            gradient.addColorStop(0, skill.color + '40');
            gradient.addColorStop(1, targetSkill.color + '40');

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
            ctx.setLineDash([5, 5]);
            ctx.lineDashOffset = -offset;
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
          }
        });
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="skills-page-hex">
      <div className="skills-header-hex">
        <h1 className="skills-title-hex">
          SKILLS <span className="separator-hex">•</span> EXPERTISE
        </h1>
        <p className="skills-subtitle-hex">
          Technologies I work with
        </p>
      </div>

      {/* Skills Grid Container */}
      <div className="skills-grid-container">
        <canvas ref={canvasRef} className="connections-canvas" />
        
        <div className="skills-hex-grid">
          {skillsData.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-hex-wrapper"
              style={{
                left: `${skill.x}%`,
                top: `${skill.y}%`,
                animationDelay: `${index * 0.05}s`
              }}
            >
              <div 
                className="skill-hexagon"
                style={{ '--skill-color': skill.color }}
              >
                <div className="hex-inner">
                  <div className="skill-name">{skill.name}</div>
                </div>
                
                {/* Pulsing glow effect */}
                <div className="hex-glow" style={{ backgroundColor: skill.color }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="skills-legend">
        <div className="legend-item">
          <span className="legend-dot" style={{ backgroundColor: '#b8956a' }}></span>
          <span>Frontend</span>
        </div>
        <div className="legend-item">
          <span className="legend-dot" style={{ backgroundColor: '#c4956f' }}></span>
          <span>Backend</span>
        </div>
        <div className="legend-item">
          <span className="legend-dot" style={{ backgroundColor: '#8b6f47' }}></span>
          <span>AI/ML</span>
        </div>
        <div className="legend-item">
          <span className="legend-dot" style={{ backgroundColor: '#a89984' }}></span>
          <span>DevOps</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
