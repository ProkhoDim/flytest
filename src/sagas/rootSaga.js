import { all, takeEvery } from '@redux-saga/core/effects';
import { SearchActionTypes } from '../services';
import { searchWorker } from './serach/worker';

export default function* rootSaga() {
    yield all([takeEvery(SearchActionTypes.PRODUCT_NAME_INPUT, searchWorker)]);
}
