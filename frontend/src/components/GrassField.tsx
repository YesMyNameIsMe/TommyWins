'use client';

import { useState, useEffect, useRef, JSX } from 'react';
import HoppingFish from './HoppingFish';
import { useTheme } from '@/context/themeContext';
import { AnimatePresence, motion } from 'motion/react';

interface FishInstance {
  id: number;
  startingX: number;
}

function GrassField() {

    const clickSound = '/assets/about/splat.mp3';
    const {theme} = useTheme()
    const containerRef = useRef<HTMLDivElement>(null);
    const [containerWidth, setContainerWidth] = useState(1);
    const [containerHeight, setContainerHeight] = useState(1);
    const [fish, setFish] = useState<FishInstance[]>([]); 
    const [handVisible, setHandVisible] = useState(false)
    const [handState, setHandState] = useState(theme=='dark' ? '/assets/about/FishButtonHand-Dark.png' : '/assets/about/FishButtonHand.png')
    const nextId = useRef(0); 
    const [alert, setAlert] = useState(false)

    const playSound = () => {
        const audio = new Audio(clickSound);
        audio.play().catch(error => {
        console.error("Playback failed:", error);
        });
    };

    useEffect(() => {
        if (!containerRef.current) return;

        setContainerWidth(containerRef.current.clientWidth);
        setContainerHeight(containerRef.current.clientHeight);

        const observer = new ResizeObserver((entries) => {
        const { width, height } = entries[0].contentRect;
        setContainerWidth(width);
        setContainerHeight(height);
        });
        observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    const handleAlert = () => {
      setTimeout(() => setAlert(false), 3000)
    }

    useEffect(() => {
        if (containerWidth > 0 && fish.length === 0) {
        setFish([{ id: nextId.current++, startingX: containerWidth / 2 }]);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [containerWidth]);

    const spawnFish = () => {
        setFish((prev) => [
        ...prev,
        { id: nextId.current++, startingX: containerWidth/2 }, 
        ]);
    };

    useEffect(() => {
        {theme=='dark' ? setHandState('/assets/about/FishButtonHand-Dark.png') : setHandState('/assets/about/FishButtonHand.png')}
    }, [theme])

    const yMin = containerHeight/1.4; 
    const yMax = containerHeight; 

    return containerWidth > 0 && containerHeight > 0 ? (
        <div ref={containerRef} className="relative w-full h-full">

            <AnimatePresence>
                {alert && 
                    <motion.div className='fixed -bottom-10 left-1/2 -translate-x-1/2 z-150 w-[40%] min-w-[300px]' initial={{y:window.innerHeight}} animate={{y: -10}} exit={{y: window.innerHeight}} transition={{duration: 0.7}}>
                        <img src={'/assets/about/EnoughFish.svg'}/>
                    </motion.div>}
            </AnimatePresence>
            <div className="w-[10%] min-w-[100px]  absolute bottom-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex items-center justify-center">
                <img
                    src={theme=='dark' ? '/assets/about/FishButton-Dark.png' : '/assets/about/FishButton.png'}
                    className="cursor-pointer"
                    onMouseEnter={() => setHandVisible(true)}
                    onMouseLeave={() => setHandVisible(false)}
                    onMouseDown={() => {theme=='dark' ? setHandState('/assets/about/FishButtonHandPress-Dark.png') : setHandState('/assets/about/FishButtonHandPress.png')}}
                    onMouseUp={() => {theme=='dark' ? setHandState('/assets/about/FishButtonHand-Dark.png') : setHandState('/assets/about/FishButtonHand.png')}}
                    onClick={() => {if(fish.length <= 20) 
                                        {
                                            playSound()
                                            spawnFish();
                                        } else {
                                            setAlert(true)
                                            handleAlert()
                                        }
                                    }}
                />
                {handVisible && 
                <img
                    src={handState}
                    className="absolute pointer-events-none top-10 -right-10"
                />}
            </div>

            {fish.map((f) => (
                <HoppingFish
                key={f.id}
                containerWidth={containerWidth}
                yMin={yMin}
                yMax={yMax}
                startingX={f.startingX}
                />
            ))}

            <div className='flex w-full h-screen -z-1'>
                <img src={`${theme=='dark' ?  "/assets/landingpage/GrassPlains-Dark.png" : "/assets/landingpage/GrassPlains-Light.png"}`} className="w-full object-cover h-full flex" />
            </div>    
        </div>
    ) : null;

}

export default GrassField;