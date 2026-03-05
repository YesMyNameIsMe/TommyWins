'use client';

import Link from 'next/link';
import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

const Footer = () => {

  const [isCopied, setCopied] = useState(false)
  const copiedText = ("nguyen424787@gmail.com")

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
      <div className="flex h-fit bg-darkestBlue overflow-hidden flex-wrap-reverse justify-center ">
        <div className="flex w-full h-[70px]  items-center justify-center">
          <span className='text-white text-center font-semibold'>
            Website Designed and Developed with 💙 by Tommy
          </span>

        <div className="flex absolute right-10 items-center gap-4 text-white">
          <a href="https://cs.utdring.com/#tommywins.com?nav=prev">←</a>
          <a href="https://cs.utdring.com/" target="">
              <img src="https://cs.utdring.com/icon.white.svg" alt="CS Webring" style={{width: '36px', height: 'auto', opacity: 0.8}}/>
          </a>
          <a href="https://cs.utdring.com/#tommywins.com?nav=next">→</a>
        </div>
  
        </div>

        <iframe className="flex min-w-[400px] h-[370px]" src="/assets/general/FishingAnimation.html"/>
        <div className="flex w-fit gap-20 mx-10 mt-20 flex-wrap">
          <span className="flex flex-col font-bold text-2xl text-white gap-4">
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
          <span className="flex flex-col font-bold text-2xl text-white gap-4">
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
          </span>
        <span className="flex flex-col font-bold text-2xl text-white gap-4">
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
      </div>

      <AnimatePresence>
        {
          isCopied && 
          <motion.div className="fixed flex bottom-0 left-1/2 -translate-x-1/2 bg-darkBlue w-[15%] rounded-full p-4 items-center justify-center" 
                      initial={{y: 0, opacity: 0}} animate={{y: -20, opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.3, ease: 'linear'}}>
            <span className='flex text-white text-lg text-center font-semibold'>
              E-Mail Copied!
            </span>  
          </motion.div>
        }
      </AnimatePresence>
    </>
  )
}

export default Footer