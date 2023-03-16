import Gallery from '@/components/gallery/Gallery'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'

function index() {
    return (
        <div>
            <Navbar />
            <div className='w-full h-[37.2rem] rataa'>
                <div className='w-full h-full flex items-center justify-center bg-[rgba(0,0,0,.5)] flex-col'>
                    <div className='lg:w-[1280px] max-w-[1280px] mx-auto px-5'>
                        <h3 className='text-[2.875rem] font-bold text-white'>Textures & Patterns</h3>
                        <p className='mt-[1rem] text-[1.2rem] text-white max-w-[600px]'>
                            Whether you’re looking for stunning macro-photography or shots of complex architectural shapes — you’ve come to the right place.
                        </p>
                        <button className='px-6 py-2 rounded bg-white text-black my-8'>Submit to Textures & Patterns</button>
                        {/* <p className='text-[1.2rem] text-white'>
                            Powered by creators everywhere.
                        </p> */}
                    </div>
                    <div className='px-1 w-[930px] lg:block hidden'>
                        {/* <div className='relative ml-4 mt-4'>
                            <button className='absolute top-[19px] text-slate-600 font-bold left-3 text-[1.3rem]'><BsSearch /></button>
                            <input className='bg-white px-11 w-full border outline-none py-4 rounded-md' onBlur={() => handleFocus(false)} onFocus={() => handleFocus(true)} type="text" placeholder='Search' />
                            {isSearch ? <div className='z-0 border my-2 p-[.7rem] absolute rounded-sm w-full bg-white shadow-md'>true</div> : <div className='hidden'>false</div>}
                        </div> */}
                        {/* <p className='text-white px-4 my-2'>Trending: flower, wallpapers, backgrounds, happy, love</p> */}

                    </div>
                </div>
                {/* <img src="/bg/marek-piwnicki-Yg7PWiIFqWM-unsplash.jpg" alt="" className='h-full w-full bg-cover' /> */}
            </div>
            <Gallery />
        </div >
    )
}

export default index