import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { HiBars3 } from 'react-icons/hi2'
import { useState, useRef } from 'react'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'
function Navbar() {
    const [isSearch, setSearch] = useState(false)
    const handleFocus = (el) => {
        setSearch(el)
    }
    const scrollPoint = useRef(null)
    const handleClick = (el) => {
        scrollPoint.current.scrollLeft += el
    }
    return (
        <div className='w-full fixed top-0'>
            <div className="w-full flex justify-between px-[1rem] py-[.7rem] items-center">
                <div className='flex items-center lg:w-[65%] w-full'>
                    <div className='h-[2.7rem]'>
                        <img className='h-full' src="/logo/unsplash_logo_icon_206651.svg" alt="aas" />
                    </div>
                    <div className='relative ml-4 w-full'>
                        <button className='absolute top-[14px] text-slate-600 font-bold left-4 text-[.9rem]'><BsSearch /></button>
                        <input className='bg-[#EEEE] px-10 w-full border outline-none py-2 rounded-full' onBlur={() => handleFocus(false)} onFocus={() => handleFocus(true)} type="text" placeholder='Search' />
                        {isSearch ? <div className='z-30 border my-2 p-[.7rem] absolute rounded-sm w-full bg-white shadow-md'>true</div> : <div className='hidden'>false</div>}
                    </div>
                    <button className='text-[rgba(0,0,0,.5)] text-[2rem] ml-8 lg:hidden block'>
                        <HiBars3 />
                    </button>
                </div>
                <div className='text-[.93rem] lg:flex hidden items-center ml-2'>
                    <nav className='relative border-r-2'>
                        <a href="#" className='text-[#767676] hover:text-slate-800 mx-4'>
                            Explore
                        </a>
                        <a href="#" className='text-[#767676] hover:text-slate-800 mx-4'>
                            Advertise
                        </a>
                        <a href="#" className='text-[#767676] hover:text-slate-800 mx-4'>
                            Unsplash
                        </a>
                        {/* <hr className='absolute w-[1px] border-none h-[1rem] bg-gray-700' /> */}
                    </nav>
                </div>
                <div className=' text-[.93rem]  items-center lg:flex hidden'>
                    <nav className='relative flex items-center'>
                        <a href="#" className='text-[#767676] hover:text-slate-800 mx-4'>
                            Log in
                        </a>
                        <a href="#" className='text-[#767676] hover:text-slate-800 mx-0'>
                            /
                        </a>
                        <a href="#" className='text-[#767676] hover:text-slate-800 mx-4'>
                            Sign Up
                        </a>
                        <button className='px-2 hover:border-[rgba(0,0,0)] hover:text-black rounded-sm py-1 border text-[rgba(0,0,0,.5)]'>Submit a photo</button>
                        <button className='text-[rgba(0,0,0,.5)] text-[2rem] mx-3'>
                            <HiBars3 />
                        </button>
                        {/* <hr className='absolute w-[1px] border-none h-[1rem] bg-gray-700' /> */}
                    </nav>

                </div>

            </div>
            <div className='w-full bg-white px-[1rem] py-[.7rem]'>
                <nav className='flex items-center'>
                    <a className='text-[#767676] py-[.5rem] border-r-2 pr-4' href="#">Editorial</a>
                    <div className='relative overflow-x-hidden overflow-y-hidden forsc w-[95%] ml-7 py-1 break-words'>
                        <button onClick={() => handleClick(-50)} className='absolute top-0 left-0 px-4  bg-white z-10 shadow-md  h-full fsc'>
                            <MdOutlineKeyboardArrowLeft size={30} />
                        </button>
                        <button onClick={() => handleClick(50)} className='absolute top-0 right-0 px-4 bg-white z-10 shadow-md  h-full fscc'>
                            <MdOutlineKeyboardArrowRight size={30} />
                        </button>
                        <div className='w-full overflow-y-hidden relative py-2 items-center forsc scroll-smooth overflow-x-scroll whitespace-nowrap' ref={scrollPoint}>
                            <a className='inline ml-14 sthj'>Wallpapers</a>
                            <a className='inline mx-4 sthj'>3D Renders</a>
                            <a className='inline mx-4 sthj'>Travels</a>
                            <a className='inline mx-4 sthj'>Nature</a>
                            <a className='inline mx-4 sthj'>Street Photography</a>
                            <a className='inline mx-4 sthj'>Experimental</a>
                            <a className='inline mx-4 sthj'>Textures and Patterns</a>
                            <a className='inline mx-4 sthj'>Animals</a>
                            <a className='inline mx-4 sthj'>Architecture and Interiors</a>
                            <a className='inline mx-4 sthj'>Fashion and Beauty</a>
                            <a className='inline mx-4 sthj'>Film</a>
                            <a className='inline mx-4 sthj'>Food & Drink</a>
                            <a className='inline mx-4 sthj'>People</a>
                            <a className='inline mx-4 sthj'>Spirituality</a>
                            <a className='inline mx-4 sthj'>Business and Work</a>
                            <a className='inline mx-4 sthj'>Athletics</a>
                            <a className='inline mx-4 sthj'>Health & Wellness</a>
                            <a className='inline mx-4 sthj'>Current Events</a>
                            <a className='inline mr-14 sthj'>Art & Culture</a>

                        </div>
                    </div>
                </nav>

            </div>

        </div>
    )
}

export default Navbar