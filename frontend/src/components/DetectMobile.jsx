import React, {useState, useEffect} from 'react'

const DetectMobile = () => {

    const [windowDimensions, setwindowDimensions] = useState({ width: window.innerWidth, height: window.innerHeight })
    const [isMobile, setMobile] = useState(false)

    useEffect(() => {
        function handleResize() {
            setwindowDimensions({
                width: window.innerWidth,
                height: screen.height
            })
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    useEffect(() => {
        windowDimensions.width < 700 ? setMobile(true) : setMobile(false)
    }, [])

    useEffect(() => {
        if(isMobile) {
            document.body.style.overflow = 'hidden'
        }

        return () => {
            document.body.style.overflow = 'auto';
        }
    }, [isMobile])

    return (
        (isMobile &&
        <div className={`fixed w-full flex backdrop-brightness-20 z-100 items-center justify-center`} style={{ minHeight: '100vh' }}>
            <div className="text-white w-[70%] h-[20%] justify-center items-center bg-gradient-to-b from-darkestBlue to-darkerBlue p-10 rounded-2xl">
                <div className="flex w-full h-full justify-center flex-col text-center">
                    <span className="font-mono text-2xl font-black">
                        Hold It!
                    </span>
                    <span className="font-mono ">
                        It looks like you're using a mobile view, which isn't supported (yet). You can still continue, but don't expect things to look pretty (or function)!
                    </span>
                </div>
                <div className="w-full h-full flex flex-col justify-center items-center">
                    <img className="w-50 h-50 flex" src="/assets/Yamcha.svg"/>
                    <div onClick={() => {setMobile(false)}} className="h-[50px] w-[70%] flex justify-center items-center bg-blue rounded-xl cursor-pointer">
                        <span className="text-white font-mono font-black text-2xl">
                            Got It
                        </span>
                    </div>
                </div>
            </div>
        </div>)
    )
}

export default DetectMobile