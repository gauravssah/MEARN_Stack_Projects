import React from 'react';
import Layout from '../../components/Layout/Layout';
import AdminMenu from '../../components/Layout/AdminMenu';
import { useAuth } from '../../context/auth';

function AdminDashboard() {
    const [auth] = useAuth();

    return (
        <Layout title="Dashboard - Admin">
            <div className="container my-4 px-3">
                <div className="row">
                    {/* Sidebar */}
                    <div className="col-md-3 mb-3">
                        <AdminMenu />
                    </div>

                    {/* Centered Content Area */}
                    <div className="col-md-9 d-flex justify-content-center">
                        <div
                            className="bg-white text-dark rounded shadow-sm border p-4 w-100"
                            style={{ maxWidth: '800px' }}
                        >
                            <h2 className="h5 mb-4 border-bottom pb-2">Admin Dashboard</h2>

                            <div className="mb-3">
                                <strong>Name:</strong> {auth?.user?.name}
                            </div>
                            <div className="mb-3">
                                <strong>Email:</strong> {auth?.user?.email}
                            </div>
                            <div>
                                <strong>Contact:</strong> {auth?.user?.phone}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default AdminDashboard;
