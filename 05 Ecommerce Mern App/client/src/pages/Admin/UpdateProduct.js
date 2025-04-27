import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout/Layout';
import AdminMenu from '../../components/Layout/AdminMenu';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Select } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';

const { Option } = Select;

export default function UpdateProduct() {
    const navigate = useNavigate();
    const { slug } = useParams();

    // form state
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [shipping, setShipping] = useState(false);
    const [category, setCategory] = useState('');      // category ID
    const [photoFile, setPhotoFile] = useState(null);  // newly selected file
    const [preview, setPreview] = useState('');        // preview URL
    const [id, setId] = useState('');

    // load category options
    const getAllCategory = async () => {
        try {
            const { data } = await axios.get('/api/v1/category/get-category');
            if (data.success) setCategories(data.category);
            else toast.error('Failed to load categories');
        } catch {
            toast.error('Failed to load categories');
        }
    };

    // load this product’s data
    const getSingleProduct = async () => {
        try {
            const { data } = await axios.get(`/api/v1/product/get-product/${slug}`);
            if (data.success) {
                const p = data.product;
                setId(p._id);
                setName(p.name);
                setDescription(p.description);
                setPrice(p.price);
                setQuantity(p.quantity);
                setShipping(p.shipping);
                setCategory(p.category._id);
                // preview existing photo (cache-bust with timestamp)
                setPreview(`/api/v1/product/product-photo/${p._id}?t=${Date.now()}`);
            } else {
                toast.error(data.message || 'Failed to load product');
            }
        } catch {
            toast.error('Error fetching product');
        }
    };

    // on mount
    useEffect(() => {
        getAllCategory();
        getSingleProduct();
    }, []);

    // when user picks new file
    const handlePhotoChange = e => {
        const file = e.target.files[0];
        if (file) {
            setPhotoFile(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    // submit update
    const handleUpdate = async e => {
        e.preventDefault();
        const stored = localStorage.getItem('auth');
        const token = stored && JSON.parse(stored).token;
        if (!token) return toast.error('Please login as admin');

        try {
            const fd = new FormData();
            fd.append('name', name);
            fd.append('description', description);
            fd.append('price', price);
            fd.append('quantity', quantity);
            fd.append('shipping', shipping);
            fd.append('category', category);
            if (photoFile) fd.append('photo', photoFile);

            const { data } = await axios.put(
                `/api/v1/product/update-product/${id}`,
                fd,
                { headers: { Authorization: `Bearer ${token}` } }
            );

            if (data.success) {
                toast.success('Product updated successfully');
                navigate('/dashboard/admin/products');
            } else {
                toast.error(data.message);
            }
        } catch (err) {
            console.error(err);
            toast.error('Update failed');
        }
    };


    // Delete Product
    const handleDelete = async () => {
        try {
            let answer = window.confirm("Are you sure you want to delete this product?");
            if (!answer) return;

            const { data } = await axios.delete(`/api/v1/product/delete-product/${id}`);

            if (data.success) {
                toast.success('Product deleted successfully');
                navigate("/dashboard/admin/products");
            } else {
                toast.error(data.message || "Something went wrong!");
            }
        } catch (error) {
            console.error(error);
            toast.error("Failed to delete the product.");
        }
    }


    return (
        <Layout title="Dashboard – Update Product">
            <div className="container my-4 px-3">
                <div className="row">
                    {/* Sidebar */}
                    <div className="col-md-3 mb-3">
                        <AdminMenu />
                    </div>

                    {/* Main */}
                    <div className="col-md-9 d-flex justify-content-center">
                        <div
                            className="bg-white rounded shadow-sm border p-4 w-100"
                            style={{ maxWidth: 800 }}
                        >
                            <h2 className="h4 mb-4 fw-bold border-bottom pb-3">
                                Update Product
                            </h2>
                            <form onSubmit={handleUpdate}>
                                {/* Category */}
                                <div className="mb-4">
                                    <label className="form-label fw-semibold">Category</label>
                                    <Select
                                        className="w-100"
                                        value={category}
                                        onChange={setCategory}
                                    >
                                        {categories.map((c) => (
                                            <Option key={c._id} value={c._id}>
                                                {c.name}
                                            </Option>
                                        ))}
                                    </Select>
                                </div>

                                {/* Photo */}
                                <div className="mb-4">
                                    <label className="form-label fw-semibold">Photo</label>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        className="form-control"
                                        onChange={handlePhotoChange}
                                    />
                                </div>

                                {/* Preview */}
                                {preview && (
                                    <div className="text-center mb-4">
                                        <img
                                            src={preview}
                                            alt="preview"
                                            className="img-fluid rounded"
                                            style={{ maxHeight: 200, objectFit: 'cover' }}
                                        />
                                    </div>
                                )}

                                {/* Name */}
                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>

                                {/* Description */}
                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Description</label>
                                    <textarea
                                        className="form-control"
                                        rows="4"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        required
                                    />
                                </div>

                                {/* Price & Qty */}
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label fw-semibold">
                                            Price ($)
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            value={price}
                                            onChange={(e) => setPrice(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label fw-semibold">
                                            Quantity
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            value={quantity}
                                            onChange={(e) => setQuantity(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Shipping */}
                                <div className="mb-4">
                                    <label className="form-label fw-semibold">
                                        Shipping Available?
                                    </label>
                                    <Select
                                        className="w-100"
                                        value={shipping ? '1' : '0'}
                                        onChange={(val) => setShipping(val === '1')}
                                    >
                                        <Option value="0">No</Option>
                                        <Option value="1">Yes</Option>
                                    </Select>
                                </div>


                                {/* Update and delete Button */}

                                <div className="d-flex justify-content-between mt-4">
                                    <button className="btn btn-primary px-4 py-2" style={{ minWidth: '150px' }}>
                                        Update Product
                                    </button>

                                    <button
                                        className="btn btn-danger px-4 py-2"
                                        style={{ minWidth: '150px' }}
                                        onClick={handleDelete}
                                    >
                                        Delete Product
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
