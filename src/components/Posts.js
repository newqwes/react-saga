import React from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import { getPosts } from '../redux/actions';

const Posts = (props) => {
  let posts = props.posts;

  if (props.fetch) posts = props.serverPosts;

  if (!posts.length && props.fetch) {
    return (
      <button type='button' className='btn btn-primary' onClick={props.getPosts}>
        Get
      </button>
    );
  }

  return posts.map((post) => <Post post={post} key={post.id} />);
};

const mapStateToProps = (state) => ({
  posts: state.postsReducer.posts,
  serverPosts: state.postsReducer.serverPosts,
});

const mapDispatchToProps = {
  getPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
