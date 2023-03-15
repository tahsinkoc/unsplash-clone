import Gallery from '@/components/gallery/Gallery'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'

function index() {
    return (
        <div>
            <Navbar />
            <div className='lg:max-w-[82.5rem] w-11/12 mx-auto my-11'>
                <p>Explore</p>
                <h2 className='text-[2.7rem]'>Explore Unsplash Photos</h2>
                <p className=' lg:w-6/12 w-full text-[1.3rem]'>Unsplash has over a million free high-resolution photos. Explore these popular photo categories on Unsplash. All photos here are free to download and use under the Unsplash License.</p>
                <div>
                    <h2 className='text-[1.5rem] mt-12 font-bold'>Browse thousands of free images on Unsplash</h2>
                    <div className='w-full grid lg:grid-cols-3 grid-cols-1 lg:gap-x-1 gap-x-0'>
                        <a className='w-[410px] h-[205px] my-10 lg:mx-0 mx-auto relative'>
                            <div className='text-white absolute top-0 left-0 flex justify-center items-center w-full h-full cursor-pointer text-[1.3rem] z-10 bg-[rgba(0,0,0,.3)] hover:bg-[rgba(0,0,0,.5)]'>
                                Backgrounds
                            </div>
                            <img className='w-[410px] h-[205px] rounded' src="/bg/nunzio-guerrera-PvtCOQP2cjg-unsplash.jpg" alt="" />
                            <p className='my-3'>Download free desktop and mobile backgrounds.</p>
                            <div className='flex items-center'>
                                <div className='px-4 py-1 bg-gray-300 text-[#767676] text-[.8rem] cursor-pointer'>
                                    Cool Backgrounds
                                </div>
                                <div className='px-4 py-1 bg-gray-300 text-[#767676] text-[.8rem] mx-2 cursor-pointer'>
                                    Desktop Backgrounds
                                </div>
                            </div>

                        </a>
                        <a className='w-[410px] h-[205px] my-10 lg:mx-0 mx-auto relative'>
                            <div className='text-white absolute top-0 left-0 flex justify-center items-center w-full h-full cursor-pointer text-[1.3rem] z-10 bg-[rgba(0,0,0,.3)] hover:bg-[rgba(0,0,0,.5)]'>
                                Images
                            </div>
                            <img className='w-[410px] h-[205px] rounded' src="/bg/omid-armin-YJq6vZ6MzFU-unsplash.jpg" alt="" />
                            <p className='my-3'>Download free desktop and mobile backgrounds.</p>
                            <div className='flex items-center'>
                                <div className='px-4 py-1 bg-gray-300 text-[#767676] text-[.8rem] cursor-pointer'>
                                    Cool Backgrounds
                                </div>
                                <div className='px-4 py-1 bg-gray-300 text-[#767676] text-[.8rem] mx-2 cursor-pointer'>
                                    Desktop Backgrounds
                                </div>
                            </div>

                        </a>
                        <a className='w-[410px] h-[205px] my-10 lg:mx-0 mx-auto relative'>
                            <div className='text-white absolute top-0 left-0 flex justify-center items-center w-full h-full cursor-pointer text-[1.3rem] z-10 bg-[rgba(0,0,0,.3)] hover:bg-[rgba(0,0,0,.5)]'>
                                Wallpapers
                            </div>
                            <img className='w-[410px] h-[205px] rounded' src="/bg/marek-piwnicki-Yg7PWiIFqWM-unsplash.jpg" alt="" />
                            <p className='my-3'>Download free desktop and mobile backgrounds.</p>
                            <div className='flex items-center'>
                                <div className='px-4 py-1 bg-gray-300 text-[#767676] text-[.8rem] cursor-pointer'>
                                    Cool Backgrounds
                                </div>
                                <div className='px-4 py-1 bg-gray-300 text-[#767676] text-[.8rem] mx-2 cursor-pointer'>
                                    Desktop Backgrounds
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <h2 className='text-[2.7rem] my-16'>Free high-resolution Unsplash photos</h2>
                <Gallery />

            </div>
        </div>
    )
}

export default index