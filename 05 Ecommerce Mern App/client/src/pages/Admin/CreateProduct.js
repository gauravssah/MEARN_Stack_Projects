import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout/Layout';
import AdminMenu from '../../components/Layout/AdminMenu';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Select } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Option } = Select;

function CreateProduct() {
    const navigate = useNavigate();

    // --------------------------
    // State Variables
    // --------------------------
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [shipping, setShipping] = useState('');
    const [category, setCategory] = useState('');
    const [photo, setPhoto] = useState('');

    // --------------------------
    // Fetch all Categories
    // --------------------------
    const getAllCategory = async () => {
        try {
            const { data } = await axios.get('/api/v1/category/get-category');
            if (data?.success) {
                setCategories(data.category);
            } else {
                toast.error(data.message || 'Failed to load categories');
            }
        } catch (err) {
            console.error(err);
            toast.error('Error fetching categories');
        }
    };

    useEffect(() => {
        getAllCategory();
    }, []);

    // --------------------------
    // Create Product Function
    // --------------------------
    const handleCreate = async (e) => {
        e.preventDefault();

        // Important: Add Authorization Token
        const stored = localStorage.getItem('auth');
        const token = stored && JSON.parse(stored).token;
        if (!token) return toast.error('You must be logged in as admin');


        try {
            const productData = new FormData();
            productData.append('name', name);
            productData.append('description', description);
            productData.append('price', price);
            productData.append('quantity', quantity);
            productData.append('shipping', shipping);
            productData.append('category', category);
            productData.append('photo', photo);

            const { data } = await axios.post(
                '/api/v1/product/create-product',
                productData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (data?.success) {
                toast.success('Product Created Successfully');
                navigate('/dashboard/admin/products');
            } else {
                toast.error(data?.message);
            }
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong');
        }
    };

    return (
        <Layout title="Dashboard - Create Product">
            <div className="container my-4 px-3">
                <div className="row">
                    {/* Sidebar */}
                    <div className="col-md-3 mb-3">
                        <AdminMenu />
                    </div>

                    {/* Main Content */}
                    <div className="col-md-9 d-flex justify-content-center">
                        <div
                            className="bg-white text-dark rounded shadow-sm border p-4 w-100"
                            style={{ maxWidth: '800px' }}
                        >

                            {/* Heading */}
                            <h2 className="h4 mb-4 fw-bold border-bottom pb-3">Create New Product</h2>

                            {/* Form */}
                            <form className="w-100" onSubmit={handleCreate}>

                                {/* Category Selection */}
                                <div className="mb-4">
                                    <label className="form-label fw-semibold mb-2">Select Category</label>
                                    <Select
                                        placeholder="Choose a category"
                                        size="large"
                                        variant="borderless"
                                        className="form-select"
                                        onChange={(value) => setCategory(value)}
                                    >
                                        {categories?.map((c) => (
                                            <Option key={c._id} value={c._id}>
                                                {c.name}
                                            </Option>
                                        ))}
                                    </Select>
                                </div>

                                {/* Photo Upload */}
                                <div className="mb-4">
                                    <label className="form-label fw-semibold mb-2">Upload Product Photo</label>
                                    <label className="btn btn-outline-secondary w-100">
                                        {photo ? photo.name : 'Choose File'}
                                        <input
                                            type="file"
                                            name="photo"
                                            accept="image/*"
                                            hidden
                                            onChange={(e) => setPhoto(e.target.files[0])}
                                        />
                                    </label>
                                </div>

                                {/* Preview Uploaded Photo */}
                                {photo && (
                                    <div className="text-center mb-4">
                                        <img
                                            src={URL.createObjectURL(photo)}
                                            alt="Product Preview"
                                            className="img-fluid rounded"
                                            style={{ maxHeight: '200px', objectFit: 'cover' }}
                                        />
                                    </div>
                                )}

                                {/* Product Name */}
                                <div className="mb-4">
                                    <label className="form-label fw-semibold mb-2">Product Name</label>
                                    <input
                                        type="text"
                                        value={name}
                                        placeholder="Enter product name"
                                        className="form-control"
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>

                                {/* Product Description */}
                                <div className="mb-4">
                                    <label className="form-label fw-semibold mb-2">Description</label>
                                    <textarea
                                        rows="4"
                                        value={description}
                                        placeholder="Enter product description"
                                        className="form-control"
                                        onChange={(e) => setDescription(e.target.value)}
                                        required
                                    />
                                </div>

                                {/* Product Price */}
                                <div className="mb-4">
                                    <label className="form-label fw-semibold mb-2">Price ($)</label>
                                    <input
                                        type="number"
                                        value={price}
                                        placeholder="Enter price"
                                        className="form-control"
                                        onChange={(e) => setPrice(e.target.value)}
                                        required
                                    />
                                </div>

                                {/* Product Quantity */}
                                <div className="mb-4">
                                    <label className="form-label fw-semibold mb-2">Quantity</label>
                                    <input
                                        type="number"
                                        value={quantity}
                                        placeholder="Enter quantity"
                                        className="form-control"
                                        onChange={(e) => setQuantity(e.target.value)}
                                        required
                                    />
                                </div>

                                {/* Shipping Option */}
                                <div className="mb-4">
                                    <label className="form-label fw-semibold mb-2">Shipping Available?</label>
                                    <Select
                                        placeholder="Select shipping option"
                                        size="large"
                                        variant="borderless"
                                        className="form-select"
                                        onChange={(value) => setShipping(value)}
                                    >
                                        <Option value="0">No</Option>
                                        <Option value="1">Yes</Option>
                                    </Select>
                                </div>

                                {/* Submit Button */}
                                <div className="text-end mt-4">
                                    <button type="submit" className="btn btn-dark px-4">
                                        Create Product
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>




                </div>
            </div>
        </Layout>
    );
}

export default CreateProduct;
