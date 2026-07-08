import { useMobile } from '@/context/mobileContext';
import { useTheme } from '@/context/themeContext';
import { AnimatePresence, motion } from 'motion/react';
import React, { useEffect, useRef, useState } from 'react'

const ClickableImage = ({ image, caption }: { caption?: string, image: string }) => {
    const {isMobile} = useMobile();
    const {isTinyMobile} = useMobile();
    const [isOpen, setOpen] = useState(false);
    const [openedImage, setOpenedImage] = useState("")
    const imageRef = useRef<HTMLImageElement | null>(null)
    const {theme} = useTheme()

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if(imageRef.current && !imageRef.current.contains(event.target)) {
                setOpen(false)
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

  return (
    <div className={`flex flex-col items-center justify-center w-full h-full`}>
        <img className='rounded-xl cursor-pointer border-surface-contrast border-1' src={image} onClick={() => {setOpenedImage(image); setOpen(true)}}/>
        {caption && <span className="flex text-gray-400 font-normal flex-wrap text-center tinyText mt-3">{caption}</span>}

        <AnimatePresence>
              {isOpen && 
          <motion.div className="fixed inset-0 flex backdrop-brightness-50 items-center justify-center z-150 select-none" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0 }} transition={{duration: 0.3}}>
                    <img className={`z-150 rounded-xl object-contain w-fit ${isMobile ? 'h-fit' : 'h-[90%]'} bg-darkestBlue`} src={openedImage} ref={imageRef} alt="" />
                </motion.div>
              }
        </AnimatePresence>
    </div>
  )
}

export default ClickableImage