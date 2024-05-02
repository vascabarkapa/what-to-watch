import w2wLogo from "./../assets/w2w-logo.png";
import { useLocation } from "react-router-dom";

const Logo = () => {
    const location = useLocation();

    if (location.pathname === "/404") {
        return null;
    }

    return (
        <a href="/">
            <div className="logo">
                <img src={w2wLogo} width={'20%'} alt="W2W Logo" />
            </div>
        </a>
    );
};

export default Logo;
