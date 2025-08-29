import React from "react";
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";
import Layout from "../components/Layout/Layout";

function Pagenotfound() {
    return (
        <Layout
            title="404 - Page Not Found | Ecommerce App"
            description="Oops! The page you are looking for does not exist. Return to the homepage for a better shopping experience."
            keywords="404 error, page not found, ecommerce, broken link"
            author="Gaurav Sah"
        >
            <div className="container text-center d-flex flex-column align-items-center justify-content-center vh-100">
                <FaExclamationTriangle className="text-danger mb-3" size={80} />
                <h1 className="display-1 fw-bold text-dark">404</h1>
                <h2 className="mb-3 text-dark">Oops! Page Not Found</h2>
                <p className="text-muted">
                    The page you are looking for might have been removed or is temporarily unavailable.
                </p>
                <Link to="/" className="btn btn-dark mt-3 px-4 py-2">
                    Go Back Home
                </Link>
            </div>
        </Layout>
    );
}

export default Pagenotfound;
