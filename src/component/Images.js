import React, { useEffect } from 'react'

const url = "https://source.unsplash.com/random/1240x874?sig="

const random1 = Math.floor(Math.random() * 206)
const random2 = Math.floor(Math.random() * 202)
const random3 = Math.floor(Math.random() * 203)
const random4 = Math.floor(Math.random() * 205)
const random5 = Math.floor(Math.random() * 201)

const data = [
    {
        id: 1,
        img: url + random1,
    },
    {
        id: 2,
        img: url + random2,
    },
    {
        id: 3,
        img: url + random3,
    },
    {
        id: 4,
        img: url + random4,
    },
    {
        id: 5,
        img: url + random5,
    },
]

const Images = () => {
    useEffect(() => {
        // const wrapper = document.getElementById("wrapper")
        // let html = ""
    
        // for(var i =0;  i< 5; i++){ 
        //     html += '<li><img src="https://source.unsplash.com/random/1240x874?sig='+(i+200)+'"></li>'
        // }
        // wrapper.innerHTML = html
    }, [])

    return (
        <>
            {data.map((item) => {
                const {id, img} = item

                return (
                    <li key={id}>
                        <img src={img} alt="" />
                    </li>
                )
            })}

            {/* <ul id="wrapper">            
            </ul> */}
        </>
    )
}

export default Images
