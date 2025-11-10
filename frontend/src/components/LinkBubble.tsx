'use client';

import Image from 'next/image';

interface LinkBubbleProps {
  link?: string;
  name?: string;
  image: string;
  className?: string;
}

const LinkBubble = ({ link, name, image, className }: LinkBubbleProps) => {
  return (
    <a 
      className={`${className} flex w-fit h-[50px] bg-darkBlue p-4 gap-2 rounded-full items-center justify-center transition duration-200 hover:scale-110`} 
      target='_blank' 
      rel="noopener noreferrer" 
      href={link}
    >
      <div className="flex relative w-8 h-8">
        <Image 
          src={image} 
          alt={name || 'Link bubble image'} 
          fill
          style={{objectFit: 'contain'}}
        />
      </div>
      {name && (
        <h1 className="flex items-center justify-center text-xl text-white font-mono font-bold">
          {name}
        </h1>
      )}
    </a>
  );
};

export default LinkBubble;