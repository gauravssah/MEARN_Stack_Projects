import React from 'react';

function TaskList(props) {
    const tasks = props.tasks;

    // Generate a random background color for each task
    const generateRandomColor = () => {
        const colors = ['#f87171', '#fbbf24', '#34d399', '#60a5fa', '#a78bfa', '#f472b6'];
        return colors[Math.floor(Math.random() * colors.length)];
    };

    return (
        <div id="taskLists" className="bg-[#DBEAFE] rounded overflow-x-auto p-4 mt-5">
            <div className="md:flex md:space-x-4 ">
                {tasks.map((task, idx) => {
                    const randomColor = generateRandomColor(); // Generate random color
                    return (
                        <div
                            key={idx}
                            style={{ backgroundColor: randomColor }}
                            className="px-4 py-2 mb-5 relative rounded-lg shadow-md min-w-[300px] max-w-[400px] min-h-[300px] text-center"
                        >
                            <div className='mb-8'>
                                <p className='bg-red-700 text-white absolute left-0 text-sm  px-2 py-1 rounded-r  '>{task.category}</p>

                            </div>
                            <h2 className="text-2xl font-semibold text-white mb-3">
                                {task.title}
                            </h2>
                            <p className="text-sm text-black">
                                {task.description}
                            </p>

                            <div className="flex justify-between  items-center  absolute w-[85%] bottom-3  ">
                                <button
                                    className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-200 font-bold"
                                >
                                    Completed
                                </button>
                                <button
                                    className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-200 font-bold"
                                >
                                    Failed
                                </button>
                            </div>
                        </div>

                    );
                })}
            </div>
        </div>
    );
}

export default TaskList;
