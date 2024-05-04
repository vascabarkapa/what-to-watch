import { SET_SEARCH_TEXT } from './actions';

export interface TextState {
    searchText: string;
}

const initialState: TextState = {
    searchText: '',
};

const reducer = (state = initialState, action: any): TextState => {
    switch (action.type) {
        case SET_SEARCH_TEXT:
            return {
                ...state,
                searchText: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
