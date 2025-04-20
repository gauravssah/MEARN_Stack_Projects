import React from "react";
import { FaAngleDown } from "react-icons/fa"; // Import down arrow icon for navigation
import Layout from "../components/Layout/Layout";

function About() {
    return (
        <Layout
            title="About Us - Ecommerce App"
            description="Learn about our ecommerce journey, our mission to deliver exceptional online shopping experiences, and how Gaurav Sah drives innovation and quality in our digital marketplace."
            keywords="Ecommerce, About Us, Online Shopping, Gaurav Sah, Innovation, Quality"
            author="Gaurav Sah"
        >
            {/* ==========================
            Hero Section with Gradient Overlay using aboutUS.jpg
           ========================== */}
            <div className="container-fluid p-0">
                <div
                    className="position-relative d-flex flex-column align-items-center justify-content-center"
                    style={{
                        // Diagonal gradient overlay on the background image for a striking hero section
                        backgroundImage:
                            "linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%), url('/Images/aboutUS.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "350px",
                    }}
                >
                    {/* Hero Title */}
                    <h1
                        className="text-white display-2 fw-bold position-relative"
                        style={{ zIndex: 1 }}
                    >
                        About Us
                    </h1>
                    {/* Down Arrow Icon for navigation */}
                    <a
                        href="#aboutContent"
                        className="position-absolute"
                        style={{ bottom: "20px", zIndex: 1 }}
                    >
                        <FaAngleDown className="text-white" size={45} />
                    </a>
                </div>
            </div>

            {/* ==========================
            About Information Section
           ========================== */}
            <div className="container my-5" id="aboutContent">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        {/* Information Card */}
                        <div
                            className="p-5 rounded shadow"
                            style={{ backgroundColor: "#ffffff" }}
                        >
                            <h2 className="mb-4 text-dark border-bottom pb-2">
                                Our Story
                            </h2>
                            <p className="text-secondary mb-4" style={{ lineHeight: 1.8 }}>
                                Welcome to our ecommerce platform, where we are dedicated to providing an exceptional online shopping experience. We focus on delivering quality products, innovative services, and outstanding customer support.
                            </p>
                            <p className="text-secondary" style={{ lineHeight: 1.8 }}>
                                Our journey began with a simple idea—to create an ecommerce space that combines the latest technology with customer-centric values. Today, we continue to evolve, driven by our commitment to integrity, innovation, and customer satisfaction. Join us as we redefine the future of online shopping.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default About;
