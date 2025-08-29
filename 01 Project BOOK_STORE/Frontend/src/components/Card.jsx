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
                    <figure className='relative'>
                        <img
                            className='h-96 w-full object-cover rounded-t-lg' // Rounded corners for a modern look
                            src={item.image || 'https://via.placeholder.com/150'} // Fallback image
                            alt={item.name || 'Book Image'}
                        />

                        {/* Book Image cover data */}
                        <div className='absolute inset-0 flex flex-col justify-center items-center text-center bg-pink-100 bg-opacity-50 p-4 rounded-t-lg'>
                            <h2 className='text-pink-900 text-xl font-bold mb-2'>{item.name}</h2>
                            <p className='text-black text-sm'>{item.dec}</p>
                        </div>

                        {/* Adjusted logo section: rounded logo at the top left */}
                        <div className='absolute top-2 left-2'>
                            <img
                                src={item.logo}
                                alt="logo"
                                className='h-10 w-10 rounded-full border-2 border-white shadow-md' // Rounded logo with border and shadow
                            />
                        </div>
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
