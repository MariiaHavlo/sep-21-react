import React, {useEffect, useState} from 'react';
import Post from "../post/Post";

const Posts = () => {
    const[post,setPosts]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(item=>item.json())
            .then(item=>setPosts(item))
    },[])
    return (
        <div>
            {post.map(item=><Post key={item.id} id={item.id} title={item.title} body={item.body}/>)}
        </div>
    );
};

export default Posts;