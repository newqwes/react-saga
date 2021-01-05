import { call, put } from 'redux-saga/effects';
import { fetchPostsAC } from '../../redux/actions';

function* workerFetchPosts() {
  const payload = yield call(fetchPosts);
  yield put(fetchPostsAC(payload));
}

async function fetchPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');

  return await response.json();
}

export default workerFetchPosts;
