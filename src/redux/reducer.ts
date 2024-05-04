import { ActionTypes } from "./actions";

export interface TextState {
    text: string;
    type: string;
}

const initialState: TextState = {
    text: '',
    type: ''
};

interface SetTextAction {
    type: ActionTypes.SET_TEXT;
    payload: string;
}

interface SetTypeAction {
    type: ActionTypes.SET_TYPE;
    payload: string;
}

type TextAction = SetTextAction | SetTypeAction;

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
        default:
            return state;
    }
};

export default reducer;
