import React from 'react'

function Header({ name }) {
    let firstname;
    if (name) {
        firstname = name.split(' ');
    }

    const handleLogout = () => {
        // Parse the current loggedInUser data
        const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")) || {};
        // Update the role to null
        loggedInUser.role = null;
        loggedInUser.persone = null;
        // Save the updated object back to localStorage
        localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
        // Reload the page
        window.location.reload();
    }

    return (
        <div className="flex justify-between items-center mb-6">
            {/* Left: Greeting */}
            <div>
                <h1 className="text-xl  text-gray-800">Hello,</h1>
                <p className="text-2xl font-bold text-black">{name ? firstname[0] : "user"}<span>&#128075; </span></p>
            </div>
            {/* Right: Logout Button */}
            <button onClick={() => handleLogout()}
                className="px-4 py-2 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600">
                Logout
            </button>
        </div>

    )
}

export default Header
