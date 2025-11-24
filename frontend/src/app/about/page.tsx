'use client';

import { motion } from 'framer-motion';
import ImageCarousel from '@/components/ImageCarousel';
import SkillList from '@/components/SkillList';
import Image from 'next/image';
import Sticker from '@/components/Sticker';
import { useMobile } from '@/context/mobileContext';

const AboutPage = () => {

    const {isMobile} = useMobile()

    const images = [{src: '/assets/about/FatBurgerImage.jpg', desc: 'Fat Burger Challenge (3000 Calorie Burger)'}, 
                        {src: '/assets/about/AustinImage.jpg', desc: 'After Hiking Up Mount Bonnell, Austin, TX'}, 
                        {src: '/assets/about/ChloeImage.jpg', desc: 'Proud Uncle of this Single Celled Organism'}]

    const skills = [{name: 'Figma'}, {name: 'UI/UX Design'}, {name: 'React'}, {name: 'TypeScript'}, 
                    {name: 'TailwindCSS'}, {name: 'Programming'}, {name: 'SVG Animation'}, {name: 'Prototyping'}]


    return (
    <div id="header" className="flex h-full  justify-center bg-center bg-cover bg-darkestBlue"
         style={{backgroundImage: "url('assets/about/AboutBG.svg')", overflow: 'hidden'}}>
        <div id="header" className="flex flex-col w-full h-full mt-50 items-center relative gap-40">
            {/* Title */}
            <div className="flex relative">
                <span className="heading text-white text-7xl">
                    ABOUT ME
                </span>
                <span className="heading absolute -left-20 -top-5 -rotate-24 text-white text-3xl">
                    [more]
                </span>
            </div>
            {/* Paragraph */}
            <div className="flex flex-col relative w-full items-center" >
                <iframe className="absolute w-[300px] h-[500px] -top-35" src="/assets/about/SusAnimation.html"/>
                <div className="flex flex-col w-[60%] justify-center min-w-[500px] h-fit from-darkestBlue to-darkerBlue bg-linear-to-b rounded-2xl drop-shadow-xl relative">
                    <Sticker className=" -rotate-12 -bottom-20 -left-25" src='/assets/general/PaletteSticker.svg'/>
                    <Sticker className="scale-90 -bottom-30 -right-25" src='/assets/about/GamerMe.svg'/>
                    <span className="mx-10 mt-10 text-white text-3xl font-mono font-black">
                        Personal Interests
                    </span>
                    <span className="mx-10 mb-10 text-white text-xl font-mono">
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
            <div className="flex flex-col relative items-center justify-center">    
                <span className="heading text-white text-7xl mb-5">
                    CORE SKILLS
                </span>
                <div className="min-w-[500px] w-[60%] justify-center items-center flex relative">
                    <SkillList skills={skills} />
                    <Sticker className='scale-80 -top-20 -left-30' src='/assets/about/TargetSticker.svg'/>
                </div>
            </div>    
            {/*====================================== PHOTOS ======================================*/}
            <div className="flex flex-col h-fit relative w-full items-center justify-center">    
                <span className="heading text-white text-7xl">
                    PHOTOS
                </span>
                <div className="flex w-[60%] min-w-[500px] h-full relative">
                    <ImageCarousel className="mt-5" images={images} />
                    <Sticker className="-top-10 -right-20" src="/assets/general/Camera.svg"/>
                </div>
            </div>   
            {/*====================================== YOUTUBE ======================================*/}
            <div className="flex flex-col h-[700px] relative w-full items-center justify-center">    
                <span className="heading text-white text-7xl flex w-full justify-center text-center">
                    NEWEST VIDEO
                </span>
                <div className="mt-4 mb-20 flex w-[60%] h-[60%] items-center justify-center relative">
                    <iframe className="z-2 w-full h-full rounded-xl border-darkestBlue border-4" src="https://www.youtube.com/embed/INs-bngIeVs?si=6fquNJwfbpF0Cfnf" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                    {!isMobile && <Sticker className="-right-40 -top-38 -scale-x-100 z-1" src="/assets/about/YoutubeMe.svg"/>}
                </div>
            </div>    
            {/*====================================== GAME ======================================*/}
            <div className="flex flex-col relative h-[100px] w-full items-center justify-center mb-60">    
                <span className="heading text-white text-6xl flex w-full justify-center text-center ">
                    RECENTLY COMPLETED GAME
                </span>
                <div className="relative flex w-[30%] h-[250px] min-w-[400px] bg-linear-to-b from-[#440813] to-[#A5081D] mt-5 rounded-xl border-4 border-[#660618]">
                    <img className='h-full w-full object-contain p-7' src='/assets/about/SSLogo.png'/>
                    <Sticker className="top-10 -left-30 scale-40 -rotate-12" src="/assets/about/HornetSticker.svg"/>
                </div>
            </div>    
        </div>
    </div>
  )
}

export default AboutPage