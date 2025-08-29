import { useState, useContext, createContext, useEffect } from 'react';
import axios from 'axios';

const AuthContex = createContext();

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        user: null,
        token: ""
    });

    // default axios
    axios.defaults.headers.common['Authorization'] = auth?.token;

    useEffect(() => {
        const data = localStorage.getItem('auth');

        if (data) {
            const parseData = JSON.parse(data);
            setAuth({
                ...auth,
                user: parseData.user,
                token: parseData.token,
            });
        }
        //eslint-disable-next-line
    }, []);

    return (
        <AuthContex.Provider value={[auth, setAuth]}>
            {children}
        </AuthContex.Provider>
    )
}

// custem hook

const useAuth = () => useContext(AuthContex);

export { useAuth, AuthProvider };


