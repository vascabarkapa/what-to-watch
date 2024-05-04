import { SET_TEXT } from './actions';

export interface TextState {
    text: string;
}

const initialState: TextState = {
    text: '',
};

const reducer = (state = initialState, action: any): TextState => {
    switch (action.type) {
        case SET_TEXT:
            return {
                ...state,
                text: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;