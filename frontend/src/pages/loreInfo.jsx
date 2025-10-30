import React from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, delay, motion } from 'framer-motion'

const LoreInfo = () => {
  return (
    <div
      className="flex flex-col w-full h-full bg-darkBlue bg-center bg-cover items-center justify-center px-40 py-40"
      style={{ backgroundImage: 'url("/assets/MoreInfoBG.svg")' }}
    >
        <heading className="text-5xl text-white justify-center">
            More On Lore 
        </heading>
        <div className="flex w-full min-w-[700px] h-fit items-center justify-center rounded-xl border-4 border-blue bg-gradient-to-b from-darkBlue to-darkestBlue mt-5 px-10 py-10">
            {/* ----------------------------------------- TEXT ----------------------------------------- */}
            <motion.div className="flex flex-col w-full h-full justify-center items-center" initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.7}}>
                <div className='flex flex-col text-white font-mono text-lg gap-2'>
                    <Link to="/lore" className="hover:underline text-xl font-mono w-fit text-white flex mb-5"> ← Take Me Back </Link>
                    {/* Paragraph 1 */}
                    <h1 className="font-black text-3xl">
                        How Did I Get Here?
                    </h1>
                    <span className=''>
                        Getting to work on Lore involved going through an application process for {' '}
                        <a className='font-black text-blue-300 hover:underline' href="https://acmutd.co/projects" target='_blank' rel="noopener noreferrer">ACM Projects</a>
                        <span>
                            , which was pretty competitive with over 1000+ applicants! I chose to be apart of the frontend, as I wasn't too thrilled about the thought of being a backend developer. 
                        </span>
                    </span>
                    {/* Paragraph 2 */}
                    <h1 className="font-black text-3xl ">
                        My Process
                    </h1>
                    <div className="flex flex-row items-center">
                        <span className='flex w-3/5 mr-4'>
                            At first, I didn’t have a clear direction I wanted to head towards when designing Lore. This was mostly due to the fact that it was my first *real* project; which I say because there was an expectation of performance from me that I’ve never had to carry before when working on a project.
                            But, after many trial and error, I landed on an aesthetic that played into maximizing my creativity and artistic skills, which I carry on as my main design philosophy to this day. Lore was meant to be a game, so I wanted to make all the UI and graphics to be playful and bursting with personality. I made numerous animations, chose sound effects/music, and created UI designs that reflected a party-game vibe. 
                        </span>
                        {/* Image */}
                        <div className="flex flex-col w-2/5 relative">
                            <img className="absolute -top-20 -right-10 w-[120px]" src="/assets/LoreReadAnim.gif"/>
                            <img className="flex h-full rounded-xl border-2 border-blue" src='/assets/Sketches.png'/>
                            <span className="text-gray-500 text-center mt-2"> Concept sketches for Lore </span>
                        </div>
                    </div>
                    <div className="flex flex-row w-full mt-4">
                        {/* Image */}
                        <div className="flex flex-col w-2/5 items-center justify-center relative">
                            <div className="flex flex-row justify-between rounded-xl">
                                <img className="flex rounded-xl border-2 border-blue" src='/assets/LorePresNight.png'/>
                                <img className="absolute -bottom-0 -left-20 w-[180px]" src="/assets/LoreWaitAnim.gif"/>
                            </div>
                            <span className="text-gray-500 text-center mt-2"> Presentation Night! </span>
                        </div>
                        <div className="flex flex-col w-3/5 ml-4">
                            {/* Paragraph 3 */}
                            <h1 className="font-black text-3xl ">
                                Reflection
                            </h1>
                            <span className='flex overflow-hidden mt-2'>
                                The main struggle I faced when working on Lore was finding a way to integrate my designs into actual code that could emulate what I wanted to achieve, such as animations or backgrounds. This led to me experimenting with lots of different libraries, tools, and software that could achieve my goals - and I’ve grown exponentially from that. And although we were just a hair off of winning the 
                                design award, it was an invaluable experience that kick started my dev journey.
                            </span>
                        </div>
                    </div>
                    <span>
                    </span>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default LoreInfo