import { takeEvery, all } from 'redux-saga/effects';

import { POST_GET_ALL } from '../types';
import { getAllPostsSaga } from './post';
export function* watchUsers() {
    yield all([
        takeEvery(POST_GET_ALL, getAllPostsSaga)
    ]);
}