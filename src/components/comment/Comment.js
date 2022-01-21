import React from 'react';

const Comment = ({comment}) => {
    const {id, postId, name, email, body} = comment;
    return (
        <div>
            <div>Id:{id}</div>
            <div>Postid:{postId}</div>
            <div>Name:{name}</div>
            <div>Email:{email}</div>
            <div>Body:{body}</div>
        </div>
    );
};

export default Comment;