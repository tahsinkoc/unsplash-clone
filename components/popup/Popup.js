import React from 'react'
import { useState } from 'react'
import { AiFillHeart, AiOutlinePlus, AiOutlineArrowDown, AiOutlineShareAlt, AiFillInfoCircle } from 'react-icons/ai'
import { HiOutlineChevronDown } from 'react-icons/hi'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import Gallery from '../gallery/Gallery'
function Popup({ data, isOpen, setOpen }) {

    const [little, setLittle] = useState(false)
    const [share, setShare] = useState(false)
    const [info, setInfo] = useState(false)
    const [Report, setReport] = useState(false)

    return (
        <>
            {
                isOpen ? <div onAbort={() => setLittle(false)} className='z-[100] lg:w-[1600px] svv  h-screen rounded w-screen px-4 py-4 bg-white fixed  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] overflow-y-scroll'>
                    <div className=" flex items-center w-full py-2 px-2 justify-between text-white flex-row z-20 bottom-[-100%]">
                        <div className='flex items-center justify-between ml-2 text-[#767676]'>
                            <button className='mr-2 rounded-full text-[#767676] bg-white text-[1.2rem]'>
                                <img src="/pp/pp.jpg" className='w-full h-full rounded-full' alt="" />
                            </button>
                            <p>Sufyan</p>
                        </div>
                        <div className='flex items-center'>
                            <button className='px-3 py-2 rounded text-[#767676] bg-white text-[1.1rem] mr-2 border-[1px] border-gray-400 shadow-md'>
                                <AiFillHeart />
                            </button>
                            <button className='px-3 py-2 rounded text-[#767676] bg-white text-[1.1rem] mr-2 border-[1px] border-gray-400 shadow-md'>
                                <AiOutlinePlus />
                            </button>
                            <div className='relative'>
                                <div className='flex items-center'>
                                    <button className='py-[17px] px-3 rounded bg-green-500 text-white text-[1rem]'>Download free</button>
                                    <button onClick={() => { setLittle(!little) }} className='py-[9px] ml-[1px] px-3 rounded bg-green-500 text-white text-[1.1rem]'>
                                        <HiOutlineChevronDown className='text-white' />
                                    </button>
                                </div>
                                {
                                    little ? <div className='px-4 right-6 py-4 my-2 rounded fixed bg-black text-white z-50 flex flex-col items-start'>
                                        <button className='my-4'>Small</button>
                                        <button className='my-4'>Medium</button>
                                        <button className='my-4'>Large</button>
                                        <button className='my-4 border-t pt-5'>Original Size</button>
                                    </div> : <></>
                                }
                            </div>
                        </div>

                    </div>

                    <div className='w-full flex items-center justify-center'>
                        <img className='lg:h-[45rem] h-auto mx-auto' src={data.url} alt="" />
                    </div>
                    <div className='flex items-center justify-between ml-2 text-[#767676] mt-4'>
                        <div className='flex lg:items-center lg:flex-row flex-col'>
                            <div className='flex flex-col'>
                                <p className='my-3'>Views</p>
                                <p className='my-3 text-black'>5,000</p>
                            </div>
                            <div className='flex flex-col lg:mx-28'>
                                <p className='my-3'>Downloads</p>
                                <p className='my-3 text-black'>267</p>
                            </div>
                            <div className='flex flex-col lg:mx-12'>
                                <p className='my-3'>Featured in</p>
                                <p className='my-3 text-black'>Editorial</p>
                            </div>
                        </div>
                        <div className="flex relative lg:top-0 -top-12 items-center">
                            <div className='relative lg:w-28'>
                                <button onClick={() => setShare(!share)} className='px-3 py-2 rounded text-[#767676] bg-white text-[1.1rem] mr-2 border-[1px] border-gray-400 shadow-md flex items-center justify-between'>
                                    <AiOutlineShareAlt />
                                    <p className='mx-2 lg:block hidden'>Share</p>
                                </button>
                                {
                                    share ? <div className='px-4 left-0 py-4 my-2 rounded absolute bg-white text-black shadow-md border-gray-400 border z-50 flex flex-col items-start'>
                                        <button className='my-4'>Facebook</button>
                                        <button className='my-4'>Twitter</button>
                                        <button className='my-4'>Pinterest</button>
                                        <button className='my-4 border-t pt-5'>Copy Link</button>
                                    </div> : <></>
                                }
                            </div>
                            <div className='relative lg:w-28'>
                                <button onClick={() => setInfo(!info)} className='px-3 py-2 rounded text-[#767676] bg-white text-[1.1rem] mr-2 border-[1px] border-gray-400 shadow-md flex items-center justify-between'>
                                    <AiFillInfoCircle />
                                    <p className='mx-2 lg:block hidden'>Info</p>
                                </button>
                                {
                                    info ? <div className='px-2 w-56 h-44 -left-[8.4rem] -top-[12.2rem]  py-2 my-2 rounded absolute bg-white text-black shadow-md border-gray-400 border z-50 flex flex-col items-start'>
                                        <div className='flex flex-col'>
                                            <p className='my-3'>Info</p>
                                            <p className='my-3 text-[#767676]'>Published 6 days ago</p>
                                        </div>
                                    </div> : <></>
                                }
                            </div>
                            <div>
                                <button onClick={() => setReport(!Report)} className='px-3 py-2 rounded text-[#767676] bg-white text-[1.1rem] mr-2 border-[1px] border-gray-400 shadow-md flex items-center justify-between'>
                                    <HiOutlineDotsHorizontal />
                                </button>
                                {
                                    Report ? <div className='py-1 px-8 right-6 my-2 rounded border-gray-400 border fixed bg-white text-red-600 z-50 flex flex-col items-start'>
                                        <button className='my-4'>Report</button>
                                    </div> : <></>
                                }
                            </div>
                        </div>

                    </div>
                    <div className='my-12 max-w-6xl mx-auto relative'>
                        <h2 className='text-[1.4rem]'>Related Tags</h2>
                        <div className='flex justify-start gap-x-2 text-gray-500 relative text-[.8rem] flex-wrap px-2 py-2'>
                            <div className='relative mt-10 cursor-pointer'>
                                <p className='px-4 py-3 bg-gray-300'>Hd Art Wallpapers</p>
                            </div>
                            <div className='relative mt-10 cursor-pointer'>
                                <p className='px-4 py-3 bg-gray-300'>Painting</p>
                            </div>
                            <div className='relative mt-10 cursor-pointer'>
                                <p className='px-4 py-3 bg-gray-300'>Outdoors</p>
                            </div>
                            <div className='relative mt-10 cursor-pointer'>
                                <p className='px-4 py-3 bg-gray-300'>Nature Images</p>
                            </div>
                            <div className='relative mt-10 cursor-pointer'>
                                <p className='px-4 py-3 bg-gray-300'>Vegetation</p>
                            </div>
                            <div className='relative mt-10 cursor-pointer'>
                                <p className='px-4 py-3 bg-gray-300'>Tree Images & Pictures</p>
                            </div>
                            <div className='relative mt-10 cursor-pointer'>
                                <p className='px-4 py-3 bg-gray-300'>Hd Wallpapers</p>
                            </div>
                            <div className='relative mt-10 cursor-pointer'>
                                <p className='px-4 py-3 bg-gray-300'>Modern Art</p>
                            </div>
                            <div className='relative mt-10 cursor-pointer'>
                                <p className='px-4 py-3 bg-gray-300'>Woodland</p>
                            </div>
                            <div className='relative mt-10 cursor-pointer'>
                                <p className='px-4 py-3 bg-gray-300'>Land</p>
                            </div>
                        </div>
                    </div>
                    <div className='my-12 max-w-6xl mx-auto'>
                        <h2 className='text-[1.4rem]'>Related Photos</h2>
                        <Gallery />
                    </div>
                </div> : <></>
            }
            {
                isOpen ? <div onClick={() => setOpen(false)} className='w-screen h-screen left-0 flex items-center justify-center z-50 fixed top-0 bg-[rgba(0,0,0,.5)]'>

                </div> : <></>
            }
        </>
    )
}

export default Popup