import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout/Layout';
import AdminMenu from '../../components/Layout/AdminMenu';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Select } from 'antd';
import { useNavigate } from 'react-router-dom';

function Products() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const getAllProducts = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get('/api/v1/product/get-product');
            if (data?.success) {
                setProducts(data.products);
            } else {
                toast.error('Failed to fetch products');
            }
        } catch (error) {
            console.error(error);
            toast.error('Something went wrong while fetching products');
        } finally {
            setLoading(false);
        }
    };

    const getAllCategories = async () => {
        try {
            const { data } = await axios.get('/api/v1/category/get-category');
            if (data?.success) {
                setCategories(data.category);
            } else {
                toast.error('Failed to fetch categories');
            }
        } catch (error) {
            console.error(error);
            toast.error('Something went wrong while fetching categories');
        }
    };

    // Fixed handleCategoryChange function
    const handleCategoryChange = (value) => {
        setSelectedCategory(value);
    };

    useEffect(() => {
        getAllProducts();
        getAllCategories();
    }, []);

    const filteredProducts = selectedCategory
        ? products.filter((product) => product.category?._id === selectedCategory)
        : products;

    return (
        <Layout title="Dashboard - All Products">
            <div className="container my-4 px-3">
                <div className="row">
                    <div className="col-md-3 mb-3">
                        <AdminMenu />
                    </div>
                    <div className="col-md-9 d-flex flex-column align-items-center">
                        <div
                            className="bg-white text-dark rounded shadow-sm border p-4 w-100"
                            style={{ maxWidth: '900px' }}
                        >
                            <h2 className="h4 mb-4 fw-bold border-bottom pb-3">All Products</h2>

                            {/* Category Filter */}
                            <div className="mb-4">
                                <Select
                                    className="form-select"
                                    size="large"
                                    variant="borderless"
                                    value={selectedCategory}
                                    onChange={handleCategoryChange} // No need for e.target.value
                                >
                                    <option value="">All Categories</option>
                                    {categories.map((cat) => (
                                        <option key={cat._id} value={cat._id}>
                                            {cat.name}
                                        </option>
                                    ))}
                                </Select>
                            </div>

                            {/* Loading Spinner */}
                            {loading ? (
                                <div
                                    className="d-flex justify-content-center align-items-center"
                                    style={{ height: "200px" }}
                                >
                                    <div
                                        className="spinner-border"
                                        role="status"
                                        style={{
                                            width: "4rem",
                                            height: "4rem",
                                            borderWidth: "6px",
                                            color: "#000000",
                                        }}
                                    >
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    {/* Product List */}
                                    {filteredProducts.length > 0 ? (
                                        <div className="row">
                                            {filteredProducts.map((product) => (
                                                <div
                                                    key={product._id}
                                                    className="col-12 col-md-6 mb-4"
                                                >
                                                    <div
                                                        className="card shadow-sm h-100 product-card"
                                                        onClick={() => {
                                                            if (product.slug) {
                                                                navigate(`/dashboard/admin/product/${product.slug}`);
                                                            } else {
                                                                toast.error('Invalid product link');
                                                            }
                                                        }}
                                                        style={{ cursor: "pointer" }}
                                                    >
                                                        <img
                                                            src={`/api/v1/product/product-photo/${product._id}`}
                                                            className="card-img-top"
                                                            alt={`Image of ${product.name}`}
                                                            style={{ height: "200px", objectFit: "cover" }}
                                                        />
                                                        <div className="card-body d-flex flex-column">
                                                            <h5 className="card-title">{product.name}</h5>
                                                            <p className="card-text">
                                                                {product.description?.substring(0, 60)}...
                                                            </p>
                                                            <div className="d-flex justify-content-between align-items-center mt-2">
                                                                <p className="card-text fw-bold mb-0">${product.price}</p>
                                                                <p className="card-text text-muted small mb-0">
                                                                    Qty: {product.quantity}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <p className="text-center mt-4">No products found.</p>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Products;
