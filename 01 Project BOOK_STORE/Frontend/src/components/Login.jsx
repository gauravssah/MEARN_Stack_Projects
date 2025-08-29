import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            mobileNumber: data.mobileNumber,
            password: data.password
        }

        await axios.post("http://localhost:4001/user/login", userInfo)
            .then((res) => {
                console.log(res.data);

                if (res.data) {
                    // alert("Login successful!");
                    toast.success('Login successful!');

                }
                localStorage.setItem("Users", JSON.stringify(res.data.user));
                window.location.reload();


            }).catch((err) => {
                if (err.response) {
                    console.log("Error Response: ", err.response.data); // Log full error response
                    // alert(`Error: ${err.response.data.message || "Something went wrong"}`);
                    toast.error(`Error: ${err.response.data.message || "Something went wrong"}`);
                } else {
                    console.error("Error", err);
                }
            });
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
                <div className="mt-4 flex flex-col md:flex-row gap-3 justify-between text-sm">
                    <a href="#" className="text-pink-500 hover:underline hover:text-pink-700 dark:text-pink-500">Forgot Password?</a>
                    <p className="dark:text-gray-400 text-gray-600">Not registered? <a href="/signup" className="text-pink-500 hover:text-pink-700 dark:text-pink-500 hover:underline">Sign up</a></p>
                </div>

            </div>
        </dialog>
    );
}

export default Login;
