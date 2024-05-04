import { SET_TEXT, SET_TYPE } from './actions';

export interface TextState {
    text: string;
    type: string;
}

const initialState: TextState = {
    text: '',
    type: ''
};

const reducer = (state = initialState, action: any): TextState => {
    switch (action.type) {
        case SET_TEXT:
            return {
                ...state,
                text: action.payload,
            };
        case SET_TYPE:
            return {
                ...state,
                type: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;