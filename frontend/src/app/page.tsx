'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import ProjectComponent from '@/components/ProjectComponent';
import LinkBubble from '@/components/LinkBubble';
import TechStack from '@/components/TechStack';
import Sticker from '@/components/Sticker';
import { useMobile } from '@/context/mobileContext';
import { useScreen } from '@/context/screenContext';
import HeroPageLogo from '@/components/HeroPageLogo';
import ThemeToggle from '@/components/ThemeToggle';
import { useTheme } from '@/context/themeContext';
import HoppingFish from '@/components/HoppingFish';

function landingPage() {

  const {isMobile} = useMobile()
  const {theme} = useTheme()
  const {isTinyMobile} = useMobile()
  const [Selected, setSelected] = useState(1)
  const maxExperience = 2;

  const techStack = [
    { src: '/assets/techstack/FigmaTS.png', desc: 'Figma',},
    { src: '/assets/techstack/ReactTS.png', desc: 'React',},
    { src: '/assets/techstack/AiTS.png', desc: 'Adobe Illustrator',},
    { src: '/assets/techstack/PsTS.png', desc: 'Adobe Photoshop',},
    { src: '/assets/techstack/AffinityTS.png', desc: 'Affinity',},
    { src: '/assets/techstack/TailwindTS.png', desc: 'Tailwind CSS',},
    { src: '/assets/techstack/NextTS.png', desc: 'Next JS',},
    { src: '/assets/techstack/VercelTS.png', desc: 'Vercel',}, 
  ]

  return (
    <div id="header" className={`"flex overflow-hidden justify-center bg-cover bg-center bg-no-repeat min-h-screen relative ${theme=='dark' ? 'bg-surface-primary' : 'bg-surface-primary'} overflow-hidden"`}>        
        <div className='fixed inset-0 z-0 pointer-events-none'>
            <img src={`${theme=='dark' ? "/assets/orion/Stars.svg" : null}`} className='h-full w-full object-cover' alt="" />
        </div>
        <div className={`flex w-full h-full flex-col justify-center items-center z-10 mt-[45px]`}>
            {/* ========================================== TITLE ========================================== */}            
            <div className={`flex flex-col w-full min-h-screen bg-cover bg-center justify-center items-center z-10`} 
                 style={{backgroundImage: theme=='dark' ? "url('/assets/landingpage/Header-Dark.png" : "url('/assets/landingpage/Header-Light.png"}}>
              
              <motion.div className={`flex flex-col justify-center items-center z-10  ${isMobile ? 'mt-10 px-10' : ''}`} initial={{y: 20, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.5, type: 'tween', delay: 0.2}}>
                  {<HeroPageLogo/>}
                  <span className={`text-primary font-medium bodyText my-4`}>
                    Tommy <span className='p-through'> Win</span> {' '}Nguyen | UI/UX & Product Designer
                  </span>
              </motion.div>
              
              <motion.div className="flex flex-col justify-center items-center z-10 mb-6" initial={{y: 20, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.5, type: 'tween', delay: 0.2}}>
                  <div className={`flex flex-row flex-wrap h-full w-full items-center justify-center gap-4`}>
                    <LinkBubble name="LinkedIn" image="/assets/general/LinkedInLogo.png" link="https://www.linkedin.com/in/tommy-nguyen-ba899423a"/>
                    <LinkBubble name="GitHub" image="/assets/general/GitHubLogo.png" link="https://github.com/YesMyNameIsMe"/>
                    <LinkBubble name="nguyen424787@gmail.com" image="/assets/general/EmailLogo.png" copyable={true}/>                  
                  </div>
              </motion.div>

            </div>
            {/* =========================================== CONTENT ======================================== */}
            <div className='flex flex-col w-[85%] mt-20 items-center justify-center'>
              {/* ========================================== ABOUT ========================================== */}            
              <div id="about" className='flex flex-col items-center justify-center'>            
                <span className={`text-surface-contrast titleText justify-between items-center racingSans w-full flex `}>
                  <p>
                    ABOUT
                  </p>
                  <p className='text-4xl'>
                    01
                  </p>
                </span>
                <div className={`flex ${isMobile ? 'flex-col' : ''} mt-4 gap-8 relative w-full items-center justify-center p-4`}>
                  {/* Text Container */}
                  <div className={`flex flex-col relative w-full font-medium`}>
                    <h1 className="flex flex-col text-surface-contrast "> 
                      <span className={`flex items-end font-bold mb-2 ${isTinyMobile ? 'text-xl' : isMobile ? 'text-2xl' : 'text-3xl'} `}> 
                        Who Am I? 
                        {!isMobile && <span className="ml-2 font-medium text-sm "> 
                          (non-existentially) 
                        </span>}
                      </span> 
                      <span className={` ${isTinyMobile ? 'text-md' : isMobile ? 'text-lg' : 'text-xl'} `}>
                        Hello! My name is Tommy Nguyen and I’m a {' '}
                        <span className="font-bold">Computer Science Major at UTD, </span>
                        and I specialize in {' '}
                        <span className="font-bold">UI/UX Design. </span>
                        I love designing and creating concepts, which is particularly useful in {' '}
                        <span className="font-bold">Front-End Development</span>
                        , as well as creating {' '}
                        <span className="font-bold">Graphics </span>
                        for my works and projects. I've always been designing ever since I was a kid, so you could say this is my life's ambition!
                      </span>
                      <Link href="/about" className={`w-fit mt-4 bg-surface-contrast p-2 text-surface-primary hover:scale-105 transition duration-300
                                          ${isTinyMobile ? 'text-md' : isMobile ? 'text-lg' : 'text-xl'} underpText`}>
                        Wanna Know More About Me? →
                      </Link>
                    </h1> 
                    <h1 className="flex-col my-4 text-surface-contrast"> 
                      <span className={`flex font-bold ${isTinyMobile ? 'text-xl' : isMobile ? 'text-2xl' : 'text-3xl'} mb-2`}> 
                        My Design Philosophy 
                      </span> 
                      <span className={`font-medium ${isTinyMobile ? 'text-md' : isMobile ? 'text-lg' : 'text-xl'}`}>
                        My philosophy is rooted in creating {' '}
                        <span className="font-bold">connections </span>
                        I believe the best designs are the ones that feel {' '}
                        <span className="font-bold">intuitive, engaging, and human. </span>
                        In other words, I strive to create experiences that people will {' '}
                        <span className="font-bold">remember {' '}</span>
                        and {' '}
                        <span className="font-bold">resonate </span>
                        with.
                      </span>
                    </h1> 
                  </div>
                  {/* Image Container */}
                  <div className={`${isTinyMobile ? 'w-[80%]' : isMobile ? 'w-[60%]': 'w-[50%]'} items-center justify-center p-4 flex relative`}>
                    <img className={`${isMobile ? 'rounded-full': 'w-full rounded-lg'} object-cover h-fit`} src={'/assets/landingpage/HeadShotMobile.png'}/>
                    <Sticker className={`-bottom-8 -left-8`} src="/assets/landingpage/MePondering.svg"/>
                    <Sticker className={`-top-8 ${isTinyMobile ? '-right-8' : isMobile ? '-right-0' : '-right-8'}`} src="/assets/general/Camera.svg"/>
                  </div>
                </div>
              </div>
              {/* ========================================== PROJECTS ========================================== */}            
              <div id="projects" className='flex flex-col items-center justify-center mt-20 w-full'>            
                <span className={`text-surface-contrast titleText justify-between items-center racingSans w-full flex `}>
                  <p>
                    PROJECTS
                  </p>
                  <p className='text-4xl'>
                    02
                  </p>
                </span>
                <div className="mt-10 flex flex-col min-w-[300px] gap-10 flex-wrap items-start justify-center ">
                  <ProjectComponent background='bg-[#325949]' link="/orion" title="UTD ORION REDESIGN" img="/assets/general/OrionSticker.svg" description="Redesigning UTD's student portal" mockup='/assets/landingpage/OrionMockUp.png' newest={true}/>
                  <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} gap-10 w-full`}>
                    <ProjectComponent background='bg-linear-to-b from-darkestBlue to-darkBlue' link="/nexus#header" title="NEXUS" img="/assets/general/NexusSticker.svg" description="A website for students to easily stay on top of classes" mockup='/assets/landingpage/NexusMockUp.png'/>
                    <ProjectComponent bgImage="url('/assets/landingpage/LoreBGImage.svg')" link="/lore#header" title="LORE" img="/assets/general/LoreSticker.svg" description="Mobile party game app that uses AI to generate stories" mockup='/assets/landingpage/LoreMockUp.png' phone={true}/>
                  </div>
                </div>
              </div>
              {/* ========================================== EXPERIENCE ========================================== */}            
              <div id="experience" className='flex flex-col items-center justify-center mt-20 w-full'>            
                <span className={`text-surface-contrast titleText justify-between items-center racingSans w-full flex `}>
                  <p className='flex h-full items-center'>
                    EXPERIENCE
                  </p>
                  <p className='text-4xl'>
                    03
                  </p>
                </span>
                {/* Experience Clicker */}
                <div className="flex w-full min-w-[300px] min-h-[2%] mt-10 py-4 items-center select-none drop-shadow-xl"> 
                  <LuChevronLeft className='flex h-full cursor-pointer text-surface-contrast' size={50} onClick={() => {if(Selected !== 1) {setSelected(prevSelected => (prevSelected-1))} }}/>
                  <div className="flex w-full items-center justify-start mx-8"> {/* Experience Icons */}
                    <img className={`flex ${Selected == 1 ? 'opacity-100' : 'opacity-70'} hover:opacity-100 transition duration-200 mr-4 w-[75px]`} 
                        src="/assets/landingpage/ACM Logo.svg" style={{cursor: 'pointer'}} onClick={() => setSelected(1)}/>
                    <img className={`flex ${Selected == 2 ? 'opacity-100' : 'opacity-70'} hover:opacity-100 transition duration-200 mr-4 w-[75px]`} 
                        src={`${theme=='dark' ? '/assets/landingpage/NextLogo-Dark.svg' : '/assets/landingpage/NextLogo-Light.svg'}`} style={{cursor: 'pointer'}} onClick={() => setSelected(2)}/>
                  </div>
                  <LuChevronRight className='flex h-full cursor-pointer text-surface-contrast' size={50} onClick={() => {if(Selected !== maxExperience) {setSelected(prevSelected => (prevSelected+1))}}}/>
                </div>
                {/* Experience Box */}
                <div className="flex w-full h-full min-w-[300px] min-h-[375px] mt-5 drop-shadow-xl relative"> {/* Experience Div */}
                  <div className="flex w-full h-full">
                    {Selected == 1 && // ACM UTD
                      <AnimatePresence>
                        <motion.div className='flex flex-col font-medium text-white justify-center w-full h-full min-h-[375px]  bg-black p-12' initial={{y: 20, opacity: 0}} animate={{y:0, opacity:1}} transition={{duration: .5}}>
                          <h1 className="flex flex-col w-full h-full">
                            <span className={`flex flex-row w-full justify-between h-full text-white font-bold headingText `}> 
                              <span className='flex flex-col font-black'>
                                ASSOCIATION FOR COMPUTING MACHINERY @ UTD
                                <span className={`text-white font-medium bodyText`}>
                                  Development Officer
                                </span>
                                <span className={`text-white font-medium bodyText`}>
                                  June 19, 2025 -{' '}
                                  <span className="bg-white text-black rounded-full px-3">
                                    Present
                                  </span>
                                </span>
                              </span>
                              {!isTinyMobile && <img src="/assets/landingpage/ACM Logo.svg"/>}
                            </span> 
                            <span className={`text-white font-medium bodyText ml-4`}>
                              <li className="mt-4">
                                Developed a website under ACM UTD, apart of the largest international computing society. I operate as a frontend-developer and designer.
                              </li>
                              <li>
                                Collaborated with a team of other developers in implementing features and designs for the website using {' '}
                                <span className="font-bold">
                                React.
                                </span>
                              </li>
                              <li>
                                Undertook a complete re-design of preexisting pages as well as prototyping of new pages using {' '}
                                <span className="font-bold">
                                Figma.
                                </span>
                              </li>
                            </span>
                          </h1>
                        </motion.div>
                      </AnimatePresence>
                    }
                    {Selected == 2 && // NEXT ??
                      <AnimatePresence>
                        <motion.div className='flex flex-col font-medium w-full h-full min-h-[375px]  bg-surface-primary border-1 border-surface-contrast p-12' initial={{y: 20, opacity: 0}} animate={{y:0, opacity:1}} transition={{duration: .5}}>
                          <h1 className="flex flex-col text-surface-contrast justify-center w-full h-full ">
                            <span className={`flex font-black mb-4 ${isTinyMobile ? 'text-2xl' : 'text-3xl'}  items-end`}> 
                              Nothing Here! 
                              {!isTinyMobile && 
                              <span className={`font-medium ${isTinyMobile ? 'text-md' : 'text-xl'}  ml-4`}>
                                (for now...)
                              </span>}
                            </span> 
                          </h1>
                        </motion.div>
                      </AnimatePresence>
                    }
                  </div>
                  <Sticker className="-bottom-24 -left-26" src='/assets/landingpage/CoffeeMe.svg'/> 
                  <Sticker className="-bottom-18 -right-20" src='/assets/landingpage/Glasses.svg'/> 
                </div>
              </div>
              {/* ========================================== TECH STACK ================================= */}            
              <div id="experience" className='flex flex-col items-center justify-center mt-20 w-full mb-30'>            
                <span className={`text-surface-contrast titleText justify-between items-center racingSans w-full flex `}>
                  <p>
                    TECH STACK
                  </p>
                  <p className='text-4xl'>
                    04
                  </p>
                </span>
                <div className="mt-10 min-w-[300px] flex flex-wrap items-center justify-center relative w-full">
                    <TechStack block={techStack}/>
                    <Sticker className="-bottom-28 -left-26 -rotate-12 scale-85" src="/assets/landingpage/MeNerd.svg"/>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default landingPage