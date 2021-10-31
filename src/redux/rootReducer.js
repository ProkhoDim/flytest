import { combineReducers } from 'redux';
import counterReducer from './counter/reducer';
import searchReducer from './search/reducer';
import makeupReducer from './makeup/reducer';

export default combineReducers({
    counter: counterReducer,
    search: searchReducer,
    makeup: makeupReducer,
});
