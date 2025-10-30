import React from 'react'

const LinkBubble = ({link, name, image, className}) => {
  return (
    <a className={`${className} flex w-fit h-[50px] bg-darkBlue p-2 rounded-full justify-center transition duration-200 hover:scale-110`} target='_blank' rel="noopener noreferrer" href={link}>
        <img className="px-2 flex" src={image} style={{objectFit: 'contain'}}/>
        {name ? <h1 className="pr-2 flex items-center justify-center text-xl text-white font-mono font-bold" >
                  {name}
                </h1> 
              : 
                ""}

    </a>
  )
}

export default LinkBubble