import React from 'react';
import { NavLink, Link, useNavigate } from "react-router-dom";
import { GiShoppingBag } from "react-icons/gi";
import { TiShoppingCart } from "react-icons/ti";
import { useAuth } from '../../context/auth';
import toast from 'react-hot-toast';
import { FiUser, FiUserPlus, FiLogIn, FiLogOut } from 'react-icons/fi';

function Header() {
    const [auth, setAuth] = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        setAuth({ ...auth, user: null, token: "" });
        localStorage.removeItem("auth");
        navigate("/login");
        toast.success("You have successfully logged out.");
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-black sticky-top shadow-sm border-bottom border-dark">
            <div className="container-fluid px-4">
                {/* Logo */}
                <Link className="navbar-brand d-flex align-items-center gap-2 fs-4 fw-bold" to="/">
                    <GiShoppingBag size={28} />
                    <span className="d-none d-md-inline">
                        Ecommerce<span className="text-secondary">Store</span>
                    </span>
                </Link>

                {/* Mobile toggler */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Nav Links */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center gap-3">
                        <li className="nav-item">
                            <NavLink className="nav-link nav-hover" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link nav-hover" to="/category">Category</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link nav-hover d-flex align-items-center gap-1" to="/cart">
                                <TiShoppingCart size={20} /> Cart (0)
                            </NavLink>
                        </li>

                        {/* Auth Controls */}
                        {!auth.user ? (
                            <>
                                <li className="nav-item">
                                    <NavLink to="/register" className="btn btn-outline-light px-3 py-1 rounded-pill fw-semibold d-flex align-items-center gap-2">
                                        <FiUserPlus /> Register
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/login" className="btn btn-light text-black px-3 py-1 rounded-pill fw-semibold d-flex align-items-center gap-2">
                                        <FiLogIn /> Login
                                    </NavLink>
                                </li>
                            </>
                        ) : (
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle d-flex align-items-center gap-2"
                                    href="#"
                                    id="navbarDropdownMenuLink"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <FiUser /> Profile
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end mt-2" aria-labelledby="navbarDropdownMenuLink">
                                    <li className="dropdown-item-text text-white fw-medium px-3">{auth?.user?.name}</li>
                                    <li>
                                        <NavLink
                                            to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`}
                                            className="dropdown-item">Dashboard</NavLink>
                                    </li>
                                    <li>
                                        <button
                                            onClick={handleLogout}
                                            className="dropdown-item logout-btn text-white py-2 px-3 d-flex align-items-center gap-2"
                                        >
                                            <FiLogOut /> Logout
                                        </button>
                                    </li>
                                </ul>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
