import { Layout, Server, Brain, Cloud } from 'lucide-react';
import { DoodleUnderline, StickerBadge, Blob } from '../components/Doodles';
import './Skills.css';

const categories = [
  {
    name: 'Frontend',
    icon: Layout,
    color: 'var(--accent-orange)',
    rotate: -2,
    skills: ['React', 'JavaScript', 'CSS/SCSS', 'HTML5', 'Flutter']
  },
  {
    name: 'Backend',
    icon: Server,
    color: 'var(--accent-blue)',
    rotate: 2,
    skills: ['Python', 'Django', 'Node.js', 'REST APIs', 'Firebase']
  },
  {
    name: 'AI / ML',
    icon: Brain,
    color: 'var(--accent-pink)',
    rotate: 2,
    skills: ['Machine Learning', 'NLP', 'TensorFlow', 'PyTorch']
  },
  {
    name: 'DevOps',
    icon: Cloud,
    color: 'var(--accent-green)',
    rotate: -2,
    skills: ['Docker', 'Git', 'Google Cloud', 'CI/CD', 'Linux']
  }
];

const TAG_ROTATIONS = [-3, 2, -1, 3, -2, 1];

const Skills = () => {
  return (
    <div className="skills-page-hex">
      <Blob color="var(--accent-blue)" className="skills-blob-1" />
      <Blob color="var(--accent-green)" className="skills-blob-2" />

      <div className="skills-header-hex">
        <StickerBadge color="var(--accent-blue)" rotate={5} className="skills-count-sticker">
          4 stacks
        </StickerBadge>
        <h1 className="skills-title-hex">
          what I <em>use</em>
        </h1>
        <DoodleUnderline color="var(--ink)" className="skills-title-underline" />
        <p className="skills-subtitle-hex">
          Technologies I work with
        </p>
      </div>

      <div className="skills-panels">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <div
              key={category.name}
              className="skill-panel"
              style={{ '--rotate': `${category.rotate}deg`, '--panel-color': category.color }}
            >
              <div className="skill-panel-header">
                <span className="skill-panel-icon">
                  <Icon size={22} />
                </span>
                <h3 className="skill-panel-title">{category.name}</h3>
              </div>
              <div className="skill-tag-cloud">
                {category.skills.map((skill, index) => (
                  <span
                    key={skill}
                    className="skill-tag"
                    style={{ '--tag-rotate': `${TAG_ROTATIONS[index % TAG_ROTATIONS.length]}deg` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
