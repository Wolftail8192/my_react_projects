import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {postService} from "../../services/post.service";
import post from "../../Components/post/post";
import Post from "../../Components/post/post";


const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        postService.getAll().then(value => setPosts([...value]))
    },[])

    return (
        <div>
            <h1>Posts</h1>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;