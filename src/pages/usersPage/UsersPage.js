import React, {useEffect, useState} from 'react';
import {NavLink, Outlet} from 'react-router-dom';

import {userService} from "../../services/user.service";
import User from "../../components/user/User";
import css from "./UsersPsge.module.css";

const UsersPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => setUsers([...value]))
    }, [])
    return (
        <div>
            <div className={css.userInfo}>
                <div>
                    <h3>Users</h3>
                    <div className={css.user}>
                        {users.map(user => <User key={user.id} user={user}/>)}


                    </div>

                </div>

                <div><Outlet/></div>
            </div>

        </div>
    );
};

export default UsersPage;