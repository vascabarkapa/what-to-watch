import { ActionTypes } from "./actions";
import Genre from "../models/genre";

export interface TextState {
    text: string;
    type: string;
    page: number;
    movieGenres: Genre[];
    tvShowGenres: Genre[];
}

const initialState: TextState = {
    text: '',
    type: '',
    page: 1,
    movieGenres: [],
    tvShowGenres: [],
};

interface SetTextAction {
    type: ActionTypes.SET_TEXT;
    payload: string;
}

interface SetTypeAction {
    type: ActionTypes.SET_TYPE;
    payload: string;
}

interface SetPageAction {
    type: ActionTypes.SET_PAGE;
    payload: number;
}

interface SetMovieGenresAction {
    type: ActionTypes.SET_MOVIE_GENRES;
    payload: Genre[];
}

interface SetTVShowGenresAction {
    type: ActionTypes.SET_TV_SHOW_GENRES;
    payload: Genre[];
}

type TextAction = SetTextAction | SetTypeAction | SetPageAction | SetMovieGenresAction | SetTVShowGenresAction;

const reducer = (state = initialState, action: TextAction): TextState => {
    switch (action.type) {
        case ActionTypes.SET_TEXT:
            return {
                ...state,
                text: action.payload,
            };
        case ActionTypes.SET_TYPE:
            return {
                ...state,
                type: action.payload,
            };
        case ActionTypes.SET_PAGE:
            return {
                ...state,
                page: action.payload,
            };
        case ActionTypes.SET_MOVIE_GENRES:
            return {
                ...state,
                movieGenres: action.payload,
            };
        case ActionTypes.SET_TV_SHOW_GENRES:
            return {
                ...state,
                tvShowGenres: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
