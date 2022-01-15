import React from 'react';

import css from './user.module.css';

const User = ({user,getUser}) => {
const{id,name,email}=user;
    return (
        <div className={css.wrap}>
           <div>{id}-{name}-{email}</div>
            <button className={css.btn} onClick={()=>getUser(user)}>Details</button>
        </div>
    );
};

export default User;