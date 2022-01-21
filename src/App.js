import React from 'react';

import axios from "axios"

import {Routes, Route} from "react-router-dom";

import css from "./App.module.css"
import Users from "./pages/Users/Users"
import Posts from "./pages/Posts/Posts"
import NotFound from "./pages/NotFound/NotFound"

const App = () => {
    return (
        <div>
          <div className={css.header}>
              <a href="/users"> Users</a>
              <a href="/posts"> Posts</a>

          </div>
            <Routes>
                <Route path={'/users'} element={<Users/>}/>
                <Route path={'/posts'} element={<Posts/>}/>
                <Route path={'*'} element={<NotFound/>}/>

            </Routes>
        </div>
    );
};

export default App;