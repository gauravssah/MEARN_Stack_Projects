import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function UserMenu() {
    // Initialize useNavigate hook to programmatically navigate on click
    const navigate = useNavigate();
  
    return (
        <div className="text-center mt-3">
            <div className="list-group">
                {/*
          Header for User Menu:
          - Displays "Dashboard" with a dark background and white text.
          - Clicking it navigates to the user dashboard homepage.
        */}
                <h4
                    className="mb-3 bg-black text-white py-3"
                    style={{ cursor: 'pointer' }}
                    onClick={() => navigate("/dashboard/user")}
                >
                    Dashboard
                </h4>

                {/*
          NavLink for "Profile":
          - Uses a function for className so that when this link is active,
            it gets extra classes (bg-dark text-white) to show an active state.
        */}
                <NavLink
                    to="/dashboard/user/profile"
                    className={({ isActive }) =>
                        "list-group-item list-group-item-action " + (isActive ? "bg-dark text-white" : "")
                    }
                >
                    Profile
                </NavLink>

                {/*
          NavLink for "Orders":
          - Similarly, applies active styling when the route matches.
        */}
                <NavLink
                    to="/dashboard/user/orders"
                    className={({ isActive }) =>
                        "list-group-item list-group-item-action " + (isActive ? "bg-dark text-white" : "")
                    }
                >
                    Orders
                </NavLink>
            </div>
        </div>
    );
}

export default UserMenu;
