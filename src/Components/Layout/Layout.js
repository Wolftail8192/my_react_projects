import React from 'react';

import css from "./Layout.module.css"

import {Link, Outlet} from "react-router-dom";




const Layout = () => {
    return (
        <>

            <div className={css.header}>
                <Link to ="/users"> Users</Link>
                <Link to ="/posts"> Posts</Link>

            </div>

            <Outlet/>
        </>
    );
};

export default Layout;