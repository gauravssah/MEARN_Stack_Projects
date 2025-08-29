import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function About() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "What genres of books do you offer?",
            answer: "We offer a wide range of genres including fiction, non-fiction, mystery, romance, science fiction, and children's books."
        },
        {
            question: "Do you have any membership programs?",
            answer: "Yes, we offer a membership program that provides discounts, early access to sales, and exclusive invitations to events."
        },
        {
            question: "Can I return a book if I’m not satisfied?",
            answer: "Yes, you can return books within 30 days of purchase for a full refund, provided they are in original condition."
        },
        {
            question: "Do you host any events?",
            answer: "Absolutely! We host book signings, readings, and book club meetings regularly. Check our events page for details."
        },
        {
            question: "How can I contact customer service?",
            answer: "You can reach our customer service team through the contact page or by emailing support@mybookstore.com."
        }
    ];

    return (
        <>
            <Navbar />

            {/* Full div Outer div */}
            <div className=' dark:bg-slate-900 dark:text-white w-full  bg-gradient-to-br  py-16'>
                {/* Full div Inner div */}
                <div className=' dark:bg-slate-900 dark:text-white w-[100%] lg:w-[90%] text-center md:text-left mx-auto md:px-8 lg:px-20 p-5'>
                    {/* Main Heading */}
                    <h1 className=' dark:bg-slate-900 text-4xl font-bold text-pink-600 mb-8'>About Us</h1>

                    {/* Description Section */}
                    <p className=' dark:bg-slate-900 dark:text-white text-lg text-gray-700 mb-6'>
                        Welcome to My Book Store, your go-to destination for a wide array of books spanning various genres.
                        We are passionate about promoting reading culture and providing access to literary treasures for all.
                    </p>

                    <h2 className=' dark:bg-slate-900 dark:text-white text-3xl font-semibold text-gray-800 mb-4'>Our Mission</h2>
                    <p className=' dark:bg-slate-900 dark:text-white text-lg text-gray-700 mb-6'>
                        Our mission is to inspire, educate, and entertain through the written word. We aim to connect readers
                        with the stories and knowledge that ignite their imaginations and broaden their horizons.
                    </p>

                    <h2 className=' dark:bg-slate-900 dark:text-white text-3xl font-semibold text-gray-800 mb-4'>What We Offer</h2>
                    <p className=' dark:bg-slate-900 dark:text-white text-lg text-gray-700 mb-6'>
                        At My Book Store, we offer a carefully curated selection of books, including bestsellers, classics,
                        and hidden gems. Our knowledgeable staff is always ready to recommend titles that will suit your taste.
                    </p>

                    <h2 className=' dark:bg-slate-900 dark:text-white text-3xl font-semibold text-gray-800 mb-4'>Join Our Community</h2>
                    <p className=' dark:bg-slate-900 dark:text-white text-lg text-gray-700 mb-6'>
                        We believe in the power of community. Join us for book clubs, author signings, and literary events that
                        bring readers together to celebrate the joy of reading. Follow us on social media to stay updated
                        on our latest offerings and events!
                    </p>

                    <h2 className=' dark:bg-slate-900 dark:text-white text-3xl font-semibold text-gray-800 mb-4'>Frequently Asked Questions</h2>
                    <div className=' dark:bg-slate-900 dark:text-white space-y-4'>
                        {faqs.map((faq, index) => (
                            <div key={index}>
                                <button
                                    className=' dark:bg-slate-900 dark:border dark:text-white flex justify-between items-center w-full p-4 text-left text-lg font-medium text-gray-800 bg-white rounded-lg shadow-md hover:bg-gray-100'
                                    onClick={() => toggleAccordion(index)}
                                >
                                    <span>{faq.question}</span>
                                    <span className=' dark:bg-slate-900 dark:text-white text-pink-600'>{openIndex === index ? '-' : '+'}</span>
                                </button>
                                {openIndex === index && (
                                    <div className=' dark:bg-slate-800 dark:text-white p-4 mt-2 text-gray-600 bg-gray-50 rounded-lg'>
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default About;
