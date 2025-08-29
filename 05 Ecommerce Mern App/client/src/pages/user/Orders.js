import React from 'react';
import Layout from '../../components/Layout/Layout';
import UserMenu from '../../components/Layout/UserMenu';

// Orders component: displays the Orders page
function Orders() {
    return (
        // The Layout component wraps the page with common header and footer and sets the page title
        <Layout title="Dashboard - Orders">
            {/* Container for overall spacing and layout */}
            <div className="container my-4">
                <div className="row">
                    {/* Left Column: Sidebar for user navigation */}
                    <div className="col-md-3 mb-3">
                        <UserMenu />
                    </div>

                    {/* Right Column: Orders content area */}
                    <div className="col-md-9 mt-3 d-flex justify-content-center">
                        {/* Card container for a clean, professional look */}
                        <div
                            className="card shadow-sm border-0 w-100"
                            style={{ maxWidth: '800px' }}  // Limits the card width to prevent stretching on large screens
                        >
                            {/* Card Header */}
                            <div className="card-header bg-white text-dark border-bottom">
                                <h3 className="card-title mb-0">All Orders</h3>
                            </div>
                            {/* Card Body: Placeholder text for orders */}
                            <div className="card-body">
                                <p>Your orders will be displayed here. You can replace this content with a table or any other layout as needed.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Orders;
