import React from 'react';
import Header from '../others/EmployeesComponents/Header';
import TaskForm from '../others/AdminDashboard/TaskForm';
import AllTask from '../others/AdminDashboard/AllTask';

function AdminDashboard(props) {

    const { name } = props.loggedInUserData;

    return (
        <div className='p-3 bg-[#DBEAFE] pb-8'>
            <Header name={name} />
            <div className="md:p-6">
                <TaskForm />
            </div>

            <AllTask />
        </div>
    );
}

export default AdminDashboard;
