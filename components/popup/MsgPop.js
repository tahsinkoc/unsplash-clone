import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

// Bu komponenti kullanırken user datasını state e tanımlayıp prop ile pass etmeyi unutmayın buradaki data propu bu veriyi bekler

function MsgPop({ isOpen, setOpen, data }) {
    return (
        <>
            {
                isOpen ? <div className='w-full h-screen bg-[rgba(0,0,0,.5)] fixed z-[999] top-0 flex items-center justify-center overflow-y-auto'>
                    <button className='fixed left-4 top-4 lg:text-white text-black text-[2rem]' onClick={() => setOpen(false)}>
                        <AiOutlineClose />
                    </button>
                    <div className='lg:w-[35rem] w-full lg:h-auto h-full px-4 py-3 bg-white rounded shadow-sm border mx-auto relative'>
                        <button className='fixed right-4 top-4 lg:text-white text-black text-[2rem]' onClick={() => setOpen(false)}>
                            <AiOutlineClose />
                        </button>
                        <div className='flex items-center'>
                            <img src="/pp/pp2.webp" className='w-20 h-20 rounded-full' alt="" />
                            <h2 className='font-bold text-[2.1rem] mx-4'>
                                Message David
                            </h2>
                        </div>
                        <p className='my-2'>
                            Send a message to David and receive a reply through your email.
                        </p>
                        <p className='mt-4 my-2'>
                            Follow message guidelines
                        </p>
                        <p className='my-2'>
                            No spam
                        </p>
                        <p className='my-2'>
                            For legal questions, see the license.
                        </p>
                        <p className='mt-4'>
                            What are you writing about
                        </p>
                        <p className='my-1 w-full rounded-md border bg-gray-200 border py-3 px-2'>
                            Say something
                        </p>
                        <p className='my-2'>
                            Your Message
                        </p>
                        <textarea name="" className='min-w-full border-2 rounded px-2 py-2' placeholder='Hey David I would like to thank you for sharing your photos on Unsplash I have used one of them here:___' id="" cols="30" rows="10"></textarea>
                        <div className='w-full flex justify-end'>
                            <button className='px-4 py-1 border border-2 shadow-sm rounded bg-slate-200 text-[#767676]'>Send Message</button>
                        </div>
                    </div>
                </div>
                    : <div className='hidden'>false</div>
            }
        </>
    )
}

export default MsgPop