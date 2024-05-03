import Creator from "./creator";
import Episode from "./episode";
import Genre from "./genre";
import Network from "./network";
import ProductionCompany from "./productionCompany";
import ProductionCountry from "./productionCountry";
import Season from "./season";
import SpokenLanguage from "./spokenLanguage";

interface TVShow {
    adult: boolean;
    backdrop_path: string;
    created_by?: Creator[];
    episode_run_time?: number[];
    first_air_date: string;
    genre_ids?: number[];
    genres?: Genre[];
    homepage?: string;
    id: number;
    in_production?: boolean;
    languages?: string[];
    last_air_date?: string;
    last_episode_to_air?: Episode;
    name: string;
    next_episode_to_air?: string;
    networks?: Network[];
    number_of_episodes?: number;
    number_of_seasons?: number;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies?: ProductionCompany[];
    production_countries?: ProductionCountry[];
    seasons?: Season[];
    spoken_languages?: SpokenLanguage[];
    status?: string;
    tagline?: string;
    type?: string;
    vote_average: number;
    vote_count: number;
}

export default TVShow;