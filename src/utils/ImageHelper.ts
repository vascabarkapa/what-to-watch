const TMDB_LINK = "https://image.tmdb.org/t/p/original";

function generateImageLink(backdropPath: string) {
    return `${TMDB_LINK}/${backdropPath}`;
}

const ImageHelper = {
    generateImageLink
}

export default ImageHelper;
