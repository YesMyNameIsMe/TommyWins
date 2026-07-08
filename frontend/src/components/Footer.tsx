'use client';

import Link from 'next/link';
import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useMobile } from '@/context/mobileContext';
import { useTheme } from '@/context/themeContext';

const Footer = () => {
  const {isMobile} = useMobile()
  const [isCopied, setCopied] = useState(false)
  const copiedText = ("nguyen424787@gmail.com")
  const {theme} = useTheme()

  const handleCopyClick = async () => {
    try { 
      await navigator.clipboard.writeText(copiedText)
      setCopied(true)

      setTimeout(() => setCopied(false), 3000)
    } catch (err) {
      console.error("Error copying text: ", err)
    }
  }

  return (
    <>
      <div className="relative z-50 flex flex-col h-fit bg-surface-primary overflow-hidden flex-wrap-reverse justify-center ">
        <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} w-full h-full justify-center items-center`}>
          <iframe className="flex min-w-[400px] h-[370px]" src="/assets/general/FishingAnimation.html"/>
          <div className='flex flex-col items-center'>
            <div className={`flex ${isMobile ? 'flex-col gap-4' : 'flex-wrap gap-20 '} w-fit mx-10 mt-20`}>
              <span className="flex flex-col font-bold text-2xl text-surface-contrast gap-4">
                <Link href={'/about#header'} >
                  <span className="underlineText">
                    ABOUT
                  </span>
                </Link>
                <Link href="/#projects">
                  <span className="underlineText">
                    PROJECTS
                  </span>
                </Link>
                <Link href="/#experience">
                  <span className="underlineText">
                    EXPERIENCE
                  </span>
                </Link>
                <Link href="/#contact">
                  <span className="underlineText">
                    CONTACT
                  </span>
                </Link>
              </span>
              <span className="flex flex-col font-bold text-2xl text-surface-contrast gap-4">
                <Link href={'/nexus#header'}>
                  <span className="underlineText">
                    NEXUS
                  </span>
                </Link>
                <Link href="/lore">
                  <span className="underlineText">
                    LORE
                  </span>
                </Link>
                <Link href="/orion">
                  <span className="underlineText">
                    ORION REDESIGN
                  </span>
                </Link>
              </span>
            <span className="flex flex-col font-bold text-2xl text-surface-contrast gap-4">
                <a className='' target='_blank'  rel="noopener noreferrer" href="https://github.com/YesMyNameIsMe">
                  <span className="underlineText">
                    GITHUB
                  </span>
                </a>
                <a className='' target='_blank'  rel="noopener noreferrer" href="https://www.linkedin.com/in/hrefmmy-nguyen-ba899423a">
                  <span className="underlineText">
                    LINKEDIN
                  </span>
                </a>
                <div>
                  <span className="underlineText cursor-pointer" onClick={handleCopyClick}>
                    EMAIL 
                  </span>            
                </div>
              </span>
            </div>
            <span className={`font-light my-8 text-surface-contrast tinyText`}>
              Everything Designed and Developed With {'<'}3 By Tommy
            </span>
          </div>
        </div>
          <div className={`flex ${isMobile ? 'mb-6 ml-6' : 'absolute'} left-6 bottom-6 items-center gap-4 text-surface-contrast z-50`}>
            <a href="https://cs.utdring.com/#tommywins.com?nav=prev">←</a>
            <a href="https://cs.utdring.com/" target="">
                <img src={`${theme=='dark' ? "https://cs.utdring.com/icon.white.svg" : "https://cs.utdring.com/icon.black.svg"}`} alt="CS Webring" style={{width: '36px', height: 'auto', opacity: 0.8}}/>
            </a>
            <a href="https://cs.utdring.com/#tommywins.com?nav=next">→</a>
          </div>
      </div>

      <AnimatePresence>
        {
          isCopied && 
          <motion.div className="fixed flex bottom-0 left-1/2 -translate-x-1/2 bg-darkBlue w-[15%] rounded-full p-4 items-center justify-center" 
                      initial={{y: 0, opacity: 0}} animate={{y: -20, opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.3, ease: 'linear'}}>
            <span className='flex text-surface-contrast text-lg text-center font-semibold'>
              E-Mail Copied!
            </span>  
          </motion.div>
        }
      </AnimatePresence>
    </>
  )
}

export default Footer