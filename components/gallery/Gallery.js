import React from 'react'
import { useState, useRef } from 'react'
function Gallery() {

    const refa = useRef(null)
    const [tas, setTas] = useState(false)

    const [Imagges, setImages] = useState([
        {
            url: '/gl/1.jpg',
            owner: 'Bla User',
            dow: 'down'
        },
        {
            url: '/gl/2.jpg',
            owner: 'Bla User',
            dow: 'down'
        },
        {
            url: '/gl/3.jpg',
            owner: 'Bla User',
            dow: 'down'
        },
        {
            url: '/gl/4.jpg',
            owner: 'Bla User',
            dow: 'down'
        },
        {
            url: '/gl/5.jpg',
            owner: 'Bla User',
            dow: 'down'
        },
        {
            url: '/gl/6.jpg',
            owner: 'Bla User',
            dow: 'down'
        },
    ])

    console.log(Imagges)
    return (
        <div className='max-w-screen-xl mt-8 mx-auto galgal lg:px-0 px-2'>
            {
                Imagges.map((item) => {
                    return (
                        <div className='bg-black relative mb-[25px]'>
                            <img src={item.url} alt="" className='relative z-20 imgg' onMouseLeave={(ela) => { ela.target.style.opacity = 1, ela.target.style.zIndex = 20 }} onMouseEnter={(ela) => { ela.target.style.opacity = .5, ela.target.style.zIndex = 0 }} />
                            <div className='w-full h-full absolute top-0'>
                                hhhhh
                            </div>
                        </div>
                    )
                })
            }
        </div >
    )
}

export default Gallery