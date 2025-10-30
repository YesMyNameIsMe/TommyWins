import {React, useState} from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu'
import ProjectComponent from '../components/ProjectComponent'
import LinkBubble from '../components/LinkBubble'
import { HashLink as Link } from 'react-router-hash-link';

function landingPage() {

  const [Selected, setSelected] = useState(1)
  const maxExperience = 2;

  return (
    <div id="header" className="flex justify-center bg-cover bg-center relative bg-darkestBlue" 
         style={{backgroundImage: "url('assets/HomeBG.svg')", overflow: 'hidden'}}>   
        <div className="flex w-full flex-col items-center mt-30">
          {/* Hero Page Logo */}
            <div className="flex w-full h-[16%] justify-center items-start">
              <motion.div className="flex flex-col justify-center items-center z-10" initial={{y: 20, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.5, type: 'tween', delay: 0.2}}>
                  <iframe id="contact" className="h-[500px] w-150" src='/assets/HeroPageLogo.html'/>
                  <div className="flex h-full w-full items-center justify-center gap-4">
                    <LinkBubble name="LinkedIn" image="/assets/LinkedInLogo.png" link="https://www.linkedin.com/in/tommy-nguyen-ba899423a"/>
                    <LinkBubble name="GitHub" image="/assets/GitHubLogo.png" link="https://github.com/YesMyNameIsMe"/>
                    <LinkBubble name="txn230018@utdallas.edu" image="/assets/EmailLogo.png"/>                  
                  </div>
              </motion.div>
            </div>
            {/* ------------------------------------------- ABOUT ------------------------------------- */}            
            <div className='flex flex-col items-center justify-center w-[60%]' initial={{y: 50, opacity: 0}} whileInView={{y:0, opacity: 1}} transition={{duration: 0.5}} viewport={{once: true, amount: 0.5}}>
              <heading className="text-white text-7xl mt-50">
                ABOUT
              </heading>
              <div className="flex mt-10 min-w-[600px] w-full min-h-[10%] rounded-2xl justify-center bg-gradient-to-bl from-darkestBlue to-darkerBlue drop-shadow-xl relative">
                {/* Image Container */}
                <div className="w-[37%] items-center p-4 flex relative">
                  <img className="w-full h-auto rounded-lg" src="/assets/HeadShot.png"/>
                  <img className="absolute -bottom-8 -left-8 scale-85" src="/assets/MeOP.svg"></img>
                  <img className="absolute -top-8 -right-8 scale-85" src="/assets/Camera.svg"></img>
                </div>
                {/* Text Container */}
                <div className="w-[63%] flex flex-col justify-center relative">
                  <h1 className="flex-col text-white m-4 min-w-[50%]"> 
                    <span className="flex text-white font-bold text-3xl font-mono"> 
                      Who Am I? 
                    <span className="mt-2 ml-4 text-white font-normal text-sm font-mono"> 
                      (non-existentially) </span>
                    </span> 
                    <span className=" text-white font-normal text-xl font-mono">
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
                  </h1> 
                </div>
              </div>
            </div>
            {/* ------------------------------------------- DESIGN PHILOSOPHY ------------------------------------- */}            
            <div className='flex flex-col items-center justify-center w-[60%] mt-10' initial={{y:50, opacity: 0}} whileInView={{y:0, opacity: 1}} transition={{duration: 0.5}} viewport={{amount: 0.5, once: true}}>
              <div className="flex min-w-[600px] w-full min-h-[7%] py-4 rounded-2xl justify-center bg-gradient-to-bl from-darkestBlue to-darkerBlue drop-shadow-xl relative">
                <img className="absolute -bottom-16 -right-24 scale-85" src="/assets/MePondering.svg" />
                {/*<img className="absolute -bottom-16 -left-24 scale-85" src="/assets/PlatoHead.svg" />}
                {/* Text Container */}
                <div className="w-full flex flex-col justify-center relative mx-8">
                  <h1 className="flex-col text-white m-4 min-w-[50%]"> 
                    <span className="flex text-white font-bold text-3xl font-mono"> 
                      My Design Philosophy 
                    </span> 
                    <span className=" text-white font-normal text-xl font-mono">
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
            {/* ------------------------------------------- EXPERIENCE ------------------------------------- */}            
            <div id="experience" className='flex flex-col items-center justify-center w-[60%] '  initial={{y: 50, opacity: 0}} whileInView={{y:0, opacity: 1}} transition={{duration: 0.5}} viewport={{once: true, amount: 0.5}}>
              <heading className="text-white text-7xl mt-50">
                EXPERIENCE
              </heading>
              {/* Experience Clicker */}
              <div className="flex w-full min-w-[600px] min-h-[3%] mt-10 py-4 bg-darkestBlue rounded-2xl drop-shadow-xl select-none"> 
                <LuChevronLeft className='flex h-full cursor-pointer' color='#FFFFFF' size={50} onClick={() => {if(Selected !== 1) {setSelected(prevSelected => (prevSelected-1))} }}/>
                <div className="flex w-full items-center justify-start"> {/* Experience Icons */}
                  <img className={`flex ${Selected == 1 ? 'opacity-100' : 'opacity-70'} hover:opacity-100 transition duration-200 mr-4`} 
                      src="/assets/ACM Logo.svg" style={{cursor: 'pointer'}} onClick={() => setSelected(1)}/>
                  <img className={`flex ${Selected == 2 ? 'opacity-100' : 'opacity-70'} hover:opacity-100 transition duration-200 mr-4`} 
                      src="/assets/Next Logo.svg" style={{cursor: 'pointer'}} onClick={() => setSelected(2)}/>
                </div>
                <LuChevronRight className='flex h-full cursor-pointer' color='#FFFFFF' size={50} onClick={() => {if(Selected !== maxExperience) {setSelected(prevSelected => (prevSelected+1))}}}/>
              </div>
              <div className="flex w-full min-w-[600px] min-h-[450px] mt-5 bg-gradient-to-b from-darkestBlue to-darkerBlue rounded-2xl drop-shadow-xl relative"> {/* Experience Div */}
                <div className="flex w-full h-full mx-8">
                  {Selected == 1 && // ACM UTD
                    <AnimatePresence>
                      <motion.div initial={{y: 20, opacity: 0}} animate={{y:0, opacity:1}} transition={{duration: .5}}>
                        <h1 className="flex flex-col text-white justify-center w-full h-full ">
                          <span className="flex text-white font-bold text-3xl font-mono"> 
                            Association for Computing Machinery at UTD
                          </span> 
                          <span className="text-white font-normal text-2xl font-mono">
                            ACM Development Officer
                          </span>
                          <span className="text-white font-normal text-2xl font-mono">
                            June 19, 2025 -{' '}
                            <span className="bg-blue rounded-full px-3">
                              Present
                            </span>
                          </span>
                          <span className="text-white font-normal text-xl font-mono mt-4">
                            Developed a website under ACM UTD, apart of the largest international computing society. I operate as a fronted-developer and designer.
                          </span>
                          <li className="text-white font-normal text-xl font-mono">
                            Collaborated with a team of other developers in implementing features and designs for the website using {' '}
                            <span className="font-black">
                            React.
                            </span>
                          </li>
                          <li className="text-white font-normal text-xl font-mono">
                            Undertook a complete re-design of preexisting pages as well as prototyping of new pages using {' '}
                            <span className="font-black">
                            Figma.
                            </span>
                          </li>
                        </h1>
                      </motion.div>
                    </AnimatePresence>
                  }
                  {Selected == 2 && // ACM UTD
                    <AnimatePresence>
                      <motion.div initial={{y: 20, opacity: 0}} animate={{y:0, opacity:1}} transition={{duration: .5}}>
                        <h1 className="flex flex-col text-white justify-center w-full h-full ">
                          <span className="flex text-white font-bold text-3xl font-mono"> 
                            Nothing Here! 
                            <span className="flex items-end h-full text-lg ml-2">
                              (for now...)
                            </span>
                          </span> 
                          <span className="text-white font-normal text-xl font-mono mt-4">
                            But you have the power to help change that! 
                          </span>
                          <span className="text-white font-normal text-xl font-mono mt-4">
                            Immortalize yourself in the *very* prestigious website of Tommy Nguyen! (until whenever the internet shuts down)
                          </span>
                        </h1>
                      </motion.div>
                    </AnimatePresence>
                  }
                </div>
                <img className="absolute -bottom-24 -left-26 scale-90" src='/assets/CoffeeMe.svg'/> 
                <img className="absolute -bottom-14 -right-26 scale-90" src='/assets/Glasses.svg'/> 
              </div>
            </div>
            {/* ------------------------------------------- PROJECTS ------------------------------------- */}            
            <div id="projects" className='flex flex-col items-center justify-center w-[60%]' initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5}} viewport={{ once: true}}>            
              <heading className="text-white text-7xl mt-50">
                PROJECTS
              </heading>
              <div className="mt-10 flex min-w-[600px] gap-10 flex-wrap items-center justify-center ">
                <ProjectComponent link="/lore#header" title="Lore" img="/assets/LoreSticker.svg" description="Mobile party game app that uses AI to generate stories"/>
                <ProjectComponent link="/nexus#header" title="Nexus" img="/assets/NexusSticker.svg" description="A website for students to easily stay on top of classes"/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default landingPage