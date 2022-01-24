import React from 'react';

import axios from "axios"

import {Routes, Route, Link, Navigate} from "react-router-dom";
import SinglePost from "./pages/SinglePost/SinglePost";

import Users from "./pages/Users/Users"
import Posts from "./pages/Posts/Posts"
import NotFound from "./pages/NotFound/NotFound"
import Layout from "./Components/Layout/Layout";

const App = () => {
    return (
        <div>

            <Routes>
                <Route path={'/'} element={<Layout/>}>

                    <Route path={'/users'} element={<Users/>}/>
                    <Route path={'/posts'} element={<Posts/>}>
                        <Route path={':id'} element={<SinglePost/>}/>
                    </Route>

                    <Route path={'*'} element={<NotFound/>}/>

                </Route>


            </Routes>
        </div>
    );
};

export default App;