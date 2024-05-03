import { useNavigate } from "react-router-dom";
import w2wLogo from "./../assets/w2w-logo.png";

const Details = () => {
    const navigate = useNavigate();

    function navigateBack() {
        navigate("/tv-shows");
    }

    return (
        <div className="container mt-50">
            <div className="back-container">
                <button className="back" onClick={() => navigateBack()}>
                    &larr; Back
                </button>
                <img className="back-img" src={w2wLogo} alt="W2W Logo" />
            </div>
        </div>
    );
};

export default Details;
