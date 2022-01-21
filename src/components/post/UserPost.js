import React from 'react';

import css from "./userPost.module.css";

const UserPost = ({post}) => {
    const{id,userId,title,body}=post;
    return (
        <div className={css.userPost}>
            <h3>Id:{id}</h3>
            <h3>UserId:{userId}</h3>
            <h3>Title:{title}</h3>
            <h3>Body:{body}</h3>
        </div>
    );
};

export default UserPost;