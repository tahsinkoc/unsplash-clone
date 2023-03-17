import Navbar from '@/components/navbar/Navbar'
import MsgPop from '@/components/popup/MsgPop'
import React from 'react'
import { useState, useRef } from 'react'
import { HiOutlineDotsHorizontal, HiLocationMarker, HiPhotograph } from 'react-icons/hi'
import { AiOutlineMail, AiOutlineClose, AiFillCheckCircle, AiFillHeart } from 'react-icons/ai'
import { IoMdPhotos, IoIosStats } from 'react-icons/io'
import { MdModeEditOutline } from 'react-icons/md'
import Gallery from '@/components/gallery/Gallery'
import Collection from '@/components/collection/Collection'
import Stats from '@/components/stats/Stats'
function index() {
    const [Report, setReport] = useState(false)
    const [Msg, setMsg] = useState(false)
    const [isOpen, setOpen] = useState(false)

    const refO = useRef(null)
    const refS = useRef(null)
    const refT = useRef(null)
    const refF = useRef(null)

    function refHandler(el) {
        refO.current.style.borderColor = 'transparent'
        refT.current.style.borderColor = 'transparent'
        refS.current.style.borderColor = 'transparent'
        refF.current.style.borderColor = 'transparent'
        el.current.style.borderColor = 'black'
    }

    const [DataList, setDataList] = useState([
        <Gallery />,
        <Gallery />,
        <Collection />,
        <Stats />
    ])

    const [Rendered, setRendered] = useState(DataList[0])

    return (
        <div>
            <Navbar />
            <MsgPop isOpen={isOpen} setOpen={setOpen} />
            <div className='flex items-center justify-center my-12'>
                <div className='flex items-center justify-between lg:flex-row flex-col'>
                    <img src="/pp/pp2.webp" className='w-32 h-32 rounded-full' alt="" />
                    <div className='mx-11 flex flex-col'>
                        <div className='flex-row flex items-center'>
                            <h2 className='font-bold text-[2.4rem]'>
                                David Williams
                            </h2>
                            <div className='relative ml-4'>
                                <button onClick={() => setOpen(true)} className='px-3 py-[3px] rounded text-[#767676] bg-white text-[1rem] mr-2 border border-[#767676 shadow-md flex items-center justify-between'>
                                    <MdModeEditOutline />
                                    <p className='mx-2 text-[#767676]'>Edit profile</p>
                                </button>
                                {/* {
                                    Report ? <div className='right-2 p-2 my-2 w-36 rounded border-gray-400 border absolute bg-white text-[#767676] z-50 flex flex-col'>
                                        <a className='my-2 cursor-pointer  flex items-start text-start'>Follow David</a>
                                        <a className='my-2 cursor-pointer '>Share Profile</a>
                                        <a className='my-2 cursor-pointer text-red-600'>Report</a>
                                    </div> : <></>
                                } */}
                            </div>
                        </div>
                        <p>
                            Inspired by cinema and music, love editorial style photography.
                        </p>
                        <div className='flex items-center mt-4 text-blue-600'>
                            <AiFillCheckCircle />
                            <p className='mx-1 '>Available for hire.</p>
                        </div>
                        <div className='flex items-center my-3 text-[#767676]'>
                            <HiLocationMarker />
                            <p className='mx-1'>Photographer in Joshua Tree, ca</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full border-b-2 border-gray-400 px-4 flex items-center sticky'>
                <button ref={refO} onClick={() => { refHandler(refO), setRendered(DataList[0]) }} className='px-4 py-4 flex items-center border-b-2 border-black mx-2'>
                    <HiPhotograph className='lg:block hidden' />
                    <p className='mx-2'>
                        Photos 16
                    </p>
                </button>
                <button ref={refS} onClick={() => { refHandler(refS), setRendered(DataList[1]) }} className='px-4 py-4 flex items-center border-b-2 mx-2'>
                    <AiFillHeart className='lg:block hidden' />
                    <p className='mx-2'>
                        Liked 16
                    </p>
                </button>
                <button ref={refT} onClick={() => { refHandler(refT), setRendered(DataList[2]) }} className='px-4 py-4 flex items-center border-b-2 mx-2'>
                    <IoMdPhotos className='lg:block hidden' />
                    <p className='mx-2'>
                        Collections 1
                    </p>
                </button>
                <button ref={refF} onClick={() => { refHandler(refF), setRendered(DataList[3]) }} className='px-4 py-4 flex items-center border-b-2 mx-2'>
                    <IoIosStats className='lg:block hidden' />
                    <p className='mx-2'>
                        Stats
                    </p>
                </button>
            </div>
            <div>
                {Rendered}
            </div>
        </div>
    )
}

export default index