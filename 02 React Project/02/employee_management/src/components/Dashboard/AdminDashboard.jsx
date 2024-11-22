import React from 'react';
import Header from '../others/EmployeesComponents/Header';
import TaskForm from '../others/AdminDashboard/TaskForm';
import AllTask from '../others/AdminDashboard/AllTask';

function AdminDashboard() {
    return (
        <div className='p-3'>
            <Header />
            <div className="md:p-6">
                <TaskForm />
            </div>

            <AllTask />
        </div>
    );
}

export default AdminDashboard;
