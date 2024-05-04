const TMDB_LINK = "https://image.tmdb.org/t/p/";

const backdropImageSizes = {
    w300: "w300",
    w500: "w500",
    w780: "w780",
    w1280: "w1280",
    original: "original"
}

const posterImageSizes = {
    w92: "w92",
    w154: "w154",
    w185: "w185",
    w342: "w342",
    w500: "w500",
    w780: "w780",
    original: "original"
}

function generateImageLink(size: string, path: string) {
    return `${TMDB_LINK}${size}${path}`;
}

const ImageHelper = {
    generateImageLink,
    backdropImageSizes,
    posterImageSizes
}

export default ImageHelper;
