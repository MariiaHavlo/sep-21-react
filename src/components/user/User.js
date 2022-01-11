import React from 'react';

const User = (props) => {
    const{id,name,surname}=props;
    return (
        <div>
            <h3>{id}</h3>
            <h4>{name}</h4>
            <h3>{surname}</h3>
        </div>
    );
};

export default User;