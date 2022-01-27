import React, {useEffect, useState} from 'react';
import {userService} from "../../services/user.service";
import User from "../User/User";
import {Outlet} from "react-router-dom";

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        userService.getAll().then(value=>setUsers([...value]))
    },[])

    return (
        <div>
            {users.map(user=><User key={user.id} user={user}/>)}
            <div><Outlet/></div>
        </div>

    );
};

export default Users;