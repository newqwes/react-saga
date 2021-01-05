import { SET_TEXT, FETCH_POSTS, GET_POSTS } from './types';

export const setText = (text) => ({ type: SET_TEXT, payload: text });
export const fetchPostsAC = (posts) => ({ type: FETCH_POSTS, payload: posts });
export const getPosts = () => ({ type: GET_POSTS });
