import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Spinner({ path = 'login' }) {
    // Countdown starting from 20 seconds
    const [count, setCount] = useState(3);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // Create an interval to decrement count every second
        const interval = setInterval(() => {
            setCount(prev => prev - 1);
        }, 1000);

        // When count reaches 0, clear the interval and navigate to login
        count === 0 &&
            navigate(`/${path}`, {
                state: location.pathname
            });

        // Cleanup interval on unmount or before re-running effect
        return () => clearInterval(interval);
    }, [count, navigate, location, path]);

    return (
        <div className="spinner-container">
            <div className="spinner-content">
                <p className="spinner-text">
                    Redirecting you in <span className="spinner-count">{count}</span> second{count !== 1 ? 's' : ''}
                </p>
                <div className="spinner">
                    <div className="dot dot1"></div>
                    <div className="dot dot2"></div>
                    <div className="dot dot3"></div>
                    <div className="dot dot4"></div>
                </div>
            </div>
        </div>
    );
}

export default Spinner;
