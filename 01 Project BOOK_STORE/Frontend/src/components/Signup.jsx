import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import { useForm } from "react-hook-form";

function Signup({ onClose }) {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        const rootElement = document.documentElement;
        if (theme === 'dark') {
            rootElement.classList.add("dark");
        } else {
            rootElement.classList.remove("dark");
        }
    }, [theme]);

    // Function to toggle the theme
    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);  // Store theme preference
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // Add your login logic here
    };

    return (
        <div className="flex justify-center items-center p-10 w-[95%] m-auto bg-slate-50 dark:bg-slate-900">
            <div className="w-full max-w-md md:p-8 p-3 space-y-6 bg-white dark:bg-slate-800 shadow-lg rounded-lg relative">
                {/* Close Button */}
                <Link to="/" className="hover:dark:bg-slate-700 dark:text-white btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

                {/* Signup Form Header */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-pink-600 dark:text-pink-500">Create an Account</h2>
                    <p className="text-gray-600 dark:text-gray-400">Join us and get started today!</p>
                </div>

                {/* Signup Form */}
                <form className="space-y-4 " onSubmit={handleSubmit(onSubmit)}>
                    {/* Name Field */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Enter your name"
                            className="w-full mt-1 p-2 border rounded-md dark:bg-slate-700 dark:text-white dark:border-slate-600 focus:ring-pink-600 focus:border-pink-600"
                            {...register("name", { required: "name is required." })}
                        />
                        {errors.name && <span className='text-sm text-red-500'>{errors.name.message}</span>}
                    </div>

                    {/* Email Field */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            className="w-full mt-1 p-2 border rounded-md dark:bg-slate-700 dark:text-white dark:border-slate-600 focus:ring-pink-600 focus:border-pink-600"
                            {...register("email", { required: "email is required." })}
                        />
                        {errors.email && <span className='text-sm text-red-500'>{errors.email.message}</span>}

                    </div>

                    {/* Mobile Number Field */}
                    <div>
                        <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Mobile Number</label>
                        <input
                            id="mobile"
                            type="tel"
                            placeholder="Enter your mobile number"
                            className="w-full mt-1 p-2 border rounded-md dark:bg-slate-700 dark:text-white dark:border-slate-600 focus:ring-pink-600 focus:border-pink-600"
                            pattern="[0-9]{10}" // Optional: To enforce a 10-digit mobile number format
                            {...register("mobile", { required: "mobile is required." })}
                        />
                        {errors.mobile && <span className='text-sm text-red-500'>{errors.mobile.message}</span>}
                    </div>

                    {/* Password Field */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            className="w-full mt-1 p-2 border rounded-md dark:bg-slate-700 dark:text-white dark:border-slate-600 focus:ring-pink-600 focus:border-pink-600"
                            {...register("password", { required: "password is required." })}
                        />
                        {errors.password && <span className='text-sm text-red-500'>{errors.password.message}</span>}

                    </div>

                    {/* Signup Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-pink-600 text-white font-bold rounded-md hover:bg-pink-700 transition-all"
                        >
                            Sign Up
                        </button>
                    </div>


                </form>


                {/* Already Registered? */}
                <div>
                    <div className='text-center'>
                        <p className="text-gray-600 dark:text-gray-400">Already have an account?</p>
                        <Link
                            className="text-pink-600 hover:text-pink-700 dark:text-pink-500 hover:underline"
                            onClick={() => document.getElementById("my_modal_3").showModal()}
                        >
                            Login
                        </Link>
                    </div>
                    <Login />
                </div>

            </div>
        </div>
    );
}

export default Signup;
