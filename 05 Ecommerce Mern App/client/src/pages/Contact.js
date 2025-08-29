import React from "react";
import {
    FaLinkedin,
    FaGithub,
    FaEnvelope,
    FaPhoneAlt,
    FaAngleDown
} from "react-icons/fa";
import Layout from "../components/Layout/Layout";
import { FaSquareXTwitter } from "react-icons/fa6";


function Contact() {
    return (
        <Layout
            title="Contact Us - Ecommerce App"
            description="Get in touch with us for any queries or support. Contact us via email, phone, or social media."
            keywords="contact, support, ecommerce, help, customer service"
            author="Gaurav Sah"
        >
            {/* ==========================
            Hero Section with Overlay and Down Arrow
           ========================== */}
            <div className="container-fluid p-0">
                <div
                    className="position-relative d-flex align-items-center justify-content-center"
                    style={{
                        backgroundImage: "url('/Images/contactUs.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "300px",
                    }}
                >
                    {/* Dark overlay for contrast */}
                    <div
                        className="position-absolute w-100 h-100"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                    ></div>
                    {/* Hero title */}
                    <h1
                        className="text-white display-3 fw-bold position-relative"
                        style={{ zIndex: 1 }}
                    >
                        Get in Touch
                    </h1>
                    {/* Down Arrow Icon for navigation */}
                    <a
                        href="#contactContent"
                        className="position-absolute"
                        style={{ bottom: "20px", zIndex: 1 }}
                    >
                        <FaAngleDown className="text-white" size={45} />
                    </a>
                </div>
            </div>

            {/* ==========================
            Contact Details Section
           ========================== */}
            <div className="container my-5" id="contactContent">
                <div className="row align-items-center">
                    {/* Profile Image with Hover Effect */}
                    <div className="col-md-4 text-center mb-4">
                        <img
                            src="/Images/ProfilePickGaurav.jpg"
                            alt="Gaurav"
                            className="img-fluid rounded-circle shadow"
                            style={{
                                width: "250px",
                                height: "250px",
                                objectFit: "cover",
                                border: "4px solid #fff",
                                transition: "transform 0.3s ease-in-out",
                            }}
                            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                        />
                    </div>
                    {/* Styled Contact Information Card */}
                    <div className="col-md-8">
                        <div
                            className="p-4 shadow-sm rounded"
                            style={{ backgroundColor: "#f8f9fa" }}
                        >
                            {/* Contact Card Header */}
                            <h2 className="mb-4 bg-dark text-white p-2 rounded">
                                Contact Information
                            </h2>
                            {/* Email Info */}
                            <p className="mb-3">
                                <FaEnvelope className="me-2 " />
                                <strong>Email:</strong>{" "}
                                <a
                                    href="mailto:gauravssah01@gmail.com"
                                    className="text-dark text-decoration-none"
                                >
                                    gauravssah01@gmail.com
                                </a>
                            </p>
                            {/* Phone Info */}
                            <p className="mb-3">
                                <FaPhoneAlt className="me-2 " />
                                <strong>Phone:</strong>{" "}
                                <a
                                    href="tel:+916201219705"
                                    className="text-dark text-decoration-none"
                                >
                                    +91 6201219705
                                </a>
                            </p>
                            {/* Address Info */}
                            <p className="mb-3">
                                <strong>Address:</strong> Muzaffarpur, Bihar, India
                            </p>
                            {/* Social Links Section */}
                            <div className="mt-4">
                                <h4>Connect with me:</h4>
                                <div className="d-flex gap-3 mt-2">
                                    <a
                                        href="https://www.linkedin.com/in/gauravssah/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-dark fs-3"
                                    >
                                        <FaLinkedin />
                                    </a>
                                    <a
                                        href="https://github.com/gauravssah"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-dark fs-3"
                                    >
                                        <FaGithub />
                                    </a>
                                    <a
                                        href="https://x.com/gauravssah"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-dark fs-3"
                                    >
                                        <FaSquareXTwitter />

                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Contact;
