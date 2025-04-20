import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import { Link } from "react-router-dom";
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
    // State hooks to manage input values for the registration form
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [answer, setAnswer] = useState("");
    const [checkbox, setCheckbox] = useState("");

    // useNavigate hook for redirecting after registration
    const navigate = useNavigate();

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        try {
            // Send a POST request to the API endpoint with the registration data
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`,
                {
                    name,
                    email,
                    password,
                    phone,
                    address,
                    answer
                });

            // Check if the registration was successful based on the API response
            if (res.data.success) {
                toast.success(res.data.message);  // Display success notification
                navigate("/login");                 // Redirect to the login page
            } else {
                toast.error(res.data.message);      // Display error notification if registration failed
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong!");  // Display generic error notification in case of exception
        }
    };

    return (
        <Layout>
            {/* Container to center the card vertically and horizontally */}
            <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', padding: '20px' }}>
                {/* Card container for the registration form */}
                <div className="card shadow-lg p-4 w-100" style={{ maxWidth: '500px' }}>
                    <h2 className="text-center mb-4">Create an Account</h2>
                    <form onSubmit={handleSubmit}>
                        {/* Full Name Input */}
                        <div className="mb-3">
                            <label htmlFor="fullName" className="form-label">
                                Full Name <span className="text-danger">*</span>
                            </label>
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                className="form-control"
                                id="fullName"
                                placeholder="Enter your full name"
                                required
                            />
                        </div>

                        {/* Email Address Input */}
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
                                aria-describedby="emailHelp"
                                placeholder="Enter your email"
                                required
                            />
                            {/* Additional helper text for the email field */}
                            <div id="emailHelp" className="form-text">
                                We'll never share your email with anyone else.
                            </div>
                        </div>

                        {/* Password Input */}
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

                        {/* Phone Input */}
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">
                                Phone <span className="text-danger">*</span>
                            </label>
                            <input
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                type="text"
                                className="form-control"
                                id="phone"
                                placeholder="Enter your phone number"
                                required
                            />
                        </div>

                        {/* Address Textarea */}
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">
                                Address <span className="text-danger">*</span>
                            </label>
                            <textarea
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                className="form-control"
                                id="address"
                                rows="3"
                                placeholder="Enter your address"
                                required
                            ></textarea>
                        </div>

                        {/* Answer */}
                        <div className="mb-3">
                            <label htmlFor="answer" className="form-label">
                                What is Your Favorite Sports?  <span className="text-danger">*</span>
                            </label>
                            <input
                                value={answer}
                                onChange={(e) => setAnswer(e.target.value)}
                                className="form-control"
                                id="answer"
                                placeholder="Enter your Answer"
                                required
                            ></input>
                        </div>

                        {/* Terms and Conditions Checkbox */}
                        <div className="mb-3 form-check">
                            <input
                                value={checkbox}
                                onChange={(e) => setCheckbox(e.target.value)}
                                type="checkbox"
                                className="form-check-input"
                                id="termsCheck"
                                required
                            />
                            <label className="form-check-label" htmlFor="termsCheck">
                                I agree to the terms and conditions <span className="text-danger">*</span>
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="btn btn-dark w-100">
                            Register
                        </button>
                    </form>

                    {/* Link to navigate to the Login page if the user already has an account */}
                    <div className="text-center mt-3">
                        <p>
                            Already have an account?{' '}
                            <Link to="/login" className="text-decoration-none">
                                Login here
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Register;
