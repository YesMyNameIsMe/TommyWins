import {React, useState, useRef, useEffect} from 'react'
import { HashLink as Link } from 'react-router-hash-link';

function ProjectComponent(props) {

    const [isHovered, setHovered] = useState(false)

    return (
        <Link to={props.link} className={`flex flex-col relative w-[300px] min-h-[200px] bg-gradient-to-b from-darkestBlue to-darkBlue drop-shadow-xl rounded-xl p-6
                        text-5xl font-mono font-black text-white ${isHovered ? '' : 'overflow-hidden'}`} 
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}>
            {props.title}
            <img className={`absolute -top-10 -right-0 w-[140px] h-[140px] transition duration-300 ${isHovered ? 'scale-100 rotate-0' : 'scale-90 rotate-12'}`} src={props.img}/>
            <h1 className="mt-8 text-lg font-normal text-white">
                {props.description}
            </h1>
        </Link>
    )
}

export default ProjectComponent