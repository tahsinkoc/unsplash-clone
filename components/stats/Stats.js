import Navbar from '@/components/navbar/Navbar'
import React from 'react'

function Stats() {

    const array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    return (
        <div>
            <div className='lg:max-w-[82.5rem] w-11/12 mx-auto my-11'>
                <div className=''>
                    <p>
                        <b className='mr-4 text-[1.3rem]'>Insights</b>
                        <i className='text-[#767676]'>Last 30 days</i>
                    </p>
                    <div className='grid  lg:grid-cols-2 grid-cols-1 my-4 gap-x-4'>
                        <div className='border-2 grid grid-rows-2 gap-y-2'>
                            <div className='p-4 min-h-[11rem]'>
                                <p className='font-bold'>Views</p>
                                <p className='text-[2rem] font-bold'>0</p>
                            </div>
                            <div className='p-4 border-t-2 min-h-[11rem]'>
                                <p className='font-bold'>Most Viewed on</p>
                                <p className='text-[2rem] font-bold'>0</p>
                            </div>
                        </div>
                        <div className='border-2 grid grid-rows-2 gap-y-2'>
                            <div className='p-4 min-h-[11rem]'>
                                <p className='font-bold'>Downloads</p>
                                <p className='text-[2rem] font-bold'>0</p>
                            </div>
                            <div className='p-4 border-t-2 min-h-[11rem]'>
                                <p className='font-bold'>Most downloaded on</p>
                                <p className='text-[2rem] font-bold'>0</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' my-8'>
                    <p>
                        <b className='mr-4 text-[1.3rem]'>Uses</b>
                        <i className='text-[#767676]'>Last 30 days</i>
                    </p>
                    <div className='grid  lg:grid-cols-2 grid-cols-1 my-4 gap-x-4'>
                        <div className='border-2 grid grid-rows-2 gap-y-2'>
                            <div className='p-4 min-h-[11rem]'>
                                <p className='font-bold'>Views</p>
                                <p className='text-[2rem] font-bold'>0</p>
                            </div>
                            <div className='p-4 border-t-2 min-h-[11rem]'>
                                <p className='font-bold'>Most Viewed on</p>
                                <p className='text-[2rem] font-bold'>0</p>
                            </div>
                        </div>
                        <div className='border-2 grid grid-rows-2 gap-y-2'>
                            <div className='p-4 min-h-[11rem]'>
                                <p className='font-bold'>Downloads</p>
                                <p className='text-[2rem] font-bold'>0</p>
                            </div>
                            <div className='p-4 border-t-2 min-h-[11rem]'>
                                <p className='font-bold'>Most downloaded on</p>
                                <p className='text-[2rem] font-bold'>0</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <p>
                        <b className='mr-4 text-[1.3rem]'>Your Photos</b>
                        <i className='text-[#767676]'>Last 30 days</i>
                    </p>
                    <div className='grid  lg:grid-cols-2 grid-cols-1 my-4 gap-x-4'>
                        <div className='border-2 grid grid-rows-2 gap-y-2'>
                            <div className='p-4 min-h-[11rem]'>
                                <p className='font-bold'>Views</p>
                                <p className='text-[2rem] font-bold'>0</p>
                            </div>
                            <div className='p-4 border-t-2 min-h-[11rem]'>
                                <p className='font-bold'>Most Viewed on</p>
                                <p className='text-[2rem] font-bold'>0</p>
                            </div>
                        </div>
                        <div className='border-2 grid grid-rows-2 gap-y-2'>
                            <div className='p-4 min-h-[11rem]'>
                                <p className='font-bold'>Downloads</p>
                                <p className='text-[2rem] font-bold'>0</p>
                            </div>
                            <div className='p-4 border-t-2 min-h-[11rem]'>
                                <p className='font-bold'>Most downloaded on</p>
                                <p className='text-[2rem] font-bold'>0</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats