import React, { useState } from 'react';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // This will handle the form submit btn
    const submitHandler = (e) => {
        e.preventDefault();
        console.log("form submit");
        console.log("Email is: ", email);
        console.log("password is: ", password);

        // clear the email and password field.
        setEmail("");
        setPassword("");
    }

    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-700 to-blue-900">
            <div className="bg-white bg-opacity-20 backdrop-blur-md border border-white/30 rounded-lg shadow-lg p-6 w-96">
                <h1 className="text-2xl font-semibold text-white text-center mb-6">Login</h1>
                <form
                    onSubmit={submitHandler}
                >
                    <div className="mb-4">
                        <input
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                // console.log(e.target.value);
                            }}
                            type="email"
                            placeholder="Email"
                            required
                            className="w-full px-4 py-2 text-white bg-transparent border border-white/50 rounded-lg placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                // console.log(e.target.value);
                            }}
                            type="password"
                            placeholder="Password"
                            required
                            className="w-full px-4 py-2 text-white bg-transparent border border-white/50 rounded-lg placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition duration-200"
                    >
                        Login
                    </button>
                </form>
                {/* Links Section */}
                <div className="mt-4 flex justify-between items-center text-sm text-white">
                    <a href="#" className="hover:underline">Forgot Password?</a>
                    <a href="#" className="hover:underline">Create an Account</a>
                </div>
            </div>
        </div>
    );
};

export default Login;
