import { combineReducers } from 'redux';
import {
    GET_FILTERED_LIST_SUCCESS,
    GET_INITIAL_LIST_SUCCESS,
    UPDATE_BRAND,
    UPDATE_TAG,
} from './actionTypes';

const tagsReducer = (state = [], { type, payload }) => {
    switch (type) {
        case UPDATE_TAG:
            return payload;

        default:
            return state;
    }
};

const brandReducer = (state = [], { type, payload }) => {
    switch (type) {
        case UPDATE_BRAND:
            return payload;

        default:
            return state;
    }
};

const productsReducer = (state = [], { type, payload }) => {
    switch (type) {
        case GET_INITIAL_LIST_SUCCESS:
            return payload;
        case GET_FILTERED_LIST_SUCCESS:
            return payload;
        default:
            return state;
    }
};

export default combineReducers({
    tags: tagsReducer,
    brands: brandReducer,
    products: productsReducer,
});
