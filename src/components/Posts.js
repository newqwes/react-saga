import React from 'react';
import { connect } from 'react-redux';
import Post from './Post';

const Posts = (props) => {
  let items = props.posts;

  if (props.fetch) items = props.fetchPosts;

  if (!items.length && props.fetch) {
    return (
      <button type='button' className='btn btn-primary'>
        Get
      </button>
    );
  }
  return items.map((post) => <Post post={post} key={post.id} />);
};

const mapStateToProps = (state) => ({
  posts: state.postsReducer.posts,
  fetchPosts: state.postsReducer.fetchPosts,
});

export default connect(mapStateToProps, null)(Posts);
