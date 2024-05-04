import { FC } from "react";
import { Link } from "react-router-dom";
import tvLogo from "./../assets/logo/tv-logo.png";

const NotFound: FC = () => {
    return (
        <div className="not-found">
            <img src={tvLogo} alt="tv logo" style={{ width: '50%' }} />
            <div className="not-found-text">404 | Not Found</div>
            <Link className="not-found-button" to="/">
                Back to Home
            </Link>
        </div>
    );
};

export default NotFound;
