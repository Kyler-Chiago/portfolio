'use client';
import Image from 'next/image';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { useState, useEffect } from 'react';

export default function Home() {
  const [mode, setMode] = useState('');
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      document.documentElement.setAttribute('data-theme', storedTheme);
      setMode(storedTheme);
    } else if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: light)').matches
    ) {
      // light mode
      document.documentElement.setAttribute('data-theme', 'light');
      setMode('light');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      setMode('dark');
      localStorage.setItem('theme', 'dark');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='wrapper ' id='top'>
      <div className='header'>
        <a
          className='headerLeft text-lg font-semibold'
          onClick={() => {
            const element = document.getElementById(`top`);
            element?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Kyler Chiago
        </a>
        <div className='headerRight text-base'>
          <div
            className='headerAbout'
            onClick={() => {
              const element = document.getElementById(`about`);
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            About
          </div>
          <div
            className='headerProjects ml-[20px]'
            onClick={() => {
              const element = document.getElementById(`projects`);
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Projects
          </div>
          <div className='headerLM ml-[20px]'>
            <a
              onClick={() => {
                if (
                  document.documentElement.getAttribute('data-theme') == 'dark'
                ) {
                  document.documentElement.setAttribute('data-theme', 'light');
                  setMode('light');
                  localStorage.setItem('theme', 'light');
                } else if (
                  document.documentElement.getAttribute('data-theme') == 'light'
                ) {
                  document.documentElement.setAttribute('data-theme', 'dark');
                  setMode('dark');
                  localStorage.setItem('theme', 'dark');
                }
              }}
            >
              {mode == 'dark' ? (
                <Image
                  className='icon'
                  src={'/lightModeButton_final.png'}
                  width={32}
                  height={32}
                  alt='G'
                />
              ) : (
                <Image
                  className='icon'
                  src={'/darkModeButton_final.png'}
                  width={32}
                  height={32}
                  alt='G'
                />
              )}
            </a>
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
              I&apos;m a <span className='purpleText'>Software Engineer</span>{' '}
              currently based in Phoenix, AZ and I build software to make life
              easier and make a meaningful impact in people&apos;s lives.
            </div>
            <div className='links mt-[16px]'>
              {mode == 'dark' ? (
                <>
                  <a
                    href={'https://github.com/Kyler-Chiago'}
                    className='hoverUp'
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
                    className='hoverUp ml-[16px]'
                  >
                    <Image
                      className=''
                      src={'/LinkedInLogo.png'}
                      width={32}
                      height={32}
                      alt='L'
                    />
                  </a>
                </>
              ) : (
                <>
                  <a
                    href={'https://github.com/Kyler-Chiago'}
                    className='hoverUp'
                  >
                    <Image
                      className=''
                      src={'/GithubLogoBlack.png'}
                      width={32}
                      height={32}
                      alt='G'
                    />
                  </a>
                  <a
                    href={'https://www.linkedin.com/in/kyler-chiago/'}
                    className='hoverUp ml-[16px]'
                  >
                    <Image
                      className=''
                      src={'/LinkedInLogoBlack.png'}
                      width={32}
                      height={32}
                      alt='L'
                    />
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
        <div className='arrowDownDiv mt-[5rem]' id='about'>
          {mode == 'dark' ? (
            <a className='ball'>
              <Image
                className=''
                src={'/arrowDownWhite.png'}
                width={48}
                height={48}
                alt='L'
              />
            </a>
          ) : (
            <a className='ball'>
              <Image
                className=''
                src={'/arrowDownBlack.png'}
                width={48}
                height={48}
                alt='L'
              />
            </a>
          )}
        </div>
        <div className='bio mt-[3rem] text-4xl font-semibold'>About Me</div>
        <div className='oval mt-[1rem]'></div>
        <div className='bioWrapper'>
          <div className='bioLeft mr-[16px] mt-[1.5rem] text-base'>
            Hey, I&apos;m Kyler nice to meet you. I am a highly ambitious{' '}
            <span className='purpleText font-semibold'>highly ambitious</span>,{' '}
            <span className='purpleText font-semibold'>self-motivated</span>,
            and
            <span className='purpleText font-semibold'> driven</span> software
            engineer based in Phoenix, AZ.
            <br /> <br /> My coding journey began at Arizona State University,
            where I earned by BSE in Civil Engineering. I was introduced to
            MATLAB during my studies and found coding very interesting. I worked
            as a Civil Engineer then I completed a Software Engineering
            Immersive Program, which prepared me to enter the tech sphere. I can
            quickly learn and adapt to any new skills or technologies and have
            experience building user friendly full-stack applications to help
            make people&apos;s lives easier and more enjoyable.
            <br /> <br /> Outside of coding and algorithms, I enjoy a wide
            variety of hobbies that help to fuel my continuous growth. Whether
            it&apos;s drawing a piece of art when inspiration strikes, reading a
            new piece of literature, or travelling to a new adventure, I am a
            firm believer that continuing to put yourself in a variety of
            diverse environments fosters continuous growth and helps keep your
            mind fresh and stimulates new ideas.
            <br /> <br /> I am committed to unraveling my boundless potential
            and passion within the dynamic tech realm. I am excited to see where
            my career takes me and am always open to new opportunities. 🙂
          </div>
          <div className='bioRight ml-[16px] mt-[1.5rem]'>
            <div className='mySkills text-2xl font-semibold'>My Skills</div>
            <Skills />
          </div>
        </div>
        <div
          className='projects pt-[3.5rem] text-4xl font-semibold'
          id='projects'
        >
          Projects
        </div>
        <div className='oval mt-[1rem]'></div>
        <div className='projectsWrapper mt-[1rem]'>
          <Projects mode={mode} />
        </div>
        <div className='dashBorder'></div>
        <div className='footer mb-[1rem]'>
          <div>@ 2025 Kyler Chiago</div>
          <div className='footer2'>
            {mode == 'dark' ? (
              <>
                <a href={'https://github.com/Kyler-Chiago'} className='hoverUp'>
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
                  className='hoverUp ml-[16px]'
                >
                  <Image
                    className=''
                    src={'/LinkedInLogo.png'}
                    width={24}
                    height={24}
                    alt='L'
                  />
                </a>
              </>
            ) : (
              <>
                <a href={'https://github.com/Kyler-Chiago'} className='hoverUp'>
                  <Image
                    className=''
                    src={'/GithubLogoBlack.png'}
                    width={24}
                    height={24}
                    alt='G'
                  />
                </a>
                <a
                  href={'https://www.linkedin.com/in/kyler-chiago/'}
                  className='hoverUp ml-[16px]'
                >
                  <Image
                    className=''
                    src={'/LinkedInLogoBlack.png'}
                    width={24}
                    height={24}
                    alt='L'
                  />
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
