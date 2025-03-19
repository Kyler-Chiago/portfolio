import ProjectsBox from './ProjectsBox';

const Projects = () => {
  const projects = [
    { name: 'MLflow.js', description: 'Hello', links: ['G', 'W'] },
    { name: 'AoE', description: 'Hello this is AoE', links: ['G'] },
    {
      name: 'Test',
      description:
        'Hello this is placeholder text, Hello this is placeholder text, Hello this is placeholder text, Hello this is placeholder text, Hello this is placeholder text, Hello this is placeholder text, Hello this is placeholder text, Hello this is placeholder text, Hello this is placeholder text, Hello this is placeholder text, Hello this is placeholder text, Hello this is placeholder text, Hello this is placeholder text, Hello this is placeholder text, Hello this is placeholder text, Hello this is placeholder text, Hello this is placeholder text, Hello this is placeholder text, Hello this is placeholder text, Hello this is placeholder text, Hello this is placeholder text, Hello this is placeholder text, Hello this is placeholder text, ',
      links: ['G', 'W'],
    },
    { name: 'AoE', description: 'Hello this is AoE', links: ['G'] },
    { name: 'MLflow.js', description: 'Hello', links: ['G', 'W'] },
  ];

  return (
    <div className='projectsArea'>
      {projects.map((project, index) => (
        <ProjectsBox key={index} project={project} />
      ))}
    </div>
  );
};

export default Projects;
