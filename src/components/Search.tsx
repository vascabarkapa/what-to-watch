import React from "react";
import { useLocation } from "react-router-dom";

const Search: React.FC = () => {
    const location = useLocation();

    if (location.pathname === "/404") {
        return null;
    }

    return (
        <div className="search-container">
            <input type="search" className="search-input" placeholder="Search by title..." />
        </div>
    );
};

export default Search;
