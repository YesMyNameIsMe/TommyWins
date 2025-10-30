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
        <div className="flex flex-col w-full h-full mx-75 mt-50 items-center relative">
            <motion.div className="flex relative" initial={{y: 20, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.7}}>
                <heading className="text-white text-7xl">
                    ABOUT ME
                </heading>
                <heading className="absolute -left-20 -top-5 -rotate-24 text-white text-3xl">
                    [more]
                </heading>
            </motion.div>

            {/* Paragraph */}
            <motion.div className="flex flex-col relative w-full mt-40 items-center" 
                        initial={{y: 20, opacity: 0}} whileInView={{y: 0, opacity: 1}} viewport={{amount: 0.5, once: true}} transition={{duration: 0.7}}>
                <iframe className="absolute w-[300px] h-[500px] -top-35" src="/assets/SusAnimation.html"/>
                <div className="flex flex-col  justify-center w-full min-w-[700px] h-[350px] from-darkestBlue to-darkerBlue bg-gradient-to-b rounded-2xl drop-shadow-xl relative">
                    <img className="absolute -rotate-12 -bottom-20 -left-20 scale-80" src='/assets/PaletteSticker.svg'/>
                    <img className="absolute -bottom-30 -right-20 scale-70" src='/assets/GamerMe.svg'/>
                    <span className="mx-15 text-white text-3xl font-mono font-black">Personal Interests</span>
                    <span className="mx-15 text-white text-xl font-mono">
                        Shockingly, I do have interests outside of work and school! My main past time is playing video games with 
                        my friends. I also, not surprisingly, enjoy drawing, as it was actually my first 
                        ever passion I tried to pursue before I made the jump to computer science. And lastly, I love going out 
                        and exploring; trying something new or going somewhere I’ve never been to is what I’m always looking for. 
                        One of my dreams is to be able to travel the world and see beautiful landscapes all over. 
                    </span>
                </div>
            </motion.div>
            {/*====================================== SKILLS ======================================*/}
            <motion.div className="flex flex-col relative w-full mt-50 items-center justify-center"
                        initial={{y: 20, opacity: 0}} whileInView={{y: 0, opacity: 1}} viewport={{amount: 0.5, once: true}} transition={{duration: 0.7}}>    
                <heading className="text-white text-7xl mb-5">
                    CORE SKILLS
                </heading>
                <SkillList skills={skills}/>
                <img className="absolute -left-40 -bottom-20 scale-80" src="/assets/TargetSticker.svg"/>
            </motion.div>    
            {/*====================================== PHOTOS ======================================*/}
            <motion.div className="flex flex-col h-[600px] relative w-full mt-50 items-center justify-center"
                        initial={{y: 20, opacity: 0}} whileInView={{y: 0, opacity: 1}} viewport={{amount: 0.5, once: true}} transition={{duration: 0.7}}>    
                <heading className="text-white text-7xl">
                    PHOTOS
                </heading>
                <ImageCarousel className="" images={images} />
                <img className="absolute top-0 -right-20" src="/assets/Camera.svg"/>
            </motion.div>   
            {/*====================================== PHOTOS ======================================*/}
            <motion.div className="flex flex-col h-[700px] relative w-full items-center justify-center"
                        initial={{y: 20, opacity: 0}} whileInView={{y: 0, opacity: 1}} viewport={{amount: 0.2, once: true}} transition={{duration: 0.7}}>    
                <heading className="text-white text-5xl flex w-full justify-center text-center">
                    RECENTLY COMPLETED GAME
                </heading>
                <div className="relative flex w-[50%] h-[250px] bg-gradient-to-b from-[#440813] to-[#A5081D] mt-5 rounded-xl border-4 border-[#660618]">
                    <img className='h-full w-full object-contain p-7' src='/assets/SSLogo.png'/>
                    <img className="absolute top-10 -left-30 scale-40 -rotate-12" src="/assets/HornetSticker.svg"/>
                </div>

            </motion.div>    
        </div>
    </div>
  )
}

export default AboutPage