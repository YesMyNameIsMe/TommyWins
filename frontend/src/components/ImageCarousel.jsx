import React, { useState } from 'react'
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";

const ImageCarousel = ({className, images}) => {

    const [currentIndex, setIndex] = useState(0);

    const goToPrev = () => {
        if(currentIndex !== 0) {
            setIndex(prevIndex => prevIndex - 1)
        } else {
            setIndex(images.length - 1)
        }
    }

    const goToNext = () => {
        if(currentIndex === images.length - 1) {
            setIndex(0)
        } else {
            setIndex(prevIndex => prevIndex + 1)
        }
    }

    const goToimage = (imageIndex) => {
        setIndex(imageIndex)
    }

    return (
        <div className={`${className} flex w-full justify-center items-center max-h-[640px] select-none relative`}> {/* Carousel Container */}
            <HiArrowCircleLeft className="absolute -left-20 cursor-pointer" size={40} onClick={goToPrev} color='white'/>
                {/* Holds Overflowing Images */}
                <div className="flex h-full w-full overflow-hidden">
                    {/* Contains Images in a Row */}
                    <div className="h-full flex flex-row transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {images.map((image, index) => (
                            // Image Container
                            <div className="min-w-full h-full flex flex-col justify-center items-center rounded-xl" key={index}>
                                <div className="w-full h-[80%] overflow-hidden rounded-xl mb-4">
                                  <img className="w-full h-full object-cover" src={image.src} alt={image.desc || `slide-${index}`} />
                                </div>
                                <span className="text-gray-300 font-mono text-lg mt-3">{image.desc}</span>
                            </div>
                        ))}
                    </div>
                </div>
            <HiArrowCircleRight className="absolute -right-20 cursor-pointer" size={40} onClick={goToNext} color='white'/>
            
            {/* Dot Container */}
            <div className="absolute w-full justify-center flex -bottom-5 gap-5">
                {/* Dots */}
                {images.map((image, imageIndex) => (
                    <div
                      className={`rounded-full h-[20px] w-[20px] cursor-pointer ${imageIndex === currentIndex ? 'bg-white' : 'bg-gray-500'}`}
                      key={imageIndex}
                      onClick={() => {goToimage(imageIndex)}}
                    />
                ))}
            </div>
        </div>
    )
}

export default ImageCarousel