import { SET_TEXT, FETCH_POSTS } from './types';

const initialState = {
  posts: [],
  serverPosts: [],
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TEXT:
      return {
        ...state,
        posts: [...state.posts, { id: Date.now(), title: action.payload }],
      };
    case FETCH_POSTS:
      return {
        ...state,
        serverPosts: action.payload,
      };
    default:
      return state;
  }
};
