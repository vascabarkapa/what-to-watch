import w2wLogo from "./../assets/logo/w2w-logo.png";
import { useLocation } from "react-router-dom";

const Logo = () => {
    const location = useLocation();

    if (location.pathname === "/404") {
        return null;
    }

    return (
        <div className="logo">
            <a href="/">
                <img className="logo-img" src={w2wLogo} alt="W2W Logo" />
            </a>
        </div>
    );
};

export default Logo;
