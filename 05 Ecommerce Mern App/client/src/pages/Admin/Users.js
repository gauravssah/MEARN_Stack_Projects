import React from 'react';
import Layout from '../../components/Layout/Layout';
import AdminMenu from '../../components/Layout/AdminMenu';

function Users() {
    return (
        <Layout title="Dashboard - All Users">
            <div className="container my-4 px-3">
                <div className="row">
                    {/* Sidebar */}
                    <div className="col-md-3 mb-3">
                        <AdminMenu />
                    </div>

                    {/* Content Area */}
                    <div className="col-md-9 d-flex justify-content-center">
                        <div
                            className="bg-white text-dark rounded shadow-sm border p-4 w-100"
                            style={{ maxWidth: '800px' }}
                        >
                            <h2 className="h5 mb-4 border-bottom pb-2">All Users</h2>
                            {/* List or table of users goes here */}
                            <p>This page will list all the users.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Users;
