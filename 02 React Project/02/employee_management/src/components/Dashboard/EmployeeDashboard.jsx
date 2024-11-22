import React from 'react';
import Header from '../others/EmployeesComponents/Header';
import BoxesSection from '../others/EmployeesComponents/BoxesSection';
import BannerSection from '../others/EmployeesComponents/BannerSection';
import TaskList from '../TaskList/TaskList';

function EmployeeDashboard() {
    return (
        <div className="min-h-screen p-4 bg-gray-100">
            {/* Header Section */}
            <Header />

            {/* Boxes Section */}
            <BoxesSection />

            {/* Banner Section */}
            <BannerSection />

            {/* Task Lists */}
            {/* <TaskList /> */}
        </div>
    );
}

export default EmployeeDashboard;
