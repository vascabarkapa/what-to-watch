import { useLocation } from "react-router-dom";

type SearchInputProps = {
    value: string;
    onChange: (value: string) => void;
}

const Search: React.FC<SearchInputProps> = ({ value, onChange }) => {
    const location = useLocation();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    if (location.pathname === "/404") {
        return null;
    }

    return (
        <div className="search-container">
            <input type="search" value={value} onChange={handleInputChange} className="search-input" placeholder="Search by title..." />
        </div>
    );
};

export default Search;
