import React from 'react';

function TaskList() {
    // Example data for tasks
    const tasks = Array.from({ length: 20 }, (_, index) => ({
        id: index + 1,
        title: `Task ${index + 1}`,
        description: `Description of Task ${index + 1}`,
        color: index % 2 === 0 ? 'blue' : 'green', // Alternating colors
    }));

    return (

        <div id='taskLists' className=" bg-red-700 overflow-x-auto p-4">
            <div className="flex space-x-4">
                {tasks.map((task) => (
                    <div
                        key={task.id}
                        className={`bg-${task.color}-100 p-4 rounded-lg shadow-md min-w-[200px] text-center`}
                    >
                        <h2 className={`text-xl font-semibold text-${task.color}-800`}>
                            {task.title}
                        </h2>
                        <p className={`text-sm text-${task.color}-600`}>
                            {task.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>

    );
}

export default TaskList;
