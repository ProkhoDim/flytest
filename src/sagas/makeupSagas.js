// @ts-check
import { call, put } from '@redux-saga/core/effects';
import { MakeupActions } from '../redux';
import { makeupApi } from '../services/apiServices';

export function* tagsWorker({ type, payload }) {
    console.log(type);
    try {
        console.log('call');
        const response = yield call(
            [makeupApi, makeupApi.getProductsByFilter],
            { tags: payload }
        );
        const data = yield call([response, response.json]);
        yield put(MakeupActions.setFilteredList(data));
        // console.log(data);
    } catch (error) {
        console.debug(error);
    }
}

export function* brandsWorker({ type, payload }) {
    console.log(payload);
}

export function* initialProducts({ type, payload }) {
    console.log(type);
    try {
        console.log('call2');
        const response = yield call([makeupApi, makeupApi.getInitialProducts]);
        const data = yield call([response, response.json]);
        yield put(MakeupActions.setInitialList(data));
    } catch (error) {
        console.error(error);
    }
}
