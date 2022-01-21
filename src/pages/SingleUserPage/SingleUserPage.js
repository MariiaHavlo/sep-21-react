import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useParams} from "react-router-dom";

import {userService} from "../../services/user.service";
import css from "./singleUserPage.module.css";

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
                <div className={css.userDetails}>
                    <h3>Id:{user.id}</h3>
                    <h3>Name:{user.name}</h3>
                    <h3>Username:{user.username}</h3>
                    <h3>Email:{user.email}</h3>
                    <h3>Street:{user.address.street}</h3>
                    <h3>City:{user.address.city}</h3>
                    <h3>Phone:{user.phone}</h3>
                </div>
            )}
            <Link to={id.toString()} state={user}><button>Get User Posts</button></Link>
            <div><Outlet/></div>
        </div>
    );
};

export default SingleUserPage;