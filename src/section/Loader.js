import React, { useEffect } from 'react'
// eslint-disable-next-line
import gsap from 'gsap'
import { TweenMax } from 'gsap/gsap-core'
import { TimelineMax } from 'gsap/gsap-core'

const Loader = () => {

    useEffect(() => {
        TweenMax.to(".loadwrapper", 2, {
            top: "-100%",
            ease: "expo.easeInOut",
            delay: 3.6,
        })

        let tl = new TimelineMax()

        tl.from(".loader", 1.6, {
            scaleY: "0%",
            y: 80,
            ease: "expo.easeInOut",
            delay: 1,
            transformOrigin:"50% 100%"
        })

        tl.to(".loader", 1.6, {
            height: "20vh",
            scaleY: "0%",
            ease: "expo.easeInOut",
            transformOrigin:"0% -100%"    
        })
        
    }, [])

    return (
        <>
            <div className="loadwrapper">
                <div className="loader"></div>
            </div>
        </>
    )
}

export default Loader
