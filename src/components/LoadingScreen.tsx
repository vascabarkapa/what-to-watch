import w2wLogo from "./../assets/w2w-logo.png";

const LoadingScreen = ({ onAnimationEnd }: { onAnimationEnd: () => void }) => (
    <div className="loading-screen" onAnimationEnd={onAnimationEnd}>
        <div className="logo">
            <img src={w2wLogo} width={'80%'} alt="W2W Logo" />
        </div>
    </div>
);

export default LoadingScreen;