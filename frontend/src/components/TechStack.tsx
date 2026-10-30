'use-client'

import React from 'react'
import { useMobile } from '@/context/mobileContext'

interface techStackProps {
    block: Array<{src: string, desc: string}>,
}

const TechStack = ({block}: techStackProps) => {

    const {isMobile} = useMobile()

    return (
        // Removed flex, items-center, and justify-between. Kept only grid properties.
        <div className={`w-full h-full rounded-xl ${isMobile ? 'grid-cols-1' : 'grid-cols-3'} grid gap-6 p-6 drop-shadow-xl`}>
            {block.map((item, index) => (
                <div className="w-full h-[100px] flex flex-row items-center justify-start text-start" key={index}>
                    {/* Replaced min/max constraints with strict w-[100px] h-[100px] */}
                    <img className={`w-[100px] h-[100px] object-contain rounded-2xl shrink-0`} src={item.src} alt={item.desc} />
                    <span className='text-surface-contrast text-2xl font-bold ml-6 flex-wrap flex pr-10'> 
                        {item.desc}
                    </span>
                </div>
            ))} 
        </div>
    )
}

export default TechStack