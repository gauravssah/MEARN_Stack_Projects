import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    // submitHandler
    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Form submitted.");
        console.log("Email:", email);
        console.log("Password:", password);

        setEmail("");
        setPassword("");
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>

                <form onSubmit={submitHandler} className="space-y-4">
                    {/* Email Input */}
                    <div>
                        <label className="block text-gray-700">Email ID</label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    {/* Password Input */}
                    <div>
                        <label className="block text-gray-700">Password</label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type={showPassword ? "text" : "password"}
                            className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    {/* Show Password Checkbox */}
                    <div className="flex items-center">
                        <input id='showpasword'
                            type="checkbox"
                            checked={showPassword}
                            onChange={() => setShowPassword(!showPassword)}
                            className="mr-2"
                        />
                        <label htmlFor='showpasword' className="text-gray-700">Show Password</label>
                    </div>

                    {/* Remember Me and Forgot Password */}
                    <div className="flex items-center justify-between">
                        {/* <label className="flex items-center text-gray-700">
                            <input type="checkbox" className="mr-2" />
                            Remember Me
                        </label> */}
                        <a href="#" className="text-sm text-indigo-600 hover:underline">Forgot Password?</a>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
