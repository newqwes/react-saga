import { SET_TEXT } from './types';

const initialState = {
  posts: [],
  fetchPosts: [],
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TEXT:
      return {
        ...state,
        posts: [...state.posts, { id: Date.now(), text: action.payload }],
      };
    default:
      return state;
  }
};
