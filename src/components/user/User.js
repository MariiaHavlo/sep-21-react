import React from 'react';
import {Link} from "react-router-dom";

import css from "./user.module.css";

const User = ({user}) => {
    const {id,name,surname}=user;
    return (
        <>
            <div className={css.user}>
                <h3>
                    <Link to={id.toString()} state={user}>{name} {surname}</Link>
                </h3>

                    <Link to={`${id}/albums`} state={user}>
                        <button>Get Albums</button>
                    </Link>


            </div>
        </>

    );
};

export default User;