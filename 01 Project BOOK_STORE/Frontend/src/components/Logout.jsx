import React from 'react';
import { useAuth } from '../context/AuthProvider';
import toast from 'react-hot-toast';

function Logout() {
    const [authUser, setAuthUser] = useAuth();
    const handleLogout = (e) => {
        try {
            setAuthUser({
                ...authUser,
                user: null
            })
            localStorage.removeItem("Users");
            toast.success('Logout Successfully!');
            window.location.reload();

        } catch (error) {
            console.log("Logout Error : ", error);
            toast.error("Something went wrong!")
        }
    }


    return (
        <div >
            <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition-all duration-300"
                onClick={handleLogout}
            >
                Logout
            </button>
        </div>
    );
}

export default Logout;
