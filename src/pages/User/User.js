import React from 'react';
import {Link} from "react-router-dom";

const User = ({user}) => {
    const {id} = user
    return (
        <div>
            <Link to ={id.toString()} state={user}> {user}</Link>
        </div>
    );
};

export default User;