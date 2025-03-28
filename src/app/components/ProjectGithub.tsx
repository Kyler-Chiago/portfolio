import Image from 'next/image';

interface GithubProp {
  projectGithub: string;
  mode: string;
}

const ProjectGithub: React.FC<GithubProp> = ({ projectGithub, mode }) => {
  return (
    <div className='size-fit mr-[1rem] hoverUp'>
      {mode == 'dark' ? (
        <>
          <a href={projectGithub} className=''>
            <Image
              className=''
              src={'/GithubLogo.png'}
              width={24}
              height={24}
              alt='G'
            />
          </a>
        </>
      ) : (
        <>
          <a href={projectGithub} className=''>
            <Image
              className=''
              src={'/GithubLogoBlack.png'}
              width={24}
              height={24}
              alt='G'
            />
          </a>
        </>
      )}
    </div>
  );
};

export default ProjectGithub;
