import React from "react";

const Search: React.FC = () => {
    return (
        <div className="search-container">
            <input type="search" className="search-input" placeholder="Pretraži..." />
        </div>
    );
};

export default Search;
