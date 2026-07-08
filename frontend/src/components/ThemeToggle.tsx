'use client'

import { useTheme } from '@/context/themeContext';
import React from 'react'
import { motion } from 'motion/react';
import { HiMoon, HiSun } from 'react-icons/hi';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return <motion.div className={`z-150 fixed bottom-6 right-6 flex w-[70px] h-fit bg-surface-primary rounded-full cursor-pointer items-center p-1 border-1 border-surface-contrast`} onClick={toggleTheme}>
            {theme === "dark" ? 
              <motion.div className='flex w-[30px] h-[30px] bg-surface-contrast rounded-full cursor-pointer' 
                          initial={{x:0}}
                          animate={{x: 30}}
                          transition={{duration: 0.2, ease: 'easeOut'}}>
                  <HiMoon className='text-surface-primary w-full h-full'/>
              </motion.div>
            : 
              <motion.div className='flex w-[30px] h-[30px] bg-surface-contrast rounded-full cursor-pointer' 
                          initial={{x:30}}
                          animate={{x: 0}}
                          transition={{duration: 0.2, ease: 'easeOut'}}>
                <HiSun className='text-surface-primary w-full h-full'/>
              </motion.div>}
          </motion.div>;
}

export default ThemeToggle