import ProjectsBox from './ProjectsBox';

const Projects = () => {
  const projects = [
    {
      name: 'MLflow.js',
      description:
        'MLflow.js a library available as an npm package, built to make using the MLflow REST API easier. Using object-oriented programming principles, to make the code cleaner, more structured and maintainable. Built to make using Machine Learning applications easier using JavaScript, the user can call on the methods to use the MLflow REST API.',
      github: 'https://github.com/oslabs-beta/mlflow-js',
      website: 'https://mlflow-js.org/',
    },
    {
      name: 'AoE',
      description:
        'AoE is a social media platform for gamers to find others to play with. You can chat with your friends in real time, and find others to play with. Using the filter feature to find others by username or that play the game you are interested in. You are able to customize your profile with the games you play, languages, location, and a short biography, as well as change your own profile picture.',
      github: 'https://github.com/Cat-Snake-PTRI15/AoE',
      website: '',
    },
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
