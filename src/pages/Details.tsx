import w2wLogo from "./../assets/w2w-logo.png";

const Details = () => {
    return (
        <div className="container mt-50">
            <div>
                <button className="back">
                    &larr; Back
                </button>
                <img className="back-img" src={w2wLogo} alt="W2W Logo" />
            </div>
        </div>
    );
};

export default Details;
