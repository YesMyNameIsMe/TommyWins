'use client';

import React, { useEffect, useRef, useState } from 'react'
import { animate, AnimatePresence, delay, motion } from 'framer-motion'
import ImageCarousel from '@/components/ImageCarousel';
import SkillList from '@/components/SkillList';
import LinkBubble from '@/components/LinkBubble';
import Sticker from '@/components/Sticker';
import Link from 'next/link';
import { useMobile } from '@/context/mobileContext';
const NexusPage = () => {

  const {isMobile} = useMobile()
  const {isTinyMobile} = useMobile()
  const [isOpen, setOpen] = useState(false)
  const [openedImage, setOpenedImage] = useState("")
  const imageRef = useRef<HTMLImageElement | null>(null)

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if(imageRef.current && !imageRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, []) 

useEffect(() => {
    // 1. Define the function to prevent default scrolling
    const preventDefault = (e: TouchEvent) => {
      e.preventDefault();
    }

    if(isOpen) {
      // Desktop/Standard locking
      document.documentElement.style.overflow = 'hidden'
      document.body.style.overflow = 'hidden'
      
      // Mobile/iOS locking: Prevent the browser from accepting touch drag events
      document.body.addEventListener('touchmove', preventDefault, { passive: false })
    } else {
      document.documentElement.style.overflow = 'auto';
      document.body.style.overflow = 'auto';
      document.body.removeEventListener('touchmove', preventDefault)
    }

    return () => {
      document.documentElement.style.overflow = 'auto';
      document.body.style.overflow = 'auto';
      document.body.removeEventListener('touchmove', preventDefault)
    }
  }, [isOpen])

  const images = [
    {src: '/assets/nexus/Home.png'},
    {src: '/assets/nexus/Grade Calc.png'},
    {src: '/assets/nexus/Superdoc.png'},
    {src: '/assets/nexus/AccessRequest.png'}
  ]

  const comparisons = [
    {src: '/assets/nexus/OldNexus1.png', desc: "Before: Landing Page"},
    {src: '/assets/nexus/Landing Page.png', desc: "After: Landing Page"},
    {src: '/assets/nexus/OldNexus2.png', desc: "Before: Superdoc"},
    {src: '/assets/nexus/Superdoc.png', desc: "After: Superdoc"},
    {src: '/assets/nexus/OldNexus3.png', desc:"Before: Grade Calculator"},
    {src: '/assets/nexus/Grade Calc.png', desc:"After: Grade Calculator"}
  ]

  const conceptPages = [
    {src: '/assets/nexus/Concept1.png', desc: 'One of the earliest pages made to test out the concepts and how it would mesh with the existing UI at the time.'},
    {src: '/assets/nexus/Concept2.png', desc: "Better view of the previous image's background. A 'crystal' theme that is invoked by the geometric design of Nexus."},
    {src: '/assets/nexus/Concept3.png', desc: "Another early page, the background is meant to represent Nexus quite literally, where it's a connection of multiple points and lines."},
    {src: '/assets/nexus/Concept4.png', desc: 'The fan favorite design! An attempt to make a more identifiable style through more playful graphics.'},    
    {src: '/assets/nexus/loadingAnim.gif', desc: 'Custom loading animation I made that also takes the word Nexus literally, where the logo grows and disperses out to make connections.'},    
  ]

  const skills = [{name: 'Figma'}, {name: 'React'}, {name: 'TypeScript'}, 
                  {name: 'Prototyping'}, {name: 'TailwindCSS'}, {name: 'SVG Animation'}]

  const wdid = [{desc: 'Oversaw A Complete Overhaul of Existing Design', src: '/assets/nexus/Refresh.png'}, 
                {desc: 'Integration of Designs into Code via React', src: '/assets/general/ReactLogo.png'}, 
                {desc: 'Created Designs and Graphics for all Pages via Figma', src: '/assets/general/FigmaLogo.png'}]

  const wisn = [{desc: 'Easy Grade Management via  Grade Calculator'}, 
                {desc: 'Consolidated Class Notes for Students via “Superdoc”'}, 
                {desc: 'Quick Class Group Chat Creation via Class Scraping '}]

  return (
    <div className={`flex justify-center ${isTinyMobile ? 'h-[8500px]' : isMobile ? 'h-[8000px]' : 'h-[7400px]'} min-w-full bg-darkBlue bg-center bg-cover`} style={{backgroundImage: isMobile ? "url('/assets/nexus/MobileNexusBG.svg')" : "url('/assets/nexus/NexusBG.svg')", overflow: 'auto'}}>
        <div id="header" className="flex flex-col h-full w-full items-center relative overflow-hidden">
          {/*============================== TITLE ==============================*/}
          <motion.div className="mx-4" initial={{y: 20, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.5, type: 'tween', delay: 0.2}}>
            <img className={`items-center justify-center h-auto w-[500px] flex mt-50 `} src="/assets/nexus/NexusLogo.svg" />
          </motion.div>
          <motion.div initial={{y: 20, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.5, type: 'tween', delay: 0.4}}>
            <h1 className={`flex items-center justify-center ${isTinyMobile ? "text-xl" : "text-3xl"} text-white mt-5 font-mono font-bold`}>
              FRONT-END DEVELOPER & DESIGNER
            </h1>
          </motion.div>
          <motion.div className="items-center justify-center flex mt-5 gap-4 flex-wrap" initial={{y: 20, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.5, type: 'tween', delay: 0.6}}>
            <LinkBubble name="Figma" image="/assets/general/FigmaLogo.png" link="https://www.figma.com/design/G5POQBVUXCiCwuvaA2rWmA/Nexus?t=zJsmJ8ybWiNWlcc7-1"/>
            <LinkBubble name="Website (Coming Soon!)" image="/assets/general/WebIcon.png"/>
          </motion.div>
          {/*============================== SAMPLE PAGES ==============================*/}
          <div className="flex flex-col w-[60%] mt-30 relative">
              <span className={`text-white ${isMobile ? "text-5xl" : "text-7xl"} heading text-center`}>
                SAMPLE PAGES
              </span>
              <h1 className='flex font-mono text-white mt-3 justify-center text-center'>
                (All Designed By Yours Truly!)
              </h1>
              <div className={`flex flex-col justify-center items-center relative`}>
                <ImageCarousel className="mt-5" images={images} />
                {isMobile ? <></> : <Sticker className="-right-32 -bottom-32 -rotate-12" src="/assets/nexus/NexusSleeping.svg" />}
              </div>
          </div>
          {/*============================== WHAT DID I DO ==============================*/}
          <div className="flex flex-col items-center justify-center mt-30">
            <span className={`text-white ${isMobile ? "text-5xl" : "text-7xl"} heading text-center`}>
              WHAT DID I DO?
            </span>
            <div className="flex flex-row w-full gap-10 items-center justify-center flex-wrap mt-4">
              {wdid.map((item, index) => (
                <div key={index} className={`flex flex-col min-w-[200px] w-[18%] h-[200px] bg-darkerBlue items-center justify-center text-center rounded-xl text-white font-mono ${isTinyMobile ? 'text-md' : isMobile ? 'text-lg': 'text-xl'}`}>
                  <div className="flex w-full h-[100px] bg-darkBlue rounded-t-xl items-center justify-center">
                    {item.desc}
                  </div>
                  <div className="flex items-center justify-center h-[100px] w-full p-3">
                    <img className="max-w-full max-h-full hover:scale-120 hover:rotate-10 transition duration-200" src={item.src} alt={item.desc} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/*============================== PROBLEM STATEMENT ==============================*/}
          <div className="flex flex-col justify-center items-center mt-30 relative ">
            <span className={`text-white ${isMobile ? "text-5xl" : "text-7xl"} heading text-center`}>
              PROBLEM STATEMENT
            </span>
            <div className="relative min-w-[300px] w-[60%] min-h-[10%]">
              <Sticker className="-top-2 -left-10 z-10 rotate-24" src='/assets/nexus/QM.svg'/>
              <div className="z-2 flex mt-5 rounded-2xl justify-center bg-linear-to-bl from-darkestBlue to-darkerBlue drop-shadow-xl relative">
                {/* Text Container */}
                <div className="w-full flex flex-col justify-center relative">
                  <span className={`m-10 text-white font-normal ${isTinyMobile ? 'text-md' : isMobile ? 'text-lg' : 'text-xl'} font-mono`}>
                    In college, obtaining contact information with other classmates can be a hassle as students splinter off into separate group chats. There’s also a lack of a singular site that can serve as a consolidated study tool, forcing students to hop around different sites, which can become overwhelming. 
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/*============================== WHAT IS NEXUS? ==============================*/}
          <div className="flex flex-col justify-center items-center mt-30 relative ">
            <span className={`text-white ${isMobile ? "text-5xl" : "text-7xl"} heading text-center`}>
              WHAT IS NEXUS?
            </span>
            <div className="flex flex-row w-[60%] gap-10 items-center justify-center mt-5 flex-wrap">
              {wisn.map((item, index) => (
                <div key={index} className={`flex min-w-[200px] w-[18%] h-[120px] bg-darkBlue items-center justify-center text-center rounded-xl text-white font-mono ${isTinyMobile ? 'text-md' : 'text-xl'} p-2`}>
                  {item.desc}
                </div>
              ))}
            </div>
            <div className="flex mt-5 min-w-[300px] w-[60%] min-h-[10%] rounded-2xl justify-center bg-linear-to-bl from-darkestBlue to-darkerBlue drop-shadow-xl relative">
              {/* Text Container */}
              <div className="w-full flex flex-col justify-center relative">
                <Sticker className=" -scale-x-100 -bottom-20 -left-18" src='/assets/nexus/BackpackSticker.svg'/>
                <span className={`m-10 text-white font-normal ${isTinyMobile ? 'text-md' : isMobile ? 'text-lg' : 'text-xl'} font-mono`}>
                  Nexus is a web app created to give students an easy way to converse and study with their classmates without the hassle of obtaining contact information. It aims to make communication and studying easier for classmates by providing a consolidated platform for study tools.
                </span>
              </div>
            </div>
          </div>
          {/*============================== WHAT DID I USE? ==============================*/}
          <div className="relative w-full flex flex-col justify-center items-center mt-30">
            <span className={`text-white ${isMobile ? "text-5xl" : "text-7xl"} heading text-center mb-5`}>
              WHAT DID I USE?
            </span>
            <div className="min-w-[300px] w-[60%] justify-center items-center flex relative">
              <SkillList skills={skills} />
              <Sticker className='scale-80 -bottom-25 -right-25' src='/assets/general/ToolboxSticker.svg'/>
            </div>
          </div>
          {/*============================== CONCEPTS ==============================*/}
          <div className="flex flex-col w-[60%] mt-30 relative items-center justify-center">
            <span className={`text-white ${isMobile ? "text-5xl" : "text-7xl"} heading text-center`}>
                CONCEPT DESIGNS
              </span>
              <ImageCarousel className="mt-5" images={conceptPages} />
          </div>
          {/*============================== DISCOVERY ==============================*/}
          <div className="relative flex flex-col justify-center items-center mt-30">
            <span className={`text-white ${isMobile ? "text-5xl" : "text-7xl"} heading text-center`}>
              DISCOVERY
            </span>
            <div className="relative min-w-[300px] w-[60%] min-h-[10%]">
              {!isMobile && <Sticker className="-top-28 -left-20 -scale-x-100 z-1" src='/assets/nexus/PeechiSticker.svg'/>}
              <div className="z-2 flex mt-5 rounded-2xl justify-center bg-linear-to-bl from-darkestBlue to-darkerBlue drop-shadow-xl relative">
                {/* Text Container */}
                <div className="w-full flex flex-col justify-center relative">
                  <span className={`m-10 text-white font-normal ${isTinyMobile ? 'text-md' : isMobile ? 'text-lg' : 'text-xl'} font-mono`}>
                    I joined Nexus after it was conceived, meaning it already had an existing design. However, I was brought on as the lead designer, and was thrown in with no clear direction as the team never had one. Being given not much to work with other than knowing what pages to design, I came up with multiple concepts, some that followed the existing design and one that diverged. 
                    My PM presented the designs to other leads and the director, and it was decided that the divergent design was the favorite, making it the main style moving forward. 
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/*============================== USER FLOW ==============================*/}
          <div className="relative flex flex-col justify-center items-center mt-30">
            <span className={`text-white ${isMobile ? "text-5xl" : "text-7xl"} heading text-center`}>
              INITIAL USER FLOW
            </span>
            <img onClick={() => {setOpenedImage("/assets/nexus/UserFlow.png"); setOpen(true)}}
                className='flex mt-5 w-[65%] object-contain rounded-xl cursor-pointer' src="/assets/nexus/UserFlow.png"/>
            <LinkBubble className='mt-5' link='https://www.figma.com/proto/GqaxQ5U2G2XsezcwFAPSbI/Nexus?node-id=1057-17&t=bBgYf32IUJxHFk3x-1' name='Prototype Link' image='/assets/general/FigmaLogo.png'/>
          </div>
          {/*============================== DESIGN ==============================*/}
          <div className="flex flex-col justify-center items-center mt-30" >
            <span className={`text-white ${isMobile ? "text-5xl" : "text-7xl"} heading text-center`}>
              DESIGN
            </span>
            <div className="flex mt-5 min-w-[300px] w-[60%] min-h-[10%] rounded-2xl justify-center bg-linear-to-bl from-darkestBlue to-darkerBlue drop-shadow-xl relative">
              {/* Text Container */}
              <div className="w-full flex flex-col justify-center relative">
                <Sticker className=" scale-90 -bottom-25 -right-20 -rotate-24" src='/assets/general/PaletteSticker.svg'/>
                <span className={`mx-10 mb-5 mt-10 text-white font-normal ${isTinyMobile ? 'text-md' : isMobile ? 'text-lg' : 'text-xl'} font-mono`}>
                  My design choice was guided from the one concept piece that was well received among others as well as my own design style that I’ve developed. The design strays from the sanitized and minimalist look of other education-related websites in favor of a lively and playful style that’ll set Nexus apart and more memorable. 
                </span>
                <span className={`mx-10 mb-5 mt-10 text-white font-normal ${isTinyMobile ? 'text-md' : isMobile ? 'text-lg' : 'text-xl'} font-mono`}>
                  The biggest challenge I ran into, and frankly, still am, is keeping up with consistency. When I began I was still a novice in using Figma, and as I've grown more experienced, I find that many of my practices were nonoptimal. Going back to implement best practices for things I've already done is a hassle, but for the sake developer handoff, it'll ultimately save more time for everybody.
                </span>
              </div>
            </div>
          </div>  
          {/*============================== BEFORE & AFTER ==============================*/}
          <div className="flex flex-col w-[60%] mt-30 relative items-center">
              <span className={`text-white ${isMobile ? "text-5xl" : "text-7xl"} heading text-center`}>
                DESIGN COMPARISONS
              </span>
              <div className="flex flex-col justify-center items-center relative">
                <ImageCarousel className="mt-5" images={comparisons} />
              </div>
          </div>    
          {/*============================== OUTCOME ==============================*/}
          <div className="flex flex-col justify-center items-center mt-30" >
            <span className={`text-white ${isMobile ? "text-5xl" : "text-7xl"} heading text-center`}>
              OUTCOME
            </span>
            <div className="flex mt-5 min-w-[300px] w-[60%] min-h-[10%] rounded-2xl justify-center bg-linear-to-bl from-darkestBlue to-darkerBlue drop-shadow-xl relative">
              {/* Text Container */}
              <div className="w-full flex flex-col justify-center relative">
                <Sticker className="-bottom-15 -right-13" src='/assets/general/Stonks.svg'/>
                <span className={`mx-10 mb-5 mt-10 text-white font-normal ${isTinyMobile ? 'text-md' : isMobile ? 'text-lg' : 'text-xl'} font-mono`}>
                  Nexus is set to release in the Spring 2026 semester for all UTD students, stay tuned for results! 
                  Thanks to holding weekly meetings as well as having a framework already complete the year before, steady progress was made even during the team’s busy college schedule. 
                  Our team was able to ship a product I’m extremely satisfied with and am excited to develop and design more features for!
                </span>
              </div>
            </div>
          </div>  

          {isMobile ? <> </> : 
          <motion.div className="absolute -right-30 -bottom-40 flex flex-col" initial={{y: 300}} whileInView={{rotate: -7, y:30}} transition={{duration: 1.2, type: 'spring', bounce: 0.5}}>
            <span className="absolute top-23 left-40 text-4xl font-mono font-bold"> Thanks for Reading! </span>
            <Link href="/nexus#header" className="hover:underline absolute top-37 left-40 text-4xl font-mono font-bold"> Click Here to Go Back Up! </Link>
            <img className="" src='/assets/nexus/Paper.svg'/>
          </motion.div>}

          {/*============================== USER FLOW POP UP ==============================*/}
          <AnimatePresence>
              {isOpen && 
            <motion.div className="z-150 fixed flex inset-0 backdrop-brightness-50 items-center justify-center" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.3}}>
                  <img className="rounded-xl object-contain w-[90%]" src={openedImage} ref={imageRef} alt="" />
            </motion.div>
              }
          </AnimatePresence>

        </div>
      </div>
  )
}

export default NexusPage