import React from 'react';

const Post = ({ post }) => {
  return (
    <div className='card  mb-3'>
      <div className='card-body'>{post.title}</div>
    </div>
  );
};

export default Post;
