import React from 'react';


function Card({ item }) {
    // Function to limit characters and add ellipsis
    const limitText = (text, limit) => {
        return text.length > limit ? text.substring(0, limit) + '...' : text;
    };

    return (
        <>
            <div className='mt-4 p-2'>
                <div className="card bg-base-100 md:w-80 shadow-xl md:mb-5 mb-10 transition-transform transform hover:scale-105 dark:bg-slate-900 dark:text-white dark:border">
                    <figure>
                        <img
                            src={item.image || 'https://via.placeholder.com/150'} // Fallback image if no image is provided
                            alt={item.name || 'Book Image'} />
                    </figure>
                    <div className="card-body w-full px-5">
                        <h2 className="card-title">
                            {limitText(item.name, 10)} {/* Limit name to 10 characters */}
                            <div className="badge badge-secondary">{item.category}</div>
                        </h2>
                        <p>{limitText(item.title, 52)} {/* Limit title to 52 characters */}</p>
                        <div className="card-actions justify-between items-center">
                            <div className="font-bold badge-outline"> &#8377; {item.price === 0 ? "00" : item.price}</div>
                            <div className={`border-2 rounded-md border-pink-600 badge-outline px-2 py-1 cursor-pointer hover:bg-pink-600 transition-all hover:text-white`}>
                                Buy Now
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;
