'use client';

import Link from 'next/link';
import { HiMenu } from 'react-icons/hi';
import { useMobile } from '@/context/mobileContext';
import { useState } from 'react';
import {motion, AnimatePresence } from 'framer-motion'

function NavBar() {
  const {isMobile} = useMobile();
  const [isOpen, setOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
    {isMobile ? 
    // ------------------------------------------- MOBILE ---------------------------------------------
    <div className="h-[85px] w-full justify-start flex flex-row bg-darkestBlue fixed z-50">    
      <div className="flex justify-start items-start fixed z-100">
        <HiMenu className="flex cursor-pointer justify-start mt-6 ml-4" onClick={() => setOpen(!isOpen)} color='#FFFFFF' size={35}/>
        <AnimatePresence>
        {isOpen && 
        <div className={`fixed w-full flex backdrop-brightness-20 z-100`}>
          <motion.div className="flex w-1/2 bg-darkestBlue" style={{minHeight: '100vh'}}
                      initial={{x: -300}} animate={{x: -15}} exit={{x:-350}} transition={{duration: 0.5, type: 'spring', bounce: 0.3}}>
            <HiMenu className="flex cursor-pointer mt-6 ml-8" onClick={() => setOpen(!isOpen)} color='#FFFFFF' size={35}/>
            {/* ------------------------------------ TEXT -------------------------------------*/}
            <div className="flex flex-col gap-20 items-start justify-start mt-30">
              <Link href="/about" className="flex text-white font-bold text-3xl font-mono">
                <span className="underlineText">
                  ABOUT
                </span>
              </Link>
              <Link href="/" onClick={() => scrollToSection('projects')} className="flex text-white font-bold text-3xl font-mono">
                <span className="underlineText">
                  PROJECTS
                </span>
              </Link>
              <Link href="/" onClick={() => scrollToSection('experience')} className="flex text-white font-bold text-3xl font-mono">
                <span className="underlineText">
                  EXPERIENCE
                </span>
              </Link>
              <Link href="/" onClick={() => scrollToSection('contact')} className="flex text-white font-bold text-3xl font-mono">
                <span className="underlineText">
                  CONTACT
                </span>
              </Link> 
            </div>
          </motion.div>
        </div>}
        </AnimatePresence>
      </div>
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
        <Link href="/" onClick={() => scrollToSection('projects')} className="flex justify-center text-white font-bold text-3xl font-mono">
          <span className="underlineText">
            PROJECTS
          </span>
        </Link>
        <Link href="/" onClick={() => scrollToSection('header')} className="w-1/5 flex justify-center">
          <img className="scale-80" src="/assets/NavBarLogo.svg" alt="Logo" style={{cursor: 'pointer'}} />
        </Link>
        <Link href="/" onClick={() => scrollToSection('experience')} className="flex justify-center text-white font-bold text-3xl font-mono">
          <span className="underlineText">
            EXPERIENCE
          </span>
        </Link>
        <Link href="/" onClick={() => scrollToSection('contact')} className="flex justify-center text-white font-bold text-3xl font-mono">
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