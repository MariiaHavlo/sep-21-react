import React from 'react';

const UserDetails = ({user, getUserId}) => {
    let {id, name, username, email, address, phone, website} = user;
    return (
        <div>
            <div>
                <h4>{id}</h4>
                <h4>{name}</h4>
                <h4>{username}</h4>
                <h4>{email}</h4>
                <h6>{address.city}</h6>
                <h4>{phone}</h4>
                <h4>{website}</h4>
                <button onClick={() => getUserId(id)}>Posts</button>
            </div>
        </div>
    );
};

export default UserDetails;

