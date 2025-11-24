'use client';

import Link from 'next/link';

const Footer = () => {

  return (
    <div className="flex h-fit bg-darkestBlue overflow-hidden flex-wrap-reverse justify-center ">
      <div className="flex w-full h-[50px] border-t border-black items-center justify-center ">
        <span className='font-mono text-white'>
          Website Designed and Developed with 💙 by Tommy
        </span>
      </div>
      <iframe className="flex min-w-[400px] h-[370px]" src="/assets/general/FishingAnimation.html"/>
      <div className="flex w-fit gap-20 justify-center mx-10 mt-20">
        <span className="flex flex-col font-mono text-2xl text-white gap-4">
          <Link href={'/about#header'} >
            <span className="underlineText">
              ABOUT
            </span>
          </Link>
          <Link href="/#projects">
            <span className="underlineText">
              PROJECTS
            </span>
          </Link>
          <Link href="/#experience">
            <span className="underlineText">
              EXPERIENCE
            </span>
          </Link>
          <Link href="/#contact">
            <span className="underlineText">
              CONTACT
            </span>
          </Link>
        </span>
        <span className="flex flex-col font-mono text-2xl text-white gap-4">
          <Link href={'/nexus#header'}>
            <span className="underlineText">
              NEXUS
            </span>
          </Link>
          <Link href="/lore">
            <span className="underlineText">
              LORE
            </span>
          </Link>
        </span>
       <span className="flex flex-col font-mono text-2xl text-white gap-4">
          <a className='' target='_blank'  rel="noopener noreferrer" href="https://github.com/YesMyNameIsMe">
            <span className="underlineText">
              GITHUB
            </span>
          </a>
          <a className='' target='_blank'  rel="noopener noreferrer" href="https://www.linkedin.com/in/hrefmmy-nguyen-ba899423a">
            <span className="underlineText">
              LINKEDIN
            </span>
          </a>
          <div>
            <span className="underlineText">
              EMAIL 
            </span>            
          </div>
        </span>
      </div>
    </div>
  )
}

export default Footer