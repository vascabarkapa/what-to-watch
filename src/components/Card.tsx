import { Movie } from "../models/movie";
import { TVShow } from "../models/tvShow";

interface CardProps {
    media: Movie | TVShow;
}

const Card: React.FC<CardProps> = ({ media }) => {
    
    return (
        <div className="card">
            <img src={'https://image.tmdb.org/t/p/original/' + media?.backdrop_path} alt="Slika filma" />
            <h2> {(media as Movie).title || (media as TVShow).name}</h2>
        </div>
    );
};

export default Card;
