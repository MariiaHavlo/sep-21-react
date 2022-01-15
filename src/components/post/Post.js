import React from 'react';

import css from './post.module.css';

const Post = ({post:{id,userId,title,body}}) => {
    return (
        <div className={css.wrap}>
            <div>Id:{id}</div>
            <div>Userid:{userId}</div>
            <div>Title:{title}</div>
            <div>Body:{body}</div>
        </div>
    );
};

export default Post;