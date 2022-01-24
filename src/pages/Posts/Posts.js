import React, {useEffect, useState} from 'react';


import {Outlet} from "react-router-dom";
import {postService} from "../../services/post.service";

import Post from "../../Components/post/post";
import boxPost from "./posts.css"


const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        postService.getAll().then(value => setPosts([...value]))
    },[])

    return (
        <div className='boxPost'>
            <div className='boxPost_left'>
                <h1>Posts</h1>
                {posts.map(post => <Post key={post.id} post={post}/>)}
            </div>

            <div className='boxPost_right'> <Outlet/> </div>
        </div>
    );
};

export default Posts;