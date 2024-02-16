import { call,put, takeEvery } from 'redux-saga/effects'
import {PostInterface} from "../interfaces/postInterface.ts";
import {errorOccured, getPosts} from "../slices/getSlice.ts";

function* workGetPostsFetch(){

    try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const posts = yield call(() => fetch('https://jsonplaceholder.typicode.com/posts'));
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const formattedPosts = yield posts.json();
        const formattedAndShortened: PostInterface = formattedPosts.slice(0, 10);
        yield put(getPosts(formattedAndShortened));

    }catch (e) {
        yield errorOccured();
    }
}

export function* getSaga() {
  yield takeEvery('get/getPostsFetch',workGetPostsFetch)
}