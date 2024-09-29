import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Contact() {
    return (
        <>
            <Navbar />

            {/* Full div Outer div */}
            <div className='w-full dark:bg-slate-900 dark:text-white from-gray-100 to-slate-100 py-10'>

                {/* Full div Inner div */}
                <div className='w-[100%] lg:w-[90%] text-center md:text-left mx-auto md:px-8 lg:px-20 p-5'>

                    {/* Main Heading */}
                    <h1 className='text-4xl font-bold text-pink-600 mb-14 text-center'>Get in Touch with Us</h1>

                    <div className='flex flex-col md:flex-row md:justify-between gap-10'>

                        {/* Contact Information Section */}
                        <div className='md:w-1/2 order-2 md:order-1 '>
                            <h2 className='text-3xl font-semibold mb-6 text-gray-800 dark:bg-slate-900 dark:text-white'>Contact Information</h2>
                            <p className='text-gray-600 mb-8 dark:bg-slate-900 dark:text-white'>
                                We’re here to assist you. Reach out to us via the contact details below or send us a message using the form.
                            </p>

                            {/* Redesigned Address Section */}
                            <div className='space-y-8 text-start'>

                                {/* Address */}
                                <div className='flex items-start gap-4'>
                                    <FaMapMarkerAlt className='text-pink-600 text-2xl mt-1' />
                                    <div>
                                        <h3 className='text-lg font-medium text-gray-700 dark:bg-slate-900 dark:text-white'>Address</h3>
                                        <p className='text-gray-600 dark:bg-slate-900 dark:text-white'>1234 Book Lane, Reading City, RC 56789</p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className='flex items-start gap-4'>
                                    <FaPhoneAlt className='text-pink-600 text-2xl mt-1' />
                                    <div>
                                        <h3 className='text-lg font-medium text-gray-700 dark:bg-slate-900 dark:text-white'>Phone</h3>
                                        <p className='text-gray-600 dark:bg-slate-900 dark:text-white'>+1 (555) 123-4567</p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className='flex items-start gap-4'>
                                    <FaEnvelope className='text-pink-600 text-2xl mt-1' />
                                    <div>
                                        <h3 className='text-lg font-medium text-gray-700 dark:bg-slate-900 dark:text-white'>Email</h3>
                                        <p className='text-gray-600 dark:bg-slate-900 dark:text-white'>support@BookNest.com</p>
                                    </div>
                                </div>

                                {/* Follow Us */}
                                <div>
                                    <h3 className='text-xl  font-bold text-gray-700 dark:bg-slate-900 dark:text-white'>Follow Us:</h3>
                                    <div className='flex gap-6 mt-3'>
                                        <a href='#' className='text-pink-600 hover:text-pink-800 text-xl'><FaFacebook /></a>
                                        <a href='#' className='text-pink-600 hover:text-pink-800 text-xl'><FaTwitter /></a>
                                        <a href='#' className='text-pink-600 hover:text-pink-800 text-xl'><FaInstagram /></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form Section */}
                        <div className='md:w-1/2 bg-white dark:bg-slate-900 dark:border dark:text-white md:p-8 p-4 rounded-xl shadow-lg order-1'>
                            <h2 className='md:text-3xl text-2xl font-semibold mb-6 text-gray-800 dark:bg-slate-900 dark:text-white'>Send Us a Message</h2>

                            <form className='space-y-8 text-start'>
                                {/* Name */}
                                <div>
                                    <label htmlFor='name' className='block text-lg font-medium text-gray-700 dark:bg-slate-900 dark:text-white'>Your Name <span className='text-pink-600'>*</span></label>
                                    <input
                                        type='text'
                                        id='name'
                                        name='name'
                                        required
                                        className='mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 transition ease-in-out duration-200 dark:bg-slate-900 dark:text-white'
                                        placeholder='Enter your name'
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor='email' className='block text-lg font-medium text-gray-700 dark:bg-slate-900 dark:text-white'>Your Email <span className='text-pink-600'>*</span></label>
                                    <input
                                        type='email'
                                        id='email'
                                        name='email'
                                        required
                                        className='mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 transition ease-in-out duration-200 dark:bg-slate-900 dark:text-white'
                                        placeholder='Enter your email '
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor='message' className='block text-lg font-medium text-gray-700 dark:bg-slate-900 dark:text-white'>Your Message <span className='text-pink-600'>*</span></label>
                                    <textarea
                                        id='message'
                                        name='message'
                                        rows='5'
                                        required
                                        className='mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 transition ease-in-out duration-200 dark:bg-slate-900 dark:text-white'
                                        placeholder='Type your message...'
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <div>
                                    <button
                                        type='submit'
                                        className='w-full inline-flex justify-center py-3 px-4 border border-transparent shadow-md text-lg font-medium rounded-lg text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition ease-in-out duration-200'
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>


                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Contact;
