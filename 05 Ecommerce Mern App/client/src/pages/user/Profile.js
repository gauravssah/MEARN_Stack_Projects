import React from 'react';
import Layout from '../../components/Layout/Layout';
import UserMenu from '../../components/Layout/UserMenu';
import { useAuth } from '../../context/auth';

// Profile component displays the current user's details
function Profile() {
    // Access the authenticated user's info from context
    const [auth] = useAuth();

    return (
        // Layout component wraps the page with the common header, footer, etc., and sets the page title
        <Layout title="Dashboard - Profile">
            {/* Main container with Bootstrap spacing utilities */}
            <div className="container my-4">
                <div className="row">
                    {/* Left Column: UserMenu for sidebar navigation */}
                    <div className="col-md-3 mb-3">
                        <UserMenu />
                    </div>
                    {/* Right Column: Profile Information Card */}
                    <div className="col-md-9 mt-3 d-flex justify-content-center">
                        <div
                            className="card shadow-sm border-0 w-100"
                            style={{ maxWidth: '800px' }} // Limit the maximum width for better appearance
                        >
                            {/* Card Header: Section Title */}
                            <div className="card-header bg-white text-dark border-bottom">
                                <h3 className="card-title mb-0">Your Profile</h3>
                            </div>
                            {/* Card Body: Display user details */}
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
                                {/*
                  Further profile details or an edit form can be added here.
                  For example, address, profile picture, etc.
                */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Profile;
