import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // 👁️ Icons for password toggle

function ForgotPassword() {
    // Input states
    const [email, setEmail] = useState('');
    const [answer, setAnswer] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // Password visibility states
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const navigate = useNavigate();

    // Form submit handler
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (newPassword !== confirmPassword) {
            return toast.error("Passwords do not match");
        }

        try {
            const res = await axios.post('/api/v1/auth/forgot-password', {
                email,
                answer,
                newPassword,
            });

            if (res.data.success) {
                toast.success(res.data.message);
                navigate('/login');
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong!");
        }
    };

    return (
        <Layout title="Forgot Password - Ecommerce App">
            {/* Main container */}
            <div className="container mt-3 mb-3 d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
                <div className="col-md-6 col-lg-5">
                    <div className="card shadow p-4">
                        {/* Title */}
                        <h4 className="text-center mb-4">Reset Your Password</h4>

                        {/* Form */}
                        <form onSubmit={handleSubmit}>
                            {/* Email */}
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Email Address <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="form-control"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>

                            {/* Security Question */}
                            <div className="mb-3">
                                <label htmlFor="answer" className="form-label">
                                    What is your favorite sport? <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="answer"
                                    className="form-control"
                                    value={answer}
                                    onChange={(e) => setAnswer(e.target.value)}
                                    placeholder="e.g. Cricket, Football"
                                    required
                                />
                            </div>

                            {/* New Password with eye toggle */}
                            <div className="mb-3">
                                <label htmlFor="newPassword" className="form-label">
                                    New Password <span className="text-danger">*</span>
                                </label>
                                <div className="input-group">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        id="newPassword"
                                        className="form-control"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        placeholder="Enter new password"
                                        required
                                    />
                                    <span
                                        className="input-group-text"
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </span>
                                </div>
                            </div>

                            {/* Confirm Password with eye toggle */}
                            <div className="mb-3">
                                <label htmlFor="confirmPassword" className="form-label">
                                    Confirm Password <span className="text-danger">*</span>
                                </label>
                                <div className="input-group">
                                    <input
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        id="confirmPassword"
                                        className="form-control"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        placeholder="Re-enter new password"
                                        required
                                    />
                                    <span
                                        className="input-group-text"
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    >
                                        {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                    </span>
                                </div>
                            </div>

                            {/* Submit button */}
                            <button type="submit" className="btn btn-dark w-100">
                                Reset Password
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default ForgotPassword;
