import React from 'react';

const User = ({user,getUser}) => {
const{id,name,email}=user;
    return (
        <div>
           <div>{id}-{name}-{email}</div>
            <button onClick={()=>getUser(user)}>Details</button>
        </div>
    );
};

export default User;