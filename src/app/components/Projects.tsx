import ProjectsBox from './ProjectsBox';

interface Project {
  mode: string;
}

const Projects: React.FC<Project> = ({ mode }) => {
  const projects = [
    {
      name: 'MLflow.js',
      description:
        'MLflow.js a library available as an npm package, built using TypeScript to make using the MLflow REST API easier. Using object-oriented programming principles, to make the code cleaner, more structured and maintainable. Built to make using Machine Learning applications easier using JavaScript, the user can call on the methods to use the MLflow REST API.',
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
    {
      name: 'D&D 5E Character Generator',
      description:
        'The D&D 5E Character Generator is a quick way to generate ideas for characters or non-player characters for the popular tabletop rpg Dungeons & Dragons 5th Edition. It provides a simple idea for the character including species, gender, class, personality traits, ability score array and more.',
      github: 'https://github.com/Kyler-Chiago/dndCharGen',
      website: 'https://dnd-char-gen.vercel.app/',
    },
  ];

  return (
    <div className='projectsArea'>
      {projects.map((project, index) => (
        <ProjectsBox key={index} project={project} mode={mode} />
      ))}
    </div>
  );
};

export default Projects;
