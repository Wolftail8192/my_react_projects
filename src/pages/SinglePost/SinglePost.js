import React, {useEffect, useState} from 'react';

import {useLocation, useParams} from "react-router-dom";

import {postService} from "../../services/post.service";

const SinglePost = () => {
    const {id} = useParams();
    const [post, setPost] = useState(null);
    const {state} = useLocation();

    function useNavigate() {
        return undefined;
    }

    const navigate = useNavigate();


    useEffect(()=>{
        if (state){
            setPost(state)
            return
        }
        postService.getById(id).then(value => setPost({...value}))
    },[]);
    const PostsDetails = () => {
      navigate ('/users')
    }



    return (
        <div>
            {post && (
                <div>
                    <div>
                        <div>Id: {post.id}</div>
                        <div>UserId: {post.userId}</div>
                        <div>Title: {post.title}</div>
                        <div>Body:{post.body}</div>
                        <button onClick={PostsDetails}>PostsDetails</button>
                    </div>
                    <div> Comments</div>
                </div>


            )}
        </div>
    );
};

export default SinglePost;