import React from 'react';

function BannerSection({ tasks }) {
    return (
        <div className="space-y-4">
            {tasks.map((task, index) => (
                <div 
                    key={index} 
                    className={`p-4 rounded-lg shadow-md ${
                        task.completed ? 'bg-green-500' : task.failed ? 'bg-red-500' : 'bg-yellow-500'
                    } text-white`}
                >
                    <div className="flex justify-between items-center">
                        {/* Badge on the left */}
                        <span className={`text-white text-xs font-bold py-1 px-3 rounded-full ${
                            task.failed ? 'bg-red-700' : task.completed ? 'bg-green-700' : 'bg-yellow-700'
                        }`}>
                            {task.failed ? 'Failed' : task.completed ? 'Completed' : 'Active'}
                        </span>
                        {/* Date on the right */}
                        <p className="text-sm md:text-md font-medium">{task.date}</p>
                    </div>
                    {/* Task Heading */}
                    <h3 className="text-lg md:text-2xl font-semibold md:font-bold mt-2">{task.title}</h3>
                    {/* Task Description */}
                    <p className="text-sm md:text-xl mt-1">{task.description}</p>
                </div>
            ))}
        </div>
    );
}

export default BannerSection;
