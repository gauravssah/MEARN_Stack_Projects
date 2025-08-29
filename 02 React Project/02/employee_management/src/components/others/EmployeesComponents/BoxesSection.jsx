import React, { useEffect, useState } from 'react';

function BoxesSection({ tasks }) {
    // State variables to store counts
    const [newTasks, setNewTasks] = useState(0);
    const [completed, setCompleted] = useState(0);
    const [accepted, setAccepted] = useState(0);
    const [failed, setFailed] = useState(0);

    useEffect(() => {
        // Reset counts
        let newTaskCount = 0;
        let completedCount = 0;
        let acceptedCount = 0;
        let failedCount = 0;

        // Iterate through tasks to update counts
        tasks.forEach(task => {
            if (task.newTask) newTaskCount++;
            if (task.completed) completedCount++;
            if (task.active) acceptedCount++; // Assuming "active" means "accepted"
            if (task.failed) failedCount++;
        });

        // Update state variables
        setNewTasks(newTaskCount);
        setCompleted(completedCount);
        setAccepted(acceptedCount);
        setFailed(failedCount);
    }, [tasks]); // Dependency array ensures it re-runs when `tasks` changes

    return (
        <div className="grid grid-cols-2 gap-4 mb-6">
            {/* New Task */}
            <div className="bg-blue-100 p-4 rounded-lg shadow-md text-center">
                <h2 className="text-xl md:text-2xl font-semibold md:font-bold text-blue-800">{newTasks}</h2>
                <p className="text-sm md:text-xl md:font-bold text-blue-600">New Tasks</p>
            </div>
            {/* Completed */}
            <div className="bg-green-100 p-4 rounded-lg shadow-md text-center">
                <h2 className="text-xl md:text-2xl font-semibold md:font-bold text-green-800">{completed}</h2>
                <p className="text-sm md:text-xl md:font-bold text-green-600">Completed</p>
            </div>
            {/* Accepted */}
            <div className="bg-yellow-100 p-4 rounded-lg shadow-md text-center">
                <h2 className="text-xl md:text-2xl font-semibold md:font-bold text-yellow-800">{accepted}</h2>
                <p className="text-sm md:text-xl md:font-bold text-yellow-600">Accepted</p>
            </div>
            {/* Failed */}
            <div className="bg-red-100 p-4 rounded-lg shadow-md text-center">
                <h2 className="text-xl md:text-2xl font-semibold md:font-bold text-red-800">{failed}</h2>
                <p className="text-sm md:text-xl md:font-bold text-red-600">Failed</p>
            </div>
        </div>
    );
}

export default BoxesSection;
