import Image from 'next/image';

interface GithubProp {
  projectGithub: string;
}

const ProjectGithub: React.FC<GithubProp> = ({ projectGithub }) => {
  return (
    <div className='size-fit mr-[1rem] hoverUp'>
      <a href={projectGithub} className=''>
        <Image
          className=''
          src={'/GithubLogo.png'}
          width={24}
          height={24}
          alt='G'
        />
      </a>
    </div>
  );
};

export default ProjectGithub;
