// Core
import { takeEvery, all, call } from 'redux-saga/effects';
// Types
import { type } from '../types';
// Workers
import { fillPhotos } from './workers';

function* watcherFillPhotos() {
    console.log(`watcherFillPhotos -> ---------------- type.FETCH_PHOTOS_ASYNC-> `, type.FETCH_PHOTOS_ASYNC );
    yield takeEvery(type.FETCH_PHOTOS_ASYNC, fillPhotos);
}

export function* watcherPhotos () {
    console.log(`watcherPhotos -> -**********-> ` );
    yield all([
        call(watcherFillPhotos),
    ]);
}
