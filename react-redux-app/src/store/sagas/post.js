import { reject } from "q";
import { put } from 'redux-saga/effects';

import * as actions from '../actions';
import http from '../../utils/config/http';
import { API_POSTS_ALL } from "../../utils/consts/api";

export function* getAllPostsSaga() {
    try {
        const resp = yield http.get(API_POSTS_ALL);
        // console.log(resp.data);
        yield put(actions.setAllPosts(resp.data));
    } catch (error) {
        reject(error);
    }
}