import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/root";
import { setPage, setText } from "../redux/actions";
import Card from "../components/Card";
import SearchService from "../services/searchService";
import TvShowService from "../services/tvShowService";
import TVShow from "../models/tvShow";
import Logo from "../components/Logo";
import Tabs from "../components/Tabs";
import Search from "../components/search/Search";
import Loading from "../components/loading/Loading";
import SearchNotFound from "../components/search/SearchNotFound";
import ReactPaginate from "react-paginate";

const TVShows = () => {
    const dispatch = useDispatch();
    const search = useSelector((state: RootState) => state.text);
    const page = useSelector((state: RootState) => state.text);
    const [tvShows, setTvShows] = useState<any>({});
    const [top10TvShows, setTop10TvShows] = useState<any>({});
    const [isLoading, setIsLoading] = useState(true);

    const fetchSearchResults = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await SearchService.searchTvShowsbyTitle(search.text, page.page);
            setTvShows(response);
        } catch (error) {
            console.error('Error fetching search results:', error);
        } finally {
            setIsLoading(false);
        }
    }, [search.text]);

    const fetchTop10 = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await TvShowService.getTopRatedTvShows();
            const top10 = response.results.slice(0, 10);
            const updatedResponse = { ...response, results: top10 };
            setTvShows(updatedResponse);
            setTop10TvShows(updatedResponse);
        } catch (error) {
            console.error('Error fetching top 10 TV shows:', error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        if (search.text.length >= 3) {
            const timer = setTimeout(fetchSearchResults, 1000);
            return () => clearTimeout(timer);
        } else if (top10TvShows.results && top10TvShows.results.length > 0) {
            setTvShows(top10TvShows);
            setIsLoading(false);
        } else {
            fetchTop10();
        }
    }, [search.text, fetchSearchResults, fetchTop10, top10TvShows]);

    const handleInputChange = useCallback((value: string) => {
        dispatch(setText(value));
    }, [dispatch]);

    const handlePageClick = async (event: any) => {
        setIsLoading(true);
        try {
            const response = await SearchService.searchTvShowsbyTitle(search.text, event.selected + 1);
            setTvShows(response);
            dispatch(setPage(event.selected + 1));
        } catch (error) {
            console.error('Error fetching search results:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='container'>
            <Logo />
            <Tabs />
            <Search value={search.text} onChange={handleInputChange} />
            {isLoading ? (
                <Loading />
            ) : (
                (tvShows.results && tvShows.results.length > 0) ? (
                    <>
                        <div className="card-container">
                            {tvShows.results.map((tvShow: TVShow) => <Card key={tvShow.id} media={tvShow} />)}
                        </div>
                        {
                            search.text.length >= 3 &&
                            <div className="pagination-container">
                                <ReactPaginate
                                    forcePage={page.page - 1}
                                    breakLabel="..."
                                    nextLabel={null}
                                    onPageChange={handlePageClick}
                                    pageRangeDisplayed={5}
                                    pageCount={tvShows.total_pages}
                                    previousLabel={null}
                                    containerClassName={"pagination"}
                                    pageClassName={"page-item"}
                                    activeClassName={"active"}
                                />
                            </div>
                        }
                    </>
                ) : (
                    <SearchNotFound media={'TV Shows'} />
                )
            )}
        </div>
    );
};

export default TVShows;
