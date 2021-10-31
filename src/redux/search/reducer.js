import { combineReducers } from 'redux';
import { PRODUCT_NAME_INPUT } from './actionTypes';

const queryReducer = (state = '', { type, payload }) => {
    switch (type) {
        case PRODUCT_NAME_INPUT:
            return payload;

        default:
            return state;
    }
};

export default combineReducers({ query: queryReducer });
