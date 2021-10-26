import { DECREMENT, INCREMENT, INIT, UPDATE_COUNTER } from './actionTypes';

const createAction = type => payload => ({type, payload});


export const init = createAction(INIT);
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);
export const updateCounter = createAction(UPDATE_COUNTER);
