import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import ImageCarousel from '../components/ImageCarousel'
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";
import SkillList from '../components/SkillList';

const AboutPage = () => {

    const images = [{src: '/assets/FatBurgerImage.jpg', desc: 'Fat Burger Challenge (3000 Calorie Burger)'}, 
                        {src: '/assets/AustinImage.jpg', desc: 'After Hiking Up Mount Bonnell, Austin, TX'}, 
                        {src: '/assets/ChloeImage.jpg', desc: 'Proud Uncle of this Single Celled Organism'}]

    const skills = [{name: 'Figma'}, {name: 'UI/UX Design'}, {name: 'React'}, {name: 'TypeScript'}, 
                    {name: 'TailwindCSS'}, {name: 'Programming'}, {name: 'SVG Animation'}, {name: 'Prototyping'}]


    return (
    <div id="header" className="flex h-full  justify-center bg-center bg-cover bg-darkestBlue"
         style={{backgroundImage: "url('assets/AboutBG.svg')", overflow: 'hidden'}}>
        <div className="flex flex-col w-full h-full mx-70 mt-50 items-center relative gap-40">
            <div className="flex relative" initial={{y: 20, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.7}}>
                <span className="heading text-white text-7xl">
                    ABOUT ME
                </span>
                <span className="heading absolute -left-20 -top-5 -rotate-24 text-white text-3xl">
                    [more]
                </span>
            </div>

            {/* Paragraph */}
            <div className="flex flex-col relative w-full items-center" 
                        initial={{y: 20, opacity: 0}} whileInView={{y: 0, opacity: 1}} viewport={{amount: 0.5, once: true}} transition={{duration: 0.7}}>
                <iframe className="absolute w-[300px] h-[500px] -top-35" src="/assets/SusAnimation.html"/>
                <div className="flex flex-col  justify-center w-full min-w-[700px] h-[350px] from-darkestBlue to-darkerBlue bg-gradient-to-b rounded-2xl drop-shadow-xl relative">
                    <img className="absolute -rotate-12 -bottom-20 -left-30 scale-80" src='/assets/PaletteSticker.svg'/>
                    <img className="absolute -bottom-30 -right-30 scale-70" src='/assets/GamerMe.svg'/>
                    <span className="mx-15 text-white text-3xl font-mono font-black">
                        Personal Interests
                    </span>
                    <span className="mx-15 text-white text-xl font-mono">
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
            <div className="flex flex-col relative w-full items-center justify-center"
                        initial={{y: 20, opacity: 0}} whileInView={{y: 0, opacity: 1}} viewport={{amount: 0.5, once: true}} transition={{duration: 0.7}}>    
                <span className="heading text-white text-7xl mb-5">
                    CORE SKILLS
                </span>
                <SkillList skills={skills}/>
                <img className="absolute -left-40 -bottom-20 scale-80" src="/assets/TargetSticker.svg"/>
            </div>    
            {/*====================================== PHOTOS ======================================*/}
            <div className="flex flex-col h-[600px] relative w-full mt-20 items-center justify-center"
                        initial={{y: 20, opacity: 0}} whileInView={{y: 0, opacity: 1}} viewport={{amount: 0.5, once: true}} transition={{duration: 0.7}}>    
                <span className="heading text-white text-7xl">
                    PHOTOS
                </span>
                <ImageCarousel className="" images={images} />
                <img className="absolute top-0 -right-20" src="/assets/Camera.svg"/>
            </div>   
            {/*====================================== YOUTUBE ======================================*/}
            <div className="flex flex-col h-[700px] relative w-full items-center justify-center"
                    initial={{y: 20, opacity: 0}} whileInView={{y: 0, opacity: 1}} viewport={{amount: 0.2, once: true}} transition={{duration: 0.7}}>    
                <span className="heading text-white text-7xl flex w-full justify-center text-center">
                    NEWEST VIDEO
                </span>
                <div className="mt-4 mb-20 flex w-full items-center justify-center relative">
                <iframe width="720" height="405" src="https://www.youtube.com/embed/INs-bngIeVs?si=6fquNJwfbpF0Cfnf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>            </div>
                <img className="absolute w-60 h-60 -right-20 top-10 rotate-12" src="/assets/YoutubeMe.svg" style={{transform: 'scaleX(-1'}}/>
            </div>    
            {/*====================================== GAME ======================================*/}
            <div className="flex flex-col relative h-[100px] w-full items-center justify-center mb-60"
                        initial={{y: 20, opacity: 0}} whileInView={{y: 0, opacity: 1}} viewport={{amount: 0.2, once: true}} transition={{duration: 0.7}}>    
                <span className="heading text-white text-6xl flex w-full justify-center text-center ">
                    RECENTLY COMPLETED GAME
                </span>
                <div className="relative flex w-[50%] h-[250px] bg-gradient-to-b from-[#440813] to-[#A5081D] mt-5 rounded-xl border-4 border-[#660618]">
                    <img className='h-full w-full object-contain p-7' src='/assets/SSLogo.png'/>
                    <img className="absolute top-10 -left-30 scale-40 -rotate-12" src="/assets/HornetSticker.svg"/>
                </div>
            </div>    
        </div>
    </div>
  )
}

export default AboutPage