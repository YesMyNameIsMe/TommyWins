import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, delay, motion } from 'framer-motion'
import SkillList from '../components/SkillList'
import LinkBubble from '../components/LinkBubble'

const LorePage = () => {
  const images = [
    {
      src: '/assets/LoreImage1.png'
    },
    {
      src: '/assets/LoreImage2.png'
    },
    {
      src: '/assets/LoreImage3.png'
    },
    {
      src: '/assets/LoreImage4.png'
    },
  ]

  const skills = [{name: 'Figma'}, {name: 'UI/UX Design'}, {name: 'React Native'}, {name: 'TypeScript'}, 
                  {name: 'TailwindCSS'}, {name: 'Programming'}, {name: 'Animation'}]

  return (
    <div className='flex justify-center h-[3100px] min-w-full bg-darkBlue bg-center bg-cover' style={{backgroundImage: "url('assets/LoreBG.svg')", overflow: 'auto'}}>
        <div className="flex flex-col h-full w-full items-center relative overflow-hidden">
          {/*---------------------------------- TITLE ---------------------------------*/}
          <motion.div initial={{y: 20, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.5, type: 'tween', delay: 0.2}}>
            <img className="items-center justify-center h-auto w-[500px] flex mt-50" src="/assets/LoreLogo.svg" />
          </motion.div>
          <motion.div initial={{y: 20, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.5, type: 'tween', delay: 0.4}}>
            <h1 className="flex items-center justify-center text-3xl text-white mt-5 font-mono font-bold" >
                FRONT-END DEVELOPER & DESIGNER
            </h1>
          </motion.div>
          <motion.div className="flex mt-5 gap-4" initial={{y: 20, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.5, type: 'tween', delay: 0.6}}>
            <LinkBubble name="Figma" image="/assets/FigmaLogo.png" link="https://www.figma.com/design/6PwvZhxVdKTtVnILXk28bF/ACM-Lore?node-id=0-1&t=oiWfVVZgvw2kZDJC-1"/>
            <LinkBubble name="Live Presentation" image="/assets/VideoIcon.png" link="https://www.youtube.com/live/toUGY4KB2c8?si=yWPqK2mHa5dPgeGk&t=3256"/>
            <LinkBubble name="Demo Video" image="/assets/VideoIcon.png" link="https://drive.google.com/file/d/13smlSXXKzOVhZBdTQ7A8B_GJTHSYrkFX/view?usp=sharing"/>
          </motion.div>
          {/*---------------------------------- IMAGE CAROUSEL ---------------------------------*/}
            <div className="items-center flex flex-col w-[60%] mt-30 relative" initial={{y: 50, opacity: 0}} whileInView={{y:0, opacity: 1}} transition={{duration: 0.5}} viewport={{once: true, amount: 0.3}}>
                <heading className="flex text-white text-5xl items-center text-center justify-center">
                  SAMPLE SCREENS
                </heading>
                <h1 className='flex font-mono text-white mt-3 justify-center '>
                  (All Designed By Yours Truly!)
                </h1>
                <div className="w-1/4 justify-center items-center flex relative gap-4 mt-4">
                  <img className="border-4 rounded-xl border-blue" src='/assets/LoreImage1.png' />
                  <img className="border-4 rounded-xl border-blue" src='/assets/LoreImage2.png' />
                  <img className="border-4 rounded-xl border-blue" src='/assets/LoreImage3.png' />
                  <img className="border-4 rounded-xl border-blue" src='/assets/LoreImage4.png' />
                </div>
                <img className="-right-85 -bottom-55 scale-50 absolute" src="/assets/RoboSquadSticker.svg" />
            </div>
          {/*---------------------------------- WHAT IS LORE? ---------------------------------*/}
          <div className="flex flex-col justify-center items-center" initial={{y: 50, opacity: 0}} whileInView={{y:0, opacity: 1}} transition={{duration: 0.5}} viewport={{once: true, amount: 0.5}}>
            <heading className="text-white text-5xl mt-40">
              WHAT IS LORE?
            </heading>
            <div className="flex mt-5 min-w-[650px] w-[60%] min-h-[10%] rounded-2xl justify-center bg-gradient-to-bl from-darkestBlue to-darkerBlue drop-shadow-xl relative">
              <img className="absolute scale-25 -bottom-90 -left-80" src='/assets/DoorSticker.svg'/>
              {/* Text Container */}
              <div className="w-full flex flex-col justify-center relative">
                <span className="m-10 text-white font-normal text-xl font-mono">
                  Lore is an interactive storytelling party game meant for those who enjoy using their imagination to create stories. It features writing key plot points, which are voted on by the players, and letting an AI generate a story based off of it, continuing after a set amount of rounds. Think Jackbox party games as an apt comparison.
                </span>
              </div>
            </div>
          </div>
          {/*---------------------------------- WHAT DID I DO? ---------------------------------*/}
          <div className="relative flex flex-col justify-center items-center" initial={{y: 50, opacity: 0}} whileInView={{y:0, opacity: 1}} transition={{duration: 0.5}} viewport={{once: true, amount: 0.5}}>
            <heading className="text-white text-5xl mt-30">
              WHAT DID I DO?
            </heading>
            <div className="relative min-w-[650px] w-[60%] min-h-[10%]">
              <div className="z-2 flex mt-5 rounded-2xl justify-center bg-gradient-to-bl from-darkestBlue to-darkerBlue drop-shadow-xl relative">
              <img className="absolute top-0 -right-75 z-50 scale-40" src='/assets/DrawingSticker.svg'/>
                {/* Text Container */}
                <div className="w-full flex flex-col justify-center relative">
                  <span className="m-10 text-white font-normal text-xl font-mono">
                    Collaborating with a team of 2 other developers and a project lead, I was one the main frontend developer and designer. I was also responsible for some minor backend development such as database operations and lambda functions. I created all the graphics, page layouts, and animations for every screen, implementing a majority of them, as well. Our team also showcased the app with the end-of-semester presentation (Linked Above!).
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/*---------------------------------- WHAT DID I USE? ---------------------------------*/}
          <div className="relative w-full flex flex-col justify-center items-center" initial={{y: 50, opacity: 0}} whileInView={{y:0, opacity: 1}} transition={{duration: 0.5}} viewport={{once: true, amount: 0.5}}>
            <heading className="text-white text-5xl mt-30 mb-5">
              WHAT DID I USE?
            </heading>
            <div className="min-w-[700px] w-[60%] justify-center items-center flex relative">
              <SkillList skills={skills} />
              <img className='absolute scale-80 -bottom-20 -left-25' src='/assets/ToolboxSticker.svg'></img>
            </div>
          </div>
          
          <motion.div className="absolute -right-10 -bottom-45" initial={{y: 300}} whileInView={{rotate: -7, y:30}} transition={{duration: 1.2, type: 'spring', bounce: 0.5}}>
            <Link to="/lore/info" className="z-1 text-white hover:underline absolute top-50 left-50 text-4xl font-mono font-bold"> Wanna Learn More? → </Link>
            <img className="scale-90 z-0" src='/assets/RoboHand.svg'/>
          </motion.div>
        </div>
      </div>
  )
}

export default LorePage