import { useRef, useState } from "react"

const VideoCampus = () => {
const videoRef = useRef(null)
const [isPlaying, setIsPlaying] = useState(false)

const handleVideoClick = () => {
  if(videoRef.current.paused){
    videoRef.current.play()
    setIsPlaying(true)
  } else {
    videoRef.current.pause()
    setIsPlaying(false)
  }
}
  return (
    <div className="flex h-full">
    <div className="video-campus flex-3 w-full h-full overflow-hidden relative">
        <video 
          ref={videoRef}
          src="/assets/video/video-univIndo.mp4" 
          alt="video campus" 
          className="relative bg-center bg-no-repeat bg-cover object-cover w-full max-h-screen cursor-pointer"
          // preload="none"
          // controls
          loop
          playsInline
          onClick={handleVideoClick}
          />
          {/* <source src="/assets/video/video-univIndo.mp4" type="video/mp4" /> */}
          {!isPlaying && (
          <div 
            onClick={handleVideoClick}
            className="absolute inset-0 flex justify-center items-center bg-black/40 cursor-pointer pointer-events-auto"
            >
              <div className="bg-white/40 text-black text-2xl p-4 rounded-full w-15 h-15 flex justify-center items-center font-bold shadow-2xl transition transform hover:scale-110">
                ▶
              </div>
          </div>
          )}
    </div>  
    <div className="text-video">
        <h1 className="mb-10 leading-none">Live the UI Experience</h1>
        <p className="text-gray-700 text-2xl">Take a closer look at campus life, innovation, and the spirit of discovery.</p>
    </div>
    </div>
  )
}

export default VideoCampus
