import Navbar from '@/components/navbar/Navbar'
import React from 'react'

function index() {

    const array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    return (
        <div>
            <Navbar />
            <div className='lg:max-w-[82.5rem] w-11/12 mx-auto my-11'>
                <h2 className='text-[2.7rem] font-bold'>Collections</h2>
                <p className=' lg:w-6/12 w-full text-[1.3rem]'>
                    Beautiful, free pictures of the week.
                    Explore the world through collections of beautiful HD pictures free to use under the Unsplash License.
                </p>
                <div className='my-14 grid lg:grid-cols-4 grid-cols-1 gap-x-3 gap-y-8'>
                    {
                        array.map((item) => {
                            return (
                                <div>
                                    <div className='grid grid-cols-2 gap-x-1  rounded bg-white'>
                                        <img src="/collections/3.jpg" className='col-span-1 rounded' alt="" />
                                        <div className='grid grid-rows-2 gap-y-1'>
                                            <img src="/collections/1.jpg" className='h-full rounded' alt="" />
                                            <img src="/collections/2.jpg" className='h-full rounded' alt="" />
                                        </div>
                                    </div>
                                    <h2 className="mt-4 mb-2 font-bold text-[1.2rem]">Yellow Legacy</h2>
                                    <p className='text-[#767676]'>43 photos Curated by Unsplash+ Collections</p>
                                    <div className='flex items-center my-2'>
                                        <div className='px-4 py-1 bg-gray-300 text-[#767676] text-[.8rem] cursor-pointer'>
                                            Cool Backgrounds
                                        </div>
                                        <div className='px-4 py-1 bg-gray-300 text-[#767676] text-[.8rem] mx-2 cursor-pointer'>
                                            Desktop Backgrounds
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default index