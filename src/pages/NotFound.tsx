import React from "react";
import tvLogo from "./../assets/tv-logo.png";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
    return (
        <div className="not-found">
            <img src={tvLogo} alt="tv logo" width={'50%'} />
            <div className="not-found-text">404 | Not Found</div>
            <Link className="not-found-button" to="/">
                Back to Home
            </Link>
        </div>
    );
};

export default NotFound;