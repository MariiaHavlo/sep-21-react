import React from 'react';
import {Link} from "react-router-dom";

const User = ({user}) => {
    const {id,name,surname}=user;
    return (
        <div>
            <Link to={id.toString()} state={user}>{name} {surname}</Link>
        </div>
    );
};

export default User;