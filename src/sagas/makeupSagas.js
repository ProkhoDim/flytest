// @ts-check
import { call, put } from '@redux-saga/core/effects';
import { MakeupActions } from '../redux';
import { makeupApi } from '../services/apiServices';

export function* tagsWorker({ type = '', payload }) {
    console.log(type, payload);
    yield fetchProducts({ tags: payload });
}

export function* brandsWorker({ type = '', payload }) {
    console.log(type, payload);
    yield fetchProducts({ brand: payload });
}
export function* initialProducts({ type = '' }) {
    console.log(type);
    yield fetchProducts();
}
export function* fetchProducts(filters = {}) {
    try {
        console.log('call');
        const response = yield call(
            [makeupApi, makeupApi.getProductsByFilter],
            filters
        );
        const data = yield call([response, response.json]);
        if (data.status > 300) throw new Error(data);
        yield put(MakeupActions.setProducts(data));
    } catch (error) {
        console.debug(error);
    }
}
