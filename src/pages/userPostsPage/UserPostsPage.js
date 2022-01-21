import React, {useEffect, useState} from 'react';
import { useParams} from "react-router-dom";

import {PostService} from "../../services/post.service";
import UserPost from "../../components/post/UserPost";
import css from "./userPostPage.module.css";

const UserPostsPage = () => {
    const {id}=useParams();
    console.log(useParams())
    const[posts,setPosts]=useState(null);

    useEffect(()=>{

        PostService.getById(id).then(value=>setPosts([...value]))
    },[id])
    return (
        <div className={css.userPosts}>
            {posts && posts.map(post=><UserPost key={post.id} post={post}/>)}
        </div>
    );
};

export default UserPostsPage;