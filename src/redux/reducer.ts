import { ActionTypes } from "./actions";

export interface TextState {
    text: string;
    type: string;
    page: number;
}

const initialState: TextState = {
    text: '',
    type: '',
    page: 1
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

type TextAction = SetTextAction | SetTypeAction | SetPageAction;

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
        default:
            return state;
    }
};

export default reducer;
