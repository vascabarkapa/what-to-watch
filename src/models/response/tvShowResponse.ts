import TVShow from "../tvShow";

interface TVShowResponse {
    page: number;
    results: TVShow[];
    total_pages: number;
    total_results: number;
}

export default TVShowResponse;