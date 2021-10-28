import { combineReducers } from 'redux';
import counterReducer from './counter/reducer';
import searchReducer from './search/reducer';

export default combineReducers({
    counter: counterReducer,
    search: searchReducer,
});
