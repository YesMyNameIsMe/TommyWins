'use client'

import React, { useEffect, useRef, useState } from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import { useMobile } from '@/context/mobileContext'
import LinkBubble from '@/components/LinkBubble'
import Sticker from '@/components/Sticker'
import Body from '@/components/Body'
import ClickableImage from '@/components/ClickableImage'
import { HiArrowDown } from 'react-icons/hi'
import ImageCarousel from '@/components/ImageCarousel'
import Link from 'next/link'

const OrionPage = () => {
    const {isMobile} = useMobile();
    const {isTinyMobile} = useMobile();
    const [atBottom, setAtBottom] = useState(false)
    const [atTop, setAtTop] = useState(true);

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
        const bottom = scrollHeight - scrollTop <= clientHeight + 1;
        setAtBottom(bottom);
    };

    useEffect(() => {
        const handleScroll = () => {
        // If scrollY is 0, the user is at the very top
        setAtTop(window.scrollY === 0);
        };

        // Add listener on mount
        window.addEventListener('scroll', handleScroll);
        
        // Clean up listener on unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const comparisons = [
        {src: '/assets/orion/OldOrion1.png', desc: "Tasks and Communications are time-sensitive info, so I wanted to emphasize their importance by placing them on the navbar and better indicate any new tasks/messages with high-contrasting alerts."},
        {src: '/assets/orion/NewOrion1.svg', desc: "Tasks and Communications are time-sensitive info, so I wanted to emphasize their importance by placing them on the navbar and better indicate any new tasks/messages with high-contrasting alerts."},
        {src: '/assets/orion/OldOrion2.svg', desc: "Accepting/declining financial aid in the original design is buried underneath a lot of unclear and obscured buttons/dropdowns; I simplified things into a simple checkbox selection process with clear buttons that do what they say they do. "},
        {src: '/assets/orion/NewOrion2.png', desc: "Accepting/declining financial aid in the original design is buried underneath a lot of unclear and obscured buttons/dropdowns; I simplified things into a simple checkbox selection process with clear buttons that do what they say they do. "},
        {src: '/assets/orion/OldOrion3.svg', desc:"The degree planner lets students browse courses in a catalog and add it to their planner. In the original design, there’s no search bar (again) and it opens an entirely new page, creating a disconnect between the catalog and planner. I wanted to bridge this gap by turning it into a pop-up. "},
        {src: '/assets/orion/NewOrion3.gif', desc:"The degree planner lets students browse courses in a catalog and add it to their planner. In the original design, there’s no search bar (again) and it opens an entirely new page, creating a disconnect between the catalog and planner. I wanted to bridge this gap by turning it into a pop-up. "}
    ]

    const redesignData = [
        { id: 0, color: "#005ff2", label: "28 (51.9%) - It's a little annoying to use Orion; I'm interested in seeing what a redesign could bring." },
        { id: 1, color: "#CD3F3F", label: "12 (22.2%) - Redesigning Orion seems like it would be pointless, it's perfectly fine as is." },
        { id: 2, color: "#EFD44B", label: "8 (14.8%) - I don't really care if Orion is redesigned or not." },
        { id: 3, color: "#58CF6E", label: "4 (7.4%) - Orion is in incredible need of a redesign, I hate using it!" },
        { id: 4, color: "#E08122", label: "2 (3.7%) - I really like Orion and redesigning it would only be a downgrade."},
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

    const wiso = [{desc: 'Redesign mostly dealt with visual and IA, not a full rebuild.'}, 
                {desc: 'Unable to access every page and interaction; can’t address every problem mentioned from surveys.”'}, 
                {desc: 'Working within Figma, not every page can be fully functional like it would be in code.'}]

    return (
    <div className='relative flex flex-col min-w-full h-full bg-linear-to-b from-[#001433] to-[#002764]'>
        <div className='fixed inset-0 z-0 pointer-events-none'>
            <img src={"/assets/orion/Stars.svg"} className='h-full w-full object-cover' alt="" />
        </div>
        <div id="header" className="relative z-10 flex flex-col h-full w-full items-center overflow-hidden pb-40">
          {/*============================== TITLE ==============================*/}
            <motion.div className="mx-4 pointer-events-none will-change-transform" initial={{y: 20, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.5, type: 'tween', delay: 0.2}}>
                <img className={`items-center justify-center h-auto w-[500px] flex mt-50 `} src="/assets/orion/OrionLogo.svg" />
            </motion.div>
            <motion.div className="items-center justify-center flex mt-5 gap-4 flex-wrap will-change-transform" initial={{y: 20, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.5, type: 'tween', delay: 0.6}}>
                <LinkBubble name="Prototype" image="/assets/general/FigmaLogo.svg" link="https://www.figma.com/proto/ScuPXqtK4eakkqE1rKASoU/UTD-Orion-Redesign?node-id=844-13780&p=f&t=hL5NGjtKEHM2PDEq-8&scaling=contain&content-scaling=responsive&page-id=844%3A12864&starting-point-node-id=844%3A13780&hide-ui=1"/>
                <LinkBubble name="Figma File" image="/assets/general/FigmaLogo.svg" link="https://www.figma.com/design/ScuPXqtK4eakkqE1rKASoU/UTD-Orion-Redesign?node-id=844-12864&t=1uPUfVc8sLzw8I5u-1"/>
            </motion.div>

            <div className='flex w-full h-full gap-40 flex-col items-center justify-center'>
                {/* =============================== INTRODUCTION ====================*/}
                <div className="flex flex-col justify-center items-center mt-50 relative " id='introduction'>
                    <span className={`text-white ${isMobile ? "text-5xl" : "text-5xl"} heading text-center`}>
                    INTRODUCTION
                    </span>
                    <Body flexdirection={'flex-col'}>
                            <span className={` text-white font-normal ${isTinyMobile ? 'text-md' : isMobile ? 'text-lg' : 'text-lg'} `}>
                                “Oh, it’s awful, we hate it, too.” was what my university’s advisor said about UTD’s Orion during one of our scheduled appointments. <span className='font-bold'>"Obtuse Navigation"</span>, 
                                <span className='font-bold'> “too much info”</span>, or 
                                <span className='font-bold'> “outdated UI”</span> 
                                are all statements echoed by students and faculty members a like about their experience using Orion. As a student portal, getting important information should be <span className='font-bold'>quick and easy to grab</span>, not a scavenger hunt through an outdated website that hasn’t seen an update since the mid-2000’s. 
                            </span>
                    </Body>
                </div>
                {/* ============================ PROJECT BACKGROUND ===========================*/}
                <div className="flex flex-col justify-center items-center relative " id='background'>
                    <span className={`text-white ${isMobile ? 'text-4xl' : 'text-5xl'} heading text-center`}>
                    PROJECT BACKGROUND
                    </span>
                    <Body flexdirection={"flex-col"}>
                        <span className={`text-white font-normal ${isTinyMobile ? 'text-md' : isMobile ? 'text-lg' : 'text-lg'} `}>
                            Over the course of two months, I conducted user research among UTD students and faculty and led the design of every page, covering the full end-to-end experience. The main purpose of this project is addressing user pain points with Orion, pin-pointing problems affecting UTD students, from fresh undergrads navigating Orion for the first time to graduate students quickly getting in and out with the info they need. 
                        </span>
                    </Body>
                </div>
                {/* ============================ KEY CONSTRAINTS ===========================*/}
                <div className="flex flex-col justify-center items-center relative " id='constraints'>
                    <span className={`text-white ${isMobile ? 'text-4xl' : 'text-5xl'} heading text-center`}>
                    KEY CONSTRAINTS
                    </span>
                    <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} w-full gap-10 items-center justify-center`}>
                        {wiso.map((item, index) => (
                            <div key={index} className={`mt-5 text-center flex items-center bg-darkBlue min-w-[200px] w-[18%] h-full font-normal text-white rounded-xl p-3 ${isTinyMobile ? 'text-md' : 'text-lg'}`}>
                                {item.desc}
                            </div>   
                        ))}
                    </div>
                </div>
                {/* ============================ RESEARCH & DISCOVERY ===========================*/}
                <div className="flex flex-col justify-center items-center relative" id='R&D'>
                    <span className={`text-white ${isMobile ? 'text-4xl' : 'text-5xl'} heading text-center`}>
                    RESEARCH & DISCOVERY
                    </span>
                    <Body flexdirection={"flex-col"}>
                        <span className={`flex flex-col gap-4 text-white font-normal ${isTinyMobile ? 'text-md' : isMobile ? 'text-lg' : 'text-lg'} `}>
                            <line>Based on 54 user responses to a survey, an average <b className='font-bold'>satisfaction rating of 3.74</b> was reported for users’ experience using Orion, alongside a <b className='font-bold'>51.9% interest rating in a potential redesign</b> for Orion. While the overall sentiment towards Orion isn’t negative, there’s a clear indication the the user experience is <b className='font-bold'>far from optimal</b>.</line>
                            <line>Those that cited a specific specific problem with Orion stated that their frustration stems from <b className='font-bold'>navigation issues, readability, and UI design.</b> These problems lead to confusion about things like registration dates, course requirements, and class information, which result in more support tickets and work for faculty members.</line>
                        </span>
                    </Body>

                    <Body flexdirection={'flex-col'}>
                        {/* ========================== SATISFACTION ==============================*/}
                        <div className='flex flex-col gap-4'>
                            <line className='w-full'>54 Survey Responses - <b className='font-bold'> "How Satisfied Are You With UTD's Orion?"</b>.</line>
                            <img className={`flex ${isMobile ? '' : 'px-20'} h-full select-none items-center justify-center`} src={"/assets/orion/SatisfactionBarChart.svg"}/>
                        </div>
                        {/* ========================== REDESIGN INTEREST ==============================*/}
                        <div className='flex flex-col gap-4 mt-10 w-full h-full items-center'>
                            <line className='w-full'>54 Survey Responses - <b className='font-bold'> "What best matches your thoughts on a redesign of Orion?"</b>.</line>
                            <div className={`flex ${isMobile ? 'flex-col' : 'flex-row px-20'} gap-4 items-center justify-center h-full w-full`}>
                                <div className='flex w-[clamp(200px,100%,400px)] h-[clamp(200px,10vh,400px)] items-center justify-center'>
                                    <img className={`flex ${isMobile ? '' : ''} select-none items-center justify-center`} src={"/assets/orion/RedesignPieChart.svg"}/>
                                </div>
                                <span className='flex flex-col gap-4 tinyText w-full'>
                                    {redesignData.map((item, index) => (
                                        <div className={`flex flex-row gap-2 items-center`}>
                                            <div className={`circle w-[15px] h-[15px]`} style={{backgroundColor: item.color}}/>
                                            {item.label}  
                                        </div>
                                    ))}
                                </span>
                            </div>
                        </div>
                        {/* ========================== PRIMARY USE ==============================*/}
                        <div className='flex flex-col gap-4 mt-10 w-full h-full items-center'>
                            <line className='w-full'>54 Survey Responses - <b className='font-bold'> "What Do You Primarily Use Orion For?"</b>.</line>
                            <div className={`flex ${isMobile ? 'flex-col' : 'flex-row px-20'} gap-4 items-center justify-center h-full w-full`}>
                                <div className='flex w-[clamp(200px,100%,400px)] h-[clamp(200px,10vh,400px)] items-center justify-center'>
                                    <img className={`flex ${isMobile ? '' : ''} select-none items-center justify-center`} src={"/assets/orion/PrimaryUsePieChart.svg"}/>
                                </div>
                                <span className='flex flex-col gap-4 tinyText w-full'>
                                    {primaryUseData.map((item, index) => (
                                        <div className={`flex flex-row gap-2 items-center w-full`}>
                                            <div className={`circle w-[15px] h-[15px]`} style={{backgroundColor: item.color}}/>
                                            <span className='flex w-full'>
                                                {item.label}
                                            </span>  
                                        </div>
                                    ))}
                                </span>
                            </div>
                        </div>
                        {/* ========================== USER QUOTES ==============================*/}
                        <div className='flex flex-col gap-4 mt-10 w-full h-full items-center'>
                            <line className='w-full'>30 Survey Responses - <b className='font-bold'> " “Do You Have Any Specific Problems Regarding Orion?"</b>.</line>
                            <div className={`flex ${isMobile ? 'flex-col' : 'flex-row px-20'} gap-4 items-center justify-center h-full w-full`}>
                                <div className='flex w-[clamp(200px,100%,400px)] h-[clamp(200px,10vh,400px)] items-center justify-center'>
                                    <img className={`flex ${isMobile ? '' : ''} select-none items-center justify-center`} src={"/assets/orion/ProblemPieChart.svg"}/>
                                </div>
                                <span className='flex flex-col gap-4 tinyText w-full'>
                                    {problemData.map((item, index) => (
                                        <div className={`flex flex-row gap-2 items-center w-full`}>
                                            <div className={`circle w-[15px] h-[15px]`} style={{backgroundColor: item.color}}/>
                                            <span className='flex w-full'>
                                                {item.label}
                                            </span>  
                                        </div>
                                    ))}
                                </span>
                            </div>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <line className='w-full font-bold'>User Quote Samples</line>
                            <img className={`flex ${isMobile ? '' : 'px-20'} h-full select-none items-center justify-center`} src={"/assets/orion/UserQuotes.svg"}/>
                        </div>
                    </Body>

                </div>
                {/* ============================ PROBLEM STATEMENT ===========================*/}
                <div className="flex flex-col justify-center items-center relative " id='problem'>
                    <span className={`text-white ${isMobile ? 'text-4xl' : 'text-5xl'} heading text-center`}>
                    PROBLEM STATEMENT
                    </span>
                    <Body flexdirection={"flex-col"}>
                        <span>
                            How might I help UTD students check and track their academic standing through class registration, coursework, and financial aid without having to spend too much time?  
                        </span>
                    </Body>
                </div>
                {/* ============================ PROJECT SCOPE ===========================*/}
                <div className="flex flex-col justify-center items-center relative " id='scope'>
                    <span className={`text-white ${isMobile ? 'text-4xl' : 'text-5xl'} heading text-center`}>
                    PROJECT SCOPE
                    </span>
                    <Body flexdirection={"flex-col"}>
                        <span>
                            The scope of this redesign project focuses on the student-facing web experience for enrollment and academic tracking. It won’t address problems such as mobile optimization, external services, or back-end performance, even though they were mentioned in user surveys. 
                            <li className='ml-4'>
                                This project is meant to be treated more as a proof-of-concept; mobile optimization can be easily translated from its desktop-counterparts when the main design problems are addressed.
                            </li>
                            <li className='ml-4'>
                                External services, i.e. any page that redirects the user outside of Orion, will not be redesigned as that would bubble the scope of this project out of proportion.                         
                            </li>
                        </span>
                    </Body>
                </div>
                {/* ============================ DESIGN PROCESS ===========================*/}
                <div className="flex flex-col justify-center items-center relative" id='Design Process'>
                    <span className={`text-white ${isMobile ? 'text-4xl' : 'text-5xl'} heading text-center`}>
                    DESIGN PROCESS
                    </span>
                    <Body flexdirection={"flex-col"}>
                        <span>
                            Coming from the user surveys, many didn’t feel too strongly about Orion’s design one way or another; most were just fine with how it is currently. However, the cited issues of Orion were enough to make over half of the responses state an interest in a redesign, even if the same users gave a satisfaction rating of 4-5. 
                        </span>
                        <span>
                            Since a majority of users didn’t feel a negative experience with Orion, I opted in for a more conservative approach; changing too much when it wasn’t asked for will only inconvenience users further. 
                        </span>
                    </Body>
                    {/* ========================== SIDEBAR ===============================*/}
                    <Body flexdirection={"flex-col"}>
                        <span className='font-bold bodyText text-left w-full' id='Sidebar'>
                            Design Process #1 - Sidebar
                        </span>
                        <span className=''>
                            Some of Orion’s problem with navigation can be pin pointed to its sidebar. In its current design, Orion’s sidebar only appears within a specific category's page, and constantly changes from one page to another. This forces users to constantly reassess what they’re looking at, leading to confusion and lots of back and forth. 
                            It also doesn’t help that many of the sidebar options are redundant; they lead to the same pages as other sidebar options. This leads to more clutter on the sidebar and inflates it to further confuse the user.
                        </span>
                        <ClickableImage image={"/assets/orion/SideBarSS1.png"}/>
                        <ClickableImage image={"/assets/orion/SideBarSS2.png"}/>
                        <span className=''>
                            One of my original ideas was to completely get rid of the sidebar, since I believed it was causing too much confusion with navigation, and letting the user navigate directly to the page they wanted to via the home screen would essentially make it obsolete.
                        </span>
                        <span>
                            However, I realized that this could make navigation even more inconvenient, as what would happen if the user wanted to switch to another page? They would have to redirect themselves back to the home screen in order to get to their desired page. 
                        </span>
                        <ClickableImage caption="Depicted: User Navigating to Graduation Page" image={"/assets/orion/SideBarSS3.svg"}/>                        
                        <ClickableImage caption="Depicted: User Now Wants to go to Another Page" image={"/assets/orion/SideBarSS4.svg"}/>
                        <span>
                            With this in mind, I decided to consider the other extreme, to always have a sidebar present with all the pages listed. This way, the user can quickly switch to another page they need to and it wouldn’t be constantly changing; letting them get accustomed to it.
                        </span>
                        <span>
                            It’s also important to group the sidebar options into separate categories, since the sidebar holds all possible pages, the user should be able to collapse categories to make things more compact. 
                        </span>
                        <ClickableImage caption='Finalized Sidebar!' image={"/assets/orion/SideBarSS5.png"}/>
                    </Body>
                    {/* ========================== HOME SCREEN ===============================*/}
                    <Body flexdirection={"flex-col"}>
                        <span className='font-bold bodyText text-left w-full' id='Home Screen'>
                            Design Process #2 - Home Screen
                        </span>
                        <span className=''>
                            One of the most important pages is the home page; this is the <b className='font-bold'>first thing</b> users see when they enter Orion, and what will lead them to the specific page they’re looking for. The problem with the existing design is that it <b className='font-bold'>immediately overwhelms</b> the user with these grid category buttons and doesn’t give them a <b className='font-bold'>clear direction</b> to go in to to find what they’re looking for. 
                        </span>
                        <span className=''>
                            This stems from the biggest problem about the home screen; there is <b className='font-bold'>no search bar</b>, at least a functional one. The current “search bar” is tucked away at the top of the screen with no clear indication of what it actually can search. And if it is even used, it will always give the user an error, so users are forced to comb through the boxes until they see what they need.                         
                        </span>
                        <ClickableImage caption="Orion Home Screen" image={"/assets/orion/HomeSS1.png"}/>
                        <ClickableImage caption="After Clicking on the Search Bar" image={"/assets/orion/HomeSS2.png"}/>
                        <span className=''>
                            In my design, I knew the <b className='font-bold'>search bar needed to be more prominent</b> and in the actual frame in order to better direct users. I initially thought to get rid of the category buttons in favor of a <b className='font-bold'>front-and-center search bar</b> to put emphasis on its importance, where entering a search query would populate the home screen with the buttons. However, I realized this could actually <b className='font-bold'>slow some users down</b> because if they already knew its location on the grid layout, it would be faster to scroll down and click on it than to manually search it up.                         
                        </span>
                        <ClickableImage caption="WIP Home Screen" image={"/assets/orion/HomeSS3.png"}/>                        
                        <ClickableImage caption="User shouldn't have to manually search for categories when they can just click the button from the start" image={"/assets/orion/HomeSS4.svg"}/>
                        <span>
                            Another problem is that the home screen doesn’t directly lead the user to where they actually want to go; it’s hidden underneath another layer, i.e. If I wanted to check my grades, I would need to click on the “My Academics” button, and then click on the “View My Grades” button on the sidebar just to get to the page. 
                        </span>
                        <ClickableImage image={"/assets/orion/HomeSS7.png"}/>
                        <HiArrowDown size={25} color='white'/>
                        <ClickableImage image={"/assets/orion/HomeSS8.png"}/>
                        <span>
                            To fix this, I also changed the grid layout to include all possible pages. This would clutter the screen more, but overall would be quicker if the user could just search up the page they need to go to instead of jumping through two screens to get there.
                        </span>
                        <ClickableImage image={"/assets/orion/HomeSS5.png"}/>
                        <HiArrowDown size={25} color='white'/>
                        <ClickableImage caption='Finalized Home Screen' image={"/assets/orion/HomeSS6.png"}/>
                    </Body>
                    {/* ========================== DEGREE AUDIT ===============================*/}
                    <Body flexdirection={"flex-col"}>
                        <span className='font-bold bodyText text-left w-full' id='Degree Audit'>
                            Design Process #3 - Degree Audit
                        </span>
                        <span className=''>
                            A heavily mentioned page from users in the survey was the degree audit page; a page that details all the necessary course, GPA, and hour requirements for students to graduate. Due to the fact that <b className='font-bold'>63% (34 responses)</b> of users stated that they <b className='font-bold'>rely on Orion for academic management</b>, this would be an incredibly important page to update. 
                        </span>
                        <span className=''>
                            The problem with the current degree audit page is that everything is <b className='font-bold'>too cluttered</b>: the course requirements awkwardly blend in with each other because of the small font size, lack of contrast, and the unnecessary amount of them. The courses listed for each requirement are also done so monotonously, only being in text, making it difficult to keep track of what is actually needed.
                        </span>
                        <ClickableImage caption="Requirement Categories" image={"/assets/orion/DASS1.svg"}/>
                        <ClickableImage caption="Specific Course Requirements" image={"/assets/orion/DASS2.png"}/>
                        <span className=''>
                            In my design, I knew that I needed to cut down on the number of dropdowns; a lot of these requirements could be grouped into one category. While this stuffs a lot into one category, it avoids the issue of being too fragmented and forcing the user to go back and forth on the page, which increases the likelihood of getting overwhelmed and lost.                          
                        </span>
                        <span>
                            I also needed to better incorporate the required courses so that the user isn’t forced to constantly go up the page, read the fine print, and compare with their courses against it one by one. On the same note, the courses in the table would have to be changed in the way it’s presented; it being stacked on top of each other with a full row of info makes the design vertically bloated and difficult to keep track of. 
                        </span>
                        <ClickableImage caption="Hovering over a specific course shows the hidden info" image={"/assets/orion/DASS4.gif"}/>
                        <span>
                            A key challenge with this page is that the original design is crammed, but for reasons that are a little out of its control. This is because the info the page is showing is all necessary; there’s little room to breathe because of the nature of the information. 
                        </span>
                        <span>
                            Because of this, I needed to compact and hide away some of the information underneath hover interactions in favor of a cleaner design that won’t make the user go cross-eyed. I do have to mention that the information I chose to hide away is based on my own biases of what I consider to be “more important”. 
                        </span>
                    </Body>
                </div>
                {/* ============================ DESIGN COMPARISONS ============================*/}
                <div className='flex flex-col gap-10 items-center justify-center' id='Design Comparisons'>
                    <div className="flex flex-col w-[60%] items-center justify-center relative">
                        <span className={`text-white ${isMobile ? 'text-4xl' : 'text-5xl'} heading text-center`}>
                            DESIGN COMPARISONS - QUICKFIRE
                        </span>
                        <div className={`flex flex-col justify-center items-center relative`}>
                            <ImageCarousel className="mt-5" images={comparisons} />
                        </div>
                    </div>
                    <Body flexdirection={'flex-col'}>
                        <span>
                            These are just a sample of the actual number of pages I redesigned. I really recommend checking out the prototype below as you’ll be able to view and compare the original design by clicking the green clock symbol on the navbar (and also I worked really hard on it :) ) .  
                        </span>
                    </Body>
                    <LinkBubble name="Prototype" image="/assets/general/FigmaLogo.svg" link="https://www.figma.com/proto/ScuPXqtK4eakkqE1rKASoU/UTD-Orion-Redesign?node-id=844-13780&p=f&t=hL5NGjtKEHM2PDEq-8&scaling=contain&content-scaling=responsive&page-id=844%3A12864&starting-point-node-id=844%3A13780&hide-ui=1"/>
                </div>
                {/* ============================ REFLECTION ===========================*/}
                <div className="flex flex-col justify-center items-center relative " id='reflection'>
                    <span className={`text-white ${isMobile ? 'text-4xl' : 'text-5xl'} heading text-center`}>
                    REFLECTION
                    </span>
                    <Body flexdirection={"flex-col"}>
                        <span className={`text-white font-normal ${isTinyMobile ? 'text-md' : isMobile ? 'text-lg' : 'text-lg'} `}>
                            I’m really happy with the way I approached this project; this was the first time I went out and gathered real responses from users and actually applied it to my design process and decision making. I’m also pleased with the way the final product turned out and (as naive as this probably sounds) I actually think that there might be a chance that UTD could pick this project up and turn it into a reality.
                        </span>
                        <span>
                            But, if there was one thing I’d do differently, it would be how I structured my user surveys. Throughout the project I found myself wishing I had written better questions that would’ve given me a lot more insight and allowed me to make decisions more confidently. 
                        </span>
                        <span>
                            Other than that, this was by far the most I’ve ever pushed my design skills and Figma knowledge. I wanted to emulate how I thought a “real” designer would actually handle this redesign, so in the Figma file there’s a relatively robust design system (that nobody else will use) that I made from scratch. 
                        </span>
                        <span>
                            The prototype also contains the most high-fidelity wireframes I’ve ever made, with interactions that have no business being as detailed as they are for a Figma file (i.e. a functioning search bar). While the interactions I stuffed into this prototype are admittedly unnecessary, I learned an incredible amount of just how far I can push Figma. I would even go as far as to say that I’m now an expert in it.
                        </span>
                        <span>
                            This project was a very important learning experience for me, and I’m so happy that I undertook it!
                        </span>
                    </Body>
                </div>
                {!isMobile && <div className={`fixed left-0 top-1/2 -translate-y-1/2 ml-4 z-100 flex flex-col font-normal w-fit pr-10 h-[150px] overflow-scroll hideScroll text-gray-400 ${!atBottom ? 'scroll-fade' : ''} `} onScroll={handleScroll}>
                    <Link href={'/orion/#introduction'} className='hover:text-white hover:scale-105 hover:translate-x-3 transition duration-300 '>
                        Introduction
                    </Link>
                    <Link href={'/orion/#background'} className='hover:text-white hover:scale-105 hover:translate-x-3 transition duration-300 '>
                        Project Background
                    </Link>
                    <Link href={'/orion/#constraints'} className='hover:text-white hover:scale-105 hover:translate-x-3 transition duration-300 '>
                        Constraints
                    </Link>
                    <Link href={'/orion/#R&D'} className='hover:text-white hover:scale-105 hover:translate-x-3 transition duration-300 '>
                        Research & Discovery
                    </Link>
                    <Link href={'/orion/#problem'} className='hover:text-white hover:scale-105 hover:translate-x-3 transition duration-300 '>
                        Problem Statement
                    </Link>
                    <Link href={'/orion/#scope'} className='hover:text-white hover:scale-105 hover:translate-x-3 transition duration-300 '>
                        Project Scope
                    </Link>
                    <Link href={'/orion/#Sidebar'} className='hover:text-white hover:scale-105 hover:translate-x-3 transition duration-300 '>
                        Design - Sidebar
                    </Link>
                    <Link href={'/orion/#Home Screen'} className='hover:text-white hover:scale-105 hover:translate-x-3 transition duration-300 '>
                        Design - Home Screen
                    </Link>
                    <Link href={'/orion/#Degree Audit'} className='hover:text-white hover:scale-105 hover:translate-x-3 transition duration-300 '>
                        Design - Degree Audit
                    </Link>
                    <Link href={'/orion/#Design Comparisons'} className='hover:text-white hover:scale-105 hover:translate-x-3 transition duration-300 '>
                        Design Comparisons
                    </Link>
                    <Link href={'/orion/#reflection'} className='hover:text-white hover:scale-105 hover:translate-x-3 transition duration-300 '>
                        Reflection
                    </Link>
                </div>}
            </div>
        </div>
    </div>
  )
}

export default OrionPage