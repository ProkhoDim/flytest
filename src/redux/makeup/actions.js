import createAction from '../createAction';
import {
    GET_FILTERED_LIST_SUCCESS,
    GET_INITIAL_LIST,
    GET_INITIAL_LIST_SUCCESS,
    UPDATE_BRAND,
    UPDATE_TAG,
} from './actionTypes';

export const updateTag = createAction(UPDATE_TAG);
export const updateBrand = createAction(UPDATE_BRAND);
export const getInitialList = createAction(GET_INITIAL_LIST);
export const setInitialList = createAction(GET_INITIAL_LIST_SUCCESS);
export const setFilteredList = createAction(GET_FILTERED_LIST_SUCCESS);
