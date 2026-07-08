'use client';

import { motion } from 'framer-motion';
import ImageCarousel from '@/components/ImageCarousel';
import SkillList from '@/components/SkillList';
import Image from 'next/image';
import Sticker from '@/components/Sticker';
import { useMobile } from '@/context/mobileContext';
import { useTheme } from '@/context/themeContext';
import GrassField from '@/components/GrassField';

const AboutPage = () => {

    const {isMobile} = useMobile()
    const {isTinyMobile} = useMobile()
    const {theme} = useTheme()

    const images = [{src: '/assets/about/Vista1.jpg'}, 
                    {src: '/assets/about/Vista2.jpg'},
                    {src: '/assets/about/Vista3.jpg'},
                    {src: '/assets/about/Vista4.jpg'},
                    {src: '/assets/about/Vista5.jpg', desc: 'Đà Lạt, Vietnam'},
                    {src: '/assets/about/Vista6.jpg', desc: 'Đà Lạt, Vietnam, Above the Mountains'},
                    {src: '/assets/about/Vista7.jpg', desc: 'Đà Lạt, Vietnam, Porch of a BBQ restaurant'},
                    {src: '/assets/about/Vista8.jpg', desc: 'Ho Chi Minh City, Vietnam'},]

    const skills = [{name: 'Figma'}, {name: 'UI/UX Design'}, {name: 'React'}, {name: 'TypeScript'}, 
                    {name: 'TailwindCSS'}, {name: 'Programming'}, {name: 'SVG Animation'}, {name: 'Prototyping'}]


    return (
    <div id="header" className={`flex flex-col h-full overflow-hidden justify-center items-center bg-center bg-cover bg-no-repeat ${theme=='dark' ? 'bg-surface-primary' : 'bg-linear-to-b from-[#ffffff] to-surface-primary'} overflow-hidden"`}>        
        <div className='fixed inset-0 z-0 pointer-events-none'>
            <img src={`${theme=='dark' ? "/assets/orion/Stars.svg" : null}`} className='h-full w-full object-cover' alt="" />
        </div>

            {/* ======================================== FISH =====================================*/}
            <div className={`relative w-screen max-h-screen bg-linear-to-b ${theme=='dark' ? "from-[#0E0D1C] to-[#18288E]" : "from-[#40C7FE] to-[#CBE0FF]"}`}>
                <GrassField></GrassField>

            </div>
            
        <div id="header" className="flex flex-col h-full items-center justify-center relative mt-20 w-[85%] gap-20">
            
            <div className='flex flex-col'>
                {/* Title */}
                <span className={`text-surface-contrast titleText justify-center items-center racingSans w-full flex `}>
                    <p className='relative flex h-full items-center'>
                    ABOUT
                    </p>
                </span>
                {/* Paragraph */}
                <div className="flex flex-col relative w-full items-center justify-center mt-8 text-surface-contrast font-medium">
                    <span className={`flex w-full items-start font-bold mb-2 ${isTinyMobile ? 'text-xl' : isMobile ? 'text-2xl' : 'text-3xl'} `}> 
                        Personal Interests
                    </span> 
                    <span className={` ${isTinyMobile ? 'text-md' : isMobile ? 'text-lg' : 'text-xl'} `}>
                        Outside of work and school, I like to spend my time with a lot of different hobbies. One of the main ones is playing video games with friends. 
                        Another is drawing, and it was actually my first ever passion I tried to pursue before I made the jump to computer science (and subsequently UI/UX). 
                        I also love going outside and exploring; I'm always so infatuated with nature and I find immersing myself in it extremely calming. My last main hobby is editing videos;
                        which is actually a fairly recent hobby I've picked up, but I've quickly grown to love it (maybe it's because of all the YouTube videos I watched as a kid...).
                        And on a similar note, I have a Youtube channel where I record drawing timelapses and discuss things I've played/seen, because {' '}
                        <span className='line-through'>
                            I want an excuse to yap 
                        </span>
                        {' '} I want an outlet to sharpen my skills in public speaking and critical analysis.
                    </span>

                    <span className={`flex w-full items-start font-bold mt-4 mb-2 ${isTinyMobile ? 'text-xl' : isMobile ? 'text-2xl' : 'text-3xl'} `}> 
                        Why UI/UX?
                    </span> 
                    <span className={` ${isTinyMobile ? 'text-md' : isMobile ? 'text-lg' : 'text-xl'} `}>
                        Growing up I was a pretty artistic kid; I loved doodling and making comics that I could share with friends. But, I slowly burnt myself out and found myself lacking time
                        or motivation to draw. I was also not optimistic about my career prospects if I went into an artistic field, so I latched onto computer science since I was alright at coding
                        in high-school. However, after going into college, I quickly realized I was not built for things like back-end development. Fortunately, after I worked on a few projects in college,
                        I discovered UI/UX and how it was a perfect intersection between design and coding, and it made me get that creative spark again that I thought I lost forever. And ever since then I knew this 
                        was the career path for me. 
                    </span>
                </div>
            </div>
 
            {/*====================================== PHOTOS ======================================*/}
            <div className="flex flex-col h-full relative items-center justify-center ">    
                <span className={`text-surface-contrast titleText justify-center items-center racingSans w-full flex `}>
                    <p className='flex h-full items-center'>
                    VISTA PHOTOS
                    </p>
                </span>
                <div className="flex min-w-[300px] h-full relative">
                    <ImageCarousel className="mt-5" images={images} />
                    <Sticker className="-top-10 -right-20" src="/assets/general/Camera.svg"/>
                </div>
            </div>   
            {/*====================================== YOUTUBE ======================================*/}
            <div className="flex flex-col h-[700px] w-full relative w-full items-center justify-center">    
                <span className={`text-surface-contrast titleText justify-center items-center racingSans w-full flex `}>
                    <p className='flex h-full items-center'>
                    NEWEST VIDEO
                    </p>
                </span>
                <div className="mt-4 mb-20 flex w-full h-full items-center justify-center relative">
                    <iframe className="z-2 w-full h-full rounded-xl border-darkestBlue border-4" src="https://www.youtube.com/embed/Q2V4_4R4JxY?si=Q6NzpEfmQmVS2GBW" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                </div>
            </div>    
            {/*====================================== GAME ======================================*/}
        </div>
    </div>
  )
}

export default AboutPage