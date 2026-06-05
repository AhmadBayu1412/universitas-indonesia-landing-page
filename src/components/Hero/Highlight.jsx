
// LOGIC SLIDER 
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import Navbar from "./Navbar"
import { useRef, useState } from "react"

gsap.registerPlugin(useGSAP);

const DATA_SLIDES = [
    {id: 1, image: "/assets/images/illustration1.png", text: "Perpustakaan UI Perkuat Kolaborasi Dan Transformasi Digital Di Forum Aunilo Filipina" },
    {id: 2, image: "/assets/images/illustration2.png", text: "Mahasiswa UI Asah Diplomasi di Ajang Bergengsi Harvard World MUN 2026"},
    {id: 3, image: "/assets/images/illustration3.png", text: "Rektor UI Paparkan Capaian Kinerja 2025 Dalam Sidang Terbuka MWA UI"},
    {id: 4, image: "/assets/images/illustration4.png", text: "Usai Teken LOI di Tiongkok, UI dan Shanghai Cangyou Perkuat Kolaborasi Melalui MOU"},
]

const Highlight = () => {
const [currentIndex, setCurrentIndex] = useState(0)

const sliderContainerRef = useRef(null) 
const sliderWrapperRef = useRef(null) 
const timerRef = useRef(null) 

useGSAP(() => {
    if(timerRef.current) timerRef.current.kill()

    gsap.to(sliderWrapperRef.current, {
        xPercent: -100 * currentIndex,
        duration: 0.8,
        ease: "power2.inOut",
        onComplete: () => {
            timerRef.current = gsap.delayedCall(3, () => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % DATA_SLIDES.length)
            })
        }
    })
}, {dependencies: [currentIndex], scope: sliderContainerRef})

return (
    <div>
        <Navbar />
        
        <div className="slider-container" ref={sliderContainerRef}>

        {/* Wrapper Images */}
            <div className="slider-wrapper" ref={sliderWrapperRef}>
                {DATA_SLIDES.map((slide) => (
                <div 
                    key={slide.id} 
                    className="slide"
                    style={{ 
                        backgroundImage: `url(${slide.image})` 
                    }}>
                        <p className="absolute z-10">{slide.text}</p>
                </div>
            ))}
            </div>
        
        {/* Dots Wrapper */}
        <div className="dots-container">
            {
                DATA_SLIDES.map((_, index) => (
                    <div 
                    key={index}
                    className={`dot ${index === currentIndex ? "active" : ""}`}
                    onClick={() => setCurrentIndex(index)}
                    >
                    </div>
                ))
            }
        </div>

        </div>


    </div>
)
}

export default Highlight




// const Highlight = () => {
// return (

//     <div className="slider-container">
//         <div className="slider-wrapper">
//             <div className="slide" style={{ backgroundImage: 'url(/assets/images/illustration1.png)' }}>
//             <div className="mask" style={{ background: 'rgba(0,0,0,0)' }}></div>
//             <div className="text">
//                 <div className="h f72 transTop">
//                 Perpustakaan UI Perkuat Kolaborasi Dan Transformasi Digital Di Forum Aunilo Filipina
//                 </div>
//             </div>
//                 <a className="a" href="https://newsen.pku.edu.cn/news_events/news/focus/15493.html"></a>
//                 {/* <a className="a2" href="/en/close-up_pku2026.html"></a> */}
//             </div>

//             <div className="slide" style={{ backgroundImage: 'url(/assets/images/illustration2.png)' }}>
//             <div className="mask" style={{ background: 'rgba(0,0,0,0)' }}></div>
//             <div className="text">
//                 <div className="h f72 transTop">
//                 Mahasiswa UI Asah Diplomasi di Ajang Bergengsi Harvard World MUN 2026
//                 </div>
//             </div>
//                 <a className="a" href="https://newsen.pku.edu.cn/news_events/news/focus/15549.html"></a>
//                 {/* <a className="a2" href="/en/close-up_pku2026.html"></a> */}
//             </div>

//             <div className="slide" style={{ backgroundImage: 'url(/assets/images/illustration3.png)' }}>
//             <div className="mask" style={{ background: 'rgba(0,0,0,0)' }}></div>
//             <div className="text">
//                 <div className="h f72 transTop">
//                 Rektor UI Paparkan Capaian Kinerja 2025 Dalam Sidang Terbuka MWA UI
//                 </div>
//             </div>
//                 <a className="a" href="https://newsen.pku.edu.cn/news_events/news/focus/15493.html"></a>
//                 {/* <a className="a2" href="/en/close-up_pku2026.html"></a> */}
//             </div>
            
//             <div className="slide" style={{ backgroundImage: 'url(/assets/images/illustration4.png)' }}>
//             <div className="mask" style={{ background: 'rgba(0,0,0,0)' }}></div>
//             <div className="text">
//                 <div className="h f72 transTop">
//                 Usai Teken LOI di Tiongkok, UI dan Shanghai Cangyou Perkuat Kolaborasi Melalui MOU
//                 </div>           
//             </div>
//                 <a className="a" href="https://newsen.pku.edu.cn/news_events/news/focus/15493.html"></a>
//                 {/* <a className="a2" href="/en/close-up_pku2026.html"></a> */}
//             </div>

//             <div className="dots-container"></div>
//         </div>
//     </div>
// )
// }

// export default Highlight







