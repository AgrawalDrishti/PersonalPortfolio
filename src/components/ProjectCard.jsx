import './ProjectCard.css';

const ROTATIONS = [-3, 2, -2, 3, -4, 2.5];
const TAG_COLORS = ['var(--accent-orange)', 'var(--accent-blue)', 'var(--accent-lime)', 'var(--accent-pink)'];

const ProjectCard = ({ project, index = 0 }) => {
  const rotate = ROTATIONS[index % ROTATIONS.length];
  const hasLink = Boolean(project.link) && project.link !== '#';
  const Wrapper = hasLink ? 'a' : 'div';
  const wrapperProps = hasLink
    ? { href: project.link, target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="project-card"
      data-size={project.size || 'medium'}
      style={{ '--rotate': `${rotate}deg` }}
    >
      <div className="project-image-container">
        <img src={project.image} alt={project.title} className="project-image" />
        <span className="view-project-badge">
          {hasLink ? 'view project →' : 'private repo'}
        </span>
      </div>
      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="project-tag"
              style={{ background: TAG_COLORS[tagIndex % TAG_COLORS.length] }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default ProjectCard;
