import React, { useState } from 'react'

function TaskForm() {
    // Description Date  AssignTo  Category

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [assignTo, setAssignTo] = useState('');
    const [category, setCategory] = useState('');

    // This is Handling TaskCreated form
    const HandelTaskForm = (e) => {
        e.preventDefault();
        console.log("Task Created?");
        console.log("Title: ", title);
        console.log("Description: ", description);
        console.log("Date: ", date);
        console.log("Assign To: ", assignTo);
        console.log("Category: ", category);

        setTitle("");
        setDescription("");
        setDate("");
        setAssignTo("");
        setCategory("");

    };



    return (
        <div className='w-1/2 m-auto'>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Create Task</h2>
            <form
                onSubmit={HandelTaskForm}
                className="space-y-4 bg-white p-6 rounded-lg shadow-md">
                {/* Task Title */}
                <div>
                    <label htmlFor="task-title" className="block text-sm font-medium text-gray-700 mb-2">
                        Task Title
                    </label>
                    <input
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}

                        id="task-title"
                        type="text"
                        required
                        placeholder="Enter task title"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                {/* Description */}
                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                        Description
                    </label>
                    <textarea
                        value={description}
                        onChange={(e) => {
                            setDescription(e.target.value);
                        }}

                        id="description"
                        required
                        placeholder="Enter task description"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows="4"
                    ></textarea>
                </div>
                {/* Date */}
                <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                        Date
                    </label>
                    <input
                        value={date}
                        onChange={(e) => {
                            setDate(e.target.value);
                        }}

                        required
                        id="date"
                        type="date"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                {/* Assign To */}
                <div>
                    <label htmlFor="assign-to" className="block text-sm font-medium text-gray-700 mb-2">
                        Assign To
                    </label>
                    <input
                        value={assignTo}
                        onChange={(e) => {
                            setAssignTo(e.target.value);
                        }}

                        id="assign-to"
                        type="text"
                        placeholder="Enter assignee name or email"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                {/* Category */}
                <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                        Category
                    </label>
                    <input
                        value={category}
                        onChange={(e) => {
                            setCategory(e.target.value);
                        }}

                        required
                        id="category"
                        type="text"
                        placeholder="Enter category"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                {/* Create Task Button */}
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
                >
                    Create Task
                </button>
            </form>
        </div>
    )
}

export default TaskForm
