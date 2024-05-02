import React from "react";

const Search: React.FC = () => {
    return (
        <div className="search-container">
            <input type="text" className="search-input" placeholder="Pretraži..." />
        </div>
    );
};

export default Search;
