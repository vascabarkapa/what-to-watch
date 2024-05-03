import Genre from "./genre";
import ProductionCompany from "./productionCompany";
import ProductionCountry from "./productionCountry";
import SpokenLanguage from "./spokenLanguage";

interface Media {
    adult: boolean;
    backdrop_path: string;
    genre_ids?: number[];
    genres?: Genre[];
    homepage?: string;
    id: number;
    original_language: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies?: ProductionCompany[];
    production_countries?: ProductionCountry[];
    spoken_languages?: SpokenLanguage[];
    status?: string;
    tagline?: string;
    vote_average: number;
    vote_count: number;
}

export default Media;