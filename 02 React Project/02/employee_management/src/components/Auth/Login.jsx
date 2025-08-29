import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAdmin, setIsAdmin] = useState(false); // Toggle between Admin and Employee login
    const [isSwitching, setIsSwitching] = useState(false); // Animation trigger

    // Handle form submission
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(`${isAdmin ? "Admin" : "Employee"} Login Attempt`);
        handleLogin(email, password, isAdmin);
        setEmail('');
        setPassword('');
    };

    // Handle form toggle with animation
    const toggleForm = () => {
        setIsSwitching(true); // Trigger fade-out
        setTimeout(() => {
            setIsAdmin(!isAdmin); // Toggle role after fade-out
            setIsSwitching(false); // Trigger fade-in
        }, 300); // Duration of fade-out animation
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black">
            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg p-8 w-full max-w-sm">
                {/* Title with animation */}
                <div
                    className={`transition-opacity duration-300 ${isSwitching ? 'opacity-0' : 'opacity-100'}`}
                >
                    <h1 className="text-3xl font-bold text-center text-gray-100 mb-6">
                        {isAdmin ? "Admin Login" : "Employee Login"}
                    </h1>
                    <p className="text-center text-gray-300 mb-6">
                        {isAdmin
                            ? "Access admin privileges and manage the system."
                            : "Login to view your tasks and updates."}
                    </p>
                </div>

                {/* Login Form */}
                <form
                    onSubmit={submitHandler}
                    className={`transition-opacity duration-300 ${isSwitching ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
                >
                    {/* Email Input */}
                    <div className="mb-5">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                            Email Address
                        </label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            required
                            className="w-full px-4 py-2 text-white bg-transparent border border-gray-600 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="mb-5">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                            Password
                        </label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            required
                            className="w-full px-4 py-2 text-white bg-transparent border border-gray-600 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition duration-200"
                    >
                        Login as {isAdmin ? "Admin" : "Employee"}
                    </button>
                </form>

                {/* Toggle Button with Sliding Effect */}
                <div className="mt-6 text-sm text-center overflow-hidden">
                    <button
                        onClick={toggleForm}
                        className={`relative inline-flex items-center justify-center w-full py-2 px-4 border text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        disabled={isSwitching}
                    >
                        {/* Background Transition */}
                        <div
                            className={`absolute inset-0 bg-blue-500 rounded-lg transition-all duration-300 
                            ${isAdmin ? 'transform translate-x-0' : 'transform translate-x-full'}`}
                        ></div>

                        {/* Text */}
                        <span className="relative z-10">
                            {isAdmin ? "Switch to Employee" : "Switch to Admin"}
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
