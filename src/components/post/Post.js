import React from 'react';

const Post = (props) => {
    const{id,title,body}=props;
    return (
        <div>
            <h6>{id} {title} -- {body}</h6>
        </div>
    );
};

export default Post;