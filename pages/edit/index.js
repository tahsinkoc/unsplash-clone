import Navbar from '@/components/navbar/Navbar'
import Side from '@/components/side/Side'
import React from 'react'
import { useState } from 'react'

function index() {

    const [DataList, setDataList] = useState([
        <Side />,
        <div className=''>
            <h2 className='font-bold text-[1.3rem]'>Download History</h2>
            <p className='my-4'>
                You don’t have any downloads associated to your account.
                Note: Some activity might take some time to appear.
            </p>

        </div>
    ])
    const [Rendered, setRendered] = useState(
        <Side />
    )

    const handleClick = (par) => {
        setRendered(DataList[par])
    }

    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-auto grid lg:grid-cols-4 grid-cols-1 my-16 lg:px-0 px-8'>
                <div className='col-span-1'>
                    <h2 className='font-bold text-[1.3rem]'>Account Settings</h2>
                    <div className='flex items-start flex-col my-4'>
                        <button onClick={() => handleClick(0)} className='my-2'>Edit Profile</button>
                        <button onClick={() => handleClick(0)} className='my-2'>Hiring</button>
                        <button onClick={() => handleClick(1)} className='my-2'>Download History</button>
                        <button className='my-2'>Email Settings</button>
                        <button className='my-2'>Change Password</button>
                        <button className='my-2'>Applications</button>
                        <button className='my-2'>Close Account</button>
                    </div>
                </div>
                <div className='col-span-3'>

                    {Rendered}
                </div>
            </div>
        </div >
    )
}

export default index