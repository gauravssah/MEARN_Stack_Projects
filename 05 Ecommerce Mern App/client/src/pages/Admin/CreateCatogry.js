// Import core React functions and hooks
import React, { useEffect, useState } from 'react';
// Import icons
import { FaEdit, FaTrash } from 'react-icons/fa';
// Import layout and form components
import Layout from '../../components/Layout/Layout';
import AdminMenu from '../../components/Layout/AdminMenu';
import CategoryForm from '../../components/Form/CategoryForm';
// Axios for API calls and toast for notifications
import axios from 'axios';
import toast from 'react-hot-toast';
// Ant Design modal for editing
import { Modal } from 'antd';

export default function CreateCategory() {
    // ==============================
    // State variables
    // ==============================
    const [categories, setCategories] = useState([]); // All categories
    const [name, setName] = useState(''); // New category name
    const [visible, setVisible] = useState(false); // Modal visibility
    const [selected, setSelected] = useState(false); // Selected category for update
    const [updatedName, setUpdatedName] = useState(''); // Name to update category

    // ==============================
    // Fetch all categories on mount
    // ==============================
    const getAllCategory = async () => {
        try {
            const { data } = await axios.get('/api/v1/category/get-category');
            if (data.success) {
                setCategories(data.category);
            } else {
                toast.error(data.message || 'Failed to load categories');
            }
        } catch (err) {
            console.error(err);
            toast.error('Error fetching categories from server');
        }
    };

    useEffect(() => {
        getAllCategory();
    }, []);

    // ==============================
    // Create new category
    // ==============================
    const handleSubmit = async (e) => {
        e.preventDefault();

        const stored = localStorage.getItem('auth');
        const token = stored && JSON.parse(stored).token;

        if (!token) return toast.error('You must be logged in as admin');

        try {
            const { data } = await axios.post(
                '/api/v1/category/create-category',
                { name: name.trim() },
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );

            if (data.success) {
                toast.success(`"${data.category.name}" created successfully`);
                setName('');
                getAllCategory();
            } else {
                toast.error(data.message || 'Category creation failed');
            }
        } catch (err) {
            console.error(err);
            toast.error('Server error while creating category');
        }
    };

    // ==============================
    // Update category
    // ==============================
    const handleUpdate = async (e) => {
        e.preventDefault();

        const stored = localStorage.getItem('auth');
        const token = stored && JSON.parse(stored).token;

        if (!token) return toast.error('You must be logged in as admin');

        try {
            const { data } = await axios.put(
                `/api/v1/category/update-category/${selected._id}`,
                { name: updatedName.trim() },
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );

            if (data.success) {
                toast.success(`Category updated to "${updatedName}"`);
                setSelected(null);
                setUpdatedName('');
                setVisible(false);
                getAllCategory();
            } else {
                toast.error(data.message || 'Category update failed');
            }
        } catch (error) {
            console.error(error);
            toast.error('Server error while updating category');
        }
    };

    // ==============================
    // Delete category
    // ==============================
    const handleDelete = async (pid) => {
        const stored = localStorage.getItem('auth');
        const token = stored && JSON.parse(stored).token;

        if (!token) return toast.error('You must be logged in as admin');

        try {
            const { data } = await axios.delete(
                `/api/v1/category/delete-category/${pid}`,
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );

            if (data.success) {
                toast.success('Category deleted successfully');
                getAllCategory();
            } else {
                toast.error(data.message || 'Failed to delete category');
            }
        } catch (error) {
            console.error(error);
            toast.error('Server error while deleting category');
        }
    };

    // ==============================
    // UI Rendering
    // ==============================
    return (
        <Layout title="Dashboard - Manage Categories">
            <div className="container my-4 px-3">
                <div className="row">

                    {/* Sidebar Menu */}
                    <div className="col-md-3 mb-3">
                        <AdminMenu />
                    </div>

                    {/* Main Content */}
                    <div className="col-md-9 d-flex justify-content-center">
                        <div
                            className="bg-white text-dark rounded shadow-sm border p-4 w-100"
                            style={{ maxWidth: '800px' }}
                        >
                            {/* Page Header */}
                            <h2 className="h5 mb-4 border-bottom pb-2">Manage Categories</h2>

                            {/* New Category Form */}
                            <div className="mb-4">
                                <CategoryForm
                                    handleSubmit={handleSubmit}
                                    value={name}
                                    setValue={setName}
                                    title="Create New"
                                />
                            </div>

                            {/* Categories Table */}
                            {categories.length > 0 ? (
                                <div
                                    className="table-responsive border border-2 border-secondary rounded"
                                    style={{
                                        maxHeight: '400px',
                                        overflowY: 'auto',
                                        position: 'relative',
                                    }}
                                >
                                    <table className="table table-striped table-hover table-bordered text-start mb-0">
                                        <thead
                                            className="table-dark"
                                            style={{
                                                position: 'sticky',
                                                top: 0,
                                                zIndex: 2,
                                            }}
                                        >
                                            <tr>
                                                <th>Category Name</th>
                                                <th className="text-center">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {categories.map((c) => (
                                                <tr key={c._id}>
                                                    <td>{c.name}</td>
                                                    <td className="text-center">
                                                        {/* Edit Button */}
                                                        <button
                                                            className="btn btn-outline-dark btn-sm me-2"
                                                            onClick={() => {
                                                                setVisible(true);
                                                                setUpdatedName(c.name);
                                                                setSelected(c);
                                                            }}
                                                        >
                                                            <FaEdit /> Edit
                                                        </button>

                                                        {/* Delete Button */}
                                                        <button
                                                            className="btn btn-outline-danger btn-sm"
                                                            onClick={() => handleDelete(c._id)}
                                                        >
                                                            <FaTrash /> Delete
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            ) : (
                                <div className="text-muted">
                                    No categories found. Please create one.
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Edit Category Modal */}
                    <Modal
                        onCancel={() => setVisible(false)}
                        footer={null}
                        open={visible}
                    >
                        <CategoryForm
                            title="Rename"
                            value={updatedName}
                            setValue={setUpdatedName}
                            handleSubmit={handleUpdate}
                        />
                    </Modal>
                </div>
            </div>
        </Layout>
    );
}
