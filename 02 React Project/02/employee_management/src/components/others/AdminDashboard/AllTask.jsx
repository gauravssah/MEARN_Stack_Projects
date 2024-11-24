import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

function AllTask() {
    const authData = useContext(AuthContext); // Get employee data from AuthContext
    const employees = authData.employees; // Destructure employee data

    const [selectedEmployee, setSelectedEmployee] = useState(null); // To track the selected employee for modal
    const [bodyScrollDisabled, setBodyScrollDisabled] = useState(false); // To disable background scrolling

    // Disable body scroll when the modal is open
    useEffect(() => {
        if (selectedEmployee) {
            document.body.style.overflow = 'hidden'; // Disable scrolling
            setBodyScrollDisabled(true);
        } else {
            document.body.style.overflow = 'auto'; // Enable scrolling
            setBodyScrollDisabled(false);
        }
    }, [selectedEmployee]);

    // Calculate task stats (active, completed, failed tasks)
    const getTaskStats = (tasks) => {
        return {
            active: tasks.filter((task) => task.active).length,
            completed: tasks.filter((task) => task.completed).length,
            failed: tasks.filter((task) => task.failed).length,
        };
    };

    // Function to close the modal
    const closeModal = () => setSelectedEmployee(null);

    return (
        <div className="bg-gray-100 rounded-lg shadow-lg p-6">
            {/* Header Section */}
            <div className="flex justify-between items-center border-b pb-4 mb-4">
                <h2 className="font-bold text-2xl text-gray-700">All Employees and Tasks</h2>
            </div>

            {/* Employee List */}
            <div className="space-y-4">
                {employees.map((employee, index) => (
                    <div
                        key={employee.id}
                        className="flex justify-between items-center p-4 rounded-lg shadow-md hover:shadow-lg transition bg-blue-100 cursor-pointer"
                        onClick={() => setSelectedEmployee(employee)} // Open modal on click
                    >
                        {/* Employee Name and Email */}
                        <div>
                            <h2 className="font-semibold text-lg text-gray-800">{employee.name}</h2>
                            <p className="text-sm text-gray-600">{employee.email}</p>
                        </div>

                        {/* Task Count */}
                        <div className="bg-gray-200 text-gray-800 font-bold px-4 py-2 rounded-full">
                            {employee.tasks.length} Tasks
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedEmployee && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
                    <div className="relative bg-white rounded-lg shadow-lg w-full max-w-lg p-6 overflow-auto max-h-[90vh]">
                        {/* Close Button */}
                        <button
                            className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-lg font-bold"
                            onClick={closeModal} // Close the modal
                        >
                            ✕
                        </button>

                        {/* Modal Header */}
                        <h3 className="font-bold text-2xl mb-4 text-gray-800">
                            {selectedEmployee.name}'s Task Details
                        </h3>
                        <p className="text-gray-600 mb-4">Email: {selectedEmployee.email}</p>

                        {/* Task Stats */}
                        <div className="mb-6 flex justify-between">
                            <p className="bg-green-100 text-green-700 px-3 py-1 rounded font-semibold">
                                Active Tasks: {getTaskStats(selectedEmployee.tasks).active}
                            </p>
                            <p className="bg-blue-100 text-blue-700 px-3 py-1 rounded font-semibold">
                                Completed Tasks: {getTaskStats(selectedEmployee.tasks).completed}
                            </p>
                            <p className="bg-red-100 text-red-700 px-3 py-1 rounded font-semibold">
                                Failed Tasks: {getTaskStats(selectedEmployee.tasks).failed}
                            </p>
                        </div>

                        {/* Task List */}
                        <div className="space-y-2">
                            <h4 className="font-bold text-lg mb-2">All Tasks</h4>
                            {selectedEmployee.tasks.map((task, i) => (
                                <div
                                    key={i}
                                    className="border p-4 rounded-lg bg-gray-50 shadow-sm hover:shadow-md"
                                >
                                    {/* Task Details */}
                                    <h5 className="font-semibold text-gray-800">{task.title}</h5>
                                    <p className="text-sm text-gray-600">{task.description}</p>
                                    <p className="text-sm text-gray-500">Category: {task.category}</p>
                                    <p className="text-sm text-gray-500">Date: {task.date}</p>
                                    <p className="text-sm">
                                        Status:{" "}
                                        {task.completed
                                            ? "Completed"
                                            : task.failed
                                                ? "Failed"
                                                : task.active
                                                    ? "Active"
                                                    : "Inactive"}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AllTask;
