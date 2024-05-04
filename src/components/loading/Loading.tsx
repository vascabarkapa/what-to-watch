import { FC } from "react";
import tvLogo from "./../../assets/logo/tv-logo.png";

const Loading: FC = () => {
    return (
        <div className="logo">
            <img className="bounce" src={tvLogo} alt="TV Logo" />
        </div>
    );
};

export default Loading;
