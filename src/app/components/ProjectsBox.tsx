import ProjectGithub from './ProjectGithub';
import ProjectWebsite from './ProjectWebsite';

interface ProjectProp {
  project: {
    name: string;
    description: string;
    github: string;
    website: string;
  };
  mode: string;
}

const ProjectsBox: React.FC<ProjectProp> = ({ project, mode }) => {
  return (
    <div className='projectsBox'>
      <div className='projectTitle text-2xl font-semibold'>{project.name}</div>
      <div className='mt-[1rem]'>{project.description}</div>
      <div className='projectLinks mt-[1rem]'>
        {project.github && project.website ? (
          <>
            <ProjectGithub projectGithub={project.github} mode={mode} />
            <ProjectWebsite projectWebsite={project.website} mode={mode} />
          </>
        ) : (
          <ProjectGithub projectGithub={project.github} mode={mode} />
        )}
      </div>
    </div>
  );
};

export default ProjectsBox;
