'use client'

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface WindowDimensions {
	width: number;
	height: number;
}

interface MobileContextType {
	isMobile: boolean;
	isTinyMobile: boolean;
	windowDimensions: WindowDimensions;
}

const MobileContext = createContext<MobileContextType | undefined>(undefined);

export const MobileProvider = ({ children }: { children: ReactNode }) => {
	const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>({ width: 1920, height: 1080 });
	const [isMobile, setIsMobile] = useState(false);
	const [isTinyMobile, setTinyMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setWindowDimensions({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	useEffect(() => {
		setIsMobile(windowDimensions.width < 900);
		setTinyMobile(windowDimensions.width < 500);
	}, [windowDimensions.width]);

	return (
		<MobileContext.Provider value={{ isMobile, isTinyMobile, windowDimensions }}>
			{children}
		</MobileContext.Provider>
	);
};

export const useMobile = () => {
	const context = useContext(MobileContext);
	if (!context) {
		throw new Error('useMobile must be used within a MobileProvider');
	}
	return context;
};
