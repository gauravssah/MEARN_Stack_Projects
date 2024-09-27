import React from 'react';
import BannerImage from '../../public/images/BannerImage.png';

function Banner() {
    return (
        <>
            {/* This is Banner Containers */}
            <div className="w-[100%] lg: lg:w-[98%] text-center md:text-left mx-auto md:px-8 lg:px-20 p-2">

                <div className='flex flex-col-reverse md:flex-row m-auto  items-center justify-between gap-3'>

                    {/* This contains texts */}
                    <div className='w-full md:w-1/2'>

                        {/* This is Heading  */}
                        <div className='text-4xl font-bold'>
                            <h1>Welcome to <span className='text-pink-600'>MyBookStore,</span></h1>
                            <h1 className='md:mt-2 mt-3'>Where Every Story <span className='text-pink-500'>Begins!</span></h1>
                        </div>

                        {/* This is paragraph */}
                        <div className='mt-8'>
                            <p>
                                "Explore our curated collection of books, from timeless classics to the latest releases. Whether you're seeking inspiration, knowledge, or entertainment, your next great read awaits here."
                            </p>
                        </div>

                        {/* Email Input */}
                        <div className='mt-8'>
                            <label className="input input-bordered flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                        d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                    <path
                                        d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                </svg>
                                <input type="text" className="grow" placeholder="Email" />
                            </label>
                        </div>

                        {/* Button */}
                        <div className='mt-8 mb-8'>
                            <button className="btn w-full md:w-auto btn-active btn-secondary">Create Account</button>
                        </div>

                    </div>



                    {/* -------------------------- */}
                    {/* This contains images */}
                    <div className='w-full md:w-1/2'>
                        <div>
                            <img className='' src={BannerImage} alt="BannerImage" />
                        </div>
                    </div>

                </div>

                {/* Bottom Texes */}
                <div className='mb-5'>
                    <h1 className='text-2xl font-bold text-pink-500 '>Unleash the power of stories.
                        <span className=''> Start your reading journey today!</span></h1>
                    <p className='mt-1'>"It’s simple, inspiring, and encourages action. Let me know if you'd like to tweak it further!"</p>
                </div>

            </div >

        </>
    )
}

export default Banner
