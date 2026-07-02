'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import Image from 'next/image';
import Sticker from './Sticker';
import { useMobile } from '@/context/mobileContext';

interface ProjectComponentProps {
  link: string;
  title: string;
  img: string;
  description: string;
  newest?: boolean;
  mockup?: string;
  phone?: boolean;
}

function ProjectComponent({ link, title, img, description, newest, mockup, phone }: ProjectComponentProps) {
  const [isHovered, setHovered] = useState(false);
  const {isMobile} = useMobile()
  const {isTinyMobile} = useMobile()

  return (
    <>
    {isTinyMobile ? 
    <div className='flex relative'>
      <Link 
      href={link} 
      className={`flex flex-col justify-center relative w-[300px] min-h-[200px] bg-linear-to-b from-darkestBlue to-darkBlue drop-shadow-xl rounded-xl p-6
                text-4xl font-bold text-white ${isHovered ? '' : 'overflow-hidden'} ${isTinyMobile ? 'scale-80' : isMobile ? 'scale-90' : ''}`} 
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      {title}
        <div className="absolute -top-10 right-0 w-[140px] h-[140px]">
          <Image 
            className={`transition duration-300 ${isHovered ? 'scale-100 rotate-0' : 'scale-90 rotate-12'}`}
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

      {newest && <motion.div className="absolute w-[40%] -right-10 -top-15" animate={{y: [0, 20, 0]}} transition={{ease: 'linear', duration: 4, repeat: Infinity}}>
        <img className="" src="/assets/landingpage/NewSticker.svg"/>
      </motion.div>}
    </div>
    :
    <>
      {/* NOT MOBILE */}
      {newest ? 
      // =========================== NEWEST ================================
      <div className="flex relative w-full">
        <div className={`flex flex-row justify-center w-full h-[320px] bg-linear-to-b from-darkestBlue to-darkBlue rounded-xl drop-shadow-2xl py-4 pl-4
                         text-4xl font-bold text-white ${isHovered ? '' : 'overflow-hidden'} ${isTinyMobile ? 'scale-80' : isMobile ? 'scale-90' : ''}`} >
          <div className="flex flex-col flex-wrap w-[40%] h-full items-center justify-center mr-4 ml-6">
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
                    className="flex mt-4 w-full h-[15%] hover:scale-105 transition duration-300 bg-blue rounded-xl items-center justify-center text-xl font-medium"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}>
                Read More →
              </Link>
          </div>
          <img className={`flex w-[55%] h-full object-contain transition duration-300 ${isHovered ? 'scale-110': ''}`} src={mockup}/>
        </div>
        <motion.div className={`absolute ${isMobile ? "w-[25%] -right-10 -top-10": "w-[20%] -right-15 -top-20"}`} animate={{y: [0, 20, 0]}} transition={{ease: 'linear', duration: 4, repeat: Infinity}}>
          <img className="" src="/assets/landingpage/NewSticker.svg"/>
        </motion.div>
      </div>
      :        
      // =========================== NOT NEWEST ================================
      <div className="flex relative">
        <div className={`flex flex-row justify-start w-full h-[320px] bg-linear-to-b from-darkestBlue to-darkBlue rounded-xl drop-shadow-2xl p-4
                         text-4xl font-bold text-white ${isHovered ? '' : 'overflow-hidden'} ${isTinyMobile ? 'scale-80' : isMobile ? 'scale-90' : ''}`} >
          <div className="flex flex-col flex-wrap w-[60%] h-full items-center justify-center mr-8 ml-6">
            <span className="flex w-full text-start">
              {title}
            </span>
            {/* Sticker */}
            <div className="absolute -bottom-10 -left-10 w-[120px] h-[120px]">
              <Image 
                className={`transition duration-300 ${isHovered ? 'scale-100 rotate-0' : 'scale-90 rotate-12'}`}
                src={img}
                alt={`${title} project image`}
                fill
                style={{objectFit: 'contain'}}
              />
            </div>
            <h1 className="mt-2 text-lg font-normal text-white">
              {description}
            </h1>
            {/* Button */}
            <Link href={link} 
                  className="flex mt-4 w-full h-[50px] hover:scale-105 transition duration-300 bg-blue rounded-xl items-center justify-center text-xl font-medium"
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