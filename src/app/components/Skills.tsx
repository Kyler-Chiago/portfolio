import SkillBox from './SkillBox';

const Skills = () => {
  const skillsListSE = [
    'TypeScript',
    'JavaScript',
    'React',
    'Redux',
    'Next.js',
    'Express.js',
    'Node.js',
    'REST API',
    'APIs',
    'Jest',
    'HTML5',
    'CSS',
    'SASS',
    'Webpack',
    'AWS (EBN, EC2)',
    'Docker',
    'Bcrypt',
    'Websockets',
    'Asana',
    'Trello',
    'Git',
    'Github',
    'SQL (PostgreSQL)',
    'Relational Databases',
    'NoSQL',
    'MongoDB',
    'Supabase',
  ];

  return (
    <div className='skillSection'>
      {skillsListSE.map((skill, index) => (
        <SkillBox key={index} skill={skill} />
      ))}
    </div>
  );
};

export default Skills;
