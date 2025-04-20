import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
    const location = useLocation(); // Get current URL path

    return (
        <footer className="footer bg-dark text-light py-4">
            <div className="container text-center">
                <h4>All Rights Reserved &copy; Gauravssah</h4>
                <p className="mt-3">
                    <Link
                        to="/about"
                        className={`text-light text-decoration-none mx-2 ${location.pathname === "/about" ? "active" : ""}`}
                    >
                        About
                    </Link>
                    |
                    <Link
                        to="/contact"
                        className={`text-light text-decoration-none mx-2 ${location.pathname === "/contact" ? "active" : ""}`}
                    >
                        Contact
                    </Link>
                    |
                    <Link
                        to="/policy"
                        className={`text-light text-decoration-none mx-2 ${location.pathname === "/policy" ? "active" : ""}`}
                    >
                        Policy
                    </Link>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
