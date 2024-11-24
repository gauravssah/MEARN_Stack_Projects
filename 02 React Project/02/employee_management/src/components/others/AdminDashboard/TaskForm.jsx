import React, { useState } from 'react';

function TaskForm() {
    // State for form inputs
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [assignTo, setAssignTo] = useState('');
    const [category, setCategory] = useState('');

    // Handle form submission
    const handleTaskForm = (e) => {
        e.preventDefault();
        console.log("Task Created:");
        console.log("Title: ", title);
        console.log("Description: ", description);
        console.log("Date: ", date);
        console.log("Assign To: ", assignTo);
        console.log("Category: ", category);

        // Clear form fields after submission
        setTitle('');
        setDescription('');
        setDate('');
        setAssignTo('');
        setCategory('');
    };

    return (
        <div className="md:w-2/3 lg:w-1/2 mx-auto p-6 bg-gray-50 shadow-lg rounded-lg">
            {/* Header */}
            <h2 className="text-3xl font-bold text-gray-700 mb-6 text-center">Create a New Task</h2>

            {/* Task Form */}
            <form onSubmit={handleTaskForm} className="space-y-6">
                {/* Task Title */}
                <div>
                    <label htmlFor="task-title" className="block text-lg font-medium text-gray-800 mb-2">
                        Task Title <span className="text-red-500">*</span>
                    </label>
                    <input
                        id="task-title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter task title"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    />
                </div>

                {/* Task Description */}
                <div>
                    <label htmlFor="description" className="block text-lg font-medium text-gray-800 mb-2">
                        Description <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Provide a detailed description of the task"
                        rows="4"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    ></textarea>
                </div>

                {/* Task Date */}
                <div>
                    <label htmlFor="date" className="block text-lg font-medium text-gray-800 mb-2">
                        Date <span className="text-red-500">*</span>
                    </label>
                    <input
                        id="date"
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    />
                </div>

                {/* Assign To */}
                <div>
                    <label htmlFor="assign-to" className="block text-lg font-medium text-gray-800 mb-2">
                        Assign To <span className="text-red-500">*</span>
                    </label>
                    <input
                        id="assign-to"
                        type="text"
                        value={assignTo}
                        onChange={(e) => setAssignTo(e.target.value)}
                        placeholder="Enter assignee's name or email"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    />
                </div>

                {/* Category */}
                <div>
                    <label htmlFor="category" className="block text-lg font-medium text-gray-800 mb-2">
                        Category <span className="text-red-500">*</span>
                    </label>
                    <select
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    >
                        <option value="" disabled>
                            Select a category
                        </option>
                        <option value="Design">Design</option>
                        <option value="Development">Development</option>
                        <option value="Testing">Testing</option>
                        <option value="Management">Management</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                {/* Submit Button */}
                <div>
                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        Create Task
                    </button>
                </div>
            </form>
        </div>
    );
}

export default TaskForm;
