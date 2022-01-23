import React from 'react';

import axios from "axios"

import {Routes, Route, Link} from "react-rouLinker-dom";

import css from "./App.module.css"
import Users from "./pages/Users/Users"
import Posts from "./pages/Posts/Posts"
import NotFound from "./pages/NotFound/NotFound"

const App = () => {
    return (
        <div>
          <div className={css.header}>
              <Link to ="/users"> Users</Link>
              <Link to ="/posts"> Posts</Link>

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