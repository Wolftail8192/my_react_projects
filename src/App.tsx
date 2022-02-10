import React, {FC} from 'react';

import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Outlet

} from "react-router-dom"
import {Home} from "./components/Home/home";
import {Movies} from './components/Movies/movies'

function App() {
    return(
        <div>
            <ul>
                <li>
                    <Link to={'/'}>HOME</Link>
                </li>
                <li>
                    <Link to={'/movies'}>Movies</Link>
                </li>
            </ul>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path={'/movies'} element={<Movies/>}/>

            </Routes>
        </div>
    );
}

export default App;