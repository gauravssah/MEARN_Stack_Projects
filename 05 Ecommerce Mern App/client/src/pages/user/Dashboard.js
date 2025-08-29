import React from 'react';
import Layout from "../../components/Layout/Layout";
import UserMenu from '../../components/Layout/UserMenu';
import { useAuth } from '../../context/auth';

// Dashboard component for regular users
function Dashboard() {
    // Access the authenticated user's data from context
    const [auth] = useAuth();

    return (
        <Layout title="Dashboard - User">
            {/* Container with vertical spacing */}
            <div className="container my-4">
                <div className="row">


                    {/* Left Column: Sidebar Menu for User Navigation */}
                    <div className="col-md-3 mb-3">
                        <UserMenu />
                    </div>


                    {/* Right Column: Main Content Area */}
                    <div className="col-md-9 mt-3 d-flex justify-content-center">
                        {/* Use Bootstrap Card for a consistent, professional look */}
                        <div className="card shadow-sm border-0 w-100" style={{ maxWidth: '800px' }}>
                            {/* Card Header */}
                            <div className="card-header bg-white text-dark border-bottom">
                                <h3 className="card-title mb-0">User Dashboard</h3>
                            </div>
                            {/* Card Body with user details */}
                            <div className="card-body">
                                <div className="mb-3">
                                    <strong>Name:</strong> {auth?.user?.name}
                                </div>
                                <div className="mb-3">
                                    <strong>Email:</strong> {auth?.user?.email}
                                </div>
                                <div className="mb-3">
                                    <strong>Contact:</strong> {auth?.user?.phone}
                                </div>
                                <div className="mb-3">
                                    <strong>Address:</strong> {auth?.user?.address}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Dashboard;
