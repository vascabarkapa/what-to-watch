import { combineReducers } from 'redux';
import searchTextReducer from './reducer';

const rootReducer = combineReducers({
    text: searchTextReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
