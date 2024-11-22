import React from 'react'

function BannerSection() {
    return (
        <div className="space-y-4">
            <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
                <div className="flex justify-between items-center">
                    {/* Badge on the left */}
                    <span className="bg-red-500 text-white text-xs font-bold py-1 px-3 rounded-full">High</span>
                    {/* Date on the right */}
                    <p className="text-sm md:text-md font-medium">2024-11-22</p>
                </div>
                {/* Task Heading */}
                <h3 className="text-lg md:text-2xl font-semibold md:font-bold mt-2">Ex aur task</h3>
                {/* Task Description */}
                <p className="text-sm md:text-xl mt-1">This is a brief description of the task.</p>
            </div>

            <div className="bg-green-500 text-white p-4 rounded-lg shadow-md">
                <div className="flex justify-between items-center">
                    <span className="bg-red-500 text-white text-xs font-bold py-1 px-3 rounded-full">High</span>
                    <p className="text-sm md:text-md font-medium">2024-11-23</p>
                </div>
                <h3 className="text-lg md:text-2xl font-semibold md:font-bold mt-2">Example task</h3>
                <p className="text-sm md:text-xl mt-1">A short description of this task.</p>
            </div>

            <div className="bg-yellow-500 text-white p-4 rounded-lg shadow-md">
                <div className="flex justify-between items-center">
                    <span className="bg-red-500 text-white text-xs font-bold py-1 px-3 rounded-full">High</span>
                    <p className="text-sm md:text-md font-medium">2024-11-24</p>
                </div>
                <h3 className="text-lg md:text-2xl font-semibold md:font-bold mt-2">Another task</h3>
                <p className="text-sm md:text-xl mt-1">Details about the third task go here.</p>
            </div>
        </div>
    )
}

export default BannerSection
