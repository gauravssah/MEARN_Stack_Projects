import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function AdminMenu() {
    const navigate = useNavigate();

    return (
        <div className="text-center mt-3">
            <div className="list-group">
                {/*
          Heading that navigates to the admin dashboard on click.
          It uses a dark background with white text.
        */}
                <h4
                    className="mb-3 bg-dark text-white py-3 rounded-tl-lg rounded-tr-lg"
                    style={{ cursor: 'pointer' }}
                    onClick={() => navigate("/dashboard/admin")}
                >
                    Admin Panel
                </h4>

                {
                    /*
                      NavLink elements use a function for className.
                      When the link is active (i.e. the route matches), 
                      it will receive additional classes 'bg-dark text-white'
                      to have a dark background with white text.
                    */
                }
                <NavLink
                    to="/dashboard/admin/create-category"
                    className={({ isActive }) =>
                        "list-group-item list-group-item-action " +
                        (isActive ? "bg-dark text-white" : "")
                    }
                >
                    Create Category
                </NavLink>

                <NavLink
                    to="/dashboard/admin/create-product"
                    className={({ isActive }) =>
                        "list-group-item list-group-item-action " +
                        (isActive ? "bg-dark text-white" : "")
                    }
                >
                    Create Product
                </NavLink>

                <NavLink
                    to="/dashboard/admin/products"
                    className={({ isActive }) =>
                        "list-group-item list-group-item-action " +
                        (isActive ? "bg-dark text-white" : "")
                    }
                >
                    All Products
                </NavLink>

                <NavLink
                    to="/dashboard/admin/users"
                    className={({ isActive }) =>
                        "list-group-item list-group-item-action " +
                        (isActive ? "bg-dark text-white" : "")
                    }
                >
                    Users
                </NavLink>
            </div>
        </div>
    );
}

export default AdminMenu;
