import Image from 'next/image';

interface WebsiteProp {
  projectWebsite: string;
}

const ProjectWebsite: React.FC<WebsiteProp> = ({ projectWebsite }) => {
  return (
    <div className='size-fit hoverUp'>
      <a href={projectWebsite} className=''>
        <Image
          className=''
          src={'/websiteWhite.png'}
          width={24}
          height={24}
          alt='G'
        />
      </a>
    </div>
  );
};

export default ProjectWebsite;
