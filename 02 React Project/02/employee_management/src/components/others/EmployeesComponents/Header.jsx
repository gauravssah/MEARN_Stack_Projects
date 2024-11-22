import React from 'react'

function Header() {
    return (
        <div className="flex justify-between items-center mb-6">
            {/* Left: Greeting */}
            <div>
                <h1 className="text-xl  text-gray-800">Hello,</h1>
                <p className="text-2xl font-bold text-black">Gaurav<span>&#128075; </span></p>
            </div>
            {/* Right: Logout Button */}
            <button className="px-4 py-2 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600">
                Logout
            </button>
        </div>

    )
}

export default Header
