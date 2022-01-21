import React from 'react';
import {Link} from "react-router-dom";

import css from "./post.module.css";

const Post = ({post}) => {
    const {id, title} = post;
    return (
        <div className={css.post}>
            <Link to={id.toString()} state={post}>{id}) {title}</Link>
        </div>
    );
};

export default Post;