'use client';
import Image from 'next/image';


export default function Home() {
  return (
    <div className='wrapper'>
      <div className='header'>
        <div className='headerLeft text-lg font-semibold'>Kyler Chiago</div>
        <div className='headerRight text-base'>
          <div className='headerAbout'>About</div>
          <div className='headerProjects ml-[20px]'>Projects</div>
          <div className='headerLM ml-[20px]'>
            <a
              onClick = {() => {
                console.log('Hello');
                document.body.style.backgroundColor = '#f7f7f7';
                document.body.style.color = 'black';
              }}
            >
              <Image
                className='icon'
                src={'/lightModeButton_final.png'}
                width={32}
                height={32}
                alt='G'
              />
            </a>
            {/* <a
              href={'https://www.linkedin.com/in/kyler-chiago/'}
              className='teamCardLink2'
            >
              <Image
                className='icon'
                src={'/LinkedInLogo.png'}
                width={25}
                height={25}
                alt='L'
              />
            </a> */}
          </div>
        </div>
      </div>
      <div className='bodyWrapper'>
        <div className='intro'>
          <div className="pfpDiv">
            <Image
              className='pfp'
              src={'/pfp.png'}
              width={300}
              height={500}
              fill={false}
              sizes='{min-width: 300px}'
              alt='L'
            />
          </div>
          <div className='introText'>
            <div className="introTextHeader text-6xl font-semibold">Hello, I&apos;m Kyler!</div>
            <div className="introTextBody text-xl mt-[16px]">
              I&apos;m a Software Engineer currently based in Phoenix, AZ and I
              build software to make life easier and more meaningful.
            </div>
            <div className='links mt-[16px]'>
              <a
                href={'https://github.com/Kyler-Chiago'}
                className='teamCardLink1'
              >
                <Image
                  className=''
                  src={'/GithubLogo.png'}
                  width={32}
                  height={32}
                  alt='G'
                />
              </a>
              <a
                href={'https://www.linkedin.com/in/kyler-chiago/'}
                className='teamCardLink2 ml-[16px]'
              >
                <Image
                  className=''
                  src={'/LinkedInLogo.png'}
                  width={32}
                  height={32}
                  alt='L'
                />
              </a>
            </div>
          </div>
        </div>
        <div>Arrow Down</div>
        <div className='bio'>About Me</div>
        <div>dash</div>
        <div className='bioWrapper'>
          <div className='bioLeft'>
            Hi, I&apos;m Ashley and I am a highly ambitious, self-motivated, and
            driven software engineer based in Los Angeles, CA. My journey began
            at California State University, Long Beach, where I earned a BA in
            History. I successfully completed a Coding Advanced Immersive
            Program, paving the way for my transition into the tech sphere.
            I&apos;m adept at quickly learning new technologies and have
            experience in building web applications to create efficient,
            expansible user-curated experiences. Beyond code and algorithms, I
            find joy in a spectrum of hobbies that enrich my life. Whether
            strumming melodies on my guitar, delving into the latest tech
            trends, or embarking on travel adventures, I am a firm believer in
            embracing diverse experiences and fostering continuous personal and
            professional growth. I am committed to unraveling my boundless
            potential and passion within the dynamic tech realm. I am excited to
            see where my career takes me and am always open to new
            opportunities. 🙂
          </div>
          <div className='bioRight'>
            <div className='mySkills'>My Skills</div>
            <div className='skillsBoxes'>Box</div>
          </div>
        </div>
        <div className='projects'>projects</div>
        <div>dash</div>
        <div className='projectsWrapper'>Box</div>
      </div>
      <div className='footer'>footer</div>
    </div>
  );
}
