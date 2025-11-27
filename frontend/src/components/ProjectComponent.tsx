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
}

function ProjectComponent({ link, title, img, description, newest }: ProjectComponentProps) {
  const [isHovered, setHovered] = useState(false);
  const {isMobile} = useMobile()
  const {isTinyMobile} = useMobile()

  return (
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
  );
}

export default ProjectComponent;