import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';

function NavBar() {

  return (
  <div className="h-[85px] w-full justify-center flex flex-row bg-darkestBlue items-center fixed z-50">
    <div className="w-1/5 flex justify-center">
      <Link to={'/about'} className="flex w-1/5 justify-center text-white font-bold text-3xl" style={{fontFamily: 'monospace'}}>
        <span className="underlineText">
          ABOUT
        </span>
      </Link>
    </div>
    <div className="w-1/5 flex justify-center">
      <Link to="/#projects" className="flex w-1/5 justify-center text-white font-bold text-3xl" style={{fontFamily: 'monospace'}}>
        <span className="underlineText">
          PROJECTS
        </span>
      </Link>
    </div>
    <Link to="/#header" className="w-1/5 flex justify-center">
      <img className="scale-80" src="/assets/NavBarLogo.svg" style={{cursor: 'pointer'}} />
    </Link>
    <Link to="/#experience" className="flex w-1/5 justify-center text-white font-bold text-3xl" style={{fontFamily: 'monospace'}}>
      <span className="underlineText">
        EXPERIENCE
      </span>
    </Link>
    <Link to="/#contact" className="flex w-1/5 justify-center text-white font-bold text-3xl" style={{fontFamily: 'monospace'}}>
      <span className="underlineText">
        CONTACT
      </span>
    </Link>
  </div>
  )
}

export default NavBar