import { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Tabs: FC = () => {
    const location = useLocation();

    if (location.pathname === "/404") {
        return null;
    }

    return (
        <nav className="tabs-container">
            <ul className="tabs-list">
                <li className="tab-item">
                    <NavLink to="/tv-shows" className="tab-link">TV Shows</NavLink>
                </li>
                <li className="tab-item tab-item-last">
                    <NavLink to="/movies" className="tab-link">Movies</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Tabs;
