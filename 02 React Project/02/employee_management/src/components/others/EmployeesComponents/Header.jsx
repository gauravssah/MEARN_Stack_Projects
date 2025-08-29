import React from 'react';

function Header(props) {

    const { name, changeUser } = props;
    let firstName = name ? name.split(' ')[0] : 'User'; // Extract first name or default to "User"

    // Handle logout logic
    const handleLogout = () => {
        const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser')) || {};
        loggedInUser.role = null;
        loggedInUser.persone = null;
        localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
        // window.location.reload(); // Reload to reset state
        changeUser("");
    };

    return (
        <div className="sticky top-0 z-50 bg-gray-100 mb-5 py-4 px-6 shadow-md rounded-b-lg">
            {/* Header Content */}
            <div className="flex justify-between items-center">
                {/* Greeting Section */}
                <div>
                    <h1 className="text-lg text-gray-700">Welcome Back,</h1>
                    <p className="text-2xl font-bold text-gray-900 flex items-center">
                        {firstName}
                        <span className="ml-2 text-yellow-400 text-3xl">👋</span>
                    </p>
                </div>

                {/* Logout Button */}
                <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white px-5 py-2 rounded-lg shadow hover:bg-red-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-red-400"
                >
                    Logout
                </button>
            </div>
        </div>
    );
}

export default Header;
