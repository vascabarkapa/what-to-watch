import Creator from "./creator";
import Episode from "./episode";
import Media from "./media";
import Network from "./network";
import Season from "./season";

interface TVShow extends Media {
    created_by?: Creator[];
    episode_run_time?: number[];
    first_air_date: string;
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
    original_name: string;
    seasons?: Season[];
    type?: string;
}

export default TVShow;