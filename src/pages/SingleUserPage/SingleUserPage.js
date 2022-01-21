import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useParams} from "react-router-dom";
import {userService} from "../../services/user.service";

const SingleUserPage = () => {
    const{id}=useParams()
    const[user,setUser]=useState(null);
    const{state}=useLocation();

    useEffect(()=>{
        if (state){
            setUser(state)
            return
        }
        userService.getById(id).then(value => setUser({value}))
    },[])
    return (
        <div>
            {user &&(
                <div>
                    <div>Id:{user.id}</div>
                    <div>Name:{user.name}</div>
                    <div>Username:{user.username}</div>
                    <div>Email:{user.email}</div>
                    <div>Street:{user.address.street}</div>
                    <div>City:{user.address.city}</div>
                    <div>Phone:{user.phone}</div>
                </div>
            )}
            <Link to={id.toString()} state={user}><button>Get User Posts</button></Link>
            <div><Outlet/></div>
        </div>
    );
};

export default SingleUserPage;