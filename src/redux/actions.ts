export const SET_TEXT = 'SET_TEXT';
export const SET_TYPE = 'SET_TYPE';

export const setText = (text: string) => ({
    type: SET_TEXT,
    payload: text,
});

export const setType = (text: string) => ({
    type: SET_TYPE,
    payload: text,
});