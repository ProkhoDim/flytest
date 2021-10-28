import createSagaMiddleware from '@redux-saga/core';
import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import rootSaga from '../sagas/rootSaga';
import rootReducer from './rootReducer';

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export const WrappedComponent = Component => () => props =>
    (
        <Provider store={store}>
            <Component {...props} />
        </Provider>
    );
