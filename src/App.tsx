import React from 'react';
import { Route, Routes } from 'react-router-dom';

import style from './App.module.scss';
import PostsContainer from './components/PostsContainer/PostsContainer';

const App: React.FC = () => (
  <div className={style.app}>
    <div className={style.container}>
      <div className={style.appContent}>
        <div className={style.contentContainer}>
          <Routes>
            <Route path="/" element={<h1>Hello World!</h1>} />
            <Route path="/posts" element={<PostsContainer />} />
          </Routes>
        </div>
      </div>
    </div>
  </div>
);

export default App;
