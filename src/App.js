import React, {useState} from 'react';

import './App.css'
import Users from "./components/users/Users";
import UserDetails from "./components/userDetails/UserDetails";
import Posts from "./components/posts/Posts";
import css from './app.module.css';


const App = () => {


    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState(null);

    const getUser = (user) => {
        setUser(user)
        setUserId(null)
    }
    const getUserId=(id)=>{
        setUserId(id)
    }


    return (
        <div>
            <div className={css.wrap}>
                <Users getUser={getUser}/>
                {user && <UserDetails user={user} getUserId={getUserId}/>}
            </div>
            <div>
                {userId && <Posts userId={userId}/>}
            </div>


        </div>
    );
};

export default App;