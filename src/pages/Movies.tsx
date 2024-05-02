import { useEffect, useState } from "react";
import Card from "../components/Card";
import MovieService from "../services/movieService";
import { Movie } from "../models/movie";

const Movies = () => {
    const [movies, setMovies] = useState([] as Movie[]);

    useEffect(() => {
        MovieService.getTopRatedMovies().then((response) => {
            if (response) {
                console.log(response);
                setMovies(response.results);
            }
        })
    }, []);

    return (
        <div className="card-container">
            {movies.map((movie) => (
                <Card key={movie.id} movie={movie} />
            ))}
        </div>
    );
};

export default Movies;
