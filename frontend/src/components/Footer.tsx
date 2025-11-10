'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation'

const Footer = () => {
  const pathname = usePathname();
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleHashLink = ( // If the user isn't on the home page, continue as normal, else, prevent the instant jump to section
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
    currPage: string
  ) => {
    if (pathname === currPage) {
      e.preventDefault();
      scrollToSection(id);
    }
  };

  return (
    <div className="flex h-fit bg-darkestBlue overflow-hidden flex-wrap-reverse justify-center ">
      <iframe className="flex min-w-[400px] h-[370px]" src="/assets/FishingAnimation.html"/>
      <div className="flex w-fit gap-20 justify-center mx-10 mt-20">
        <span className="flex flex-col font-mono text-2xl text-white gap-4">
          <Link href={'/about#header'} onClick={(e) => handleHashLink(e, 'header', "/about")}>
            <span className="underlineText">
              ABOUT
            </span>
          </Link>
          <Link href="/#projects" onClick={(e) => handleHashLink(e, 'projects', "/")}>
            <span className="underlineText">
              PROJECTS
            </span>
          </Link>
          <Link href="/#experience" onClick={(e) => handleHashLink(e, 'experience', "/")}>
            <span className="underlineText">
              EXPERIENCE
            </span>
          </Link>
          <Link href="/#contact" onClick={(e) => handleHashLink(e, 'contact', "/")}>
            <span className="underlineText">
              CONTACT
            </span>
          </Link>
        </span>
        <span className="flex flex-col font-mono text-2xl text-white gap-4">
          <Link href={'/nexus#header'} onClick={(e) => handleHashLink(e, 'header', "/nexus")}>
            <span className="underlineText">
              NEXUS
            </span>
          </Link>
          <Link href="/lore" onClick={(e) => handleHashLink(e, 'header', "/lore")}>
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