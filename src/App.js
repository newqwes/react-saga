import React from 'react';
import PostForm from './components/PostForm';
import Posts from './components/Posts';

const App = () => {
  return (
    <div className='container pt-3'>
      <div className='row'>
        <h1 className='pb-3'>Redux Saga</h1>
        <div className='col pb-5'>
          <PostForm />
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <h2>Local</h2>
          <Posts />
        </div>
        <div className='col'>
          <h2>Fetch</h2>
          <Posts fetch />
        </div>
      </div>
    </div>
  );
};

export default App;
