import React, { useRef, useState } from 'react'

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedVideos, setLoadedVideos] = useState(0);
    
    const totalVideos = 3;
    const nextVideoRef = useRef(null)
    const handelVideoLoad= ()=>{
        setLoadedVideos ((previewLoadedVideos)=> previewLoadedVideos + 1)
    }
    //  0 % 4 = 0+ 1 = 1
    // 1 % 4 = 1 + 1 = 2
    // 2 % 4 = 2 + 1 = 3
    // 3 % 4 = 3 + 1 = 4
    // 4 % 4 = 0 + 1 = 1    calculation for video index how to change video after click , because of , every click index was +1 
    const upcomingVideoIndex = (currentIndex % totalVideos) + 1;
    const handelMiniVideo=()=>{
        setHasClicked(true);
        setCurrentIndex(upcomingVideoIndex);
    }
    
    const getVideoSrc = (index)=>`videos/hero-${index}.mp4`
  return (
    <div className='relative h-dvh w-screen overflow-x-hidden'>
      <div className="relative z-10 h-dvh overflow-hidden rounded-lg bg-blue-75" id="video-frame">
        <div>
            <div className='mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer rounded-lg overflow-hidden'>
                <div onClick={handelMiniVideo} className='origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100'>
                    <video
                    src={getVideoSrc(currentIndex + 1)}
                    ref={nextVideoRef}
                    loop
                    muted
                    id='current-video'
                    className='size-64 origin-center scale-150 object-cover object-center '
                    onLoadedData={handelVideoLoad}
                    />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
