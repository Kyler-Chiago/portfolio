'use client';
import Image from 'next/image';
import Skills from './components/Skills';
import Projects from './components/Projects';

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
              onClick={() => {
                console.log('Hello');
                document.body.style.backgroundColor = '#f7f7f7';
                document.body.style.color = 'black';
                const element = document.getElementsByClassName('header');
                // console.log(element[0].style.backgroundColor);
                element[0].style.backgroundColor = '#dfdfdf';
                // element[0].style
                // document.getElementsByClassName("header").style.backgroundColor = "red";
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
          <div className='pfpDiv'>
            <Image
              className='pfp'
              src={'/pfp.png'}
              width={300}
              height={500}
              fill={false}
              sizes='{min-width: 300px, min-height: 500px}'
              alt='L'
            />
          </div>
          <div className='introText'>
            <div className='introTextHeader text-6xl font-semibold'>
              Hello, I&apos;m Kyler!
            </div>
            <div className='introTextBody text-xl mt-[16px]'>
              I&apos;m a Software Engineer currently based in Phoenix, AZ and I
              build software to make life easier and make a meaningful impact in
              people&apos;s lives.
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
        <div className='arrowDownDiv mt-[5rem]'>
          <a className='ball'>
            <Image
              className=''
              src={'/arrowDownWhite.png'}
              width={48}
              height={48}
              alt='L'
            />
          </a>
        </div>
        <div className='bio mt-[3rem] text-4xl font-semibold'>About Me</div>
        <div className='oval mt-[1rem]'></div>
        <div className='bioWrapper'>
          <div className='bioLeft mr-[16px] mt-[1.5rem]'>
            Hi this is placeholder text, Hi this is placeholder text, Hi this is
            placeholder text, Hi this is placeholder text, Hi this is
            placeholder text, Hi this is placeholder text, Hi this is
            placeholder text, Hi this is placeholder text, Hi this is
            placeholder text, Hi this is placeholder text, Hi this is
            placeholder text, Hi this is placeholder text, Hi this is
            placeholder text, Hi this is placeholder text, Hi this is
            placeholder text, Hi this is placeholder text, Hi this is
            placeholder text, Hi this is placeholder text, Hi this is
            placeholder text, Hi this is placeholder text, Hi this is
            placeholder text, Hi this is placeholder text, Hi this is
            placeholder text, Hi this is placeholder text, Hi this is
            placeholder text,Hi this is placeholder text, Hi this is placeholder
            text, Hi this is placeholder text, Hi this is placeholder text, Hi
            this is placeholder text, Hi this is placeholder text, Hi this is
            placeholder text, Hi this is placeholder text, Hi this is
            placeholder text, Hi this is placeholder text, Hi this is
            placeholder text, Hi this is placeholder text, Hi this is
            placeholder text, Hi this is placeholder text, Hi this is
            placeholder text, Hi this is placeholder text, Hi this is
            placeholder text, Hi this is placeholder text, Hi this is
            placeholder text, Hi this is placeholder text, Hi this is
            placeholder text, Hi this is placeholder text, Hi this is
            placeholder text, Hi this is placeholder text, Hi this is
            placeholder text, Hi this is placeholder text, Hi this is
            placeholder text, Hi this is placeholder text, Hi this is
            placeholder text, Hi this is placeholder text, Hi this is
            placeholder text, Hi this is placeholder text, Hi this is
            placeholder text, Hi this is placeholder text, Hi this is
            placeholder text, Hi this is placeholder text, Hi this is
            placeholder text, Hi this is placeholder text, Hi this is
            placeholder text, Hi this is placeholder text, Hi this is
          </div>
          <div className='bioRight ml-[16px] mt-[1.5rem]'>
            <div className='mySkills text-2xl font-semibold'>My Skills</div>
            {/* <div className='skillsBoxes'>Box</div> */}
            <Skills />
          </div>
        </div>
        <div className='projects mt-[1.5rem] text-4xl font-semibold'>
          Projects
        </div>
        <div className='oval mt-[1rem]'></div>
        <div className='projectsWrapper mt-[1rem]'><Projects/></div>
        <div className='dashBorder'></div>
        <div className='footer mb-[1rem]'>
          <div>@ 2025 Kyler Chiago</div>
          <div className="footer2">
            <a
              href={'https://github.com/Kyler-Chiago'}
              className='teamCardLink1'
            >
              <Image
                className=''
                src={'/GithubLogo.png'}
                width={24}
                height={24}
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
                width={24}
                height={24}
                alt='L'
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
