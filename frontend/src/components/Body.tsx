import React from 'react'
import { useMobile } from '@/context/mobileContext'

function Body({ children, flexdirection, className }: { children: React.ReactNode, flexdirection: String, className?: String }) {

    const {isMobile} = useMobile();
    const {isTinyMobile} = useMobile();

    return (
        <div className={`flex w-full ${flexdirection} items-center justify-center relative gap-4 ${className}
                        ${isTinyMobile ? 'text-md' : isMobile ? 'text-lg' : 'text-lg'}`}>        
            {children}
        </div>
    )
}

export default Body