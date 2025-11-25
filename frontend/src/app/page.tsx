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

function landingPage() {
  const {isMobile} = useMobile()
  const {isTinyMobile} = useMobile()
  const screenWidth = useScreen()
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
    <div id="header" className="flex justify-center bg-cover bg-center relative bg-darkestBlue" 
         style={{backgroundImage: isMobile ? "url('/assets/landingpage/MobileHomeBG.svg')" : "url('/assets/landingpage/HomeBG.svg')", overflow: 'hidden'}}>   
        <div className={`flex w-full flex-col items-center ${isTinyMobile ? '' : 'mt-20'}`}>
            {/* ========================================== TITLE ========================================== */}            
            <div className={`flex w-full h-[15%] justify-center items-center mt-0 md:mt-5 ${isTinyMobile ? 'scale-70' : isMobile ? 'scale-90' : ''} `}>
              
              <motion.div className="flex flex-col justify-center items-center z-10" initial={{y: 20, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.5, type: 'tween', delay: 0.2}}>
                  <iframe id="contact" className={`h-[460px] w-150 ml-10 ${isTinyMobile ? 'scale-90' : ''}`} src='/assets/landingpage/HeroPageLogo.html'/>
                  
                  <span className={`font-mono text-white ${isMobile ? 'text-xl' : 'text-lg'} mb-4`}>
                    Tommy <span className='line-through'> Win</span> {' '}Nguyen | UI/UX & Product Designer
                  </span>

                  <div className={`flex ${isMobile ? 'flex-row flex-wrap' : ''} h-full w-full items-center justify-center gap-4`}>
                    <LinkBubble name="LinkedIn" image="/assets/general/LinkedInLogo.png" link="https://www.linkedin.com/in/tommy-nguyen-ba899423a"/>
                    <LinkBubble name="GitHub" image="/assets/general/GitHubLogo.png" link="https://github.com/YesMyNameIsMe"/>
                    <LinkBubble name="nguyen424787@gmail.com" image="/assets/general/EmailLogo.png"/>                  
                  </div>
              </motion.div>

            </div>
            {/* ========================================== ABOUT ========================================== */}            
            <div className='flex flex-col items-center justify-center w-[60%]'>
              <span className={`text-white ${isTinyMobile ? "text-5xl" : "text-7xl"} mt-40 heading`}>
                ABOUT
              </span>
              <div className={`flex ${isMobile ? 'flex-col p-4' : ''} mt-10 min-w-[300px] w-full min-h-[10%] rounded-2xl justify-center items-center bg-linear-to-bl from-darkestBlue to-darkerBlue drop-shadow-xl relative`}>
                {/* Image Container */}
                <div className={`${isMobile ? 'w-[75%]': 'w-[40%]'} items-center p-4 flex relative`}>
                  <img className={`${isMobile ? 'rounded-full': 'w-full rounded-lg'} h-auto`} src={`${isMobile ? '/assets/landingpage/HeadShotMobile.png' : '/assets/landingpage/HeadShot.png'}`}/>
                  <Sticker className="-bottom-8 -left-12 scale-90" src="/assets/landingpage/MeOP.svg"/>
                  <Sticker className="-top-8 -right-8" src="/assets/general/Camera.svg"/>
                </div>
                {/* Text Container */}
                <div className={`${isMobile ? 'w-full' : 'w-[67%]'} flex flex-col justify-center relative`}>
                  <h1 className="flex flex-col text-white m-4 min-w-[50%]"> 
                    <span className={`flex text-white font-bold ${isTinyMobile ? 'text-xl' : isMobile ? 'text-2xl' : 'text-3xl'} font-mono`}> 
                      Who Am I? 
                      {!isMobile && <span className="mt-2 ml-4 text-white font-normal text-sm font-mono"> 
                        (non-existentially) 
                      </span>}
                    </span> 
                    <span className={`text-white font-normal ${isTinyMobile ? 'text-md' : isMobile ? 'text-lg' : 'text-xl'} font-mono`}>
                      Hello! My name is Tommy Nguyen and I’m a {' '}
                      <span className="font-black">Computer Science Major at UTD, </span>
                      and I specialize in {' '}
                      <span className="font-black">UI/UX Design. </span>
                      I love designing and creating concepts, which is particularly useful in {' '}
                      <span className="font-black">Front-End Development</span>
                      , as well as creating {' '}
                      <span className="font-black">Graphics </span>
                      for my works and projects. I've always been desining ever since I was a kid, so you could say this is my life's ambition!
                    </span>
                    <Link href="/about" className={`w-fit mt-4 font-mono ${isTinyMobile ? 'text-md' : isMobile ? 'text-lg' : 'text-xl'} text-white underlineText`}>
                      Wanna Know More About Me? →
                    </Link>
                  </h1> 
                </div>
              </div>
            </div>
            {/* ========================================== DESIGN PHILOSOPHY ========================================== */}            
            <div className='flex flex-col items-center justify-center w-[60%] mt-10'>
              <div className="flex min-w-[300px] w-full min-h-[7%] py-4 rounded-2xl justify-center bg-linear-to-bl from-darkestBlue to-darkerBlue drop-shadow-xl relative">
                <Sticker className="-bottom-20 -right-16" src="/assets/landingpage/MePondering.svg" />
                {/*<img className="absolute -bottom-16 -left-24 scale-85" src="/assets/PlatoHead.svg" />}
                {/* Text Container */}
                <div className="w-full flex flex-col justify-center relative mx-8">
                  <h1 className="flex-col text-white my-4 min-w-[50%]"> 
                    <span className={`flex text-white font-bold ${isTinyMobile ? 'text-xl' : isMobile ? 'text-2xl' : 'text-3xl'} font-mono`}> 
                      My Design Philosophy 
                    </span> 
                    <span className={`text-white font-normal ${isTinyMobile ? 'text-md' : isMobile ? 'text-lg' : 'text-xl'} font-mono`}>
                      My philosophy is rooted in creating {' '}
                      <span className="font-black">connections </span>
                      I believe the best designs are the ones that feel {' '}
                      <span className="font-black">intuitive, engaging, and human. </span>
                      In other words, I strive to create experiences that people will {' '}
                      <span className="font-black">remember {' '}</span>
                      and {' '}
                      <span className="font-black">resonate </span>
                      with.
                    </span>
                  </h1> 
                </div>
              </div>
            </div>
            {/* ========================================== PROJECTS ========================================== */}            
            <div id="projects" className='flex flex-col items-center justify-center w-[60%] mt-30'>            
              <span className={`text-white ${isTinyMobile ? "text-5xl" : "text-7xl"} heading`}>
                PROJECTS
              </span>
              <div className="mt-10 flex min-w-[300px] gap-10 flex-wrap items-center justify-center ">
                <ProjectComponent link="/lore#header" title="Lore" img="/assets/LoreSticker.svg" description="Mobile party game app that uses AI to generate stories"/>
                <ProjectComponent link="/nexus#header" title="Nexus" img="/assets/general/NexusSticker.svg" description="A website for students to easily stay on top of classes"/>
              </div>
            </div>
            {/* ========================================== EXPERIENCE ========================================== */}            
            <div id="experience" className='flex flex-col items-center justify-center w-[60%] mt-30'>
              <span className={`text-white ${isTinyMobile ? "text-5xl" : "text-7xl"} heading`}>
                EXPERIENCE
              </span>
              {/* Experience Clicker */}
              <div className="flex w-full min-w-[300px] min-h-[3%] mt-10 py-4 bg-darkestBlue rounded-2xl drop-shadow-xl select-none"> 
                <LuChevronLeft className='flex h-full cursor-pointer' color='#FFFFFF' size={50} onClick={() => {if(Selected !== 1) {setSelected(prevSelected => (prevSelected-1))} }}/>
                <div className="flex w-full items-center justify-start"> {/* Experience Icons */}
                  <img className={`flex ${Selected == 1 ? 'opacity-100' : 'opacity-70'} hover:opacity-100 transition duration-200 mr-4`} 
                      src="/assets/landingpage/ACM Logo.svg" style={{cursor: 'pointer'}} onClick={() => setSelected(1)}/>
                  <img className={`flex ${Selected == 2 ? 'opacity-100' : 'opacity-70'} hover:opacity-100 transition duration-200 mr-4`} 
                      src="/assets/landingpage/Next Logo.svg" style={{cursor: 'pointer'}} onClick={() => setSelected(2)}/>
                </div>
                <LuChevronRight className='flex h-full cursor-pointer' color='#FFFFFF' size={50} onClick={() => {if(Selected !== maxExperience) {setSelected(prevSelected => (prevSelected+1))}}}/>
              </div>
              {/* Experience Box */}
              <div className="flex w-full min-w-[300px] min-h-[375px] mt-5 p-6 bg-linear-to-b from-darkestBlue to-darkerBlue rounded-2xl drop-shadow-xl relative"> {/* Experience Div */}
                <div className="flex w-full h-full mx-4">
                  {Selected == 1 && // ACM UTD
                    <AnimatePresence>
                      <motion.div initial={{y: 20, opacity: 0}} animate={{y:0, opacity:1}} transition={{duration: .5}}>
                        <h1 className="flex flex-col text-white justify-center w-full h-full ">
                          <span className={`flex text-white font-bold ${isTinyMobile ? 'text-2xl' : 'text-3xl'} font-mono`}> 
                            Association for Computing Machinery at UTD
                          </span> 
                          <span className={`text-white font-normal ${isTinyMobile ? 'text-xl' : 'text-2xl'} font-mono`}>
                            ACM Development Officer
                          </span>
                          <span className={`text-white font-normal ${isTinyMobile ? 'text-xl' : 'text-2xl'} font-mono mb-4`}>
                            June 19, 2025 -{' '}
                            <span className="bg-blue rounded-full px-3">
                              Present
                            </span>
                          </span>
                          <span className={`text-white font-normal ${isTinyMobile ? 'text-md' : 'text-xl'} font-mono`}>
                            <span className="mt-4">
                              Developed a website under ACM UTD, apart of the largest international computing society. I operate as a frontend-developer and designer.
                            </span>
                            <li>
                              Collaborated with a team of other developers in implementing features and designs for the website using {' '}
                              <span className="font-black">
                              React.
                              </span>
                            </li>
                            <li>
                              Undertook a complete re-design of preexisting pages as well as prototyping of new pages using {' '}
                              <span className="font-black">
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
                      <motion.div initial={{y: 20, opacity: 0}} animate={{y:0, opacity:1}} transition={{duration: .5}}>
                        <h1 className="flex flex-col text-white justify-center w-full h-full ">
                          <span className={`flex text-white font-bold mb-4 ${isTinyMobile ? 'text-2xl' : 'text-3xl'} font-mono items-end`}> 
                            Nothing Here! 
                            {!isTinyMobile && 
                            <span className={`text-white font-normal ${isTinyMobile ? 'text-md' : 'text-xl'} font-mono ml-4`}>
                              (for now...)
                            </span>}
                          </span> 
                          <span className={`text-white font-normal ${isTinyMobile ? 'text-md' : 'text-xl'} font-mono`}>
                            But you have the power to help change that! 
                          </span>
                          <span className={`text-white font-normal ${isTinyMobile ? 'text-md' : 'text-xl'} font-mono`}>
                            Immortalize yourself in the *very* prestigious website of Tommy Nguyen! (until whenever the internet shuts down)
                          </span>
                        </h1>
                      </motion.div>
                    </AnimatePresence>
                  }
                </div>
                <Sticker className="-bottom-24 -left-26" src='/assets/landingpage/CoffeeMe.svg'/> 
                <Sticker className="-bottom-14 -right-20" src='/assets/landingpage/Glasses.svg'/> 
              </div>
            </div>
            {/* ========================================== TECH STACK ================================= */}            
            <div id="projects" className='flex flex-col items-center justify-center w-[75%] my-30 relative text-center'>            
              <span className={`text-white ${isTinyMobile ? "text-5xl" : "text-7xl"} heading`}>
                TECH STACK
              </span>
              <div className="mt-10 min-w-[300px] flex flex-wrap items-center justify-center relative">
                  <TechStack block={techStack}/>
                  <Sticker className="-bottom-28 -right-28 rotate-12" src="/assets/landingpage/MeNerd.svg"/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default landingPage