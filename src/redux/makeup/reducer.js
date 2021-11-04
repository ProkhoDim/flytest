import { combineReducers } from 'redux';
import {
    ADD_TO_CART,
    GET_FILTERED_LIST_SUCCESS,
    GET_INITIAL_LIST_SUCCESS,
    GET_PRODUCTS_SUCCES,
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

const brandReducer = (state = '', { type, payload }) => {
    switch (type) {
        case UPDATE_BRAND:
            return payload;

        default:
            return state;
    }
};

const productsReducer = (state = [], { type, payload }) => {
    switch (type) {
        case GET_PRODUCTS_SUCCES:
            return payload;
        default:
            return state;
    }
};

/**
 *
 * @param {Array} state
 * @param {{type: string, payload: import('../../components/ProductItem').MakeupItem}} action
 * @returns
 */
const boughtProducts = (state = [], { type, payload }) => {
    switch (type) {
        case ADD_TO_CART:
            const isExist = state.find(({ id }) => payload.id === id);
            if (isExist) {
                return state.map(item =>
                    item.id === payload.id
                        ? { ...item, count: item.count + 1 }
                        : item
                );
            }
            return [
                ...state,
                {
                    id: payload.id,
                    image: payload.api_featured_image,
                    name: payload.name,
                    count: 1,
                },
            ];
        default:
            return state;
    }
};

export default combineReducers({
    tags: tagsReducer,
    brands: brandReducer,
    products: productsReducer,
    boughtProducts: boughtProducts,
});
