import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import listData from "../assets/list.json";
import Card from './Card';

function Course() {
    const [currentPage, setCurrentPage] = useState(0);
    const cardsPerPage = 6;

    // Calculate the index range of the cards to be displayed
    const startIndex = currentPage * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const currentCards = listData.slice(startIndex, endIndex);

    // Handle clicking "Next" button
    const handleNext = () => {
        if (endIndex < listData.length) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    // Handle clicking "Previous" button (if you want to allow going back)
    const handlePrevious = () => {
        if (currentPage > 0) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    };

    return (
        <>
            <Navbar />

            {/* Full div Outer div */}
            <div className='w-full dark:bg-slate-900 dark:text-white bg-slate-50'>

                {/* Heading and paragraphs */}
                <div className='text-center mb-10 pt-10 w-4/5 m-auto'>
                    <h1 className='text-4xl font-bold text-pink-600 mb-4'>Explore Our Courses</h1>
                    <p className='text-lg text-gray-700 dark:bg-slate-900 dark:text-white'>
                        At My Book Store, we offer a diverse range of courses designed to enhance your knowledge and skills.
                        Whether you're looking to dive into new subjects or deepen your understanding of familiar topics,
                        our carefully curated selection of courses has something for everyone.
                    </p>
                    <p className='text-lg text-gray -700 mt-4'>
                        Our courses are crafted by experts in their respective fields, ensuring you receive high-quality
                        content that is both informative and engaging. Join our community of learners today and unlock
                        the potential of your mind!
                    </p>
                </div>

                {/* Full div Inner div */}
                <div className='w-[100%] lg:w-[98%] text-center md:text-left mx-auto md:px-8 lg:px-20 p-5 flex flex-col items-end'>

                    {/* Cards here */}
                    <div className='flex flex-wrap items-center justify-between'>
                        {
                            currentCards.map((item) => (
                                <Card item={item} key={item.id} />
                            ))
                        }
                    </div>

                    {/* Pagination Buttons */}
                    <div className='mt-8 flex justify-between w-full'>
                        {/* Previous Button */}
                        <button
                            className="btn  dark:text-white btn-secondary"
                            onClick={handlePrevious}
                            disabled={currentPage === 0}>
                            Previous
                        </button>

                        {/* Next Button */}
                        <button
                            className="btn  dark:text-white btn-secondary"
                            onClick={handleNext}
                            disabled={endIndex >= listData.length}>
                            Next
                        </button>
                    </div>

                </div>

            </div>

            <Footer />
        </>
    );
}

export default Course;
