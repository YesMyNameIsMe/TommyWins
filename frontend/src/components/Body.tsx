import React from 'react'
import { useMobile } from '@/context/mobileContext'

function Body({ children, flexdirection }: { children: React.ReactNode, flexdirection: String }) {

    const {isMobile} = useMobile();
    const {isTinyMobile} = useMobile();

    return (
        <div className={`flex ${flexdirection} items-center justify-center relative min-w-[300px] w-[60%] gap-4 min-h-[10%] bg-darkestBlue border-darkBlue border-2 mt-5 p-6 rounded-2xl
                        ${isTinyMobile ? 'text-md' : isMobile ? 'text-lg' : 'text-lg'} text-white font-normal`}>        
            {children}
        </div>
    )
}

export default Body