import { ActionTypes } from "./actions";

export interface TextState {
    text: string;
}

const initialState: TextState = {
    text: ''
};

interface SetTextAction {
    type: ActionTypes.SET_TEXT;
    payload: string;
}

type TextAction = SetTextAction;

const reducer = (state = initialState, action: TextAction): TextState => {
    switch (action.type) {
        case ActionTypes.SET_TEXT:
            return {
                ...state,
                text: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
