import { FC, HTMLAttributes } from "react";
import w2wLogo from "./../../assets/logo/w2w-logo.png";

type Props = HTMLAttributes<HTMLDivElement> & {
    onAnimationEnd: () => void;
};

const LoadingScreen: FC<Props> = ({ onAnimationEnd }) => (
    <div className="loading-screen" onAnimationEnd={onAnimationEnd}>
        <div className="logo">
            <img src={w2wLogo} width={'80%'} alt="W2W Logo" />
        </div>
    </div>
);

export default LoadingScreen;