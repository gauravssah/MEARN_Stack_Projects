import React from 'react';
import Header from '../others/EmployeesComponents/Header';
import BoxesSection from '../others/EmployeesComponents/BoxesSection';
import BannerSection from '../others/EmployeesComponents/BannerSection';
import TaskList from '../TaskList/TaskList';

function EmployeeDashboard(props) {

    const { email, name, tasks } = props.loggedInUserData;
    // console.log(name)
    // console.log(email)
    // console.log(tasks.length)
    // const t = Array.from(tasks);
    // console.log(t.length)

    return (
        <div className="min-h-screen p-4 bg-gray-100">
            {/* Header Section */}
            <Header name={name} />

            {/* Boxes Section */}
            <BoxesSection tasks={tasks} />

            {/* Banner Section */}
            <BannerSection tasks={tasks} />

            {/* Task Lists */}
            <TaskList tasks={tasks} />
        </div>
    );
}

export default EmployeeDashboard;
