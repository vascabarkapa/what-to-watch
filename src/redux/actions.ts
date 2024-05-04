export const SET_TEXT = 'SET_TEXT';

export const setText = (text: string) => ({
    type: SET_TEXT,
    payload: text,
});