'use client';

import Image from 'next/image';
import { useMobile } from '@/context/mobileContext';
import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

interface LinkBubbleProps {
  link?: string;
  name: string;
  image: string;
  className?: string;
  copyable?: boolean;
}

const LinkBubble = ({ link, name, image, className, copyable }: LinkBubbleProps) => {

  const {isTinyMobile} = useMobile()
  const [isCopied, setIsCopied] = useState(false);
  const textToCopy = name

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy)
      setIsCopied(true)

      setTimeout(() => setIsCopied(false), 3000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  return (
    <>
      <a 
        className={`${className} cursor-pointer flex w-fit h-[50px] bg-darkBlue p-4 gap-2 rounded-full items-center justify-center transition duration-200 hover:scale-110`} 
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
          <h1 className="flex items-center justify-center text-lg text-white font-semibold" onClick={handleCopyClick}>
            {name}
          </h1>
        )}
      </a>

      <AnimatePresence>
        {
          isCopied && copyable && 
          <motion.div className="fixed flex bottom-0 bg-darkBlue w-[15%] rounded-full p-4 items-center justify-center" 
                      initial={{y: 0, opacity: 0}} animate={{y: -20, opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.3, ease: 'linear'}}>
            <span className='flex text-white text-lg text-center font-semibold'>
              Text Copied!
            </span>  
          </motion.div>
        }
      </AnimatePresence>
    </>
  );
};

export default LinkBubble;