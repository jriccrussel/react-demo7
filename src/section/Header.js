import React, { useEffect } from 'react'
// eslint-disable-next-line
import anime from 'animejs'
import gsap from 'gsap'
import { TweenMax } from 'gsap/gsap-core'
import { IonIcon } from '@ionic/react'
import { searchSharp } from 'ionicons/icons'
import { TimelineMax } from 'gsap/gsap-core'

const url = "https://source.unsplash.com/random/1240x874?sig="

const Header = () => {

    useEffect(() => {
        // Header 1
        let textWrapper = document.querySelector('.header-1')
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>")

        anime.timeline()
        .add({
            targets: '.header-1 .letter',
            translateY: [200,0],
            translateZ: 0,
            opacity: [0,1],
            easing: "easeOutExpo",
            duration: 2000,
            delay: (el, i) => 4800 + 50 * i
        })

        // Header 2
        let textWrapper2 = document.querySelector('.header-2')
        textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='letter'>$&</span>")

        anime.timeline().add({
            targets: '.header-2 .letter',
            translateY: [200,0],
            translateZ: 0,
            opacity: [0,1],
            easing: "easeOutExpo",
            duration: 2000,
            delay: (el, i) => 4800 + 50 * i
        })

        TweenMax.to(".box", 2.4, {
            y: "-100%",
            ease: "expo.easeInOut",
            delay: 3.8
        })

        // let tm = new TweenMax()

        TweenMax.staggerFrom(".menu > div", 2, {
            opacity: 0,
            y: 30,
            ease: "expo.easeInOut",
            delay: 4.2,
        }, 0.1)

        TweenMax.staggerFrom(".hero-container > div", 2, {
            opacity: 0,
            y: 30,
            ease: "expo.easeInOut",
            delay: 4.2,
        }, 0.1)
      
    }, [])

    return (
        <>
            <header>
                <div className="container">
                    <nav className="menu">
                        <div className="menu-left menu-item">
                            <span className="menu-link">about</span>
                            <span className="menu-link">contact</span>
                        </div>

                        <div className="menu-center menu-item">
                            <div className="brand-logo">Djinn</div>
                        </div>

                        <div className="menu-right menu-item">
                            <div className="search-icon">
                                <IonIcon icon={searchSharp}></IonIcon>
                            </div>
                        </div>
                    </nav>

                    <div className="wrapper-img">
                        <div className="box"></div>
                        <div>
                            <img src={url + 193} alt="" className="image" />
                        </div>
                    </div>

                    <div className="header">
                        <h1 className="header-1">Paulson</h1>
                        <h1 className="header-2">Jonas</h1>
                    </div>

                    <div className="hero-container">
                        <div className="sidebar-text">003</div>
                        <div className="project">projects</div>
                        <div className="img-nav">
                            <div className="prev">prev</div>
                            <div className="next">next</div>
                        </div>
                    </div>

                </div>
            </header>            
        </>
    )
}

export default Header