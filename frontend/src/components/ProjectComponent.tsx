'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import Image from 'next/image';
import Sticker from './Sticker';
import { useMobile } from '@/context/mobileContext';
import { useTheme } from '@/context/themeContext';

interface ProjectComponentProps {
  link: string;
  title: string;
  img: string;
  description: string;
  newest?: boolean;
  mockup?: string;
  phone?: boolean;
  background?: string;
  bgImage?: string;
}

function ProjectComponent({ link, title, img, description, newest, mockup, phone, background, bgImage }: ProjectComponentProps) {
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

      {newest && <motion.div className="absolute w-[35%] -right-10 -top-15" animate={{y: [0, 20, 0]}} transition={{ease: 'linear', duration: 4, repeat: Infinity}}>
        <img className="" src={theme=='dark' ? "/assets/landingpage/NewSticker-Dark.svg" : "/assets/landingpage/NewSticker-Light.svg"}/>
      </motion.div>}
    </div>
    :
    <>
    {/* NOT MOBILE */}
    {newest ? 
      // =========================== NEWEST ================================
      <div className="flex relative w-full">
        <div className={`flex flex-row w-full bg-center bg-cover h-[320px] ${background} drop-shadow-2xl py-4 justify-between
                         text-5xl font-black text-white ${isHovered ? '' : 'overflow-hidden'} ${isTinyMobile ? 'scale-80' : isMobile ? 'scale-90' : ''}`} 
                         style={{backgroundImage: bgImage}}>
          <div className="flex flex-col flex-wrap w-[40%] h-full justify-center mr-4 ml-12">
              <span className="flex w-full text-start">
                {title}
              </span>
              <div className="absolute -bottom-10 -left-10 w-[120px] h-[120px]">
                <Image 
                  className={`transition duration-300 ${isHovered ? 'scale-100 rotate-0' : 'scale-90 rotate-12'}`}
                  src={img}
                  alt={`${title} project image`}
                  fill
                  style={{objectFit: 'contain'}}
                />
              </div>
              <h1 className="mt-2 text-lg font-normal text-white w-full">
                {description}
              </h1>
              {/* Button */}
              <Link href={link} 
                    className="flex mt-4 w-fit px-20 h-[15%] hover:scale-105 transition duration-300 bg-white text-darkestBlue items-center justify-center text-xl font-medium"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}>
                Read More →
              </Link>
          </div>
          <img className={`flex w-fit h-full object-contain transition duration-300 ${isHovered ? 'scale-110': ''}`} src={mockup}/>
        </div>
        <motion.div className={`absolute ${isMobile ? "w-[25%] -right-10 -top-10": "w-[15%] -right-15 -top-25"}`} animate={{y: [0, 20, 0]}} transition={{ease: 'linear', duration: 4, repeat: Infinity}}>
          <img className="" src={theme=='dark' ? "/assets/landingpage/NewSticker-Dark.svg" : "/assets/landingpage/NewSticker-Light.svg"}/>
        </motion.div>
      </div>
      :        
      // =========================== NOT NEWEST ================================
      <div className="flex relative">
        <div className={`flex flex-row bg-center bg-cover w-full h-[320px] ${background} drop-shadow-2xl py-4 justify-between
                         text-5xl font-black text-white ${isHovered ? '' : 'overflow-hidden'} ${isTinyMobile ? 'scale-80' : isMobile ? 'scale-90' : ''}`} 
                         style={{backgroundImage: bgImage}}>
          <div className="flex flex-col flex-wrap w-[40%] h-full justify-center mr-4 ml-12">
              <span className="flex w-full text-start">
                {title}
              </span>
              <div className="absolute -bottom-10 -left-10 w-[120px] h-[120px]">
                <Image 
                  className={`transition duration-300 ${isHovered ? 'scale-100 rotate-0' : 'scale-90 rotate-12'}`}
                  src={img}
                  alt={`${title} project image`}
                  fill
                  style={{objectFit: 'contain'}}
                />
              </div>
              <h1 className="mt-2 text-lg font-normal text-white w-full">
                {description}
              </h1>
              {/* Button */}
              <Link href={link} 
                    className="flex mt-4 w-full max-w-[200px] h-[15%] hover:scale-105 transition duration-300 bg-white text-darkestBlue items-center justify-center text-xl font-medium"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}>
                Read More →
              </Link>
          </div>
          <img className={`flex ${phone ? 'w-fit' : 'w-[55%]'} h-full object-contain transition duration-300 ${isHovered ? 'scale-110': ''}`} src={mockup}/>
        </div>
      </div>}
    </>
    }
    </>
  );
}

export default ProjectComponent;