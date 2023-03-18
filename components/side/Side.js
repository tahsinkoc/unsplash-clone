import React from 'react'

function Side() {
    return (
        <div className=''>
            <h2 className='font-bold text-[1.3rem]'>Edit Profile</h2>
            <div className='grid lg:grid-cols-3 grid-cols-1 my-3'>
                <div className='flex items-center justify-center flex-col lg:col-span-1 col-span-3'>
                    <img src="/pp/pp2.webp" className='h-28 rounded-full' alt="" />
                    <button className='border-b border-[#767676] text-[#767676] my-2'>
                        Change profile image
                    </button>
                    <div className='w-full my-8'>
                        <p>Badge</p>
                        <p>You dont have any badge yet.</p>
                    </div>
                </div>
                <div className='col-span-2'>
                    <div className='w-full flex items-center justify-between gap-x-2'>
                        <div className='w-full flex flex-col text-start'>
                            <label htmlFor="">First Name</label>
                            <input type="text" className='px-4 py-2 border my-2 border-[#111111] rounded' placeholder='First Name' />
                        </div>
                        <div className='w-full flex flex-col text-start'>
                            <label htmlFor="">Last Name</label>
                            <input type="text" className='px-4 py-2 border my-2 border-[#111111] rounded' placeholder='Last Name' />
                        </div>
                    </div>
                    <div className='w-full flex flex-col text-start'>
                        <label htmlFor="">Email</label>
                        <input type="text" className='px-4 py-2 border my-2 border-[#111111] rounded' placeholder='Email' />
                    </div>
                    <div className='w-full flex flex-col text-start'>
                        <label htmlFor="">Username (only letters, numbers, and underscores)</label>
                        <input type="text" className='px-4 py-2 border my-2 border-[#111111] rounded' placeholder='Username' />
                    </div>
                </div>
                <div className='col-span-3'>
                    <label htmlFor="" className='text-[#767676] font-bold text-xl my-2 mb-8'>About</label>
                    <div className='w-full flex items-center justify-between gap-x-2 mt-4'>
                        <div className='w-full flex flex-col text-start'>
                            <label htmlFor="">Location</label>
                            <input type="text" className='px-4 py-2 border my-2 border-[#111111] rounded' placeholder='First Name' />
                        </div>
                        <div className='w-full flex flex-col text-start'>
                            <label htmlFor="">Personal Site/ Portofloio</label>
                            <input type="text" className='px-4 py-2 border my-2 border-[#111111] rounded' placeholder='Last Name' />
                        </div>
                    </div>
                    <div className='w-full flex items-start justify-between gap-x-2 mt-4'>
                        <div className='w-full flex flex-col text-start'>
                            <label htmlFor="">Bio</label>
                            <textarea type="text" className='px-4 py-2 border my-2 border-[#111111] rounded' placeholder='Bio'></textarea>
                        </div>
                        <div className='w-full flex flex-col text-start'>
                            <label htmlFor="">Interests (maximum 5)
                            </label>
                            <input type="text" className='px-4 py-2 border my-2 border-[#111111] rounded' placeholder='Last Name' />
                        </div>
                    </div>
                    <div className='w-full flex flex-col text-start'>
                        <label htmlFor="">Username (only letters, numbers, and underscores)</label>
                        <input type="text" className='px-4 py-2 border my-2 border-[#111111] rounded' placeholder='Username' />
                    </div>
                </div>
                <div className='col-span-3 my-8'>
                    <label htmlFor="" className='text-[#767676] font-bold text-xl my-2 mb-8'>Social</label>
                    <div className='w-full flex items-center justify-between gap-x-2 mt-4'>
                        <div className='w-full flex flex-col text-start'>
                            <label htmlFor="">Instagram Username</label>
                            <input type="text" className='px-4 py-2 border my-2 border-[#111111] rounded' placeholder='Instagram Username' />
                        </div>
                        <div className='w-full flex flex-col text-start'>
                            <label htmlFor="">Twitter Username</label>
                            <input type="text" className='px-4 py-2 border my-2 border-[#111111] rounded' placeholder='Twitter Username' />
                        </div>
                    </div>
                </div>
                <div className='col-span-3 my-8'>
                    <label htmlFor="" className='text-[#767676] font-bold text-xl my-2 mb-8'>Donations</label>
                    <div className='w-full flex items-center justify-between gap-x-2 mt-4'>
                        <div className='w-full flex flex-col text-start'>
                            <label htmlFor="">Paypal or Email username for donations</label>
                            <input type="text" className='px-4 py-2 border my-2 border-[#111111] rounded' placeholder='name@domain.com' />
                        </div>
                        <div className='w-full flex flex-col text-start'>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Side