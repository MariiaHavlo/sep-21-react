import React, {useEffect, useState} from 'react';

import User from "../user/user";
import {userService} from "../services/user.service";
import UserDetails from "../userDetails/UserDetails";



const Users = () => {
    const [users,setUsers]=useState([]);
    const [user,setUser]=useState(null);

    useEffect(()=>{
        userService.getAll()
            .then(value => setUsers(value))

    },[])

    const getUserId=(id)=>{
        userService.getId(id)
            .then(value => setUser(value))
    }

    return (
        <div>
           <div> {users.map(value => <User key={value.id} user={value} getUserId={getUserId}/>)} </div>

            <div>{user&&<UserDetails id={user.id} name={user.name} username={user.username} email={user.email}
                                     address={user.address.street} suite={user.address.suite} city={user.address.city}
                                     zipcode={user.address.zipcode} phone={user.phone} website={user.website}/>}</div>
        </div>
    );
};

export default Users;
