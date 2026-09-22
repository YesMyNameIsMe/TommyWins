'use client';

import { ReactElement, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import Sticker from './Sticker';
import { useMobile } from '@/context/mobileContext';
import { useTheme } from '@/context/themeContext';

interface ProjectComponentProps {
  link: string;
  title: string;
  img: string;
  description: string;
  backgroundElement?: ReactElement;
  newest?: boolean;
  mockup?: string;
  phone?: boolean;
  background?: string;
  bgImage?: string;
}

function ProjectComponent({ link, title, img, description, newest, mockup, phone, background, bgImage, backgroundElement }: ProjectComponentProps) {
  const [isHovered, setHovered] = useState(false);
  const {isMobile} = useMobile()
  const {isTinyMobile} = useMobile()
  const {theme} = useTheme()

  return (
    <>
    {isMobile ? 
    <div className='flex flex-row relative w-full'>
      <Link 
            href={link} 
            className={`flex flex-col bg-center bg-cover justify-center relative w-full min-h-[200px] ${background} drop-shadow-xl p-6
                      text-4xl font-bold text-white ${isTinyMobile ? 'scale-80' : isMobile ? 'scale-90' : ''}`} 
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{backgroundImage: bgImage}}>

              {title}
              <div className="absolute -bottom-15 -right-15 w-[120px] h-[140px]">
                <Image 
                  className={`transition duration-300 ${isHovered ? 'scale-100 ' : 'scale-90'}`}
                  src={img}
                  alt={`${title} project image`}
                  fill
                  style={{objectFit: 'contain'}}
                />
              </div>
              <h1 className="mt-2 text-lg font-normal text-white">
                {description}
              </h1>
      </Link>

      {newest && <motion.div className="absolute w-[clamp(85px,25%,100px)] right-0 -top-5" animate={{y: [0, 20, 0]}} transition={{ease: 'linear', duration: 4, repeat: Infinity}}>
        <img className="" src={theme=='dark' ? "/assets/landingpage/NewSticker-Dark.svg" : "/assets/landingpage/NewSticker-Light.svg"}/>
      </motion.div>}
    </div>
    :
    <>
    {/* NOT MOBILE */}
    {/*=========================== NEWEST ================================*/}
      <div className={`flex relative ${newest ? 'w-full' : ''}`}>
        <Link href={link} className={`flex flex-row w-full bg-center bg-cover h-[320px] ${background} drop-shadow-2xl justify-between
                         text-[clamp(2.3rem,3.4vw,3rem)] leading-tight font-black text-white ${isHovered ? '' : 'overflow-hidden'} ${isTinyMobile ? 'scale-80' : isMobile ? 'scale-90' : ''}`} 
                         style={{backgroundImage: bgImage}}
                          onMouseEnter={() => setHovered(true)}
                          onMouseLeave={() => setHovered(false)}>
                    
          <div className='absolute w-full h-full flex overflow-hidden'>
              <AnimatePresence>
                {!isMobile && isHovered && 
                backgroundElement}
              </AnimatePresence>
          </div>
          <div className="flex flex-col flex-wrap w-[40%] h-full justify-center mr-4 ml-[clamp(12px,8%,48px)]">
              <span className="flex w-full text-start">
                {title}
              </span>
              <div className="absolute -bottom-10 -left-10 w-[120px] h-[120px] ">
                <Image 
                  className={`transition duration-300 ${isHovered ? 'scale-100 rotate-0' : 'scale-90 rotate-12'}`}
                  src={img}
                  alt={`${title} project image`}
                  fill
                  style={{objectFit: 'contain'}}
                />
              </div>
              <h1 className="mt-2 text-[clamp(0.7rem,1.5vw,1.2rem)] leading-tight font-normal text-white w-full">
                {description}
              </h1>
          </div>
          <img className={`py-4 flex w-[50%] h-full object-contain transition duration-300 ${isHovered ? 'scale-110': ''}`} src={mockup}/>
        </Link>

        {newest && 
          <motion.div className={` absolute ${isMobile ? "w-[15%] -right-10 -top-10": "w-[clamp(125px,12%,150px)] -right-15 -top-10"}`} animate={{y: [0, 20, 0]}} transition={{ease: 'linear', duration: 4, repeat: Infinity}}>
            <img className="" src={theme=='dark' ? "/assets/landingpage/NewSticker-Dark.svg" : "/assets/landingpage/NewSticker-Light.svg"}/>
          </motion.div>}
      </div>
    </>
    }
    </>
  );
}

export default ProjectComponent;