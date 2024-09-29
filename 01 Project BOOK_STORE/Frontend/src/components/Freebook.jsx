import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import dataList from "../assets/list.json";
import Card from './Card';

function Freebook() {

    const filterData = dataList.filter((data) => data.category === "Free");

    // Limit the filtered data to only 9 items
    const limitedData = filterData.slice(0, 9);

    // Function to limit characters and add ellipsis
    const limitText = (text, limit) => {
        return text.length > limit ? text.substring(0, limit) + '...' : text;
    };

    // React Slick settings
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className='w-full dark:bg-slate-900 dark:text-white bg-slate-50 '>

                <div className='w-[100%] lg:w-[98%] text-center md:text-left mx-auto md:px-8 lg:px-20 p-5 '>

                    <div>
                        <h1 className='font-bold text-3xl text-pink-600'>Explore Our Free Books Collection.</h1>
                        <p>Delve into a world of literary treasures without spending a dime. Enjoy a curated selection of captivating stories, timeless classics, and insightful reads, all available for free. Start your reading adventure today!</p>
                    </div>

                    {/* This contains free courses cards */}
                    <div className='mt-8 mb-8'>

                        <div className="slider-container">

                            <Slider {...settings}>
                                {
                                    limitedData.map((item) => (
                                        <Card item={item} key={item.id} />
                                    ))
                                }
                            </Slider>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Freebook;
