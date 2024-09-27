import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import dataList from "../../public/list.json";
import Card from './Card';

function Freebook() {

    const filterData = dataList.filter((data) => data.category === "Free");

    console.log(filterData.length)

    // Function to limit characters and add ellipsis
    const limitText = (text, limit) => {
        return text.length > limit ? text.substring(0, limit) + '...' : text;
    };



    // This is for 
    //     React Slick
    // The Last React Carousel You'll Ever Need!


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
            <div className='w-full bg-slate-50 '>

                <div className='w-[100%] lg:w-[98%] text-center md:text-left mx-auto md:px-8 lg:px-20 p-5 '>

                    <div>
                        <h1 className='font-bold text-3xl text-pink-600'>Explore Our Free Books Collection.</h1>
                        <p>Delve into a world of literary treasures without spending a dime. Enjoy a curated selection of captivating stories, timeless classics, and insightful reads, all available for free. Start your reading adventure today!</p>
                    </div>

                    {/* This contains free courses cards */}
                    <div className='mt-8 mb-8 '>

                        <div className="slider-container ">

                            <Slider {...settings}>
                                {
                                    filterData.map((item) => (
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



