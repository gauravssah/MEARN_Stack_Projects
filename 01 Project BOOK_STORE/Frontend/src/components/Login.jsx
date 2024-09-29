import React from 'react';
import { useForm } from "react-hook-form";

function Login() {
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
        <dialog id="my_modal_3" className="modal">
            <div className="dark:bg-slate-900 dark:text-white modal-box p-6">
                <button className="hover:dark:bg-slate-800 dark:text-white btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById("my_modal_3").close()}>✕</button>

                {/* Welcome Message */}
                <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold dark:text-white">Welcome Back!</h3>
                    <p className="dark:text-gray-400 text-gray-600">Please login to access your account.</p>
                </div>

                {/* Login Form */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block dark:text-white text-sm font-medium mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 dark:bg-slate-800 dark:border-gray-600 dark:text-white"
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            {...register("email", { required: "Email is required." })}
                        />
                        {errors.email && <span className='text-sm text-red-500'>{errors.email.message}</span>}
                    </div>
                    <div className="mb-6">
                        <label className="block dark:text-white text-sm font-medium mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 dark:bg-slate-800 dark:border-gray-600 dark:text-white"
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            {...register("password", { required: "Password is required." })}
                        />
                        {errors.password && <span className='text-sm text-red-500'>{errors.password.message}</span>}
                    </div>
                    <div className="flex items-center justify-between mb-4">
                        <button type="submit" className="btn w-full md:w-auto btn-active btn-secondary">Login</button>
                    </div>

                </form>

                {/* Additional Links */}
                <div className="mt-4 flex justify-between text-sm">
                    <a href="#" className="text-pink-500 hover:underline hover:text-pink-700 dark:text-pink-500">Forgot Password?</a>
                    <p className="dark:text-gray-400 text-gray-600">Not registered? <a href="/signup" className="text-pink-500 hover:text-pink-700 dark:text-pink-500 hover:underline">Sign up</a></p>
                </div>

            </div>
        </dialog>
    );
}

export default Login;
