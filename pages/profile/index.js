import Navbar from '@/components/navbar/Navbar'
import MsgPop from '@/components/popup/MsgPop'
import React from 'react'
import { useState } from 'react'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import { AiOutlineMail, AiOutlineClose } from 'react-icons/ai'

function index() {
    const [Report, setReport] = useState(false)
    const [Msg, setMsg] = useState(false)
    const [isOpen, setOpen] = useState(false)
    return (
        <div>
            <Navbar />
            <MsgPop isOpen={isOpen} setOpen={setOpen} />
            <div className='flex items-center justify-center'>
                <div className='flex items-center justify-between'>
                    <img src="/pp/pp2.webp" className='w-32 h-32 rounded-full' alt="" />
                    <div className='mx-11 flex flex-col'>
                        <div className='flex-row flex items-center'>
                            <h2 className='font-bold text-[2.4rem]'>
                                David Williams
                            </h2>
                            <div className='relative ml-4'>
                                <button onClick={() => setReport(!Report)} className='px-3 py-[6px] rounded text-[#767676] bg-white text-[1rem] mr-2 border-[1px] border-gray-400 shadow-md flex items-center justify-between'>
                                    <HiOutlineDotsHorizontal />
                                </button>
                                {
                                    Report ? <div className='right-2 p-2 my-2 w-36 rounded border-gray-400 border absolute bg-white text-[#767676] z-50 flex flex-col'>
                                        <a className='my-2 cursor-pointer  flex items-start text-start'>Follow David</a>
                                        <a className='my-2 cursor-pointer '>Share Profile</a>
                                        <a className='my-2 cursor-pointer text-red-600'>Report</a>
                                    </div> : <></>
                                }
                            </div>
                            <div className='relative'>
                                <button onClick={() => setOpen(true)} className='px-3 py-[6px] rounded text-[#767676] bg-white text-[1rem] mr-2 border-[1px] border-gray-400 shadow-md flex items-center justify-between'>
                                    <AiOutlineMail />
                                </button>
                                {
                                    Report ? <div className='right-2 p-2 my-2 w-36 rounded border-gray-400 border absolute bg-white text-[#767676] z-50 flex flex-col'>
                                        <a className='my-2 cursor-pointer  flex items-start text-start'>Follow David</a>
                                        <a className='my-2 cursor-pointer '>Share Profile</a>
                                        <a className='my-2 cursor-pointer text-red-600'>Report</a>
                                    </div> : <></>
                                }
                            </div>
                        </div>
                        <p>
                            Inspired by cinema and music, love editorial style photography.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index