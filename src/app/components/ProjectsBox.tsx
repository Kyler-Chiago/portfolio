const ProjectsBox: React.FC<any> = ({project}) => {
  return (
    <div className='projectsBox'>
      <div>{project.name}</div>
      <div>
        {project.description}
      </div>
      <div>{project.links}</div>
    </div>
  );
};

export default ProjectsBox;
