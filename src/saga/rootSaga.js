import { all, call } from 'redux-saga/effects';
import watchFetchPosts from './watchers/watchFetchPosts';

function* rootSaga() {
  yield all([call(watchFetchPosts)]);
}

export default rootSaga;
