import React from 'react'
import { useState, useRef } from 'react'

import { AiFillHeart, AiOutlinePlus, AiOutlineArrowDown } from 'react-icons/ai'
import Popup from '../popup/Popup'

function Gallery() {

    const refa = useRef(null)
    const [tas, setTas] = useState(false)
    const [Dat, setDat] = useState({})
    const [isOpen, setOpen] = useState(false)
    const [Imagges, setImages] = useState([
        {
            url: '/gl/1.jpg',
            owner: 'Sufyan',
            ownerPp: '/pp/pp.jpg'
        },
        {
            url: '/gl/2.jpg',
            owner: 'Sufyan',
            ownerPp: '/pp/pp.jpg'
        },
        {
            url: '/gl/3.jpg',
            owner: 'Sufyan',
            ownerPp: '/pp/pp.jpg'
        },
        {
            url: '/gl/4.jpg',
            owner: 'Sufyan',
            ownerPp: '/pp/pp.jpg'
        },
        {
            url: '/gl/5.jpg',
            owner: 'Sufyan',
            ownerPp: '/pp/pp.jpg'
        },
        {
            url: '/gl/6.jpg',
            owner: 'Sufyan',
            ownerPp: '/pp/pp.jpg'
        },
    ])

    console.log(Dat)
    return (
        <div className='max-w-screen-xl mt-8 mx-auto galgal lg:px-0 px-2'>
            <Popup data={Dat} isOpen={isOpen} setOpen={setOpen} />
            {
                Imagges.map((item) => {
                    return (
                        <div className='bg-black relative mb-[25px] overflow-y-hidden'>
                            <div onClick={() => { setDat(item), setOpen(true) }} className='w-full h-full absolute zzs z-20'>

                            </div>
                            <div className="absolute flex items-center w-full py-2 px-4 justify-end text-white flex-row z-20 top-[-100%] sspg">
                                <button onClick={() => { console.log('liked') }} className='mr-2 px-3 py-2 rounded text-[#767676]  bg-white text-[1.2rem]'>
                                    <AiFillHeart />
                                </button>
                                <button className='px-3 py-2 rounded text-[#767676] bg-white text-[1.2rem]'>
                                    <AiOutlinePlus />
                                </button>
                            </div>
                            <div className="absolute flex items-center w-full py-2 px-2 justify-between text-white flex-row z-20 bottom-[-100%] sspgg">
                                <div className='flex items-center justify-between ml-2'>
                                    <button className='mr-2 rounded-full text-[#767676] bg-white text-[1.2rem]'>
                                        <img src="/pp/pp.jpg" className='w-full h-full rounded-full' alt="" />
                                    </button>
                                    <p>Sufyan</p>
                                </div>
                                <button className='px-3 py-2 rounded text-[#767676] bg-white text-[1.2rem] mr-2'>
                                    <AiOutlineArrowDown />
                                </button>
                            </div>
                            <img src={item.url} alt="" className='relative imgg z-10' />
                        </div>
                    )
                })
            }
        </div >
    )
}

export default Gallery