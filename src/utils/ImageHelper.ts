const TMDB_LINK = "https://image.tmdb.org/t/p/original";

function generateBackdropLink(backdropPath: string) {
    return `${TMDB_LINK}/${backdropPath}`;
}

const ImageHelper = {
    generateBackdropLink
}

export default ImageHelper;
