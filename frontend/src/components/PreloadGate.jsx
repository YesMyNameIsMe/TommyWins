'use client'

import { usePreloader } from '@/components/PreloaderUse'
import PreloadScreen from '@/components/PreloadScreen';
import React, {useState} from 'react'
import { useMobile } from '@/context/mobileContext';


export default function PreloadGate({ children }) {
    const {isMobile} = useMobile()

    const ASSETS = {
        images: [!isMobile && "/assets/landingpage/HeroPageMe.svg", 
                !isMobile && "/assets/orion/OrionLogo.svg", "/assets/nexus/NexusLogo.svg",
                ],
        videos: [!isMobile && "/assets/landingpage/HeaderBG-Dark.webm", 
                 !isMobile && "/assets/landingpage/HeaderBGTest.webm"]
    };

    const { progress, ready } = usePreloader(ASSETS);
    const [removed, setRemoved] = useState(false);

    return (
    <>
        {children}
        {!removed && (
        <div onTransitionEnd={() => ready && setRemoved(true)}>
            <PreloadScreen progress={progress} hidden={ready} />
        </div>
        )}
    </>
    );
}