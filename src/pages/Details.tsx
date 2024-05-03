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
            <div className="details">
                <img src={'https://image.tmdb.org/t/p/original/AvsNXUbP7UKCVnypyx2eWp8z2N3.jpg'} alt="Slika filma" loading="eager" />
                <div className="title-wrapper">
                    <h2>Naslov</h2>
                    <span className="d-flex align-items-center"><Star />&nbsp;2.55 (12555)</span>
                </div>
                <div>Action, Thriller, Comedia</div>
                <div className="d-flex">
                    <div className="poster">
                    <img src={'https://image.tmdb.org/t/p/original/ojDg0PGvs6R9xYFodRct2kdI6wC.jpg'} alt="Slika filma" loading="eager" />
                    </div>
                    <div className="overview">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                </div>
            </div>
        </div>
    );
};

export default Details;
