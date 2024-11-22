import React from 'react';

function AllTask() {
    const tasks = [
        { name: "Gaurav", task: "Make a UI Design", status: "Pending" },
        { name: "John", task: "Fix Backend Issue", status: "Completed" },
        { name: "Emma", task: "Write Documentation", status: "In Progress" },
        { name: "Sophia", task: "Create API", status: "Pending" },
        { name: "Liam", task: "Test UI", status: "Completed" },
        { name: "Noah", task: "Refactor Code", status: "In Progress" },
    ];

    const colors = [
        "bg-red-400",
        "bg-green-400",
        "bg-yellow-400",
        "bg-blue-400",
        "bg-purple-400",
        "bg-teal-400",
    ];

    return (
        <div className="bg-[#1c1c1c] p-5 rounded mt-5 h-52 overflow-auto">
            {tasks.map((task, index) => (
                <div
                    key={index}
                    className={`${colors[index % colors.length]} mb-2 py-2 px-4 flex justify-between rounded`}
                >
                    <h2 className="font-semibold">{task.name}</h2>
                    <h3>{task.task}</h3>
                    <h5>{task.status}</h5>
                </div>
            ))}
        </div>
    );
}

export default AllTask;
