import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SearchService from "../services/searchService";

const Search = () => {
    const location = useLocation();
    const [query, setQuery] = useState('');

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const queryParam = searchParams.get('q');
        setQuery(queryParam || '');
    }, [location.search]);

    const handleQueryChange = (event: any) => {
        const inputValue = event.target.value.trim();
        const searchParams = new URLSearchParams(location.search);

        if (inputValue !== '') {
            searchParams.set('q', inputValue);
        } else {
            searchParams.delete('q');
        }

        SearchService.searchMoviesbyTitle(event.target.value).then((response: any) => {
            console.log(response)
        })

        const newUrl = location.pathname + (searchParams.toString() ? `?${searchParams.toString()}` : '');
        window.history.pushState(null, '', newUrl);
        setQuery(event.target.value);
    };

    if (location.pathname === "/404") {
        return null;
    }

    return (
        <div className="search-container">
            <input type="search" value={query} onChange={handleQueryChange} className="search-input" placeholder="Search by title..." />
        </div>
    );
};

export default Search;
