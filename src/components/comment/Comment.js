import React from 'react';

const Comment = (props) => {
    const{name,email,body}=props;
    return (
        <div>
<h5>{name} - {email}</h5>
            <h6>{body}</h6>
        </div>
    );
};

export default Comment;