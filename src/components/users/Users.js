import React, {useEffect, useState} from 'react';

import User from "../user/User";
import {userService} from "../services/user.service";




const Users = ({getUser}) => {
    const [users,setUsers]=useState([]);


    useEffect(()=>{
        userService.getAll()
            .then(value => setUsers(value))

    },[])



    return (
        <div>
           <div> {users.map(user => <User key={user.id} user={user} getUser={getUser}/>)} </div>

        </div>
    );
};

export default Users;
