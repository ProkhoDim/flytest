import createAction from '../createAction';
import {
    ADD_TO_CART,
    GET_INITIAL_LIST,
    GET_PRODUCTS_SUCCES,
    UPDATE_BRAND,
    UPDATE_TAG,
} from './actionTypes';

export const updateTag = createAction(UPDATE_TAG);
export const updateBrand = createAction(UPDATE_BRAND);
export const getInitialList = createAction(GET_INITIAL_LIST);
export const setProducts = createAction(GET_PRODUCTS_SUCCES);
export const addToCart = createAction(ADD_TO_CART);