import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { setPage, setType } from '../redux/actions';

const Tabs: FC = () => {
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setType(location.pathname));
    }, [location.pathname, dispatch]);

    if (location.pathname === "/404") {
        return null;
    }

    const resetPage = () => {
        dispatch(setPage(1));
    }

    return (
        <nav className="tabs-container">
            <ul className="tabs-list">
                <li className="tab-item" onClick={resetPage}>
                    <NavLink to="/tv-shows" className="tab-link">TV Shows</NavLink>
                </li>
                <li className="tab-item tab-item-last" onClick={resetPage}>
                    <NavLink to="/movies" className="tab-link">Movies</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Tabs;
