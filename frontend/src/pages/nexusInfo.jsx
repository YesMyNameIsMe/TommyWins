import React from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, delay, motion } from 'framer-motion'

const NexusInfo = () => {
  return (
    <div
      className="flex flex-col w-full h-full bg-darkBlue bg-center bg-cover items-center justify-center px-40 py-40"
      style={{ backgroundImage: 'url("/assets/MoreInfoBG.svg")' }}
    >
        <span className="heading text-5xl text-white justify-center">
            More On Nexus 
        </span>
        <div className="flex w-full min-w-[700px] h-fit items-center justify-center rounded-xl drop-shadow-xl bg-gradient-to-b from-darkBlue to-darkestBlue mt-5 px-10 py-10 overflow-hidden">
            {/* ----------------------------------------- TEXT ----------------------------------------- */}
            <motion.div className="flex flex-col w-full h-full justify-center items-center" initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.7}}>
                <div className='flex flex-col text-white font-mono text-lg gap-2'>
                    <Link to="/nexus" className="hover:underline text-xl font-mono w-fit text-white flex mb-5"> ← Take Me Back </Link>
                    {/* Paragraph 1 */}
                    <h1 className="font-black text-3xl">
                        How Did I Get Here?
                    </h1>
                    <span className=''>
                        Directly after my {' '}
                        <Link to="/lore" className='font-black text-blue-300 hover:underline'>
                            previous project
                        </Link>
                        , I tried to find another similar oppurtunity because it was such a blast to be able to work on it. I decided that the natural course of action was to move on to the {' '}
                        <a className='font-black text-blue-300 hover:underline' href="https://acmutd.co/development" target='_blank' rel="noopener noreferrer"> Development </a> 
                        {' '} branch for ACM, which was the organization that hosted {' '}
                        <a className='font-black text-blue-300 hover:underline' href="https://acmutd.co/projects" target='_blank' rel="noopener noreferrer">{' '}Projects</a>
                        <span>
                            {' '} (Where I worked on my previous project). During that time, the Director of Development took an interest in my designs, and was more than happy to let me on board. After the interviewing process, I joined, as the lead designer, Nexus. Because I joined after the concept was approved for development around a year before, there was already a pre-existing design. However, I was given total free-reign on design choices. I looked at the design-at-the-time, and created multiple different screens as a proof-of-concept. 
                        </span>
                    </span>
                    {/* Paragraph 2 */}
                    <h1 className="font-black text-3xl ">
                        My Process
                    </h1>
                    <div className="flex flex-row items-center">
                        <span className='flex w-3/5 mr-4'>
                            Most of the designs I made were created to fit into the pre-existing aesthetic of Nexus, which was a very sanitized and clean look. However, one design was a complete divergence from the original, and it was the style and aesthetic I developed from when I worked on my previous project.
                            After each design was presented to the leads of the division, it was agreed that the latter design was the favorite; and I couldn’t have been happier. It meant that I was able to stretch my creative/artistic bones again by creating unique characters, backgrounds, and miscellaneous pieces.
                        </span>
                        {/* Image */}
                        <div className="flex flex-col w-2/5 ">
                            <img className="flex h-full rounded-xl border-2 border-blue" src='/assets/OldNexusImage.png'/>
                            <span className="text-gray-500 text-center mt-2"> Original Landing Page for Nexus </span>
                        </div>
                    </div>
                    <div className="flex flex-row w-full mt-4 items-center justify-center">
                        {/* Image */}
                        <div className="flex flex-col w-2/5">
                            <img className="flex w-full rounded-xl border-2 border-blue" src='/assets/ConceptNexusImage.png'/>
                            <span className="text-gray-500 text-center mt-2"> Concept Design For Nexus </span>
                        </div>
                        <div className="flex flex-col w-3/5 ml-4">
                            <span className='flex overflow-hidden'>
                                This was a bit of a double-edged-sword, though, since it meant for a total re-design of all the pages, but not a single moment went by where I was unhappy because I was having so much fun designing everything.  
                            </span>
                            {/* Paragraph 3 */}
                            <h1 className="font-black text-3xl mt-2">
                                Reflection
                            </h1>
                            <span className='flex overflow-hidden mt-2'>
                                I'm incredibly grateful for the oppurtunity for being able to work on Nexus - I've felt my skills grow ten-fold. I've learned that the little things are what really elevate a design; an intentional design choice that the user may overlook still can still improve their overall satisfaction. Designs that can shave even seconds off of a process can really build up in the end.
                            </span>
                        </div>
                    </div>
                    <span>
                         I've also seen that my skills in overall graphics have improved due to being able to create so many drawings; and I do believe that some bells and whistles can really improve a website's presentation.
                    </span>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default NexusInfo