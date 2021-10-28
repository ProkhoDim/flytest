import createAction from '../createAction';
import {
    DECREMENT,
    INCREMENT,
    INIT,
    SET_ISCOUNTER,
    UNSET_ISCOUNTER,
    UPDATE_COUNTER,
} from './actionTypes';

export const init = createAction(INIT);
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);
export const updateCounter = createAction(UPDATE_COUNTER);
export const setIsCounter = createAction(SET_ISCOUNTER);
export const unsetIsCounter = createAction(UNSET_ISCOUNTER);
