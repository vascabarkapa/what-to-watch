import React from "react";
import { Link } from "react-router-dom";

const Tabs: React.FC = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/tv-shows">TV Shows</Link>
                </li>
                <li>
                    <Link to="/movies">Movies</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Tabs;
