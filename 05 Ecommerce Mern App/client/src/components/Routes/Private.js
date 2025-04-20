import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

export default function PrivateRoute() {
    const [ok, setOk] = useState(false);
    const [auth] = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const authCheck = async () => {
            try {
                const res = await axios.get("/api/v1/auth/user-auth", {
                    headers: {
                        Authorization: `Bearer ${auth?.token}`,
                    },
                });
                if (res.data.ok) {
                    setOk(true);
                } else {
                    setOk(false);
                    // Optionally navigate to login if not okay:
                    navigate("/login");
                }
            } catch (error) {
                console.log("Authorization error:", error);
                setOk(false);
                // Navigate to login on error, if desired:
                navigate("/login");
            }
        };

        // If token is not present, redirect to login immediately
        if (!auth?.token) {
            navigate("/login");
        } else {
            authCheck();
        }
    }, [auth?.token, navigate]);

    return ok ? <Outlet /> : <Spinner />;
}
