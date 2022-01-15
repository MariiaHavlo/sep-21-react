import React, {useEffect, useState} from 'react';

import {postService} from "../services/posts.service";
import Post from "../post/Post";

const Posts = ({userId}) => {
    const [posts,setPosts]=useState([]);

    useEffect(()=>{
        postService.getByUserId(userId)
            .then(value => setPosts(value))
    },[userId])
    return (
        <div>
            {posts.map(post=><Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;