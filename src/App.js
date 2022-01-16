import React, {useEffect, useState} from 'react';

import './App.css'
import Users from "./components/users/Users";
import Form from "./components/forms/Form";
import {userService} from "./components/services/user.services";

const App = () => {

    const [users, setUsers] = useState([]);
    const [selectedUsers,setSelectedUsers]=useState([]);

    useEffect(() => {
        userService.getAll()
            .then(userArr =>{
                setUsers([...userArr])
                setSelectedUsers([...userArr])
            })

    }, [])

    const getFilter=(info)=>{
        let filterArr=[...users];
        if (info.name){
            filterArr = filterArr.filter(user=>user.name.toLowerCase()).includes(info.name.toLowerCase())
        }
        if (info.username){
            filterArr = filterArr.filter(user=>user.username.toLowerCase()).includes(info.username.toLowerCase())
        }
        if (info.email){
            filterArr = filterArr.filter(user=>user.email.toLowerCase()).includes(info.email.toLowerCase())
        }
        setSelectedUsers(filterArr)
    }

    return (
        <div>
            <Form getFilter={getFilter}/>
            <Users selectedUsers={selectedUsers}/>

        </div>
    );
};

export default App;