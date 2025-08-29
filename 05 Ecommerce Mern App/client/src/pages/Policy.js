import React from "react";
import { FaAngleDown } from "react-icons/fa"; // Import down arrow icon for navigation
import Layout from "../components/Layout/Layout";

function Policy() {
    return (
        <Layout
            title="Our Policy - Ecommerce App"
            description="Learn about our policies on privacy, user rights, and service commitments. Stay informed with our latest updates."
            keywords="privacy policy, ecommerce policies, user rights, data security"
            author="Gaurav Sah"
        >
            {/* ==========================
            Hero Section with Gradient Overlay using policy.jpg
           ========================== */}
            <div className="container-fluid p-0">
                <div
                    className="position-relative d-flex flex-column align-items-center justify-content-center"
                    style={{
                        // Apply a gradient overlay with the background image from public/Images/policy.jpg
                        backgroundImage:
                            "linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.3)), url('/Images/policy.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "300px",
                    }}
                >
                    {/* Hero Title */}
                    <h1
                        className="text-white display-3 fw-bold position-relative"
                        style={{ zIndex: 1 }}
                    >
                        Our Policy
                    </h1>
                    {/* Down Arrow Icon to prompt scrolling */}
                    <a
                        href="#policyContent"
                        className="position-absolute"
                        style={{ bottom: "20px", zIndex: 1 }}
                    >
                        <FaAngleDown className="text-white" size={45} />
                    </a>
                </div>
            </div>

            {/* ==========================
            Policy Information Section
           ========================== */}
            <div className="container my-5" id="policyContent">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        {/* Policy Content Card */}
                        <div
                            className="p-5 rounded shadow"
                            style={{ backgroundColor: "#ffffff" }}
                        >
                            {/* Card Header */}
                            <h2 className="mb-4 text-dark border-bottom pb-2">
                                Our Policy
                            </h2>
                            {/* Policy Description */}
                            <p className="text-secondary" style={{ lineHeight: 1.8 }}>
                                Welcome to our policy page. We are committed to transparency,
                                ensuring that our customers are fully informed about our practices.
                                Our policies cover data privacy, user rights, and our service commitments.
                            </p>
                            <p className="text-secondary" style={{ lineHeight: 1.8 }}>
                                We continuously review and update our policies to comply with legal
                                requirements and industry best practices. Please take a moment to
                                read through our policies. If you have any questions or concerns,
                                feel free to reach out to us.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Policy;
