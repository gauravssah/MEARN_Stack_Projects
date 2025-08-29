import React, { useState } from 'react'
import Layout from '../components/Layout/Layout'
import { useSearch } from '../context/search'
import { useNavigate } from 'react-router-dom'

function Search() {
    const [values, setValues] = useSearch();
    console.log("Search values:", values); // Add this temporarily
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleAddToCart = (product) => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push({ ...product, quantity: 1 });
        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Product added to cart");
    };


    return (
        <Layout title={'Search results'}>
            <div className="container py-5">
                <div className="text-center mb-4">
                    <h2 className="text-white">Search Results</h2>
                    <p className="text-muted">
                        {values?.results.length < 1
                            ? "No Products Found"
                            : `Found ${values?.results.length} Product${values?.results.length > 1 ? 's' : ''}`}
                    </p>
                </div>

                {loading ? (
                    <div className="d-flex justify-content-center py-5">
                        <div className="spinner-border text-light" role="status" style={{ width: '3rem', height: '3rem' }}>
                            <span className="visually-hidden">Loading…</span>
                        </div>
                    </div>
                ) : (
                    <div className="row">
                        {values?.results.map(prod => (
                            <div key={prod._id} className="col-12 col-sm-6 col-md-4 mb-4">
                                <div
                                    className="card h-100 shadow-sm border-0 bg-dark text-white"
                                    style={{ cursor: 'pointer' }}
                                >
                                    <img
                                        src={`/api/v1/product/product-photo/${prod._id}`}
                                        className="card-img-top p-3"
                                        alt={prod.name}
                                        style={{
                                            objectFit: 'contain',
                                            height: '180px',
                                            backgroundColor: '#1a1a1a'
                                        }}
                                        onClick={() => navigate(`/product/${prod.slug}`)}
                                    />
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title">{prod.name}</h5>
                                        <p className="card-text text-secondary mb-2" style={{ fontSize: '0.9rem' }}>
                                            {prod.description?.substring(0, 60)}…
                                        </p>
                                        <div className="mt-auto d-flex justify-content-between align-items-center">
                                            <span className="fw-bold">${prod.price}</span>
                                            <div>
                                                <button
                                                    className="btn btn-sm btn-outline-light me-2"
                                                    onClick={() => navigate(`/product/${prod.slug}`)}
                                                >
                                                    View
                                                </button>
                                                <button
                                                    className="btn btn-sm btn-light text-dark"
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
                )}
            </div>
        </Layout>
    );
}

export default Search;
