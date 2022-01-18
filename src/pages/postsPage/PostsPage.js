import React, {useEffect, useState} from 'react';
import {Outlet} from 'react-router-dom';

import {PostService} from "../../services/post.service";
import Post from "../../components/post/Post";
import css from "./Posts.module.css";

const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        PostService.getAll().then(value => setPosts([...value]))
    }, [])
    return (
        <div>
            <div className={css.postsInfo}>
                <div>
                    <h3>Posts</h3>
                    {posts.map(post => <Post key={post.id} post={post}/>)}
                </div>
                <div><Outlet/></div>
            </div>


        </div>
    );
};

export default PostsPage;