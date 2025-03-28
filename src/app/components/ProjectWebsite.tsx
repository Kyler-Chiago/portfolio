import Image from 'next/image';

interface WebsiteProp {
  projectWebsite: string;
  mode: string;
}

const ProjectWebsite: React.FC<WebsiteProp> = ({ projectWebsite, mode }) => {
  return (
    <div className='size-fit hoverUp'>
      {mode == 'dark' ? (
        <a href={projectWebsite} className=''>
          <Image
            className=''
            src={'/websiteWhite.png'}
            width={24}
            height={24}
            alt='G'
          />
        </a>
      ) : (
        <a href={projectWebsite} className=''>
          <Image
            className=''
            src={'/websiteBlack.png'}
            width={24}
            height={24}
            alt='G'
          />
        </a>
      )}
    </div>
  );
};

export default ProjectWebsite;
