// src/pages/HomePage.jsx
import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout/Layout';
import { useAuth } from '../context/auth';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Prices } from '../components/Prices';

export default function HomePage() {
    const [auth] = useAuth();
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCat, setSelectedCat] = useState('');    // '' means “All”
    const [loading, setLoading] = useState(false);
    const [selectedPrice, setSelectedPrice] = useState([]);

    const navigate = useNavigate();

    // Fetch all products
    const getAllProducts = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get('/api/v1/product/get-product');
            if (data?.success) setProducts(data.products);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    // Fetch all categories
    const getAllCategories = async () => {
        try {
            const { data } = await axios.get('/api/v1/category/get-category');
            if (data?.success) setCategories(data.category);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getAllProducts();
        getAllCategories();
    }, []);

    // in-memory filter
    const filtered = products.filter(p => {
        const catMatch = selectedCat ? p.category?._id === selectedCat : true;
        const priceMatch = selectedPrice.length
            ? p.price >= selectedPrice[0] && p.price <= selectedPrice[1]
            : true;
        return catMatch && priceMatch;
    });


    // handle Add to Cart (placeholder)
    const handleAddToCart = (prod) => {
        console.log('Add to cart:', prod);
    };

    return (
        <Layout title="Home – E-Commerce App">
            <div className="container-fluid mt-4">
                <h5 className="mb-3">Apply Filters</h5>
                <div className="row">
                    {/* ===== LEFT: Filters Sidebar ===== */}
                    <aside className="col-md-3 mb-4"
                        style={{
                            height: '100vh',
                            position: 'sticky',
                            top: '70px', // adjust this based on your navbar height
                            overflowY: 'auto',
                            paddingRight: '10px'
                        }}
                    >
                        <p className="mb-3">Filter by Category</p>
                        <div className="d-flex flex-column gap-2">
                            <button
                                className={`btn btn-sm ${selectedCat === '' ? 'btn-dark text-white' : 'btn-outline-dark'}`}
                                onClick={() => setSelectedCat('')}
                            >
                                All Categories
                            </button>
                            {categories.map(cat => (
                                <button
                                    key={cat._id}
                                    className={`btn btn-sm ${selectedCat === cat._id ? 'btn-dark text-white' : 'btn-outline-dark'}`}
                                    onClick={() => setSelectedCat(cat._id)}
                                >
                                    {cat.name}
                                </button>
                            ))}
                        </div>

                        <hr className="my-4" />

                        <p className="mb-3">Filter by Price</p>
                        <div className="d-flex flex-column gap-2">

                            <button
                                className={`btn btn-sm ${selectedPrice.length === 0 ? 'btn-dark text-white' : 'btn-outline-dark'}`}
                                onClick={() => setSelectedPrice([])}
                            >
                                All Prices
                            </button>


                            {Prices.map((p, i) => (
                                <button
                                    key={i}
                                    className={`btn btn-sm ${selectedPrice.length > 0 && JSON.stringify(selectedPrice) === JSON.stringify(p.array)
                                        ? 'btn-dark text-white'
                                        : 'btn-outline-dark'
                                        }`}
                                    onClick={() => setSelectedPrice(p.array)}
                                >
                                    {p.name}
                                </button>
                            ))}


                        </div>
                    </aside>

                    {/* ===== RIGHT: Product List ===== */}
                    <section className="col-md-9">
                        <h5 className="mb-3">All Products</h5>

                        {loading ? (
                            <div className="d-flex justify-content-center py-5">
                                <div className="spinner-border" role="status" style={{ width: '3rem', height: '3rem' }}>
                                    <span className="visually-hidden">Loading…</span>
                                </div>
                            </div>
                        ) : filtered.length > 0 ? (
                            <div className="row">
                                {filtered.map(prod => (
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
                                                    backgroundColor: '#f8f9fa'
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
