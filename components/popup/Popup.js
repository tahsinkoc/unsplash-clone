import React from 'react'
import { useState } from 'react'
import { AiFillHeart, AiOutlinePlus, AiOutlineArrowDown } from 'react-icons/ai'
import { HiOutlineChevronDown } from 'react-icons/hi'
function Popup({ data, isOpen, setOpen }) {

    const [little, setLittle] = useState(false)


    return (
        <>
            {
                isOpen ? <div className='z-[100] lg:w-[1600px] min-h-min max-w-[1600px] px-4 py-4 bg-white fixed  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
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
                                    <button className='py-[17px] px-3 rounded bg-green-500 text-white text-[1.1rem]'>Download free</button>
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