import React from "react";
import { NavLink } from "react-router-dom";

const Tabs: React.FC = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/tv-shows">TV Shows</NavLink>
                </li>
                <li>
                    <NavLink to="/movies">Movies</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Tabs;
