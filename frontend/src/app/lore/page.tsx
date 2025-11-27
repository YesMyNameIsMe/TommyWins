'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SkillList from '@/components/SkillList';
import LinkBubble from '@/components/LinkBubble';
import { useMobile } from '@/context/mobileContext';
import Sticker from '@/components/Sticker';
import ImageCarousel from '@/components/ImageCarousel';

const LorePage = () => {
  const {isTinyMobile} = useMobile()
  const {isMobile} = useMobile()
  const [openedImage, setOpenedImage] = useState("")
  const [isOpen, setOpen] = useState(false)
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
      if(isOpen) {
        // Desktop/Standard locking
        document.documentElement.style.overflow = 'hidden'
        document.body.style.overflow = 'hidden'
      } 

      return () => {
        document.documentElement.style.overflow = 'auto';
        document.body.style.overflow = 'auto';
      }
    }, [isOpen])


  const images = [
    {src: '/assets/lore/LoreImage1.png'},
    {src: '/assets/lore/LoreImage2.png'},
    {src: '/assets/lore/LoreImage3.png'},
    {src: '/assets/lore/LoreImage4.png'},
  ]

  const conceptPages = [
    {src: '/assets/lore/Sketches.png'},
    {src: '/assets/lore/UserFlowLore.jpg'}
  ]

  const wdid = [{desc: 'Collaborated with 2 other developers to make an app in 10 weeks', src: '/assets/lore/TrioHeads.svg'}, 
                {desc: 'Integration of Designs into Code via React Native', src: '/assets/general/ReactLogo.png'}, 
                {desc: 'Created Designs and Graphics for all Pages via Figma', src: '/assets/general/FigmaLogo.png'}]

  const wisl = [{desc: 'AI Generated Stories Based on Player-Written Prompts'}, 
                {desc: 'Player Based Voting System for Specific Plot Points'}, 
                {desc: 'Automatic Story Saving Viewable at Any Time'}]


  const skills = [{name: 'Figma'}, {name: 'UI/UX Design'}, {name: 'React Native'}, {name: 'TypeScript'}, 
                  {name: 'TailwindCSS'}, {name: 'Programming'}, {name: 'Animation'}]

  return (
      <div className={`flex justify-center min-h-screen bg-darkBlue bg-center bg-cover bg-no-repeat`} style={{backgroundImage: isMobile ? "url('/assets/nexus/MobileNexusBG.svg')" : "url('/assets/lore/LoreBG.svg')", overflow: 'auto'}}> 
        {/* ================================== IMAGE MODAL ==================================*/}
        <AnimatePresence>
          {isOpen && 
          <motion.div className="fixed inset-0 flex backdrop-brightness-50 items-center justify-center z-150" 
                      initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0 }} transition={{duration: 0.3}}>
            <div className={`w-fit max-w-[60%] ${isMobile ? 'h-fit' : 'h-[80%]'} flex items-center justify-center relative`} ref={imageRef}>
                <img
                  className="max-w-full max-h-full object-contain rounded-xl"
                  src={openedImage}
                  alt="expanded"
                />
            </div>
          </motion.div>
        }
        </AnimatePresence>
        
        <div id="header" className="flex flex-col h-full w-full items-center relative overflow-hidden">
          {/*---------------------------------- TITLE ---------------------------------*/}
          <motion.div initial={{y: 20, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.5, type: 'tween', delay: 0.2}}>
            <img className="items-center justify-center h-auto w-[500px] flex mt-50" src="/assets/lore/LoreLogo.svg" />
          </motion.div>
          <motion.div initial={{y: 20, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.5, type: 'tween', delay: 0.4}}>
            <h1 className="flex items-center justify-center text-3xl text-white mt-5 font-bold" >
                FRONT-END DEVELOPER & DESIGNER
            </h1>
          </motion.div>
          <motion.div className="flex mt-5 gap-4" initial={{y: 20, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.5, type: 'tween', delay: 0.6}}>
            <LinkBubble name="Figma" image="/assets/general/FigmaLogo.png" link="https://www.figma.com/design/6PwvZhxVdKTtVnILXk28bF/ACM-Lore?node-id=0-1&t=oiWfVVZgvw2kZDJC-1"/>
            <LinkBubble name="Live Presentation" image="/assets/general/VideoIcon.png" link="https://www.youtube.com/live/toUGY4KB2c8?si=yWPqK2mHa5dPgeGk&t=3256"/>
            <LinkBubble name="Demo Video" image="/assets/general/VideoIcon.png" link="https://drive.google.com/file/d/13smlSXXKzOVhZBdTQ7A8B_GJTHSYrkFX/view?usp=sharing"/>
          </motion.div>
          {/*============================== IMAGE CAROUSEL ==============================*/}
          <div className="items-center flex flex-col w-[60%] mt-50 relative">
              <span className={`text-white ${isMobile ? "text-5xl" : "text-7xl"} heading text-center`}>
                SAMPLE SCREENS
              </span>
              <h1 className='flex text-white mt-3 justify-center text-center'>
                (All Designed By Yours Truly!)
              </h1>
              <div className="w-[25%] min-w-[75px] justify-center items-center flex relative gap-4 mt-4">
                {images.map((item, index) => (
                  <img key={index} className='border-4 border-darkBlue rounded-xl cursor-pointer' src={item.src} onClick={() => {setOpen(true); setOpenedImage(item.src)}}/>
                ))}
              </div>
          </div>
          {/*============================== WHAT DID I DO ==============================*/}
          <div className="flex flex-col items-center justify-center mt-30">
            <span className={`text-white ${isMobile ? "text-5xl" : "text-7xl"} heading text-center`}>
              WHAT DID I DO?
            </span>
            <div className="flex flex-row w-full gap-10 items-center justify-center flex-wrap mt-4">
              {wdid.map((item, index) => (
                <div key={index} className={`flex flex-col min-w-[200px] w-[18%] h-[200px] bg-darkerBlue items-center justify-center text-center rounded-xl text-white drop-shadow-2xl ${isTinyMobile ? 'text-md' : isMobile ? 'text-lg': 'text-xl'}`}>
                  <div className="flex w-full h-[100px] bg-darkBlue rounded-t-xl items-center justify-center text-lg">
                    <span className='flex m-2'>
                      {item.desc}
                    </span>
                  </div>
                  <div className="flex items-center justify-center h-[100px] w-full p-3">
                    <img className="max-w-full max-h-full hover:scale-120 hover:rotate-10 transition duration-200" src={item.src} alt={item.desc} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/*============================== WHAT IS LORE? ==============================*/}
          <div className="flex flex-col justify-center items-center mt-30 relative ">
            <span className={`text-white ${isMobile ? "text-5xl" : "text-7xl"} heading text-center`}>
              WHAT IS LORE?
            </span>
            <div className="flex flex-row w-[60%] gap-10 items-center justify-center mt-5 flex-wrap">
              {wisl.map((item, index) => (
                <div key={index} className={`flex min-w-[200px] w-[18%] h-[120px] bg-darkBlue items-center justify-center text-center rounded-xl text-white ${isTinyMobile ? 'text-md' : 'text-lg'} p-2`}>
                  {item.desc}
                </div>
              ))}
            </div>
            <div className="flex mt-5 min-w-[300px] w-[60%] min-h-[10%] rounded-2xl justify-center bg-linear-to-bl from-darkestBlue to-darkerBlue drop-shadow-xl relative">
              {/* Text Container */}
              <div className="w-full flex flex-col justify-center relative">
                <Sticker className={`${isTinyMobile ? "-bottom-20 -right-20 rotate-12" : "-bottom-20 -left-30"}`} src='/assets/lore/DoorSticker.svg'/>
                <span className={`m-10 text-white font-normal ${isTinyMobile ? 'text-md' : isMobile ? 'text-lg' : 'text-xl'}`}>
                  Lore is an interactive and collaborative storytelling game for anyone who enjoys creating imaginative stories with friends. Players can create groups, start stories, and vote on plot points to compete against players. Each winning plot point advances the game with an AI-generated story based on the plot point.                </span>
              </div>
            </div>
          </div>
          {/*============================== PROBLEM STATEMENT ==============================*/}
          <div className="flex flex-col justify-center items-center mt-30 relative ">
            <span className={`text-white ${isMobile ? "text-5xl" : "text-7xl"} heading text-center`}>
              PROBLEM STATEMENT
            </span>
            <div className="relative min-w-[300px] w-[60%] min-h-[10%]">
              {<Sticker className={`-bottom-30 ${isTinyMobile ? "-left-37" : "-left-40"} scale-70 z-10`} src='/assets/lore/guestScreenAnim.gif'/>}
              <div className="z-2 flex mt-5 rounded-2xl justify-center bg-linear-to-bl from-darkestBlue to-darkerBlue drop-shadow-xl relative">
                {/* Text Container */}
                <div className="w-full flex flex-col justify-center relative">
                  <span className={`m-10 text-white font-normal ${isTinyMobile ? 'text-md' : isMobile ? 'text-lg' : 'text-xl'}`}>
                      Many mobile games in the modern era have cluttered and clunky UI that can cause frustration for the user. For this reason, the number of social/party mobile apps are incredibly sparse, leading to little variety in something to play for users and their friends at a moment’s notice.                  </span>
                </div>
              </div>
            </div>
          </div>
          {/*============================== WHAT DID I USE? ==============================*/}
          <div className="relative w-full flex flex-col justify-center items-center mt-30" >
            <span className={`text-white ${isMobile ? "text-5xl" : "text-7xl"} heading text-center`}>
              WHAT DID I USE?
            </span>
            <div className="min-w-[300px] w-[60%] justify-center items-center flex relative">
              <SkillList skills={skills} />
              <Sticker className=' scale-80 -bottom-25 -left-25' src='/assets/general/ToolboxSticker.svg'/>
            </div>
          </div>
          {/*============================== DISCOVERY ==============================*/}
          <div className="relative flex flex-col justify-center items-center mt-30">
            <span className={`text-white ${isMobile ? "text-5xl" : "text-7xl"} heading text-center`}>
              DISCOVERY
            </span>
            <div className="relative min-w-[300px] w-[60%] min-h-[10%]">
              {<Sticker className="-bottom-32 -right-30 z-10 scale-60" src='/assets/lore/LoreReadAnim.gif'/>}
              <div className="z-2 flex mt-5 rounded-2xl justify-center bg-linear-to-bl from-darkestBlue to-darkerBlue drop-shadow-xl relative">
                {/* Text Container */}
                <div className="w-full flex flex-col justify-center relative">
                  <span className={`m-10 text-white font-normal ${isTinyMobile ? 'text-md' : isMobile ? 'text-lg' : 'text-xl'}`}>
                    Since Lore is a party game, I knew my designs would have to follow a principle of something that has lots of personality and is incredibly lively. 
                    However, this was my first “real” project, so there was lots for me to learn as a designer and developer. I drew lots of inspiration from other similar games such as Jackbox Party Packs and Death By AI, as I was already fond of their UI and design. 
                    I followed their principle of taking simple concepts and fleshing it out into robust games that have lots of replay value. 
                  </span>
                </div>
              </div>
            </div>
          </div>     
          {/*============================== CONCEPTS ==============================*/}
          <div className="flex flex-col w-[60%] mt-30 relative items-center justify-center">
              <span className={`text-white ${isMobile ? "text-5xl" : "text-7xl"} heading text-center`}>
                EARLY CONCEPTS
              </span>
              <ImageCarousel className="mt-5" images={conceptPages} />
              {!isMobile && <Sticker className="-left-30 -bottom-10 w-[270px] h-auto" src='/assets/lore/LoreWaitAnim.gif' />}
          </div>
          {/*============================== DESIGN ==============================*/}
          <div className="flex flex-col justify-center items-center mt-30" >
            <span className={`text-white ${isMobile ? "text-5xl" : "text-7xl"} heading text-center`}>
              DESIGN
            </span>
            <div className="flex mt-5 min-w-[300px] w-[60%] rounded-2xl justify-center bg-linear-to-bl from-darkestBlue to-darkerBlue drop-shadow-xl relative">
              {/* Text Container */}
              <Sticker className={`${isMobile ? "-top-25 -left-20" : "-bottom-30 -left-45 -scale-x-100"}`} src={isMobile ? '/assets/general/PaletteSticker.svg' : '/assets/lore/DrawingSticker.svg'}/>
              <div className="w-full h-full flex flex-col justify-center relative">
                <span className={`mx-10 mb-5 mt-10 text-white font-normal ${isTinyMobile ? 'text-md' : isMobile ? 'text-lg' : 'text-xl'}`}>
                  Thanks to weekly meetings held over the course of the project, a strong identity was carved out for Lore. I followed the theme of AI and centered a lot of my designs around robots and a computer-y theme. I also used these psychedelic-like backgrounds that evoked the feeling of being in a fever-dream, since that creates a strong correlation with dreams and human creativity, as well as the weirdness of what AI can generate. I also implemented many music and sounds that contribute to that uncanny/strange feeling.
                </span>
                <span className={`mx-10 mb-5  text-white font-normal ${isTinyMobile ? 'text-md' : isMobile ? 'text-lg' : 'text-xl'}`}>
                  Because Lore is a game, I knew that there needed to be some animations, as without it, everything would seem too static and fall flat.
                </span>
              </div>
            </div>
          </div>  
          {/*====================================== DEMO ======================================*/}
          <div className="flex flex-col min-h-[700px]  relative w-full items-center justify-center mt-5">    
              <span className={`text-white ${isMobile ? "text-5xl" : "text-7xl"} heading text-center`}>
                  LORE DEMO
              </span>
              <div className="mt-4 flex w-full h-[60%] items-center justify-center relative">
                  <iframe className="z-2 w-[200px] h-[425px] rounded-xl border-darkestBlue border-4" src="https://youtube.com/embed/ULkRTxL-LoY?feature=share" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                  {<img className={`bottom-0 w-[80%] absolute`} src="/assets/lore/DemoVideoSticker.svg"/>}          
              </div>
          </div>  
          {/*============================== OUTCOME ==============================*/}
          <div className="flex flex-col justify-center items-center " >
            <span className={`text-white ${isMobile ? "text-5xl" : "text-7xl"} heading text-center`}>
              OUTCOME
            </span>
            <div className="flex mt-5 min-w-[300px] w-[60%] min-h-[10%] rounded-2xl justify-center bg-linear-to-bl from-darkestBlue to-darkerBlue drop-shadow-xl relative">
              {/* Text Container */}
              <div className="w-full flex flex-col justify-center relative">
                <Sticker className="-bottom-15 -right-13" src='/assets/general/Stonks.svg'/>
                <span className={`mx-10 mb-5 mt-10 text-white font-normal ${isTinyMobile ? 'text-md' : isMobile ? 'text-lg' : 'text-xl'}`}>
                  After 10 weeks of development, Lore was ready for presentation! Overall, out of 11 other projects, Lore came out in 2nd place for overall design, being only beaten by mere decimal points in score by the end! 
                </span>
                <span className={`mx-10 mb-10 text-white font-normal ${isTinyMobile ? 'text-md' : isMobile ? 'text-lg' : 'text-xl'}`}>
                  While Lore never released as a fully fledged app for the public, lots of sentiment and praise was given to the unique design over the course of development, which I would consider a job well done.
                </span>
              </div>
            </div>
          </div>  
          {/*============================== REFLECTION ==============================*/}
          <div className="flex flex-col justify-center items-center mt-30 pb-40" >
            <span className={`text-white ${isMobile ? "text-5xl" : "text-7xl"} heading text-center`}>
              REFLECTION
            </span>
            <div className="flex mt-5 min-w-[300px] w-[60%] min-h-[10%] rounded-2xl justify-center bg-linear-to-bl from-darkestBlue to-darkerBlue drop-shadow-xl relative">
              {/* Text Container */}
              <div className="w-full flex flex-col justify-center relative">
                <span className={`mx-10 mb-5 mt-10 text-white font-normal ${isTinyMobile ? 'text-md' : isMobile ? 'text-lg' : 'text-xl'}`}>
                  The most notable challenge I faced during development was grappling with new software tools such as Figma and React Native. As previously mentioned, this was my first ever “real” project, so I had next-to zero experience. However, thanks to a supportive team and a burning passion, I developed a firm understanding of the tools that built an important framework for my future work.                </span>
                <span className={`mx-10 mb-10 text-white font-normal ${isTinyMobile ? 'text-md' : isMobile ? 'text-lg' : 'text-xl'}`}>
                  I’m forever grateful for being apart of Lore’s team, as it kick started my passion for design and made me realize that that’s what I wanted to pursue as my career.                 </span>
              </div>
              <Sticker className='-bottom-30 -right-20 scale-90' src="/assets/general/Mirror.svg"/>
            </div>
          </div>  

          <img className="bottom-0 min-w-screen" src='/assets/lore/LoreBottomBG.svg'/>

          {!isMobile && <motion.div className="absolute -right-10 -bottom-45 flex flex-col w-[70%] max-w-[680px]" initial={{y: 300}} whileInView={{rotate: -7, y:30}} transition={{duration: 1.2, type: 'spring', bounce: 0.5}}>
            <span className="absolute top-44 left-40 text-2xl font-bold z-1 text-white -rotate-1"> Thanks for Reading! </span>
            <Link href="/lore#header" className="hover:underline z-1 absolute top-54 left-40 text-2xl font-bold text-white -rotate-1"> Click Here to Go Back Up! </Link>            
            <img className="scale-90" src='/assets/lore/RoboHand.svg'/>
          </motion.div>}
        </div>
      </div>
  )
}

export default LorePage;