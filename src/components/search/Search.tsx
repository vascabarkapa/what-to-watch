import { ChangeEvent, FC } from "react";
import { useLocation } from "react-router-dom";

type Props = {
    value: string;
    onChange: (value: string) => void;
}

const Search: FC<Props> = ({ value, onChange }) => {
    const location = useLocation();

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
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
