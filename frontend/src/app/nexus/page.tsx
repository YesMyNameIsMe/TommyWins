'use client';

import React, { useEffect, useRef, useState } from 'react'
import { animate, AnimatePresence, delay, motion } from 'framer-motion'
import ImageCarousel from '@/components/ImageCarousel';
import ConveyorBelt from "@/components/ConveyorBelt";
import LinkBubble from '@/components/LinkBubble';
import { useMobile } from '@/context/mobileContext';
import QuickJumpMenu from '@/components/QuickJumpMenu';
import Body from '@/components/Body';
import ClickableImage from '@/components/ClickableImage';
import { HiArrowDown, HiArrowRight, HiOutlineDesktopComputer } from 'react-icons/hi';
import { useTheme } from '@/context/themeContext';
import StarFieldOverlay from "@/components/StarFieldOverlay";

const NexusPage = () => {

    const {isMobile} = useMobile();
    const {isTinyMobile} = useMobile();
    const {theme} = useTheme()

    const comparisons = [
        {src: '/assets/nexus/OldNexus2.png', desc: "The Superdoc feature allows every student in a course to contribute to a communal notes folder. There were multiple features I wanted to change, such as the Course selection being a folder system with a search bar instead of a dropdown, so users no longer have to strain their eyes looking for the correct course in a compact list. "},
        {src: '/assets/nexus/SuperdocNew.png', desc: "The Superdoc feature allows every student in a course to contribute to a communal notes folder. There were multiple features I wanted to change, such as the Course selection being a folder system with a search bar instead of a dropdown, so users no longer have to strain their eyes looking for the correct course in a compact list. "},
        {src: '/assets/nexus/OldNexus4.svg', desc: "The Discord servers originally were going to be listed separately, but that idea was scrapped for a much more streamlined option of grouping each class server into their respective schools. "},
        {src: '/assets/nexus/DiscordServers.png', desc: "The Discord servers originally were going to be listed separately, but that idea was scrapped for a much more streamlined option of grouping each class server into their respective schools. "},
    ]

    const OldNexus = [
        {src: '/assets/nexus/OldNexus1.png',},
        {src: '/assets/nexus/OldNexus2.png',},
        {src: '/assets/nexus/OldNexus3.png',},
    ]

    const redesignData = [
        { id: 0, color: "#005ff2", label: "26 (83.9%) - Design Thematic 1" },
        { id: 1, color: "#CD3F3F", label: "5 (16.1%) - Design Thematic 2" },
    ]

    const primaryUseData = [
        { id: 0, color: "#005ff2", label: "34 (63%) - Academic Management" },
        { id: 1, color: "#CD3F3F", label: "14 (25.9%) - Administrative and Employment Tasks" },
        { id: 2, color: "#EFD44B", label: "5 (9.3%) - Financial Services" },
        { id: 3, color: "#58CF6E", label: "1 (1.9%) - Other" },
    ]

    const problemData = [
        { id: 0, color: "#005ff2", label: "10 (33.3%) - Navigation & Usability" },
        { id: 1, color: "#CD3F3F", label: "10 (33.3%) - No Reported Problems" },
        { id: 2, color: "#EFD44B", label: "5 (16.7%) - Performance & Reliability" },
        { id: 3, color: "#58CF6E", label: "3 (10%) - UI Design" },
        { id: 4, color: "#E08122", label: "2 (6.7%) - Other"},
    ]

    const wisn = [ 
                {desc: 'Easy Grade Management via  Grade Calculator'}, 
                {desc: 'Consolidated Class Notes for Students via “Superdoc”'},
                {desc: 'Quick Class Group Chat Creation via Class Scraping '}
            ]

    const quickJumps = [{title:'Introduction', anchor:'/nexus/#introduction'}, {title:'Project Background', anchor:'/nexus/#background'},
                        {title:'Discovery', anchor:'/nexus/#R&D'}, {title:'Problem Statement', anchor:'/nexus/#problem'},
                        {title:'Redesign Process', anchor:'/nexus/#Conceptualization'}, {title:'Design - Grade Calc', anchor:'/nexus/#GradeCalc'},
                        {title:'Design Comparisons', anchor:'/nexus/#Design Comparisons'}, {title:'Reflection', anchor:'/nexus/#reflection'},
                        ]

    return (
    <div className={`relative flex flex-col min-w-full h-full ${theme=='dark' ? "bg-[#232323]" : "bg-surface-primary"}`}>

        <div id="header" className="relative flex flex-col h-full w-full items-center overflow-hidden">
          {/*============================== TITLE ==============================*/}
            <div className='flex flex-col justify-center items-center w-full h-screen relative bg-linear-to-b from-[#011535] to-[#013D98] overflow-hidden'>
                <div className={`flex flex-col w-full h-full items-center mt-8`}>
                    <StarFieldOverlay count={isMobile ? 50 : 200}/>
                    
                    {!isMobile && <div className='z-1'>
                    <motion.img className='flex absolute bottom-0 right-0 pointer-events-none will-change-transform' src={'assets/nexus/NexusHeaderCloud2.svg'} initial={{y:200, opacity: 0}} whileInView={{y:10, opacity:1}} transition={{duration:2, type: 'spring', damping: 15, delay:0.35}}/>
                    <motion.img className='flex absolute bottom-0 left-0 -scale-x-100 pointer-events-none will-change-transform' src={'assets/nexus/NexusHeaderCloud2.svg'} initial={{y:200, opacity: 0}} whileInView={{y:10, opacity:1}} transition={{duration:2, type: 'spring', damping: 15, delay:0.35}}/>
                    <motion.img className='flex absolute bottom-0 right-0 pointer-events-none will-change-transform' src={'assets/nexus/NexusHeaderCloud.svg'} initial={{y:200, opacity: 0}} whileInView={{y:0, opacity: 1}} transition={{type:'spring',  damping: 15, duration: 2, delay: 0.2}}/>
                    <motion.img className='flex absolute bottom-0 left-0 -scale-x-100 pointer-events-none will-change-transform' src={'assets/nexus/NexusHeaderCloud.svg'} initial={{y:200, opacity: 0}} whileInView={{y:0, opacity: 1}} transition={{type:'spring',  damping: 15, duration: 2, delay: 0.2}}/>
                    </div>}

                    <motion.div className="mx-4 items-center justify-center pointer-events-none will-change-transform" initial={{y: 20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.5, type: 'tween', delay: 0.2}}>
                        <img className={`items-center justify-center h-auto w-[500px] flex mt-50 `} src={'assets/nexus/NexusLogo.svg'} />
                    </motion.div>
                    <motion.div className="items-center justify-center flex mt-5 gap-4 flex-wrap z-2" initial={{y: 20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.5, type: 'tween', delay: 0.4}}>
                        <LinkBubble bg='bg-[#0047B5] ' name="Figma File" image="/assets/general/FigmaLogo.svg" link="https://www.figma.com/design/4yJSCx98dohPl3MnJkJOVt/Nexus--Copy-?node-id=0-1&t=JdtX5e0AqFfhVJLQ-1"/>
                        <LinkBubble bg='bg-[#0047B5] ' name="Website" image={<HiOutlineDesktopComputer className='flex w-full h-full text-white'/>} link="https://utdnexus.com"/>
                    </motion.div>

                </div>
            </div>

            {/*============================== CONVEYOR BELT ==============================*/}
            <div className='flex min-w-screen h-full mt-30'>
                <ConveyorBelt 
                    images={[{src : "/assets/nexus/Home.png", alt: "First"}, 
                            {src : "/assets/nexus/AccessRequest.png", alt: "Login Pipeline"},
                            {src : "/assets/nexus/Grade Calc.png", alt: "Grade Calculator"},
                            {src : "/assets/nexus/SuperdocNew.png", alt: "Superdoc"},
                            {src : "/assets/nexus/DiscordServers.png", alt: "Discord Servers"}]}
                            speed={50}
                            direction="right"/>
            </div>

            <div className={`flex w-[85%] h-full ${isMobile ? 'gap-15' : 'gap-30'} flex-col items-center justify-center`}>
                {/* =============================== INTRODUCTION ====================*/}
                <div className="flex flex-col justify-center items-center mt-30 relative " id='introduction'>
                
{/*                 <span className={`text-surface-contrast mb-4 titleText justify-between items-center titilliumWeb font-bold w-full flex `}>
                  <h1>
                    Trailer
                  </h1>
                </span>
                <div className="mt-4 flex w-full h-[600px] items-center justify-center relative">
                    <iframe className="z-2 w-full h-full border-darkestBlue " src="https://www.youtube.com/embed/d1AUBk4gsqI?si=ldRP5pI5aVyqq22D" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                </div> */}

                <span className={`text-surface-contrast mb-4 titleText justify-between items-center titilliumWeb font-bold w-full flex `}>
                  <h1>
                    Introduction
                  </h1>
                </span>
                    <Body flexdirection={'flex-col'}>
                            <span className={` text-surface-contrast titilliumWeb font-medium ${isTinyMobile ? 'text-md' : isMobile ? 'text-lg' : 'text-xl'} `}>
                                In college, obtaining contact information with other classmates can be a hassle as 
                                students splinter off into separate group chats. There’s also a lack of a singular site 
                                that can serve as a consolidated study tool, 
                                forcing students to hop around different sites, which can become overwhelming. 
                            </span>
                    </Body>
                </div>
                {/* ============================ PROJECT BACKGROUND ===========================*/}
                <div className="flex flex-col justify-center items-center relative " id='background'>
                    <span className={`text-surface-contrast titleText mb-4 justify-between items-center titilliumWeb font-bold w-full flex `}>
                        <h1>
                            Project Background
                        </h1>
                    </span>
                    <Body flexdirection={"flex-col"}>
                        <span className={`text-surface-contrast titilliumWeb font-medium ${isTinyMobile ? 'text-md' : isMobile ? 'text-lg' : 'text-xl'} `}>
                            UTD Nexus is a website developed by {' '}
                            <a target='_blank' rel="noopener noreferrer" href='https://acmutd.co/development' 
                            className='cursor-pointer font-bold underline'>ACM Development</a>, 
                            and it originally started out as a student-led project for a competition within {' '}
                            <a target='_blank' rel="noopener noreferrer" href='https://acmutd.co/projects' 
                            className='cursor-pointer font-bold underline'>ACM Projects</a>.
                             I joined the team of originally <span className='font-bold'>4-5 students</span> after Nexus was conceived, and 
                            Nexus has been in <span className='font-bold'>development for around 3 years.</span> I joined officially as the 
                            sole designer, but worked as a front end developer as well alongside other 
                            developers.                         
                        </span>
                        <div className='flex flex-col'>
                            <span className={`text-surface-contrast text-left w-full titilliumWeb font-bold ${isTinyMobile ? 'text-lg' : isMobile ? 'text-xl' : 'text-2xl'} `}>
                                So What's Nexus?
                            </span>
                            <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} w-full gap-10 items-center`}>
                                {wisn.map((item, index) => (
                                    <div key={index} className={`mt-5 text-center flex items-center bg-[#0047B5] min-w-[200px] w-[18%] h-full font-normal text-white rounded-xl p-3 ${isTinyMobile ? 'text-md' : 'text-lg'}`}>
                                        {item.desc}
                                    </div>   
                                ))}
                            </div>
                        </div>
                        <span className={`text-surface-contrast titilliumWeb font-medium ${isTinyMobile ? 'text-md' : isMobile ? 'text-lg' : 'text-xl'} `}>
                            Nexus is a web app created to give students an <span className='font-bold'>easy way to converse and 
                            study</span> with their classmates without the hassle of obtaining contact 
                            information. It aims to make <span className='font-bold'>communication and studying easier</span> for 
                            classmates by providing a consolidated platform for study tools.                    
                        </span>
                    </Body>
                </div>

                {/* ============================ RESEARCH & DISCOVERY ===========================*/}
                <div className="flex flex-col justify-center items-center relative" id='R&D'>
                    <span className={`text-surface-contrast titleText mb-4 justify-between items-center titilliumWeb font-bold w-full flex `}>
                        <h1>
                            Discovery
                        </h1>
                    </span>
                    <Body flexdirection={"flex-col"}>
                        <span className={`text-surface-contrast titilliumWeb font-medium ${isTinyMobile ? 'text-md' : isMobile ? 'text-lg' : 'text-xl'} `}>
                            Since I joined the team after Nexus was conceived, that meant there was 
                            <span className='font-bold'> already a preexisting design</span>, with multiple pages already done. 
                            However, after speaking with a few members of my team and a few of my peers, 
                            many expressed that the current design was <span className='font-bold'>lacking <span className='italic'>something</span></span>
                            . A common criticism that came up was that it looked too “same-y”  or that it looked 
                            like a default template was being used.                
                        </span>

                        <span className={`text-surface-contrast text-left w-full titilliumWeb font-bold ${isTinyMobile ? 'text-lg' : isMobile ? 'text-xl' : 'text-2xl'} `}>
                            Original Nexus Screens
                        </span>
                        
                        <ImageCarousel images={OldNexus} />

                        <span className={`text-surface-contrast titilliumWeb font-medium mt-10 ${isTinyMobile ? 'text-md' : isMobile ? 'text-lg' : 'text-xl'} `}>
                            These brief talks led me to conclude that Nexus has an <span className='font-bold'>identity issue</span>. 
                            When it’ll eventually release, it might not have the necessary hooks to 
                            actually <span className='font-bold'>let students be curious and use all of its features</span>; they might 
                            use one or two, get disinterested, and <span className='font-bold'>never use it again</span>. 
                        </span>

                        <span className={`text-surface-contrast titilliumWeb font-medium ${isTinyMobile ? 'text-md' : isMobile ? 'text-lg' : 'text-xl'} `}>
                            After being onboarded to the team, I spoke with my PM and was given free 
                            reign and encouraged to <span className='font-bold'>completely overhaul the existing design</span>.
                        </span>    

                        <span className={`text-surface-contrast text-left w-full titilliumWeb font-bold ${isTinyMobile ? 'text-lg' : isMobile ? 'text-xl' : 'text-2xl'} `}>
                            Interview Quote Samples
                        </span>       
                        <img src={'assets/nexus/NexusQuotes.svg'}/>         
                    </Body>
                </div>
                {/* ============================ PROBLEM STATEMENT ===========================*/}
                <div className="flex flex-col justify-center items-center relative min-w-screen py-10 bg-[#0047B5]" id='problem'>
                    <div className='flex flex-col w-[85%]'>
                        <span className={`text-white titleText mb-4 justify-between items-center titilliumWeb font-bold w-full flex `}>
                            <h1>
                                Problem Statement
                            </h1>
                        </span>
                        <Body flexdirection={"flex-col"}>
                            <span className={`flex flex-col gap-4 text-white titilliumWeb font-medium ${isTinyMobile ? 'text-md' : isMobile ? 'text-lg' : 'text-xl'} `}>
                                How might I redesign the current Nexus pages to carve a unique identity for it, keeping users’ interests piqued while exploring?                            </span>
                        </Body>
                    </div>
                </div>

                {/* ============================ DESIGN PROCESS ===========================*/}
                <div className="flex flex-col justify-center items-center relative" id='Design Process'>
                    <span className={`text-surface-contrast titleText mb-4 justify-between items-center titilliumWeb font-bold w-full flex `}>
                        <h1>
                            Design Process
                        </h1>
                    </span>
                    <Body flexdirection={"flex-col"}>
                        <span className={`flex flex-col gap-4 text-surface-contrast titilliumWeb font-medium ${isTinyMobile ? 'text-md' : isMobile ? 'text-lg' : 'text-xl'} `}>
                            <span>
                                Being given the prompt to <span className='font-bold'> completely overhaul</span> an existing design will 
                                always be incredibly daunting; there’s an <span className='font-bold'>infinite number of possibilities </span>
                                you could head in and <span className='font-bold'>few that’ll effectively accomplish </span> what you were aiming for. 
                            </span>
                            <span>
                                Many people, especially those in non-creative fields, <span className='font-bold'>struggle to articulate</span> what
                                they’re thinking of when it comes to designs. Considering everybody in my team 
                                were pure developers, it was a <span className='font-bold'>challenge to get their thoughts actualized into 
                                something tangible</span>. I believe the best way to approach these situations is to 
                                <span className='font-bold'> sketch as many ideas as possible</span> to get a pulse on what works and what doesn’t. 
                            </span>
                        </span>
                        <span id='Conceptualization' className={`text-surface-contrast text-left w-full titilliumWeb font-bold ${isTinyMobile ? 'text-lg' : isMobile ? 'text-xl' : 'text-2xl'} `}>
                            Design Process: Conceptualizing
                        </span>

                        <span className={`text-surface-contrast titilliumWeb font-medium ${isTinyMobile ? 'text-md' : isMobile ? 'text-lg' : 'text-xl'} `}>
                            While creating my sketches, I saw <span className='font-bold'> 2 general paths</span>: stay within the 
                            guardrails of the current design or go completely off in another direction. 
                        </span>

                        <div className={`flex gap-4 w-full h-full my-4 items-start ${isMobile ? 'flex-col' : 'flex-row'}`}>
                            <ClickableImage image={"/assets/nexus/Concept1.png"}/>
                            <ClickableImage image={"/assets/nexus/Concept3.png"}/>
                        </div>

                        <span className={`text-surface-contrast titilliumWeb font-medium ${isTinyMobile ? 'text-md' : isMobile ? 'text-lg' : 'text-xl'} `}>
                            Here are two conceptual screens I designed that I believe stayed within 
                            the <span className='font-bold'>same realm of the current design philosophy</span> of Nexus. What I was trying 
                            to accomplish was to create more interest in the background while <span className='font-bold'>keeping 
                            the general UI style the same</span>. The direction I wanted to take Nexus here 
                            was to have a <span className='font-bold'>minimalist/abstract</span> theme that pushes the original design’s 
                            <span className='font-bold'> modernistic design</span> into something more intriguing than just a gradient.  
                        </span>

                        <div className={`flex gap-4 w-full h-full my-4 items-start ${isMobile ? 'flex-col' : 'flex-row'}`}>
                            <ClickableImage image={"/assets/nexus/Concept4.png"}/>
                        </div>

                        <span className={`text-surface-contrast titilliumWeb font-medium ${isTinyMobile ? 'text-md' : isMobile ? 'text-lg' : 'text-xl'} `}>
                            The last concept I created was this screen; a much more radically 
                            different take on Nexus. What I wanted to accomplish with this design 
                            was to create a more <span className='font-bold'>casual, friendly, and bubbly</span> tone with lots of 
                            <span className='font-bold'> playful illustrations</span>. I took lots of inspiration from sites like 
                            <span className='font-bold'> Duolingo and Discord</span>, as I believe sites like that keep a 
                            <span className='font-bold'> high retention rate</span> among its users.
                            I wanted to emulate their style of <span className='font-bold'>blocky, colorful, 
                            and vector-like illustrations</span> as that’s what charms a lot of users 
                            into <span className='font-bold'>using the product and sticking with it.</span>
                        </span>

                        <span className={`text-surface-contrast titilliumWeb font-medium ${isTinyMobile ? 'text-md' : isMobile ? 'text-lg' : 'text-xl'} `}>
                            After presenting the conceptual screens to my team and org, I 
                            asked them which do they prefer in an in-house survey, and given 
                            <span className='font-bold'> 31 responses</span>, an overwhelming 
                            majority of <span className='font-bold'>81% (26 responses)</span> preferred the 
                            <span className='font-bold'> radically different design</span>. 
                        </span>

                        {/* ========================== REDESIGN INTEREST ==============================*/}
                        <div className='flex flex-col gap-4 w-full h-full items-center text-surface-contrast mt-4 dmSans font-medium'>
                            <h1 className='w-full text-left'>31 Survey Responses - <b className='font-bold'> "Which Thematic Do You Prefer?"</b>.</h1>
                            
                            <div className={`flex gap-4 w-full h-full my-4 items-start ${isMobile ? 'flex-col' : 'flex-row'}`}>
                                <ClickableImage caption='Thematic 1' image={"/assets/nexus/Concept1.png"}/>
                                <ClickableImage caption="Thematic 2" image={"/assets/nexus/Concept4.png"}/>
                            </div>

                            <div className={`flex ${isMobile ? 'flex-col' : 'flex-row px-20'} gap-4 items-center justify-center h-full w-full`}>
                                <div className='flex items-center justify-center'>
                                    <img className={`flex ${isMobile ? '' : ''} select-none items-center justify-center`} src={"/assets/nexus/NexusThematicPieChart.svg"}/>
                                </div>
                                <span className='flex flex-col gap-4 tinyText'>
                                    {redesignData.map((item, index) => (
                                        <div key={index} className={`flex flex-row gap-2 items-center`}>
                                            <div className={`circle w-[15px] h-[15px]`} style={{backgroundColor: item.color}}/>
                                            {item.label}  
                                        </div>
                                    ))}
                                </span>
                            </div>
                        </div>

                        <span className={`text-surface-contrast titilliumWeb font-medium ${isTinyMobile ? 'text-md' : isMobile ? 'text-lg' : 'text-xl'} `}>
                            Taking these responses, it was clear that the direction everybody wanted to go in was 
                            to have a much more <span className='font-bold'>lively and playful style 
                            that’ll set Nexus apart and more memorable</span>. 
                        </span>

                    </Body>

                    {/* ========================== Grade Calculator ===============================*/}
                    <Body flexdirection={"flex-col"} className={'mt-4'}>
                    <span id='GradeCalc' className={`flex flex-col gap-4 text-surface-contrast titilliumWeb font-medium ${isTinyMobile ? 'text-md' : isMobile ? 'text-lg' : 'text-xl'} `}>
                        <span className={`text-surface-contrast text-left w-full titilliumWeb font-bold ${isTinyMobile ? 'text-lg' : isMobile ? 'text-xl' : 'text-2xl'} `}>
                            Design Process: Grade Calculator
                        </span>

                        <span className=''>
                            The grade calculator does exactly what it says on the tin plus a little extra: 
                            it allows students to see a <span className='font-bold'>“what-if”</span> of their class grade based on the grades 
                            they put in for different categories such as exams, homeworks, quizzes, etc. 
                            The <span className='font-bold'>main function</span> of the grade calculator centers around <span className='font-bold'>adding categories and 
                            assignments</span> within categories. The grade calculator <span className='font-bold'>depends on the user entering 
                            in the correct information</span>.
                        </span>

                        <span className=''>
                            Looking at the current Grade Calculator page, a few standout 
                            flaws immediately jump out: one being that there’s <span className='font-bold'>no way to delete 
                            a category</span>. And in the same vein, there’s <span className='font-bold'>no way to delete a 
                            specific assignment</span>. 
                        </span>

                        <div className={`flex gap-4 w-full h-full my-4 items-start ${isMobile ? 'flex-col' : 'flex-row'}`}>
                            <ClickableImage caption="Original Grade Calculator Screen" image={"/assets/nexus/OldNexus3.png"}/>
                        </div>

                        <span className=''>
                            I originally sought to fix these issues but as I designed the screen, 
                            I began to realize how <span className='font-bold'>bloated</span> it was: when a new user enters the 
                            grade calculator page, they’re <span className='font-bold'>immediately overwhelmed</span> by too many 
                            buttons, instructions, and input fields.                    
                        </span>

                        <div className={`flex gap-4 w-full h-full my-4 items-center ${isMobile ? 'flex-col' : 'flex-row'}`}>
                            <ClickableImage image={"/assets/nexus/GradeCalcInitial.png"}/>    
                            <img className='w-[clamp(350px,35%,700px)]' src={"/assets/nexus/GradeCalcInitialPigy.svg"}/>                    
                        </div>

                        <span>
                            After trying to solve the problem of too much information bloating 
                            the screen, I opted in for a <span className='font-bold'>pop-up tutorial</span>. However, for something 
                            that’s as information dense as the grade calculator, having a pop-up
                            might <span className='font-bold'>not be very efficient</span>. This is because 
                            users easily <span className='font-bold'>forget information when it’s just spoon fed </span> 
                            to them, leading me to have to explore another option.
                        </span>

                        <div className={`flex gap-4 w-full h-full my-4 items-center ${isMobile ? 'flex-col' : 'flex-row'}`}>
                            <ClickableImage image={"/assets/nexus/Grade Calc.png"}/>
                            <ClickableImage image={"/assets/nexus/GradeCalcBadTutorial.gif"}/>
                        </div>

                        <div className={`flex gap-4 w-full h-full my-4 items-center justify-center ${isMobile ? 'flex-col' : 'flex-row'}`}>
                            <img className='w-[clamp(350px,35%,700px)]' src={"/assets/nexus/GradeCalcBadTutorialPigy.svg"}/>                    
                        </div>

                        <span>
                            The final iteration of the grade calculator uses a <span className='font-bold'>step-by-step 
                            tutorial</span> that highlights the corresponding feature the tutorial 
                            mentions. This helps users <span className='font-bold'>retain the information</span> more by actively 
                            forcing their attention to the relevant feature. 
                        </span>

                        <div className={`flex gap-4 w-full h-full my-4 items-center ${isMobile ? 'flex-col' : 'flex-row'}`}>
                            <ClickableImage image={"/assets/nexus/GradeCalcTutorial.gif"}/>
                        </div>
                    </span>
                    </Body>
                </div>
                {/* ============================ DESIGN COMPARISONS ============================*/}
                <div className='flex flex-col gap-10 items-center justify-center' id='Design Comparisons'>
                    <Body flexdirection={'flex-col'}>
                        <span className={`text-surface-contrast titleText mb-4 justify-between items-center titilliumWeb font-bold w-full flex `}>
                            <h1>
                                Design Comparisons - Quickfire
                            </h1>
                        </span>
                        <div className={`flex flex-col justify-center items-center relative`}>
                            <ImageCarousel className="mt-5" images={comparisons} />
                        </div>
                    </Body>
                    <Body flexdirection={'flex-col'}>
                        <span className={`text-surface-contrast titilliumWeb font-medium mt-4 ${isTinyMobile ? 'text-md' : isMobile ? 'text-lg' : 'text-xl'} `}>
                            These are just a sample of the actual number of pages I redesigned. I really {' '}
                            <a className='underline' target='_blank' rel="noopener noreferrer" href='https://utdnexus.com'>recommend exploring the website for yourself</a> to see all the subtle animations and illustrations I created to breathe some life into Nexus!                        
                        </span>
                    </Body>
                </div>
                {/* ============================ REFLECTION ===========================*/}
                <div className="flex flex-col justify-center items-center relative mb-20 py-10 bg-[#0047B5] min-w-screen" id='reflection'>
                    <div className='flex flex-col w-[85%]'>
                        <span className={`text-white titleText mb-4 justify-between items-center titilliumWeb font-bold w-full flex `}>
                            <h1>
                                Reflection
                            </h1>
                        </span>
                        <Body flexdirection={"flex-col"}>
                            <span className={`text-white gap-4 titilliumWeb font-medium ${isTinyMobile ? 'text-md' : isMobile ? 'text-lg' : 'text-xl'} `}>
                                With a team of amazing developers and a great support from our 
                                organization, we were able to ship a product I’m extremely proud of. 
                                I look back on the first stages of the redesign and am always shocked 
                                to see how much I’ve grown as a designer, as the Figma file is 
                                definitely <span className='font-bold'>not</span> up to the standards I hold now
                            </span>
                            <span className={`text-white gap-4 titilliumWeb font-medium ${isTinyMobile ? 'text-md' : isMobile ? 'text-lg' : 'text-xl'} `}>
                                And that’s one of the biggest problems I have with how I handled 
                                this project; I wish I had <span className='font-bold'>learned more about design systems </span>
                                before I dove into working on Nexus. I treated it more as an 
                                <span className='font-bold'> illustration sheet rather than an actual system</span> that other 
                                team members will use. Granted, I was responsible for coding 
                                the pages I designed, so it didn’t really matter how messy 
                                the Figma file was as long as I knew what I wanted from it. 
                                However, this is not the case out in professional projects, 
                                and I’m glad I’ve dedicated the time to learning how design 
                                systems work in Figma. 
                            </span>
                            <span className={`italic text-white gap-4 titilliumWeb font-medium ${isTinyMobile ? 'text-md' : isMobile ? 'text-lg' : 'text-xl'} `}>
                                P.S. If you’re the future designer for Nexus, Good Luck and I’m sorry for the mess of a Figma file...
                            </span>
                        </Body>
                    </div>
                </div>
                {/* ============================ TOC ===========================*/}
                {!isMobile && 
                <QuickJumpMenu bg='bg-[#0047B5]' quickJumps={quickJumps}/>}
            </div>
        </div>
    </div>
  )
}

export default NexusPage