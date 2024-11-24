import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

function AllTask() {

    const authData = useContext(AuthContext);

    console.log(authData.employees);

    const tasks = authData.employees;

    // const tasks = [
    //     { name: "Gaurav", task: "Make a UI Design", status: "Pending" },
    //     { name: "John", task: "Fix Backend Issue", status: "Completed" },
    //     { name: "Emma", task: "Write Documentation", status: "In Progress" },
    //     { name: "Sophia", task: "Create API", status: "Pending" },
    //     { name: "Liam", task: "Test UI", status: "Completed" },
    //     { name: "Noah", task: "Refactor Code", status: "In Progress" },
    // ];

    const colors = [
        "bg-red-400",
        "bg-green-400",
        "bg-yellow-400",
        "bg-blue-400",
        "bg-purple-400",
        "bg-teal-400",
    ];

    return (

        <div className='bg-blue-200 rounded'>
            <div className='flex justify-between  mt-3 py-2 px-6  '>
                <h2 className="font-semibold text-xl">Name</h2>
                <h3 className="font-semibold text-xl">Email </h3>
                <h5 className="font-semibold text-xl">Tasks</h5>
            </div>

            <div className=" p-2  bg-white mt-1 h-52 overflow-auto">

                {tasks.map((task, index) => (
                    <div
                        key={index}
                        className={`${colors[index % colors.length]} mb-2 py-2 px-4 flex justify-between rounded`}
                    >
                        <h2 className="font-semibold">{task.name}</h2>
                        <h3>{task.email}</h3>
                        <h5>{task.tasks.length}</h5>
                    </div>
                ))}
            </div>
        </div>

    );
}

export default AllTask;
