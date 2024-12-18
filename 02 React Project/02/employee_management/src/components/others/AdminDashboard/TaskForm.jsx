import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

function TaskForm() {

    // Geting Data from authcontext
    const authData = useContext(AuthContext); // Get employee data from AuthContext
    const authDataEmployees = authData.employees; // Destructure employee data

    // console.log(authData)

    // Created Task
    const [task, setTask] = useState({});

    // State for form inputs
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [assignTo, setAssignTo] = useState('');
    const [category, setCategory] = useState('');

    // Handle form submission
    const handleTaskForm = (e) => {
        e.preventDefault();

        // Setting Task
        // setTask({
        //     "title": title,
        //     "description": description,
        //     "date": date,
        //     "category": category,
        //     "active": false,
        //     "newTask": true,
        //     "completed": false,
        //     "failed": false,
        // })

        // Create the new task object
        const newTask = {
            title: title,
            description: description,
            date: date,
            category: category,
            active: false,
            newTask: true,
            completed: false,
            failed: false,
        };

        assignTheTask(assignTo, newTask);

        // Clear form fields after submission
        setTitle('');
        setDescription('');
        setDate('');
        setAssignTo('');
        setCategory('');


    };

    const assignTheTask = (assignTo, newTask) => {
        // Retrieve the employees from localStorage
        // const employees = JSON.parse(localStorage.getItem("employees"));
        const employees = authDataEmployees;

        // Find the employee to assign the task to
        const assignedEmployee = employees.find((emp) => emp.email === assignTo);

        if (assignedEmployee) {
            // Push the new task to the employee's task list
            assignedEmployee.tasks.push(newTask);

            // Save the updated employees array back to localStorage
            // localStorage.setItem("employees", JSON.stringify(employees));

            // Optionally, log the updated tasks for that employee
            // console.log("Updated tasks for employee: ", assignedEmployee.tasks);
        } else {
            console.log("Employee not found");
        }
    };


    // console.log("End : ", task);


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
                {/* Assign To */}
                <div>
                    <label htmlFor="assign-to" className="block text-lg font-medium text-gray-800 mb-2">
                        Assign To <span className="text-red-500">*</span>
                    </label>
                    <select
                        id="assign-to"
                        value={assignTo}
                        onChange={(e) => setAssignTo(e.target.value)}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    >
                        <option value="" disabled>
                            Select Employee
                        </option>

                        {
                            authDataEmployees.map((emp) => (
                                <option key={emp.email} value={emp.email}>
                                    {emp.email}
                                </option>
                            ))
                        }
                    </select>
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
