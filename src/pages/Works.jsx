import ProjectCard from '../components/ProjectCard';
import { DoodleUnderline, StickerBadge } from '../components/Doodles';
import './Works.css';

const Works = () => {
  const projects = [
    {
      id: 1,
      title: 'Multi Lingual Proof Reading',
      description: 'An automated tool to perform proof reading in terms of tonality detection',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
      tags: ['NLP', 'Python' , 'Machine Learning'],
      size: 'large',
      link: '#'
    },
    {
      id: 2,
      title: 'Deployment Bot',
      description: 'Automating deployment process using Github URL, Docker Image or a Zip file.',
      image: 'https://images.yourstory.com/cs/wordpress/2017/01/Machine-Learning-2.jpg?mode=crop&crop=faces&ar=2%3A1&format=auto&w=1920&q=75',
      tags: ['Docker', 'Google Cloud', 'Automation'],
      size: 'medium',
      link: 'https://github.com/AgrawalDrishti/DeploymentBot'
    },
    {
      id: 3,
      title: 'Food delivery app',
      description: 'Food delivery app developed to make the ordering and delivery processes easier',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
      tags: ['Full Stack', 'Flutter' , 'Firebase'],
      size: 'small',
      link: 'https://github.com/Asharma538/pizza_planet_app'
    },
    {
      id: 4,
      title: 'Crowd Sourcing Website',
      description: 'Website used to generate random question bank within no time, verified by the expert panel.',
      image: 'https://d253pvgap36xx8.cloudfront.net/blog/image/47a0a26eba1711edbcf49ab0b6e6e315.jpeg',
      tags: ['Full Stack', 'Django', 'UI/UX'],
      size: 'medium',
      link: 'https://github.com/naman280104/QuesPy'
    },
    {
        id: 5,
        title: 'Screen Time Monitoring App',
        description: 'A linux based desktop application built to monitor the time spent on desktop applications.',
        image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
        tags: ['Linux', 'Shell Script'],
        size: 'medium',
        link: 'https://github.com/Asharma538/OS_Project'
      },
      {
        id: 6,
        title: 'On-Chain Radio',
        description: 'Decentralised music streaming platform, built using Aptos blockchain',
        image: 'https://plus.unsplash.com/premium_photo-1681400678259-255b10890b08?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvY2tjaGFpbnxlbnwwfHwwfHx8MA%3D%3D',
        tags: ['Blockchain', 'Aptos', 'Typescript'],
        size: 'medium',
        link: 'https://github.com/khushi-parikh/inter-iit-blockchain'
      }
  ];

  return (
    <div className="works-page">
      <div className="works-header">
        <StickerBadge color="var(--accent-lime)" rotate={-6} className="works-count-sticker">
          {projects.length} builds
        </StickerBadge>
        <h1 className="works-title">
          things I've <em>made</em>
        </h1>
        <DoodleUnderline color="var(--ink)" className="works-title-underline" />
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Works;
