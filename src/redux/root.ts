import { combineReducers } from 'redux';
import textReducer from './reducer';

const rootReducer = combineReducers({
    text: textReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;