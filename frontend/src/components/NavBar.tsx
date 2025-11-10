'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation'

function NavBar() {
  const pathname = usePathname();
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleHashLink = ( // If the user isn't on the home page, continue as normal, else, prevent the instant jump to section
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
    currPage?: string
  ) => {
    if (pathname === currPage) {
      e.preventDefault();
      scrollToSection(id);
    }
  };

  return (
    <div className="h-[85px] w-full justify-center flex flex-row bg-darkestBlue items-center fixed z-50">
      <div className="w-1/5 flex justify-center">
        <Link href="/about#header" onClick={(e) => handleHashLink(e, 'header', "/about")} className="flex w-1/5 justify-center text-white font-bold text-3xl font-mono">
          <span className="underlineText">
            ABOUT
          </span>
        </Link>
      </div>
      <div className="w-1/5 flex justify-center">
        <Link href="/#projects" onClick={(e) => handleHashLink(e, 'projects', '/')} className="flex w-1/5 justify-center text-white font-bold text-3xl font-mono">
          <span className="underlineText">
            PROJECTS
          </span>
        </Link>
      </div>
      <Link href="/" onClick={(e) => handleHashLink(e, 'header', '/')} className="w-1/5 flex justify-center">
        <img className="scale-80" src="/assets/NavBarLogo.svg" alt="Logo" style={{cursor: 'pointer'}} />
      </Link>
      <Link href="/#experience" onClick={(e) => handleHashLink(e, 'experience', '/')} className="flex w-1/5 justify-center text-white font-bold text-3xl font-mono">
        <span className="underlineText">
          EXPERIENCE
        </span>
      </Link>
      <Link href="/" onClick={(e) => handleHashLink(e, 'contact', '/')} className="flex w-1/5 justify-center text-white font-bold text-3xl font-mono">
        <span className="underlineText">
          CONTACT
        </span>
      </Link>
    </div>
  );
}

export default NavBar;