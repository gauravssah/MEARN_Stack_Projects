import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom";
import axios from 'axios';
import Spinner from "../Spinner";

export default function AdminRoute() {
    const [ok, setOk] = useState(false);
    const [auth] = useAuth(); // Removed setAuth since it's not used
    const navigate = useNavigate(); // Declare navigate

    useEffect(() => {
        const authCheck = async () => {
            try {
                const res = await axios.get("/api/v1/auth/admin-auth", {
                    headers: {
                        Authorization: `Bearer ${auth?.token}`,
                    },
                });
                if (res.data.ok) {
                    setOk(true);
                } else {
                    setOk(false);
                    navigate("/login"); // Redirect to login if not authorized
                }
            } catch (error) {
                console.log("Authorization error:", error);
                setOk(false);
                navigate("/login");
            }
        };

        if (auth?.token) authCheck();
        else {
            navigate("/login");
        }
    }, [auth?.token, navigate]);

    return ok ? <Outlet /> : <Spinner path="/" />;
}
