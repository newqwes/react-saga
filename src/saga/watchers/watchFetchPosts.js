import { takeEvery } from 'redux-saga/effects';
import { GET_POSTS } from '../../redux/types';
import workerFetchPosts from '../workers/workerFetchPosts';

function* watchFetchPosts() {
  yield takeEvery(GET_POSTS, workerFetchPosts);
}

export default watchFetchPosts;
