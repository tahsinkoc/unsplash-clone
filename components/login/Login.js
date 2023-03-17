import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { useState } from 'react'
function Login() {

    const [isLogin, setLogin] = useState(true)

    if (!isLogin) {
        return (
            <div className='w-screen h-screen flex items-center justify-center'>
                <div className='w-[40rem] rounded px-8 py-2'>
                    <div className='text-center w-full flex items-center flex-col'>
                        <img src="/logo/unsplash_logo_icon_206651.svg" className='h-16' alt="" />
                        <p className='text-[1.8rem] my-3 font-bold'>Login</p>
                        <p className='my-3'>Welcome back</p>
                        <button className='flex items-center px-8 py-2 rounded text-white bg-blue-600 w-full justify-center'>
                            <FaFacebook />
                            <p className='mx-2'>Login with facebook</p>
                        </button>
                        <p className='my-3'>or</p>
                        <div className='w-full flex flex-col text-start'>
                            <label htmlFor="">Email</label>
                            <input type="text" className='px-4 py-2 border my-2 border-[#111111] rounded' placeholder='Email' />
                        </div>
                        <div className='w-full flex flex-col my-2'>
                            <div className='w-full flex justify-between items-center flex-row'>
                                <label>Password</label>
                                <label className='border-b border-black cursor-pointer'>Forgot your password?</label>
                            </div>
                            <input type="password" className='px-4 py-2 border my-2 border-[#111111] rounded' placeholder='Password' />
                        </div>
                        <button className='flex items-center px-8 py-2 rounded text-white bg-black w-full justify-center'>
                            {/* <FaFacebook /> */}
                            <p className='mx-2'>Login</p>
                        </button>
                        <div className='my-8 py-8 px-8 flex items-center justify-center border-2 w-full rounded'>
                            <button onClick={() => setLogin(!isLogin)}>Dont you have account? Register Now.</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className='w-screen h-screen flex items-center lg:flex-row flex-col'>
                <div className='lg:w-[38%] w-full lg:h-full h-auto imagine relative'>
                    <div className="bg-[rgba(0,0,0,.5)] z-20 w-full h-full">
                        <div className='p-11'>
                            <img src="/logo/white.svg" className='h-16' alt="" />
                        </div>
                        <div className='text-white my-28 p-11'>
                            <h2 className='text-[3rem] font-bold'>
                                Creation starts here
                            </h2>
                            <p className='text-[1.6rem]'>
                                Access 4,917,325 free, high-resolution photos you can’t find anywhere else
                            </p>
                        </div>

                    </div>

                </div>
                <div className='w-[70%] flex items-center justify-center'>
                    <div className='w-[40rem] rounded px-8 py-2'>
                        <div className='text-center w-full flex items-center flex-col'>
                            <img src="/logo/unsplash_logo_icon_206651.svg" className='h-16' alt="" />
                            <p className='text-[1.8rem] my-3 font-bold'>Join Unsplash</p>
                            <p className='my-3'>Welcome back</p>
                            <button className='flex items-center px-8 py-2 rounded text-white bg-blue-600 w-full justify-center'>
                                <FaFacebook />
                                <p className='mx-2'>Login with facebook</p>
                            </button>
                            <p className='my-3'>or</p>
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
                            <div className='w-full flex flex-col my-2'>
                                <div className='w-full flex justify-between items-center flex-row'>
                                    <label>Password (min. 8 characters)</label>
                                    {/* <label className='border-b border-black cursor-pointer'>Forgot your password?</label> */}
                                </div>
                                <input type="password" className='px-4 py-2 border my-2 border-[#111111] rounded' placeholder='Password' />
                            </div>
                            <button className='flex items-center px-8 py-2 rounded text-white bg-black w-full justify-center'>
                                {/* <FaFacebook /> */}
                                <p className='mx-2'>Login</p>
                            </button>
                            <div className='my-8 py-8 px-8 flex items-center justify-center border-2 w-full rounded'>
                                <button onClick={() => setLogin(!isLogin)}>Do you already have an account? Login.</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <></>
    )
}

export default Login