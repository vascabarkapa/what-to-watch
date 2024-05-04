export const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT';

export const setSearchText = (text: string) => ({
    type: SET_SEARCH_TEXT,
    payload: text,
});
