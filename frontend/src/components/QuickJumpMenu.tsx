import Link from 'next/link';
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import { HiArrowCircleLeft, HiArrowCircleRight, HiChevronLeft, HiChevronRight } from 'react-icons/hi';

interface QuickJumpMenuProps {
  className?: string,
  bg?: string,
  quickJumps: Array<{
      title: string,
      anchor: string
  }>;
}

const QuickJumpMenu = ({className, quickJumps, bg}: QuickJumpMenuProps) => {

    const [atBottom, setAtBottom] = useState(false)
    const [isOpen, setOpen] = useState(false)

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
        const bottom = scrollHeight - scrollTop <= clientHeight + 1;
        setAtBottom(bottom);
    }; 

    return (
        <motion.div className='flex flex-row items-center fixed left-0 top-1/2 -translate-y-1/2 z-100'>
            <div className={`z-100 flex flex-col font-normal w-fit h-[200px] rounded-xl drop-shadow-xl ml-4 overflow-scroll hideScroll text-gray-400`} onScroll={handleScroll}>        
                <AnimatePresence>
                    {isOpen &&
                        <motion.div className={`flex flex-col py-4 pl-4 pr-6 text-gray-300 ${bg} ${className}  `}  
                                    initial={{x:-225}} animate={{x:0}} exit={{x:-225}} transition={{duration:0.5, bounce: 0.25, type: 'spring'}}>
                            {quickJumps.map((quickJump, index) => (
                                <Link href={quickJump.anchor} className={`hover:text-white hover:scale-105 hover:translate-x-3 transition duration-300 `}>
                                {quickJump.title}
                            </Link> 
                            ))}
                        </motion.div>
                    }
                </AnimatePresence>
            </div>
            <motion.div className={`absolute z-101 cursor-pointer rounded-r-xl h-[50px] items-center justify-center flex text-white ${bg}`}
                        animate={{x: isOpen ? 220 : 0}} transition={{duration:0.5, bounce: 0.25, type: 'spring'}}>
                {isOpen ? <HiChevronLeft size={30} onClick={() => setOpen(false)}/> : <HiChevronRight size={30} onClick={() => setOpen(true)}/>}
            </motion.div>
        </motion.div>
    )
}

export default QuickJumpMenu