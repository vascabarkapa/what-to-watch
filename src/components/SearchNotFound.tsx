import React from "react";

type Props = {
    media: string;
}

const SearchNotFound: React.FC<Props> = ({ media }) => {
    return (
        <div className="search-not-found">
            ... {media} Not Found!
        </div>
    );
};

export default SearchNotFound;
