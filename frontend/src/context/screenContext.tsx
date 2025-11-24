'use client'

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface ScreenContextType {
  windowWidth: number;
}

const ScreenContext = createContext<ScreenContextType | undefined>(undefined)

export const ScreenProvider = ({children} : { children: ReactNode}) => {
    const [windowWidth, setWindowWidth] = useState(1920)

    useEffect(() => {
        // Set initial width after mount to avoid hydration mismatch
        setWindowWidth(window.innerWidth)

        const handleResize = () => {
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <ScreenContext.Provider value={{windowWidth}}>
            {children}
        </ScreenContext.Provider>
    )
}

export const useScreen = () => {
    const context = useContext(ScreenContext)
    if (!context) {
        throw new Error('useScreen must be used within a ScreenProvider');
    }
    return context.windowWidth
}