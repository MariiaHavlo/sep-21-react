import React from 'react';
import css from "./Layout.module.css";
import {Link,NavLink,Outlet} from "react-router-dom";



const Layout = () => {
    return (
        <div>
            <div className={css.header}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
            </div>
            <div>
                <Outlet/>
            </div>

        </div>
    );
};

export default Layout;