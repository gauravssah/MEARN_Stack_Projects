import React from 'react';
import NotFoundImage from '../assets/images/NotFoundImage.jpg'; // Assuming you have an image for 404
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <>
            {/* Container for the 404 page */}
            <div className="w-[100%] dark:bg-slate-900 dark:text-white lg:w-[98%] text-center md:mt-8 md:text-left mx-auto md:px-8 lg:px-20 p-2">

                <div className='flex flex-col-reverse md:flex-row m-auto items-center justify-between gap-3'>

                    {/* This contains texts */}
                    <div className='w-full md:w-1/2'>

                        {/* Heading for 404 */}
                        <div className='text-4xl font-bold text-pink-600'>
                            <h1>Oops! <span className='text-gray-800'>Page Not Found</span></h1>
                        </div>

                        {/* Paragraph for description */}
                        <div className='mt-8'>
                            <p className='text-gray-500'>
                                "The page you're looking for might have been removed, had its name changed, or is temporarily unavailable."
                            </p>
                        </div>

                        {/* Button to go back */}
                        <div className='mt-8 mb-8'>
                            <Link to="/" className="btn w-full md:w-auto btn-active btn-secondary">
                                Go Back to Homepage
                            </Link>
                        </div>

                    </div>

                    {/* This contains the 404 image */}
                    <div className='w-full md:w-1/2'>
                        <div>
                            <img className='mx-auto w-[50%]' src={NotFoundImage} alt="Not Found" />
                        </div>
                    </div>

                </div>

                {/* Bottom text for additional guidance */}
                <div className='mb-5 text-center mt-8'>
                    <h1 className='text-2xl font-bold text-pink-500'>
                        Let's get you back on track!
                    </h1>
                    <p className='mt-1'>
                        "Return to the homepage or try searching for what you need."
                    </p>
                </div>
            </div>
        </>
    );
}

export default NotFound;
