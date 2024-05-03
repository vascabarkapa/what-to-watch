import { useNavigate } from "react-router-dom";
import w2wLogo from "./../assets/w2w-logo.png";
import LeftArrow from "../components/LeftArrow";
import Star from "../components/Star";

const Details = () => {
    const navigate = useNavigate();

    function navigateBack() {
        navigate("/tv-shows");
    }

    return (
        <div className="container my-50">
            <div className="back-container">
                <button className="back" onClick={() => navigateBack()}>
                    <LeftArrow />&nbsp;&nbsp;Back
                </button>
                <img className="back-img" src={w2wLogo} alt="W2W Logo" />
            </div>
            <div className="card">
                <img src={'https://image.tmdb.org/t/p/original//AvsNXUbP7UKCVnypyx2eWp8z2N3.jpg'} alt="Slika filma" loading="eager" />
                <div className="title-wrapper">
                    <h2>Naslov</h2>
                    <span><Star />&nbsp;2.55 (12555)</span>
                </div>
            </div>
        </div>
    );
};

export default Details;
