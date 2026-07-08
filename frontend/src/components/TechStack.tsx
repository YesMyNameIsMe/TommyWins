'use-client'

import React from 'react'
import { useMobile } from '@/context/mobileContext'

interface techStackProps {
    block: Array<{src: string, desc: string}>,
}

const TechStack = ({block}: techStackProps) => {

    const {isMobile} = useMobile()

    return (
        <div className={`flex w-full items-center justify-between h-full rounded-xl ${isMobile ? 'grid-cols-1' : 'grid-cols-3'} grid gap-6 p-6 drop-shadow-xl`}>
            {block.map((item, index) => (
                <div className=" w-full h-[100px] flex flex-row items-center justify-start text-start" key={index}>
                    <img className={`min-w-[100px] max-w-full max-h-full object-contain rounded-2xl`} src={item.src}/>
                    <span className='text-surface-contrast text-2xl font-bold ml-6 flex-wrap flex pr-10'> 
                        {item.desc}
                    </span>
                </div>
            ))} 
        </div>
    )
}

export default TechStack