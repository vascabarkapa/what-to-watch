import Genre from "../models/genre";

export enum ActionTypes {
    SET_TEXT = 'SET_TEXT',
    SET_TYPE = 'SET_TYPE',
    SET_PAGE = 'SET_PAGE',
    SET_MOVIE_GENRES = 'SET_MOVIE_GENRES',
    SET_TV_SHOW_GENRES = 'SET_TV_SHOW_GENRES',
}

const createAction = <T>(type: ActionTypes, payload: T) => ({
    type,
    payload,
});

export const setText = (text: string) => createAction<string>(ActionTypes.SET_TEXT, text);
export const setType = (type: string) => createAction<string>(ActionTypes.SET_TYPE, type);
export const setPage = (page: number) => createAction<number>(ActionTypes.SET_PAGE, page);
export const setMovieGenres = (movieGenres: Genre[]) => createAction<Genre[]>(ActionTypes.SET_MOVIE_GENRES, movieGenres);
export const setTVShowGenres = (tvShowGenres: Genre[]) => createAction<Genre[]>(ActionTypes.SET_TV_SHOW_GENRES, tvShowGenres);
