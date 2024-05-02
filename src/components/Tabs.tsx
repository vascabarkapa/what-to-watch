import React from "react";
import { NavLink } from "react-router-dom";

const Tabs: React.FC = () => {
    return (
        <nav className="tabs-container">
            <ul className="tabs-list">
                <li className="tab-item">
                    <NavLink to="/tv-shows" className="tab-link">TV Shows</NavLink>
                </li>
                <li className="tab-item">
                    <NavLink to="/movies" className="tab-link">Movies</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Tabs;
