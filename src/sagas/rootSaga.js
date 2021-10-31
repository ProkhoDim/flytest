import { all, takeEvery } from '@redux-saga/core/effects';
import { MakeupActionTypes, SearchActionTypes } from '../redux';
import { brandsWorker, initialProducts, tagsWorker } from './makeupSagas';
import { searchWorker } from './searchSagas';

export default function* rootSaga() {
    yield all([
        takeEvery(SearchActionTypes.PRODUCT_NAME_INPUT, searchWorker),
        takeEvery(MakeupActionTypes.UPDATE_TAG, tagsWorker),
        takeEvery(MakeupActionTypes.UPDATE_BRAND, brandsWorker),
        takeEvery(MakeupActionTypes.GET_INITIAL_LIST, initialProducts),
    ]);
}
