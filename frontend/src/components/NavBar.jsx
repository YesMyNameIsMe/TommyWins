import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';

function NavBar() {

  return (
  <div className="h-[85px] w-full justify-center flex flex-row bg-darkestBlue items-center fixed z-50">
    <div className="w-1/5 flex justify-center">
      <Link to={'/about'} className="text-white font-bold text-3xl" style={{fontFamily: 'monospace'}}>
        <underlineText>
          ABOUT
        </underlineText>
      </Link>
    </div>
    <div className="w-1/5 flex justify-center">
      <Link to="/#projects" className="text-white font-bold text-3xl" style={{fontFamily: 'monospace'}}>
        <underlineText>
          PROJECTS
        </underlineText>
      </Link>
    </div>
    <Link to="/#header" className="w-1/5 flex justify-center">
      <img className="scale-80" src="/assets/NavBarLogo.svg" style={{cursor: 'pointer'}} />
    </Link>
    <Link to="/#experience" className="w-1/5 flex justify-center">
      <text className="text-white font-bold text-3xl" style={{fontFamily: 'monospace'}}>
        <underlineText>
          EXPERIENCE
        </underlineText>
      </text>
    </Link>
    <Link to="/#contact" className="w-1/5 flex justify-center">
      <text className="text-white font-bold text-3xl" style={{fontFamily: 'monospace'}}>
        <underlineText>
          CONTACT
        </underlineText>
      </text>
    </Link>
  </div>
  )
}

export default NavBar