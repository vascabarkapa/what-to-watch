import React from "react";
import w2wLogo from "./../assets/w2w-logo.png";

const Logo: React.FC = () => {
    return (
        <a href="/">
            <div className="logo">
                <img src={w2wLogo} width={'20%'} alt="W2W Logo" />
            </div>
        </a>
    );
};

export default Logo;
