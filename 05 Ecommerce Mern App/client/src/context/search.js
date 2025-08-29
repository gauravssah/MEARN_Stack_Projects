import { useState, useContext, createContext } from 'react';

const SearchContext = createContext(); // ✅ Correct spelling

const SearchProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        keyword: "",
        results: [],
    });

    return (
        <SearchContext.Provider value={[auth, setAuth]}>
            {children}
        </SearchContext.Provider>
    );
};

// custem hook
const useSearch = () => useContext(SearchContext);

export { useSearch, SearchProvider };
