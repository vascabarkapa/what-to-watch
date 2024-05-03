import { useEffect, useState } from "react";
import Card from "../components/Card";
import MovieService from "../services/movieService";
import Movie from "../models/movie";
import Logo from "../components/Logo";
import Tabs from "../components/Tabs";
import Search from "../components/Search";

const Movies = () => {
    const [movies, setMovies] = useState([] as Movie[]);

    useEffect(() => {
        MovieService.getTopRatedMovies().then((response) => {
            if (response) {
                setMovies(response.results.slice(0, 10));
            }
        })
    }, []);

    return (
        <div className='container'>
            <Logo />
            <Tabs />
            <Search />
            <div className="card-container">
                {movies.map((movie) => (
                    <Card key={movie.id} media={movie} />
                ))}
            </div>
        </div>
    );
};

export default Movies;
