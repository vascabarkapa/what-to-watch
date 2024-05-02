import { Movie } from "../models/movie";

interface CardProps {
    movie: Movie;
}

const Card: React.FC<CardProps> = ({ movie }) => {
    return (
        <div className="card">
            <img src={'https://image.tmdb.org/t/p/original/' + movie?.backdrop_path} alt="Slika filma" />
            <h2>{movie?.original_title}</h2>
        </div>
    );
};

export default Card;
