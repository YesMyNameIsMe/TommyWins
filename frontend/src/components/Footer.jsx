import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';

const Footer = () => {
  return (
    <div className="flex h-fit bg-darkestBlue overflow-hidden flex-wrap-reverse justify-center ">
      <iframe className="flex min-w-[400px] h-[370px]" src="/assets/FishingAnimation.html"/>
      <div className="flex w-fit gap-20 justify-center mx-10 mt-20">
        <span className="flex flex-col font-mono text-2xl text-white gap-4">
          <Link to={'/about#header'}>
            <span className="underlineText">
              ABOUT
            </span>
          </Link>
          <Link to="/#projects">
            <span className="underlineText">
              PROJECTS
            </span>
          </Link>
          <Link to="/#experience">
            <span className="underlineText">
              EXPERIENCE
            </span>
          </Link>
          <Link to="/#contact">
            <span className="underlineText">
              CONTACT
            </span>
          </Link>
        </span>
        <span className="flex flex-col font-mono text-2xl text-white gap-4">
          <Link to={'/nexus'}>
            <span className="underlineText">
              NEXUS
            </span>
          </Link>
          <Link to="/lore">
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
          <a className='' target='_blank'  rel="noopener noreferrer" href="https://www.linkedin.com/in/tommy-nguyen-ba899423a">
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