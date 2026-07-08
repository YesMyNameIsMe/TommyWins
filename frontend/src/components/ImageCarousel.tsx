'use client';

import { useRef, useState, useEffect } from 'react';
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";
import Image from 'next/image';
import { AnimatePresence, motion } from 'motion/react';
import { useMobile } from '@/context/mobileContext';
import { useTheme } from '@/context/themeContext';

interface ImageCarouselProps {
  className?: string;
  images: Array<{
    src: string;
    startAtTop?: boolean;
    desc?: string;
  }>;
}

const ImageCarousel = ({ className, images }: ImageCarouselProps) => {
  const {isTinyMobile} = useMobile()
  const {isMobile} = useMobile()
  const [currentIndex, setIndex] = useState(0);
  const [openedImage, setOpenedImage] = useState("")
  const [isOpen, setOpen] = useState(false)
  const imageRef = useRef<HTMLImageElement | null>(null)
  const {theme} = useTheme()

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if(imageRef.current && !imageRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, []) 

  useEffect(() => {
      if(isOpen) {
        // Desktop/Standard locking
        document.documentElement.style.overflow = 'hidden'
        document.body.style.overflow = 'hidden'
      } 

      return () => {
        document.documentElement.style.overflow = 'auto';
        document.body.style.overflow = 'auto';
      }
    }, [isOpen])

  useEffect(() => {
    setOpenedImage(images[currentIndex].src)
  }, [currentIndex])

  const goToPrev = () => {
    if(currentIndex !== 0) {
      setIndex(prevIndex => prevIndex - 1);
    } else {
      setIndex(images.length - 1);
    }
  };

  const goToNext = () => {
    if(currentIndex === images.length - 1) {
      setIndex(0);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  };

  const goToImage = (imageIndex: number) => {
    setIndex(imageIndex);
  };

    return (
      <>
        {/* ================================== IMAGE MODAL ==================================*/}
        <AnimatePresence>
          {isOpen && 
          <motion.div className="fixed inset-0 flex backdrop-brightness-50 items-center justify-center z-150 select-none" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0 }} transition={{duration: 0.3}}>
            <div className={`max-w-[80%] ${isMobile ? 'h-fit' : 'h-[80%]'} flex items-center justify-center relative`} ref={imageRef}>
                <img
                  className="max-w-full max-h-full object-contain"
                  src={openedImage}
                  alt="expanded"
                />
            <HiArrowCircleLeft className="absolute -bottom-15 right-[55%] cursor-pointer text-white" size={40} onClick={goToPrev}/>
            <HiArrowCircleRight className="absolute -bottom-15 left-[55%] cursor-pointer text-white" size={40} onClick={goToNext} color={''}/>
            </div>
          </motion.div>
        }
        </AnimatePresence>

        <div className={`${isTinyMobile ? 'scale-85' : ''}`}>
          <div className={`${className} flex min-w-[300px] ${isTinyMobile ? 'max-w-[300px]' : ''} justify-center items-center h-[300px] md:h-[650px] select-none relative`}> {/* Carousel Container */}
              
              {/* ================================== IMAGE CONTAINERS ==================================*/}
              <HiArrowCircleLeft className="absolute -left-15 cursor-pointer text-surface-contrast" size={40} onClick={goToPrev}/>
                  {/* Holds Overflowing Images */}
                  <div className="flex h-full w-full overflow-hidden">
                      {/* Contains Images in a Row */}
                      <div className="w-full h-full flex flex-row transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                          {images.map((image, index) => (
                            // Image Container
                            <div className="min-w-full h-full flex flex-col justify-center items-center rounded-xl" key={index}>
                                <img className={`min-w-full h-full object-cover ${images[currentIndex].startAtTop ? 'object-top' : ''} rounded-xl cursor-pointer overflow-hidden`} src={image.src} alt={image.desc || `slide-${index}`} 
                                      onClick={() => {setOpenedImage(images[currentIndex].src); setOpen(true)}}/>
                                <span className="flex text-gray-400 flex-wrap text-center text-sm md:text-lg my-3">{image.desc}</span>
                            </div>
                          ))}
                      </div>
                  </div>
              <HiArrowCircleRight className="absolute -right-15 cursor-pointer text-surface-contrast" size={40} onClick={goToNext}/>
              
              {/* ================================== DOT CONTAINER ==================================*/}
              <div className="absolute w-full justify-center flex -bottom-5 gap-5">
                {/* Dots */}
                {images.map((image, imageIndex) => (
                  <div
                  className={`rounded-full h-5 w-5 cursor-pointer ${imageIndex === currentIndex ? 'bg-surface-contrast' : 'bg-gray-400'}`}
                  key={imageIndex}
                  onClick={() => {goToImage(imageIndex)}}
                  />
                ))}
              </div>
          </div>
        </div>
      </>
    )
}

export default ImageCarousel