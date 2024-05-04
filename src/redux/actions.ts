export enum ActionTypes {
    SET_TEXT = 'SET_TEXT'
}

const createAction = <T>(type: ActionTypes, payload: T) => ({
    type,
    payload,
});

export const setText = (text: string) => createAction<string>(ActionTypes.SET_TEXT, text);
