// @ts-check
import {combineReducers} from 'redux';
import {DECREMENT, INCREMENT, INIT, UPDATE_COUNTER} from './actionTypes';

const textReducer = (state = '', {type, payload}) => {
  switch (type) {
    case INIT:
      return 'Welcome!';

    default:
      return state;
  }
};

const counterReducer = (state = 0, {type, payload}) => {
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

const counterPayloadReducer = (state = 1, {type, payload}) => {
  switch (type) {
    case UPDATE_COUNTER:
      return payload;
    case INIT:
      return 1;
    default:
      return state;
  }
};

export default combineReducers({
  text: textReducer,
  counter: counterReducer,
  counterPayload: counterPayloadReducer,
});
