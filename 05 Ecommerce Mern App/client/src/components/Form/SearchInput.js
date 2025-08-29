import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import Layout from '../Layout/Layout';
import { useSearch } from '../../context/search';

function Search() {
    const [values, setValues] = useSearch();  // here
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // 🛒 Local storage-based cart logic (can be replaced with context later)
    const handleAddToCart = (product) => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push({ ...product, quantity: 1 });
        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Product added to cart");
    };

    return (
        <Layout title="Search results">
            <div className="container my-4">
                <div className="row justify-content-center">
                    <section className="col-md-9">
                        <h5 className="mb-3 text-center">Search Results</h5>
                        <h6 className="text-center mb-4">
                            {values?.results.length < 1
                                ? 'No Products Found'
                                : `Found ${values?.results.length} product(s)`}
                        </h6>

                        {loading ? (
                            <div className="d-flex justify-content-center py-5">
                                <div
                                    className="spinner-border"
                                    role="status"
                                    style={{ width: '3rem', height: '3rem' }}
                                >
                                    <span className="visually-hidden">Loading…</span>
                                </div>
                            </div>
                        ) : values?.results.length > 0 ? (
                            <div className="row">
                                {values.results.map((prod) => (
                                    <div key={prod._id} className="col-6 col-md-4 mb-4">
                                        <div
                                            className="card h-100 shadow-sm d-flex flex-column product-card"
                                            style={{ cursor: 'pointer' }}
                                        >
                                            <img
                                                src={`/api/v1/product/product-photo/${prod._id}`}
                                                className="card-img-top p-3"
                                                alt={prod.name}
                                                style={{
                                                    objectFit: 'contain',
                                                    height: '180px',
                                                    backgroundColor: '#f8f9fa',
                                                }}
                                                onClick={() => navigate(`/product/${prod.slug}`)}
                                            />
                                            <div className="card-body d-flex flex-column">
                                                <h6 className="card-title">{prod.name}</h6>
                                                <p className="card-text text-muted mb-2">
                                                    {prod.description?.substring(0, 50)}…
                                                </p>
                                                <div className="mt-auto d-flex justify-content-between align-items-center">
                                                    <span className="fw-bold">${prod.price}</span>
                                                    <div>
                                                        <button
                                                            className="btn btn-sm btn-outline-dark me-2"
                                                            onClick={() => navigate(`/product/${prod.slug}`)}
                                                        >
                                                            View
                                                        </button>
                                                        <button
                                                            className="btn btn-sm btn-dark"
                                                            onClick={() => handleAddToCart(prod)}
                                                        >
                                                            Add to Cart
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-center text-muted">No products found.</p>
                        )}
                    </section>
                </div>
            </div>
        </Layout>
    );
}

export default Search;
