import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <a 
      href={project.link} 
      className="project-card" 
      data-size={project.size || 'medium'}
      target="_blank" 
      rel="noopener noreferrer"
    >
      <div className="project-image-container">
        <img src={project.image} alt={project.title} className="project-image" />
        <div className="project-overlay">
          <span className="view-project">VIEW PROJECT →</span>
        </div>
      </div>
      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="project-tag">{tag}</span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;

