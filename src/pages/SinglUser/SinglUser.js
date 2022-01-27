import React, {useEffect, useState} from 'react';

import {useLocation, useParams} from "react-router-dom";

import {userService} from "../../services/user.service";

const SingleUser = () => {
    const {id} = useParams();
    const [user, setUser] = useState(null);
    const {state} = useLocation();

    function useNavigate() {
        return undefined;
    }

    const navigate = useNavigate();


    useEffect(()=>{
        if (state){
            setUser(state)
            return
        }
        userService.getById(id).then(value => setUser({...value}))
    },[]);
    const UsersDetails = () => {
        navigate ('/users')
    }



    return (
        <div>
            {user && (
                <div>
                    <div>
                        <div>Id: {user.id}</div>
                        <div>UserId: {user.userId}</div>
                        <div>Title: {user.title}</div>
                        <div>Body:{user.body}</div>
                        <button onClick={UsersDetails}>UsersDetails</button>
                    </div>
                    <div> Comments</div>
                </div>


            )}
        </div>
    );
};

export default SingleUser;