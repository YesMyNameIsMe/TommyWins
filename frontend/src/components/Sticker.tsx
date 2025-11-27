'use-client'

import React, {useEffect, useMemo, useState} from 'react'
import { useScreen } from '@/context/screenContext'

interface StickerProps {
    src: string
    className: string
}

const Sticker = ({src, className}: StickerProps) => {

  const MIN_SCALE = 0.4;
  const MAX_SCALE = 0.9;
  const REFERENCE_WIDTH = 1920;
  const screenWidth = useScreen()

  const scaleFactor = useMemo(() => {
    const ratio = screenWidth/REFERENCE_WIDTH 
    let calculatedScale = MIN_SCALE + (ratio * 0.4)

    return Math.min(calculatedScale, MAX_SCALE)
  }, [screenWidth])

  return (
    <img className={`${className} absolute`} src={src} style={{transform: `scale(${scaleFactor})`, transformOrigin: 'center'}}/>
  )
}

export default Sticker