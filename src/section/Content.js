import React, { useEffect } from 'react'
// eslint-disable-next-line
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import imagesLoaded from 'imagesloaded'

const url = "https://source.unsplash.com/random/1240x874?sig="

// const random = Math.floor(Math.random() * 206)

gsap.registerPlugin(ScrollTrigger)

const Content = () => {

    useEffect(() => {
        // const wrapper = document.getElementById("wrapper")
        // let html = ""

        // for(var i =0;  i< 5; i++){ 
        //     html += '<li><img src="https://source.unsplash.com/random/1240x874?sig='+(i+1)+'"></li>'
        // }
        // wrapper.innerHTML = html

        const images = gsap.utils.toArray('img')

        const showDemo = () => {
            document.body.style.overflow = 'auto'
            document.scrollingElement.scrollTo(0, 0)
            
            gsap.utils.toArray('section').forEach((section, index) => {
                const w = section.querySelector('.wrapper')
                const [x, xEnd] = (index % 2) ? ['100%', (w.scrollWidth - section.offsetWidth) * -1] : [w.scrollWidth * -1, 0]
                gsap.fromTo(w, {  x  }, {
                    x: xEnd,
                    scrollTrigger: { 
                        trigger: section, 
                        scrub: 0.5 
                    }
                })
            })
        }

        imagesLoaded(images).on('always', showDemo)
        
    }, [])

    return (
        <>
            <main>
                <section className="text_container">
                    <div className="wrapper text">
                        ABCDEFGHIJKLMNOPQRSTUVWXYZ
                    </div>
                </section>

                <section className="gallery">
                    <div className="image">
                        <ul className="wrapper">        
                            {/* {Array(5).fill(null).map((_,i) => {
                                return (
                                    <li key={i}>
                                        <img src={url + random} alt="" />
                                    </li>   
                                )
                            })}    */}

                            <li>
                                <img src={url + 12} alt="" />
                            </li>  
                            <li>
                                <img src={url + 34} alt="" />
                            </li>  
                            <li>
                                <img src={url + 200} alt="" />
                            </li>  
                            <li>
                                <img src={url + 160} alt="" />
                            </li>  
                        </ul>
                    </div>
                </section>

                <section className="gallery">
                    <div className="image">
                        <ul className="wrapper">   
                            <li>
                                <img src={url + 58} alt="" />
                            </li>  
                            <li>
                                <img src={url + 98} alt="" />
                            </li>  
                            <li>
                                <img src={url + 10} alt="" />
                            </li>  
                            <li>
                                <img src={url + 6} alt="" />
                            </li>  
                        </ul>
                    </div>
                </section>

                <section className="gallery">
                    <div className="image">
                        <ul className="wrapper">   
                            <li>
                                <img src={url + 27} alt="" />
                            </li>  
                            <li>
                                <img src={url + 146} alt="" />
                            </li>  
                            <li>
                                <img src={url + 24} alt="" />
                            </li>  
                            <li>
                                <img src={url + 9} alt="" />
                            </li>  
                        </ul>
                    </div>
                </section>

                <section className="gallery">
                    <div className="image">
                        <ul className="wrapper">   
                            <li>
                                <img src={url + 133} alt="" />
                            </li>  
                            <li>
                                <img src={url + 82} alt="" />
                            </li>  
                            <li>
                                <img src={url + 152} alt="" />
                            </li>  
                            <li>
                                <img src={url + 172} alt="" />
                            </li>  
                        </ul>
                    </div>
                </section>
                
                <section className="text_container">
                    <div className="wrapper text">
                        ABCDEFGHIJKLMNOPQRSTUVWXYZ
                    </div>
                </section>

                <footer>
                    <p>Design is not just what it looks like and feels like. <br/>Design is how it works</p>
                    {/* <p>Images from <a href="https://unsplash.com/">Unsplash</a></p> */}
                </footer>
            </main>
        </>
    )
}

export default Content
