// @ts-check
import { combineReducers } from 'redux';
import {
    DECREMENT,
    INCREMENT,
    INIT,
    SET_ISCOUNTER,
    UNSET_ISCOUNTER,
    UPDATE_COUNTER,
} from './actionTypes';

const textReducer = (state = '', { type, payload }) => {
    switch (type) {
        case INIT:
            return 'Welcome!';

        default:
            return state;
    }
};

const counterReducer = (state = 0, { type, payload }) => {
    switch (type) {
        case INCREMENT:
            return state + payload;
        case DECREMENT:
            return state - payload;
        case INIT:
            return 0;
        default:
            return state;
    }
};

const counterPayloadReducer = (state = 1, { type, payload }) => {
    switch (type) {
        case UPDATE_COUNTER:
            return payload;
        case INIT:
            return 1;
        default:
            return state;
    }
};

const isCounterReducer = (state = false, { type, payload }) => {
    switch (type) {
        case SET_ISCOUNTER:
            return true;
        case UNSET_ISCOUNTER:
            return false;
        default:
            return state;
    }
};

export default combineReducers({
    text: textReducer,
    counter: counterReducer,
    counterPayload: counterPayloadReducer,
    isCounter: isCounterReducer,
});
