'use client';

import Link from 'next/link';
import { HiMenu } from 'react-icons/hi';
import { useMobile } from '@/context/mobileContext';
import { useEffect, useRef, useState } from 'react';
import {motion, AnimatePresence } from 'framer-motion'

function NavBar() {
  const {isMobile} = useMobile();
  const {isTinyMobile} = useMobile();
  const [isOpen, setOpen] = useState(false)
  const sideBarRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (sideBarRef.current && !sideBarRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [])

  useEffect(() => {
      if(isOpen) {
          document.body.style.overflow = 'hidden'
      }

      return () => {
          document.body.style.overflow = 'auto';
      }
  }, [isOpen])

  return (
    <>
    {isMobile ? 
    // ------------------------------------------- MOBILE ---------------------------------------------
    <div className="h-[85px] w-full justify-start flex flex-row bg-darkestBlue fixed z-50">    
      <div className="flex w-full justify-between items-center fixed z-100 mt-2">
        <HiMenu className="flex cursor-pointer justify-start ml-4" onClick={() => setOpen(!isOpen)} color='#FFFFFF' size={35}/>
        <Link href="/#header" className="flex justify-center items-center mr-4">
          <img className="scale-80" src="/assets/general/NavBarLogo.svg" alt="Logo" style={{cursor: 'pointer'}} />
        </Link>
        <div>
        </div>
      </div>
        <AnimatePresence>
          {isOpen && 
          <div className={`fixed w-full flex backdrop-brightness-20 z-100`} >
            <motion.div className="flex flex-col w-[60%] bg-darkestBlue" style={{minHeight: '100vh'}}
                        initial={{x: -300}} animate={{x: -15}} exit={{x:-350}} transition={{duration: 0.5, type: 'spring', bounce: 0.3}}>
              <HiMenu className="flex cursor-pointer mt-6 ml-8 absolute" onClick={() => setOpen(!isOpen)} color='#FFFFFF' size={35}/>
              {/* ------------------------------------ TEXT -------------------------------------*/}
              <div className={`flex flex-col gap-20 mt-30 ml-10 text-white font-bold ${isTinyMobile ? 'text-xl' : 'text-3xl'} font-mono`}  ref={sideBarRef}>
                <Link href="/about">
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
              </div>
            </motion.div>
          </div>}
        </AnimatePresence>
    </div> 
    : 
    // ------------------------------------------- DESKTOP ---------------------------------------------
    <div className="h-[85px] w-full justify-between flex flex-row bg-darkestBlue items-center fixed z-50">    
      <div className="flex w-full justify-between items-center mx-10">
        <Link href="/about" className="flex justify-center text-white font-bold text-3xl font-mono">
          <span className="underlineText">
            ABOUT
          </span>
        </Link>
        <Link href="/#projects" className="flex justify-center text-white font-bold text-3xl font-mono">
          <span className="underlineText">
            PROJECTS
          </span>
        </Link>
        <Link href="/#header" className="w-1/5 flex justify-center">
          <img className="scale-80" src="/assets/general/NavBarLogo.svg" alt="Logo" style={{cursor: 'pointer'}} />
        </Link>
        <Link href="/#experience" className="flex justify-center text-white font-bold text-3xl font-mono">
          <span className="underlineText">
            EXPERIENCE
          </span>
        </Link>
        <Link href="/#header" className="flex justify-center text-white font-bold text-3xl font-mono">
          <span className="underlineText">
            CONTACT
          </span>
        </Link> 
      </div>
    </div>
    }
    </>
  )
}

export default NavBar;