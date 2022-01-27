import React from 'react';
import {Link, Outlet} from "react-router-dom";

const User = ({user}) => {
    const {id, name} = user
    return (
        <div>
            <Link to ={id.toString()} state={user}> {id} - {name}</Link>
            {/*<div><Outlet/></div>*/}
        </div>
    );
};

export default User;