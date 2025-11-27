'use client';

import { motion } from 'framer-motion';
import ImageCarousel from '@/components/ImageCarousel';
import SkillList from '@/components/SkillList';
import Image from 'next/image';
import Sticker from '@/components/Sticker';
import { useMobile } from '@/context/mobileContext';

const AboutPage = () => {

    const {isMobile} = useMobile()
    const {isTinyMobile} = useMobile()

    const images = [{src: '/assets/about/FatBurgerImage.jpg', desc: 'Fat Burger Challenge (3000 Calorie Burger)'}, 
                        {src: '/assets/about/AustinImage.jpg', desc: 'After Hiking Up Mount Bonnell, Austin, TX'}, 
                        {src: '/assets/about/ChloeImage.jpg', desc: 'Proud Uncle of this Single Celled Organism'}]

    const skills = [{name: 'Figma'}, {name: 'UI/UX Design'}, {name: 'React'}, {name: 'TypeScript'}, 
                    {name: 'TailwindCSS'}, {name: 'Programming'}, {name: 'SVG Animation'}, {name: 'Prototyping'}]


    return (
    <div id="header" className="flex h-full justify-center bg-center bg-cover bg-no-repeat bg-darkestBlue"
         style={{backgroundImage: "url('assets/about/AboutBG.svg')", overflow: 'hidden'}}>
        <div id="header" className="flex flex-col w-full h-full mt-50 items-center relative gap-40">
            {/* Title */}
            <div className="flex relative">
                <span className={`text-white ${isTinyMobile ? "text-5xl" : "text-7xl"} heading`}>
                    ABOUT ME
                </span>
                <span className={`heading absolute -left-12 -top-5 -rotate-24 text-white ${isTinyMobile ? "text-2xl" : "text-3xl"}`}>
                    [more]
                </span>
            </div>
            {/* Paragraph */}
            <div className="flex flex-col relative w-full items-center" >
                <iframe className="absolute w-[300px] h-[500px] -top-35" src="/assets/about/SusAnimation.html"/>
                <div className="flex flex-col w-[60%] justify-center min-w-[300px] h-fit from-darkestBlue to-darkerBlue bg-linear-to-b rounded-2xl drop-shadow-xl relative">
                    <Sticker className=" -rotate-12 -bottom-20 -left-25" src='/assets/general/PaletteSticker.svg'/>
                    <Sticker className="scale-90 -bottom-30 -right-25" src='/assets/about/GamerMe.svg'/>
                    <span className={`mx-10 mt-10 mb-2 text-white font-bold ${isTinyMobile ? 'text-xl' : isMobile ? 'text-2xl' : 'text-3xl'}`}>
                        Personal Interests
                    </span>
                    <span className={`mx-10 mb-10 text-white ${isTinyMobile ? 'text-md' : isMobile ? 'text-lg' : 'text-xl'}`}>
                        Shockingly, I do have interests outside of work and school! My main past time is playing video games with 
                        my friends. I also, not surprisingly, enjoy drawing, as it was actually my first 
                        ever passion I tried to pursue before I made the jump to computer science. And lastly, I love going out 
                        and exploring; trying something new or going somewhere I’ve never been to is what I’m always looking for. 
                        I also have a Youtube channel where I record drawing timelapses and discuss films, because {' '}
                        <span className='line-through'>
                            I want an excuse to yap 
                        </span>
                        {' '} I want an outlet to sharpen my skills in public speaking and critical analysis.
                    </span>
                </div>
            </div>
            {/*====================================== SKILLS ======================================*/}
            <div className="flex flex-col relative items-center justify-center w-[60%]">    
                <span className={`text-white ${isTinyMobile ? "text-5xl" : "text-7xl"} heading text-center`}>
                    CORE SKILLS
                </span>
                <div className="min-w-[300px] justify-center items-center flex relative mt-4">
                    <SkillList skills={skills} />
                    <Sticker className='scale-80 -top-20 -left-30' src='/assets/about/TargetSticker.svg'/>
                </div>
            </div>    
            {/*====================================== PHOTOS ======================================*/}
            <div className="flex flex-col h-fit relative w-[60%] items-center justify-center ">    
                <span className={`text-white ${isTinyMobile ? "text-5xl" : "text-7xl"} heading text-center`}>
                    PHOTOS
                </span>
                <div className="flex min-w-[300px] h-full relative">
                    <ImageCarousel className="mt-5" images={images} />
                    <Sticker className="-top-10 -right-20" src="/assets/general/Camera.svg"/>
                </div>
            </div>   
            {/*====================================== YOUTUBE ======================================*/}
            <div className="flex flex-col h-[700px] relative w-full items-center justify-center">    
                <span className={`text-white ${isTinyMobile ? "text-5xl" : "text-7xl"}  heading text-center`}>
                    NEWEST VIDEO
                </span>
                <div className="mt-4 mb-20 flex w-[60%] h-[60%] items-center justify-center relative">
                    <iframe className="z-2 w-full h-full rounded-xl border-darkestBlue border-4" src="https://www.youtube.com/embed/INs-bngIeVs?si=6fquNJwfbpF0Cfnf" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                    {!isMobile && <Sticker className="-right-45 -top-38 -scale-x-100 z-10" src="/assets/about/YoutubeMe.svg"/>}
                </div>
            </div>    
            {/*====================================== GAME ======================================*/}
            <div className="flex flex-col relative  w-full items-center justify-center mb-60">    
                <span className="heading text-white text-6xl flex w-full justify-center text-center ">
                    RECENTLY COMPLETED GAME
                </span>
                <div className="relative flex w-[30%] min-w-[300px] bg-linear-to-b from-[#440813] to-[#A5081D] mt-5 rounded-xl border-4 border-[#660618]">
                    <img className='h-full w-full object-contain p-7' src='/assets/about/SSLogo.png'/>
                    <Sticker className={`-bottom-10 -left-15 ${isMobile ? 'w-[30%]' : 'w-[25%]' } -rotate-12`} src="/assets/about/HornetSticker.svg"/>
                </div>
            </div>    
        </div>
    </div>
  )
}

export default AboutPage