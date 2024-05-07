export enum ActionTypes {
    SET_TEXT = 'SET_TEXT',
    SET_TYPE = 'SET_TYPE',
    SET_PAGE = 'SET_PAGE',
}

const createAction = <T>(type: ActionTypes, payload: T) => ({
    type,
    payload,
});

export const setText = (text: string) => createAction<string>(ActionTypes.SET_TEXT, text);
export const setType = (type: string) => createAction<string>(ActionTypes.SET_TYPE, type);
export const setPage = (page: number) => createAction<number>(ActionTypes.SET_PAGE, page);
