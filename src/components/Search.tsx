import { useLocation } from "react-router-dom";

const Search = () => {
    const location = useLocation();

    if (location.pathname === "/404") {
        return null;
    }

    const handleQueryChange = (event: any) => {
        const inputValue = event.target.value.trim();
        const searchParams = new URLSearchParams(location.search);

        if (inputValue !== '') {
            searchParams.set('q', inputValue);
        } else {
            searchParams.delete('q');
        }

        const newUrl = location.pathname + (searchParams.toString() ? `?${searchParams.toString()}` : '');
        window.history.pushState(null, '', newUrl);
    };

    return (
        <div className="search-container">
            <input type="search" onChange={handleQueryChange} className="search-input" placeholder="Search by title..." />
        </div>
    );
};

export default Search;
