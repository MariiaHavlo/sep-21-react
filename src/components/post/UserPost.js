import React from 'react';

const UserPost = ({post}) => {
    const{id,userId,title,body}=post;
    return (
        <div>
            <div>Id:{id}</div>
            <div>UserId:{userId}</div>
            <div>Title:{title}</div>
            <div>Body:{body}</div>
        </div>
    );
};

export default UserPost;