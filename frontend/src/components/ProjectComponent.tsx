'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ProjectComponentProps {
  link: string;
  title: string;
  img: string;
  description: string;
}

function ProjectComponent({ link, title, img, description }: ProjectComponentProps) {
  const [isHovered, setHovered] = useState(false);

  return (
    <Link 
      href={link} 
      className={`flex flex-col relative w-[300px] min-h-[200px] bg-linear-to-b from-darkestBlue to-darkBlue drop-shadow-xl rounded-xl p-6
                text-5xl font-mono font-black text-white ${isHovered ? '' : 'overflow-hidden'}`} 
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
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
      <h1 className="mt-8 text-lg font-normal text-white">
        {description}
      </h1>
    </Link>
  );
}

export default ProjectComponent;