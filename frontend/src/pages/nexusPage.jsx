import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, delay, motion } from 'framer-motion'
import ImageCarousel from '../components/ImageCarousel'
import SkillList from '../components/SkillList'
import LinkBubble from '../components/LinkBubble'
import NexusInfo from './nexusInfo'

const NexusPage = () => {

  const images = [
    {
      src: '/assets/NexusImage1.png'
    },
    {
      src: '/assets/NexusImage2.png'
    },
    {
      src: '/assets/NexusImage3.png'
    },
    {
      src: '/assets/NexusImage4.png'
    }
  ]

  const skills = [{name: 'Figma'}, {name: 'UI/UX Design'}, {name: 'React'}, {name: 'TypeScript'}, {name: 'Graphic Design'},
                  {name: 'Prototyping'}, {name: 'TailwindCSS'}, {name: 'Programming'}, {name: 'SVG Animation'}]

  return (
    <div className='flex justify-center h-[3100px] min-w-full bg-darkBlue bg-center bg-cover' style={{backgroundImage: "url('assets/NexusBG.svg')", overflow: 'auto'}}>
        <div className="flex flex-col h-full w-full items-center relative overflow-hidden">
          {/*---------------------------------- TITLE ---------------------------------*/}
          <motion.div initial={{y: 20, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.5, type: 'tween', delay: 0.2}}>
            <img className="items-center justify-center h-auto w-[500px] flex mt-50" src="/assets/NexusLogo.svg" />
          </motion.div>
          <motion.div initial={{y: 20, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.5, type: 'tween', delay: 0.4}}>
            <h1 className="flex items-center justify-center text-3xl text-white mt-5 font-mono font-bold" >
              FRONT-END DEVELEPOR & DESIGNER
            </h1>
          </motion.div>
          <motion.div className="flex mt-5 gap-4" initial={{y: 20, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.5, type: 'tween', delay: 0.6}}>
            <LinkBubble name="Figma" image="/assets/FigmaLogo.png" link="https://www.figma.com/design/G5POQBVUXCiCwuvaA2rWmA/Nexus?t=zJsmJ8ybWiNWlcc7-1"/>
            <LinkBubble name="Website (Coming Soon!)" image="/assets/WebIcon.png"/>
          </motion.div>
          {/*---------------------------------- IMAGE CAROUSEL ---------------------------------*/}
            <div className="flex flex-col w-[60%] mt-30 relative" initial={{y: 50, opacity: 0}} whileInView={{y:0, opacity: 1}} transition={{duration: 0.5}} viewport={{once: true, amount: 0.3}}>
                <heading className="flex text-white text-5xl justify-center text-center">
                  SAMPLE PAGES
                </heading>
                <h1 className='flex font-mono text-white mt-3 justify-center '>
                  (All Designed By Yours Truly!)
                </h1>
                <div className="justify-center items-center flex relative">
                  <ImageCarousel className="mt-4" images={images} />
                  <img className="-right-75 -bottom-55 -rotate-12 scale-50 absolute" src="/assets/NexusSleeping.svg" />
                </div>
            </div>
          {/*---------------------------------- WHAT IS NEXUS? ---------------------------------*/}
          <div className="flex flex-col justify-center items-center" initial={{y: 50, opacity: 0}} whileInView={{y:0, opacity: 1}} transition={{duration: 0.5}} viewport={{once: true, amount: 0.5}}>
            <heading className="text-white text-5xl mt-40">
              WHAT IS NEXUS?
            </heading>
            <div className="flex mt-5 min-w-[650px] w-[60%] min-h-[10%] rounded-2xl justify-center bg-gradient-to-bl from-darkestBlue to-darkerBlue drop-shadow-xl relative">
              {/* Text Container */}
              <div className="w-full flex flex-col justify-center relative">
                <img className="absolute -scale-x-100 -bottom-20 -left-20" src='/assets/BackpackSticker.svg'/>
                <span className="m-10 text-white font-normal text-xl font-mono">
                  Nexus is a web app created to give students an easy way to converse and study with their classmates without the hassle of obtaining contact information. It aims to make communication and studying easier for classmates by providing a consolidated platform for study tools.
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
              <img className="absolute -top-30 -right-20 z-1" src='/assets/PeechiSticker.svg'/>
              <div className="z-2 flex mt-5 rounded-2xl justify-center bg-gradient-to-bl from-darkestBlue to-darkerBlue drop-shadow-xl relative">
                {/* Text Container */}
                <div className="w-full flex flex-col justify-center relative">
                  <span className="m-10 text-white font-normal text-xl font-mono">
                    With collaboration among other ACM officers, I helped build many parts of Nexus’ front-end. I am responsible for Nexus’ overall design as well as a handful of the pages. I joined the team after Nexus was already established, so as the lead designer, I was tasked for a complete design overhaul of the website, which was quite the tall order! But after a few iterations and feedback, I landed on a style that I believe can set Nexus apart from other websites and make it memorable!
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
          
          <motion.div className="absolute -right-30 -bottom-40" initial={{y: 300}} whileInView={{rotate: -7, y:30}} transition={{duration: 1.2, type: 'spring', bounce: 0.5}}>
            <Link to="/nexus/info" className="hover:underline absolute top-23 left-40 text-4xl font-mono font-bold"> Wanna Learn More? → </Link>
            <img className="" src='/assets/Paper.svg'/>
          </motion.div>
        </div>
      </div>
  )
}

export default NexusPage