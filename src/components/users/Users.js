import React from 'react';
import {useEffect, useState} from "react";

import User from "../user/User";
const Users = () => {

    const [users,setUsers] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(item =>item.json())
            .then(item =>setUsers(item))
    },[])

    return (
        <div>
            {users.map(item =><User key={item.id} id={item.id} name={item.name} surname={item.surname}/>)}
        </div>
    );
};

export default Users;