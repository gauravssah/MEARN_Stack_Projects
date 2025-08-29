import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import { Link } from "react-router-dom";
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/auth';


function Login() {
    // State hooks for email and password inputs
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [auth, setAuth] = useAuth();

    // useNavigate hook to programmatically navigate after successful login
    const navigate = useNavigate();
    const location = useLocation();

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent page refresh

        try {
            // POST request to the login endpoint with email and password
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`, { email, password });

            // If login is successful, show success toast and navigate to home page
            if (res.data.success) {
                toast.success(res.data.message);

                setAuth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token,
                });

                localStorage.setItem('auth', JSON.stringify(res.data));

                navigate(location.state || "/");
            } else {
                // If the server returns a failure message, show error toast
                toast.error(res.data.message);
            }
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong!");
        }
    };

    return (
        <Layout>
            {/* Centering the login card in the viewport */}
            <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', padding: '20px' }}>
                <div className="card shadow-lg p-4 w-100" style={{ maxWidth: '400px' }}>
                    <h2 className="text-center mb-4">Login</h2>
                    {/* Login form */}
                    <form onSubmit={handleSubmit}>
                        {/* Email input field */}
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email address <span className="text-danger">*</span>
                            </label>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        {/* Password input field */}
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">
                                Password <span className="text-danger">*</span>
                            </label>
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                        {/* Remember me checkbox */}
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="rememberMe" />
                            <label className="form-check-label" htmlFor="rememberMe">
                                Remember Me
                            </label>
                        </div>
                        {/* Submit button */}
                        <button type="submit" className="btn btn-dark w-100">
                            Login
                        </button>
                    </form>
                    {/* Link for "Forgot Password" */}
                    <div className="text-center mt-3">
                        <Link to="/forgot-password" className="text-decoration-none">
                            Forgot Password?
                        </Link>
                    </div>
                    {/* Link to navigate to registration page */}
                    <div className="text-center mt-3">
                        <p>
                            Don't have an account?{' '}
                            <Link to="/register" className="text-decoration-none">
                                Create one
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Login;
